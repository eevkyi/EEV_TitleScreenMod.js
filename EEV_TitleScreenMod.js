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

/*:it
 * @target MV MZ
 *
 * @plugindesc Modifiche alla Schermata del Titolo.
 * [v0.0.0] [Licenza MIT] [Compatibile con MV e MZ]
 *
 * @author eevkyi e collaboratori
 *
 * @url https://ko-fi.com/eevkyi
 *
 * @help
 * Testi personalizzati e link possono essere aggiunti facendo doppio clic
 * sul parametro corrispondente e aggiungendo un nuovo elemento alla lista.
 * Le impostazioni del menu possono essere modificate facendo doppio clic
 * sul relativo parametro.
 *
 * Sono stati inclusi valori predefiniti per facilitare l’uso e i test.
 *
 * ----------------------------------------------------------------------------
 * TODO v0.2.0:
 * - [Schermata] Immagini personalizzate.
 * - [Schermata] Impostazioni aggiuntive per il testo personalizzato.
 * - [Menu] Impostazioni aggiuntive e opzione personalizzata.
 *
 * REGISTRO DELLE MODIFICHE:
 * [v0.1.0]
 * - [Schermata] Testi personalizzati multipli con dimensione, larghezza massima,
 * altezza della riga, allineamento e posizione personalizzabili.
 * - [Menu] Link esterni multipli con testo personalizzabile.
 * - [Menu] Larghezza personalizzabile (relativa), righe visibili, allineamento e
 * posizione (relativa).
 * - [Menu] Opzione di uscita con testo personalizzabile (solo NW.js).
 *
 * ----------------------------------------------------------------------------
 * Rilasci:
 * - https://github.com/eevkyi/EEV_TitleScreenMod.js
 *
 * @param CustomTextList
 * @type struct<CustomText>[]
 * @text Testo Personalizzato
 *
 * @param LinkList
 * @type struct<Link>[]
 * @text Link
 *
 * @param TitleMenuSettings
 * @text Impostazioni del Menu
 * @type struct<MenuSettings>
 * @default {"relativeWidth":"30","visibleRows":"10","align":"center","relativeOffsetX":"0","relativeOffsetY":"0","quitEnabled":"true","quitLabel":"Esci"}
 */

/*~struct~CustomText:it
 * @param text
 * @text Testo
 * @type string
 * @desc Il testo che verrà disegnato.
 * @default Testo di Prova
 *
 * @param fontSize
 * @text Dimensione Carattere
 * @type number
 * @desc La dimensione del carattere.
 * @default 72
 *
 * @param maxWidth
 * @text Larghezza Massima
 * @type number
 * @desc La larghezza massima consentita del testo.
 * @default 400
 *
 * @param lineHeight
 * @text Altezza Riga
 * @type number
 * @desc L’altezza della riga di testo.
 * @default 96
 *
 * @param align
 * @text Allineamento
 * @type select
 * @option Centro
 * @value center
 * @option Destra
 * @value right
 * @option Sinistra
 * @value left
 * @desc L’allineamento del testo.
 * @default center
 *
 * @param x
 * @text Coordinata X
 * @type number
 * @desc La coordinata X per il lato sinistro del testo.
 * @default 200
 *
 * @param y
 * @text Coordinata Y
 * @type number
 * @desc La coordinata Y per la parte superiore del testo.
 * @default 200
 */

/*~struct~Link:it
 * @param label
 * @text Testo del Menu
 * @type string
 * @default Google
 *
 * @param url
 * @text URL
 * @type string
 * @default https://www.google.com/
 */

/*~struct~MenuSettings:it
 * @param relativeWidth
 * @text Larghezza Relativa
 * @type number
 * @desc La larghezza relativa del menu, basata sulla percentuale della larghezza della finestra.
 * @default 30
 *
 * @param visibleRows
 * @text Righe Visibili
 * @type number
 * @desc Il numero di righe visibili nel menu.
 * @default 10
 *
 * @param align
 * @text Allineamento
 * @type select
 * @option Centro
 * @value center
 * @option Destra
 * @value right
 * @option Sinistra
 * @value left
 * @desc L’allineamento degli elementi del menu.
 * @default center
 *
 * @param relativeOffsetX
 * @text Offset Relativo X
 * @type number
 * @desc L’offset relativo X del menu, basato sulla percentuale della larghezza della finestra.
 * @default 0
 *
 * @param relativeOffsetY
 * @text Offset Relativo Y
 * @type number
 * @desc L’offset relativo Y del menu, basato sulla percentuale dell’altezza della finestra.
 * @default 0
 *
 * @param quitEnabled
 * @text Uscita Abilitata
 * @type boolean
 * @desc Abilita l’opzione di uscita.
 * @default true
 *
 * @param quitLabel
 * @text Etichetta di Uscita
 * @type string
 * @desc Testo dell’opzione di uscita.
 * @default Esci
 */

/*:fr
 * @target MV MZ
 *
 * @plugindesc Modifications de l’écran titre.
 * [v0.0.0] [Licence MIT] [Compatible avec MV et MZ]
 *
 * @author eevkyi et contributeurs
 *
 * @url https://ko-fi.com/eevkyi
 *
 * @help
 * Des textes personnalisés et des liens peuvent être ajoutés en double-cliquant
 * sur le paramètre correspondant et en ajoutant un nouvel élément à la liste.
 * Les paramètres du menu peuvent également être ajustés en double-cliquant
 * sur leur paramètre.
 *
 * Des valeurs prédéfinies ont été incluses afin de faciliter l’utilisation et les tests.
 *
 * ----------------------------------------------------------------------------
 * TODO v0.2.0 :
 * - [Écran] Images personnalisées.
 * - [Écran] Paramètres supplémentaires pour le texte personnalisé.
 * - [Menu] Paramètres supplémentaires et option personnalisée.
 *
 * JOURNAL DES MODIFICATIONS :
 * [v0.1.0]
 * - [Écran] Plusieurs textes personnalisés avec taille, largeur maximale,
 * hauteur de ligne, alignement et position personnalisables.
 * - [Menu] Plusieurs liens externes avec texte personnalisable.
 * - [Menu] Largeur personnalisable (relative), lignes visibles, alignement et
 * position (relative).
 * - [Menu] Option quitter avec texte personnalisable (NW.js uniquement).
 *
 * ----------------------------------------------------------------------------
 * Versions :
 * - https://github.com/eevkyi/EEV_TitleScreenMod.js
 *
 * @param CustomTextList
 * @type struct<CustomText>[]
 * @text Texte Personnalisé
 *
 * @param LinkList
 * @type struct<Link>[]
 * @text Liens
 *
 * @param TitleMenuSettings
 * @text Paramètres du Menu
 * @type struct<MenuSettings>
 * @default {"relativeWidth":"30","visibleRows":"10","align":"center","relativeOffsetX":"0","relativeOffsetY":"0","quitEnabled":"true","quitLabel":"Quitter"}
 */

/*~struct~CustomText:fr
 * @param text
 * @text Texte
 * @type string
 * @desc Le texte qui sera affiché.
 * @default Texte de Test
 *
 * @param fontSize
 * @text Taille de la Police
 * @type number
 * @desc La taille de la police.
 * @default 72
 *
 * @param maxWidth
 * @text Largeur Maximale
 * @type number
 * @desc La largeur maximale autorisée du texte.
 * @default 400
 *
 * @param lineHeight
 * @text Hauteur de Ligne
 * @type number
 * @desc La hauteur de la ligne de texte.
 * @default 96
 *
 * @param align
 * @text Alignement
 * @type select
 * @option Centre
 * @value center
 * @option Droite
 * @value right
 * @option Gauche
 * @value left
 * @desc L’alignement du texte.
 * @default center
 *
 * @param x
 * @text Coordonnée X
 * @type number
 * @desc La coordonnée X du côté gauche du texte.
 * @default 200
 *
 * @param y
 * @text Coordonnée Y
 * @type number
 * @desc La coordonnée Y du haut du texte.
 * @default 200
 */

/*~struct~Link:fr
 * @param label
 * @text Texte du Menu
 * @type string
 * @default Google
 *
 * @param url
 * @text URL
 * @type string
 * @default https://www.google.com/
 */

/*~struct~MenuSettings:fr
 * @param relativeWidth
 * @text Largeur Relative
 * @type number
 * @desc La largeur relative du menu, basée sur le pourcentage de la largeur de la fenêtre.
 * @default 30
 *
 * @param visibleRows
 * @text Lignes Visibles
 * @type number
 * @desc Le nombre de lignes visibles dans le menu.
 * @default 10
 *
 * @param align
 * @text Alignement
 * @type select
 * @option Centre
 * @value center
 * @option Droite
 * @value right
 * @option Gauche
 * @value left
 * @desc L’alignement des éléments du menu.
 * @default center
 *
 * @param relativeOffsetX
 * @text Décalage Relatif X
 * @type number
 * @desc Le décalage relatif en X du menu, basé sur le pourcentage de la largeur de la fenêtre.
 * @default 0
 *
 * @param relativeOffsetY
 * @text Décalage Relatif Y
 * @type number
 * @desc Le décalage relatif en Y du menu, basé sur le pourcentage de la hauteur de la fenêtre.
 * @default 0
 *
 * @param quitEnabled
 * @text Quitter Activé
 * @type boolean
 * @desc Activer l’option quitter.
 * @default true
 *
 * @param quitLabel
 * @text Libellé Quitter
 * @type string
 * @desc Texte de l’option quitter.
 * @default Quitter
 */

/*:de
 * @target MV MZ
 *
 * @plugindesc Änderungen am Titelbildschirm.
 * [v0.0.0] [MIT-Lizenz] [Kompatibel mit MV und MZ]
 *
 * @author eevkyi und Mitwirkende
 *
 * @url https://ko-fi.com/eevkyi
 *
 * @help
 * Benutzerdefinierte Texte und Links können hinzugefügt werden, indem man
 * auf den entsprechenden Parameter doppelklickt und ein neues Element zur
 * Liste hinzufügt. Die Menüeinstellungen können ebenfalls angepasst werden,
 * indem man auf den jeweiligen Parameter doppelklickt.
 *
 * Vordefinierte Werte wurden zur Erleichterung der Nutzung und zum Testen
 * hinzugefügt.
 *
 * ----------------------------------------------------------------------------
 * TODO v0.2.0:
 * - [Bildschirm] Benutzerdefinierte Bilder.
 * - [Bildschirm] Zusätzliche Einstellungen für benutzerdefinierten Text.
 * - [Menü] Zusätzliche Einstellungen und benutzerdefinierte Option.
 *
 * ÄNDERUNGSPROTOKOLL:
 * [v0.1.0]
 * - [Bildschirm] Mehrere benutzerdefinierte Texte mit anpassbarer Größe,
 * maximaler Breite, Zeilenhöhe, Ausrichtung und Position.
 * - [Menü] Mehrere externe Links mit anpassbarem Text.
 * - [Menü] Anpassbare Breite (relativ), sichtbare Zeilen, Ausrichtung und
 * Position (relativ).
 * - [Menü] Beenden-Option mit anpassbarem Text (nur NW.js).
 *
 * ----------------------------------------------------------------------------
 * Veröffentlichungen:
 * - https://github.com/eevkyi/EEV_TitleScreenMod.js
 *
 * @param CustomTextList
 * @type struct<CustomText>[]
 * @text Benutzerdefinierter Text
 *
 * @param LinkList
 * @type struct<Link>[]
 * @text Links
 *
 * @param TitleMenuSettings
 * @text Menüeinstellungen
 * @type struct<MenuSettings>
 * @default {"relativeWidth":"30","visibleRows":"10","align":"center","relativeOffsetX":"0","relativeOffsetY":"0","quitEnabled":"true","quitLabel":"Beenden"}
 */

/*~struct~CustomText:de
 * @param text
 * @text Text
 * @type string
 * @desc Der Text, der angezeigt wird.
 * @default Testtext
 *
 * @param fontSize
 * @text Schriftgröße
 * @type number
 * @desc Die Größe der Schrift.
 * @default 72
 *
 * @param maxWidth
 * @text Maximale Breite
 * @type number
 * @desc Die maximal erlaubte Breite des Textes.
 * @default 400
 *
 * @param lineHeight
 * @text Zeilenhöhe
 * @type number
 * @desc Die Höhe der Textzeile.
 * @default 96
 *
 * @param align
 * @text Ausrichtung
 * @type select
 * @option Zentriert
 * @value center
 * @option Rechts
 * @value right
 * @option Links
 * @value left
 * @desc Die Ausrichtung des Textes.
 * @default center
 *
 * @param x
 * @text X-Koordinate
 * @type number
 * @desc Die X-Koordinate für die linke Seite des Textes.
 * @default 200
 *
 * @param y
 * @text Y-Koordinate
 * @type number
 * @desc Die Y-Koordinate für die obere Seite des Textes.
 * @default 200
 */

/*~struct~Link:de
 * @param label
 * @text Menütext
 * @type string
 * @default Google
 *
 * @param url
 * @text URL
 * @type string
 * @default https://www.google.com/
 */

/*~struct~MenuSettings:de
 * @param relativeWidth
 * @text Relative Breite
 * @type number
 * @desc Die relative Breite des Menüs, basierend auf dem Prozentsatz der Fensterbreite.
 * @default 30
 *
 * @param visibleRows
 * @text Sichtbare Zeilen
 * @type number
 * @desc Die Anzahl der sichtbaren Zeilen im Menü.
 * @default 10
 *
 * @param align
 * @text Ausrichtung
 * @type select
 * @option Zentriert
 * @value center
 * @option Rechts
 * @value right
 * @option Links
 * @value left
 * @desc Die Ausrichtung der Menüelemente.
 * @default center
 *
 * @param relativeOffsetX
 * @text Relativer X-Versatz
 * @type number
 * @desc Der relative X-Versatz des Menüs, basierend auf dem Prozentsatz der Fensterbreite.
 * @default 0
 *
 * @param relativeOffsetY
 * @text Relativer Y-Versatz
 * @type number
 * @desc Der relative Y-Versatz des Menüs, basierend auf dem Prozentsatz der Fensterhöhe.
 * @default 0
 *
 * @param quitEnabled
 * @text Beenden Aktiviert
 * @type boolean
 * @desc Aktiviert die Beenden-Option.
 * @default true
 *
 * @param quitLabel
 * @text Beenden-Beschriftung
 * @type string
 * @desc Text der Beenden-Option.
 * @default Beenden
 */

/*:ru
 * @target MV MZ
 *
 * @plugindesc Изменения экрана заголовка.
 * [v0.0.0] [Лицензия MIT] [Совместимо с MV и MZ]
 *
 * @author eevkyi и участники
 *
 * @url https://ko-fi.com/eevkyi
 *
 * @help
 * Пользовательский текст и ссылки можно добавить, дважды щёлкнув
 * по соответствующему параметру и добавив новый элемент в список.
 * Настройки меню также можно изменить, дважды щёлкнув по их параметру.
 *
 * Для удобства использования и тестирования были добавлены
 * предустановленные значения.
 *
 * ----------------------------------------------------------------------------
 * TODO v0.2.0:
 * - [Экран] Пользовательские изображения.
 * - [Экран] Дополнительные настройки для пользовательского текста.
 * - [Меню] Дополнительные настройки и пользовательская опция.
 *
 * ЖУРНАЛ ИЗМЕНЕНИЙ:
 * [v0.1.0]
 * - [Экран] Несколько пользовательских текстов с настраиваемым размером,
 * максимальной шириной, высотой строки, выравниванием и позицией.
 * - [Меню] Несколько внешних ссылок с настраиваемым текстом.
 * - [Меню] Настраиваемая ширина (относительная), видимые строки, выравнивание и
 * позиция (относительная).
 * - [Меню] Опция выхода с настраиваемым текстом (только NW.js).
 *
 * ----------------------------------------------------------------------------
 * Релизы:
 * - https://github.com/eevkyi/EEV_TitleScreenMod.js
 *
 * @param CustomTextList
 * @type struct<CustomText>[]
 * @text Пользовательский текст
 *
 * @param LinkList
 * @type struct<Link>[]
 * @text Ссылки
 *
 * @param TitleMenuSettings
 * @text Настройки меню
 * @type struct<MenuSettings>
 * @default {"relativeWidth":"30","visibleRows":"10","align":"center","relativeOffsetX":"0","relativeOffsetY":"0","quitEnabled":"true","quitLabel":"Выход"}
 */

/*~struct~CustomText:ru
 * @param text
 * @text Текст
 * @type string
 * @desc Текст, который будет отображён.
 * @default Тестовый текст
 *
 * @param fontSize
 * @text Размер шрифта
 * @type number
 * @desc Размер шрифта.
 * @default 72
 *
 * @param maxWidth
 * @text Максимальная ширина
 * @type number
 * @desc Максимально допустимая ширина текста.
 * @default 400
 *
 * @param lineHeight
 * @text Высота строки
 * @type number
 * @desc Высота строки текста.
 * @default 96
 *
 * @param align
 * @text Выравнивание
 * @type select
 * @option По центру
 * @value center
 * @option Справа
 * @value right
 * @option Слева
 * @value left
 * @desc Выравнивание текста.
 * @default center
 *
 * @param x
 * @text Координата X
 * @type number
 * @desc Координата X для левой стороны текста.
 * @default 200
 *
 * @param y
 * @text Координата Y
 * @type number
 * @desc Координата Y для верхней части текста.
 * @default 200
 */

/*~struct~Link:ru
 * @param label
 * @text Текст меню
 * @type string
 * @default Google
 *
 * @param url
 * @text URL
 * @type string
 * @default https://www.google.com/
 */

/*~struct~MenuSettings:ru
 * @param relativeWidth
 * @text Относительная ширина
 * @type number
 * @desc Относительная ширина меню, основанная на проценте ширины окна.
 * @default 30
 *
 * @param visibleRows
 * @text Видимые строки
 * @type number
 * @desc Количество видимых строк в меню.
 * @default 10
 *
 * @param align
 * @text Выравнивание
 * @type select
 * @option По центру
 * @value center
 * @option Справа
 * @value right
 * @option Слева
 * @value left
 * @desc Выравнивание элементов меню.
 * @default center
 *
 * @param relativeOffsetX
 * @text Относительное смещение X
 * @type number
 * @desc Относительное смещение по X меню, основанное на проценте ширины окна.
 * @default 0
 *
 * @param relativeOffsetY
 * @text Относительное смещение Y
 * @type number
 * @desc Относительное смещение по Y меню, основанное на проценте высоты окна.
 * @default 0
 *
 * @param quitEnabled
 * @text Выход включён
 * @type boolean
 * @desc Включить опцию выхода.
 * @default true
 *
 * @param quitLabel
 * @text Метка выхода
 * @type string
 * @desc Текст опции выхода.
 * @default Выход
 */

/*:ja
 * @target MV MZ
 *
 * @plugindesc タイトル画面のカスタマイズ。
 * [v0.0.0] [MITライセンス] [MV / MZ 対応]
 *
 * @author eevkyi および協力者
 *
 * @url https://ko-fi.com/eevkyi
 *
 * @help
 * カスタムテキストやリンクは、該当するパラメータを
 * ダブルクリックしてリストに新しい項目を追加することで設定できます。
 * メニュー設定も同様に、パラメータをダブルクリックして調整できます。
 *
 * 使いやすさとテストのため、あらかじめ初期値が設定されています。
 *
 * ----------------------------------------------------------------------------
 * TODO v0.2.0:
 * - [画面] カスタム画像。
 * - [画面] カスタムテキスト用の追加設定。
 * - [メニュー] 追加設定およびカスタムオプション。
 *
 * 変更履歴:
 * [v0.1.0]
 * - [画面] サイズ、最大幅、行の高さ、配置、位置を
 * カスタマイズ可能な複数のカスタムテキスト。
 * - [メニュー] テキストをカスタマイズ可能な複数の外部リンク。
 * - [メニュー] 幅（相対）、表示行数、配置、位置（相対）を
 * カスタマイズ可能。
 * - [メニュー] テキストをカスタマイズ可能な終了オプション
 * （NW.jsのみ）。
 *
 * ----------------------------------------------------------------------------
 * リリース:
 * - https://github.com/eevkyi/EEV_TitleScreenMod.js
 *
 * @param CustomTextList
 * @type struct<CustomText>[]
 * @text カスタムテキスト
 *
 * @param LinkList
 * @type struct<Link>[]
 * @text リンク
 *
 * @param TitleMenuSettings
 * @text メニュー設定
 * @type struct<MenuSettings>
 * @default {"relativeWidth":"30","visibleRows":"10","align":"center","relativeOffsetX":"0","relativeOffsetY":"0","quitEnabled":"true","quitLabel":"終了"}
 */

/*~struct~CustomText:ja
 * @param text
 * @text テキスト
 * @type string
 * @desc 表示されるテキストです。
 * @default テストテキスト
 *
 * @param fontSize
 * @text フォントサイズ
 * @type number
 * @desc フォントのサイズです。
 * @default 72
 *
 * @param maxWidth
 * @text 最大幅
 * @type number
 * @desc テキストの最大幅です。
 * @default 400
 *
 * @param lineHeight
 * @text 行の高さ
 * @type number
 * @desc テキスト行の高さです。
 * @default 96
 *
 * @param align
 * @text 配置
 * @type select
 * @option 中央
 * @value center
 * @option 右
 * @value right
 * @option 左
 * @value left
 * @desc テキストの配置方法です。
 * @default center
 *
 * @param x
 * @text X座標
 * @type number
 * @desc テキスト左端のX座標です。
 * @default 200
 *
 * @param y
 * @text Y座標
 * @type number
 * @desc テキスト上端のY座標です。
 * @default 200
 */

/*~struct~Link:ja
 * @param label
 * @text メニューテキスト
 * @type string
 * @default Google
 *
 * @param url
 * @text URL
 * @type string
 * @default https://www.google.com/
 */

/*~struct~MenuSettings:ja
 * @param relativeWidth
 * @text 相対幅
 * @type number
 * @desc ウィンドウ幅の割合に基づくメニューの相対幅です。
 * @default 30
 *
 * @param visibleRows
 * @text 表示行数
 * @type number
 * @desc メニューに表示される行数です。
 * @default 10
 *
 * @param align
 * @text 配置
 * @type select
 * @option 中央
 * @value center
 * @option 右
 * @value right
 * @option 左
 * @value left
 * @desc メニュー項目の配置方法です。
 * @default center
 *
 * @param relativeOffsetX
 * @text 相対Xオフセット
 * @type number
 * @desc ウィンドウ幅の割合に基づくメニューのX方向オフセットです。
 * @default 0
 *
 * @param relativeOffsetY
 * @text 相対Yオフセット
 * @type number
 * @desc ウィンドウ高さの割合に基づくメニューのY方向オフセットです。
 * @default 0
 *
 * @param quitEnabled
 * @text 終了を有効化
 * @type boolean
 * @desc 終了オプションを有効にします。
 * @default true
 *
 * @param quitLabel
 * @text 終了ラベル
 * @type string
 * @desc 終了オプションのテキストです。
 * @default 終了
 */

/*:ko
 * @target MV MZ
 *
 * @plugindesc 타이틀 화면 수정 기능.
 * [v0.0.0] [MIT 라이선스] [MV 및 MZ 호환]
 *
 * @author eevkyi 및 기여자
 *
 * @url https://ko-fi.com/eevkyi
 *
 * @help
 * 사용자 정의 텍스트와 링크는 해당 매개변수를
 * 더블 클릭하여 목록에 새 항목을 추가함으로써 설정할 수 있습니다.
 * 메뉴 설정 역시 매개변수를 더블 클릭하여 조정할 수 있습니다.
 *
 * 사용 편의성과 테스트를 위해 기본값이 미리 설정되어 있습니다.
 *
 * ----------------------------------------------------------------------------
 * TODO v0.2.0:
 * - [화면] 사용자 정의 이미지.
 * - [화면] 사용자 정의 텍스트에 대한 추가 설정.
 * - [메뉴] 추가 설정 및 사용자 정의 옵션.
 *
 * 변경 로그:
 * [v0.1.0]
 * - [화면] 크기, 최대 너비, 줄 높이, 정렬 및 위치를
 * 사용자 정의할 수 있는 여러 사용자 정의 텍스트.
 * - [메뉴] 텍스트를 사용자 정의할 수 있는 여러 외부 링크.
 * - [메뉴] 너비(상대값), 표시 행 수, 정렬 및
 * 위치(상대값) 설정 가능.
 * - [메뉴] 텍스트를 사용자 정의할 수 있는 종료 옵션
 * (NW.js 전용).
 *
 * ----------------------------------------------------------------------------
 * 릴리스:
 * - https://github.com/eevkyi/EEV_TitleScreenMod.js
 *
 * @param CustomTextList
 * @type struct<CustomText>[]
 * @text 사용자 정의 텍스트
 *
 * @param LinkList
 * @type struct<Link>[]
 * @text 링크
 *
 * @param TitleMenuSettings
 * @text 메뉴 설정
 * @type struct<MenuSettings>
 * @default {"relativeWidth":"30","visibleRows":"10","align":"center","relativeOffsetX":"0","relativeOffsetY":"0","quitEnabled":"true","quitLabel":"종료"}
 */

/*~struct~CustomText:ko
 * @param text
 * @text 텍스트
 * @type string
 * @desc 화면에 표시될 텍스트입니다.
 * @default 테스트 텍스트
 *
 * @param fontSize
 * @text 글꼴 크기
 * @type number
 * @desc 글꼴의 크기입니다.
 * @default 72
 *
 * @param maxWidth
 * @text 최대 너비
 * @type number
 * @desc 텍스트의 최대 허용 너비입니다.
 * @default 400
 *
 * @param lineHeight
 * @text 줄 높이
 * @type number
 * @desc 텍스트 줄의 높이입니다.
 * @default 96
 *
 * @param align
 * @text 정렬
 * @type select
 * @option 가운데
 * @value center
 * @option 오른쪽
 * @value right
 * @option 왼쪽
 * @value left
 * @desc 텍스트의 정렬 방식입니다.
 * @default center
 *
 * @param x
 * @text X 좌표
 * @type number
 * @desc 텍스트 왼쪽 기준의 X 좌표입니다.
 * @default 200
 *
 * @param y
 * @text Y 좌표
 * @type number
 * @desc 텍스트 상단 기준의 Y 좌표입니다.
 * @default 200
 */

/*~struct~Link:ko
 * @param label
 * @text 메뉴 텍스트
 * @type string
 * @default Google
 *
 * @param url
 * @text URL
 * @type string
 * @default https://www.google.com/
 */

/*~struct~MenuSettings:ko
 * @param relativeWidth
 * @text 상대 너비
 * @type number
 * @desc 창 너비 비율을 기준으로 한 메뉴의 상대 너비입니다.
 * @default 30
 *
 * @param visibleRows
 * @text 표시 행 수
 * @type number
 * @desc 메뉴에 표시될 행의 수입니다.
 * @default 10
 *
 * @param align
 * @text 정렬
 * @type select
 * @option 가운데
 * @value center
 * @option 오른쪽
 * @value right
 * @option 왼쪽
 * @value left
 * @desc 메뉴 항목의 정렬 방식입니다.
 * @default center
 *
 * @param relativeOffsetX
 * @text 상대 X 오프셋
 * @type number
 * @desc 창 너비 비율을 기준으로 한 메뉴의 X 방향 오프셋입니다.
 * @default 0
 *
 * @param relativeOffsetY
 * @text 상대 Y 오프셋
 * @type number
 * @desc 창 높이 비율을 기준으로 한 메뉴의 Y 방향 오프셋입니다.
 * @default 0
 *
 * @param quitEnabled
 * @text 종료 활성화
 * @type boolean
 * @desc 종료 옵션을 활성화합니다.
 * @default true
 *
 * @param quitLabel
 * @text 종료 라벨
 * @type string
 * @desc 종료 옵션에 표시될 텍스트입니다.
 * @default 종료
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
