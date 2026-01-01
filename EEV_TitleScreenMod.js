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

const EEV_Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
const EEV_Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
const EEV_Scene_Title_create = Scene_Title.prototype.create;
const EEV_Plugin_Parameters = PluginManager.parameters("EEV_TitleScreenMod");

var EEV = EEV || {};
EEV.CustomText = JSON.parse(EEV_Plugin_Parameters.CustomTextList || "[]");


Window_TitleCommand.prototype.makeCommandList = function() {
    EEV_Window_TitleCommand_makeCommandList.call(this);

    this.addCommand("Test Link", "testLink");

    this.addCommand("Quit", "quitGame");
};

Window_TitleCommand.prototype.itemTextAlign = function() {
    return "center";
};

Scene_Title.prototype.createCommandWindow = function() {
    EEV_Scene_Title_createCommandWindow.call(this);

    this._commandWindow.setHandler("testLink", () => {
        setTimeout(() => {
            nw.Shell.openExternal("https://github.com/eevkyi");

        }, 100);

        this._commandWindow.activate();
    });

    this._commandWindow.setHandler("quitGame", nw.App.closeAllWindows);

    // Needed for compatibility.
    if (Utils.RPGMAKER_NAME === "MV") {
        this._commandWindow.width = 300;
        this._commandWindow.height = this._commandWindow.fittingHeight(Math.min(this._commandWindow.maxItems(), 10));
        const offsetX = 0;
        const offsetY = 0;
        const defaultX = (Graphics.boxWidth - this._commandWindow.width) / 2;
        const defaultY = (Graphics.boxHeight - this._commandWindow.height) / 2;
        this._commandWindow.x = defaultX + offsetX;
        this._commandWindow.y = defaultY + offsetY;

        this._commandWindow.refresh();
        this._commandWindow.updateCursor();
    }
};

Scene_Title.prototype.commandWindowRect = function() {
    const width = 300;

    // Hack to remove empty spaces.
    const menu = new Window_TitleCommand(new Rectangle(0, 0, width, 1));
    const rows = Math.min(menu.maxItems(), 10);
    const height = this.calcWindowHeight(rows, true);

    const offsetX = 0;
    const offsetY = 0;
    const defaultX = (Graphics.boxWidth - width) / 2;
    const defaultY = (Graphics.boxHeight - height) / 2;
    const x = defaultX + offsetX;
    const y = defaultY + offsetY;

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
