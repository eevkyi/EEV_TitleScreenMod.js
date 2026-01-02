/*:
 * @target MV MZ
 *
 * @plugindesc Title Screen Modifications.
 * [v0.0.0] [MIT License] [Compatible with MV and MZ]
 *
 * @author eevkyi and contributors
 *
 * @url https://ko-fi.com/eevkyi
 *
 * @help
 * No settings available in the current version.
 *
 * ----------------------------------------------------------------------------
 * TODO v0.1.0:
 * - [Screen] Text with customizable size.
 * - [Menu] Quit option with customizable text.
 * - [Menu] External links with customizable text.
 * - [Menu] Customizable width and visible rows.
 *
 * ----------------------------------------------------------------------------
 * Releases:
 * - https://github.com/eevkyi/EEV_TitleScreenMod.js
 *
 * @param CustomTextList
 * @type struct<CustomText>[]
 * @text Custom Text
 *
 * @param LinkList
 * @type struct<Link>[]
 * @text Links
 *
 * @param TitleMenuSettings
 * @text Menu Settings
 * @type struct<MenuSettings>
 * @default {"relativeWidth":"30","visibleRows":"10","align":"center","relativeOffsetX":"0","relativeOffsetY":"0","quitEnabled":"true","quitLabel":"Quit"}
 */

/*~struct~CustomText:
 * @param text
 * @text Text
 * @type string
 * @desc The text that will be drawn.
 * @default Test Text
 *
 * @param fontSize
 * @text Font Size
 * @type number
 * @desc The size of the font.
 * @default 72
 *
 * @param maxWidth
 * @text Max Width
 * @type number
 * @desc The maximum allowed width of the text.
 * @default 400
 *
 * @param lineHeight
 * @text Line Height
 * @type number
 * @desc The height of the text line.
 * @default 96
 *
 * @param align
 * @text Align
 * @type select
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @option Left
 * @value left
 * @desc The alignment of the text.
 * @default center
 *
 * @param x
 * @text X Coordinate
 * @type number
 * @desc The x coordinate for the left of the text.
 * @default 200
 *
 * @param y
 * @text Y Coordinate
 * @type number
 * @desc The y coordinate for the top of the text.
 * @default 200
 */

/*~struct~Link:
 * @param label
 * @text Menu Text
 * @type string
 * @default Google
 *
 * @param url
 * @text URL
 * @type string
 * @default https://www.google.com/
 */

/*~struct~MenuSettings:
 * @param relativeWidth
 * @text Relative Width
 * @type number
 * @desc The relative width of the menu, based on window width percentage.
 * @default 30
 *
 * @param visibleRows
 * @text Visible Rows
 * @type number
 * @desc The number of visible rows in the menu.
 * @default 10
 *
 * @param align
 * @text Align
 * @type select
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @option Left
 * @value left
 * @desc The alignment of the menu items.
 * @default center
 *
 * @param relativeOffsetX
 * @text Relative X Coordinate Offset
 * @type number
 * @desc The relative x coordinate offset of the menu, based on window width percentage.
 * @default 0
 *
 * @param relativeOffsetY
 * @text Relative Y Coordinate Offset
 * @type number
 * @desc The relative y coordinate offset of the menu, based on window height percentage.
 * @default 0
 *
 * @param quitEnabled
 * @text Quit Enabled
 * @type boolean
 * @desc Enable quit option.
 * @default true
 *
 * @param quitLabel
 * @text Quit Label
 * @type string
 * @desc Quit option text.
 * @default Quit
 */

const EEV_Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
const EEV_Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
const EEV_Scene_Title_create = Scene_Title.prototype.create;
const EEV_Plugin_Parameters = PluginManager.parameters("EEV_TitleScreenMod");

var EEV = EEV || {};
EEV.CustomText = JSON.parse(EEV_Plugin_Parameters.CustomTextList || "[]");
EEV.Links = JSON.parse(EEV_Plugin_Parameters.LinkList || "[]");
EEV.MenuSettings = JSON.parse(EEV_Plugin_Parameters.TitleMenuSettings || "{}");


Window_TitleCommand.prototype.makeCommandList = function() {
    EEV_Window_TitleCommand_makeCommandList.call(this);

    EEV.Links.forEach((item, index) => {
        const attributes = JSON.parse(item);

        this.addCommand(attributes.label, `link_${index}`);
    });

    if (Utils.isNwjs() && EEV.MenuSettings.quitEnabled === "true") {
        this.addCommand(`${EEV.MenuSettings.quitLabel}`, "quitGame");
    }
};

Window_TitleCommand.prototype.itemTextAlign = function() {
    return `${EEV.MenuSettings.align}`;
};

Scene_Title.prototype.createCommandWindow = function() {
    EEV_Scene_Title_createCommandWindow.call(this);

    EEV.Links.forEach((item, index) => {
        const { url } = JSON.parse(item);

        this._commandWindow.setHandler(`link_${index}`, () => {
            const openLink = () => {
                if (Utils.isNwjs()) {
                    nw.Shell.openExternal(url);

                } else {
                    window.open(url, "_blank");
                }
            };

            setTimeout(openLink, 100);
            this._commandWindow.activate();
        });
    });


    if (Utils.isNwjs() && EEV.MenuSettings.quitEnabled === "true") {
        this._commandWindow.setHandler("quitGame", nw.App.closeAllWindows);
    }

    // Needed for compatibility.
    if (Utils.RPGMAKER_NAME === "MV") {
        const relativeWidth = EEV.MenuSettings.relativeWidth ?? 30;
        this._commandWindow.width = Graphics.boxWidth * relativeWidth / 100;
        const visibleRows = EEV.MenuSettings.visibleRows ?? 10;
        this._commandWindow.height = this._commandWindow.fittingHeight(Math.min(this._commandWindow.maxItems(), visibleRows));
        const relativeOffsetX = EEV.MenuSettings.relativeOffsetX ?? 0;
        const relativeOffsetY = EEV.MenuSettings.relativeOffsetY ?? 0;
        const defaultX = (Graphics.boxWidth - this._commandWindow.width) / 2;
        const defaultY = (Graphics.boxHeight - this._commandWindow.height) / 2;
        this._commandWindow.x = defaultX + (Graphics.boxWidth * relativeOffsetX / 100);
        this._commandWindow.y = defaultY + (Graphics.boxHeight * relativeOffsetY / 100);

        this._commandWindow.refresh();
        this._commandWindow.updateCursor();
    }
};

Scene_Title.prototype.commandWindowRect = function() {
    const relativeWidth = EEV.MenuSettings.relativeWidth ?? 30;
    const width = Graphics.boxWidth * relativeWidth / 100;

    // Hack to remove empty spaces.
    const menu = new Window_TitleCommand(new Rectangle(0, 0, width, 1));
    const visibleRows = EEV.MenuSettings.visibleRows ?? 10;
    const rows = Math.min(menu.maxItems(), visibleRows);
    const height = this.calcWindowHeight(rows, true);

    const relativeOffsetX = EEV.MenuSettings.relativeOffsetX ?? 0;
    const relativeOffsetY = EEV.MenuSettings.relativeOffsetY ?? 0;
    const defaultX = (Graphics.boxWidth - width) / 2;
    const defaultY = (Graphics.boxHeight - height) / 2;
    const x = defaultX + (Graphics.boxWidth * relativeOffsetX / 100);
    const y = defaultY + (Graphics.boxHeight * relativeOffsetY / 100);

    return new Rectangle(x, y, width, height);
};

Scene_Title.prototype.create = function() {
    EEV_Scene_Title_create.call(this);

    EEV.CustomText.forEach(item => {
        const settings = JSON.parse(item);

        const text = settings.text ?? "Test Text";
        const fontSize = settings.fontSize ?? 72;
        const maxWidth = settings.maxWidth ?? 400;
        const lineHeight = settings.lineHeight ?? 96;
        const align = settings.align ?? "center";
        const x = settings.x ?? 200;
        const y = settings.y ?? 200;

        const bitmap = new Bitmap(maxWidth, lineHeight);
        const sprite = new Sprite(bitmap);
        sprite.bitmap.fontSize = fontSize;
        sprite.bitmap.drawText(text, 0, 0, maxWidth, lineHeight, align);
        sprite.x = x;
        sprite.y = y;

        this.addChild(sprite);
    });
};
