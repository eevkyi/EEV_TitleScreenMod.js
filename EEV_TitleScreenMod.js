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
 */

const EEV_Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
const EEV_Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
const EEV_Scene_Title_create = Scene_Title.prototype.create;

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

    const bitmap = new Bitmap(400, 96);
    const sprite = new Sprite(bitmap);
    sprite.bitmap.fontSize = 72;
    sprite.bitmap.drawText("Test Text", 0, 0, 400, 96, "center");
    sprite.x = 200;
    sprite.y = 200;
    this.addChild(sprite);
};
