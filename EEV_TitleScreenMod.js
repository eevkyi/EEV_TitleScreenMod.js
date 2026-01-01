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

    // A hack to display the menu consistently, without empty spaces, in both MV and MZ.
    // Offset values will be fixed later.
    const offsetY = 0;
    this._commandWindow.height = this._commandWindow.fittingHeight(Math.min(this._commandWindow.maxItems(), 10));
    this._commandWindow.y = Graphics.boxHeight - this._commandWindow.height - (Graphics.boxHeight * 0.1) + offsetY;

    if (Utils.RPGMAKER_NAME !== "MZ") {
        const offsetX = 0;
        this._commandWindow.width = 300;
        this._commandWindow.x = (Graphics.boxWidth - this._commandWindow.width) / 2 + offsetX;

        this._commandWindow.refresh();
        this._commandWindow.updateCursor();
    }
};

Scene_Title.prototype.commandWindowRect = function() {

    const offsetX = $dataSystem.titleCommandWindow.offsetX;
    const offsetY = $dataSystem.titleCommandWindow.offsetY;
    const width = 300;
    const x = (Graphics.boxWidth - width) / 2 + offsetX;

    const height = this.calcWindowHeight(10, true);
    const y = Graphics.boxHeight - height - (Graphics.boxHeight * 0.1) + offsetY;

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
