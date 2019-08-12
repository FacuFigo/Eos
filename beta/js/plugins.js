// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.31 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"-------------------------","status":true,"description":"--------------------------------------------------","parameters":{}},
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"EnemyBook","status":true,"description":"Displays detailed statuses of enemies.","parameters":{"Unknown Data":" "}},
{"name":"ItemBook","status":true,"description":"Displays detailed statuses of items.","parameters":{"Unknown Data":"??????","Price Text":"Price","Equip Text":"Equip","Type Text":"Type"}},
{"name":"-------------------------","status":true,"description":"--------------------------------------------------","parameters":{}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.50 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_ActSeqPack1","status":true,"description":"v1.13 (Requires YEP_BattleEngineCore.js) Basic functions are\nadded to the Battle Engine Core's action sequences.","parameters":{"Default Volume":"90","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ActSeqPack2","status":true,"description":"v1.12 (Requires YEP_BattleEngineCore.js) Visual functions\nare added to the Battle Engine Core's action sequences.","parameters":{}},
{"name":"YEP_X_ActSeqPack3","status":true,"description":"v1.05 (Requires YEP_BattleEngineCore.js) Camera control is\nadded to the Battle Engine Core's action sequences.","parameters":{"Camera Option":"Battle Camera"}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.20 (Requires YEP_BattleEngineCore.js) This plugin lets\nyou use Animated Sideview Actors for enemies!","parameters":{"---General---":"","Anchor X":"0.5","Anchor Y":"1.0","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","Show State Overlay":"true","---Shadows---":"","Show Shadow":"false","Shadow Scale X":"auto","Shadow Scale Y":"auto","---Breathing---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.020","HP Link Breathing":"false","---Floating---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","Floating Death":"true","---Motions---":"","Attack Motion":"thrust","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---Weapons---":"","Weapon Image Index":"0","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"YEP_VictoryAftermath","status":true,"description":"v1.07 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"Battle Results","Battle Drops Text":"Battle Spoils","---EXP Window---":"","Font Size":"28","Level Up Text":"LEVEL UP!","Max Level Text":"MAX LEVEL","Show Skills Learned":"false","Gained EXP Text":"Gained EXP","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YEP_BuffsStatesCore","status":true,"description":"v1.16 Alter the basic mechanics behind buffs and states\nthat aren't adjustable within the RPG Maker editor.","parameters":{"---Turn Indicator---":"","Show Turns":"true","Font Size":"16","Turn Alignment":"right","Turn Buffer X":"-3","Turn Buffer Y":"-6","State Color":"0","Buff Color":"24","Debuff Color":"2","---Enemy Icons---":"","Show Enemy Icons":"true","Enemy Buff Turn":"true","Enemy State Turn":"true","Enemy State Counter":"true","---Buff Settings---":"","Default Limit":"4","Maximum Limit":"8","Buff Formula":"this._buffs[paramId] * 0.25 + 1.0","Show Buff Rate":"false","---State Settings---":"","Reapply Rules":"1","Show Enemy Turns":"true","---Counter Settings---":"","Counter Font Size":"16","Counter Alignment":"center","Counter Buffer X":"0","Counter Buffer Y":"8","Counter Color":"0"}},
{"name":"YEP_X_VisualStateFX","status":true,"description":"v1.02 (Req YEP_BattleEngineCore & YEP_BuffsStatesCore) Adds\nvisual effects to your states.","parameters":{"---Actors---":"","Actor State Overlay":"true","Actor State Icons":"true","Actor State Animation":"true","---Enemies---":"","Enemy State Overlay":"true","Enemy State Icons":"true","Enemy State Animation":"true","---Animation Settings---":"","Allow Target Flash":"true","Allow Screen Flash":"false","Allow Hide Target":"false","Allow Sound":"false"}},
{"name":"YEP_X_BattleSysCTB","status":true,"description":"v1.17 (Requires YEP_BattleEngineCore.js) Add CTB (Charge\nTurn Battle) into your game using this plugin!","parameters":{"---CTB Settings---":"","Per Tick":"user.agi","Initial Speed":"0","Full Gauge":"Math.max(7000, BattleManager.highestBaseAgi() * 120)","Pre-Emptive Bonuses":"0.8","Surprise Bonuses":"0.8","---Escape---":"","Escape Ratio":"0.125 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.025","---Turn---":"","Full Turn":"Math.min(200, BattleManager.lowestBaseAgi() * 8)","---Rubberband---":"","Enable Rubberband":"true","Minimum Speed":"0.5 * BattleManager.highestBaseAgi()","Maximum Speed":"1.5 * BattleManager.highestBaseAgi()","---Sound---":"","Ready Sound":"Decision1","Ready Volume":"90","Ready Pitch":"120","Ready Pan":"0","---Turn Order---":"","Show Turn Order":"true","Icon Size":"32","Position Y":"54","Position X":"right","Turn Direction":"left","Ally Border Color":"4","Ally Back Color":"22","Ally Icon":"0","Enemy Border Color":"2","Enemy Back Color":"19","Enemy Icon":"0","Enemy SV Battlers":"false"}},
{"name":"-------------------------","status":true,"description":"--------------------------------------------------","parameters":{}},
{"name":"YEP_AutoPassiveStates","status":true,"description":"v1.17 This plugin allows for some states to function as\npassives for actors, enemies, skills, and equips.","parameters":{"---Basic---":"","Actor Passives":"0","Enemy Passives":"0","Global Passives":"0","---List---":"...Requires RPG Maker MV 1.5.0+...","Actor Passives List":"[]","Enemy Passives List":"[]","Global Passives List":"[]"}},
{"name":"YEP_X_PassiveAuras","status":true,"description":"v1.08 (Requires YEP_AutoPassiveStates.js) Add aura effects\nto various database objects.","parameters":{}},
{"name":"-------------------------","status":true,"description":"--------------------------------------------------","parameters":{}},
{"name":"YEP_SkillCore","status":true,"description":"v1.13 Skills are now given more functions and the ability\r\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_X_SkillCooldowns","status":true,"description":"v1.12 (Requires YEP_SkillCore.js) Cooldowns can be applied\nto skills to prevent them from being used continuously.","parameters":{"---Cooldown---":"","Cooldown Format":"%1CD","Cooldown Font Size":"20","Cooldown Text Color":"6","Cooldown Icon":"75","Cooldown After Battle":"-10","Cooldown Steps":"5","Cooldown Bypass":"1 2 3 4 5 6 7","Cooldown Bypass List":"[]","---Warmup---":"","Warmup Format":"%1WU","Warmup Font Size":"20","Warmup Text Color":"4","Warmup Icon":"75","---Battle Core---":"","Time Based":"false","Turn Time":"100"}},
{"name":"YEP_EquipCore","status":true,"description":"v1.18 Allows for the equipment system to be more flexible to\nallow for unique equipment slots per class.","parameters":{"---General---":"","Text Align":"center","Finish Command":"Finish","Remove Text":"Remove","Remove Icon":"16","Empty Text":"<Empty>","Empty Icon":"16","---Rules---":"","Non-Removable Types":"1","Non-Optimized Types":"5"}},
{"name":"YEP_DamageCore","status":true,"description":"v1.08 Expand the control you have over the game's damage\ncalculation with more features and effects.","parameters":{"---Damage Cap---":"","Enable Cap":"true","Maximum Damage":"9999","Maximum Healing":"9999","---Damage Steps---":"","Damage Step 1":"baseDamage = this.modifyBaseDamage(value, baseDamage, target);","Damage Step 2":"baseDamage *= this.calcElementRate(target);","Damage Step 3":"","Damage Step 4":"","Damage Step 5":"","Damage Step 6":"critical = this.modifyCritical(critical, baseDamage, target);","Damage Step 7":"target.result().critical = critical;","Damage Step 8":"value = baseDamage;","Damage Step 9":"","Damage Step 10":"if (baseDamage > 0) {","Damage Step 11":"value = this.applyDamageRate(value, baseDamage, target);","Damage Step 12":"","Damage Step 13":"","Damage Step 14":"","Damage Step 15":"","Damage Step 16":"","Damage Step 17":"","Damage Step 18":"}","Damage Step 19":"","Damage Step 20":"if (baseDamage < 0) {","Damage Step 21":"value = this.applyHealRate(value, baseDamage, target);","Damage Step 22":"","Damage Step 23":"","Damage Step 24":"","Damage Step 25":"","Damage Step 26":"","Damage Step 27":"","Damage Step 28":"}","Damage Step 29":"","Damage Step 30":"if (critical) {","Damage Step 31":"value = this.applyCriticalRate(value, baseDamage, target);","Damage Step 32":"","Damage Step 33":"","Damage Step 34":"","Damage Step 35":"","Damage Step 36":"","Damage Step 37":"","Damage Step 38":"}","Damage Step 39":"","Damage Step 40":"if (this.isPhysical()) {","Damage Step 41":"value = this.applyPhysicalRate(value, baseDamage, target);","Damage Step 42":"","Damage Step 43":"","Damage Step 44":"","Damage Step 45":"","Damage Step 46":"","Damage Step 47":"value = this.applyFlatPhysical(value, baseDamage, target);","Damage Step 48":"}","Damage Step 49":"","Damage Step 50":"if (this.isMagical()) {","Damage Step 51":"value = this.applyMagicalRate(value, baseDamage, target);","Damage Step 52":"","Damage Step 53":"","Damage Step 54":"","Damage Step 55":"","Damage Step 56":"","Damage Step 57":"value = this.applyFlatMagical(value, baseDamage, target);","Damage Step 58":"}","Damage Step 59":"","Damage Step 60":"if (baseDamage > 0) {","Damage Step 61":"value = this.applyFlatDamage(value, baseDamage, target);","Damage Step 62":"","Damage Step 63":"","Damage Step 64":"","Damage Step 65":"","Damage Step 66":"","Damage Step 67":"","Damage Step 68":"}","Damage Step 69":"","Damage Step 70":"if (baseDamage < 0) {","Damage Step 71":"value = this.applyFlatHeal(value, baseDamage, target);","Damage Step 72":"","Damage Step 73":"","Damage Step 74":"","Damage Step 75":"","Damage Step 76":"","Damage Step 77":"","Damage Step 78":"}","Damage Step 79":"","Damage Step 80":"if (critical) {","Damage Step 81":"value = this.applyFlatCritical(value, baseDamage, target);","Damage Step 82":"","Damage Step 83":"","Damage Step 84":"","Damage Step 85":"","Damage Step 86":"","Damage Step 87":"","Damage Step 88":"}","Damage Step 89":"","Damage Step 90":"value = this.applyVariance(value, item.damage.variance);","Damage Step 91":"","Damage Step 92":"","Damage Step 93":"","Damage Step 94":"","Damage Step 95":"value = this.applyGuard(value, target);","Damage Step 96":"","Damage Step 97":"","Damage Step 98":"","Damage Step 99":"value = this.applyFlatGlobal(value, baseDamage, target);","Damage Step 100":"value = this.applyMinimumDamage(value, baseDamage, target);"}},
{"name":"YEP_ClassChangeCore","status":true,"description":"v1.13 This plugin creates a system where your player\ncan change classes through the main menu.","parameters":{"---General---":"","Class Command":"Class","Auto Add Menu":"false","Show Command":"true","Enable Command":"true","Auto Place Command":"true","Default Icon":"78","Maintain Levels":"false","Unlocked Classes":"1 2 3 4","---Command Window---":"","Class Change Command":"Class","Show Class Change":"true","Enable Class Change":"true","Show Skill Learn":"true","Finish Command":"Finish","Text Alignment":"center","---Window Settings---":"","Current Class Color":"17","Class Level Format":"LV%1","Class Level Font Size":"20"}},
{"name":"YEP_ItemCore","status":true,"description":"v1.30 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_AbsorptionBarrier","status":true,"description":"v1.08 Battlers can be surrounded by an absorption barrier\nthat would mitigate damage dealt to HP.","parameters":{"Barrier State":"0","Barrier Color 1":"13","Barrier Color 2":"5","Barrier Animation":"0","Break Animation":"0","Barrier Popup":"255, 0, 255, 160","Display 0 HP Damage":"false","Clear Per Battle":"true","Clear on Death":"true","Default Penetration Rate":"0","Default Penetration Flat":"0"}},
{"name":"YEP_EnemyLevels","status":true,"description":"v1.09 This plugin enables giving your enemies levels and\nparameter changes with those levels.","parameters":{"---General---":"","Show Level":"true","Level Format":"Lv%1 %2","Minimum Level":"1","Maximum Level":"9999","Maximum Cap":"9999","Preserve Rate":"true","---Level Setup---":"","Default Type":"5","Positive Fluctuation":"2","Negative Fluctuation":"2","---MaxHP Growth---":"","MaxHP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MaxHP Rate Growth":"0.15","MaxHP Flat Growth":"50.0","---MaxMP Growth---":"","MaxMP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MaxMP Rate Growth":"0.10","MaxMP Flat Growth":"10.0","---ATK Growth---":"","ATK Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","ATK Rate Growth":"0.05","ATK Flat Growth":"2.5","---DEF Growth---":"","DEF Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","DEF Rate Growth":"0.05","DEF Flat Growth":"2.5","---MAT Growth---":"","MAT Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MAT Rate Growth":"0.05","MAT Flat Growth":"2.5","---MDF Growth---":"","MDF Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MDF Rate Growth":"0.05","MDF Flat Growth":"2.5","---AGI Growth---":"","AGI Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","AGI Rate Growth":"0.05","AGI Flat Growth":"2.5","---LUK Growth---":"","LUK Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","LUK Rate Growth":"0.05","LUK Flat Growth":"2.5","---EXP Growth---":"","EXP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","EXP Rate Growth":"0.15","EXP Flat Growth":"10.0","---Gold Growth---":"","Gold Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","Gold Rate Growth":"0.15","Gold Flat Growth":"10.0"}},
{"name":"YEP_LifeSteal","status":true,"description":"v1.04 Enables passive life steal traits without them being\nactive abilities but instead as passive traits.","parameters":{"Enable HP Overheal":"true","Enable MP Overheal":"false","Negative HP LifeSteal":"false","Negative MP LifeSteal":"false"}},
{"name":"AP_StatDistribution","status":true,"description":"v1.07 Allows the player to raise stats with points.","parameters":{"--- General ---":"","Initial Points":"0","Level-Up Points":"3","Maximum Points":"99","Help Window Text":"\"Raises \" + param + \" by \" + amount + \". Requires \" + points + \" points to perform.\"","Return Text":"Exits the Stat Distribution window.","Show Menu Switch":"0","Enable Menu Switch":"0","Stat Distribution Text":"Stat Distribution","Command Window Alignment":"left","Show Message":"false","Level-Up Message":"actor + \" gained \" + points + \"!\"","Confirmation Window":"false","Confirmation Window Text":"\"Are you sure that you want to increase this param?\"","Level-Up Transfer Scene":"false","--- Vocabulary ---":"","Points Vocabulary":"Distribution Points","HP Vocabulary":"HP","MP Vocabulary":"MP","ATK Vocabulary":"ATK","DEF Vocabulary":"DEF","MAT Vocabulary":"MAT","MDF Vocabulary":"MDF","AGI Vocabulary":"AGI","LUK Vocabulary":"LUK","Return Vocabulary":"Finish","Yes Vocabulary":"Yes","No Vocabulary":"No","--- Caps ---":"","Cap HP":"false","Cap MP":"false","Cap ATK":"false","Cap DEF":"false","Cap MAT":"false","Cap MDF":"false","Cap AGI":"false","Cap LUK":"false","Cap Value HP":"9999","Cap Value MP":"9999","Cap Value ATK":"999","Cap Value DEF":"999","Cap Value MAT":"999","Cap Value MDF":"999","Cap Value AGI":"999","Cap Value LUK":"999","--- Visibility ---":"","Hide Gauges":"false","Show HP":"true","Show MP":"true","Show ATK":"true","Show DEF":"true","Show MAT":"true","Show MDF":"true","Show AGI":"true","Show LUK":"true","Show Finish":"true","--- Growth ---":"","HP Growth":"50","MP Growth":"30","ATK Growth":"1","DEF Growth":"1","MAT Growth":"1","MDF Growth":"1","AGI Growth":"1","LUK Growth":"1","--- Points needed ---":"","HP Points Needed":"1","MP Points Needed":"1","ATK Points Needed":"1","DEF Points Needed":"1","MAT Points Needed":"1","MDF Points Needed":"1","AGI Points Needed":"1","LUK Points Needed":"1","--- Colors ---":"","HP Gauge Color 1":"2","HP Gauge Color 2":"2","MP Gauge Color 1":"1","MP Gauge Color 2":"1","ATK Gauge Color 1":"10","ATK Gauge Color 2":"10","DEF Gauge Color 1":"3","DEF Gauge Color 2":"3","MAT Gauge Color 1":"5","MAT Gauge Color 2":"5","MDF Gauge Color 1":"16","MDF Gauge Color 2":"16","AGI Gauge Color 1":"23","AGI Gauge Color 2":"23","LUK Gauge Color 1":"14","LUK Gauge Color 2":"14"}},
{"name":"YEP_KeyNameEntry","status":true,"description":"v1.00 Allows the Name Input Processing event to function\nwith the keyboard keys to enter in letters and numbers.","parameters":{"KeyboardMsg":"\"Type in this character's name.\\nPress \\\\c[6]ENTER\\\\c[0] when you're done.\\n\\n-or-\\n\\nPress the \\\\c[6]arrow keys\\\\c[0] to switch\\nto manual character entry.\\nPress \\\\c[6]ESC\\\\c[0] to use to keyboard.\"","QWERTY Layout":"true"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"true","Defeat First":"true","Always Visible":"false","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"true","Show Value":"true","Show Max":"false"}}
];
