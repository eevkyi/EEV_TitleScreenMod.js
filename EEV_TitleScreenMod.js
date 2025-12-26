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

Window_TitleCommand.prototype.makeCommandList = function() {
    EEV_Window_TitleCommand_makeCommandList.call(this);

    this.addCommand("Test Link", "testLink");

    this.addCommand("Quit", "quitGame");
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
};
