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
 * Custom text and links can be added by double-clicking the respective
 * parameter and adding a new item to the list. Menu settings can also
 * be adjusted by double-clicking their parameter.
 *
 * Predefined values have been included for ease of use and testing.
 *
 * ----------------------------------------------------------------------------
 * TODO v0.2.0:
 * - [Screen] Custom images.
 * - [Screen] Extra settings for custom text.
 * - [Menu] Extra settings and custom option.
 *
 * CHANGELOG:
 * [v0.1.0]
 * - [Screen] Multiple custom text with customizable size, max width,
 * line height, align and position.
 * - [Menu] Multiple external links with customizable text.
 * - [Menu] Customizable width (relative), visible rows, align and
 * position (relative).
 * - [Menu] Quit option with customizable text (NW.js only).
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

/*:es
 * @target MV MZ
 *
 * @plugindesc Modificaciones de la pantalla de título.
 * [v0.0.0] [Licencia MIT] [Compatible con MV y MZ]
 *
 * @author eevkyi y colaboradores
 *
 * @url https://ko-fi.com/eevkyi
 *
 * @help
 * Se pueden agregar textos personalizados y enlaces haciendo doble clic
 * en el parámetro correspondiente y añadiendo un nuevo elemento a la lista.
 * La configuración del menú también puede ajustarse haciendo doble clic
 * en su parámetro.
 *
 * Se han incluido valores predefinidos para facilitar el uso y las pruebas.
 *
 * ----------------------------------------------------------------------------
 * TODO v0.2.0:
 * - [Pantalla] Imágenes personalizadas.
 * - [Pantalla] Ajustes adicionales para texto personalizado.
 * - [Menú] Ajustes adicionales y opción personalizada.
 *
 * HISTORIAL DE CAMBIOS:
 * [v0.1.0]
 * - [Pantalla] Múltiples textos personalizados con tamaño, ancho máximo,
 * altura de línea, alineación y posición configurables.
 * - [Menú] Múltiples enlaces externos con texto configurable.
 * - [Menú] Ancho configurable (relativo), filas visibles, alineación y
 * posición (relativa).
 * - [Menú] Opción de salir con texto configurable (solo NW.js).
 *
 * ----------------------------------------------------------------------------
 * Lanzamientos:
 * - https://github.com/eevkyi/EEV_TitleScreenMod.js
 *
 * @param CustomTextList
 * @type struct<CustomText>[]
 * @text Texto Personalizado
 *
 * @param LinkList
 * @type struct<Link>[]
 * @text Enlaces
 *
 * @param TitleMenuSettings
 * @text Configuración del Menú
 * @type struct<MenuSettings>
 * @default {"relativeWidth":"30","visibleRows":"10","align":"center","relativeOffsetX":"0","relativeOffsetY":"0","quitEnabled":"true","quitLabel":"Salir"}
 */

/*~struct~CustomText:es
 * @param text
 * @text Texto
 * @type string
 * @desc El texto que se mostrará.
 * @default Texto de Prueba
 *
 * @param fontSize
 * @text Tamaño de Fuente
 * @type number
 * @desc El tamaño de la fuente.
 * @default 72
 *
 * @param maxWidth
 * @text Ancho Máximo
 * @type number
 * @desc El ancho máximo permitido del texto.
 * @default 400
 *
 * @param lineHeight
 * @text Altura de Línea
 * @type number
 * @desc La altura de la línea del texto.
 * @default 96
 *
 * @param align
 * @text Alineación
 * @type select
 * @option Centro
 * @value center
 * @option Derecha
 * @value right
 * @option Izquierda
 * @value left
 * @desc La alineación del texto.
 * @default center
 *
 * @param x
 * @text Coordenada X
 * @type number
 * @desc La coordenada X del lado izquierdo del texto.
 * @default 200
 *
 * @param y
 * @text Coordenada Y
 * @type number
 * @desc La coordenada Y de la parte superior del texto.
 * @default 200
 */

/*~struct~Link:es
 * @param label
 * @text Texto del Menú
 * @type string
 * @default Google
 *
 * @param url
 * @text URL
 * @type string
 * @default https://www.google.com/
 */

/*~struct~MenuSettings:es
 * @param relativeWidth
 * @text Ancho Relativo
 * @type number
 * @desc El ancho relativo del menú, basado en el porcentaje del ancho de la ventana.
 * @default 30
 *
 * @param visibleRows
 * @text Filas Visibles
 * @type number
 * @desc El número de filas visibles en el menú.
 * @default 10
 *
 * @param align
 * @text Alineación
 * @type select
 * @option Centro
 * @value center
 * @option Derecha
 * @value right
 * @option Izquierda
 * @value left
 * @desc La alineación de los elementos del menú.
 * @default center
 *
 * @param relativeOffsetX
 * @text Desplazamiento Relativo X
 * @type number
 * @desc El desplazamiento relativo en X del menú, basado en el porcentaje del ancho de la ventana.
 * @default 0
 *
 * @param relativeOffsetY
 * @text Desplazamiento Relativo Y
 * @type number
 * @desc El desplazamiento relativo en Y del menú, basado en el porcentaje de la altura de la ventana.
 * @default 0
 *
 * @param quitEnabled
 * @text Salir Habilitado
 * @type boolean
 * @desc Habilitar la opción de salir.
 * @default true
 *
 * @param quitLabel
 * @text Etiqueta de Salir
 * @type string
 * @desc Texto de la opción salir.
 * @default Salir
 */

/*:pt-BR
 * @target MV MZ
 *
 * @plugindesc Modificações da Tela de Título.
 * [v0.0.0] [Licença MIT] [Compatível com MV e MZ]
 *
 * @author eevkyi e colaboradores
 *
 * @url https://ko-fi.com/eevkyi
 *
 * @help
 * Textos personalizados e links podem ser adicionados clicando duas vezes
 * no parâmetro correspondente e adicionando um novo item à lista.
 * As configurações do menu também podem ser ajustadas clicando duas vezes
 * em seu parâmetro.
 *
 * Valores predefinidos foram incluídos para facilitar o uso e os testes.
 *
 * ----------------------------------------------------------------------------
 * TODO v0.2.0:
 * - [Tela] Imagens personalizadas.
 * - [Tela] Configurações extras para texto personalizado.
 * - [Menu] Configurações extras e opção personalizada.
 *
 * HISTÓRICO DE ALTERAÇÕES:
 * [v0.1.0]
 * - [Tela] Múltiplos textos personalizados com tamanho, largura máxima,
 * altura da linha, alinhamento e posição configuráveis.
 * - [Menu] Múltiplos links externos com texto configurável.
 * - [Menu] Largura configurável (relativa), linhas visíveis, alinhamento e
 * posição (relativa).
 * - [Menu] Opção de sair com texto configurável (apenas NW.js).
 *
 * ----------------------------------------------------------------------------
 * Lançamentos:
 * - https://github.com/eevkyi/EEV_TitleScreenMod.js
 *
 * @param CustomTextList
 * @type struct<CustomText>[]
 * @text Texto Personalizado
 *
 * @param LinkList
 * @type struct<Link>[]
 * @text Links
 *
 * @param TitleMenuSettings
 * @text Configurações do Menu
 * @type struct<MenuSettings>
 * @default {"relativeWidth":"30","visibleRows":"10","align":"center","relativeOffsetX":"0","relativeOffsetY":"0","quitEnabled":"true","quitLabel":"Sair"}
 */

/*~struct~CustomText:pt-BR
 * @param text
 * @text Texto
 * @type string
 * @desc O texto que será desenhado.
 * @default Texto de Teste
 *
 * @param fontSize
 * @text Tamanho da Fonte
 * @type number
 * @desc O tamanho da fonte.
 * @default 72
 *
 * @param maxWidth
 * @text Largura Máxima
 * @type number
 * @desc A largura máxima permitida do texto.
 * @default 400
 *
 * @param lineHeight
 * @text Altura da Linha
 * @type number
 * @desc A altura da linha do texto.
 * @default 96
 *
 * @param align
 * @text Alinhamento
 * @type select
 * @option Centro
 * @value center
 * @option Direita
 * @value right
 * @option Esquerda
 * @value left
 * @desc O alinhamento do texto.
 * @default center
 *
 * @param x
 * @text Coordenada X
 * @type number
 * @desc A coordenada X do lado esquerdo do texto.
 * @default 200
 *
 * @param y
 * @text Coordenada Y
 * @type number
 * @desc A coordenada Y do topo do texto.
 * @default 200
 */

/*~struct~Link:pt-BR
 * @param label
 * @text Texto do Menu
 * @type string
 * @default Google
 *
 * @param url
 * @text URL
 * @type string
 * @default https://www.google.com/
 */

/*~struct~MenuSettings:pt-BR
 * @param relativeWidth
 * @text Largura Relativa
 * @type number
 * @desc A largura relativa do menu, baseada na porcentagem da largura da janela.
 * @default 30
 *
 * @param visibleRows
 * @text Linhas Visíveis
 * @type number
 * @desc O número de linhas visíveis no menu.
 * @default 10
 *
 * @param align
 * @text Alinhamento
 * @type select
 * @option Centro
 * @value center
 * @option Direita
 * @value right
 * @option Esquerda
 * @value left
 * @desc O alinhamento dos itens do menu.
 * @default center
 *
 * @param relativeOffsetX
 * @text Deslocamento Relativo X
 * @type number
 * @desc O deslocamento relativo em X do menu, baseado na porcentagem da largura da janela.
 * @default 0
 *
 * @param relativeOffsetY
 * @text Deslocamento Relativo Y
 * @type number
 * @desc O deslocamento relativo em Y do menu, baseado na porcentagem da altura da janela.
 * @default 0
 *
 * @param quitEnabled
 * @text Sair Ativado
 * @type boolean
 * @desc Ativar a opção de sair.
 * @default true
 *
 * @param quitLabel
 * @text Rótulo de Sair
 * @type string
 * @desc Texto da opção sair.
 * @default Sair
 */

(() => {
    'use strict';

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

})();
