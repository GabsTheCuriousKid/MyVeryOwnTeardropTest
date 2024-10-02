( () => {
    "use strict";
    var e = {
        d: (t, i) => {
            for (var n in i)
                e.o(i, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: i[n]
                })
        }
        ,
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
    };
    e.d({}, {
        Do: () => Ve,
        oG: () => Ye,
        YO: () => ze,
        id: () => He,
        CV: () => Qe,
        IW: () => _e,
        WK: () => We
    });
    let t = {
        coins: 20,
        fridge: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    }
      , i = {
        happiness: 15,
        hunger: 20,
        sleep: 20,
        sleeping: !1,
        progress: 0,
        progressNeeded: 200
    }
      , n = {
        level: 1,
        skipIntro: !1,
        costume: "none",
        lastLogin: Date.now(),
        inGame: !1,
        sfx: !0,
        music: !0,
        minigameMusic: !0,
        minigameCostumes: !0,
        drinksFed: 0,
        lemonsFed: 0,
        totalSlaps: 0,
        lastFridgePage: 0,
        HQSprites: !1,
        language: "en-US",
        temporaryInGameTime: 0,
        musicVolume: 1,
        sfxVolume: 1,
        HDrecommendation: !1,
        introMode: !1,
        gameStartDate: 0,
        saveFileWarning: !1,
        levelUpCostumes: !0,
        privateBeta: !1,
        safeArea: !1,
        controllerProfile: {
            GTTTATINT: {
                buttons: {
                    a: {
                        x: -150,
                        y: -50,
                        lock: 1
                    },
                    d: {
                        x: -50,
                        y: -50,
                        lock: 1
                    },
                    " ": {
                        x: 100,
                        y: -50,
                        lock: 0
                    }
                },
                buttonScale: .5
            }
        }
    };
    function a(e="", t=16, i="left", n="top", a) {
        let o = "MenuShag";
        1 == a && (o = "ShagBlack"),
        2 == a && (o = "ShagBlueNumber");
        let r = new PIXI.BitmapText(e,{
            fontSize: t,
            fontName: o,
            align: i
        });
        return "center" == i && r.anchor.set(.5, .5),
        "middle" == n && r.anchor.set(0, .5),
        r
    }
    n.privateBeta && (n.level = 0,
    i.progressNeeded = 2 ** 32,
    i.progress = 0,
    n.skipIntro = !0,
    t.coins = 1e6,
    i.hunger = 100,
    i.sleep = 100,
    i.happiness = 100,
    n.saveFileWarning = !0);
    let o = {
        settings: {
            HQSprites: "HD Sprites",
            music: "Music",
            minigameMusic: "Minigame Music",
            minigameCostumes: "Minigame Costumes",
            sfx: "SFX",
            enableReload: "Enabling this requires a reload of the game!",
            disableReload: "Disabling this requires a reload of the game!"
        },
        intro: {
            mail: "You've got mail! Click/Tap on it.",
            hey: "HEY!",
            who: "Who was that?"
        },
        dialogue: {
            greet: "Hi, I am teardrop! Thank you for looking after my package. Sorry if I startled you!",
            greet2: "What a great start! I'm Teardrop. Nice to meet you!",
            yoyleberryinvitation: "Let's snack on some regular cake!",
            fridgeHelp: "Put the food in the plate by going to the fridge!",
            wheelHelp: "Press and hold the happiness button to launch the wheel of fun."
        },
        food: {
            regularcake: "Regular Cake",
            icecreamcake: "Ice Cream Cake",
            icycake: "Icy Cake",
            limecake: "Lime Cake",
            blueberry: "Blueberry",
            strawberry: "Strawberry",
            strawberrycake: "Strawberry Cake",
            candy: "Candy Bar",
            sleeppotion: "Awakening Potion",
            maxpotion: "Max Potion",
            sourlemon: "Lemon",
            fries: "Fries",
            donut: "Donut",
            burntTaco: "Burnt Taco"
        },
        ui: {
            shop: "SHOP",
            fridge: "FRIDGE",
            owned: "OWNED",
            preview: "PREVIEW",
            get: "GET",
            wear: "WEAR",
            wearing: "WEARING",
            continue: "Continue",
            mph: "mph",
            score: "Score",
            skipIntro: "Skip Intro",
            gameOver: "Game Over!",
            gamePaused: "Game Paused",
            comingsoon: "more coming soon..",
            info: "INFO",
            artist: "Artist",
            achievements: "Achievements",
            games: "Games",
            wardrobe: "Wardrobe",
            settings: "Settings",
            reload: "Reload",
            cancel: "Cancel",
            home: "Home",
            play: "Play",
            newLevel: "New level",
            continueUpperCase: "CONTINUE",
            notEnoughCoins: "Not enough coins!",
            notEnoughSpace: "Not enough space!",
            altitude: "altitude",
            accuracy: "Accuracy",
            leave: "Leave",
            next: "Next",
            average: "Average",
            ignore: "Ignore",
            translator: "Translator",
            language: "Language"
        },
        message: {
            obtainCostume: "To obtain this costume, complete the {achievement} achievement.",
            hungry: "Teardrop is really hungry! Let's feed her.",
            sleepy: "Teardrop is feeling a little sleepy. Let her get some rest!",
            sleeping: "Teardrop is taking a nap.",
            updateWarning: "New update is out!\nCurrent version: {currentVersion}\nLatest version: {latest}\nThe game will be automatically updated after reloading."
        },
        crashHandler: {
            whoops: "Whoops!\nmyTeardrop has run into a problem...",
            description: "The game might work fine if you continue,\nbut I recommend you to reload anyway.\n\nIf the problem persists, please report the error\nby copying the error text and sending it\n over to the discord server.",
            copyErrorText: "Copy Error Text"
        },
        games: {
            gtttatint: "GTTTATINT101",
            dropdodge: "Drop Dodge",
            tennis: "Drop Tennis",
            match: "Face Match",
            cakewalk: "CAKEWALK"
        },
        costumes: {
            none: "NONE",
            uglysweater: "Ugly Sweater",
            uglysweater2: "tennis sweater",
            _td_costume1: "Water Moth",
            _td_costume2: "Marauder Droplet",
            _td_costume3: "La larme",
            _td_costume4: "Wine Drop",
            _td_costume5: "Blood Drop",
            honeydrop: "Honey Drop",
            orangedrop: "Orange Drop",
            drippydrop: "Drippy Drop",
            glassdrop: "Glass Drop",
            classic: "The Silent Type",
            golden: "Golden Drop",
            light: "Light Teardrop",
            magician: "Magician Drop",
            oyuidrop: "Oyui Drop",
            lemon: "Lemonade",
            sportsdrop: "Sportsdrop",
            limedrop: "Lime Drop",
            jockdrop: "Jock Drop",
            energydrink: "Energy Drink"
        },
        get2763intennis: {
            title: "Drop Tennis",
            description: "Get 2763 score in Drop Tennis minigame"
        },
        winagameoftennis: {
            title: "Drop Tennis",
            name: "Drop Tennis Victory",
            description: "Win a game of Drop Tennis"
        },
        get2763gtttatint: {
            title: "GTTTATINT",
            description: "Get 2763 score in GTTTATINT"
        },
        slapTD2763: {
            title: "Ultimate Slapper",
            description: "Slap Teardrop 2763 times"
        },
        get2763: {
            title: "2763...",
            description: "Complete every achievement about the number 2763"
        },
        lemons: {
            title: "Lemon Factory",
            name: "Lemon Factory",
            description: "Feed Teardrop 100 lemons"
        },
        get10perfectsCAKEWALK: {
            title: "Easy as Cake!",
            description: "Get 10 perfects in a row on CAKEWALK"
        },
        "2763lemons": {
            title: "Soured out!",
            name: "Soured out!",
            description: "Feed Teardrop 2763 lemons"
        },
        perfectfacematch: {
            title: "No difference",
            name: "No difference",
            description: "Get a 100% in Face Match"
        },
        "10energydrinks": {
            title: "No sleep",
            name: "No sleep",
            description: "Feed Teardrop 10 Awakening Potions"
        },
        "5minuteGTTTATINT": {
            title: "Leg Day",
            name: "Leg Day",
            description: "Spend 2 minutes at 2mph or higher in GTTTATINT in a single game"
        },
        score: {
            perfect: "PERFECT",
            good: "Good!",
            nice: "Nice!",
            meh: "Meh",
            bad: "BAD"
        }
    }
      , r = (window.innerWidth,
    window.innerWidth / window.innerHeight * 640 >= 360)
      , s = window.innerHeight / 640
      , l = window.innerWidth / window.innerHeight * 640
      , d = 640;
    0 == r && (l = 360,
    d = window.innerHeight / window.innerWidth * 360,
    s = window.innerWidth / 360),
    l = Math.min(1500, l),
    d = Math.min(1e3, d);
    const c = new PIXI.Application({
        background: "#00000000",
        width: l,
        height: d,
        resolution: s * window.devicePixelRatio
    });
    window.onresize = function() {
        r = window.innerWidth / window.innerHeight * 640 >= 360,
        s = window.innerHeight / 640,
        l = window.innerWidth / window.innerHeight * 640,
        d = 640,
        0 == r && (l = 360,
        d = window.innerHeight / window.innerWidth * 360,
        s = window.innerWidth / 360),
        c.renderer.resolution = s,
        l = Math.min(1500, l),
        d = Math.min(1e3, d),
        c.renderer.resize(l, d),
        Ve && (Le.width = c.screen.width,
        Le.height = c.screen.height,
        Xe.width = c.screen.width,
        Xe.height = c.screen.height)
    }
    ;
    let h = {
        _linear: function(e, t, i, n) {
            return e * (1 - i) + t * i
        },
        linear: function(e, t, i, n=1) {
            if (1 == n)
                return h._linear(e, t, i);
            let a = n
              , o = 1 - i;
            return h._linear(e, t, 1 - Math.pow(o, a))
        }
    }
      , u = []
      , p = 0
      , m = {
        get2763intennis: {
            title: "Drop Tennis",
            description: "Get 2763 score in Drop Tennis minigame",
            icon: 29
        },
        winagameoftennis: {
            title: "Drop Tennis",
            name: "Drop Tennis Victory",
            description: "Win a game of Drop Tennis",
            icon: 29
        },
        get2763gtttatint: {
            title: "GTTTATINT",
            description: "Get 2763 score in GTTTATINT",
            icon: 30
        },
        slapTD2763: {
            title: "Ultimate Slapper",
            description: "Slap Teardrop 2763 times",
            icon: 37,
            getProgress: function() {
                let e = n.totalSlaps + " / 2763";
                return n.totalSlaps > 2763 && (e = n.totalSlaps),
                e
            }
        },
        get2763: {
            title: "2763...",
            description: "Complete every achievement about the number 2763",
            icon: 35,
            getProgress: function() {
                let e = ["get2763intennis", "get2763gtttatint", "slapTD2763", "2763lemons"]
                  , t = 0;
                for (let i = 0; i < e.length; i++)
                    m[e[i]].done && t++;
                return t + " / " + e.length
            }
        },
        lemons: {
            title: "Lemon Factory",
            name: "Lemon Factory",
            description: "Feed Teardrop 100 lemons",
            icon: 36,
            getProgress: function() {
                let e = n.lemonsFed + " / 100";
                return n.lemonsFed > 100 && (e = n.lemonsFed),
                e
            }
        },
        get10perfectsCAKEWALK: {
            title: "Easy as Cake!",
            description: "Get 10 perfects in a row on CAKEWALK",
            icon: 38
        },
        "2763lemons": {
            title: "Gimme my lime!",
            name: "Gimme my lime!",
            description: "Feed Teardrop 2763 lemons",
            icon: 40,
            getProgress: function() {
                let e = n.lemonsFed + " / 2763";
                return n.lemonsFed > 2763 && (e = n.lemonsFed),
                e
            }
        },
        perfectfacematch: {
            title: "No difference",
            name: "No difference",
            description: "Get a 100% in Face Match",
            icon: 39
        },
        "10energydrinks": {
            title: "No sleep",
            name: "No sleep",
            description: "Feed Teardrop 10 Awakening Potions",
            icon: 6,
            getProgress: function() {
                let e = n.drinksFed + " / 10";
                return n.drinksFed > 10 && (e = n.drinksFed),
                e
            }
        },
        "5minuteGTTTATINT": {
            title: "Leg Day",
            name: "Leg Day",
            description: "Spend 5 minutes at 2mph or higher in GTTTATINT in a single game",
            icon: 30
        },
        tauntLogo: {
            title: "Obscure mischief",
            description: "Taunt the logo seen in the settings menu",
            icon: 37,
            secret: !0
        },
        oddDroplets40: {
            title: "The Detective",
            description: "Find the Odd Droplet 40 times in a row",
            icon: 37
        },
        "750altitudeCAKEWALK": {
            title: "Mile High Pie!",
            name: "Mile High Pie!",
            description: "Get to 500 altitude in CAKEWALK",
            icon: 38
        },
        get15000gtttatint: {
            title: "Reach the Galaxy",
            name: "Reach the Galaxy",
            description: "Get 15000 score in GTTTATINT",
            icon: 30
        },
        "1000altitudeCAKEWALK": {
            title: "Too High!!!",
            name: "Too High!!!",
            description: "Get to 1000 altitude in CAKEWALK",
            icon: 38
        }
    };
    for (let e in m)
        null != o[e] && (m[e].title = o[e].title,
        m[e].name = o[e].name,
        m[e].description = o[e].description);
    let y = {
        tearDropWatch: {
            Idle: {
                start: 0,
                end: 239,
                loop: !0
            },
            percent90: {
                start: 240,
                end: 319,
                loop: !1
            },
            percent75: {
                start: 320,
                end: 399,
                loop: !1
            },
            percent50: {
                start: 400,
                end: 479,
                loop: !1
            },
            percent10: {
                start: 480,
                end: 559,
                loop: !1
            },
            Laugh: {
                start: 560,
                end: 803,
                loop: !1
            },
            percent100: {
                start: 805,
                end: 887,
                loop: !1
            }
        },
        Box: {
            Jump: {
                start: 0,
                end: 239,
                loop: !0
            },
            Click1: {
                start: 240,
                end: 299,
                loop: !1
            },
            Click2: {
                start: 300,
                end: 351,
                loop: !1
            },
            Steal: {
                start: 359,
                end: 376,
                loop: !1
            }
        },
        Teardrop: {
            Eat: {
                start: 1001,
                end: 1123,
                loop: !1
            },
            Wave: {
                start: 0,
                end: 328,
                loop: !1
            },
            Slap: {
                start: 329,
                end: 453,
                loop: !1
            },
            BookOpen: {
                start: 509,
                end: 730,
                loop: !1
            },
            Write: {
                start: 731,
                end: 857,
                loop: !0
            },
            SendMessage: {
                start: 858,
                end: 1e3,
                loop: !1
            },
            Nope: {
                start: 1125,
                end: 1198,
                loop: !1
            },
            Look: {
                start: 1199,
                end: 1336,
                loop: !1
            },
            Look2: {
                start: 1337,
                end: 1468,
                loop: !1
            },
            Pat: {
                start: 1468,
                end: 1511,
                loop: !1
            },
            PatStop: {
                start: 1512,
                end: 1545,
                loop: !1
            },
            Idle: {
                start: 315,
                end: 328,
                loop: !0
            },
            Realize: {
                start: 1546,
                end: 1685,
                loop: !1
            },
            EatSour: {
                start: 1686,
                end: 1869,
                loop: !1
            }
        },
        TeardropTired: {
            Sleep: {
                start: 441,
                end: 474,
                loop: !1
            },
            Sleepy: {
                start: 350,
                end: 440,
                loop: !1
            },
            Eat: {
                start: 1001,
                end: 1123,
                loop: !1
            },
            Wave: {
                start: 0,
                end: 328,
                loop: !1
            },
            Idle: {
                start: 0,
                end: 239,
                loop: !0
            },
            Slap: {
                start: 240,
                end: 349,
                loop: !1
            },
            BookOpen: {
                start: 509,
                end: 730,
                loop: !1
            },
            Write: {
                start: 731,
                end: 857,
                loop: !0
            },
            SendMessage: {
                start: 858,
                end: 1e3,
                loop: !1
            },
            Nope: {
                start: 1125,
                end: 1198,
                loop: !1
            },
            Look: {
                start: 1199,
                end: 1336,
                loop: !1
            },
            Look2: {
                start: 1337,
                end: 1468,
                loop: !1
            },
            Pat: {
                start: 483,
                end: 527,
                loop: !1
            },
            PatStop: {
                start: 528,
                end: 577,
                loop: !1
            }
        },
        Needle: {
            0: {
                start: 0,
                end: 20,
                loop: !0
            },
            1: {
                start: 57,
                end: 193,
                loop: !1
            },
            2: {
                start: 331,
                end: 440,
                loop: !1
            }
        },
        Leafy: {
            0: {
                start: 0,
                end: 20,
                loop: !0
            },
            1: {
                start: 57,
                end: 193,
                loop: !1
            },
            2: {
                start: 331,
                end: 440,
                loop: !1
            }
        },
        Coiny: {
            0: {
                start: 0,
                end: 39,
                loop: !0
            },
            1: {
                start: 40,
                end: 221,
                loop: !1
            },
            2: {
                start: 222,
                end: 329,
                loop: !1
            }
        },
        Spongy: {
            0: {
                start: 0,
                end: 39,
                loop: !0
            },
            1: {
                start: 40,
                end: 221,
                loop: !1
            },
            2: {
                start: 222,
                end: 329,
                loop: !1
            }
        },
        Pin: {
            0: {
                start: 0,
                end: 39,
                loop: !0
            },
            1: {
                start: 40,
                end: 221,
                loop: !1
            },
            2: {
                start: 222,
                end: 329,
                loop: !1
            }
        },
        Rocky: {
            0: {
                start: 0,
                end: 39,
                loop: !0
            },
            1: {
                start: 40,
                end: 221,
                loop: !1
            },
            2: {
                start: 222,
                end: 329,
                loop: !1
            }
        },
        "Ice Cube": {
            0: {
                start: 0,
                end: 39,
                loop: !0
            },
            1: {
                start: 40,
                end: 221,
                loop: !1
            },
            2: {
                start: 222,
                end: 329,
                loop: !1
            }
        },
        tearDropTennis: {
            prepare: {
                start: 0,
                end: 11,
                loop: !1
            },
            hit: {
                start: 12,
                end: 65,
                loop: !1
            }
        }
    }
      , g = function(e, t, i, n) {
        return Math.sqrt((e - i) ** 2 + (t - n) ** 2)
    }
      , f = function(e, t, i) {
        return e.x + e.width >= t.x && e.x <= t.x + t.width && e.y + e.height >= t.y && e.y <= t.y + t.height
    }
      , x = {}
      , w = 0;
    function v(e, t, i=!0) {
        e.originalSize = {
            x: e.scale.x,
            y: e.scale.y
        },
        e.animate = i,
        e.animationSize = e.originalSize,
        e.destinationSize = e.originalSize,
        e.animationTime = 0,
        e.on("pointerover", (function() {
            i && (e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            },
            e.destinationSize = {
                x: 1.1 * e.originalSize.x,
                y: 1.1 * e.originalSize.y
            }),
            e.animationTime = 0,
            e.hover = !0
        }
        )),
        e.on("pointerout", (function() {
            i && (e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            },
            e.animationTime = 0,
            e.destinationSize = {
                x: 1 * e.originalSize.x,
                y: 1 * e.originalSize.y
            }),
            e.hover = !1
        }
        )),
        e.on("pointerdown", (function() {
            e.disableTrigger = !1,
            i && (e.destinationSize = {
                x: .95 * e.originalSize.x,
                y: .95 * e.originalSize.y
            },
            e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            }),
            e.animationTime = 0,
            e.pressing = !0
        }
        )),
        e.disableTrigger = !1,
        e.resetSize = function() {
            e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            },
            e.destinationSize = {
                x: e.originalSize.x,
                y: e.originalSize.y
            },
            e.animationTime = 0
        }
        ,
        e.on("pointerup", (function() {
            e.pressing && 0 == e.disableTrigger && t(),
            e.interactive && (e.pressing = !1,
            i && (e.animationSize = {
                x: e.scale.x,
                y: e.scale.y
            },
            e.destinationSize = {
                x: 1.1 * e.originalSize.x,
                y: 1.1 * e.originalSize.y
            }),
            e.animationTime = 0)
        }
        ))
    }
    function I(e, t=new PIXI.Rectangle(-100,-100,200,200), i, n=0) {
        e.canDrag = !0,
        e.hitArea = t,
        e.dragScale = n,
        e.originalHitArea = t,
        i && (e.x2 = e.x,
        e.y2 = e.y),
        e.on("pointerdown", (function(t) {
            e.hitArea = new PIXI.Rectangle(-3e3,-3e3,6e3,6e3),
            e.dragging = !0,
            e.originalPosition = {
                x: e.x,
                y: e.y
            };
            let i = t.clientX / s
              , n = t.clientY / s;
            0 != e.dragScale && (i /= e.dragScale,
            n /= e.dragScale),
            e.dragOffset = {
                x: i - e.x,
                y: n - e.y
            }
        }
        )),
        e.on("pointermove", (function(t) {
            let n = t.clientX / s
              , a = t.clientY / s;
            0 != e.dragScale && (n /= e.dragScale,
            a /= e.dragScale),
            e.dragging && (i ? (e.x2 = n - e.dragOffset.x,
            e.y2 = a - e.dragOffset.y) : (e.x = n - e.dragOffset.x,
            e.y = a - e.dragOffset.y),
            g(e.originalPosition.x, e.originalPosition.y, e.x, e.y) > 1 && (e.disableTrigger = !0))
        }
        )),
        e.on("pointerup", (function() {
            e.dragging = !1,
            e.hitArea = e.originalHitArea
        }
        ))
    }
    class S {
        constructor(e, t, i, n=!1, a=!0) {
            this.buttonContainer = new PIXI.Container,
            this.selected = new PIXI.Sprite($["Sprites/GameUI"][8]),
            this.selected.anchor.set(.5, .5),
            this.buttonContainer.addChild(this.selected),
            this.selected.blendMode = PIXI.BLEND_MODES.ADD,
            this.empty = new PIXI.Sprite(e),
            this.empty.anchor.set(.5, .5),
            this.buttonContainer.addChild(this.empty),
            this.size = e.trim.width,
            this.fullMask = new PIXI.Graphics,
            this.fullMask.beginFill(16777215),
            this._offset = Math.min(1, Math.max(0, i)),
            this.pieChart = n,
            n || this.fullMask.drawRect(-this.size / 2, -this.size / 2 + (this.size - this.size * this._offset), this.size, this.size * this._offset),
            this.fullMask.endFill(),
            this.empty.addChild(this.fullMask),
            this.full = new PIXI.Sprite(t),
            this.full.anchor.set(.5, .5),
            this.empty.addChild(this.full),
            this.full.mask = this.fullMask,
            this.percentage = new PIXI.BitmapText(Math.round(100 * this._offset) + "%",{
                fontSize: 16,
                fontName: "MenuShag"
            }),
            this.percentage.y = this.size / 2 + 10,
            this.percentage.anchor.set(.5, .5),
            a && this.buttonContainer.addChild(this.percentage),
            this.buttonContainer.hitArea = new PIXI.Rectangle(-this.size / 2,-this.size / 2,this.size,this.size),
            this.buttonContainer.interactive = !0,
            this.id = w,
            x[w++] = this.buttonContainer
        }
        set offset(e) {
            if (this.fullMask.clear(),
            this._offset = Math.min(1, Math.max(0, e)),
            this.fullMask.beginFill(16777215),
            this.pieChart && this._offset < .99) {
                let e = this.size
                  , t = [0, 0, 0, -e];
                this._offset > .125 && (t.push(e),
                t.push(-e)),
                this._offset > .25 && (t.push(e),
                t.push(0)),
                this._offset > .375 && (t.push(e),
                t.push(e)),
                this._offset > .5 && (t.push(0),
                t.push(e)),
                this._offset > .625 && (t.push(-e),
                t.push(e)),
                this._offset > .75 && (t.push(-e),
                t.push(0)),
                this._offset > .875 && (t.push(-e),
                t.push(-e)),
                t.push(e * Math.cos(this._offset * Math.PI * 2 - Math.PI / 2)),
                t.push(e * Math.sin(this._offset * Math.PI * 2 - Math.PI / 2)),
                this.fullMask.drawPolygon(...t)
            } else
                this.fullMask.drawRect(-this.size / 2, -this.size / 2 + (this.size - this.size * this._offset), this.size, this.size * this._offset);
            this.fullMask.endFill(),
            this.percentage.text = Math.round(100 * this._offset) + "%"
        }
        destroy() {
            this.selected.destroy(),
            this.empty.destroy(),
            this.fullMask.destroy(),
            this.full.destroy(),
            this.percentage.destroy(),
            this.buttonContainer.destroy(),
            delete x[this.id]
        }
    }
    let C = null;
    class b {
        constructor(e, t, i, n, a, o, r, s) {
            this.ninesliceplane = new PIXI.NineSlicePlane($.inputNineSlice[0],15,15,15,15),
            this.ninesliceplane.width = i,
            this.ninesliceplane.height = n,
            this.ninesliceplane.x = e,
            this.ninesliceplane.y = t,
            this.ninesliceplane.interactive = !0,
            this.ninesliceplane.on("click", ( () => {
                C = this.inputText,
                this.inputText.alpha = 1,
                this.inputText.text = this.inputText.value,
                document.addEventListener("keydown", this.type),
                document.addEventListener("pointerdown", this.disable)
            }
            )),
            this.type = e => {
                " 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,!?\"'".includes(e.key) && o > this.inputText.value.length && (this.inputText.value += e.key),
                "Backspace" == e.key && (this.inputText.value = this.inputText.value.slice(0, -1)),
                "Enter" != e.key ? (this.inputText.scale.x = 1,
                this.inputText.text = this.inputText.value,
                this.inputText.width > this.ninesliceplane.width - 2 * this.inputText.x && (this.inputText.width = this.ninesliceplane.width - 2 * this.inputText.x),
                this.inputText.scale.y = this.inputText.scale.x) : this.confirmation()
            }
            ,
            this.disabled = !1,
            this.disable = () => {
                "" == this.inputText.value && (this.inputText.text = a,
                this.inputText.alpha = .5),
                C = -1,
                document.removeEventListener("keydown", this.type),
                document.removeEventListener("pointerdown", this.disable)
            }
            ,
            this.inputText = new PIXI.BitmapText(a,{
                fontSize: n - 7,
                fontName: "ShagBlack"
            }),
            this.inputText.value = "",
            this.inputText.alpha = .5,
            this.inputText.anchor.set(0, .5),
            this.inputText.x = n / 2 - 2,
            this.inputText.y = this.ninesliceplane.height / 2,
            this.ninesliceplane.addChild(this.inputText),
            this.ninesliceplane.pivot.x = i * r,
            this.ninesliceplane.pivot.y = n * s,
            this.element = this.ninesliceplane,
            this.confirmation = function() {}
        }
        _destroy() {
            this.ninesliceplane.interactive = !1,
            this.disable(),
            this.inputText.parent.removeChild(this.inputText),
            this.inputText.destroy(),
            this.ninesliceplane.destroy(),
            this.ninesliceplane.removeAllListeners()
        }
        destroy() {
            this._destroy()
        }
    }
    class M extends b {
        constructor(e=function() {}
        , t, i, n, a, o, r, s, l, d=1, c="left") {
            super(t, i, n, a, o, r, .5, .5),
            this.ninesliceplane.texture = $.inputNineSlice[d],
            this.inputText.fontName = "MenuShag",
            this.inputText.fontSize = a - 7,
            this.inputText.x = a / 2 - 2,
            "center" == c && (this.inputText.x = n / 2,
            this.inputText.anchor.set(.5, .5)),
            this.inputText.alpha = 1,
            this.type = function() {}
            ,
            this.ninesliceplane.removeAllListeners(),
            this.id = w,
            x[w++] = this.element,
            this.ninesliceplane.x += .5 * n - n * s,
            this.ninesliceplane.y += .5 * a - a * l,
            v(this.element, e)
        }
        destroy() {
            delete x[this.id],
            this._destroy()
        }
    }
    class P {
        constructor(e=function() {}
        , t, i) {
            this.sprite = new PIXI.Sprite(t);
            let n = 100;
            null != this.sprite.texture.trim && (n = this.sprite.texture.trim.width,
            this.sprite.hitArea = new PIXI.Rectangle(-n / 2,-n / 2,n,n)),
            this.sprite.interactive = !0,
            this.sprite.anchor.set(.5, .5);
            for (let e in i)
                this.sprite[e] = i[e];
            this.id = w,
            x[w++] = this.sprite,
            v(this.sprite, e, !0)
        }
        destroy() {
            delete x[this.id],
            this.sprite.interactive = !1,
            this.sprite.destroy(),
            this.sprite.removeAllListeners()
        }
    }
    function T() {
        return w++
    }
    let k, A, E = {
        regularcake: {
            name: o.food.regularcake,
            texture: 1,
            cost: 15,
            adds: 40
        },
        icecreamcake: {
            name: o.food.icecreamcake,
            texture: 5,
            cost: 20,
            adds: 60
        },
        icycake: {
            name: o.food.icycake,
            texture: 4,
            cost: 1,
            adds: 1
        },
        limecake: {
            name: o.food.limecake,
            texture: 6,
            cost: 10,
            adds: 20
        },
        blueberry: {
            name: o.food.blueberry,
            texture: 7,
            cost: 2,
            adds: 10
        },
        strawberry: {
            name: o.food.strawberry,
            texture: 8,
            cost: 1,
            adds: 8
        },
        strawberrycake: {
            name: o.food.strawberrycake,
            texture: 9,
            cost: 8,
            adds: 15
        },
        candy: {
            name: o.food.candy,
            texture: 10,
            cost: 5,
            adds: 12
        },
        cherrypan: {
            name: "cherrypan",
            texture: 11,
            cost: 1e3,
            adds: 100,
            hidden: !0
        },
        sleeppotion: {
            name: o.food.sleeppotion,
            texture: 12,
            cost: 100,
            adds: 5,
            hidden: !1
        },
        maxpotion: {
            name: o.food.maxpotion,
            texture: 13,
            cost: 300,
            adds: 0,
            hidden: !0
        },
        sourlemon: {
            name: o.food.sourlemon,
            texture: 14,
            cost: 3,
            adds: -4
        },
        donut: {
            name: o.food.donut,
            texture: 16,
            cost: 12,
            adds: 30,
            requiredLevel: 5
        },
        fries: {
            name: o.food.fries,
            texture: 15,
            cost: 50,
            adds: 75,
            requiredLevel: 10
        },
        burntTaco: {
            name: o.food.burntTaco,
            texture: 17,
            cost: 100,
            adds: 90,
            requiredLevel: 20
        }
    }, L = {
        awake: "Teardrop",
        tired: "TeardropTired"
    }, X = "Teardrop", N = "TeardropTired", D = {
        teardrop: {
            name: "tear_drop_bfb"
        },
        jacknjellify: {
            name: "jacknjellify"
        },
        vendormint: {
            name: "vendormint"
        },
        stevencrack: {
            name: "stevencrack"
        },
        thinking909: {
            name: "Oyui"
        },
        briteideajuni: {
            name: "Juniper/Noelle"
        },
        bluesky: {
            name: "BlueSky"
        },
        cringeindividual: {
            name: "Roxamations"
        },
        jampu: {
            name: "Jampu"
        },
        kyle: {
            name: "kyle9341"
        },
        tyblade: {
            name: "tyblade9"
        },
        maple2: {
            name: "maple_two"
        },
        dialup: {
            name: "dialup"
        },
        coconut7: {
            name: "coconut7"
        }
    };
    function G(e, t, i=1) {
        let n = [];
        for (let e = 0; e < $["Sprites/Bodies"].length; e++)
            n.push($["Sprites/Bodies"][e]);
        n[47] = $["Sprites/BodiesCostume_" + i][t],
        n[48] = $["Sprites/BodiesCostume_" + i][t + 1];
        let a = e.currentFrame;
        e.textures = n,
        e.gotoAndStop(a)
    }
    let B = {
        none: {
            name: o.costumes.none,
            sprite: 0,
            cost: 0,
            owned: !0,
            apply: function(e, t=0) {
                let i;
                switch (t) {
                case 0:
                    i = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k];
                    break;
                case 1:
                    i = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k]
                }
                for (let e = 0; e < i.length; e++) {
                    let t = i[e]
                      , n = t.symbol.split("/")[1];
                    R(t, "Sprites/" + n)
                }
            }
        },
        uglysweater: {
            name: o.costumes.uglysweater,
            sprite: 2,
            artist: D.jacknjellify,
            cost: 600,
            owned: !1,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 0),
                R(e.a.j, "Sprites/LimbsCostume1"),
                R(e.a.k, "Sprites/LimbsCostume1")
            }
        },
        uglysweater2: {
            name: "tennis sweater",
            sprite: 2,
            artist: D.jacknjellify,
            cost: 0,
            owned: !1,
            hidden: !0,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 4),
                R(e.a.j, "Sprites/LimbsCostume1"),
                R(e.a.k, "Sprites/LimbsCostume1")
            }
        },
        _td_costume1: {
            name: o.costumes._td_costume1,
            sprite: 3,
            artist: D.teardrop,
            cost: 600,
            owned: !1,
            apply: function(e, t) {
                B.none.apply(e, t),
                R(e.a.d, "Sprites/Empty"),
                G(e.a.i, 2)
            }
        },
        _td_costume2: {
            name: o.costumes._td_costume2,
            artist: D.teardrop,
            sprite: 4,
            cost: 600,
            owned: !1,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 6)
            }
        },
        _td_costume3: {
            name: o.costumes._td_costume3,
            artist: D.teardrop,
            sprite: 5,
            cost: 500,
            owned: !1,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 8)
            }
        },
        _td_costume4: {
            name: o.costumes._td_costume4,
            sprite: 10,
            cost: 500,
            owned: !1,
            color: 16753054,
            artist: D.teardrop,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 18),
                R(e.a.d, "Sprites/MouthsCostume10")
            }
        },
        _td_costume5: {
            name: o.costumes._td_costume5,
            sprite: 19,
            cost: 1600,
            owned: !1,
            color: 16739174,
            artist: D.teardrop,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 39);
                let i = new PIXI.Sprite($["Sprites/BodiesCostume_1"][41]);
                U(i, e.a, 0, .95, 20),
                i.x = 15,
                i.y = 120,
                i.zIndex = -1,
                i.scale.x = -1;
                let n = new PIXI.Sprite($["Sprites/BodiesCostume_1"][41]);
                U(n, e.a, 0, .95, 20),
                n.x = 110.5,
                n.y = 120,
                n.zIndex = -1,
                e.a.sortableChildren = !0,
                e.destroyCostume = function() {
                    n.destroyPhysics(),
                    i.destroyPhysics()
                }
            },
            applyMinigame: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 42)
            }
        },
        honeydrop: {
            name: o.costumes.honeydrop,
            sprite: 11,
            cost: 700,
            owned: !1,
            color: 16772979,
            artist: D.briteideajuni,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 20)
            }
        },
        orangedrop: {
            name: o.costumes.orangedrop,
            sprite: 12,
            cost: 500,
            owned: !1,
            color: 16768184,
            artist: D.thinking909,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 22)
            }
        },
        drippydrop: {
            name: o.costumes.drippydrop,
            sprite: 14,
            cost: 500,
            owned: !1,
            artist: D.bluesky,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 24)
            }
        },
        glassdrop: {
            name: o.costumes.glassdrop,
            sprite: 13,
            cost: 300,
            owned: !1,
            color: 12113151,
            artist: D.cringeindividual,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 26)
            }
        },
        classic: {
            name: o.costumes.classic,
            sprite: 1,
            artist: D.jacknjellify,
            cost: 200,
            owned: !1,
            apply: function(e, t=0) {
                let i;
                switch (t) {
                case 0:
                    i = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k];
                    break;
                case 1:
                    i = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k]
                }
                for (let e = 0; e < i.length; e++) {
                    let t = i[e]
                      , n = t.symbol.split("/")[1];
                    R(t, "oldiesCostume/" + n)
                }
            }
        },
        outline: {
            name: "teardrop's deep dark secret. do not use this costume under any circumstances!",
            sprite: 1,
            artist: D.jacknjellify,
            cost: 0,
            owned: !1,
            hidden: !0,
            apply: function(e, t=0) {
                let i;
                switch (t) {
                case 0:
                    i = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k];
                    break;
                case 1:
                    i = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k]
                }
                for (let e = 0; e < i.length; e++) {
                    let t = i[e];
                    null != $[t.symbol + "OUTLINE12"] && R(t, t.symbol + "OUTLINE12")
                }
            }
        },
        golden: {
            name: o.costumes.golden,
            sprite: 6,
            cost: 5e4,
            owned: !1,
            color: 16774556,
            artist: D.vendormint,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 10)
            }
        },
        light: {
            name: o.costumes.light,
            sprite: 8,
            cost: 200,
            owned: !1,
            artist: D.stevencrack,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 14)
            }
        },
        magician: {
            name: o.costumes.magician,
            sprite: 16,
            cost: 300,
            owned: !1,
            artist: D.kyle,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 30)
            }
        },
        oyuidrop: {
            name: o.costumes.oyuidrop,
            sprite: 18,
            cost: 1600,
            color: 13369246,
            owned: !1,
            artist: D.thinking909,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 34),
                R(e.a.j, "Sprites/Empty"),
                R(e.a.k, "Sprites/Empty");
                let i = new PIXI.Sprite($["Sprites/BodiesCostume_1"][37]);
                U(i, e.a, 0, .95, 10),
                i.x = 100,
                i.y = 20;
                let n = new PIXI.Sprite($["Sprites/BodiesCostume_1"][36]);
                U(n, e.a, 0, .95, 15),
                n.x = 90,
                n.y = 120,
                n.zIndex = -1,
                e.a.sortableChildren = !0,
                e.destroyCostume = function() {
                    i.destroyPhysics(),
                    n.destroyPhysics()
                }
            },
            applyMinigame: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 38),
                R(e.a.j, "Sprites/Empty"),
                R(e.a.k, "Sprites/Empty")
            }
        },
        chocodrop: {
            name: "Choco-Drop",
            sprite: 21,
            cost: 800,
            owned: !1,
            color: 14917741,
            artist: D.vendormint,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 45)
            }
        },
        pineapple: {
            name: "Pineapple",
            sprite: 22,
            cost: 1e3,
            owned: !1,
            color: 16766369,
            artist: {
                name: D.thinking909.name + ", " + D.dialup.name
            },
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 47)
            }
        },
        mintdrop: {
            name: "Minty Drop",
            sprite: 23,
            cost: 600,
            owned: !1,
            color: 12779497,
            artist: D.vendormint,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 49)
            }
        },
        oildrop: {
            name: "Oil Drop",
            sprite: 24,
            artist: D.coconut7,
            cost: 700,
            owned: !1,
            animation: {
                tired: "TeardropTiredOIL",
                awake: "TeardropOIL"
            },
            facePosition: {
                x: 0,
                y: 0
            },
            generateAnimations: function() {
                let e = function(e, t) {
                    let i = JSON.parse(JSON.stringify(ee[e]));
                    return i.symbols.TeardropBody = ee[t],
                    i
                };
                ee.TeardropOIL = e("Teardrop", "oilTeardropBody"),
                ee.TeardropTiredOIL = e("TeardropTired", "oilTeardropTiredBody")
            },
            apply: function(e, t=0) {
                B.none.apply(e, t),
                G(e.a.i, 51),
                R(e.a.e, "Sprites/EyesCostume25"),
                R(e.a.f, "Sprites/EyesCostume25"),
                R(e.a.g, "Sprites/EyesCostume25"),
                R(e.a.h, "Sprites/EyesCostume25"),
                R(e.a.d, "Sprites/MouthsCostume25")
            }
        },
        knightdrop: {
            name: "Knight Drop",
            requiredLevel: 25,
            sprite: 25,
            cost: 1400,
            owned: !1,
            color: 16766369,
            animation: {
                tired: "TeardropTiredKNIGHT",
                awake: "TeardropKNIGHT"
            },
            artist: {
                name: D.thinking909.name + ", " + D.dialup.name
            },
            facePosition: {
                x: 0,
                y: 0
            },
            generateAnimations: function() {
                let e = function(e) {
                    let t = JSON.parse(JSON.stringify(ee[e]))
                      , i = t.symbols.TeardropBody;
                    function n(e, t, i, n=1) {
                        for (let a = 0; a < e.frames.length; a++) {
                            let o = e.frames[a];
                            null != o[1] && (o[1] += t,
                            o[2] += i,
                            o[3] *= n,
                            o[6] *= n)
                        }
                    }
                    return n(i.layers.d, -3, 5, .9),
                    n(i.layers.e, -3, 7),
                    n(i.layers.g, -3, 7),
                    n(i.layers.f, -3, 7),
                    n(i.layers.h, -3, 7),
                    t
                };
                ee.TeardropKNIGHT = e("Teardrop"),
                ee.TeardropTiredKNIGHT = e("TeardropTired")
            },
            apply: function(e, t, i=!0) {
                B.none.apply(e, t),
                G(e.a.i, 53)
            },
            applyMinigame: function(e) {
                G(e.a.i, 53)
            }
        },
        galaxydrop: {
            name: "Galaxy Drop",
            sprite: 27,
            artist: D.dialup,
            cost: -1,
            owned: !1,
            achievement: ["get15000gtttatint", "1000altitudeCAKEWALK"],
            checkAvailability: function() {
                let e = ["get15000gtttatint", "1000altitudeCAKEWALK"]
                  , t = !0;
                for (let i = 0; i < e.length; i++)
                    1 != m[e[i]].done && (t = !1);
                return t
            },
            apply: function(e, t=0) {
                B.none.apply(e, t),
                G(e.a.i, 57),
                R(e.a.e, "Sprites/EyesCostume25"),
                R(e.a.f, "Sprites/EyesCostume25"),
                R(e.a.g, "Sprites/EyesCostume25"),
                R(e.a.h, "Sprites/EyesCostume25"),
                R(e.a.d, "Sprites/MouthsCostume25")
            }
        },
        giant: {
            name: "Giant",
            sprite: 1,
            artist: D.bluesky,
            cost: 0,
            owned: !1,
            secret: !0,
            applyMinigame: function() {},
            apply: function(e, t=0) {
                let i;
                switch (e.size = 1.25,
                e.scale.x *= 1.25,
                e.scale.y *= 1.25,
                e.destroyCostume = function() {
                    e.size = 1,
                    e.scale.x /= 1.25,
                    e.scale.y /= 1.25
                }
                ,
                t) {
                case 0:
                    i = [e.b, e.c, e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k];
                    break;
                case 1:
                    i = [e.a.d, e.a.e, e.a.f, e.a.g, e.a.h, e.a.i, e.a.j, e.a.k]
                }
                for (let e = 0; e < i.length; e++) {
                    let t = i[e]
                      , n = t.symbol.split("/")[1];
                    console.log("Sprites/" + n + "Costume21"),
                    R(t, "Sprites/" + n + (n.includes("Mouth") ? "s" : "") + "Costume21")
                }
            }
        },
        lemon: {
            name: o.costumes.lemon,
            sprite: 7,
            cost: -1,
            achievement: "lemons",
            owned: !1,
            color: 16770969,
            artist: D.vendormint,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 12)
            }
        },
        sportsdrop: {
            name: o.costumes.sportsdrop,
            sprite: 9,
            cost: -1,
            achievement: "winagameoftennis",
            owned: !1,
            artist: D.vendormint,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 16)
            }
        },
        limedrop: {
            name: o.costumes.limedrop,
            sprite: 15,
            cost: -1,
            achievement: "2763lemons",
            owned: !1,
            color: 5234769,
            artist: D.jampu,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 28)
            }
        },
        jockdrop: {
            name: o.costumes.jockdrop,
            sprite: 17,
            cost: -1,
            achievement: "5minuteGTTTATINT",
            owned: !1,
            artist: D.maple2,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 32),
                R(e.a.j, "Sprites/LimbsCostume17"),
                R(e.a.k, "Sprites/LimbsCostume17")
            }
        },
        energydrink: {
            name: o.costumes.energydrink,
            sprite: 20,
            cost: -1,
            achievement: "10energydrinks",
            owned: !1,
            artist: D.tyblade,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 43)
            }
        },
        _td_costume6: {
            name: "Cakepop-Chip",
            sprite: 26,
            cost: -1,
            achievement: "750altitudeCAKEWALK",
            owned: !1,
            color: 16739174,
            artist: D.teardrop,
            apply: function(e, t) {
                B.none.apply(e, t),
                G(e.a.i, 55)
            }
        }
    }
      , U = function(e, t, i, n, a) {
        e.anchor.set(.5, .5),
        t.addChild(e),
        e.actualAngle = 0,
        e.angleVelocity = 0;
        let o = function() {
            e.rotation = -t.rotation + i,
            e.actualAngle += e.angleVelocity,
            e.rotation += e.actualAngle,
            e.angleVelocity += (t.rotation + i - e.actualAngle) / a,
            e.angleVelocity *= n
        };
        c.ticker.add(o),
        e.destroyPhysics = function() {
            c.ticker.remove(o),
            e.destroy()
        }
    };
    function R(e, t) {
        let i = e.currentFrame;
        e.textures = $[t],
        e.gotoAndStop(i)
    }
    function O(e) {
        return e.split("").reverse().join("")
    }
    function F(e) {
        return O(btoa(JSON.stringify(e)))
    }
    let _ = !1;
    function z(e, t) {
        try {
            return null == e ? t : JSON.parse(atob(O(e)))
        } catch (e) {
            return alert("Error with save file. Potential corruption!"),
            _ = !0,
            0
        }
    }
    function W() {
        if (n.privateBeta)
            return;
        if (n.introMode)
            return;
        let e = [];
        e.push(F(t.coins)),
        e.push(F(t.fridge)),
        e.push(F(i.happiness)),
        e.push(F(i.hunger)),
        e.push(F(i.sleep)),
        e.push(F(n.skipIntro)),
        e.push(F(n.costume));
        let a = {};
        for (let e in B)
            a[e] = B[e].owned;
        e.push(F(a)),
        e.push(F(n.lastLogin)),
        e.push(F(i.sleeping)),
        e.push(F(n.sfx)),
        e.push(F(n.music)),
        e.push(F(n.minigameMusic)),
        e.push(F(i.progress)),
        e.push(F(i.progressNeeded)),
        e.push(F(n.level));
        let o = {};
        for (let e in m)
            o[e] = m[e].done;
        e.push(F(o)),
        e.push(F(n.lemonsFed)),
        e.push(F(n.totalSlaps)),
        e.push(F(n.minigameCostumes)),
        e.push(F(n.lastFridgePage)),
        e.push(F(n.drinksFed)),
        e.push(F(n.HQSprites)),
        e.push(F(n.language)),
        e.push(F(n.sfxVolume)),
        e.push(F(n.musicVolume)),
        e.push(F(n.HDrecommendation)),
        0 == n.gameStartDate && (n.gameStartDate = Date.now()),
        e.push(F(n.gameStartDate)),
        e.push(F(n.saveFileWarning)),
        e.push(F(n.levelUpCostumes)),
        e.push(F(n.safeArea)),
        e.push(F(n.controllerProfile.GTTTATINT)),
        localStorage.setItem("myTeardrop", F(JSON.stringify(e)))
    }
    let j = setInterval((function() {
        W()
    }
    ), 1e4);
    function H(e) {
        _ = !1;
        let t = JSON.parse(z(e));
        return {
            coins: z(t[0]),
            fridge: z(t[1]),
            happiness: z(t[2]),
            hunger: z(t[3]),
            sleep: z(t[4]),
            skipIntro: z(t[5]),
            costume: z(t[6]),
            boughtCostumes: z(t[7]),
            lastLogin: z(t[8]),
            sleeping: z(t[9]),
            sfx: z(t[10], !0),
            music: z(t[11], !0),
            minigameMusic: z(t[12], !0),
            progress: z(t[13], 0),
            progressNeeded: z(t[14], 200),
            level: z(t[15], 1),
            completedAchievements: z(t[16], {}),
            lemonsFed: z(t[17], 0),
            totalSlaps: z(t[18], 0),
            minigameCostumes: z(t[19], !0),
            lastFridgePage: z(t[20], 0),
            drinksFed: z(t[21], 0),
            HQSprites: z(t[22], !1),
            language: z(t[23], "en-US"),
            sfxVolume: z(t[24], 1),
            musicVolume: z(t[25], 1),
            HDrecommendation: z(t[26], !1),
            gameStartDate: z(t[27], Date.now()),
            saveFileWarning: z(t[28], !1),
            levelUpCostumes: z(t[29], !0),
            safeArea: z(t[30], !1),
            gtttatintProfile: z(t[31], n.controllerProfile.GTTTATINT)
        }
    }
    if (null == localStorage.getItem("myTeardrop"))
        W();
    else if (!n.privateBeta) {
        let e = H(localStorage.getItem("myTeardrop"));
        t.coins = e.coins,
        t.fridge = e.fridge,
        i.happiness = e.happiness,
        i.hunger = e.hunger,
        i.sleep = e.sleep,
        n.skipIntro = e.skipIntro,
        n.lastLogin = e.lastLogin,
        i.sleeping = e.sleeping,
        "string" == typeof e.costume && (Object.keys(B).includes(e.costume) || (e.costume = "none"),
        n.costume = e.costume);
        for (let t in B) {
            let i = !1;
            null != e.boughtCostumes[t] && (i = e.boughtCostumes[t]),
            B[t].owned = i
        }
        n.sfx = e.sfx,
        n.music = e.music,
        n.minigameMusic = e.minigameMusic,
        n.minigameCostumes = e.minigameCostumes,
        i.progress = e.progress,
        i.progressNeeded = e.progressNeeded,
        n.level = e.level,
        n.lemonsFed = e.lemonsFed,
        n.drinksFed = e.drinksFed,
        n.totalSlaps = e.totalSlaps,
        n.lastFridgePage = e.lastFridgePage,
        n.HQSprites = e.HQSprites,
        n.language = e.language,
        n.sfxVolume = e.sfxVolume,
        n.musicVolume = e.musicVolume,
        n.HDrecommendation = e.HDrecommendation,
        n.gameStartDate = e.gameStartDate,
        n.saveFileWarning = e.saveFileWarning,
        n.levelUpCostumes = e.levelUpCostumes,
        n.safeArea = e.safeArea,
        n.controllerProfile.GTTTATINT = e.gtttatintProfile;
        for (let t in m) {
            let i = !1;
            null != e.completedAchievements[t] && (i = e.completedAchievements[t]),
            m[t].done = i
        }
    }
    if (null != localStorage.getItem(n.language)) {
        let e = JSON.parse(localStorage.getItem(n.language).replaceAll("\n", "\\n"));
        for (let t in e)
            for (let i in e[t])
                "version" != t && (o[t][i] = e[t][i]);
        for (let e in o.costumes)
            B[e].name = o.costumes[e]
    } else
        n.language = "en-US";
    let Q = o.message.obtainCostume;
    o.message.obtainCostume = function(e) {
        return Q.replace("{achievement}", '"' + e + '"')
    }
    ;
    let V = o.message.updateWarning;
    o.message.updateWarning = function(e, t) {
        return V.replace("{currentVersion}", e).replace("{latest}", t)
    }
    ,
    window.innerWidth,
    window.devicePixelRatio;
    let Y = 0
      , K = 0;
    function J(e, t) {
        Y++,
        Z || (document.getElementById("bar").style.width = Y / K * 100 + "%"),
        Y == K && (Z || (document.getElementById("loader").style.color = "white",
        document.getElementById("loader").innerHTML += "<p>Tap/Click to play</p>"),
        Z || (Z = !0,
        te.music = new Pizzicato.Group(te.music),
        te.sfx = new Pizzicato.Group(te.sfx),
        te.sfx.volume = n.sfxVolume,
        te.music.volume = n.musicVolume,
        Ye()))
    }
    let q, Z = !1, $ = {}, ee = {}, te = {
        music: [],
        sfx: []
    };
    function ie(e, t, i) {
        K++,
        PIXI.Assets.load("./Resources/" + e + ".json").then((e => {
            $[i] = [];
            for (let n = 0; n < e._frameKeys.length; n++) {
                let e = t + (n + 1e4).toString().slice(1);
                $[i].push(PIXI.Texture.from(e))
            }
            J()
        }
        ))
    }
    function ne(e, t, i) {
        let a = {}
          , o = t;
        $[i] = [];
        for (let r = 0; r < t; r++) {
            a[r] = 0,
            K++;
            let s = (r + 10001).toString().slice(1);
            1 == t && (s = ""),
            PIXI.Assets.load("./Resources/" + e + s + ".png").then((e => {
                a[r] = e,
                n.HQSprites && e.baseTexture.setResolution(2),
                o--,
                0 == o && ($[i] = a),
                J()
            }
            ))
        }
    }
    function ae(e) {
        K++,
        PIXI.Assets.load("./Fonts/" + e + ".fnt").then((e => {
            J()
        }
        ))
    }
    function oe(e, t) {
        K++,
        PIXI.Assets.load("./Animations/" + e + ".json").then((e => {
            ee[t] = e,
            ee[t].animation = t,
            J()
        }
        ))
    }
    function re(e, t, i=0) {
        K++,
        te[t] = new Pizzicato.Sound("./Audio/" + e + ".mp3",(function() {
            te[t].volume = 1,
            te[t].loaded = !0,
            null != te[t].onloadAudio && te[t].onloadAudio(),
            J()
        }
        )),
        te[t].loaded = !1,
        0 == i ? te.music.push(te[t]) : te.sfx.push(te[t])
    }
    console.warn = function() {}
    ;
    let se = {
        loadAttempts: 0
    }
      , le = localStorage.getItem("loaderData");
    if (null == le)
        q = {
            loadAttempts: 0
        };
    else
        try {
            q = JSON.parse(le)
        } catch (e) {
            q = se
        }
    function de() {
        localStorage.setItem("loaderData", JSON.stringify(q))
    }
    q.loadAttempts++,
    q.loadAttempts >= 3 && (n.HQSprites = !1),
    de();
    let ce = ""
      , he = "";
    "en-US" != n.language && (he = "Unicode"),
    n.HQSprites && (ce = "hd/"),
    ae("MenuShag" + he),
    ae("arial"),
    ae("ShagBlueNumber"),
    ae("ShagBlack" + he),
    ae("IndieFlower"),
    oe("Teardrop", "Teardrop"),
    oe("oil/Teardrop.TeardropBody", "oilTeardropBody"),
    oe("oil/TeardropTired.TeardropBody", "oilTeardropTiredBody"),
    oe("healthLose", "healthLose"),
    oe("loading", "loading"),
    oe("bfb", "bfb"),
    oe("TeardropTired", "TeardropTired"),
    oe("tearDropWatch", "tearDropWatch"),
    oe("tearDropLevelUp", "tearDropLevelUp"),
    oe("faceMinigame", "faceMinigame"),
    oe("oddDroplets", "oddDroplets"),
    oe("tearDropTennis", "tearDropTennis"),
    oe("GTTTATINT", "GTTTATINT"),
    oe("GTTTATINTLOSE", "GTTTATINTLOSE"),
    oe("Box", "Box"),
    oe("SkewMatrix", "SkewMatrix"),
    ie(ce + "GameThumbnails", "GameThumbnails", "Sprites/GameThumbnails"),
    ie("tennisBall", "tennisBall", "Sprites/tennisBall"),
    ie("BGLayer", "BGLayer", "BGLayer"),
    ne(ce + "Rooms/Rooms", 21, "Sprites/Rooms"),
    ne("Logo", 1, "Logo"),
    ie(ce + "Food", "Food", "Sprites/Food"),
    ie("Empty", "Empty", "Sprites/Empty"),
    re("wave", "wave", 1),
    re("yeah", "yeah"),
    re("brittlerille", "brittlerille"),
    re("LevelUp", "levelup"),
    re("Achievement", "achievement"),
    re("switchoff", "switchoff", 1),
    re("switchon", "switchon", 1),
    re("purchase", "purchase", 1),
    re("fail", "fail", 1),
    re("coinlarge", "coinlarge", 1),
    re("coinmedium", "coinmedium", 1),
    re("coinsmall", "coinsmall", 1),
    re("consume", "consume", 1),
    re("slap1", "slap1", 1),
    re("slap2", "slap2", 1),
    re("slap3", "slap3", 1),
    re("slap4", "slap4", 1),
    re("collect", "collect", 1),
    ie("Oldies/Bodies/1", "Bodies", "oldiesCostume/Bodies"),
    ie("Oldies/Mouths", "Mouth", "oldiesCostume/Mouth"),
    ie("Oldies/Limbs", "Limbs", "oldiesCostume/Limbs"),
    ie("Oldies/Eyes", "Eyes", "oldiesCostume/Eyes"),
    ie(ce + "Bodies/1", "Bodies", "Sprites/Bodies"),
    ie(ce + "Outline/BodiesOUTLINE12", "BodiesOUTLINE12", "Sprites/BodiesOUTLINE12"),
    ie(ce + "Bodies/BodiesCostume_1", "BodiesCostume_1", "Sprites/BodiesCostume_1"),
    ie("MouthsCostume10", "MouthsCostume10", "Sprites/MouthsCostume10"),
    ie("MouthsCostume21", "MouthsCostume21", "Sprites/MouthsCostume21"),
    ie("MouthsCostume25", "MouthsCostume25", "Sprites/MouthsCostume25"),
    ie("EyesCostume25", "EyesCostume25", "Sprites/EyesCostume25"),
    ie("LimbsCostume17", "LimbsCostume17", "Sprites/LimbsCostume17"),
    ie("LimbsCostume21", "LimbsCostume21", "Sprites/LimbsCostume21"),
    ie("Bodies/BodiesCostume21", "BodiesCostume21", "Sprites/BodiesCostume21"),
    ie(ce + "Mouths", "Mouth", "Sprites/Mouth"),
    ie(ce + "Limbs", "Limbs", "Sprites/Limbs"),
    ie(ce + "Outline/LimbsOUTLINE12", "LimbsOUTLINE12", "Sprites/LimbsOUTLINE12"),
    ie("LimbsCostume1", "LimbsCostume1", "Sprites/LimbsCostume1"),
    ie(ce + "Eyes", "Eyes", "Sprites/Eyes"),
    ie(ce + "Outline/EyesOUTLINE12", "EyesOUTLINE12", "Sprites/EyesOUTLINE12"),
    ie("EyesCostume21", "EyesCostume21", "Sprites/EyesCostume21"),
    ie("CakeSlicePlane", "CakeSlicePlane", "Sprites/CakeSlicePlane"),
    ie("Clouds", "Clouds", "Sprites/Clouds"),
    ie(ce + "Poses", "Poses", "Sprites/Poses"),
    ie("Blur", "Blur", "Sprites/Blur"),
    ie("Box", "Box", "Sprites/Box"),
    ie(ce + "GameUI", "GameUI", "Sprites/GameUI"),
    ie("Placeholders", "Placeholders", "Sprites/Placeholders"),
    ie("Starfield", "Starfield", "Backgrounds/Starfield"),
    ie("RepeatingUI", "RepeatingUI", "Sprites/RepeatingUI"),
    ie(ce + "inputNineSlice", "inputNineSlice", "inputNineSlice");
    function ue(e, t=0) {
        return {
            scale: {
                x: Math.sqrt(e.a ** 2 + e.b ** 2),
                y: Math.sqrt(e.c ** 2 + e.d ** 2)
            },
            skew: {
                x: 180 / Math.PI * Math.atan2(e.d, e.c) - 90,
                y: 180 / Math.PI * Math.atan2(e.b, e.a)
            },
            rotation: t,
            skewing: null == t
        }
    }
    let pe = 0
      , me = 1
      , ye = 2
      , ge = 3
      , fe = 4
      , xe = 5
      , we = 6
      , ve = 7
      , Ie = 8
      , Se = 9
      , Ce = 10
      , be = 11
      , Me = 12
      , Pe = 13;
    function Te(e, t) {
        let i = 0
          , n = new PIXI.Container;
        n.animationName = e.animation,
        n.idle = -1,
        n.frameCount = e.frameCount,
        n.customs = [],
        n.layers = [];
        let a = {};
        for (let t in e.layers)
            e.layers[t].isCustom ? (a[t] = Te(e.symbols[e.layers[t].symbol]),
            a[t].symbol = e.layers[t].symbol,
            n.customs.push(a[t])) : a[t] = new PIXI.AnimatedSprite($[e.layers[t].symbol]),
            n.layers.push(t),
            a[t].symbol = e.layers[t].symbol,
            n.addChild(a[t]),
            n[t] = a[t],
            "FireyFlame" == e.layers[t].symbol && (a[t].gotoAndPlay(0),
            a[t].animationSpeed = .4);
        function o(t, i=!0) {
            let n = a[t].curframe == e.layers[t].frames.length - 1 ? 0 : e.layers[t].frames[a[t].curframe + 1]
              , o = e.layers[t].frames[a[t].curframe];
            if (a[t].inactive = null == o[1],
            a[t].inactive)
                a[t].alpha = 0;
            else {
                if (a[t].pivot.x = o[Ie],
                a[t].pivot.y = o[Se],
                a[t].alpha = 1,
                0 != n && -2 != o[Me] && i) {
                    let e = a[t].frameProgress - 1
                      , i = new PIXI.Matrix(o[ge],o[fe],o[xe],o[we],0,0)
                      , r = new PIXI.Matrix(n[ge],n[fe],n[xe],n[we],0,0)
                      , s = ue(i, o[ve])
                      , l = ue(r, n[ve])
                      , d = l.rotation - s.rotation;
                    d > 180 && (d = -180 - (180 - d)),
                    d < -180 && (d = 180 + (180 + d));
                    let c = l.skew.x - s.skew.x;
                    c > 180 && (c = -180 - (180 - c)),
                    c < -180 && (c = 180 + (180 + c));
                    let h = l.skew.y - s.skew.y;
                    h > 180 && (h = -180 - (180 - h)),
                    h < -180 && (h = 180 + (180 + h));
                    let u = {
                        skew: {
                            x: ease[o[Me] + 1](e, s.skew.x, c, o[pe]),
                            y: ease[o[Me] + 1](e, s.skew.y, h, o[pe])
                        },
                        scale: {
                            x: ease[o[Me] + 1](e, s.scale.x, l.scale.x - s.scale.x, o[pe]),
                            y: ease[o[Me] + 1](e, s.scale.y, l.scale.y - s.scale.y, o[pe])
                        },
                        rotation: ease[o[Me] + 1](e, s.rotation, d, o[pe])
                    };
                    s.skewing || l.skewing ? u.rotation = 0 : (u.skew.x = 0,
                    u.skew.y = 0),
                    a[t].transform.setFromMatrix(function(e) {
                        let t = e.rotation * (Math.PI / 180)
                          , i = e.skew.x * (Math.PI / 180)
                          , n = e.skew.y * (Math.PI / 180);
                        isNaN(i) && (i = 0),
                        isNaN(n) && (n = 0);
                        let a = e.scale.x
                          , o = e.scale.y
                          , r = new PIXI.Matrix(1,0,0,1,0,0);
                        return r.a *= Math.cos(n),
                        r.b = Math.sin(n),
                        r.c = -Math.sin(i),
                        r.d *= Math.cos(i),
                        r.a *= Math.cos(t),
                        r.b += Math.sin(t),
                        r.c -= Math.sin(t),
                        r.d *= Math.cos(t),
                        r.a *= a,
                        r.b *= a,
                        r.c *= o,
                        r.d *= o,
                        r
                    }(u)),
                    a[t].scale.x = u.scale.x,
                    a[t].scale.y = u.scale.y,
                    a[t].x = ease[o[Me] + 1](e, o[me], n[me] - o[me], o[pe]),
                    a[t].y = ease[o[Me] + 1](e, o[ye], n[ye] - o[ye], o[pe]);
                    let p = o[Pe]
                      , m = n[Pe];
                    p == m && a[t].alpha == m || (a[t].alpha = ease[o[Me] + 1](e, p, m - p, o[pe]))
                } else {
                    let e = new PIXI.Matrix(o[ge],o[fe],o[xe],o[we],0,0);
                    a[t].transform.setFromMatrix(e),
                    a[t].x = o[me],
                    a[t].y = o[ye],
                    a[t].alpha = o[Pe]
                }
                if (e.layers[t].isCustom || (o[Ce] = o[Ce] % a[t].textures.length),
                !e.layers[t].isCustom && "FireyFlame" != e.layers[t].symbol) {
                    let e = o[Ce];
                    null != a[t].overrideSprite && null != a[t].overrideSprite[e] && (e = a[t].overrideSprite[e]),
                    a[t].gotoAndStop(e)
                }
            }
        }
        function r(t, i) {
            let n = i.frames
              , a = 0;
            t = Math.min(e.frameCount - 1, t);
            for (let e = 0; e < n.length; e++) {
                if (t >= a && a + n[e][0] > t)
                    return [e, t - a];
                a += n[e][0]
            }
        }
        new PIXI.Transform;
        let s = !1;
        return n.fps = 0,
        n.onAnimationEnd = function() {}
        ,
        n.gotoAndStop = function(e) {
            n.goto(e),
            n.stop()
        }
        ,
        n.gotoAndPlay = function(e, t) {
            n.goto(e),
            n.play(t)
        }
        ,
        n.parts = t,
        n.currentPart = -1,
        n.gotoPart = function(e) {
            null != n.parts[e] && n.currentPart != e && (n.currentPart = e,
            n.goto(n.parts[e].start),
            n.firstFrame = n.parts[e].start,
            n.playUntil = n.parts[e].end,
            n.loop = n.parts[e].loop)
        }
        ,
        n.goto = function(t) {
            s = !1,
            null == t && (t = 0),
            i = t;
            for (let i in a) {
                let n = r(t, e.layers[i]);
                a[i].curframe = n[0],
                a[i].frameProgress = n[1] + 1,
                e.layers[i].isCustom && null != e.layers[i].frames[a[i].curframe][Ce] && (a[i].goto(e.layers[i].frames[a[i].curframe][Ce] + (2 == e.layers[i].frames[a[i].curframe][be] ? 0 : a[i].frameProgress - 1)),
                a[i].l = e.layers[i].frames[a[i].curframe][be]),
                o(i, !1),
                o(i)
            }
        }
        ,
        n.animationData = e,
        n.destroyAnimation = function() {
            n.stop();
            for (let e in a)
                a[e].parent.removeChild(a[e]),
                null != a[e].destroyAnimation ? a[e].destroyAnimation() : a[e].destroy({
                    children: !0
                });
            null != n.parent && n.parent.removeChild(n),
            n.destroy({
                children: !0
            })
        }
        ,
        n.onNextFrame = -1,
        n.play = function(e=60) {
            n.fps = e,
            clearInterval(n.interval),
            -1 != n.onNextFrame ? n.interval = setInterval((function() {
                n.nextFrame(),
                n.onNextFrame(n)
            }
            ), 1e3 / e) : n.interval = setInterval((function() {
                n.nextFrame()
            }
            ), 1e3 / e)
        }
        ,
        n.playUntil = -1,
        n.firstFrame = 0,
        n.stop = function(e) {
            clearInterval(n.interval)
        }
        ,
        n.getCurFrame = function() {
            return i
        }
        ,
        n.goto(0),
        n.nextFrame = function() {
            let t = n.playUntil;
            if (-1 == n.playUntil && (t = e.frameCount - 1),
            i++,
            t < i)
                return n.loop && n.goto(n.firstFrame),
                void (0 == s && (s = !0,
                -1 != n.idle && n.gotoPart(n.idle),
                n.onAnimationEnd()));
            for (let t in a) {
                if (a[t].inactive = !1,
                null == a[t].curframe && (a[t].curframe = 0),
                null == a[t].frameProgress)
                    a[t].frameProgress = 1;
                else {
                    let i = e.layers[t].frames[a[t].curframe];
                    e.layers[t].isCustom && 2 != i[be] && a[t].nextFrame(),
                    a[t].frameProgress >= e.layers[t].frames[a[t].curframe][pe] && (a[t].frameProgress = 0,
                    a[t].curframe < e.layers[t].frames.length - 1 ? (a[t].curframe++,
                    e.layers[t].isCustom && (a[t].goto(e.layers[t].frames[a[t].curframe][Ce]),
                    a[t].l = i[be])) : a[t].inactive = !0),
                    a[t].frameProgress++
                }
                o(t)
            }
        }
        ,
        n.switchData = function(t) {
            e = t;
            for (let e = 0; e < n.customs.length; e++)
                n.customs[e].switchData(t.symbols[n.customs[e].symbol]);
            n.animationName = e.animation
        }
        ,
        n.switchParts = function(e) {
            n.parts = e
        }
        ,
        n
    }
    let ke = {
        "en-US": {
            lang: "English",
            button: ["DOWNLOAD", "USE", "UPDATE"],
            downloaded: !0
        },
        "tr-TR": {
            lang: "Türkçe",
            translator: D.vendormint,
            file: "./Languages/tr-TR",
            available: !1,
            button: ["INDIR", "KULLAN", "GUNCELLE"]
        },
        "fr-FR": {
            lang: "Français",
            translator: D.teardrop,
            file: "./Languages/fr-FR",
            button: ["TELECHARGER", "UTILISER", "MISE À JOUR"]
        },
        "es-ES": {
            lang: "Türkçe",
            translator: {
                name: D.stevencrack.name + ", " + D.thinking909.name
            },
            file: "./Languages/es-ES",
            available: !1,
            button: ["DESCARGAR", "USAR", "ACTUALIZAR"]
        }
    };
    for (let e in ke)
        e in localStorage && (ke[e].downloaded = !0);
    let Ae, Ee, Le, Xe, Ne = {
        0: {
            name: "Match",
            id: 0,
            available: !1
        },
        1: {
            name: "Pencil",
            id: 1,
            available: !1
        },
        2: {
            name: "Bubble",
            id: 2,
            available: !1
        },
        5: {
            width: 100,
            height: 100,
            name: "Ice Cube",
            id: 5,
            available: !0
        },
        6: {
            width: 100,
            height: 100,
            name: "Leafy",
            id: 6,
            available: !0
        },
        9: {
            width: 100,
            height: 100,
            name: "Rocky",
            id: 9,
            available: !0
        },
        13: {
            name: "Woody",
            id: 13,
            available: !1
        },
        19: {
            width: 300,
            height: 200,
            name: "Spongy",
            id: 19,
            available: !0
        },
        22: {
            name: "Tennis Ball",
            id: 22,
            available: !1
        },
        23: {
            name: "Pen",
            id: 23,
            available: !1
        },
        31: {
            width: 75,
            height: 100,
            name: "Coiny",
            id: 31,
            available: !0
        },
        32: {
            width: 75,
            height: 100,
            name: "Pin",
            id: 32,
            available: !0
        },
        33: {
            name: "Firey",
            id: 33,
            available: !1
        },
        34: {
            width: 60,
            height: 100,
            name: "Needle",
            id: 34,
            available: !0
        },
        39: {
            name: "Golf Ball",
            id: 39,
            available: !1
        },
        44: {
            name: "Blocky",
            id: 44,
            available: !1
        },
        51: {
            name: "Eraser",
            id: 51,
            available: !1
        },
        54: {
            name: "Flower",
            id: 54,
            available: !1
        },
        57: {
            name: "Snowball",
            id: 57,
            available: !1
        },
        62: {
            name: "Teardrop",
            id: 62,
            available: !1
        }
    }, De = function(e=function() {}
    ) {
        let t = function() {
            n.music && te.clouddancer.play()
        };
        n.music && (te.brittlerille.pause(),
        te.clouddancer.play(),
        te.clouddancer.volume = .5,
        te.clouddancer.release = 1,
        te.clouddancer.on("end", t));
        let i = new PIXI.Sprite($["Sprites/Rooms"][18]);
        c.stage.addChild(i),
        i.tint = 8818106,
        i.interactive = !0,
        i.x = c.screen.width / 2,
        i.y = c.screen.height / 2,
        i.anchor.set(.5, .5),
        i.scale.x = 1.5,
        i.scale.y = 1.5;
        let o = new PIXI.Container;
        c.stage.addChild(o);
        let r = {}
          , l = 0
          , d = 0
          , u = []
          , p = a("", 32, "center");
        p.x = c.screen.width / 2,
        p.y = c.screen.height - 150,
        n.costume;
        let m = new PIXI.Container;
        m.hitArea = new PIXI.Rectangle(-5e3,-5e3,1e4,1e4);
        let y = new PIXI.Graphics;
        m.mask = y,
        c.stage.addChild(m),
        m.x = 0,
        m.y = 0;
        let g = c.screen.width
          , f = c.screen.height;
        y.beginFill(0),
        y.drawRect(m.x, m.y, g, f),
        y.endFill(),
        m.interactive = !0,
        m.on("pointerdown", (function(e) {
            let t = e.clientY / s;
            m.dragOffset = {
                y: t - m.y
            },
            m.prevY = m.y,
            m.vy = 0,
            m.scrolling = !0
        }
        ));
        let x = function(e) {
            if (!m.scrolling)
                return;
            let t = e.clientY / s;
            m.prevY = m.y,
            m.y = t - m.dragOffset.y
        }
          , w = function() {
            m.scrolling = !1
        };
        document.addEventListener("pointermove", x),
        document.addEventListener("pointerup", w),
        m.vy = 0;
        let v = function() {
            let e = 80 - S - 50 + f;
            m.vy = h.linear(m.vy, -.5, .05, Qe),
            m.scrolling ? m.vy = m.y - m.prevY : m.y += m.vy,
            I.targetAlpha = 1,
            m.y >= 0 && (m.y = 0,
            m.vy = 0),
            m.y <= e && (I.targetAlpha = 0,
            m.y = e,
            m.vy = 0),
            I.alpha = h.linear(I.alpha, I.targetAlpha, .1, Qe),
            i.y = h.linear(i.y, m.y / 40 + 80 + 50, .1, Qe)
        };
        c.ticker.add(v);
        let I = new PIXI.Sprite($["Sprites/Rooms"][11]);
        I.x = m.x,
        I.y = m.y + f - 90,
        I.width = g,
        I.height = 100;
        let S = 0
          , C = {
            "User Interface": ["VENDORMINT"],
            Characters: [],
            "Early Supporters": ["semihasem142", "albertito9736", "leafsterzx", "rat_real.", "yourgurllucy", "infected_came_back.", "generalbonnie", "riverplayerone", "jampu", "tear_drop_bfb / pilowd", "alexpple", "donutmations", "orphan / cherryjrtheorphan_.", "coiny68617"],
            "Beta Testers": ["tear_drop_bfb / pilowd", "oyui / thinking909", "NOOB / tyblade9", "BlueSky", "freesmart", "stevencrack", "ultimate1duck", "flanimations", "kenzie._kenz", "kyl9341", "veetheglaceon", "donutmations", D.thinking909.name, "anni_on_ayanna", "beetlebrick_", D.cringeindividual.name, "tawnypawzz", "geebweezer", "fridgethewhat123", "lufafa13", "infationtoons", "mationsBOMB", "lach15bro", "NOOB / tyblade9", "ricol3", "maple_two", "jampu", "mizosis", D.briteideajuni.name],
            "Costume Artists": [],
            Animation: ["VENDORMINT", "jacknjellify"],
            "Graphic Design": ["VENDORMINT"],
            "Original Games": ["Cary Huang - GTTTATINT101"],
            "Minigame Help": ["Flanimations - Odd Droplets Posing", D.dialup.name + " - Odd Droplets Posing"],
            Programming: ["VENDORMINT"],
            Music: ["Kevin Macleod - New Friendly", "Kevin Macleod - Radio Martini", "Kevin Macleod - Brittle Rille", "Kevin Macleod - Shiny Tech", "Kevin Macleod - Pamgaea", "Kevin Macleod - Cloud Dancer", "FannToons - papshru"]
        };
        for (let e in Ne)
            C.Characters.push("jacknjellify - " + Ne[e].name);
        for (let e in D)
            C["Costume Artists"].push(D[e].name);
        S += 200;
        let b = new PIXI.Sprite($.Logo[0]);
        b.width = 200,
        b.scale.y = b.scale.x,
        b.x = c.screen.width / 2,
        b.y = 100,
        u.push(b),
        b.anchor.set(.5, .5),
        m.addChild(b);
        for (let e in C) {
            let t = a(e, 32, "center");
            t.y = S,
            S += 48,
            m.addChild(t);
            for (let t = 0; t < C[e].length; t++) {
                let i = a(C[e][t], 16, "center");
                i.y = S,
                S += 32,
                m.addChild(i),
                i.x = c.screen.width / 2,
                C[e][t].toLowerCase().includes("teardrop") && (i.tint = 6737151)
            }
            S += 30,
            t.x = c.screen.width / 2
        }
        S += 100;
        let M = Fe.exitButton((function() {
            e(),
            Fe.flash(!1, k)
        }
        ), c.screen.width - 40, 40, .4, 0);
        c.stage.addChild(M.sprite),
        o.origX = 0,
        o.time = 50;
        let P = !1
          , T = function() {
            P || (o.x = 0,
            l > .01 && (o.x += Math.cos(d) * l * 5,
            d += .5 * Qe,
            l = h.linear(l, 0, .1, Qe)),
            p.alpha > 0 && (p.alpha -= .04))
        };
        function k() {
            n.music && (te.brittlerille.play(),
            te.clouddancer.stop(),
            te.clouddancer.off("end", t),
            delete te.clouddancer),
            c.ticker.remove(v),
            document.removeEventListener("pointermove", x),
            document.removeEventListener("pointerup", w);
            for (let e in r)
                null != r[e].destroy && r[e].destroy(),
                delete r[e];
            p.destroy(),
            M.destroy(),
            i.destroy();
            for (let e = 0; e < u.length; e++)
                u[e].destroyed || u[e].destroy();
            c.ticker.remove(T),
            P = !0
        }
        c.ticker.add(T),
        c.stage.addChild(p),
        u.push(I),
        u.push(m),
        u.push(y)
    }, Ge = [{
        name: o.settings.music,
        value: n.music,
        enable: function() {
            n.music = !0,
            te.brittlerille.volume = .5,
            te.brittlerille.play()
        },
        disable: function() {
            te.brittlerille.pause(),
            n.music = !1
        }
    }, {
        name: o.settings.minigameMusic,
        value: n.minigameMusic,
        enable: function() {
            n.minigameMusic = !0
        },
        disable: function() {
            n.minigameMusic = !1
        }
    }, {
        name: o.settings.sfx,
        value: n.sfx,
        enable: function() {
            n.sfx = !0
        },
        disable: function() {
            n.sfx = !1
        }
    }, {
        name: o.settings.minigameCostumes,
        value: n.minigameCostumes,
        enable: function() {
            n.minigameCostumes = !0
        },
        disable: function() {
            n.minigameCostumes = !1
        }
    }, {
        name: "Experimental Costumes",
        value: n.levelUpCostumes,
        enable: function() {
            n.levelUpCostumes = !0
        },
        disable: function() {
            n.levelUpCostumes = !1
        }
    }, {
        name: "Safe Screen Area",
        value: n.safeArea,
        mobile: !0,
        enable: function() {
            n.safeArea = !0,
            A()
        },
        disable: function() {
            n.safeArea = !1,
            A()
        }
    }, {
        name: "Credits",
        type: "button",
        flash: !0,
        enable: function() {
            clearTimeout(Ae),
            Fe.loader(De, [["clouddancer", "clouddancer"]])
        }
    }, {
        name: "SFX Volume",
        type: "slider",
        enable: function(e) {
            n.sfxVolume = e,
            te.sfx.volume = e
        },
        value: n.sfxVolume,
        preview: function() {
            clearTimeout(Ae),
            n.music && (te.brittlerille.pause(),
            Ae = setTimeout((function() {
                n.music && te.brittlerille.play()
            }
            ), 2e3)),
            te.consume.stop(),
            te.consume.play()
        }
    }, {
        name: "Music Volume",
        type: "slider",
        preview: function() {
            te.achievement.stop(),
            clearTimeout(Ae),
            n.music && (te.brittlerille.pause(),
            Ae = setTimeout((function() {
                n.music && te.brittlerille.play()
            }
            ), 2e3)),
            te.achievement.play(),
            te.achievement.sourceNode.playbackRate.value = 1.1
        },
        enable: function(e) {
            n.musicVolume = e,
            te.music.volume = e
        },
        value: n.musicVolume
    }, {
        name: "Controls",
        type: "button",
        flash: !0,
        mobile: !0,
        enable: function() {
            Be((function() {
                n.controllerProfile.GTTTATINT = a;
                for (let e = 0; e < r.length; e++)
                    r[e].destroy()
            }
            ), [{
                name: "Button Size",
                type: "slider",
                enable: function(t) {
                    e(t),
                    a.buttonScale = t
                },
                preview: function() {},
                value: .5
            }, {
                name: "Align",
                type: "button",
                enable: function() {
                    Fe.message("Align controllers", void 0, (function() {
                        let e = (t[" "].sprite.y + t.a.sprite.y + t.d.sprite.y) / 3;
                        t.a.sprite.y = e,
                        t.d.sprite.y = e,
                        t[" "].sprite.y = e;
                        for (let e in t)
                            t[e].refreshProfile()
                    }
                    ), (function() {
                        let e = (t.a.sprite.y + t.d.sprite.y) / 2;
                        t.a.sprite.y = e,
                        t.d.sprite.y = e;
                        for (let e in t)
                            t[e].refreshProfile()
                    }
                    ), ["All", "Left/Right"])
                }
            }, {
                name: "Reset",
                type: "button",
                enable: function() {
                    Fe.message("Are you sure you want to reset the controller configuration?", void 0, (function() {
                        for (let e in a.buttons)
                            a.buttons[e].x = i.buttons[e].x,
                            a.buttons[e].y = i.buttons[e].y,
                            a.buttons[e].lock = i.buttons[e].lock;
                        for (let e in t)
                            t[e].refresh();
                        a.buttonScale = i.buttonScale,
                        e(a.buttonScale)
                    }
                    ), (function() {}
                    ), ["Yes", "Cancel"])
                }
            }], "GTTTATINT Controller Profile");
            let e = function(e) {
                for (let i in t)
                    t[i].sprite.scale.x = e + .5,
                    t[i].sprite.scale.y = e + .5,
                    t[i].sprite.originalSize = {
                        x: t[i].sprite.scale.x,
                        y: t[i].sprite.scale.y
                    },
                    t[i].sprite.destinationSize = t[i].sprite.originalSize,
                    t[i].sprite.animationSize = t[i].sprite.originalSize,
                    t[i].sprite.animationTime = 0
            }
              , t = {}
              , i = {
                buttons: {
                    a: {
                        x: -150,
                        y: -50,
                        lock: 1
                    },
                    d: {
                        x: -50,
                        y: -50,
                        lock: 1
                    },
                    " ": {
                        x: 100,
                        y: -50,
                        lock: 0
                    }
                },
                buttonScale: .5
            }
              , a = n.controllerProfile.GTTTATINT;
            function o(e, i, n, o) {
                let r = a.buttonScale + .5
                  , s = new P((function() {
                    Fe.message("Lock position to", void 0, (function() {
                        1 == a.buttons[o].lock && (a.buttons[o].x += c.screen.width),
                        a.buttons[o].lock = 0,
                        s.refresh()
                    }
                    ), (function() {
                        0 == a.buttons[o].lock && (a.buttons[o].x -= c.screen.width),
                        a.buttons[o].lock = 1,
                        s.refresh()
                    }
                    ), ["Bottom Left", "Bottom Right"])
                }
                ),$["Sprites/GameUI"][n],{
                    x: e,
                    y: i,
                    scale: {
                        x: r,
                        y: r
                    }
                });
                s.sprite.on("pointerdown", (function() {
                    for (let e in t)
                        t[e].sprite.interactive = !1;
                    s.sprite.interactive = !0
                }
                )),
                s.sprite.on("pointermove", (function() {
                    s.refreshProfile()
                }
                )),
                s.refreshProfile = function() {
                    0 == a.buttons[o].lock ? (a.buttons[o].x = s.sprite.x,
                    a.buttons[o].y = s.sprite.y - c.screen.height) : (a.buttons[o].x = s.sprite.x - c.screen.width,
                    a.buttons[o].y = s.sprite.y - c.screen.height)
                }
                ,
                s.sprite.on("pointerup", (function() {
                    for (let e in t)
                        t[e].sprite.interactive = !0,
                        t[e].refresh()
                }
                )),
                I(s.sprite, s.sprite.hitArea),
                t[o] = s,
                c.stage.addChild(s.sprite)
            }
            o(0, 0, 21, "a"),
            o(0, 0, 22, "d"),
            o(0, 0, 23, " ");
            let r = [];
            for (let e in t) {
                let i = new PIXI.Sprite($["Sprites/GameUI"][7]);
                t[e].sprite.addChild(i),
                t[e].refresh = function() {
                    t[e].sprite.x = c.screen.width * a.buttons[e].lock + a.buttons[e].x,
                    t[e].sprite.y = c.screen.height + a.buttons[e].y,
                    i.anchor.set(.5, .5),
                    i.x = -t[e].sprite.texture.trim.width / 2 + a.buttons[e].lock * t[e].sprite.texture.trim.width,
                    i.y = t[e].sprite.texture.trim.height / 2,
                    i.scale.x = .25,
                    i.scale.y = .25,
                    i.rotation = (1 - a.buttons[e].lock) * Math.PI / 2 - Math.PI / 4
                }
                ,
                r.push(i),
                r.push(t[e]),
                t[e].refresh()
            }
        }
    }, {
        name: "Backup",
        type: "button",
        flash: !0,
        hidden: n.privateBeta,
        enable: function() {
            let e = -1;
            Be((function() {
                -1 != e && document.body.removeChild(e)
            }
            ), [{
                name: "Download",
                type: "button",
                flash: !1,
                enable: function() {
                    let e = document.createElement("a")
                      , t = localStorage.myTeardrop;
                    e.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)),
                    e.setAttribute("download", "myTeardrop.txt"),
                    e.style.display = "none",
                    document.body.appendChild(e),
                    e.click(),
                    document.body.removeChild(e)
                }
            }, {
                name: "Upload",
                type: "button",
                flash: !1,
                enable: function() {
                    Fe.message("This will overwrite your current save file and is an irreversible action.", $["Sprites/GameUI"][24], (function() {
                        let t = function(t=document.createElement("button"), i=document.createElement("input")) {
                            return t.innerText = "Upload",
                            i.type = "file",
                            i.style.display = "none",
                            t.style = "position:fixed;z-index: 100;top:0px;left:0px;",
                            e = t,
                            t.onclick = function() {
                                i.click(),
                                i.onchange = function() {
                                    let e = new FileReader;
                                    e.onload = function(e) {
                                        H(e.currentTarget.result),
                                        _ ? Fe.message("Not genuine save file. Action cancelled", $["Sprites/GameUI"][24], (function() {}
                                        )) : (Fe.message("Success! Reloading game...", $["Sprites/GameUI"][24], (function() {}
                                        )),
                                        localStorage.setItem("myTeardrop", e.currentTarget.result),
                                        setTimeout((function() {
                                            window.location = window.location
                                        }
                                        ), 500))
                                    }
                                    ,
                                    e.readAsText(i.files[0])
                                }
                            }
                            ,
                            document.body.appendChild(i),
                            t
                        }();
                        t.onclick(),
                        document.body.appendChild(t)
                    }
                    ), (function() {}
                    ), ["Upload", "Cancel"])
                }
            }, {
                name: "Clear",
                type: "button",
                flash: !1,
                enable: function() {
                    Fe.message("This action is irreversible and will completely wipe your save file!", $["Sprites/GameUI"][24], (function() {
                        setTimeout((function() {
                            Fe.message("Are you really sure??", $["Sprites/GameUI"][24], (function() {
                                clearInterval(j),
                                localStorage.removeItem("myTeardrop"),
                                setTimeout((function() {
                                    window.location = window.location
                                }
                                ), 500)
                            }
                            ), (function() {}
                            ), ["Proceed", "Cancel"])
                        }
                        ), 500)
                    }
                    ), (function() {}
                    ), ["Proceed", "Cancel"])
                }
            }], "Savefile tools")
        }
    }], Be = function(e=function() {}
    , t=Ge, i=ze + (We ? "(release, offline)" : "(release)")) {
        let n = new PIXI.Sprite($["Sprites/Rooms"][13]);
        c.stage.addChild(n),
        n.interactive = !0,
        n.x = c.screen.width / 2,
        n.y = c.screen.height / 2,
        n.anchor.set(.5, .5),
        n.scale.x = 1,
        n.scale.y = 1;
        let o = new PIXI.Container;
        c.stage.addChild(o);
        let r = Fe.exitButton((function() {
            e(),
            W(),
            Fe.flash(!1, S)
        }
        ), c.screen.width - 40, 40, .4, 0);
        c.stage.addChild(r.sprite),
        o.origX = 0,
        o.time = 50;
        let l = !1
          , d = function() {
            l || (o.x = 0)
        }
          , h = 0
          , u = 10;
        c.ticker.add(d);
        let p = []
          , g = new PIXI.Sprite($.Logo[0]);
        g.width = 200,
        g.scale.y = g.scale.x,
        g.x = 80,
        g.y = 20,
        g.id = T(),
        v(g, (function() {
            if (u--,
            0 == u) {
                if (m.tauntLogo.done)
                    return Fe.message("GET OUT!", -1),
                    void setTimeout((function() {
                        setInterval((function() {
                            let e = Te(ee.Teardrop, y.Teardrop)
                              , t = [];
                            for (let e in B)
                                B[e].owned && t.push(B[e]);
                            t[Math.floor(Math.random() * t.length)].apply(e),
                            e.x = c.screen.width * Math.random(),
                            e.y = c.screen.height * Math.random(),
                            e.rotation = Math.random() * Math.PI * 4,
                            e.play(60);
                            let i = Object.keys(y.Teardrop);
                            e.gotoPart(i[Math.floor(Math.random() * i.length)]),
                            c.stage.addChild(e)
                        }
                        ), 1e3 / 60),
                        setTimeout((function() {
                            window.location = window.location
                        }
                        ), 1e3)
                    }
                    ), 500);
                switch (h) {
                case 0:
                    u = 10,
                    Fe.message("don't.", -1);
                    break;
                case 1:
                    u = 10,
                    Fe.message("no.", -1);
                    break;
                case 2:
                    u = 5,
                    Fe.message("stop...", -1);
                    break;
                case 3:
                    u = 20,
                    Fe.message("STOP!!", -1);
                    break;
                case 4:
                case 6:
                    u = 10,
                    Fe.message("...", -1);
                    break;
                case 5:
                    u = 10,
                    Fe.message("Will you leave me alone if I give you a costume?", -1, (function() {
                        setTimeout((function() {
                            Fe.message("I'll think about it.", -1, (function() {}
                            )),
                            u = 10
                        }
                        ), 500)
                    }
                    ), (function() {
                        setTimeout((function() {
                            Fe.message("get out.", -1, (function() {
                                e(),
                                Fe.flash(!1, S)
                            }
                            ))
                        }
                        ), 1e3)
                    }
                    ), ["Yes", "No"]);
                    break;
                case 7:
                    {
                        function t() {
                            setTimeout((function() {
                                Fe.message("Just kidding! Or am I... ok now please actually leave me alone here's your costume", -1, (function() {
                                    Fe.blurPan(c.stage, (function() {
                                        S(),
                                        Fe.achievementQueue("tauntLogo"),
                                        B.giant.owned = !0
                                    }
                                    ))
                                }
                                )),
                                u = 10
                            }
                            ), 500)
                        }
                        u = 10,
                        Fe.message("WARNING: THIS ACTION WILL COMPLETELY ERASE YOUR SAVE FILE!", -1, t, t, ["Continue", "Continue"])
                    }
                }
                h++
            }
        }
        )),
        x[g.id] = g,
        g.interactive = !0,
        p.push(g),
        c.stage.addChild(g),
        g.anchor.set(.5, .5),
        g.x += g.width / 2,
        g.y += g.height / 2;
        let f = a(i, 16);
        f.x = 90,
        f.y = g.y + g.height / 2,
        p.push(f),
        c.stage.addChild(f);
        let w = 80
          , I = 0;
        for (let e = 0; e < t.length; e++) {
            let i = t[e];
            if (!i.hidden && (c.touchScreen || !i.mobile))
                if (null == i.type) {
                    let e = new P((function() {
                        e.activated = !e.activated,
                        e.activated ? (e.sprite.texture = $["Sprites/GameUI"][26],
                        i.enable(e),
                        i.value = !0) : (e.sprite.texture = $["Sprites/GameUI"][25],
                        i.disable(e),
                        i.value = !1)
                    }
                    ),i.value ? $["Sprites/GameUI"][26] : $["Sprites/GameUI"][25],{
                        scale: {
                            x: .75,
                            y: .75
                        }
                    });
                    e.sprite.x = w,
                    e.sprite.y = 150 + I,
                    c.stage.addChild(e.sprite),
                    e.activated = i.value;
                    let t = a(i.name, 24, "left", "middle");
                    t.x = 110,
                    t.y = 148 + I,
                    t.width > c.screen.width - w - t.x && (t.width = c.screen.width - w - t.x,
                    t.scale.y = t.scale.x),
                    c.stage.addChild(t),
                    p.push(e),
                    p.push(t),
                    I += 40
                } else if ("button" == i.type) {
                    let e = new M((function() {
                        i.flash ? Fe.flash(!1, i.enable) : i.enable()
                    }
                    ),w,150 + I,200,30,i.name,0,0,.5,1,"center");
                    c.stage.addChild(e.element),
                    p.push(e),
                    I += 50
                } else if ("slider" == i.type) {
                    let e = 200
                      , t = 10
                      , n = w
                      , o = a(i.name, 24, "left", "middle");
                    o.x = w,
                    o.y = 148 + I - 10,
                    c.stage.addChild(o);
                    let r = 150 + I + 20;
                    I += 60;
                    let l = new PIXI.NineSlicePlane($.inputNineSlice[17],25,25,25,25);
                    l.width = e + 5 + t,
                    l.height = t + 5,
                    c.stage.addChild(l),
                    l.x = n - 2.5 - t / 2,
                    l.y = r - 2.5 - t / 2;
                    let d = new PIXI.NineSlicePlane($.inputNineSlice[15],25,25,25,25);
                    d.width = e + t,
                    d.height = t,
                    c.stage.addChild(d),
                    d.x = n - t / 2,
                    d.y = r - t / 2;
                    let h = new PIXI.NineSlicePlane($.inputNineSlice[16],25,25,25,25);
                    h.width = e / 2 - 4 + t,
                    h.height = t - 4,
                    c.stage.addChild(h),
                    h.x = n + 2 - t / 2,
                    h.y = r + 2 - t / 2;
                    let u = new P((function() {}
                    ),$["Sprites/GameUI"][43],{
                        scale: {
                            x: .5,
                            y: .5
                        }
                    });
                    u.sprite.x = n,
                    u.sprite.y = r,
                    c.stage.addChild(u.sprite),
                    u.sprite.originalHitArea = u.sprite.hitArea,
                    u.sprite.on("pointerdown", (function(e) {
                        u.sprite.hitArea = new PIXI.Rectangle(-3e3,-3e3,6e3,6e3),
                        u.sprite.dragging = !0;
                        let t = e.clientX / s
                          , i = e.clientY / s;
                        u.sprite.dragOffset = {
                            x: t - u.sprite.x,
                            y: i - u.sprite.y
                        }
                    }
                    )),
                    u.sprite.on("pointermove", (function(t) {
                        let a = t.clientX / s;
                        t.clientY,
                        u.sprite.dragging && (u.sprite.x = Math.min(n + e, Math.max(n, a - u.sprite.dragOffset.x)),
                        h.width = u.sprite.x - h.x,
                        i.enable((u.sprite.x - n) / e),
                        i.value = (u.sprite.x - n) / e)
                    }
                    )),
                    u.sprite.on("pointerup", (function() {
                        u.sprite.dragging = !1,
                        u.sprite.hitArea = u.sprite.originalHitArea,
                        i.preview()
                    }
                    )),
                    p.push(u),
                    p.push(h),
                    p.push(d),
                    p.push(l),
                    i.set = function(i) {
                        h.width = e * i - 4 + t,
                        u.sprite.x = n + e * i
                    }
                    ,
                    i.set(i.value),
                    p.push(o)
                }
        }
        function S() {
            W();
            for (let e = 0; e < p.length; e++)
                p[e].destroy();
            r.destroy(),
            n.destroy(),
            o.destroy(),
            c.ticker.remove(d),
            l = !0,
            delete x[g.id]
        }
    }, Ue = function(e) {
        let t = Math.floor(e / 1e3)
          , i = t % 60 + "s"
          , n = Math.floor(t / 60) % 60 + "m";
        return Math.floor(t / 3600) + "h " + n + " " + i
    }, Re = [], Oe = function(e=0, i=0, o="gtttatint") {
        let r = []
          , s = function() {};
        if ("tennis" == o || "tennis2" == o) {
            let e = new PIXI.Sprite($["Sprites/Rooms"][15]);
            e.interactive = !0,
            e.x = c.screen.width / 2,
            e.y = c.screen.height / 2,
            e.anchor.set(.5, .5),
            e.tint = 12576249,
            c.stage.addChild(e),
            r.push(e);
            let t = function(e) {
                let t = new PIXI.Container;
                c.stage.addChild(t),
                t.pivot.x = -c.screen.width / 2,
                t.pivot.y = -c.screen.height / 2;
                let i = Matter.Engine.create()
                  , n = {}
                  , a = !1;
                document.addEventListener("keydown", (function(e) {
                    let t = e.key.toLowerCase();
                    "ArrowLeft" == e.key && (t = "a"),
                    "ArrowRight" == e.key && (t = "d"),
                    "ArrowUp" == e.key && (t = " "),
                    "w" == e.key && (t = " "),
                    n[t] = !0,
                    ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
                }
                )),
                document.addEventListener("keyup", (function(e) {
                    let t = e.key.toLowerCase();
                    "ArrowLeft" == e.key && (t = "a"),
                    "ArrowRight" == e.key && (t = "d"),
                    "ArrowUp" == e.key && (t = " "),
                    "w" == e.key && (t = " "),
                    n[t] = !1
                }
                )),
                document.addEventListener("pointerdown", (function() {
                    a = !0
                }
                )),
                document.addEventListener("pointerup", (function() {
                    a = !1
                }
                ));
                let o = []
                  , r = [];
                if (e) {
                    let e = {}
                      , i = 1
                      , n = Matter.Bodies.polygon(50 * (Math.random() - .5), -600, 16, 100);
                    e.box = n;
                    let a = Te(ee.faceMinigame);
                    a.goto(98),
                    a.scale.x = i,
                    a.scale.y = i,
                    t.addChild(a),
                    e.sprite = a,
                    a.interactive = !0,
                    a.hitArea = new PIXI.Rectangle(-100,-100,200,200),
                    v(a, (function() {
                        a.goto(97)
                    }
                    )),
                    a.buttonId = T(),
                    x[a.buttonId] = a,
                    o.push(e),
                    r.push(n)
                }
                for (let e = 0; e < c.screen.width / 360 * 150; e++) {
                    let i = {}
                      , n = .5 + Math.random() / 2
                      , a = Matter.Bodies.polygon(400 * (Math.random() - .5), -400 - 20 * e, 16, 30 * n);
                    i.box = a;
                    let s = new PIXI.Sprite($["Sprites/tennisBall"][Math.floor(Math.random() * $["Sprites/tennisBall"].length)]);
                    s.scale.x = n,
                    s.scale.y = n,
                    s.anchor.set(.5, .5),
                    t.addChild(s),
                    i.sprite = s,
                    o.push(i),
                    r.push(a)
                }
                let s = Matter.Bodies.rectangle(0, 150, 16e3, 120, {
                    isStatic: !0
                })
                  , l = Matter.Bodies.rectangle(-c.screen.width / 2 - 100, -0, 20, 900, {
                    isStatic: !0
                })
                  , d = Matter.Bodies.rectangle(c.screen.width / 2 + 100, -0, 20, 900, {
                    isStatic: !0
                });
                Matter.Composite.add(i.world, [s, ...r, l, d]);
                let h = function(e) {
                    for (let e = 0; e < o.length; e++) {
                        let t = o[e].sprite
                          , i = o[e].box;
                        t.rotation = i.angle,
                        t.x = i.position.x,
                        t.y = i.position.y
                    }
                    Matter.Engine.update(i, e * (1e3 / 60))
                };
                return c.ticker.add(h),
                function() {
                    c.ticker.remove(h),
                    Matter.World.clear(i.world),
                    Matter.Engine.clear(i);
                    for (let e = 0; e < o.length; e++)
                        null != o[e].sprite.destroyAnimation ? (o[e].sprite.destroyAnimation(),
                        delete x[o[e].sprite.buttonId]) : o[e].sprite.destroy()
                }
            }("tennis2" == o)
              , i = new PIXI.Sprite($["Sprites/Rooms"][20]);
            i.x = 0,
            i.y = 0,
            c.stage.addChild(i),
            i.blendMode = PIXI.BLEND_MODES.ADD,
            i.tint = 6737151,
            i.anchor.set(.5, .5),
            i.x = c.screen.width / 2,
            i.y = c.screen.height / 2,
            i.scale.y = 2,
            i.rotation = 1,
            i.alpha = .25,
            s = function() {
                i.destroy(),
                t()
            }
        }
        if ("gtttatint" == o) {
            let e = new PIXI.Sprite($["Sprites/Rooms"][15]);
            e.interactive = !0,
            e.x = c.screen.width / 2,
            e.y = c.screen.height / 2,
            e.anchor.set(.5, .5),
            e.tint = 12576249,
            c.stage.addChild(e),
            r.push(e);
            let t = Math.random
              , i = {}
              , n = 0;
            for (let e = 0; e < 60; e++) {
                let a = new PIXI.Sprite($["Sprites/Clouds"][Math.floor(3 * t())]);
                c.stage.addChild(a),
                a.anchor.set(.5, .5),
                a.y = t() * c.screen.height,
                a.orig = {
                    y: a.y
                },
                a.scale.x = .2 + e / 150,
                a.scale.y = .2 + e / 150,
                a.speed = 1,
                a.x = c.screen.width / 2 + (t() - .5) * h.linear(c.screen.width, 360, .25) * h.linear(a.scale.x, 1, .5),
                t() > .5 && (a.scale.x *= -1);
                let o = a.texture.trim;
                null == o && (o = a.texture._frame),
                a.pivot.y = -o.height,
                i[n++] = a
            }
            for (let e = 0; e < 10; e++) {
                $.inputNineSlice[6];
                let a = new PIXI.Sprite($["Sprites/Clouds"][3]);
                c.stage.addChild(a),
                a.y = c.screen.height / 10 * e,
                a.orig = {
                    y: a.y
                },
                a.scale.x = 1,
                a.scale.y = 1,
                a.speed = 8,
                a.x = c.screen.width / 2 + 360 * (t() - .5) * h.linear(a.scale.x, 1, .5),
                t() > .5 && (a.scale.x *= -1);
                let o = a.texture.trim;
                null == o && (o = a.texture._frame),
                a.pivot.y = -o.height,
                i[n++] = a
            }
            let a = Te(ee.GTTTATINTLOSE);
            a.loop = !0,
            a.play(),
            a.x = c.screen.width / 2,
            a.y = 0,
            c.stage.addChild(a);
            let o = 1e3 * Math.random()
              , l = function() {
                a.x = h.linear(a.x, c.screen.width / 2 + 10 * Math.cos(o / 25), .025, Qe),
                a.y = h.linear(a.y, c.screen.height / 2 - 50 + 10 * Math.cos(o / 30), .025, Qe),
                a.rotation = h.linear(a.rotation, .1 * Math.cos(o / 20), .1, Qe),
                o += Qe;
                for (let e in i)
                    i[e].y -= i[e].scale.y * i[e].speed * 2 * Qe,
                    i[e].y < -100 && (i[e].y = c.screen.height)
            };
            c.ticker.add(l);
            let d = new PIXI.Sprite($["Sprites/Rooms"][20]);
            d.x = 0,
            d.y = 0,
            c.stage.addChild(d),
            d.blendMode = PIXI.BLEND_MODES.ADD,
            d.tint = 16776960,
            d.anchor.set(.5, .5),
            d.x = c.screen.width / 2,
            d.y = c.screen.height / 2,
            d.scale.y = 2,
            d.rotation = 1,
            d.alpha = .1,
            s = function() {
                for (let e in i)
                    i[e].destroy(),
                    delete i[e];
                d.destroy(),
                a.destroyAnimation(),
                c.ticker.remove(l)
            }
        }
        let l = function() {
            d.y = h.linear(d.y, c.screen.height / 2 + 80, .1, Qe)
        }
          , d = (new PIXI.Container,
        new PIXI.NineSlicePlane($.inputNineSlice[10],15,15,15,15));
        d.x = 0,
        d.y = c.screen.height,
        d.width = c.screen.width,
        d.height = c.screen.height / 2 + 100,
        c.stage.addChild(d);
        let u = a("Game Over!", 32, "center");
        "tennis2" == o && (u.text = "Completed!"),
        u.x = c.screen.width / 2,
        u.y = 30,
        d.addChild(u);
        let p = ["Score: " + e, "Coins: " + i];
        for (let e = 0; e < p.length; e++) {
            let t = a(p[e], 20, "left");
            t.x = c.screen.width / 2 - u.width / 2 - 30,
            t.y = 70 + 30 * e,
            d.addChild(t),
            r.push(t)
        }
        let m = !1
          , y = function() {
            m || (m = !0,
            i > 0 && n.sfx && (te.collect.stop(),
            te.collect.play()),
            function() {
                c.ticker.add(C);
                for (let e = 0; e < S; e++) {
                    let e = new PIXI.Sprite($["Sprites/GameUI"][14]);
                    e.scale.x = .4 + .5 * Math.random(),
                    e.scale.y = e.scale.x,
                    e.anchor.set(.5, .5),
                    e.y = f.transform.worldTransform.ty,
                    e.vr = Math.random() - .5,
                    e.facing = Math.random() * Math.PI * 2;
                    let t = 1 + 8 * Math.random();
                    e.vx = t * Math.cos(e.facing),
                    e.vy = t * Math.sin(e.facing),
                    e.x = f.transform.worldTransform.tx,
                    c.stage.addChild(e),
                    w[I++] = e
                }
                0 != S && (f.visible = !1),
                setTimeout((function() {
                    t.coins += i,
                    W()
                }
                ), 500)
            }())
        }
          , f = new PIXI.Sprite($["Sprites/GameUI"][14]);
        d.addChild(f),
        f.x = c.screen.width / 2 - u.width / 2 - 50,
        f.y = 112,
        f.scale.x = .5,
        f.scale.y = .5,
        f.anchor.set(.5, .5),
        c.ticker.add(l);
        let w = {}
          , I = 0
          , S = Math.min(1e4, i)
          , C = function() {
            for (let e in w) {
                let t = w[e];
                t.y += t.vy * Qe,
                t.x += t.vx * Qe;
                let i = 50
                  , n = 50;
                t.facing = Math.atan2(n - t.y, i - t.x);
                let a = 8
                  , o = g(t.x, t.y, i, n);
                o < 50 ? (t.vx = a * Math.cos(t.facing),
                t.vy = a * Math.sin(t.facing)) : (t.vx = h.linear(t.vx, a * Math.cos(t.facing), .02, Qe),
                t.vy = h.linear(t.vy, a * Math.sin(t.facing), .02, Qe)),
                t.rotation += t.vr / 10 * Qe,
                o < 5 * Qe && (t.destroy(),
                S--,
                delete w[e]),
                S <= 0 && c.ticker.remove(C)
            }
            k && (b.updateCounter(h.linear(b.getCounterAmount(), t.coins, .05, Qe)),
            b.y = h.linear(b.y, 20, .1, Qe))
        }
          , b = Fe.coinCounter();
        function M() {
            c.ticker.remove(l),
            s(),
            u.destroy(),
            b.destroyCounter(),
            k = !1;
            for (let e = 0; e < r.length; e++)
                r[e].destroy()
        }
        b.x = 20,
        b.y = -80,
        c.stage.addChild(b);
        let k = !0
          , A = !1
          , E = new P((function() {
            A || (A = !0,
            y(),
            setTimeout((function() {
                Fe.blurPan(c.stage, (function() {
                    M(),
                    Fe.gameList()
                }
                ))
            }
            ), 1e3))
        }
        ),$["Sprites/GameUI"][49],{
            x: c.screen.width / 2 - 80,
            y: 170,
            scale: {
                x: .75,
                y: .75
            }
        });
        d.addChild(E.sprite);
        let L = new P((function() {
            A || (A = !0,
            y(),
            setTimeout((function() {
                Fe.blurPan(c.stage, (function() {
                    M(),
                    Fe[o]()
                }
                ))
            }
            ), 1e3))
        }
        ),$["Sprites/GameUI"][50],{
            x: c.screen.width / 2 + 80,
            y: 170,
            scale: {
                x: .75,
                y: .75
            }
        });
        d.addChild(L.sprite);
        let X = a("Home", 20, "center");
        d.addChild(X),
        X.x = E.sprite.x,
        X.y = E.sprite.y + 50;
        let N = a("Retry", 20, "center");
        d.addChild(N),
        N.x = L.sprite.x,
        N.y = L.sprite.y + 50,
        r.push(N),
        r.push(X),
        r.push(E),
        r.push(L),
        r.push(d)
    };
    n.hideFridgeExit = !0;
    const Fe = {
        language: function(e=function() {}
        ) {
            let t = new PIXI.Sprite($["Sprites/Rooms"][12]);
            c.stage.addChild(t),
            t.interactive = !0,
            t.x = c.screen.width / 2,
            t.y = c.screen.height / 2,
            t.anchor.set(.5, .5),
            t.scale.x = 1,
            t.scale.y = 1;
            let i = new PIXI.Container;
            c.stage.addChild(i);
            let r = 0
              , l = {}
              , d = []
              , h = a("", 32, "center");
            h.x = c.screen.width / 2,
            h.y = c.screen.height - 150,
            n.costume;
            let u = {}
              , p = new PIXI.Container
              , m = new PIXI.Graphics;
            p.mask = m,
            c.stage.addChild(p),
            p.x = 40,
            p.y = 80;
            let y = c.screen.width - 80
              , g = c.screen.height - 80;
            m.beginFill(0),
            m.drawRect(p.x, p.y, y, g),
            m.endFill(),
            p.interactive = !0,
            p.on("pointerdown", (function(e) {
                let t = e.clientY / s;
                p.dragOffset = {
                    y: t - p.y
                },
                p.prevY = p.y,
                p.vy = 0,
                p.scrolling = !0
            }
            )),
            p.vy = 0;
            let f = new PIXI.Sprite($["Sprites/Rooms"][11]);
            f.alpha = 0,
            c.stage.addChild(f),
            f.x = p.x,
            f.y = p.y + g - 100,
            f.width = y,
            f.height = 100;
            for (let e in ke) {
                let t = ke[e];
                if (t.hidden)
                    continue;
                let i = !1;
                t.owned || -1 != t.cost || (i = !0);
                let s = new M((function() {
                    h.text = ""
                }
                ),0,0 + 84 * r,y,80,"",0,0,0,2);
                u[e] = s,
                s.element.interactive = !1,
                p.addChild(s.element),
                new PIXI.Rectangle(0,0,0,0);
                let l, c = new PIXI.BitmapText(t.lang,{
                    fontSize: 24,
                    fontName: "arial"
                });
                if (c.x = 20,
                c.y = 5,
                s.element.addChild(c),
                null != t.translator) {
                    let e = a(o.ui.translator + ": " + t.translator.name, 12, "left", "middle", 1);
                    e.x = 20,
                    e.y = 50,
                    s.element.addChild(e)
                }
                c.width > y - 50 && (c.width = y - 50),
                c.scale.y = c.scale.x,
                -1 == t.sprite && (l.x -= 80,
                c.x -= 80),
                console.log(t);
                let m = new M((function() {
                    if (t.downloaded)
                        return void Fe.message(o.settings.enableReload, $["Sprites/GameUI"][24], (function() {
                            n.language = e,
                            W(),
                            setTimeout((function() {
                                window.location = window.location
                            }
                            ), 500)
                        }
                        ), (function() {}
                        ), [o.ui.reload, o.ui.cancel]);
                    let i = Fe.message("Downloading...", $["Sprites/GameUI"][24]);
                    PIXI.Assets.load(t.file + ".json").then((t => {
                        setTimeout((function() {
                            i.exit(),
                            t.version = g,
                            localStorage.setItem(e, JSON.stringify(t)),
                            n.language = e,
                            W(),
                            setTimeout((function() {
                                window.location = window.location
                            }
                            ), 500)
                        }
                        ), 2e3)
                    }
                    ))
                }
                ),y - 10,70,100,20,t.button[t.downloaded ? 1 : 0],0,1,1,1,"center")
                  , g = "";
                PIXI.Assets.load(t.file + "-version.json").then((i => {
                    if (g = i.version,
                    null != localStorage.getItem(e))
                        try {
                            let n = JSON.parse(localStorage.getItem(e));
                            i.version != n.version && (m.inputText.text = t.button[2],
                            t.downloaded = !1)
                        } catch (i) {}
                }
                )),
                s.element.addChild(m.element),
                d.push(c),
                d.push(s),
                r++
            }
            let x = Fe.exitButton((function() {
                e(),
                W(),
                Fe.flash(!1, v)
            }
            ), c.screen.width - 40, 40, .4, 0);
            c.stage.addChild(x.sprite);
            let w = !1;
            function v() {
                for (let e in l)
                    null != l[e].destroy && l[e].destroy(),
                    delete l[e];
                h.destroy(),
                x.destroy(),
                t.destroy();
                for (let e = 0; e < d.length; e++)
                    d[e].destroyed || d[e].destroy();
                w = !0
            }
            c.stage.addChild(h),
            d.push(f),
            d.push(p),
            d.push(m)
        },
        oddDroplets: function(e="", t=!1) {
            let i = function() {
                n.minigameMusic && te.howitbegins.play()
            };
            te.howitbegins.on("end", i),
            n.minigameMusic && (te.howitbegins.play(),
            te.howitbegins.volume = 1);
            let r = new PIXI.Sprite($["Sprites/Rooms"][19]);
            r.interactive = !0,
            r.x = c.screen.width / 2,
            r.y = c.screen.height / 2,
            r.anchor.set(.5, .5),
            c.stage.addChild(r);
            let s, l = Date.now(), d = new PIXI.Container, h = 0, u = 0, p = function() {
                let e = [];
                s = function() {
                    for (let t = 0; t < e.length; t++)
                        e[t].destroy()
                }
                ;
                let t = 4
                  , i = 2
                  , a = 1
                  , o = {
                    x: c.screen.width / 2.5,
                    y: c.screen.height / 3
                };
                switch (u) {
                case 1:
                    t = 6,
                    c.screen.width > 640 ? (i = 3,
                    a = .9,
                    o.x = c.screen.width / 3.5) : (o.y /= 1.25,
                    a = .92);
                    break;
                case 2:
                    t = 10,
                    c.screen.width > 640 ? (i = 5,
                    a = .9,
                    o.x = c.screen.width / 6) : (o.y /= 2,
                    i = 2,
                    a = .5);
                    break;
                case 3:
                    t = 15,
                    c.screen.width > 640 ? (i = 5,
                    a = .75,
                    o.x = c.screen.width / 6,
                    o.y *= .9) : (o.y /= 2,
                    i = 3,
                    o.x *= .75,
                    a = .5);
                    break;
                case 4:
                    t = 24,
                    c.screen.width > 640 ? (i = 6,
                    a = .5,
                    o.x = c.screen.width / 6,
                    o.y = c.screen.height / 6) : (o.x = c.screen.width / 5,
                    o.y = c.screen.height / 7,
                    i = 4,
                    a = .4)
                }
                let l = 0
                  , h = Math.floor(Math.random() * t)
                  , p = 2 * Math.floor(20 * Math.random());
                for (let r = 0; r < t; r++) {
                    let t = Te(ee.oddDroplets)
                      , s = Te(ee.oddDroplets);
                    for (let e = 0; e < s.layers.length; e++) {
                        let i = s[t.layers[e]];
                        null != $[i.symbol + "OUTLINE12"] && R(i, i.symbol + "OUTLINE12")
                    }
                    e[r] = {
                        destroy: function() {
                            t.destroyAnimation(),
                            s.destroyAnimation()
                        },
                        disableInteractivity: function() {
                            t.interactive = !1
                        }
                    };
                    let u = p + (r == h ? 1 : 0);
                    t.hitArea = new PIXI.Rectangle(-45,-75,90,150),
                    t.goto(u),
                    t.x = c.screen.width / 2 - (i - 1) / 2 * o.x + o.x * (r % i),
                    t.y = c.screen.height / 2 + Math.floor(r / i) * o.y,
                    l = Math.floor(r / i),
                    t.scale.x = a,
                    t.scale.y = a,
                    s.goto(u),
                    s.x = t.x,
                    s.y = t.y,
                    s.scale.x = a,
                    s.scale.y = a,
                    d.addChild(s),
                    d.addChild(t),
                    t.interactive = !0,
                    t.on("pointerup", (function() {
                        for (let t = 0; t < e.length; t++)
                            e[t].disableInteractivity();
                        let i = 1 + Math.floor(4 * Math.random());
                        n.sfx && (te["slap" + i].attack = 0,
                        te["slap" + i].stop(),
                        te["slap" + i].play());
                        let o = Te(ee.Teardrop, y.Teardrop);
                        B.outline.apply(o);
                        let l = Te(ee.Teardrop, y.Teardrop);
                        d.addChild(o),
                        d.addChild(l),
                        o.gotoPart("Slap"),
                        o.d.visible = !1,
                        o.play(),
                        o.x = t.x,
                        o.y = t.y + 80 * a,
                        o.scale.x = a,
                        o.scale.y = a,
                        l.gotoPart("Slap"),
                        l.d.visible = !1,
                        l.play(),
                        l.x = t.x,
                        l.y = t.y + 80 * a,
                        l.scale.x = a,
                        l.scale.y = a,
                        t.destroy(),
                        s.destroy(),
                        e[r] = {
                            destroy: function() {
                                o.destroyAnimation(),
                                l.destroyAnimation()
                            }
                        },
                        h == r ? (f++,
                        40 == f && Fe.achievementQueue("oddDroplets40"),
                        m += w) : (f = 0,
                        m -= w,
                        te.fail.play(),
                        A()),
                        m < 0 && (m = 0),
                        S.text = "score: " + m,
                        v = x + 60
                    }
                    ))
                }
                c.stage.addChild(d),
                r.scale.x = .95,
                r.scale.y = .95,
                x = 0,
                d.pivot.x = c.screen.width / 2,
                d.pivot.y = c.screen.height / 2 - -l * o.y / 2,
                d.x = d.pivot.x,
                d.y = d.pivot.y + -l * o.y / 2
            }, m = 0, g = function() {
                te.howitbegins.off("end", i),
                te.howitbegins.stop(),
                S.destroy();
                for (let e = 0; e < T.length; e++)
                    T[e].destroyAnimation();
                r.destroy(),
                c.ticker.remove(I),
                Fe.gameList("oddDroplets"),
                Fe.results(m, Math.floor(m / 100)),
                P.destroyPause(),
                s(),
                window.onblur = function() {}
            }, f = 0, x = 0;
            p();
            let w = 0
              , v = -1
              , I = function() {
                let e = 600 * (u / 2 + 1);
                if (w = Math.floor(eases.easeOutQuint(Math.max(0, Math.min(e, x - 60)), 200, -190, e) * (u / 2 + 1)),
                d.scale.x = eases.easeOutQuad(Math.min(50, x), .9, .1, 50),
                d.scale.y = d.scale.x,
                r.scale.x = d.scale.x / 2 + .5,
                r.scale.y = r.scale.x,
                x += Qe,
                v <= x && -1 != v) {
                    if (v = -1,
                    P.interactive = !1,
                    k <= -1)
                        return void Fe.blurPan(c.stage, g);
                    Fe.blurPan(c.stage, (function() {
                        if (P.interactive = !0,
                        s(),
                        h++,
                        u = Math.floor(h / 10),
                        u >= 5) {
                            let e = [0, 0, 1, 1, 1, 1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 4];
                            u = e[Math.floor(Math.random() * e.length)]
                        }
                        p()
                    }
                    ))
                }
            };
            c.ticker.add(I);
            let S = a("score: 0", 32);
            S.anchor.set(0, 0),
            S.x = 20,
            S.y = 20,
            c.stage.addChild(S),
            window.onblur = function() {
                C || M()
            }
            ;
            let C = !1
              , b = 0;
            function M() {
                C = !C,
                P.changePause(C),
                C ? (n.inGame = !1,
                c.ticker.remove(I),
                b = -Date.now(),
                te.howitbegins.pause(),
                Fe.message(o.ui.gamePaused, $["Sprites/GameUI"][32], (function() {
                    M()
                }
                ), (function() {
                    Fe.blurPan(c.stage, (function() {
                        g()
                    }
                    ))
                }
                ), [o.ui.play, o.ui.home], !1)) : (b += Date.now(),
                l += b,
                n.inGame = !0,
                n.minigameMusic && te.howitbegins.play(),
                c.ticker.add(I))
            }
            let P = Fe.pauseButton((function() {
                M()
            }
            ), .4);
            c.stage.addChild(P),
            P.x = c.screen.width - 40,
            P.y = 40;
            let T = [];
            for (let e = 0; e < 3; e++) {
                let t = Te(ee.healthLose);
                c.stage.addChild(t),
                t.gotoAndStop(0),
                t.x = c.screen.width - 90 - 35 * e,
                t.y = 40,
                t.scale.x = .4,
                t.scale.y = .4,
                T.push(t)
            }
            let k = 2
              , A = function() {
                k--;
                for (let e = 0; e < T.length; e++)
                    e > k && T[e].play()
            }
        },
        setUpTints: function() {
            Ee = new PIXI.Sprite($["Sprites/Blur"][1]),
            Le = new PIXI.Sprite($["Sprites/RepeatingUI"][2]),
            Xe = new PIXI.Sprite($["Sprites/RepeatingUI"][3])
        },
        achievementQueue: function(e, t=!1) {
            0 == u.length && (p = 0),
            t && 0 != u.length && (p++,
            Fe.achievement(e, (function() {
                u.shift(),
                Fe.achievementQueue(u[0], !0)
            }
            ))),
            t || m[e].done || (u.push(e),
            m[e].done = !0,
            1 == u.length && Fe.achievement(e, (function() {
                u.shift(),
                Fe.achievementQueue(u[0], !0)
            }
            )))
        },
        achievement: function(e, t=function() {}
        ) {
            let i = ["get2763intennis", "get2763gtttatint", "slapTD2763", "2763lemons"]
              , a = 0;
            for (let e = 0; e < i.length; e++)
                m[i[e]].done && a++;
            a == i.length && Fe.achievementQueue("get2763"),
            n.sfx && (te.achievement.stop(),
            te.achievement.play(),
            te.achievement.sourceNode.playbackRate.value = 1 + p / 16);
            let o = m[e]
              , r = new PIXI.NineSlicePlane($.inputNineSlice[2]);
            r.width = 320,
            r.x = c.screen.width / 2,
            r.y = -500,
            c.stage.addChild(r);
            let s = new PIXI.BitmapText(o.title,{
                fontName: "ShagBlack",
                fontSize: 24
            });
            r.height = s.height + 50,
            s.anchor.set(0, .5),
            s.x = 80,
            s.y = 20,
            r.addChild(s);
            let l = new PIXI.BitmapText(o.description,{
                fontName: "ShagBlack",
                fontSize: 16,
                breakWords: !0,
                wordWrap: !0,
                wordWrapWidth: 200,
                maxWidth: r.width - 80,
                whiteSpace: "normal"
            });
            l.anchor.set(0, 0),
            r.height += l.height,
            l.anchor.set(0, .5),
            l.x = 80,
            l.y = 35 + l.height / 2,
            r.addChild(l),
            r.pivot.set(r.width / 2, r.height / 2),
            null == o.icon && (o.icon = 11);
            let d = $["Sprites/GameUI"][o.icon]
              , h = new PIXI.Sprite(d);
            r.addChild(h),
            h.anchor.set(.5, .5),
            h.y = r.height / 2 - 5,
            h.x = 40,
            h.scale.x = .5,
            h.scale.y = .5;
            let u = 0
              , y = Math.random() - .5;
            setTimeout((function() {
                g.x = r.x,
                g.y = r.y,
                g.rotation = r.rotation,
                g.scale = r.scale,
                r.closing = !0,
                u = 0
            }
            ), 2500);
            let g = {
                x: c.screen.width / 2,
                y: -r.height / 2,
                rotation: y,
                scale: .5
            };
            r.onDestroyed = function() {}
            ,
            r.destroyBook = function() {
                r.onDestroyed(),
                c.ticker.remove(f),
                s.destroy(),
                h.destroy(),
                r.destroy({
                    children: !0
                }),
                t()
            }
            ;
            let f = function() {
                if (r.closing) {
                    if (r.y = ease[16](Math.min(40, u), g.y, -g.y - r.height, 40),
                    r.rotation = ease[1](Math.min(70, u), g.rotation, y, 70),
                    u > 40)
                        return void r.destroyBook()
                } else
                    r.x = ease[17](Math.min(80, u), g.x, 0, 80),
                    r.y = ease[8](Math.min(70, u), g.y, r.height + 20, 70);
                r.scale.y = r.scale.x,
                u += Qe
            };
            return c.ticker.add(f),
            r
        },
        updateWarning: function() {
            Fe.message(o.message.updateWarning(ze, _e), $["Sprites/GameUI"][24], (function() {
                window.location = window.location
            }
            ), (function() {}
            ), [o.ui.reload, o.ui.ignore]),
            console.log(o.ui)
        },
        exitButton: function(e=function() {}
        , t, i, n=1, a=0) {
            let o = !1
              , r = new P((function() {
                o || (o = !0,
                e())
            }
            ),$["Sprites/GameUI"][11],{
                scale: {
                    x: n,
                    y: n
                },
                x: t,
                y: i
            },!0);
            return r.sprite.on("pointerover", (function() {
                r.sprite.texture = $["Sprites/GameUI"][12]
            }
            )),
            r.sprite.on("pointerout", (function() {
                r.sprite.texture = $["Sprites/GameUI"][11]
            }
            )),
            r
        },
        pauseButton: function(e=function() {}
        , t=1) {
            let i = new PIXI.Sprite($["Sprites/GameUI"][32]);
            i.anchor.set(.5, .5),
            i.interactive = !0;
            let n = $["Sprites/GameUI"][32].trim;
            return i.scale.x = t,
            i.scale.y = t,
            i.hitArea = new PIXI.Rectangle(-n.width / 2,-n.height / 2,n.width,n.height),
            i.id = w,
            x[T()] = i,
            v(i, e),
            i.destroyPause = function() {
                delete x[i.id],
                i.destroy()
            }
            ,
            i.changePause = function(e) {
                e ? (i.texture = $["Sprites/GameUI"][34],
                i.interactive = !1) : (i.texture = $["Sprites/GameUI"][32],
                i.interactive = !0)
            }
            ,
            i
        },
        skew: function() {
            let e = Te(ee.SkewMatrix);
            e.play(20),
            c.stage.addChild(e),
            e.x = 180,
            e.y = 320,
            setInterval((function() {}
            ), 1e3 / 60)
        },
        fade: function(e, t=20, i=20) {
            c.stage.children.includes(Le) && c.stage.removeChild(Le),
            Le.interactive = !0,
            c.stage.addChild(Le),
            Le.alpha = 0;
            let n = 1 / t
              , a = !1;
            c.ticker.add((function t() {
                Le.alpha += n * Qe,
                Le.alpha >= 1 && (Le.alpha = 1,
                a || (a = !0,
                e()),
                c.stage.removeChild(Le),
                c.stage.addChild(Le),
                n = -1 / i),
                Le.alpha < 0 && (c.ticker.remove(t),
                c.stage.removeChild(Le))
            }
            ))
        },
        flash: function(e=!1, t=function() {}
        , i=!1) {
            let n = new PIXI.Sprite($["Sprites/RepeatingUI"][3]);
            n.width = c.screen.width,
            n.height = c.screen.height,
            c.stage.addChild(n),
            n.alpha = e ? 1 : 0;
            let a = e ? -1 / 60 : 1 / 8;
            i ? (n.interactive = !0,
            a /= 4) : n.interactive = !1;
            let o = !1;
            c.ticker.add((function i() {
                n.alpha += a * Qe,
                n.alpha >= 1 && !e && (n.alpha = 1,
                o || (o = !0,
                t(),
                n.interactive = !1),
                c.stage.removeChild(n),
                c.stage.addChild(n),
                a = -1 / 60),
                n.alpha < 0 && (c.ticker.remove(i),
                n.destroy())
            }
            ))
        },
        blackTint: function(e=.5, t=!0) {
            let i = new PIXI.Sprite($["Sprites/RepeatingUI"][3]);
            function n() {
                i.alpha += o * Qe,
                i.alpha >= e && (i.alpha = e,
                o = 0),
                i.alpha < 0 && (i.alpha = 0,
                i.delete && (c.ticker.remove(n),
                c.stage.removeChild(i)))
            }
            i.interactive = !0,
            i.width = c.screen.width,
            i.height = c.screen.height,
            t ? (i.blendMode = PIXI.BLEND_MODES.SUBTRACT,
            i.tint = 16777215) : (i.blendMode = PIXI.BLEND_MODES.NORMAL,
            i.tint = 0),
            c.stage.children.includes(i) && c.stage.removeChild(i),
            c.stage.addChild(i);
            let a = !1;
            i.start = function() {
                o = 1 / 60,
                a || (a = !0,
                c.ticker.add(n))
            }
            ,
            i.end = function() {
                o = -1 / 60
            }
            ,
            i.delete = !0,
            i.alpha = 0;
            let o = 1 / 60;
            return i
        },
        book: function(e, t=function() {}
        , i=30) {
            let n = Fe.blackTint(.2);
            n.start();
            let a = new PIXI.Sprite($["Sprites/GameUI"][10]);
            a.x = c.screen.width / 2,
            a.y = c.screen.height / 2,
            a.anchor.set(.5, .5),
            c.stage.addChild(a);
            let o = []
              , r = 0
              , s = 0
              , l = []
              , d = e.split(" ")
              , h = ""
              , u = new PIXI.BitmapText(e,{
                fontName: "IndieFlower",
                fontSize: 24
            });
            for (let e = 0; e < d.length; e++) {
                let t = h;
                h += d[e] + " ",
                u.text = h,
                u.width > 200 && (l.push(t),
                e--,
                h = "")
            }
            "" != h && l.push(h),
            u.destroy();
            let p = 0
              , m = 2 * Math.round(Math.random()) - 1
              , y = l;
            for (let e = 0; e < y.length; e++) {
                let t = new PIXI.BitmapText("",{
                    fontName: "IndieFlower",
                    fontSize: 24
                });
                t.x = -70,
                t.y = 29.5 * e - 195,
                a.addChild(t),
                o.push(t)
            }
            let g, f = function() {
                o[s].text += y[s][r],
                r >= y[s].length - 1 && (s++,
                r = -1),
                r++,
                s == o.length && clearInterval(g)
            };
            setTimeout((function() {
                g = setInterval(f, 1e3 / i)
            }
            ), 500);
            let x = Fe.exitButton((function() {
                x.interactive = !1,
                w.x = a.x,
                w.y = a.y,
                w.rotation = a.rotation,
                w.scale = a.scale,
                a.closing = !0,
                p = 0
            }
            ), 150, -220, .4, .1);
            x.sprite.alpha = 0,
            a.addChild(x.sprite),
            x.sprite.interactive = !1,
            x.show = !1,
            setTimeout((function() {
                x.show = !0,
                x.sprite.interactive = !0
            }
            ), 1500);
            let w = {
                x: 0,
                y: c.screen.height + 500,
                rotation: m,
                scale: .5
            };
            a.onDestroyed = function() {}
            ,
            a.destroyBook = function() {
                a.onDestroyed(),
                c.ticker.remove(v);
                for (let e = 0; e < o.length; e++)
                    o[e].parent.removeChild(o[e]),
                    o[e].destroy();
                x.destroy(),
                a.destroy({
                    children: !0
                }),
                t()
            }
            ;
            let v = function() {
                if (x.show && (x.sprite.alpha += .05),
                x.sprite.alpha >= 1 && (x.sprite.alpha = 1,
                x.show = !1),
                a.closing) {
                    if (a.y = ease[16](Math.min(40, p), w.y, -w.y + c.screen.height + 500, 40),
                    a.rotation = ease[1](Math.min(70, p), w.rotation, m, 70),
                    p > 40)
                        return n.end(),
                        void a.destroyBook()
                } else
                    a.x = ease[17](Math.min(80, p), w.x, c.screen.width / 2, 80),
                    a.y = ease[8](Math.min(70, p), w.y, -c.screen.height / 2 - 29.5 * (y.length + 5), 70),
                    a.rotation = ease[17](Math.min(90, p), w.rotation, -m, 90),
                    a.scale.x = ease[17](Math.min(90, p), w.scale, .5, 90);
                a.scale.y = a.scale.x,
                p += Qe
            };
            return c.ticker.add(v),
            a
        },
        blurPan: function(e, t=function() {}
        ) {
            Ee.visible = !0,
            Ee.x = 4 * -Ee.texture.orig.width / 2,
            Ee.y = c.screen.height / 2,
            Ee.scale.x = 4,
            Ee.scale.y = 4,
            Ee.anchor.set(.5, .5),
            e.addChild(Ee);
            let i = !1
              , n = function() {
                Ee.x += 300 * Qe,
                Ee.x > c.screen.width / 2 && !i && (t(),
                i = !0,
                e.addChild(Ee)),
                Ee.x > c.screen.width + 4 * Ee.texture.orig.width / 2 && (c.ticker.remove(n),
                e.removeChild(Ee),
                Ee.visible = !1)
            };
            c.ticker.add(n)
        },
        animationSelector: function() {
            let e = 0
              , t = [];
            function i() {
                for (let e = 0; e < t.length; e++)
                    t[e].destroy()
            }
            for (let n in ee) {
                let a = new M((function() {
                    let e = {};
                    null != y[n] && (e = y[n]),
                    i(),
                    Fe.animationTester(ee[n], e)
                }
                ),20,20 + 28 * e,c.screen.width - 40,24,n,10,0,0);
                c.stage.addChild(a.element),
                t.push(a),
                e++
            }
            return {
                destroy: i
            }
        },
        animationTester: function(e, t) {
            let i = Te(e, t)
              , n = new PIXI.Sprite(PIXI.Texture.from("./Sprites/anchor.png"));
            n.anchor.set(.5, .5),
            i.addChild(n),
            c.stage.addChild(i),
            i.x = c.screen.width / 2,
            i.y = c.screen.height / 2,
            i.onNextFrame = function() {
                r.value = i.getCurFrame()
            }
            ;
            let o = 0
              , r = new class {
                constructor(e, t) {
                    this._value = t,
                    this.info = e,
                    this.text = a(this.info + ": " + this._value, 12, "left"),
                    this.text.x = 20,
                    this.text.y = c.screen.height - 60 - 16 * o,
                    o++,
                    c.stage.addChild(this.text)
                }
                set value(e) {
                    this._value = e,
                    this.text.text = this.info + ": " + this._value
                }
            }
            ("Frame","0");
            i.play(60),
            i.interactive = !0,
            I(i);
            let s = new b(20,c.screen.height - 20,150,20,"FPS",10,0,1);
            s.confirmation = function() {
                i.play(parseInt(s.inputText.value))
            }
            ,
            c.stage.addChild(s.element);
            let l = 0
              , d = new M((function() {
                i.currentPart = -1,
                i.playUntil = -1,
                i.loop = !0
            }
            ),20,20 + 20 * l,90,18,"none",10,0,0);
            c.stage.addChild(d.element),
            l++;
            for (let e in t) {
                let t = new M((function() {
                    i.gotoPart(e)
                }
                ),20,20 + 20 * l,90,18,e,10,0,0);
                c.stage.addChild(t.element),
                l++
            }
        },
        intro: function(e=!1) {
            if (0 == e)
                return loadAudio("plodder", "plodder"),
                void (onresourceload = function() {
                    Fe.intro(!0)
                }
                );
            let t = 0;
            doubleanimation(ee.bfb),
            ee.bfb.frameCount *= 2;
            for (let e in ee.bfb.layers) {
                for (let i = 0; i < ee.bfb.layers[e].frames.length; i++) {
                    let n = ee.bfb.layers[e].frames[i];
                    n[fE.firstFrame] = t,
                    n[fE.loopMode] = 2,
                    n[fE.tween] = 0
                }
                t += 5
            }
            ee.bfb.symbols.Test = ee.faceMinigame;
            let i = n.music;
            setTimeout((function() {
                n.music = !1,
                te.brittlerille.stop(),
                te.plodder.play(),
                te.plodder.sourceNode.playbackRate.value = 1,
                te.plodder.on("end", (function() {
                    o.destroyAnimation(),
                    a.destroy(),
                    n.music = i,
                    i && te.brittlerille.play()
                }
                ))
            }
            ), 10 / 24 * 1e3);
            let a = new PIXI.Sprite($["Sprites/RepeatingUI"][3]);
            a.width = c.screen.width + 80,
            a.height = c.screen.height + 80,
            a.tint = 13421772,
            a.x = -40,
            a.y = -40,
            c.stage.addChild(a);
            let o = Te(ee.bfb);
            c.stage.addChild(o),
            o.play(48),
            o.scale.x = 1 / .56,
            o.scale.y = 1 / .56,
            o.x = -2762,
            o.y = -1736
        },
        myTeardrop: function() {
            let e = Math.floor((Date.now() - n.lastLogin) / 1e3)
              , r = 288;
            if (i.happiness -= e / 180,
            i.hunger -= e / 108,
            i.sleeping) {
                let D = i.sleep;
                i.sleep += e / r * 8,
                i.sleep > 100 && (i.sleep = 100),
                i.progress += 4 * (i.sleep - D)
            }
            i.sleep >= 100 && (i.sleeping = !1),
            i.happiness = Math.max(0, i.happiness),
            i.hunger = Math.max(0, i.hunger),
            i.sleep = Math.max(0, i.sleep);
            let l = function() {}
              , d = new PIXI.Container;
            c.stage.addChild(d),
            d.x = c.screen.width / 2,
            d.y = c.screen.height / 2;
            let u = "livingRoom"
              , p = new PIXI.Sprite($["Sprites/Rooms"][8]);
            d.addChild(p),
            p.x = 0,
            p.y = -100,
            p.anchor.set(.5, .5),
            p.scale.x = 1,
            p.scale.y = 1;
            let f = new PIXI.Sprite($["Sprites/Rooms"][8]);
            d.addChild(f),
            f.x = 0,
            f.y = 0,
            f.anchor.set(.5, .5),
            f.scale.x = 1,
            f.scale.y = 1;
            let x = new PIXI.Sprite($["Sprites/Rooms"][0]);
            x.x = 0,
            x.y = 0,
            x.anchor.set(.5, .5),
            x.scale.x = 1,
            x.scale.y = 1;
            let w = n.skipIntro
              , I = 1
              , C = 0
              , b = new PIXI.BitmapText(o.intro.mail,{
                fontSize: 24,
                fontName: "MenuShag"
            });
            function T() {
                setInterval((function() {
                    n.inGame ? (i.happiness += .2,
                    i.progress += 1) : i.happiness -= 1 / 180;
                    let e = 1 / 108;
                    n.inGame && (e *= 8),
                    i.hunger -= e;
                    let t = .003472222222222222;
                    n.inGame && (t *= 16,
                    n.temporaryInGameTime++),
                    i.sleeping ? (i.sleep += .027777777777777776,
                    i.progress += .1111111111111111) : n.introMode || (i.sleep -= t),
                    n.lastLogin = Date.now(),
                    i.happiness = Math.max(0, i.happiness),
                    i.hunger = Math.max(0, i.hunger),
                    i.sleep = Math.max(0, i.sleep),
                    i.happiness = Math.min(100, i.happiness),
                    i.hunger = Math.min(100, i.hunger),
                    i.sleep = Math.min(100, i.sleep),
                    i.sleeping || (i.sleep < 20 && !k.tired && (k.tired = !0,
                    k.switchData(ee[L.tired]),
                    k.switchParts(y[N]),
                    k.gotoPart("Sleepy")),
                    i.sleep > 20 && k.tired && (k.tired = !1,
                    k.switchData(ee[L.awake]),
                    k.switchParts(y[X]),
                    k.gotoPart("Realize")),
                    i.progress > i.progressNeeded && !n.inGame && n.canLevelUp && (Fe.flash(!1, (function() {
                        n.level++,
                        J.text = n.level,
                        i.progress = i.progress - i.progressNeeded,
                        i.progressNeeded = 200 + (n.level - 1) ** 1.25 * 20,
                        K.offset = i.progress / i.progressNeeded,
                        Fe.levelUp(),
                        W()
                    }
                    )),
                    n.canLevelUp = !1),
                    i.progress < 0 && (i.progress = 0))
                }
                ), 1e3),
                n.canLevelUp = !0;
                let e = new PIXI.Sprite($["Sprites/GameUI"][19]);
                e.anchor.set(.5, .5),
                e.scale.x = .1,
                e.scale.y = .1,
                e.rotation = -1;
                let r = new P((function() {
                    e.active = !1,
                    Fe.flash(!1, (function() {
                        Fe.wardrobe((function() {
                            Y.updateCounter(t.coins),
                            null != k.destroyCostume && (k.destroyCostume(),
                            k.destroyCostume = void 0),
                            B[n.costume].apply(k),
                            k.applyCostumeAnimations()
                        }
                        ))
                    }
                    ))
                }
                ),$["Sprites/GameUI"][17],{
                    x: 100,
                    y: 100,
                    scale: {
                        x: .6,
                        y: .6
                    }
                })
                  , p = new P((function() {
                    e.active = !1,
                    Fe.flash(!1, (function() {
                        Fe.gameList()
                    }
                    ))
                }
                ),$["Sprites/GameUI"][20],{
                    x: 100,
                    y: 100,
                    scale: {
                        x: .6,
                        y: .6
                    }
                })
                  , I = new P((function() {
                    e.active = !1,
                    Fe.flash(!1, (function() {
                        Fe.settings()
                    }
                    ))
                }
                ),$["Sprites/GameUI"][33],{
                    x: 100,
                    y: 100,
                    scale: {
                        x: .4,
                        y: .4
                    }
                });
                I.sprite.title = [o.ui.settings, 32],
                p.sprite.title = [o.ui.games, 24],
                r.sprite.title = [o.ui.wardrobe, 24];
                let b = new P((function() {
                    e.active = !1,
                    Fe.flash(!1, (function() {
                        Fe.achievements()
                    }
                    ))
                }
                ),$["Sprites/GameUI"][35],{
                    x: 100,
                    y: 100,
                    scale: {
                        x: .6,
                        y: .6
                    }
                });
                b.sprite.title = [o.ui.achievements, 24];
                let T = [r.sprite, p.sprite, b.sprite]
                  , D = [I.sprite];
                for (let t = 0; t < T.length; t++) {
                    let i = T[t]
                      , n = a(i.title[0], i.title[1], "center");
                    i.addChild(n),
                    n.y = -80;
                    let o = Math.cos((t + .5 - 2) / 8 * Math.PI * 2)
                      , r = Math.sin((t + .5 - 2) / 8 * Math.PI * 2);
                    i.x = 100 * o,
                    i.y = 100 * r,
                    i.original = {
                        x: i.x,
                        y: i.y
                    },
                    e.addChild(i),
                    i.speed = .05
                }
                for (let t = 0; t < D.length; t++) {
                    let i = D[t];
                    T.push(i),
                    i.speed = .03;
                    let n = a(i.title[0], i.title[1], "center");
                    i.addChild(n),
                    n.y = -80;
                    let o = Math.cos((t + 1 - 2) / 8 * Math.PI * 2)
                      , r = Math.sin((t + 1 - 2) / 8 * Math.PI * 2);
                    i.x = 160 * o,
                    i.y = 160 * r,
                    i.original = {
                        x: i.x,
                        y: i.y
                    },
                    e.addChild(i)
                }
                c.stage.addChild(e);
                let G = function(r, p=!1) {
                    if (u == r && "livingRoom" == r ? (e.x = j.buttonContainer.x,
                    e.y = j.buttonContainer.y,
                    n.introMode || (e.active = !e.active)) : e.active = !1,
                    u == r)
                        return;
                    u = r,
                    f.interactive = !1,
                    f.removeAllListeners();
                    let g = function() {
                        if (i.sleeping && (k.visible = !1),
                        l(),
                        j.selected.visible = !1,
                        H.selected.visible = !1,
                        Q.selected.visible = !1,
                        k.rotation = 0,
                        "livingRoom" == r && (f.texture = $["Sprites/Rooms"][8],
                        x.texture = $["Sprites/Rooms"][0],
                        x.visible = !1,
                        k.x = 0,
                        k.y = 100,
                        j.selected.visible = !0),
                        "kitchen" == r) {
                            function e() {
                                for (let e = 0; e < 3; e++)
                                    "" != t.fridge[20 + e] && null != t.fridge[20 + e] ? (p[e].eated = !1,
                                    p[e].x = u.x - 50 + 50 * e,
                                    p[e].interactive = !0,
                                    p[e].y = u.y,
                                    p[e].alpha = 1,
                                    p[e].eating = !1,
                                    p[e].visible = !0,
                                    p[e].food = t.fridge[20 + e],
                                    p[e].foodId = 20 + e,
                                    p[e].texture = $["Sprites/Food"][E[t.fridge[20 + e]].texture]) : p[e].visible = !1
                            }
                            w || (U = 1.5),
                            f.interactive = !0,
                            f.hitArea = new PIXI.Rectangle(100,-290,300,350),
                            f.on("pointerdown", (function() {
                                f.interactive = !1,
                                2 == U && (U = 3),
                                Fe.flash(!1, (function() {
                                    Fe.fridge((function() {
                                        Y.updateCounter(t.coins),
                                        e(),
                                        n.introMode && (Y.visible = !0)
                                    }
                                    )),
                                    f.interactive = !0
                                }
                                ))
                            }
                            )),
                            x.visible = !0,
                            f.texture = $["Sprites/Rooms"][1],
                            x.texture = $["Sprites/Rooms"][2],
                            d.addChild(x),
                            k.x = -10,
                            k.y = 100,
                            H.selected.visible = !0;
                            let u = new PIXI.Sprite($["Sprites/Food"][0]);
                            u.anchor.set(.5, .5),
                            u.x = 0,
                            u.y = 70,
                            d.addChild(u);
                            let p = [];
                            for (let I = 0; I < 3; I++) {
                                let S = new PIXI.Sprite($["Sprites/Food"][1]);
                                S.visible = !0,
                                S.x = u.x - 50 + 50 * I,
                                S.y = u.y,
                                S.x2 = S.x,
                                S.y2 = S.y,
                                S.anchor.set(.5, .5),
                                d.addChild(S),
                                S.interactive = !0,
                                S.hitArea = new PIXI.Rectangle(-S.texture.trim.width / 2,-S.texture.trim.height,2 * S.texture.trim.width,2 * S.texture.trim.height),
                                S.on("pointerdown", (function(e) {
                                    S.hitArea = new PIXI.Rectangle(-3e3,-3e3,6e3,6e3),
                                    S.dragging = !0;
                                    let t = e.clientX / s
                                      , i = e.clientY / s;
                                    S.dragOffset = {
                                        x: t - S.x,
                                        y: i - S.y
                                    };
                                    for (let e = 0; e < p.length; e++)
                                        p[e].interactive = !1;
                                    S.interactive = !0
                                }
                                )),
                                S.on("pointermove", (function(e) {
                                    let t = e.clientX / s
                                      , i = e.clientY / s;
                                    S.dragging && (S.x2 = t - S.dragOffset.x,
                                    S.y2 = i - S.dragOffset.y)
                                }
                                )),
                                S.eated = !1,
                                S.on("pointerup", (function(e) {
                                    n.introMode && U <= 3 && setTimeout((function() {
                                        i.sleep = 19,
                                        U = 4,
                                        V.alpha = 0,
                                        V.rotation = 0,
                                        Q.buttonContainer.alpha = 0,
                                        Q.buttonContainer.visible = !0
                                    }
                                    ), 2e3),
                                    S.hitArea = new PIXI.Rectangle(-S.texture.trim.width / 2,-S.texture.trim.height,2 * S.texture.trim.width,2 * S.texture.trim.height),
                                    S.dragging = !1;
                                    for (let e = 0; e < p.length; e++)
                                        p[e].interactive = !0;
                                    if (S.x2 = u.x - 50 + 50 * I,
                                    S.y2 = u.y,
                                    i.sleeping)
                                        return;
                                    if (S.eated)
                                        return;
                                    S.eated = !0;
                                    let a = E[S.food].adds;
                                    if ("lemon" == n.costume && ("sourlemon" == S.food ? a = 12 : a /= 3),
                                    !S.food.includes("potion")) {
                                        if (k.tired)
                                            return;
                                        if (i.hunger + a / 2 >= 100)
                                            return S.eated = !1,
                                            k.gotoPart("Nope"),
                                            void (k.currentPart = -1)
                                    }
                                    S.eating = !0,
                                    k.interactive = !1,
                                    setTimeout((function() {
                                        "sleeppotion" == S.food && (i.sleep = 100,
                                        n.drinksFed += 1,
                                        10 == n.drinksFed && (Fe.achievementQueue("10energydrinks"),
                                        B.energydrink.owned = !0)),
                                        "maxpotion" == S.food && (i.sleep = 0,
                                        i.happiness = 100,
                                        i.hunger = 100),
                                        k.food.textures = [S.texture],
                                        "sourlemon" == S.food && "lemon" != n.costume ? k.gotoPart("EatSour") : k.gotoPart("Eat"),
                                        "sourlemon" == S.food && (n.lemonsFed += 1,
                                        n.lemonsFed >= 2763 && !m["2763lemons"].done && Fe.flash(!1, (function() {
                                            B.limedrop.apply(k),
                                            B.limedrop.owned = !0,
                                            n.costume = "limedrop",
                                            W(),
                                            Fe.achievementQueue("2763lemons")
                                        }
                                        ), !0),
                                        n.lemonsFed >= 100 && !m.lemons.done && Fe.flash(!1, (function() {
                                            B.lemon.apply(k),
                                            B.lemon.owned = !0,
                                            n.costume = "lemon",
                                            W(),
                                            Fe.achievementQueue("lemons")
                                        }
                                        ), !0),
                                        W()),
                                        n.sfx && (te.consume.stop(),
                                        te.consume.play()),
                                        t.fridge[S.foodId] = "",
                                        setTimeout((function() {
                                            i.hunger += a,
                                            i.progress += 20 + E[S.food].adds / 4,
                                            i.happiness += Math.round(Math.max(0, (40 - i.happiness) / 2)),
                                            i.hunger >= 100 && (i.hunger = 100),
                                            k.currentPart = -1
                                        }
                                        ), 400),
                                        k.onAnimationEnd = function() {
                                            k.interactive = !0,
                                            k.onAnimationEnd = function() {}
                                        }
                                    }
                                    ), 100)
                                }
                                )),
                                p.push(S)
                            }
                            e();
                            let g = function() {
                                if (!v)
                                    for (let e = 0; e < p.length; e++) {
                                        let t = p[e];
                                        t.dragging ? (t.x = h.linear(t.x, t.x2, .4, Qe),
                                        t.y = h.linear(t.y, t.y2, .4, Qe)) : t.eating ? (t.x = h.linear(t.x, k.x - 75, .2, Qe),
                                        t.y = h.linear(t.y, k.y - 100, .3, Qe),
                                        t.alpha = h.linear(t.alpha, 0, .2, Qe),
                                        t.interactive = !1) : (t.x = h.linear(t.x, t.x2, .2, Qe),
                                        t.y = h.linear(t.y, t.y2, .3, Qe)),
                                        t.rotation = (t.x - t.x2) / 100 + (t.y - t.y2) / 100,
                                        t.scale.x = 1 + (t.y - u.y) / 600 + Math.abs(t.x - t.x2) / 100 - Math.abs(t.y - t.y2) / 100,
                                        t.scale.y = t.scale.x + Math.abs(t.y - t.y2) / 100 - Math.abs(t.x - t.x2) / 100
                                    }
                            }
                              , v = !1;
                            c.ticker.add(g),
                            l = function() {
                                v = !0,
                                c.ticker.remove(g);
                                for (let e = 0; e < p.length; e++) {
                                    let t = p[e];
                                    t.parent.removeChild(t),
                                    t.destroy()
                                }
                                u.parent.removeChild(u),
                                u.destroy(),
                                f.removeAllListeners(),
                                l = function() {}
                            }
                        }
                        if ("bedroom" == r) {
                            k.visible = !0,
                            x.visible = !0,
                            f.texture = $["Sprites/Rooms"][3],
                            x.texture = $["Sprites/Rooms"][4],
                            f.hitArea = new PIXI.Rectangle(-160,-140,100,150),
                            f.interactive = !0,
                            f.lit = !i.sleeping;
                            let b = new PIXI.ColorMatrixFilter;
                            b.matrix = [.2, 0, 0, 0, 0, 0, .2, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, 1, 0],
                            f.lit || (d.filters = [b]),
                            f.on("pointerdown", (function() {
                                n.introMode && Fe.fade((function() {
                                    !function(e=function() {}
                                    ) {
                                        let t = new PIXI.Sprite($["Sprites/Rooms"][15]);
                                        t.tint = 0,
                                        t.x = c.screen.width / 2,
                                        t.y = c.screen.height / 2,
                                        t.anchor.set(.5, .5),
                                        c.stage.addChild(t),
                                        t.interactive = !0;
                                        let i = new PIXI.BitmapText("Open the Wheel of Fun by holding down the happiness button.",{
                                            fontSize: 24,
                                            fontName: "MenuShag",
                                            breakWords: !0,
                                            wordWrap: !0,
                                            wordWrapWidth: 300,
                                            maxWidth: 300,
                                            whiteSpace: "normal",
                                            align: "center"
                                        });
                                        c.stage.addChild(i),
                                        i.anchor.set(.5, .5),
                                        i.x = c.screen.width / 2,
                                        i.y = c.screen.height / 2;
                                        let n = 0
                                          , r = new PIXI.Sprite($["Sprites/GameUI"][19]);
                                        r.anchor.set(.5, .5),
                                        r.scale.x = .1,
                                        r.scale.y = .1,
                                        r.rotation = -1,
                                        r.visible = !1,
                                        c.stage.addChild(r);
                                        let s = new PIXI.Sprite($["Sprites/GameUI"][17])
                                          , l = new PIXI.Sprite($["Sprites/GameUI"][20])
                                          , d = new PIXI.Sprite($["Sprites/GameUI"][33]);
                                        d.title = [o.ui.settings, 32],
                                        l.title = [o.ui.games, 24],
                                        s.title = [o.ui.wardrobe, 24];
                                        let u = new PIXI.Sprite($["Sprites/GameUI"][35]);
                                        u.title = [o.ui.achievements, 24];
                                        let p = [s, l, u]
                                          , m = [d];
                                        for (let e = 0; e < p.length; e++) {
                                            let t = p[e];
                                            t.anchor.set(.5, .5),
                                            t.scale.x = .6,
                                            t.scale.y = .6;
                                            let i = a(t.title[0], t.title[1], "center");
                                            t.addChild(i),
                                            i.y = -80;
                                            let n = Math.cos((e + .5 - 2) / 8 * Math.PI * 2)
                                              , o = Math.sin((e + .5 - 2) / 8 * Math.PI * 2);
                                            t.x = 100 * n,
                                            t.y = 100 * o,
                                            t.original = {
                                                x: t.x,
                                                y: t.y
                                            },
                                            r.addChild(t),
                                            t.speed = .05
                                        }
                                        for (let e = 0; e < m.length; e++) {
                                            let t = m[e];
                                            t.anchor.set(.5, .5),
                                            t.scale.x = .4,
                                            t.scale.y = .4,
                                            p.push(t),
                                            t.speed = .03;
                                            let i = a(t.title[0], t.title[1], "center");
                                            t.addChild(i),
                                            i.y = -80;
                                            let n = Math.cos((e + 1 - 2) / 8 * Math.PI * 2)
                                              , o = Math.sin((e + 1 - 2) / 8 * Math.PI * 2);
                                            t.x = 160 * n,
                                            t.y = 160 * o,
                                            t.original = {
                                                x: t.x,
                                                y: t.y
                                            },
                                            r.addChild(t)
                                        }
                                        let y = new PIXI.Sprite($["Sprites/GameUI"][0]);
                                        c.stage.addChild(y),
                                        y.anchor.set(.5, .5),
                                        y.x = c.screen.width / 2,
                                        y.y = c.screen.height / 2,
                                        y.alpha = 0;
                                        let g = !1
                                          , f = new M((function() {
                                            g || (g = !0,
                                            Fe.blurPan(c.stage, (function() {
                                                !function() {
                                                    t.destroy();
                                                    for (let e = 0; e < p.length; e++)
                                                        p[e].destroy();
                                                    r.destroy(),
                                                    y.destroy(),
                                                    f.destroy(),
                                                    i.destroy(),
                                                    c.ticker.remove(x)
                                                }(),
                                                e()
                                            }
                                            )))
                                        }
                                        ),c.screen.width / 2,c.screen.height / 2 + 200,180,40,o.ui.continueUpperCase,0,.5,.5,1,"center");
                                        f.element.visible = !1,
                                        c.stage.addChild(f.element);
                                        let x = function() {
                                            if (n += Qe,
                                            n >= 130) {
                                                let e = n - 130;
                                                y.alpha = window.eases.easeOutQuad(Math.min(20, e), 0, 1, 20),
                                                y.scale.x = window.eases.easeOutElastic(Math.min(100, e), .1, .9, 100)
                                            }
                                            if (n >= 230) {
                                                let e = n - 230;
                                                y.scale.x = window.eases.easeOutBack(Math.min(30, e), 1, -.1, 30)
                                            }
                                            if (n >= 260) {
                                                let e = n - 260;
                                                y.scale.x = window.eases.easeOutBack(Math.min(30, e), .9, .1, 30),
                                                r.x = y.x,
                                                r.y = y.y,
                                                r.scale.x = h.linear(r.scale.x, 1, .05, Qe),
                                                r.rotation = h.linear(r.rotation, 12, .05, Qe),
                                                r.scale.y = r.scale.x,
                                                r.visible = !0,
                                                i.y = h.linear(i.y, c.screen.height / 2 - 250, .05, Qe);
                                                for (let e = 0; e < p.length; e++)
                                                    p[e].rotation = -r.rotation,
                                                    p[e].x = h.linear(p[e].x, p[e].original.x, p[e].speed, Qe),
                                                    p[e].y = h.linear(p[e].y, p[e].original.y, p[e].speed, Qe)
                                            }
                                            if (n >= 320) {
                                                let e = n - 320;
                                                f.element.alpha = window.eases.easeOutQuad(Math.min(20, e), 0, 1, 20),
                                                f.element.visible = !0
                                            }
                                            if (y.scale.y = y.scale.x,
                                            n >= 100 && n < 260) {
                                                let e = n - 100;
                                                i.y = c.screen.height / 2 + window.eases.easeInOutQuad(Math.min(60, e), 0, -100, 60)
                                            }
                                        };
                                        c.ticker.add(x)
                                    }((function() {
                                        f.lit = !1,
                                        k.tired = !1,
                                        k.switchData(ee[L.awake]),
                                        k.switchParts(y[X]),
                                        i.sleeping = !1,
                                        k.gotoPart("Wave"),
                                        i.happiness = 20,
                                        i.hunger = 50,
                                        i.sleep = 80,
                                        j.offset = i.happiness / 100,
                                        H.offset = i.hunger / 100,
                                        Q.offset = i.sleep / 100,
                                        d.filters = [],
                                        G("livingRoom", !0),
                                        C = 0,
                                        n.skipIntro = !0,
                                        setTimeout((function() {
                                            0 == C && n.sfx && te.wave.play()
                                        }
                                        ), 2e3),
                                        n.music && te.brittlerille.play(),
                                        n.introMode = !1,
                                        W()
                                    }
                                    ))
                                }
                                ), 120, 30),
                                f.lit = !f.lit,
                                f.lit ? (n.sfx && (te.switchon.attack = 0,
                                te.switchon.stop(),
                                te.switchon.play()),
                                d.filters = []) : (k.idle = -1,
                                i.sleeping = !0,
                                te.brittlerille.pause(),
                                k.canPat = !1,
                                k.tired ? k.gotoPart("Sleep") : (k.tired = !0,
                                k.switchData(ee[L.tired]),
                                k.switchParts(y[N]),
                                k.gotoPart("Sleepy"),
                                k.onAnimationEnd = function() {
                                    k.gotoPart("Sleep")
                                }
                                ),
                                d.filters = [b],
                                n.sfx && (te.switchoff.attack = 0,
                                te.switchoff.stop(),
                                te.switchoff.play())),
                                W()
                            }
                            )),
                            l = function() {
                                d.filters = [],
                                f.removeAllListeners(),
                                l = function() {}
                            }
                            ,
                            d.addChild(x),
                            k.x = 20,
                            k.y = 80,
                            k.rotation = .2,
                            Q.selected.visible = !0
                        }
                    };
                    p ? g() : Fe.blurPan(c.stage, g)
                };
                k = Te(ee[L.awake], y[L.awake]),
                k.size = 1,
                k.applyCostumeAnimations = function() {
                    let e = B[n.costume];
                    null != e.generateAnimations && e.generateAnimations(),
                    null != e.animation ? (L.tired = e.animation.tired,
                    L.awake = e.animation.awake) : (L.tired = "TeardropTired",
                    L.awake = "Teardrop"),
                    k.animationName.includes("Tired") ? k.switchData(ee[L.tired]) : k.switchData(ee[L.awake])
                }
                ,
                "none" != n.costume && (B[n.costume].apply(k),
                k.applyCostumeAnimations()),
                k.write = function(e=!0, t=1, i="Book Text") {
                    k.interactive = !1,
                    e ? k.gotoPart("BookOpen") : (t--,
                    k.gotoPart("Write")),
                    k.onAnimationEnd = function() {
                        t--,
                        k.gotoPart("Write"),
                        -1 == t && (k.gotoPart("SendMessage"),
                        k.onAnimationEnd = function() {}
                        ,
                        setTimeout((function() {
                            k.interactive = !0,
                            Fe.book(i)
                        }
                        ), 750))
                    }
                }
                ,
                d.addChild(k),
                k.play(60),
                i.sleep < 20 ? (k.tired = !0,
                k.switchData(ee[L.tired]),
                k.switchParts(y[N]),
                k.gotoPart("Idle")) : (k.tired = !1,
                k.gotoPart("Wave")),
                i.sleeping ? (te.brittlerille.pause(),
                k.visible = !1,
                k.tired = !0,
                k.switchData(ee[L.tired]),
                k.switchParts(y[N]),
                k.idle = -1,
                k.gotoPart("Sleep")) : k.idle = "Idle",
                k.canPat = !1,
                setTimeout((function() {
                    0 == C && (i.sleeping || i.sleep < 20 || n.sfx && te.wave.play())
                }
                ), 2e3),
                w && setTimeout((function() {
                    i.sleeping || (k.canPat = !0)
                }
                ), 4e3);
                let U = -1;
                function R() {
                    H.buttonContainer.visible = !0,
                    H.buttonContainer.alpha = 0,
                    U = 0,
                    k.canPat = !0;
                    let e = 0;
                    V.visible = !0,
                    V.alpha = 0,
                    c.ticker.add((function t() {
                        if (e += Qe,
                        2 == U && V.alpha <= 1 && (V.alpha += 1 / 30),
                        0 == U)
                            H.empty.scale.x = 1 + Math.abs(Math.sin(e / 10)) / 16,
                            H.empty.scale.y = H.empty.scale.x,
                            V.alpha <= 1 && (V.alpha += 1 / 30),
                            e > 30 * Math.PI && (U = 1);
                        else if (1 == U || 1.5 == U) {
                            if (H.empty.scale.x = 1,
                            H.empty.scale.y = H.empty.scale.x,
                            V.alpha < 0)
                                return 1.5 == U && (U = 2),
                                e = 0,
                                void (V.rotation = -Math.PI / 2);
                            V.alpha -= 1 / 30
                        }
                        if (0 != U && 1 != U || (V.x = c.screen.width / 2,
                        V.y = H.buttonContainer.y - 100 + 5 * Math.sin(e / 10)),
                        4 == U)
                            Q.empty.scale.x = 1 + Math.abs(Math.sin(e / 10)) / 16,
                            Q.empty.scale.y = Q.empty.scale.x,
                            V.alpha <= 1 && (V.alpha += 1 / 30),
                            e > 30 * Math.PI && (U = 5);
                        else if (5 == U) {
                            if (Q.empty.scale.x = 1,
                            Q.empty.scale.y = Q.empty.scale.x,
                            V.alpha < 0)
                                return e = 0,
                                void c.ticker.remove(t);
                            V.alpha -= 1 / 30
                        }
                        4 != U && 5 != U || (V.x = Q.buttonContainer.x,
                        V.y = Q.buttonContainer.y - 100 + 5 * Math.sin(e / 10)),
                        2 != U && 3 != U || (V.x = c.screen.width / 2 + 5 * Math.sin(e / 10),
                        V.y = 100),
                        2 == U && e > 30 * Math.PI && (U = 3),
                        3 == U && (V.alpha < 0 && (e = 0),
                        V.alpha -= 1 / 30),
                        V.alpha >= 1 && (V.alpha = 1)
                    }
                    ))
                }
                function O() {
                    w || (k.gotoPart("SendMessage"),
                    setTimeout((function() {
                        Fe.book(o.dialogue.yoyleberryinvitation, R),
                        k.interactive = !0
                    }
                    ), 750),
                    k.onAnimationEnd = function() {}
                    )
                }
                w || (n.introMode = !0,
                k.onAnimationEnd = function() {
                    k.interactive = !1,
                    k.gotoPart("BookOpen"),
                    k.onAnimationEnd = function() {
                        k.gotoPart("Write"),
                        k.onAnimationEnd = function() {
                            k.gotoPart("Write"),
                            k.onAnimationEnd = function() {
                                k.gotoPart("SendMessage"),
                                setTimeout((function() {
                                    C < 5 ? Fe.book(o.dialogue.greet, O) : (i.happiness -= 10,
                                    Fe.book(o.dialogue.greet2, O))
                                }
                                ), 750),
                                k.onAnimationEnd = function() {
                                    k.gotoPart("BookOpen"),
                                    k.onAnimationEnd = function() {
                                        k.gotoPart("Write")
                                    }
                                }
                            }
                        }
                    }
                }
                ),
                k.x = 0,
                k.y = 100;
                let F = new PIXI.Rectangle(-60,-160,120,180);
                k.hitArea = F,
                k.interactive = !0,
                k.pointerPressing = !1,
                k.pointer = {},
                k.pointerDistance = {},
                k.patting = !1;
                let _ = 0;
                k.on("pointerdown", (function(e) {
                    k.pointer = {
                        x: e.clientX / s,
                        y: e.clientY / s
                    },
                    k.pointerPressing = !0,
                    _ = Date.now()
                }
                )),
                k.on("pointermove", (function(e) {
                    let t = {
                        x: e.clientX / s,
                        y: e.clientY / s
                    };
                    g(k.pointer.x, k.pointer.y, t.x, t.y) > 10 && k.pointerPressing && k.canPat && (k.patting ? (i.happiness += .02,
                    i.progress += .02,
                    k.patAnimationForce += .05,
                    k.patAnimationForce > .2 && (k.patAnimationForce = .2)) : (k.hitArea = new PIXI.Rectangle(-90,-200,180,220),
                    k.patAnimationForce = .1,
                    k.idle = -1,
                    k.patting = !0,
                    k.patAnimation = 0,
                    k.gotoPart("Pat"),
                    k.pointer = {
                        x: e.clientX / s,
                        y: e.clientY / s
                    })),
                    k.pointerDistance = {
                        x: t.x - k.pointer.x,
                        y: t.y - k.pointer.y
                    }
                }
                )),
                k.on("pointerout", (function(e) {
                    1 == k.patting && (k.gotoPart("PatStop"),
                    k.patting = !1,
                    k.hitArea = F,
                    k.idle = "Idle"),
                    k.pointerPressing = !1
                }
                )),
                k.on("pointerup", (function() {
                    if (1 == k.patting && (k.gotoPart("PatStop"),
                    k.patting = !1,
                    k.idle = "Idle",
                    k.hitArea = F),
                    k.pointerPressing = !1,
                    Date.now() - _ < 200) {
                        k.canPat = !0,
                        n.totalSlaps++,
                        C++,
                        2763 == n.totalSlaps && (Fe.achievementQueue("slapTD2763"),
                        W());
                        let e = 1 + Math.floor(4 * Math.random());
                        te.wave.stop(),
                        n.sfx && (te["slap" + e].attack = 0,
                        te["slap" + e].stop(),
                        te["slap" + e].play()),
                        k.gotoPart("Slap"),
                        i.sleeping && n.music && te.brittlerille.play(),
                        f.lit = !0,
                        d.filters = [],
                        k.idle = "Idle",
                        i.sleeping = !1,
                        k.currentPart = -1
                    }
                }
                ));
                let z = n.safeArea ? -20 : 0
                  , j = new S($["Sprites/GameUI"][1],$["Sprites/GameUI"][0],i.happiness / 100);
                j.buttonContainer.x = 60,
                j.buttonContainer.y = c.screen.height - 60 + z,
                j.buttonContainer.scale.x = .8,
                j.buttonContainer.scale.y = .8,
                c.stage.addChild(j.buttonContainer),
                e.x = j.buttonContainer.x,
                e.y = j.buttonContainer.y,
                v(j.buttonContainer, (function() {
                    j.holding && G("livingRoom")
                }
                )),
                j.holding = !1,
                j.buttonContainer.on("pointerdown", (function() {
                    j.holding = !0,
                    setTimeout((function() {
                        j.holding && (j.holding = !1,
                        j.buttonContainer.emit("pointerup"),
                        n.introMode || (e.active = !e.active))
                    }
                    ), 250)
                }
                )),
                j.buttonContainer.on("pointerup", (function() {
                    j.holding = !1
                }
                ));
                let H = new S($["Sprites/GameUI"][4],$["Sprites/GameUI"][3],i.hunger / 100);
                H.buttonContainer.x = c.screen.width / 2,
                H.buttonContainer.y = c.screen.height - 60 + z,
                H.buttonContainer.scale.x = .8,
                H.buttonContainer.scale.y = .8,
                c.stage.addChild(H.buttonContainer),
                v(H.buttonContainer, (function() {
                    G("kitchen")
                }
                )),
                H.selected.visible = !1;
                let Q = new S($["Sprites/GameUI"][6],$["Sprites/GameUI"][5],i.sleep / 100);
                Q.buttonContainer.x = c.screen.width - 60,
                Q.buttonContainer.y = c.screen.height - 60 + z,
                Q.buttonContainer.scale.x = .8,
                Q.buttonContainer.scale.y = .8,
                c.stage.addChild(Q.buttonContainer),
                v(Q.buttonContainer, (function() {
                    G("bedroom")
                }
                )),
                Q.selected.visible = !1,
                A = function() {
                    z = n.safeArea ? -20 : 0,
                    j.buttonContainer.y = c.screen.height - 60 + z,
                    H.buttonContainer.y = c.screen.height - 60 + z,
                    Q.buttonContainer.y = c.screen.height - 60 + z
                }
                ;
                let V = new PIXI.Sprite($["Sprites/GameUI"][7]);
                V.x = 100,
                V.y = 100,
                V.visible = !1,
                V.anchor.set(.5, .5),
                c.stage.addChild(V);
                let Y = Fe.coinCounter();
                Y.x = 20,
                Y.y = 20,
                c.stage.addChild(Y);
                let K = new S($["Sprites/GameUI"][28],$["Sprites/GameUI"][27],i.progress / i.progressNeeded,!0,!1);
                K.buttonContainer.x = c.screen.width - 60,
                K.buttonContainer.y = 60,
                c.stage.addChild(K.buttonContainer),
                K.selected.visible = !1,
                v(K.buttonContainer, (function() {}
                ));
                let J = a(n.level, 32, "center", void 0, 2);
                J.y = -2,
                K.buttonContainer.addChild(J);
                let q = new P((function() {
                    Fe.flash(!1, (function() {
                        Fe.settings((function() {}
                        ))
                    }
                    ))
                }
                ),$["Sprites/GameUI"][24]);
                q.sprite.x = c.screen.width - 20 + Y.pivot.y,
                q.sprite.y = 20 - Y.pivot.y,
                w || (Q.buttonContainer.visible = !1,
                H.buttonContainer.visible = !1,
                Y.visible = !1),
                c.ticker.add((function() {
                    if (k.patting) {
                        let e = Math.sin(Math.abs(k.pointerDistance.x) / 100) / 4 + Math.cos(k.patAnimation) / 50
                          , t = Math.sin(-k.pointerDistance.y / 100) / 4 + Math.sin(k.patAnimation) / 50;
                        k.scale.x = h.linear(k.scale.x, (1 + e - t) * k.size, .1, Qe),
                        k.scale.y = h.linear(k.scale.y, (1 + t - e) * k.size, .1, Qe),
                        k.skew.x = h.linear(k.skew.x, -k.pointerDistance.x / 500, .1, Qe),
                        k.patAnimation += k.patAnimationForce,
                        k.patAnimationForce = h.linear(k.patAnimationForce, 0, .01, Qe)
                    } else
                        k.skew.x = h.linear(k.skew.x, 0, .1, Qe),
                        k.scale.x = h.linear(k.scale.x, k.size, .1, Qe),
                        k.scale.y = h.linear(k.scale.y, k.size, .1, Qe);
                    e.active ? (H.buttonContainer.x = h.linear(H.buttonContainer.x, c.screen.width / 2 + 35, .05, Qe),
                    e.scale.x = h.linear(e.scale.x, j.buttonContainer.scale.x, .05, Qe),
                    e.rotation = h.linear(e.rotation, 12, .05, Qe),
                    e.scale.y = e.scale.x) : (e.scale.x = h.linear(e.scale.x, .1, .05, Qe),
                    e.rotation = h.linear(e.rotation, -1, .05, Qe),
                    e.scale.y = e.scale.x,
                    H.buttonContainer.x = h.linear(H.buttonContainer.x, c.screen.width / 2, .05, Qe));
                    for (let t = 0; t < T.length; t++)
                        T[t].rotation = -e.rotation,
                        e.active ? (T[t].x = h.linear(T[t].x, T[t].original.x, T[t].speed, Qe),
                        T[t].y = h.linear(T[t].y, T[t].original.y, T[t].speed, Qe)) : (T[t].x = h.linear(T[t].x, 0, .01, Qe),
                        T[t].y = h.linear(T[t].y, 0, .01, Qe));
                    j.offset = h.linear(j._offset, i.happiness / 100, .04, Qe),
                    0 == i.happiness ? j.empty.texture = $["Sprites/GameUI"][2] : j.empty.texture = $["Sprites/GameUI"][1],
                    H.offset = h.linear(H._offset, i.hunger / 100, .04, Qe),
                    Q.offset = h.linear(Q._offset, i.sleep / 100, .04, Qe),
                    Y.updateCounter(h.linear(Y.getCounterAmount(), t.coins, .05, Qe)),
                    K.offset = h.linear(K._offset, i.progress / i.progressNeeded, .04, Qe),
                    w || -1 == U || (H.buttonContainer.alpha = h.linear(H.buttonContainer.alpha, 1, .05, Qe)),
                    n.introMode && U >= 4 && (Q.buttonContainer.alpha = h.linear(Q.buttonContainer.alpha, 1, .05, Qe))
                }
                )),
                new M((function() {
                    let e = Fe.book("This will absolutely \nerase any user data \nfrom localStorage.\nPROCEED WITH \nCAUTION!\n \n \n \n(exit this page to\ncancel)", (function() {}
                    ), 60);
                    e.onDestroyed = function() {
                        t.destroy()
                    }
                    ;
                    let t = new M((function() {
                        setInterval((function() {
                            let e = Te(ee.Teardrop, y.Teardrop);
                            e.x = c.screen.width * Math.random(),
                            e.y = c.screen.height * Math.random(),
                            e.rotation = Math.random() * Math.PI * 4,
                            e.play(60),
                            e.gotoPart("Wave"),
                            c.stage.addChild(e)
                        }
                        ), 1e3 / 60),
                        setInterval((function() {
                            let e = Te(ee.Box, y.Box);
                            e.x = c.screen.width * Math.random(),
                            e.y = c.screen.height * Math.random(),
                            e.rotation = Math.random() * Math.PI * 4,
                            e.play(60),
                            e.gotoPart("Jump"),
                            c.stage.addChild(e)
                        }
                        ), 1e3 / 60),
                        setTimeout((function() {
                            localStorage.clear(),
                            window.location = window.location
                        }
                        ), 500)
                    }
                    ),-75,0,200,40,"CONTINUE",0,0,0,2,"center");
                    e.addChild(t.element)
                }
                ),c.screen.width - 20,20,80,30,"RESET",0,1,0,1,"center"),
                window.addEventListener("resize", (function() {
                    e.y = j.buttonContainer.y,
                    d.x = c.screen.width / 2,
                    d.y = c.screen.height / 2,
                    j.buttonContainer.y = c.screen.height - 60 + z,
                    H.buttonContainer.y = c.screen.height - 60 + z,
                    Q.buttonContainer.x = c.screen.width - 60,
                    Q.buttonContainer.y = c.screen.height - 60 + z,
                    q.sprite.x = c.screen.width - 20 + Y.pivot.y,
                    K.buttonContainer.x = c.screen.width - 60
                }
                ))
            }
            if (b.anchor.set(.5, .5),
            w)
                T();
            else {
                let G;
                G = new M((function() {
                    w = !0,
                    G.destroy(),
                    b.destroy(),
                    c.ticker.remove(R),
                    U.destroyAnimation(),
                    I = 1,
                    f.scale.x = 1,
                    f.scale.y = 1,
                    T(),
                    Fe.flash(!0),
                    n.skipIntro = !0,
                    W()
                }
                ),20,c.screen.height - 20,100,20,o.ui.skipIntro,0,0,1,2,"center"),
                G.element.alpha = .5,
                c.stage.addChild(b),
                b.x = c.screen.width / 2,
                b.y = c.screen.height / 2 - 100,
                b.fade = 1,
                b.alpha = 0;
                let U = Te(ee.Box, y.Box);
                function R() {
                    G.dissapear && (G.element.hover ? G.element.alpha = h.linear(G.element.alpha, .5, .1, Qe) : G.element.alpha = h.linear(G.element.alpha, 0, .1, Qe)),
                    b.alpha = h.linear(b.alpha, b.fade, .1, Qe),
                    null != b.shake && 0 != b.shake && null != b.orig && (b.x = b.orig.x + (Math.random() - .5) * b.shake,
                    b.y = b.orig.y + (Math.random() - .5) * b.shake,
                    b.rotation = (Math.random() - .5) * b.shake / 50,
                    b.shake = h.linear(b.shake, 0, .1, Qe)),
                    b.go && (b.x += b.vx * Qe,
                    b.vx += 5 * Qe),
                    I = h.linear(I, U.timesBeforeSteal <= 0 ? 1 : 1.5, .05, Qe),
                    U.scale.x = I,
                    U.scale.y = I,
                    f.scale.x = h.linear(1 * I, 1, .2),
                    f.scale.y = h.linear(1 * I, 1, .2)
                }
                U.timesBeforeSteal = 10,
                d.addChild(U),
                U.play(60),
                U.gotoPart("Jump"),
                U.pivot.y = -100,
                U.x = 0,
                U.y = 0,
                U.interactive = !0,
                U.hitArea = new PIXI.Rectangle(-100,-160,200,180),
                U.on("pointerdown", (function() {
                    G.dissapear = !0,
                    U.timesBeforeSteal <= 0 || (U.timesBeforeSteal--,
                    0 == U.timesBeforeSteal ? (b.fade = 1,
                    b.text = o.intro.hey,
                    b.orig = {
                        x: c.screen.width / 2,
                        y: c.screen.height / 2 + 50
                    },
                    setTimeout((function() {
                        b.shake = void 0,
                        b.go = !0,
                        b.vx = 0,
                        b.fade = 0
                    }
                    ), 1e3),
                    setTimeout((function() {
                        b.go = !1,
                        b.x = c.screen.width / 2,
                        b.y = c.screen.height / 2,
                        b.text = o.intro.who,
                        b.fade = 1
                    }
                    ), 2e3),
                    setTimeout((function() {
                        b.destroy(),
                        c.ticker.remove(R),
                        U.destroyAnimation(),
                        Fe.flash(!1, T),
                        W()
                    }
                    ), 4e3),
                    b.y = c.screen.height / 2 + 50,
                    b.shake = 10,
                    b.fontSize = 48,
                    U.gotoPart("Steal")) : (b.fade = 0,
                    "Click1" == U.currentPart ? U.gotoPart("Click2") : U.gotoPart("Click1")))
                }
                )),
                c.ticker.add(R)
            }
            if (n.privateBeta) {
                let O = a("CONFIDENTAL", 20);
                O.x = 20,
                O.y = 20;
                let F = a("Please do not take any screenshots of this myTeardrop build.", 12);
                F.maxWidth = 250,
                F.x = 20,
                F.y = 40,
                F.alpha = .5,
                O.alpha = .5,
                c.stage.addChild(F),
                c.stage.addChild(O)
            }
            Fe.flash(!0)
        },
        levelUp: function() {
            n.minigameMusic && (te.levelup.stop(),
            te.levelup.play(),
            te.brittlerille.pause());
            let e = 6737151;
            null != B[n.costume].color && n.levelUpCostumes && (e = B[n.costume].color);
            let t = new PIXI.Sprite($["Sprites/Rooms"][15]);
            t.x = c.screen.width / 2,
            t.y = c.screen.height / 2,
            t.anchor.set(.5, .5),
            c.stage.addChild(t),
            t.interactive = !0;
            let i = new PIXI.Sprite($["Sprites/Rooms"][17]);
            i.x = c.screen.width / 2,
            i.y = c.screen.height / 2 - 100,
            i.alpha = .3,
            i.anchor.set(.5, .5),
            i.tint = e,
            c.stage.addChild(i);
            let r = new PIXI.Sprite($["Sprites/Rooms"][15]);
            r.tint = e,
            r.x = c.screen.width / 2,
            r.y = c.screen.height / 2,
            r.anchor.set(.5, 0),
            c.stage.addChild(r);
            let s = new PIXI.Sprite($["Sprites/Bodies"][68]);
            s.x = c.screen.width / 2,
            s.y = c.screen.height / 2,
            s.anchor.set(.5, .5),
            c.stage.addChild(s);
            let l = new PIXI.Sprite($["Sprites/Bodies"][68]);
            l.tint = e,
            l.anchor.set(.5, .5),
            s.addChild(l),
            l.scale.x = .8,
            l.scale.y = .8,
            l.alpha = .8;
            let d = new PIXI.Sprite($["Sprites/Rooms"][16]);
            d.x = c.screen.width / 2,
            d.y = c.screen.height / 2,
            d.anchor.set(.5, .5),
            c.stage.addChild(d),
            d.blendMode = PIXI.BLEND_MODES.ADD,
            d.alpha = 0;
            let h = a(o.ui.newLevel + ": " + n.level, 48, "center");
            h.x = c.screen.width / 2,
            h.y = c.screen.height / 2 - 200,
            h.visible = !1,
            c.stage.addChild(h);
            let u = !1
              , p = new M((function() {
                u || (u = !0,
                Fe.blurPan(c.stage, (function() {
                    p.destroy(),
                    i.destroy(),
                    h.destroy(),
                    n.music && te.brittlerille.play(),
                    n.canLevelUp = !0,
                    t.destroy(),
                    r.destroy(),
                    m.destroyAnimation(),
                    l.destroy(),
                    s.destroy(),
                    d.destroy(),
                    c.ticker.remove(f)
                }
                )))
            }
            ),c.screen.width / 2,c.screen.height / 2 + 150,180,40,o.ui.continueUpperCase,0,.5,.5,n.levelUpCostumes ? 2 : 10,"center");
            c.stage.addChild(p.element),
            p.element.alpha = 0,
            setTimeout((function() {
                p.animationOffset = g,
                p.visible = !0
            }
            ), 3e3);
            let m = Te(ee.tearDropLevelUp);
            c.stage.addChild(m);
            let y = !0;
            if ("uglysweater" != n.costume && "_td_costume1" != n.costume || (y = !1),
            n.levelUpCostumes && y) {
                let e = {
                    a: {
                        d: m.a.d,
                        e: m.a.e,
                        f: m.a.f,
                        g: m.a.g,
                        h: m.a.h,
                        i: m.a.i2,
                        j: m.a.j,
                        k: m.a.k
                    },
                    c: m.c,
                    b: m.b
                };
                null != B[n.costume].applyMinigame ? (B[n.costume].applyMinigame(m),
                B[n.costume].applyMinigame(e)) : (B[n.costume].apply(m),
                B[n.costume].apply(e))
            }
            m.play(),
            m.x = c.screen.width / 2,
            m.y = c.screen.height / 2;
            let g = 0
              , f = function() {
                if (p.visible) {
                    let e = g - p.animationOffset;
                    p.element.alpha = eases.easeOutQuint(Math.min(60, e), 0, 1, 60)
                }
                if (g > 107) {
                    let e = g - 107;
                    h.visible = !0,
                    h.y = c.screen.height / 2 - eases.easeOutQuint(Math.min(30, e), 150, 50, 30),
                    h.scale.x = eases.easeOutElastic(Math.min(75, e), .5, .5, 75),
                    h.scale.y = eases.easeOutElastic(Math.min(90, e), .5, .5, 90)
                }
                m.y = c.screen.height / 2 - eases.easeInOutQuad(Math.min(150, g), -100, 50, 150),
                r.y = c.screen.height / 2 + eases.easeInOutQuad(Math.min(150, g), 0, -25, 150),
                m.scale.x = eases.easeInOutQuad(Math.min(120, g), .4, .6, 120),
                m.scale.y = m.scale.x,
                s.y = m.y,
                s.scale.x = m.scale.x,
                s.scale.y = m.scale.y / eases.easeInOutQuad(Math.min(150, g), 2, 2, 150),
                l.y = eases.easeInOutQuad(Math.min(150, g), 16, 16, 150),
                i.y = c.screen.height / 2 + eases.easeInOutQuad(Math.min(150, g), -100, -30, 150),
                i.scale.x = 1 + eases.easeInOutQuad(Math.min(150, g), 0, .025, 150),
                i.scale.y = i.scale.x,
                d.y = m.y - 75 * m.scale.x;
                let e = Math.max(0, g - 90);
                d.alpha = eases.easeInQuint(Math.min(30, e), 0, .1, 30),
                g += Qe
            };
            c.ticker.add(f)
        },
        coinCounter: function() {
            let e = new PIXI.Sprite($["Sprites/GameUI"][9])
              , i = $["Sprites/GameUI"][9].trim;
            e.pivot.x = -i.width / 2,
            e.pivot.y = -i.height / 2,
            e.anchor.set(.5, .5),
            c.stage.addChild(e);
            let a = new PIXI.BitmapText(t.coins,{
                fontSize: 24,
                fontName: "MenuShag"
            });
            a.anchor.set(0, .5),
            a.width > 140 && (a.width = 140,
            a.scale.y = a.scale.x),
            a.x = -i.width / 2 + 60,
            a.y = -i.height / 2 + 22,
            e.addChild(a);
            let o = t.coins;
            return e.getCounterAmount = function() {
                return o
            }
            ,
            e.updateCounter = function(e) {
                a.text = Math.floor(e),
                a.scale.x = 1,
                a.width > 140 && (a.width = 140),
                a.scale.y = a.scale.x,
                o = e
            }
            ,
            e.destroyCounter = function() {
                e.removeChild(a),
                a.destroy(),
                e.destroy()
            }
            ,
            n.privateBeta && (e.visible = !1,
            a.visible = !1),
            e
        },
        loader: function(e, t) {
            let i = [];
            for (let e = 0; e < t.length; e++)
                null == te[t[e][1]] && i.push(t[e]);
            if (0 == i.length)
                return void e();
            let n = new PIXI.Sprite($["Sprites/Rooms"][15]);
            c.stage.addChild(n),
            n.interactive = !0,
            n.x = c.screen.width / 2,
            n.y = c.screen.height / 2,
            n.anchor.set(.5, .5);
            let o = ["Collecting Droplets...", "A bucket of raindrops...", "A sea of water...", "Loading the awesome...", "Teardrop wrote this!", "Please wait for the droplet!", "Woah.. this is new!", "Droplet loading!", "Droplet incoming!!", "This is a loading message", "LOADING: something awesome", "WHAT! The game is loading?", "Sorry for the wait!", "There's a loading circle next to me!", "1... 2... 3... LOAD!", "Am I taking too long?", "There we go!"]
              , r = a(o[Math.floor(Math.random() * o.length)], 24, "left", void 0, 1);
            r.x = 20,
            r.y = c.screen.height - 20,
            r.width > c.screen.width - 100 && (r.width = c.screen.width - 100,
            r.scale.y = r.scale.x),
            r.anchor.set(0, 1),
            c.stage.addChild(r);
            let s = Te(ee.loading);
            s.x = c.screen.width - 40,
            s.y = c.screen.height - 40,
            s.scale.x = .75,
            s.scale.y = .75,
            s.alpha = .5,
            r.alpha = .5,
            s.play(),
            s.loop = !0,
            c.stage.addChild(s);
            let l = 0;
            for (let t = 0; t < i.length; t++) {
                l++;
                let n = i[t][0]
                  , a = i[t][1];
                te[a] = new Pizzicato.Sound("./Audio/" + n + ".mp3",(function() {
                    te[a].volume = 1,
                    te[a].loaded = !0,
                    null != te[a].onloadAudio && te[a].onloadAudio(),
                    te.music.addSound(te[a]),
                    l--,
                    0 == l && Fe.flash(!1, (function() {
                        e(),
                        d()
                    }
                    ))
                }
                )),
                te[a].loaded = !1
            }
            let d = function() {
                s.destroyAnimation(),
                r.destroy(),
                n.destroy(),
                m.destroy(),
                c.ticker.remove(p),
                clearTimeout(u)
            }
              , u = setTimeout((function() {
                m.sprite.alpha = 0,
                m.sprite.visible = !0,
                c.ticker.add(p)
            }
            ), 15e3)
              , p = function() {
                m.sprite.alpha = h.linear(m.sprite.alpha, 1, .1, Qe)
            }
              , m = Fe.exitButton((function() {
                Fe.flash(!1, (function() {
                    d(),
                    Fe.message("Required resources for the minigame have failed to load!", void 0, (function() {}
                    ))
                }
                ))
            }
            ), c.screen.width - 40, 40, .4, 0);
            c.stage.addChild(m.sprite),
            m.sprite.visible = !1
        },
        fridge: function(e=function() {}
        ) {
            let i = new PIXI.Sprite($["Sprites/Rooms"][5]);
            i.scale.x = 1.1,
            i.scale.y = 1.1,
            i.x = c.screen.width / 2,
            i.y = c.screen.height / 2,
            i.anchor.set(.5, .5),
            c.stage.addChild(i),
            i.interactive = !0;
            let r = new PIXI.Container;
            c.stage.addChild(r);
            let l = 0
              , d = 0
              , u = c.screen.width / 2 - 20
              , p = Fe.coinCounter();
            r.addChild(p);
            let m = t.coins;
            p.x = 20,
            p.y = 20;
            let y = {}
              , f = 0
              , x = 0
              , w = 0
              , v = []
              , S = n.introMode ? new PIXI.BitmapText("",{
                fontSize: 24,
                fontName: "MenuShag",
                breakWords: !0,
                wordWrap: !0,
                wordWrapWidth: 300,
                maxWidth: 300,
                whiteSpace: "normal",
                align: "center"
            }) : a("", 32, "center");
            S.anchor.set(.5, .5),
            S.x = c.screen.width / 2,
            S.y = c.screen.height - 150;
            let C = new PIXI.Container
              , b = new PIXI.Graphics
              , P = !n.introMode;
            P && (C.mask = b),
            r.addChild(C),
            r.addChild(S),
            C.x = 5,
            C.y = 80;
            let T, k, A, L = c.screen.width - 10, X = c.screen.height - 170;
            b.beginFill(0),
            b.drawRect(C.x, C.y, L, X),
            b.endFill(),
            C.interactive = !0,
            P && (C.on("pointerdown", (function(e) {
                let t = e.clientY / s;
                C.dragOffset = {
                    y: t - C.y
                },
                C.prevY = C.y,
                C.vy = 0,
                C.scrolling = !0,
                C.origY = C.y
            }
            )),
            k = function(e) {
                if (!C.scrolling)
                    return;
                let t = e.clientY / s;
                if (Math.abs(C.origY - C.y) > 10)
                    for (let e = 0; e < C.children.length; e++)
                        C.children[e].emit("pointerout"),
                        C.children[e].interactive = !1;
                C.prevY = C.y,
                C.y = t - C.dragOffset.y
            }
            ,
            A = function() {
                for (let e = 0; e < C.children.length; e++)
                    C.children[e].interactive = !0;
                C.scrolling = !1
            }
            ,
            document.addEventListener("pointermove", k),
            document.addEventListener("pointerup", A),
            C.vy = 0,
            T = function() {
                let e = 95 * Math.ceil(-N / 2) + 80 + X;
                C.vy = h.linear(C.vy, 0, .05, Qe),
                C.scrolling ? C.vy = C.y - C.prevY : C.y += C.vy,
                C.y >= 80 && (C.y = 80,
                C.vy = 0),
                C.y <= e && (C.y = e,
                C.vy = 0)
            }
            ,
            c.ticker.add(T));
            let N = 0;
            S.targetAlpha = 0;
            for (let e in E) {
                if ("regularcake" != e && n.introMode)
                    continue;
                N++;
                let i = new M((function() {
                    if (r.requiredLevel > n.level)
                        Fe.message("You need atleast level " + r.requiredLevel + " to buy this item!", $["Sprites/GameUI"][35]);
                    else {
                        if (S.text = "",
                        n.introMode && (S.alpha = S.targetAlpha,
                        S.targetAlpha = 1,
                        S.y = c.screen.height / 2 + 100,
                        S.text = "Go to the fridge using the button below, drag a food item to the plate!"),
                        r.cost > m)
                            return n.sfx && (te.fail.stop(),
                            te.fail.play()),
                            x < .01 && (w = 0),
                            x = 2,
                            void (S.text = o.ui.notEnoughCoins);
                        for (let i = 0; i < j.length; i++)
                            if (!j[i].full) {
                                let a = new PIXI.Sprite($["Sprites/Food"][r.texture]);
                                return a.anchor.set(.5, .5),
                                a.y = -a.texture.trim.height,
                                a.vr = Math.random() - .5,
                                a.vy = 2 + 2 * Math.random(),
                                a.x = Math.random() * c.screen.width,
                                c.stage.addChild(a),
                                y[f++] = a,
                                m -= r.cost,
                                n.sfx && (te.purchase.stop(),
                                te.purchase.play()),
                                t.coins = m,
                                V(e, i),
                                void (t.fridge[i] = e)
                            }
                        x < .01 && (w = 0),
                        x = 2,
                        S.text = o.ui.notEnoughSpace,
                        n.sfx && (te.fail.stop(),
                        te.fail.play())
                    }
                }
                ),c.screen.width / 2 - u + d % 2 * (u + 5) - 2.5,95 * Math.floor(d / 2),u,90,"",0,0,0,2)
                  , r = E[e];
                1 != r.hidden && (C.addChild(i.element),
                d++);
                let s = new PIXI.Sprite($["Sprites/Food"][r.texture])
                  , l = new PIXI.Rectangle(0,0,0,0);
                s.hitArea = l,
                i.element.addChild(s),
                s.anchor.set(.5, .5),
                s.x = 40,
                s.y = 40;
                let h = a(r.name, 16, "left", "middle");
                h.x = 70,
                h.y = 20,
                i.element.addChild(h),
                h.width > 80 && (h.width = 80),
                h.scale.y = h.scale.x;
                let p = a(r.cost, 16);
                p.x = 100,
                p.width > 60 && (p.width = 60),
                p.scale.y = p.scale.x,
                p.y = 40 + (16 * -p.scale.y + 16) / 2,
                i.element.addChild(p);
                let g = new PIXI.Sprite($["Sprites/GameUI"][14]);
                if (i.element.addChild(g),
                g.x = 80,
                g.y = 50,
                g.scale.x = .75,
                g.scale.y = .75,
                g.anchor.set(.5, .5),
                g.hitArea = l,
                v.push(g),
                v.push(p),
                v.push(h),
                v.push(i),
                r.requiredLevel > n.level) {
                    let e = new PIXI.NineSlicePlane($.inputNineSlice[14]);
                    e.width = i.element.width,
                    e.height = i.element.height,
                    i.element.addChild(e),
                    e.alpha = .8,
                    e.hitArea = l;
                    let t = new PIXI.Sprite($["Sprites/GameUI"][41]);
                    t.x = i.element.height / 2,
                    t.y = i.element.height / 2,
                    t.anchor.set(.5, .5),
                    t.scale.x = .75,
                    t.scale.y = .75,
                    i.element.addChild(t),
                    t.hitArea = l;
                    let n = a("LEVEL " + r.requiredLevel, 24, "left", "middle");
                    n.x = i.element.height / 2 + 40,
                    n.y = i.element.height / 2 - 2,
                    n.width > i.element.width - n.x - 20 && (n.width = i.element.width - n.x - 20,
                    n.scale.y = n.scale.x),
                    i.element.addChild(n)
                }
            }
            let D = Fe.exitButton((function() {
                e(),
                W(),
                Fe.flash(!1, Y)
            }
            ), c.screen.width - 40, 40, .4, 0);
            n.introMode && n.hideFridgeExit ? (D.sprite.targetAlpha = 0,
            D.sprite.visible = !1) : D.sprite.targetAlpha = 1,
            c.stage.addChild(D.sprite);
            let G = 50;
            r.origX = 0,
            r.time = 50;
            let B = !1
              , U = function() {
                if (!B) {
                    p.updateCounter(h.linear(p.getCounterAmount(), m, .1, Qe));
                    for (let e in y) {
                        let t = y[e];
                        t.y += t.vy * Qe,
                        t.x = h.linear(t.x, c.screen.width / 2, .025),
                        t.vy += .5 * Qe,
                        t.rotation += t.vr / 10 * Qe,
                        t.y > c.screen.height + 200 && (t.destroy(),
                        delete y[e])
                    }
                    r.x = window.eases.easeInOutQuad(G, r.origX, -l * c.screen.width - r.origX, r.time),
                    x > .01 && (r.x += Math.cos(w) * x * 5,
                    w += .5 * Qe,
                    x = h.linear(x, 0, .1, Qe)),
                    G += Qe,
                    r.time <= G && (r.time = 50,
                    G = 50),
                    i.x = c.screen.width / 2 + r.x / 50;
                    for (let e = 0; e < H.length; e++) {
                        let t = H[e];
                        t.dragging ? (t.x = h.linear(t.x, t.x2, .4, Qe),
                        t.y = h.linear(t.y, t.y2, .4, Qe),
                        t.rotation = (t.x - t.x2) / 100 + (t.y - t.y2) / 100,
                        t.scale.x = 1 + Math.abs(t.x - t.x2) / 100 - Math.abs(t.y - t.y2) / 100,
                        t.scale.y = t.scale.x + Math.abs(t.y - t.y2) / 100 - Math.abs(t.x - t.x2) / 100) : (t.x = h.linear(t.x, t.x2, .2, Qe),
                        t.y = h.linear(t.y, t.y2, .3, Qe),
                        t.scale.x = h.linear(t.scale.x, 1, .2, Qe),
                        t.scale.y = h.linear(t.scale.y, 1, .2, Qe),
                        t.rotation = h.linear(t.rotation, 0, .3, Qe))
                    }
                    n.introMode && (S.alpha = h.linear(S.alpha, S.targetAlpha, .1, Qe),
                    D.sprite.alpha = h.linear(D.sprite.alpha, D.sprite.targetAlpha, .1, Qe))
                }
            };
            c.ticker.add(U);
            let R = new M((function() {
                0 != l && (l = 0,
                r.origX = r.x,
                r.time = Math.min(50, G),
                G = 0)
            }
            ),c.screen.width / 2 - 2.5,c.screen.height - 80,120,30,o.ui.shop,0,1,0,1,"center");
            c.stage.addChild(R.element);
            let O = function() {
                1 != l && (l = 1,
                r.origX = r.x,
                r.time = Math.min(50, G),
                G = 0)
            }
              , F = new M(O,c.screen.width / 2 + 2.5,c.screen.height - 80,120,30,o.ui.fridge,0,0,0,1,"center");
            c.stage.addChild(F.element),
            1 == n.lastFridgePage && (O(),
            G = r.time);
            let _ = new PIXI.Container;
            _.x = c.screen.width,
            r.addChild(_);
            let z = new PIXI.Sprite($["Sprites/Food"][0]);
            z.anchor.set(.5, .5),
            z.x = c.screen.width / 2,
            z.y = c.screen.height - 130,
            _.addChild(z);
            let j = []
              , H = [];
            new Array(23).fill("");
            for (let e = 0; e < 20; e++) {
                let t = new PIXI.Sprite($["Sprites/GameUI"][15]);
                j.push(t),
                t.hitArea = new PIXI.Rectangle(-32,-32,64,64),
                t.x = 32 + e % 4 * 79 + (c.screen.width / 2 - 158) + 7.5,
                t.y = 100 + 79 * Math.floor(e / 4),
                t.anchor.set(.5, .5),
                t.full = !1,
                _.addChild(t)
            }
            for (let e = 0; e < 3; e++) {
                let t = new PIXI.Sprite($["Sprites/GameUI"][15]);
                j.push(t),
                t.hitArea = new PIXI.Rectangle(-32,-32,64,64),
                t.x = z.x - 50 + 50 * e,
                t.y = z.y,
                t.anchor.set(.5, .5),
                t.full = !1,
                _.addChild(t),
                t.visible = !1
            }
            let Q = 0;
            function V(e, i) {
                let a = j[i];
                if ("" != e && null != e) {
                    let o = new PIXI.Sprite($["Sprites/Food"][E[e].texture]);
                    o.scale.x = 1,
                    o.scale.y = o.scale.x,
                    o.box = i,
                    o.item = e,
                    a.food = Q,
                    a.full = !0,
                    o.on("pointerdown", (function() {
                        for (let e = 0; e < H.length; e++)
                            H[e].interactive = !1;
                        for (let e = 0; e < j.length; e++)
                            j[e].interactive = !1;
                        o.interactive = !0,
                        _.addChild(o)
                    }
                    )),
                    o.on("pointerup", (function() {
                        for (let e = 0; e < H.length; e++)
                            H[e].interactive = !0;
                        let i = !1;
                        null != o.originalPosition && g(o.x, o.y, o.originalPosition.x, o.originalPosition.y) < 20 && (i = !0);
                        let a = -1;
                        if (i) {
                            a = 20;
                            for (let e = 0; e < 3; e++)
                                if (1 != j[e + 20].full) {
                                    a = 20 + e;
                                    break
                                }
                        } else
                            for (let e = 0; e < j.length; e++)
                                g(j[e].x, j[e].y, o.x, o.y) < 40 && (a = e);
                        let r = a;
                        if (-1 != a)
                            if (a >= 20 && n.introMode && !D.sprite.visible && (D.sprite.alpha = 0,
                            D.sprite.visible = !0,
                            D.sprite.targetAlpha = 1,
                            n.hideFridgeExit = !1),
                            0 == j[r].full)
                                o.x2 = j[r].x,
                                o.y2 = j[r].y,
                                j[o.box].full = !1,
                                j[o.box].food = -1,
                                t.fridge[o.box] = "",
                                o.box = r,
                                j[o.box].food = o.id,
                                t.fridge[o.box] = e,
                                j[o.box].full = !0;
                            else {
                                let i = H[j[r].food];
                                i.x2 = j[o.box].x,
                                i.y2 = j[o.box].y,
                                j[o.box].food = j[r].food,
                                i.box = o.box,
                                t.fridge[o.box] = i.item,
                                j[r].food = o.id,
                                o.x2 = j[r].x,
                                o.y2 = j[r].y,
                                o.box = r,
                                t.fridge[o.box] = e
                            }
                        o.x2 = j[o.box].x,
                        o.y2 = j[o.box].y,
                        o.interactive = !0
                    }
                    )),
                    o.anchor.set(.5, .5),
                    o.x = a.x,
                    o.y = a.y,
                    H.push(o),
                    o.id = Q,
                    Q++,
                    _.addChild(o),
                    o.interactive = !0,
                    I(o, new PIXI.Rectangle(-30,-30,60,60), !0)
                }
            }
            for (let e = 0; e < t.fridge.length; e++)
                V(t.fridge[e], e);
            function Y() {
                P && (c.ticker.remove(T),
                document.removeEventListener("pointermove", k),
                document.removeEventListener("pointerup", A)),
                n.lastFridgePage = l;
                for (let e in y)
                    null != y[e].destroy && y[e].destroy(),
                    delete y[e];
                S.destroy(),
                D.destroy(),
                i.destroy();
                for (let e = 0; e < H.length; e++)
                    H[e].destroy();
                for (let e = 0; e < j.length; e++)
                    j[e].destroy();
                for (let e = 0; e < v.length; e++)
                    v[e].destroy();
                p.destroyCounter(),
                z.destroy(),
                R.destroy(),
                F.destroy(),
                c.ticker.remove(U),
                B = !0
            }
            v.push(C),
            v.push(b)
        },
        gameList: function(e) {
            let r = {}
              , s = function(e) {
                r[e.key] = !0
            }
              , l = function(e) {
                r[e.key] = !1
            };
            document.addEventListener("keydown", s),
            document.addEventListener("keyup", l),
            n.inGame = !1,
            n.music && te.brittlerille.play();
            let d = new PIXI.Sprite($["Sprites/Rooms"][9]);
            c.stage.addChild(d),
            d.interactive = !0,
            d.x = c.screen.width / 2,
            d.y = c.screen.height / 2,
            d.anchor.set(.5, .5),
            d.scale.x = 1,
            d.scale.y = 1;
            let u = Fe.coinCounter();
            c.stage.addChild(u),
            u.x = 20,
            u.y = 20;
            let p = Fe.exitButton((function() {
                W(),
                m = !0,
                Fe.flash(!1, y)
            }
            ), c.screen.width - 40, 40, .4, 0);
            c.stage.addChild(p.sprite);
            let m = !1;
            function y() {
                window.removeEventListener("resize", T),
                p.destroy(),
                d.destroy();
                for (let e = 0; e < f.length; e++)
                    f[e].destroy();
                if (u.destroyCounter(),
                c.ticker.remove(M),
                document.removeEventListener("keydown", s),
                document.removeEventListener("keyup", l),
                m) {
                    let e = -1;
                    n.temporaryInGameTime > 600 ? e = ["That was tiring. But I had fun!", "How long until the next minigame?"] : n.temporaryInGameTime > 120 && Math.random() > .8 ? e = ["I saw something weird!", "I had so much fun!", "Finally.. home!", "I missed my notebook!", "The grass is so squishy!"] : n.temporaryInGameTime > 10 && Math.random() > .95 ? e = [""] : n.temporaryInGameTime > 2 && Math.random() > .98 && (e = ["Couldn't we play for more?", "That's it?", "Go back!! I saw something in that minigame", "Only if we played for " + (2763 - n.temporaryInGameTime) + " seconds more.."]),
                    n.temporaryInGameTime = 0
                }
            }
            let g, f = [], x = {
                gtttatint: {
                    name: o.games.gtttatint,
                    texture: 0,
                    run: Fe.gtttatint,
                    runDebug: function() {
                        let e = prompt("ENTER SEED: ");
                        Fe.gtttatint(e, !0)
                    },
                    resource: {
                        audio: [["Radio Martini", "radiomartini"]]
                    }
                },
                tennis: {
                    name: o.games.tennis,
                    texture: 2,
                    run: Fe.tennis,
                    resource: {
                        audio: [["Shiny Tech", "shinytech"]]
                    }
                },
                match: {
                    name: o.games.match,
                    texture: 3,
                    run: Fe.faceMatch,
                    resource: {
                        audio: [["15countdown", "countdown"], ["faceMatchScores", "faceMatchScores"]]
                    }
                },
                cakewalk: {
                    name: o.games.cakewalk,
                    texture: 5,
                    run: Fe.cakewalk,
                    resource: {
                        audio: [["Pamgaea", "Pamgaea"]]
                    }
                },
                oddDroplets: {
                    name: "Odd Droplets",
                    texture: 7,
                    run: Fe.oddDroplets,
                    resource: {
                        audio: [["papshru", "howitbegins"]]
                    }
                }
            }, w = function() {
                let t = x[e].resource.audio;
                for (let e = 0; e < t.length; e++)
                    te.music.removeSound(te[t[e][1]]),
                    delete te[t[e][1]],
                    console.log("removing audio file " + t[e][1] + "from memory")
            };
            null != e && (g = setTimeout(w, 5e3));
            let v = 0
              , I = -1
              , S = new PIXI.Container
              , C = 2;
            c.screen.width > 576 && (C = 3);
            for (let s in x) {
                let l = new P((function() {
                    if (-1 == I)
                        if (i.sleeping)
                            Fe.message(o.message.sleeping, $["Sprites/GameUI"][5]);
                        else if (i.sleep < 20)
                            Fe.message(o.message.sleepy, $["Sprites/GameUI"][6]);
                        else if (0 == i.hunger && t.coins > 8 && "cakewalk" != s)
                            Fe.message(o.message.hungry, $["Sprites/GameUI"][4]);
                        else {
                            for (let e = 0; e < f.length; e++)
                                f[e].interactive = !1;
                            l.sprite.original = {
                                x: l.sprite.x,
                                y: l.sprite.y,
                                scale: l.sprite.scale.x
                            },
                            l.sprite.animate = !1,
                            I = l.sprite,
                            I.zIndex = 100,
                            clearTimeout(g),
                            Fe.flash(!1, (function() {
                                s != e && null != e && w(),
                                y(),
                                n.inGame = !0,
                                te.brittlerille.pause(),
                                r.Shift ? null != x[s].runDebug && Fe.loader(x[s].runDebug, x[s].resource.audio) : (null == x[s].resource && (x[s].resource = {
                                    audio: []
                                }),
                                Fe.loader(x[s].run, x[s].resource.audio))
                            }
                            ))
                        }
                }
                ),$["Sprites/GameThumbnails"][x[s].texture],{
                    width: 144,
                    height: 144
                });
                l.sprite.interactive = !0,
                l.sprite.x = v % C * 154 + 72 - (154 * C - 10) / 2,
                l.sprite.y = 200 + 154 * Math.floor(v / C),
                S.addChild(l.sprite);
                let d = a(x[s].name, 32, "center");
                l.sprite.addChild(d),
                d.y = 144 / l.sprite.scale.x / 2 - 25,
                f.push(d),
                f.push(l),
                v++
            }
            S.x = c.screen.width / 2,
            S.sortableChildren = !0,
            c.stage.addChild(S),
            f.push(S);
            let b = 0
              , M = function() {
                -1 != I && (I.x = I.original.x + eases.easeOutQuad(b, 0, -I.original.x, 20),
                I.y = I.original.y + eases.easeInQuad(b, 0, c.screen.height / 2 - I.original.y, 20),
                I.scale.x = I.original.scale + eases.easeInQuad(b, 0, 24, 60),
                I.scale.y = I.scale.x,
                b += Qe),
                u.updateCounter(h.linear(u.getCounterAmount(), t.coins, .05, Qe))
            };
            c.ticker.add(M);
            let T = function() {
                d.x = c.screen.width / 2,
                d.y = c.screen.height / 2,
                S.x = c.screen.width / 2,
                p.sprite.x = c.screen.width - 40
            };
            window.addEventListener("resize", T)
        },
        faceMatch: function() {
            let e = !1
              , t = new PIXI.Sprite($["Sprites/Rooms"][14]);
            c.stage.addChild(t),
            t.interactive = !0,
            t.x = c.screen.width / 2,
            t.y = c.screen.height / 2,
            t.scale.x = 1.5,
            t.scale.y = 1.5,
            t.anchor.set(.5, .5);
            let i = Te(ee.faceMinigame);
            c.stage.addChild(i),
            i.x = c.screen.width / 2,
            i.y = c.screen.height - 200;
            let r = Te(ee.faceMinigame);
            c.stage.addChild(r),
            r.x = c.screen.width / 2,
            r.y = 200;
            let s = {
                mouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                eye1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
            };
            s.eye2 = s.eye1;
            let l = {
                eye1: r.eye1,
                eye2: r.eye2,
                mouth: r.mouth
            }
              , d = -1;
            function u() {
                for (let e in l)
                    l[e].dragging = !1,
                    l[e].emit("pointerup")
            }
            let p = -Date.now()
              , m = 1;
            function f() {
                e = !1,
                i.gotoAndStop(Math.floor(140 * Math.random())),
                r.gotoAndStop(i.getCurFrame());
                let t = c.screen.height / 3 / i.body.texture.trim.height;
                t = Math.min(1, t),
                i.scale.x = t,
                i.scale.y = t,
                r.scale.x = t,
                r.scale.y = t;
                let n = [0, 1, 2];
                !function(e) {
                    for (let t = e.length - 1; t > 0; t--) {
                        let i = Math.floor(Math.random() * (t + 1))
                          , n = e[t];
                        e[t] = e[i],
                        e[i] = n
                    }
                }(n);
                let a = 0;
                for (let e in l) {
                    let i = l[e]
                      , o = 1;
                    "mouth" == e && (o = 2);
                    let h = Math.floor((i.textures.length - o) * Math.random());
                    "mouth" == e && h++,
                    i.gotoAndStop(h),
                    i.originalSize = {
                        x: i.scale.x,
                        y: i.scale.y
                    },
                    i.destinationSize = {
                        x: i.scale.x,
                        y: i.scale.y
                    },
                    i.interactive = !0;
                    let p = i.texture.trim
                      , m = new PIXI.Rectangle(p.x - 2,p.y - 2,p.width + 4,p.height + 4);
                    1 != i.canDrag && (I(i, m, !1, r.scale.x),
                    v(i, (function() {
                        function t() {
                            u(),
                            n.end();
                            for (let e = 0; e < o.length; e++)
                                delete x[o[e].id],
                                o[e].item.destroy(),
                                o[e].destroy();
                            d = -1,
                            D = 5
                        }
                        d = t;
                        let n = Fe.blackTint(.2);
                        n.start();
                        let a = 4;
                        c.screen.width > 400 && (a = 5);
                        let o = [];
                        for (let n = 0; n < s[e].length; n++) {
                            let r = new PIXI.Sprite($["Sprites/GameUI"][31]);
                            o.push(r),
                            r.interactive = !0,
                            r.hitArea = new PIXI.Rectangle(-32,-32,64,64),
                            r.x = 32 + n % a * 79 - 79 * a / 2 + c.screen.width / 2 + 7.5,
                            r.y = 79 * Math.floor(n / a),
                            r.y += c.screen.height / 2 - 79 * Math.floor((s[e].length - 1) / a) / 2,
                            r.anchor.set(.5, .5),
                            c.stage.addChild(r);
                            let l = new PIXI.Sprite(i.textures[s[e][n]])
                              , d = l.texture.trim;
                            l.x = -d.x - d.width / 2,
                            l.y = -d.y - d.height / 2,
                            r.addChild(l),
                            r.item = l,
                            r.id = w,
                            x[T()] = r,
                            v(r, (function() {
                                i.gotoAndStop(s[e][n]);
                                let a = i.texture.trim
                                  , o = new PIXI.Rectangle(a.x - 2,a.y - 2,a.width + 4,a.height + 4);
                                i.originalHitArea = o,
                                i.hitArea = o,
                                t()
                            }
                            ))
                        }
                    }
                    ), !1),
                    i.id = w,
                    x[T()] = i),
                    i.originalHitArea = m,
                    i.dragScale = t,
                    i.hitArea = m,
                    i.x = 100 * (n[a] - 1),
                    i.y = -120,
                    i.on("pointerdown", (function() {
                        for (let e in l)
                            l[e].interactive = !1;
                        i.interactive = !0
                    }
                    )),
                    i.on("pointerup", (function() {
                        for (let e in l)
                            l[e].interactive = !0
                    }
                    )),
                    a++
                }
            }
            f();
            let S = 1e3 * Math.random()
              , C = 1
              , b = function() {
                (p + Date.now()) / 1e3 * C > m && (m++,
                A()),
                U.alpha -= .02,
                U.scale.x = h.linear(U.scale.x, 1.5, .05, Qe),
                U.scale.y = U.scale.x,
                S += Qe,
                t.scale.x = h.linear(t.scale.x, 1.5, .05, Qe),
                t.scale.y = t.scale.x,
                t.rotation = Math.cos(S / 100) / 10,
                t.x = c.screen.width / 2 + 20 * Math.cos(S / 90),
                t.y = c.screen.width / 2 + 20 * Math.cos(S / 110)
            }
              , M = 15
              , k = 0;
            n.minigameMusic && (te.countdown.attack = 1,
            te.countdown.release = 1,
            te.countdown.play(0, 0));
            let A = function() {
                -1 != M && (t.scale.x = 1.52,
                t.scale.y = 1.52,
                1 == M && te.countdown.pause(),
                0 == M ? (M = -1,
                G(),
                U.text = 15) : (M--,
                U.text = M,
                U.scale.x = 1,
                U.scale.y = 1,
                U.alpha = 1))
            }
              , E = function() {
                let e = 100
                  , t = !1
                  , n = g(i.eye1.x, i.eye1.y, r.eye1.x, r.eye1.y)
                  , a = g(i.eye2.x, i.eye2.y, r.eye1.x, r.eye1.y)
                  , o = g(i.eye1.x, i.eye1.y, r.eye2.x, r.eye2.y)
                  , s = g(i.eye2.x, i.eye2.y, r.eye2.x, r.eye2.y);
                n > a && n > a && (t = !0),
                0 != r.eye1.alpha && 0 != r.eye2.alpha || (t = !1),
                t ? (i.eye1.currentFrame != r.eye2.currentFrame && (e -= 10),
                i.eye2.currentFrame != r.eye1.currentFrame && (e -= 10),
                e -= a / 3,
                e -= o / 3) : (0 != r.eye1.alpha && (i.eye1.currentFrame != r.eye1.currentFrame && (e -= 10),
                e -= n / 3),
                0 != r.eye2.alpha && (i.eye2.currentFrame != r.eye2.currentFrame && (e -= 10),
                e -= s / 3));
                for (let t in l)
                    t.includes("eye") || 0 != r.mouth.alpha && (i[t].currentFrame != r[t].currentFrame && (e -= 10),
                    e -= g(i[t].x, i[t].y, r[t].x, r[t].y) / 3);
                return e
            };
            function L() {
                -1 != d && d(),
                t.destroy(),
                c.ticker.remove(b);
                for (let e in l)
                    delete x[l[e].id];
                if (i.destroyAnimation(),
                r.destroyAnimation(),
                R.destroyAnimation(),
                U.destroy(),
                z.destroyPause(),
                W.destroy(),
                Fe.gameList("match"),
                0 == X.length)
                    return;
                let e = 0;
                for (let t = 0; t < X.length; t++)
                    e += X[t];
                e /= X.length,
                Fe.results(Math.round(e) + "%", Math.floor(N), void 0, o.ui.average),
                window.onblur = function() {}
            }
            let X = []
              , N = 0
              , D = 0;
            function G() {
                e = !0,
                D++,
                F = !0,
                u(),
                -1 != d && d();
                let t = E()
                  , i = Math.max(0, Math.round(t));
                X.push(i),
                N += ((10 + i) / (51 - i / 2) + i / 4) / 2;
                let a = function() {
                    if (2 == D)
                        return D++,
                        void setTimeout((function() {
                            Fe.message("Click/Tap on an eye or mouth to switch it to another!", $["Sprites/Mouth"][10], (function() {
                                a()
                            }
                            ))
                        }
                        ), 500);
                    te.countdown.attack = 1,
                    k++,
                    k > 3 && (C += .05,
                    k = 0),
                    n.minigameMusic && (te.countdown.play(0, 16 * k),
                    te.countdown.sourceNode.playbackRate.value = C),
                    M = 15,
                    p = -Date.now(),
                    m = 1,
                    Fe.blurPan(c.stage, (function() {
                        f(),
                        F = !1,
                        R.gotoPart("Idle")
                    }
                    ))
                };
                Fe.message(o.ui.accuracy + ": " + i + "%", $["Sprites/GameUI"][26], a, (function() {
                    Fe.blurPan(c.stage, (function() {
                        L()
                    }
                    ))
                }
                ), [o.ui.next, o.ui.leave]),
                100 == Math.round(t) ? (Fe.achievementQueue("perfectfacematch"),
                te.faceMatchScores.play(0, 0),
                te.faceMatchScores.stop(),
                te.yeah.play(),
                R.gotoPart("percent100")) : t > 90 ? (te.faceMatchScores.play(0, 8),
                R.gotoPart("percent90")) : t > 75 ? (te.faceMatchScores.play(0, 4),
                R.gotoPart("percent75")) : t > 50 ? (te.faceMatchScores.play(0, 0),
                R.gotoPart("percent50")) : t > 10 ? R.gotoPart("percent10") : R.gotoPart("Laugh"),
                t > 50 && (te.faceMatchScores.sourceNode.playbackRate.value = C,
                te.faceMatchScores.attack = 0,
                te.faceMatchScores.release = 1 / C),
                setTimeout((function() {
                    te.faceMatchScores.stop()
                }
                ), 2e3 / C)
            }
            c.ticker.add(b);
            let U = a(M, 32, "center", void 0, 2);
            c.stage.addChild(U),
            U.x = c.screen.width / 2,
            U.y = c.screen.height / 2;
            let R = Te(ee.tearDropWatch, y.tearDropWatch);
            R.play(),
            R.gotoPart("Idle"),
            R.y = c.screen.height,
            R.x = c.screen.width / 2 + 120,
            c.stage.addChild(R),
            n.minigameCostumes && (null != B[n.costume].applyMinigame ? B[n.costume].applyMinigame(R, 1) : B[n.costume].apply(R, 1));
            let O = 0
              , F = !1;
            function _() {
                F = !F,
                z.changePause(F),
                F ? (O = -Date.now(),
                n.inGame = !1,
                te.countdown.pause(),
                c.ticker.remove(b),
                R.stop(),
                Fe.message(o.ui.gamePaused, $["Sprites/GameUI"][32], (function() {
                    _()
                }
                ), (function() {
                    Fe.blurPan(c.stage, (function() {
                        L()
                    }
                    ))
                }
                ), [o.ui.play, o.ui.home], !1)) : (O += Date.now(),
                p -= O,
                n.inGame = !0,
                R.play(),
                n.minigameMusic && te.countdown.play(),
                c.ticker.add(b))
            }
            window.onblur = function() {
                F || _()
            }
            ;
            let z = Fe.pauseButton((function() {
                _()
            }
            ), .4);
            c.stage.addChild(z),
            z.x = c.screen.width - 40,
            z.y = 40;
            let W = new P((function() {
                e || (e = !0,
                M = -1,
                te.countdown.stop(),
                G(),
                U.text = 15)
            }
            ),$["Sprites/GameUI"][42],{
                scale: {
                    x: .4,
                    y: .4
                }
            });
            W.sprite.x = c.screen.width - 90,
            W.sprite.y = 40,
            c.stage.addChild(W.sprite)
        },
        tennis: function() {
            n.minigameMusic ? te.shinytech.volume = 1 : te.shinytech.volume = 0,
            te.shinytech.play();
            let e = new PIXI.Container;
            e.x = c.screen.width / 2,
            e.y = c.screen.height / 2,
            e.pivot.x = c.screen.width / 2,
            e.pivot.y = c.screen.height / 2;
            let t = new PIXI.Sprite($["Sprites/Rooms"][12]);
            e.addChild(t),
            t.interactive = !0,
            t.x = c.screen.width / 2,
            t.y = c.screen.height / 2,
            t.scale.x = 1,
            t.scale.y = 1,
            t.anchor.set(.5, .5);
            let i = Te(ee.tearDropTennis, y.tearDropTennis)
              , r = {
                a: {
                    d: i.e,
                    e: i.d,
                    f: i.c,
                    g: i.g,
                    h: i.f,
                    i: i.h,
                    j: i.j,
                    k: i.i
                },
                c: i.a,
                b: i.b
            };
            n.minigameCostumes && ("uglysweater" == n.costume ? B.uglysweater2.apply(r) : null != B[n.costume].applyMinigame ? B[n.costume].applyMinigame(r) : B[n.costume].apply(r),
            "_td_costume1" == n.costume && (i.sortableChildren = !0,
            i.i.zIndex = 10,
            i.j.zIndex = 10)),
            i.play(),
            i.gotoPart("hit"),
            e.addChild(i),
            i.x = c.screen.width / 2,
            i.y = c.screen.height / 2;
            let s = 0
              , l = c.screen.width / 2 + 30
              , d = c.screen.height / 2 - 180;
            c.stage.addChild(e);
            let u = a("0", 16, "center");
            u.x = c.screen.width / 2,
            u.y = 20,
            c.stage.addChild(u);
            let p = {}
              , m = 0
              , g = function() {
                let t = new PIXI.AnimatedSprite($["Sprites/tennisBall"]);
                t.x = c.screen.width / 2 + 30,
                t.y = c.screen.height / 2 - 180,
                t.anchor.set(.5, .5),
                t.play(),
                e.addChild(t),
                t.towards = 1,
                t.animationTimer = 0,
                t.interactive = !0,
                t.mouseTransform = {
                    x: 0
                },
                t.timerCache = 0,
                t.on("pointerdown", (function() {
                    t.animationTimer > 140 && 1 == t.towards && (t.towards *= -1,
                    t.vy = -10,
                    t.mouseTransform = {
                        x: t.x
                    },
                    t.randomX = c.screen.width * (Math.random() - .5),
                    t.timerCache = t.animationTimer,
                    t.animationSpeed = 2)
                }
                )),
                t.rotation = 0,
                t.randomX = 0,
                t.r = 0,
                t.id = m,
                p[m++] = t
            };
            g();
            let f = 1
              , x = a(o.score.perfect, 32, "center", "middle");
            x.anchor.set(.5, .5),
            x.x = c.screen.width / 2,
            x.y = c.screen.height / 2 + 200,
            c.stage.addChild(x);
            let w = Date.now();
            e.sortableChildren = !0;
            let v = function() {
                let t = (Date.now() - w) / (6e4 / 138) / 4;
                t > I && (I += 4,
                g()),
                t > 4 && (e.scale.x = eases.easeOutQuad((t + .25) % .5, 1.02, -.02, .5),
                e.scale.y = e.scale.x),
                x.alpha > 0 && (x.scale.x += .02 * Qe,
                x.scale.y = x.scale.x,
                x.alpha -= .04 * Qe,
                x.rotation += x.rotationAmount);
                for (let e in p) {
                    let n = p[e];
                    if (n.animationTimer < 0) {
                        x.rotation = 0,
                        x.rotationAmount = (Math.random() - .5) / 100,
                        x.scale.x = 1,
                        x.scale.y = 1,
                        x.text = o.score.bad;
                        let e = 5
                          , i = t % .5;
                        (i < .2 || i > .4) && (x.text = o.score.meh,
                        e = 20),
                        (i < .125 || i > .375) && (x.text = o.score.nice,
                        e = 50),
                        (i < .05 || i > .45) && (x.text = o.score.perfect,
                        e = 100),
                        s += e,
                        u.text = s
                    }
                    n.animationTimer <= 0 && (i.gotoPart("hit"),
                    n.towards = 1,
                    n.randomX = c.screen.width / 2 * (Math.random() - .5),
                    x.alpha = 1),
                    n.animationTimer < 50 && 1 != n.towards && i.gotoPart("prepare"),
                    n.animationTimer += 4 * n.towards * f * Qe,
                    n.scale.x = 1 + window.eases.easeOutQuad(n.animationTimer, 0, 2, 300),
                    n.scale.y = n.scale.x,
                    n.y = d - window.eases.easeOutQuad(n.animationTimer, 0, 100, 100),
                    n.rotation = n.r / 60,
                    n.zIndex = n.scale.x,
                    1 == n.towards ? n.x = l + window.eases.easeOutQuad(n.animationTimer, 0, n.randomX, 100) : n.x = n.mouseTransform.x + window.eases.easeInOutQuad(Math.min(n.timerCache, n.timerCache - n.animationTimer), 0, l - n.mouseTransform.x, n.timerCache),
                    n.animationSpeed = h.linear(n.animationSpeed, .5, .01, Qe),
                    n.r += n.animationSpeed,
                    n.y > c.screen.height + 300 && (s -= 10,
                    u.text = s,
                    p[e].destroy(),
                    delete p[e])
                }
                f += 5e-5 * Qe,
                0 == Object.keys(p).length && C()
            }
              , I = 4;
            te.shinytech.release = 1,
            c.ticker.add(v);
            let S = !1;
            function C(n=!1) {
                S || (S = !0,
                te.shinytech.stop(),
                c.ticker.remove(v),
                T.destroyPause(),
                x.destroy(),
                Fe.fade((function() {
                    for (let e in p)
                        p[e].destroy(),
                        delete p[e];
                    i.destroyAnimation(),
                    e.destroy(),
                    t.destroy(),
                    u.destroy(),
                    n ? (Oe(s, Math.floor(s / 75), "tennis2"),
                    B.sportsdrop.owned = !0,
                    Fe.achievementQueue("winagameoftennis"),
                    W()) : Oe(s, Math.max(0, Math.floor(s / 100)), "tennis"),
                    s >= 2763 && Fe.achievementQueue("get2763intennis")
                }
                )),
                window.onblur = function() {}
                )
            }
            te.shinytech.on("end", (function() {
                C(!0)
            }
            ));
            let b = 0;
            window.onblur = function() {
                M || P()
            }
            ;
            let M = !1;
            function P() {
                M = !M,
                T.changePause(M),
                M ? (b = -Date.now(),
                n.inGame = !1,
                te.shinytech.pause(),
                c.ticker.remove(v),
                i.stop(),
                Fe.message(o.ui.gamePaused, $["Sprites/GameUI"][32], (function() {
                    P()
                }
                ), (function() {
                    C()
                }
                ), [o.ui.play, o.ui.home], !1)) : (b += Date.now(),
                w += b,
                n.inGame = !0,
                i.play(),
                te.shinytech.play(),
                c.ticker.add(v))
            }
            let T = Fe.pauseButton((function() {
                P()
            }
            ), .4);
            c.stage.addChild(T),
            T.x = c.screen.width - 40,
            T.y = 40
        },
        gtttatint: function(e="", t=!1) {
            let i = function() {
                n.minigameMusic && te.radiomartini.play()
            };
            te.radiomartini.stopWithStyle = function() {
                if (!n.minigameMusic)
                    return;
                let e = function() {
                    null != te.radiomartini ? (te.radiomartini.volume -= 1 / 60 * Qe,
                    te.radiomartini.sourceNode.playbackRate.value -= 1 / 120 * Qe,
                    te.radiomartini.volume <= .01 && (te.radiomartini.stop(),
                    c.ticker.remove(e))) : c.ticker.remove(e)
                };
                c.ticker.add(e),
                te.radiomartini.off("end", i)
            }
            ,
            n.minigameMusic && (te.radiomartini.play(),
            te.radiomartini.sourceNode.playbackRate.value = 1,
            te.radiomartini.volume = 1),
            te.radiomartini.on("end", i);
            let r = new PIXI.Sprite($["Sprites/Rooms"][10]);
            r.interactive = !0,
            r.x = c.screen.width / 2,
            r.anchor.set(.5, 0);
            let s = new PIXI.Sprite($["Backgrounds/Starfield"][0]);
            c.stage.addChild(r),
            c.stage.addChild(s),
            s.anchor.set(.5, .5),
            s.x = c.screen.width / 2 - 50,
            s.y = c.screen.height / 2 - 100,
            s.alpha = 0,
            s.scale.x = 1.25,
            s.scale.y = 1.25;
            let l = new PIXI.Container
              , d = {}
              , u = 0;
            c.stage.addChild(l),
            r.x = c.screen.width / 2 - 180,
            r.height = 20 * c.screen.height;
            let p = {
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                box: new PIXI.Graphics,
                width: 30,
                height: 30,
                acceleration: 0
            }
              , m = [];
            m.push(r),
            m.push(s),
            m.push(p.box);
            let y = new PIXI.Container;
            c.stage.addChild(y),
            m.push(y);
            let g = {}
              , x = h.linear(c.screen.width - 60, 300, .75)
              , w = 0
              , v = x / 2 - 60
              , I = 0;
            function S(e, t, i, n) {
                let a = function() {
                    let a = 5 * t;
                    return a = 9 * (a << 7 | a >>> 25),
                    n ^= t,
                    t ^= i ^= e,
                    e ^= n,
                    n = n << 11 | n >>> 21,
                    (a >>> 0) / 2 ** 32
                };
                for (let e = 0; e < 100; e++)
                    a();
                return a
            }
            let C = function(e) {
                let t = [];
                for (let i = 0; i < 4; i++) {
                    let n = 2 ** 32;
                    for (let t = 0; t < 4; t++)
                        n -= (e.charCodeAt(t + 4 * i) + 30 * i) ** 4;
                    t.push(n)
                }
                return t
            };
            if ("" == e) {
                let t = function() {
                    return Math.floor(1e6 + 9999999 * Math.random()).toString(36)
                };
                e = t() + t() + t() + t()
            }
            if (e.length < 16) {
                let t = "";
                for (let i = 0; i < 16; i++)
                    t += e,
                    e.length / 2 == Math.floor(e.length / 2) && (t += "}");
                e = t
            }
            let b = C(e)
              , M = S(b[0], b[1], b[2], b[3]);
            for (let e = 0; e < 30; e++) {
                let t = new PIXI.Sprite($["Sprites/Clouds"][Math.floor(3 * M())]);
                l.addChild(t),
                t.anchor.set(.5, .5),
                t.y = c.screen.height / 2 + (M() - .5) * c.screen.height - 1200 * M(),
                t.orig = {
                    y: t.y
                },
                t.scale.x = .2 + e / 150,
                t.scale.y = .2 + e / 150,
                t.x = c.screen.width / 2 + (M() - .5) * x * h.linear(t.scale.x, 1, .5),
                M() > .5 && (t.scale.x *= -1);
                let i = t.texture.trim;
                null == i && (i = t.texture._frame),
                t.pivot.y = -i.height,
                d[u++] = t
            }
            let T = 0
              , k = 0;
            function A(t=!1, i=-1) {
                50 * Math.floor(I / 50) == I && 0 != I && (e = function(e) {
                    let t = "";
                    for (let i = 0; i < e.length; i++)
                        t += 0 == i ? e[e.length - 1] : e[i - 1];
                    return t
                }(e),
                b = C(e),
                M = S(b[0], b[1], b[2], b[3]));
                let n = 120;
                n *= (Math.cos(I / 10) / 2 + .5 + 1) / 2;
                let a = (M() - .5) * w;
                I > 200 && M() > .998 && (k = 10 + Math.floor(40 * M())),
                k > 0 && (a = 60 * Math.round(a / 60),
                T = T > 1 ? 1 : 0),
                T > 0 && (a /= 10,
                n = 70);
                let o = v + a;
                (o < 0 || o > x - n) && (o = v - a),
                o < 0 && (o = 0),
                100 * Math.floor(I / 100) == I && (t = !0),
                t && (n = x,
                o = 0),
                o > x - n && (o = x - n),
                t && T > 1 && (T = 1),
                k > 0 && (n = 60);
                let r = {
                    x: o,
                    y: -60 * I,
                    width: n,
                    height: 40,
                    id: I,
                    transparent: !1,
                    ladder: T > 1
                };
                t || (v = r.x),
                w < x && (w += 12);
                let s = M() < .01 || 1 == T;
                1 == T && (r.y += 30),
                r.boost = s;
                let l = s ? $.inputNineSlice[7] : $.inputNineSlice[6];
                T > 1 && (l = $.inputNineSlice[8]);
                let d = new PIXI.NineSlicePlane(l,15,15,15,15);
                d.width = r.width,
                d.height = 0 == I ? c.screen.height : r.height / 4,
                k > 0 && (d.height = 60),
                T > 1 && (d.height *= 4),
                d.pivot.x = r.width / 2,
                d.pivot.y = d.height / 2,
                d.x = r.x + d.pivot.x,
                d.y = r.y + d.pivot.y,
                d.vy = 0,
                d.vx = 0,
                (M() < .01 + I / 1e3 && !t || r.ladder && !t) && (d.rotation = M() > .5 ? .1 : -.1,
                r.broken = !0),
                y.addChild(d),
                r.sprite = d,
                d.zIndex = 0,
                g[I] = r,
                I++,
                T--,
                k--,
                M() < .005 && (T = 20 + Math.floor(M() * M() * 50))
            }
            A(),
            p.x = g[0].x + g[0].width / 2 - p.width / 2,
            p.y = g[0].y - p.height,
            p.zIndex = 1e4;
            let E = {}
              , L = function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"),
                "ArrowRight" == e.key && (t = "d"),
                "ArrowUp" == e.key && (t = " "),
                "w" == e.key && (t = " "),
                E[t] = !0,
                ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
            }
              , X = function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"),
                "ArrowRight" == e.key && (t = "d"),
                "ArrowUp" == e.key && (t = " "),
                "w" == e.key && (t = " "),
                E[t] = !1
            }
              , N = 0
              , D = 10;
            for (let e = 0; e < 10; e++)
                A();
            let G = Te(ee.GTTTATINT);
            if (n.minigameCostumes) {
                let e = {
                    a: {
                        d: G.a_.c,
                        e: G.a_.e,
                        f: G.a_.d,
                        g: G.a_.e,
                        h: G.a_.d,
                        i: G.a_.f,
                        j: G.d,
                        k: G.c
                    },
                    c: G.b.b,
                    b: G.b.a
                };
                null != B[n.costume].applyMinigame ? B[n.costume].applyMinigame(e) : B[n.costume].apply(e)
            }
            let U = !1
              , R = function() {
                U = !0
            }
              , O = function() {
                U = !1
            };
            document.addEventListener("keydown", L),
            document.addEventListener("keyup", X),
            document.addEventListener("pointerdown", R),
            document.addEventListener("pointerup", O),
            G.onNextFrame = function(e) {
                e.a_.gotoAndStop(Math.min(59, Math.max(0, Math.round(30 - 30 * p.acceleration)))),
                e.b.scale.x = p.acceleration < 0 ? -1 : 1,
                e.c.rotation += -1.5 + Math.abs(2 * p.acceleration) + Math.abs(p.vy / 4),
                0 == p.vy && e.a_.c.gotoAndStop(1),
                E.a || E.d || (e.b.gotoAndStop(20),
                e.b.a.rotation = -Math.abs(p.vy / 4),
                e.b.b.rotation = -Math.abs(p.vy / 4)),
                e.d.rotation = -e.c.rotation
            }
            ,
            G.play(),
            G.loop = !0,
            G.scale.x = .4,
            G.scale.y = .4;
            let F = new PIXI.NineSlicePlane($.inputNineSlice[5],15,15,15,15);
            F.width = (c.screen.width - x) / 2,
            F.height = c.screen.height,
            F.x = 0,
            F.y = 0,
            c.stage.addChild(F);
            let _ = new PIXI.NineSlicePlane($.inputNineSlice[5],15,15,15,15);
            function z(e, t, i, a) {
                let o = 1;
                if (null != n.controllerProfile.GTTTATINT) {
                    let i = n.controllerProfile.GTTTATINT;
                    console.log(i),
                    e = i.buttons[a].x + c.screen.width * i.buttons[a].lock,
                    t = i.buttons[a].y + c.screen.height,
                    o = i.buttonScale + .5
                }
                let r = new P((function() {}
                ),$["Sprites/GameUI"][i],{
                    x: e,
                    y: t,
                    scale: {
                        x: o,
                        y: o
                    }
                });
                r.sprite.on("pointerdown", (function() {
                    E[a] = !0
                }
                )),
                r.sprite.on("pointermove", (function() {
                    U && r.sprite.emit("pointerdown")
                }
                )),
                r.sprite.on("pointerout", (function() {
                    r.sprite.emit("pointerup")
                }
                )),
                r.sprite.on("pointerup", (function() {
                    E[a] = !1
                }
                )),
                c.stage.addChild(r.sprite),
                m.push(r)
            }
            _.width = (c.screen.width - x) / 2,
            _.height = c.screen.height,
            _.x = c.screen.width - _.width,
            _.y = 0,
            c.stage.addChild(_),
            c.touchScreen && (z(c.screen.width - 150, c.screen.height - 50, 21, "a"),
            z(c.screen.width - 50, c.screen.height - 50, 22, "d"),
            z(100, c.screen.height - 50, 23, " ")),
            y.y = 300;
            let W = Date.now()
              , j = -1
              , H = function() {
                -1 != j && (Date.now() - W) / 1e3 > j && j++,
                n.minigameMusic && (te.radiomartini.sourceNode.playbackRate.value = h.linear(te.radiomartini.sourceNode.playbackRate.value, 1 - p.vy / 400 + N / 80, .01, Qe)),
                r.y = -r.height + c.screen.height,
                r.y += y.y,
                s.alpha = (y.y - 8e3) / 1e3,
                r.y > 0 && (r.y = 0),
                r.y < -r.height + c.screen.height && (r.y = -r.height + c.screen.height),
                I - 640 / 60 < -p.y / 60 && A();
                for (let e in g)
                    parseInt(e) < Math.floor((y.y - c.screen.height) / 60) && (Y.add(Math.max(1, N)),
                    g[e].sprite.destroy(),
                    delete g[e]);
                p.isOnGround = !1,
                G.x = p.x + p.width / 2,
                G.y = p.y + p.height,
                E.d && (p.acceleration += .075 * Qe),
                E.a && (p.acceleration -= .075 * Qe),
                p.vy += .4 * Qe,
                p.acceleration = h.linear(p.acceleration, 0, 1 - .95, Qe),
                p.vx += p.acceleration * Qe,
                p.vx = h.linear(p.vx, 0, 1 - .8, Qe),
                p.y += p.vy * Qe,
                p.x += p.vx * Qe;
                let e = Math.abs(p.vx / 40)
                  , t = Math.abs(p.vy / 40);
                G.scale.x = .4 * (1 + e - t),
                G.scale.y = .4 * (1 + t - e),
                (p.x < 0 || p.x > x - p.width) && (p.vx /= -1,
                p.acceleration /= -1),
                p.x < 0 && (p.x = 0),
                p.x > x - p.width && (p.x = x - p.width);
                for (let e in g) {
                    let t = g[e];
                    if (t.transparent && (t.sprite.rotation += (t.rotateTo < 0 ? -.1 : .1) * Qe,
                    t.sprite.x += t.sprite.vx * Qe,
                    t.sprite.y += t.sprite.vy * Qe,
                    t.sprite.vy += .2 * Qe,
                    t.sprite.vx = h.linear(t.sprite.vx, 0, .05)),
                    f(p, t) && !t.transparent && (t.ladder || p.vy > 0 && p.y < t.y - p.height + (4 + p.vy) * Qe)) {
                        if (t.broken && (t.sprite.vy = p.vy / 2,
                        t.transparent = !0,
                        t.rotateTo = p.x + p.width / 2 - t.sprite.x,
                        t.sprite.vx = 10 * (Math.random() - .5)),
                        t.ladder || (p.y = t.y - p.height,
                        p.isOnGround = !0),
                        p.vy = 0,
                        p.max < t.id && !t.ladder) {
                            let e = t.id - p.max;
                            Y.add(10 * (e - 1)),
                            D--,
                            0 == D && (N++,
                            2 == N && (W = Date.now(),
                            j = 0),
                            K.text = o.ui.mph + ": " + N,
                            D = 10)
                        }
                        p.max = t.id;
                        let e = 7;
                        N >= 7 && (e *= 2),
                        N >= 10 && (e *= 1.5),
                        N >= 16 && (e *= 1.5),
                        N >= 20 && (e *= 2),
                        t.boost && (e *= 2),
                        (E[" "] || t.boost || t.ladder) && (t.ladder ? (p.y -= 2 * Qe,
                        p.vy -= 10) : p.vy -= e + Math.abs(1.5 * p.vx))
                    }
                }
                y.x = c.screen.width / 2 - x / 2,
                p.y < c.screen.height / 2 - y.y - 200 && (y.y = h.linear(y.y, c.screen.height / 2 - p.y - 200, .1, Qe)),
                -y.y + c.screen.height < p.y && !Q && (Q = !0,
                te.radiomartini.stopWithStyle(),
                Fe.blurPan(c.stage, (function() {
                    J()
                }
                ))),
                y.y += N / 2 * Qe;
                for (let e in d)
                    d[e].y = d[e].orig.y + y.y * d[e].scale.y / 2,
                    d[e].y > c.screen.height && (d[e].destroy(),
                    delete d[e])
            }
              , Q = !1;
            c.ticker.add(H);
            let V = 0
              , Y = a(V, 32);
            Y.add = function(e) {
                V += e,
                t ? (Y.text = "Set seed",
                Y.alpha = .2) : Y.text = V
            }
            ,
            Y.add(0),
            Y.anchor.set(1, 0),
            Y.x = c.screen.width - 20 - 50,
            Y.y = 20,
            c.stage.addChild(Y);
            let K = a(o.ui.mph + ": 0", 32);
            K.anchor.set(0, 0),
            K.x = 20,
            K.y = 20,
            c.stage.addChild(K),
            m.push(K),
            m.push(Y),
            m.push(_),
            m.push(F),
            y.addChild(G),
            y.sortableChildren = !0,
            G.zIndex = 1e3,
            m.push(G);
            let J = function() {
                for (let e in g)
                    g[e].sprite.destroy();
                for (let e in d)
                    d[e].destroy(),
                    delete d[e];
                for (let e = 0; e < m.length; e++)
                    m[e].destroy();
                document.removeEventListener("keydown", L),
                document.removeEventListener("keyup", X),
                document.removeEventListener("pointerdown", R),
                document.removeEventListener("pointerup", O),
                c.ticker.remove(H),
                ne.destroyPause(),
                t || (N >= 5 ? Oe(V, Math.floor(V / 50)) : (Fe.gameList("gtttatint"),
                Fe.results(V, Math.floor(V / 50)))),
                j >= 120 && (Fe.achievementQueue("5minuteGTTTATINT"),
                B.jockdrop.owned = !0),
                V >= 2763 && Fe.achievementQueue("get2763gtttatint"),
                V >= 15e3 && Fe.achievementQueue("get15000gtttatint"),
                window.onblur = function() {}
            };
            window.onblur = function() {
                q || ie()
            }
            ;
            let q = !1
              , Z = 0;
            function ie() {
                q = !q,
                ne.changePause(q),
                q ? (n.inGame = !1,
                te.radiomartini.pause(),
                c.ticker.remove(H),
                G.stop(),
                Z = -Date.now(),
                Fe.message(o.ui.gamePaused, $["Sprites/GameUI"][32], (function() {
                    ie()
                }
                ), (function() {
                    Fe.blurPan(c.stage, (function() {
                        te.radiomartini.stop(),
                        J()
                    }
                    ))
                }
                ), [o.ui.play, o.ui.home], !1)) : (Z += Date.now(),
                W += Z,
                n.inGame = !0,
                G.play(),
                n.minigameMusic && te.radiomartini.play(),
                c.ticker.add(H))
            }
            let ne = Fe.pauseButton((function() {
                ie()
            }
            ), .4);
            c.stage.addChild(ne),
            ne.x = c.screen.width - 40,
            ne.y = 40
        },
        cakewalk: function(e="", t=!1) {
            let r = function() {
                n.minigameMusic && (te.Pamgaea.play(),
                te.Pamgaea.sourceNode.playbackRate.value = 1.15)
            };
            n.minigameMusic && (te.Pamgaea.play(),
            te.Pamgaea.sourceNode.playbackRate.value = 1.15,
            te.Pamgaea.on("end", r));
            let s = new PIXI.Sprite($["Sprites/Rooms"][10]);
            s.interactive = !0,
            s.x = c.screen.width / 2,
            s.anchor.set(.5, 0);
            let l = new PIXI.Sprite($["Backgrounds/Starfield"][0]);
            c.stage.addChild(s),
            c.stage.addChild(l),
            l.anchor.set(.5, .5),
            l.x = c.screen.width / 2 - 50,
            l.y = c.screen.height / 2 - 100,
            l.alpha = 0,
            l.scale.x = 1.25,
            l.scale.y = 1.25;
            let d = new PIXI.Container
              , u = {}
              , p = 0;
            c.stage.addChild(d),
            s.x = c.screen.width / 2 - 180,
            s.height = 20 * c.screen.height;
            let m = {
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                box: new PIXI.Graphics,
                width: 30,
                height: 30,
                acceleration: 0
            }
              , y = [];
            y.push(s),
            y.push(l),
            y.push(m.box);
            let g = new PIXI.Container;
            c.stage.addChild(g),
            y.push(g);
            let f = 360;
            if ("" == e) {
                let t = function() {
                    return Math.floor(1e6 + 9999999 * Math.random()).toString(36)
                };
                e = t() + t() + t() + t()
            }
            if (e.length < 16) {
                let t = "";
                for (let i = 0; i < 16; i++)
                    t += e,
                    e.length / 2 == Math.floor(e.length / 2) && (t += "}");
                e = t
            }
            let x = function(e) {
                let t = [];
                for (let i = 0; i < 4; i++) {
                    let n = 2 ** 32;
                    for (let t = 0; t < 4; t++)
                        n -= (e.charCodeAt(t + 4 * i) + 30 * i) ** 4;
                    t.push(n)
                }
                return t
            }(e)
              , w = function(e, t, i, n) {
                let a = function() {
                    let a = 5 * t;
                    return a = 9 * (a << 7 | a >>> 25),
                    n ^= t,
                    t ^= i ^= e,
                    e ^= n,
                    n = n << 11 | n >>> 21,
                    (a >>> 0) / 2 ** 32
                };
                for (let e = 0; e < 100; e++)
                    a();
                return a
            }(x[0], x[1], x[2], x[3]);
            for (let e = 0; e < 30; e++) {
                let t = new PIXI.Sprite($["Sprites/Clouds"][Math.floor(3 * w())]);
                d.addChild(t),
                t.anchor.set(.5, .5),
                t.y = c.screen.height / 2 + (w() - .5) * c.screen.height - 1200 * w(),
                t.orig = {
                    y: t.y
                },
                t.scale.x = .2 + e / 150,
                t.scale.y = .2 + e / 150,
                t.x = c.screen.width / 2 + (w() - .5) * f * h.linear(t.scale.x, 1, .5),
                w() > .5 && (t.scale.x *= -1);
                let i = t.texture.trim;
                null == i && (i = t.texture._frame),
                t.pivot.y = -i.height,
                u[p++] = t
            }
            m.zIndex = 1e4;
            let I = {}
              , C = function(e) {
                I[e.key.toLowerCase()] = !0
            }
              , b = function(e) {
                I[e.key.toLowerCase()] = !1
            }
              , M = !1
              , P = function() {
                M = !0
            }
              , T = function() {
                M = !1
            };
            document.addEventListener("keydown", C),
            document.addEventListener("keyup", b),
            document.addEventListener("pointerdown", P),
            document.addEventListener("pointerup", T);
            let k = new PIXI.NineSlicePlane($.inputNineSlice[12],2,2,2,2);
            k.width = (c.screen.width - f) / 2,
            k.height = c.screen.height,
            k.x = 0,
            k.y = 0,
            c.stage.addChild(k);
            let A = new PIXI.NineSlicePlane($.inputNineSlice[12],2,2,2,2);
            A.width = (c.screen.width - f) / 2,
            A.height = c.screen.height,
            A.x = c.screen.width - A.width,
            A.y = 0,
            c.stage.addChild(A),
            g.y = 300;
            let E = {}
              , L = 0
              , X = -1
              , N = -1
              , D = !0;
            function G() {
                let e = {
                    x: 0,
                    y: -1 == X ? 0 : X.y - 100,
                    width: -1 == X ? 200 : X.width,
                    height: 50,
                    speed: 1,
                    scaleTimer: 0
                };
                D && (e.x = f - e.width,
                e.speed *= -1),
                e.width <= 100 && (e.x = D ? X.x + X.width + 40 : X.x - e.width - 40),
                e.x < 0 && (e.x = 0),
                e.x > f + e.width && (e.x = f + e.width),
                D = !D,
                e.original = {
                    y: e.y
                },
                -1 == X && (e.scaleTimer = 110,
                e.x = 80),
                e.previous = X,
                X = e,
                e.container = new PIXI.Container,
                e.container.x = e.x,
                e.container.y = e.y,
                g.addChild(e.container),
                e.setWidth = function(t, o) {
                    i.width = t,
                    i.tilePosition.x += o,
                    e.width = t,
                    a.width = t,
                    n.width = t,
                    n.tilePosition.x += o,
                    i.pivot.x = e.width / 2,
                    i.pivot.y = e.height / 2,
                    i.x = i.pivot.x,
                    i.y = i.pivot.y
                }
                ,
                e.destroy = function() {
                    n.destroy(),
                    a.destroy(),
                    i.destroy(),
                    e.container.destroy(),
                    delete E[e.id]
                }
                ;
                let t = 3 * Math.floor(3 * Math.random());
                e.texture = t;
                let i = new PIXI.TilingSprite($["Sprites/CakeSlicePlane"][1 + t]);
                i.pivot.x = e.width / 2,
                i.pivot.y = e.height / 2,
                i.x = i.pivot.x,
                i.y = i.pivot.y,
                i.clampMargin = 1,
                i.width = e.width,
                i.height = 50,
                e.container.addChild(i),
                e.sprite = i;
                let n = new PIXI.TilingSprite($["Sprites/CakeSlicePlane"][2 + t]);
                n.y = -90,
                n.clampMargin = 1,
                e.container.roundPixels = !0,
                n.width = e.width,
                n.height = 90,
                i.addChild(n);
                let a = new PIXI.NineSlicePlane($["Sprites/CakeSlicePlane"][0 + t]);
                i.addChild(a),
                a.width = e.width,
                a.height = 50,
                e.id = L,
                E[L] = e,
                N = L,
                L++
            }
            let U = new PIXI.NineSlicePlane($.inputNineSlice[13]);
            g.addChild(U),
            U.x = -20,
            U.y = 50,
            U.width = 400,
            U.height = c.screen.height,
            s.on("pointerdown", (function() {
                E[N].dropping || (E[N].dropping = !0,
                E[N].speed = 0,
                E[N].animationTimer = 0)
            }
            )),
            G(),
            G();
            let R = !1
              , O = 0
              , F = {}
              , _ = 0
              , z = 0
              , W = function() {
                if (E[N].x += E[N].speed * Qe,
                (E[N].x > f - E[N].width || E[N].x < 0) && (E[N].speed *= -1),
                E[N].x > f - E[N].width && (E[N].x = f - E[N].width),
                E[N].x < 0 && (E[N].x = 0),
                E[N].container.x = E[N].x,
                E[N].dropping) {
                    E[N].y = E[N].original.y + eases.easeInQuad(E[N].animationTimer, 0, 50, 24),
                    E[N].container.y = E[N].y,
                    E[N].animationTimer += Qe;
                    let e = E[N]
                      , t = E[N].previous;
                    if ((e.x - t.x > t.width || t.x - e.x > e.width) && (E[N].sprite.rotation = eases.easeInQuad(E[N].animationTimer, 0, 8, 100),
                    R || (R = !0,
                    Z.interactive = !1,
                    setTimeout((function() {
                        Fe.blurPan(c.stage, (function() {
                            K()
                        }
                        ))
                    }
                    ), 500))),
                    E[N].animationTimer > 24)
                        if (e.x - t.x > t.width || t.x - e.x > e.width)
                            ;
                        else {
                            E[N].sprite.scale.x = 1,
                            E[N].sprite.scale.y = 1,
                            E[N].y = E[N].original.y + 50,
                            E[N].container.y = E[N].y;
                            let n = 0;
                            Math.abs(t.x - e.x) < 30 && (n = o.score.nice),
                            Math.abs(t.x - e.x) < 10 && (n = o.score.good);
                            let a = {
                                x: e.x,
                                y: e.y,
                                width: 100,
                                height: 50,
                                vy: 0,
                                vx: 0,
                                vr: 0
                            }
                              , r = 4;
                            if (e.width < 8 && (r = 2),
                            Math.abs(t.x - e.x) < r ? (a = -1,
                            n = o.score.perfect,
                            e.x = t.x,
                            V.add(100),
                            O++,
                            z++,
                            _ < z && (_ = z),
                            O >= 3 && e.width <= 200 && (e.x -= 20,
                            e.width += 40,
                            e.setWidth(e.width, 20),
                            e.container.x = e.x,
                            O = 1)) : (O = 0,
                            z = 0,
                            V.add(Math.max(10, 100 - Math.floor(Math.abs(t.x - e.x)))),
                            t.x < e.x && (e.width -= e.x - t.x,
                            e.setWidth(e.width, 0),
                            e.x = t.x + t.width - e.width,
                            a.width = e.x - t.x,
                            a.x = e.x + e.width,
                            a.vx = 2 + 2 * Math.random(),
                            a.vr = 5 + 5 * Math.random()),
                            t.x > e.x && (a.width = -(e.x - t.x),
                            e.width -= t.x - e.x,
                            e.setWidth(e.width, e.x - t.x),
                            e.x = t.x,
                            a.x = e.x - a.width,
                            a.vx = 2 * -Math.random() - 2,
                            a.vr = -5 - 5 * Math.random()),
                            a.vy = 2 * -Math.random() - 2),
                            i.hunger += e.width / 1200,
                            e.container.x = e.x,
                            Y.text = o.ui.altitude + ": " + L,
                            500 == L && (Fe.achievementQueue("750altitudeCAKEWALK"),
                            B._td_costume6.owned = !0),
                            1e3 == L && Fe.achievementQueue("1000altitudeCAKEWALK"),
                            -1 != a) {
                                let t = new PIXI.Container;
                                t.x = a.x,
                                t.y = a.y,
                                g.addChild(t);
                                let i = new PIXI.TilingSprite($["Sprites/CakeSlicePlane"][1 + e.texture]);
                                i.clampMargin = 1,
                                i.width = a.width,
                                i.height = a.height,
                                i.pivot.x = a.width / 2,
                                i.pivot.y = a.height / 2,
                                i.x = i.pivot.x,
                                i.y = i.pivot.y,
                                t.addChild(i);
                                let n = new PIXI.NineSlicePlane($["Sprites/CakeSlicePlane"][0 + e.texture]);
                                i.addChild(n),
                                n.width = a.width,
                                n.height = 50,
                                a.sprite = i,
                                a.container = t,
                                a.id = N,
                                F[N] = a,
                                a.destroy = function() {
                                    delete F[a.id],
                                    n.destroy(),
                                    i.destroy(),
                                    t.destroy()
                                }
                            }
                            G(),
                            j.text = n,
                            0 != n && (j.animationTimer = 0,
                            j.rotateTo = D ? 1 : -1)
                        }
                }
                j.alpha = eases.easeInQuad(Math.min(100, j.animationTimer), 1, -1, 50),
                j.scale.x = eases.easeOutQuad(Math.min(100, j.animationTimer), 1, .5, 30),
                j.scale.y = eases.easeOutQuad(Math.min(110, j.animationTimer), 1, .5, 30),
                j.rotation = eases.easeInQuad(Math.min(110, j.animationTimer), 0, .1 * j.rotateTo, 40),
                j.animationTimer += Qe;
                for (let e in E) {
                    let t = E[e];
                    E[e].sprite.scale.x = eases.easeOutElastic(Math.min(90, E[e].scaleTimer), .1, .9, 90),
                    E[e].sprite.scale.y = eases.easeOutElastic(Math.min(80, E[e].scaleTimer), .1, .9, 80),
                    E[e].scaleTimer += Qe,
                    t.container.transform.worldTransform.ty > c.screen.height && t.destroy()
                }
                for (let e in F) {
                    let t = F[e];
                    t.x += t.vx,
                    t.y += t.vy,
                    t.sprite.rotation += t.vr / 100,
                    t.vy += .4,
                    t.vx = h.linear(t.vx, 0, .02, Qe),
                    t.container.x = t.x,
                    t.container.y = t.y,
                    t.container.transform.worldTransform.ty > c.screen.height + 100 && t.destroy()
                }
                s.y = -s.height + c.screen.height,
                s.y += g.y,
                l.alpha = (g.y - 8e3) / 1e3,
                s.y > 0 && (s.y = 0),
                s.y < -s.height + c.screen.height && (s.y = -s.height + c.screen.height),
                g.x = c.screen.width / 2 - 180,
                g.y = h.linear(g.y, c.screen.height / 2 - E[N].original.y - 100, .05, Qe);
                for (let e in u)
                    u[e].y = u[e].orig.y + g.y * u[e].scale.y / 2,
                    u[e].y > c.screen.height && (u[e].destroy(),
                    delete u[e]);
                H.offset = h.linear(H._offset, i.hunger / 100, .04, Qe)
            }
              , j = a("Bruh", 32, "center");
            c.stage.addChild(j),
            j.x = c.screen.width / 2,
            j.y = c.screen.height / 2 + 200;
            let H = new S($["Sprites/GameUI"][4],$["Sprites/GameUI"][3],i.hunger / 100);
            H.buttonContainer.x = 60,
            H.buttonContainer.y = c.screen.height - 60,
            H.buttonContainer.scale.x = .8,
            H.buttonContainer.scale.y = .8,
            c.stage.addChild(H.buttonContainer),
            v(H.buttonContainer, (function() {}
            )),
            H.selected.visible = !1,
            c.ticker.add(W);
            let Q = 0
              , V = a(Q, 32);
            V.add = function(e) {
                Q += e,
                t ? (V.text = "Set seed",
                V.alpha = .2) : V.text = Q
            }
            ,
            V.add(0),
            V.anchor.set(1, 0),
            V.x = c.screen.width - 20 - 50,
            V.y = 20,
            c.stage.addChild(V);
            let Y = a(o.ui.altitude + ": 1", 32);
            Y.anchor.set(0, 0),
            Y.x = 20,
            Y.y = 20,
            c.stage.addChild(Y),
            y.push(Y),
            y.push(V),
            y.push(A),
            y.push(k),
            g.sortableChildren = !0;
            let K = function() {
                j.destroy(),
                H.destroy(),
                te.Pamgaea.release = .5,
                n.minigameMusic && te.Pamgaea.off("end", r),
                te.Pamgaea.stop();
                for (let e in E)
                    E[e].destroy();
                for (let e in F)
                    F[e].destroy();
                for (let e in u)
                    u[e].destroy(),
                    delete u[e];
                for (let e = 0; e < y.length; e++)
                    y[e].destroy();
                document.removeEventListener("keydown", C),
                document.removeEventListener("keyup", b),
                document.removeEventListener("pointerdown", P),
                document.removeEventListener("pointerup", T),
                c.ticker.remove(W),
                Fe.gameList("cakewalk"),
                Z.destroyPause(),
                t || setTimeout((function() {
                    Fe.results(Q, Math.floor(Q / 50)),
                    _ >= 10 && Fe.achievementQueue("get10perfectsCAKEWALK")
                }
                ), 100),
                window.onblur = function() {}
            };
            window.onblur = function() {
                J || q()
            }
            ;
            let J = !1;
            function q() {
                J = !J,
                Z.changePause(J),
                J ? (n.inGame = !1,
                c.ticker.remove(W),
                n.minigameMusic && (te.Pamgaea.release = .2,
                te.Pamgaea.pause()),
                Fe.message(o.ui.gamePaused, $["Sprites/GameUI"][32], (function() {
                    q()
                }
                ), (function() {
                    Fe.blurPan(c.stage, (function() {
                        K()
                    }
                    ))
                }
                ), [o.ui.play, o.ui.home], !1)) : (n.minigameMusic && (te.Pamgaea.play(),
                te.Pamgaea.sourceNode.playbackRate.value = 1.15),
                n.inGame = !0,
                c.ticker.add(W))
            }
            let Z = Fe.pauseButton((function() {
                q()
            }
            ), .4);
            c.stage.addChild(Z),
            Z.x = c.screen.width - 40,
            Z.y = 40
        },
        dropdodge: function() {
            let e = new PIXI.Sprite($["Sprites/RepeatingUI"][3]);
            e.interactive = !0,
            c.stage.addChild(e),
            e.width = c.screen.width,
            e.height = c.screen.height;
            let t = {
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                box: new PIXI.Graphics,
                width: 30,
                height: 50,
                acceleration: 0
            }
              , i = [];
            i.push(e),
            i.push(t.box);
            let n = new PIXI.Container;
            c.stage.addChild(n),
            i.push(n);
            let o = {}
              , r = 3e3;
            t.x = 0,
            t.y = 0,
            t.zIndex = 1e4;
            let s = {}
              , l = function(e) {
                s[e.key] = !0
            }
              , d = function(e) {
                s[e.key] = !1
            }
              , u = 0
              , p = 15;
            for (let e = 0; e < 1e4; e++)
                ;
            let m = Te(ee.GTTTATINT)
              , y = !1
              , g = function() {
                y = !0
            }
              , x = function() {
                y = !1
            };
            document.addEventListener("keydown", l),
            document.addEventListener("keyup", d),
            document.addEventListener("pointerdown", g),
            document.addEventListener("pointerup", x),
            m.onNextFrame = function(e) {
                s.w || s.a || s.s || s.d || (e.goto(0),
                e.b.gotoAndStop(20)),
                e.a_.gotoAndStop(Math.min(59, Math.max(0, Math.round(30 - 30 * t.acceleration)))),
                e.b.scale.x = t.acceleration < 0 ? -1 : 1,
                e.c.rotation += -1.5 + Math.abs(2 * t.acceleration),
                0 == t.vy && e.a_.c.gotoAndStop(1),
                e.d.rotation = -e.c.rotation
            }
            ,
            m.play(),
            m.loop = !0,
            m.scale.x = .4,
            m.scale.y = .4;
            let w = new PIXI.NineSlicePlane($.inputNineSlice[5],15,15,15,15);
            w.width = 100,
            w.height = r,
            w.x = r,
            w.y = 0,
            n.addChild(w);
            let v = new PIXI.NineSlicePlane($.inputNineSlice[5],15,15,15,15);
            v.width = 100,
            v.height = r,
            v.x = -100,
            v.y = 0,
            n.addChild(v);
            let I = new PIXI.NineSlicePlane($.inputNineSlice[5],15,15,15,15);
            I.width = r,
            I.height = 100,
            I.x = 0,
            I.y = -100,
            n.addChild(I);
            let S = new PIXI.NineSlicePlane($.inputNineSlice[5],15,15,15,15);
            S.width = r,
            S.height = 100,
            S.x = 0,
            S.y = r,
            n.addChild(S);
            let C = function() {
                t.y;
                for (let e in o)
                    parseInt(e) < Math.floor((n.y - 640) / 1) && (P.add(Math.max(1, u)),
                    o[e].sprite.destroy(),
                    delete o[e]);
                t.isOnGround = !1,
                m.x = t.x + t.width / 2,
                m.y = t.y + t.height;
                let e = .4;
                s.d && (t.vx += e),
                s.a && (t.vx -= e),
                s.w && (t.vy -= e),
                s.s && (t.vy += e),
                t.acceleration = h.linear(t.acceleration, t.vx / 5, .5, Qe),
                t.vx *= .9,
                t.vy *= .9,
                t.y += t.vy,
                t.x += t.vx;
                let i = Math.abs(t.vx / 40 / 4)
                  , a = Math.abs(t.vy / 40 / 4);
                m.scale.x = .4 * (1 + i - a),
                m.scale.y = .4 * (1 + a - i),
                (t.x < 0 || t.x > r - t.width) && (t.vx /= -1,
                t.acceleration /= -1),
                (t.y < 0 || t.y > r - t.height) && (t.vy /= -1),
                t.x < 0 && (t.x = 0),
                t.y < 0 && (t.y = 0),
                t.x > r - t.width && (t.x = r - t.width),
                t.y > r - t.height && (t.y = r - t.height);
                for (let e in o) {
                    let i = o[e];
                    if (f(t, i) && t.vy > 0 && t.y < i.y - t.height + 4 + t.vy) {
                        if (t.y = i.y - t.height,
                        t.isOnGround = !0,
                        t.vy = 0,
                        t.max < i.id) {
                            let e = i.id - t.max;
                            P.add(10 * (e - 1)),
                            p--,
                            0 == p && (u++,
                            T.text = "mph: " + u,
                            p = 10)
                        }
                        t.max = i.id;
                        let e = 7;
                        u >= 7 && (e *= 2),
                        u >= 10 && (e *= 1.5),
                        u >= 16 && (e *= 1.5),
                        u >= 20 && (e *= 2),
                        s[" "] && (t.vy -= e + Math.abs(1.5 * t.vx))
                    }
                }
                n.x = h.linear(n.x, c.screen.width / 2 - t.x, .2, Qe),
                n.y = h.linear(n.y, c.screen.height / 2 - t.y, .2, Qe),
                -n.y + c.screen.height < t.y && !b && (b = !0,
                Fe.blurPan(c.stage, (function() {
                    k()
                }
                ))),
                n.y += u / 2
            }
              , b = !1;
            c.ticker.add(C);
            let M = 0
              , P = a(M, 32);
            P.add = function(e) {
                M += e,
                P.text = M
            }
            ,
            P.anchor.set(1, 0),
            P.x = c.screen.width - 20,
            P.y = 20,
            c.stage.addChild(P);
            let T = a("mph: 0", 32);
            T.anchor.set(0, 0),
            T.x = 20,
            T.y = 20,
            c.stage.addChild(T),
            i.push(T),
            i.push(P),
            i.push(S),
            i.push(w),
            n.addChild(m),
            i.push(m);
            let k = function() {
                for (let e in o)
                    o[e].sprite.destroy();
                for (let e = 0; e < i.length; e++)
                    i[e].destroy();
                document.removeEventListener("keydown", l),
                document.removeEventListener("keyup", d),
                document.removeEventListener("pointerdown", g),
                document.removeEventListener("pointerup", x),
                c.ticker.remove(C),
                Fe.gameList(),
                Fe.results(M, Math.floor(M / 50))
            }
        },
        results: function(e=10, i=50, r=-1, s=o.ui.score) {
            let l = Fe.blackTint(.2);
            l.start();
            let d = new PIXI.NineSlicePlane($.inputNineSlice[2]);
            d.width = 200,
            d.height = 200,
            d.x = c.screen.width / 2,
            d.y = c.screen.height / 2,
            d.pivot.set(d.width / 2, d.height / 2),
            c.stage.addChild(d);
            let u = new PIXI.BitmapText(-1 == r ? o.ui.gameOver : r,{
                fontName: "ShagBlack",
                fontSize: 24
            });
            u.anchor.set(.5, 0),
            u.x = d.width / 2,
            u.y = 30,
            d.addChild(u);
            let p = d.width / 2
              , m = a(s + ": " + e, 20, "center", void 0, 1);
            m.x = p,
            m.y = u.y + 70,
            -1 == r && d.addChild(m),
            [].push(m);
            let y = 0
              , f = new PIXI.Container
              , x = new PIXI.Sprite($["Sprites/GameUI"][14]);
            f.addChild(x),
            x.x = 0,
            x.y = 0,
            x.scale.x = .75,
            x.scale.y = .75,
            x.anchor.set(.5, .5),
            y += x.texture.trim.width / 2 * x.scale.x;
            let w = a(i, 20, "left", "center", 1);
            w.anchor.set(0, .5),
            w.x = y + 10,
            w.y = -2,
            y += w.width,
            f.addChild(w),
            f.x = p - y / 2,
            f.y = u.y + 50,
            d.addChild(f);
            let v = {}
              , I = 0
              , S = Math.min(1e4, i)
              , C = !1
              , b = new M((function() {
                C || (C = !0,
                i > 0 && n.sfx && (te.collect.stop(),
                te.collect.play()),
                function() {
                    for (let e = 0; e < S; e++) {
                        let e = new PIXI.Sprite($["Sprites/GameUI"][14]);
                        e.scale.x = .4 + .5 * Math.random(),
                        e.scale.y = e.scale.x,
                        e.anchor.set(.5, .5),
                        e.y = x.transform.worldTransform.ty,
                        e.vr = Math.random() - .5,
                        e.facing = Math.random() * Math.PI * 2;
                        let t = 1 + 8 * Math.random();
                        e.vx = t * Math.cos(e.facing),
                        e.vy = t * Math.sin(e.facing),
                        e.x = x.transform.worldTransform.tx,
                        c.stage.addChild(e),
                        v[I++] = e
                    }
                    0 != S && (x.visible = !1),
                    setTimeout((function() {
                        t.coins += i,
                        W()
                    }
                    ), 500),
                    k()
                }())
            }
            ),20,d.height - 20,d.width - 40,30,o.ui.continue,0,0,1,1,"center");
            d.addChild(b.element);
            let P = 0
              , T = Math.random() - .5
              , k = function() {
                b.interactive = !1,
                A.x = d.x,
                A.y = d.y,
                A.rotation = d.rotation,
                A.scale = d.scale,
                d.closing = !0,
                P = 0
            }
              , A = {
                x: c.screen.width / 2,
                y: c.screen.height / 2,
                rotation: T,
                scale: .5
            };
            d.onDestroyed = function() {}
            ,
            d.destroyBook = function() {
                d.onDestroyed(),
                c.ticker.remove(L),
                b.destroy(),
                x.destroy(),
                w.destroy(),
                d.destroy({
                    children: !0
                })
            }
            ;
            let E = function() {
                for (let e in v) {
                    let t = v[e];
                    t.y += t.vy * Qe,
                    t.x += t.vx * Qe;
                    let i = 50
                      , n = 50;
                    t.facing = Math.atan2(n - t.y, i - t.x);
                    let a = 8
                      , o = g(t.x, t.y, i, n);
                    o < 50 ? (t.vx = a * Math.cos(t.facing),
                    t.vy = a * Math.sin(t.facing)) : (t.vx = h.linear(t.vx, a * Math.cos(t.facing), .02, Qe),
                    t.vy = h.linear(t.vy, a * Math.sin(t.facing), .02, Qe)),
                    t.rotation += t.vr / 10 * Qe,
                    o < 5 * Qe && (t.destroy(),
                    S--,
                    delete v[e]),
                    S <= 0 && c.ticker.remove(E)
                }
            }
              , L = function() {
                if (d.closing) {
                    if (d.y = ease[16](Math.min(40, P), A.y, -A.y + c.screen.height + 500, 40),
                    d.rotation = ease[1](Math.min(70, P), A.rotation, T, 70),
                    P > 40)
                        return l.end(),
                        void d.destroyBook()
                } else
                    d.x = ease[17](Math.min(80, P), A.x, 0, 80),
                    d.y = ease[8](Math.min(70, P), A.y, -20, 70),
                    d.rotation = window.eases.easeOutElastic(Math.min(100, P), A.rotation, -T, 100),
                    d.scale.x = window.eases.easeOutElastic(Math.min(90, P), A.scale, .5, 90);
                d.scale.y = d.scale.x,
                P += Qe
            };
            return c.ticker.add(L),
            c.ticker.add(E),
            d
        },
        message: function(e, t=-1, i=function() {}
        , n=-1, a, o=!0) {
            let r = Fe.blackTint(.2, o);
            r.start();
            let s = new PIXI.NineSlicePlane($.inputNineSlice[2]);
            s.width = Math.max(320, c.screen.width / 2),
            s.x = c.screen.width / 2,
            s.y = c.screen.height / 2,
            c.stage.addChild(s);
            let l = 0;
            -1 == t && (l += -70);
            let d, h = new PIXI.BitmapText(e,{
                fontName: "ShagBlack",
                fontSize: 24,
                breakWords: !0,
                wordWrap: !0,
                wordWrapWidth: 200,
                maxWidth: s.width - 90 - 30 - l,
                whiteSpace: "normal"
            });
            s.height = h.height + 90,
            h.anchor.set(0, .5),
            h.x = 110 + l,
            h.y = s.height / 2 - 10,
            s.addChild(h),
            -1 != t && (d = new PIXI.Sprite(t),
            s.addChild(d),
            d.anchor.set(.5, .5),
            d.y = s.height / 2 - 10,
            d.x = 60,
            d.scale.x = .8,
            d.scale.y = .8);
            let u = 0;
            -1 != n && (s.height += 40),
            s.pivot.set(s.width / 2, s.height / 2);
            let p, m, y, g = Math.random() - .5, f = function() {
                s.closing || (w.x = s.x,
                w.y = s.y,
                w.rotation = s.rotation,
                w.scale = s.scale,
                s.closing = !0,
                u = 0)
            };
            -1 == n ? (p = Fe.exitButton(f, s.width - 20, 20, .3, .1),
            p.sprite.alpha = 0,
            s.addChild(p.sprite),
            p.interactive = !1,
            p.show = !1,
            setTimeout((function() {
                p.show = !0,
                p.sprite.interactive = !0
            }
            ), 500)) : (m = new M((function() {
                x = 0,
                f()
            }
            ),15,s.height - 15,s.width / 2 - 20,30,a[0],0,0,1,1,"center"),
            s.addChild(m.element),
            y = new M((function() {
                i = n,
                f()
            }
            ),s.width - 15,s.height - 15,s.width / 2 - 20,30,a[1],0,1,1,1,"center"),
            s.addChild(y.element));
            let x = 0
              , w = {
                x: c.screen.width / 2,
                y: c.screen.height / 2,
                rotation: g,
                scale: .5
            };
            s.onDestroyed = function() {}
            ,
            s.destroyBook = function() {
                s.onDestroyed(),
                c.ticker.remove(v),
                -1 == n ? p.destroy() : (m.destroy(),
                y.destroy()),
                h.destroy(),
                -1 != t && d.destroy(),
                s.destroy({
                    children: !0
                }),
                i()
            }
            ;
            let v = function() {
                if (-1 == n && (p.show && (p.sprite.alpha += .05),
                p.sprite.alpha >= 1 && (p.sprite.alpha = 1,
                p.show = !1)),
                s.closing) {
                    if (s.y = ease[16](Math.min(40, u), w.y, -w.y + c.screen.height + 500, 40),
                    s.rotation = ease[1](Math.min(70, u), w.rotation, g, 70),
                    u > 40)
                        return r.end(),
                        void s.destroyBook()
                } else
                    s.x = ease[17](Math.min(80, u), w.x, 0, 80),
                    s.y = ease[8](Math.min(70, u), w.y, -20, 70),
                    s.rotation = window.eases.easeOutElastic(Math.min(100, u), w.rotation, -g, 100),
                    s.scale.x = window.eases.easeOutElastic(Math.min(90, u), w.scale, .5, 90);
                s.scale.y = s.scale.x,
                u += Qe
            };
            return c.ticker.add(v),
            s.exit = f,
            s
        },
        wardrobe: function(e=function() {}
        ) {
            let r = new PIXI.Sprite($["Sprites/Rooms"][7]);
            c.stage.addChild(r),
            r.interactive = !0,
            r.x = c.screen.width / 2,
            r.y = c.screen.height / 2,
            r.anchor.set(.5, .5),
            r.scale.x = 1,
            r.scale.y = 1;
            let l = new PIXI.Container;
            c.stage.addChild(l);
            let d = 0
              , u = Fe.coinCounter();
            l.addChild(u);
            let p = t.coins;
            u.x = 20,
            u.y = 20;
            let g = {}
              , f = 0
              , x = 0
              , w = 0
              , v = []
              , I = a("", 32, "center");
            I.x = c.screen.width / 2,
            I.y = c.screen.height - 150;
            let S = n.costume
              , C = {}
              , b = new PIXI.Container
              , P = new PIXI.Graphics;
            b.mask = P,
            c.stage.addChild(b),
            b.x = 40,
            b.y = 80;
            let T = c.screen.width - 80
              , k = c.screen.height - 300;
            P.beginFill(0),
            P.drawRect(b.x, b.y, T, k),
            P.endFill(),
            b.interactive = !0,
            b.on("pointerdown", (function(e) {
                let t = e.clientY / s;
                b.dragOffset = {
                    y: t - b.y
                },
                b.prevY = b.y,
                b.vy = 0,
                b.scrolling = !0
            }
            ));
            let A = function(e) {
                if (!b.scrolling)
                    return;
                let t = e.clientY / s;
                b.prevY = b.y,
                b.y = t - b.dragOffset.y
            }
              , E = function() {
                b.scrolling = !1
            };
            document.addEventListener("pointermove", A),
            document.addEventListener("pointerup", E),
            b.vy = 0;
            let L = 0
              , X = function() {
                let e = 124 * -L + 80 - 50 + k;
                b.vy = h.linear(b.vy, 0, .05, Qe),
                b.scrolling ? b.vy = b.y - b.prevY : b.y += b.vy,
                N.targetAlpha = 1,
                b.y >= 80 && (b.y = 80,
                b.vy = 0),
                b.y <= e && (N.targetAlpha = 0,
                b.y = e,
                b.vy = 0),
                N.alpha = h.linear(N.alpha, N.targetAlpha, .1, Qe)
            };
            c.ticker.add(X);
            let N = new PIXI.Sprite($["Sprites/Rooms"][11]);
            c.stage.addChild(N),
            N.x = b.x,
            N.y = b.y + k - 90,
            N.width = T,
            N.height = 100;
            for (let e in B) {
                let r = B[e];
                if (r.hidden)
                    continue;
                if (r.secret && !r.owned)
                    continue;
                let s = !1;
                null != r.checkAvailability && r.checkAvailability() && (r.owned = !0),
                null != He.costumes[e] && He.costumes[e].expiry > Date.now() && 0 == r.owned && (s = !0,
                r.discount = He.costumes[e]),
                L++;
                let l = !1;
                r.owned || -1 != r.cost || (l = !0);
                let h = new M((function() {
                    I.text = ""
                }
                ),0,0 + 124 * d,T,120,"",0,0,0,l ? 11 : 3);
                C[e] = h,
                h.element.interactive = !1,
                b.addChild(h.element);
                let y = new PIXI.Rectangle(0,0,0,0);
                if (-1 != r.sprite) {
                    let e = new PIXI.Sprite($["Sprites/Poses"][r.sprite]);
                    if (e.scale.x = .5,
                    e.scale.y = .5,
                    e.hitArea = y,
                    h.element.addChild(e),
                    e.anchor.set(.5, .5),
                    e.x = 50,
                    e.y = 60,
                    l) {
                        let t = new PIXI.ColorMatrixFilter;
                        t.matrix = [.5, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, 1, 0],
                        t.blackAndWhite(1),
                        e.filters = [t]
                    }
                }
                let P, k, A = a(r.name, 24, "left", "middle");
                if (l && (A.text = "???"),
                A.x = 100,
                A.y = 20,
                h.element.addChild(A),
                null != r.artist) {
                    let e = a(o.ui.artist + ": " + r.artist.name, 12, "left", "middle");
                    e.x = 100,
                    e.y = 50,
                    h.element.addChild(e)
                }
                if (A.width > T - 50 && (A.width = T - 50),
                A.scale.y = A.scale.x,
                r.owned || l)
                    P = a(o.ui.owned, 16),
                    l && (P.text = ""),
                    P.x = 100,
                    P.scale.y = P.scale.x,
                    P.y = 50 + (16 * -P.scale.y + 16) / 2 + (null == r.artist ? 0 : 15),
                    h.element.addChild(P);
                else {
                    if (P = a(r.cost, 16),
                    P.x = 130,
                    P.width > 60 && (P.width = 60),
                    P.scale.y = P.scale.x,
                    P.y = 50 + (16 * -P.scale.y + 16) / 2 + (null == r.artist ? 0 : 15),
                    h.element.addChild(P),
                    v.push(P),
                    s) {
                        let e = new PIXI.NineSlicePlane($.inputNineSlice[18],15,15,15,15);
                        e.x = P.x - 3,
                        e.y = P.y + 7,
                        e.width = P.width + 6,
                        e.height = P.height - 11,
                        h.element.addChild(e),
                        v.push(e);
                        let t = a(r.cost * r.discount.price, 16);
                        t.x = 130,
                        t.width > 60 && (t.width = 60),
                        t.scale.y = t.scale.x,
                        t.y = P.y + 20,
                        h.element.addChild(t),
                        v.push(t);
                        let i = a(Ue(r.discount.expiry - Date.now()), 16);
                        i.y = 100,
                        i.x = 20;
                        let n = setInterval((function() {
                            s && (i.text = Ue(r.discount.expiry - Date.now()),
                            Date.now() > r.discount.expiry && (s = !1,
                            t.destroy(),
                            i.destroy(),
                            e.destroy()))
                        }
                        ), 1e3);
                        P.destroyDiscount = function() {
                            t.destroy(),
                            i.destroy(),
                            e.destroy()
                        }
                        ,
                        Re.push(n),
                        h.element.addChild(i)
                    }
                    k = new PIXI.Sprite($["Sprites/GameUI"][14]),
                    h.element.addChild(k),
                    k.x = 110,
                    k.y = 60 + (null == r.artist ? 0 : 15),
                    k.scale.x = .75,
                    k.scale.y = .75,
                    k.anchor.set(.5, .5),
                    k.hitArea = y,
                    v.push(k),
                    -1 == r.sprite && (k.x -= 80),
                    0 == r.cost && (P.text = "FREE",
                    P.x = 100,
                    k.visible = !1)
                }
                if (-1 == r.sprite && (P.x -= 80,
                A.x -= 80),
                !r.owned) {
                    let e = new M((function() {
                        if (r.requiredLevel > n.level)
                            return void Fe.message("You need atleast level " + r.requiredLevel + " to buy this item!", $["Sprites/GameUI"][35]);
                        if (-1 == r.cost) {
                            if ("object" == typeof r.achievement) {
                                let e = m[r.achievement[0]].name;
                                for (let t = 1; t < r.achievement.length; t++)
                                    console.log(m[r.achievement[t]]),
                                    e += (t == r.achievement.length - 1 ? '" and "' : '", "') + m[r.achievement[t]].name;
                                Fe.message(o.message.obtainCostume(e), $["Sprites/GameUI"][m[r.achievement[0]].icon])
                            } else
                                Fe.message(o.message.obtainCostume(m[r.achievement].name), $["Sprites/GameUI"][m[r.achievement].icon]);
                            return
                        }
                        let a = r.cost;
                        if (s && (a = r.cost * r.discount.price),
                        a > p)
                            return x < .01 && (w = 0),
                            x = 2,
                            I.text = "Not enough coins!",
                            I.alpha = 2,
                            void (n.sfx && (te.fail.stop(),
                            te.fail.play()));
                        s && P.destroyDiscount();
                        let l = Math.floor(Math.max(600, a) / 6);
                        i.happiness += 40 - a / 100,
                        i.progress += 50;
                        let d = Math.floor(a / 10)
                          , h = d / l;
                        setTimeout((function() {
                            if (n.sfx) {
                                if (0 == a)
                                    return;
                                a > 500 ? te.coinlarge.play() : a > 100 ? te.coinmedium.play() : te.coinsmall.play()
                            }
                        }
                        ), 750);
                        let y = setInterval((function() {
                            if (h <= 0 || R)
                                clearInterval(y);
                            else {
                                h--;
                                for (let e = 0; e < (h <= 0 ? d % l : l); e++) {
                                    let e = new PIXI.Sprite($["Sprites/GameUI"][14]);
                                    e.scale.x = .4 + .5 * Math.random(),
                                    e.scale.y = e.scale.x,
                                    e.anchor.set(.5, .5),
                                    e.y = u.y + 20,
                                    e.vr = Math.random() - .5,
                                    e.vy = 20 * (Math.random() - .6),
                                    e.vx = 20 * (Math.random() - .1),
                                    e.x = u.x + 20,
                                    c.stage.addChild(e),
                                    g[f++] = e
                                }
                            }
                        }
                        ), 1e3 / 24);
                        r.owned = !0,
                        n.sfx && (te.purchase.stop(),
                        te.purchase.play()),
                        e.destroy(),
                        X.element.y += 30,
                        X.inputText.text = o.ui.wear,
                        p -= a,
                        t.coins = p,
                        k.destroy(),
                        P.text = o.ui.owned,
                        r.owned = !0,
                        0 != r.cost && (P.x -= 30),
                        E()
                    }
                    ),T - 10,110,80,20,l ? o.ui.info : o.ui.get,0,1,1,4,"center");
                    h.element.addChild(e.element)
                }
                let E = function() {
                    if (S != e && ("Look" == _.currentPart ? _.onAnimationEnd = function() {
                        _.gotoPart("Look2"),
                        _.onAnimationEnd = function() {
                            _.currentPart = -1
                        }
                    }
                    : (_.gotoPart("Look2"),
                    _.onAnimationEnd = function() {
                        _.currentPart = -1
                    }
                    ),
                    U = 0,
                    S = e,
                    null != _.destroyCostume && (_.destroyCostume(),
                    _.destroyCostume = void 0),
                    r.apply(_),
                    O = 1,
                    r.owned)) {
                        for (let e in C)
                            C[e].wear.inputText.text == o.ui.wearing && (C[e].wear.inputText.text = o.ui.wear);
                        n.costume = e,
                        X.inputText.text = o.ui.wearing
                    }
                }
                  , X = new M(E,T - 10,110 - (r.owned ? 0 : 30),80,20,r.owned ? n.costume == e ? o.ui.wearing : o.ui.wear : o.ui.preview,0,1,1,4,"center");
                if (h.wear = X,
                l || h.element.addChild(X.element),
                v.push(A),
                v.push(h),
                r.requiredLevel > n.level) {
                    let e = new PIXI.NineSlicePlane($.inputNineSlice[14]);
                    e.tint = 0,
                    e.width = h.element.width,
                    e.height = h.element.height,
                    h.element.addChild(e),
                    e.alpha = .8,
                    e.interactive = !0;
                    let t = new PIXI.Sprite($["Sprites/GameUI"][41]);
                    t.x = h.element.height / 2,
                    t.y = h.element.height / 2,
                    t.anchor.set(.5, .5),
                    t.scale.x = .75,
                    t.scale.y = .75,
                    h.element.addChild(t),
                    t.hitArea = y;
                    let i = a("LEVEL " + r.requiredLevel, 24, "left", "middle");
                    i.x = h.element.height / 2 + 40,
                    i.y = h.element.height / 2 - 2,
                    i.width > h.element.width - i.x - 20 && (i.width = h.element.width - i.x - 20,
                    i.scale.y = i.scale.x),
                    h.element.addChild(i)
                }
                d++
            }
            let D = a(o.ui.comingsoon, 24, "center");
            b.addChild(D),
            D.x = T / 2,
            D.y = 124 * L + 20;
            let G = Fe.exitButton((function() {
                e(),
                W(),
                Fe.flash(!1, H)
            }
            ), c.screen.width - 40, 40, .4, 0);
            c.stage.addChild(G.sprite);
            let U = 50;
            l.origX = 0,
            l.time = 50;
            let R = !1
              , O = 0
              , F = function() {
                for (let e in g) {
                    let t = g[e];
                    t.y += t.vy * Qe,
                    t.x += t.vx * Qe,
                    t.vy += .5 * Qe,
                    t.vx = h.linear(t.vx, 0, .05, Qe),
                    t.rotation += t.vr / 10 * Qe,
                    t.y > c.screen.height + 200 && (t.destroy(),
                    delete g[e])
                }
                j.matrix = [1 - O, 0, 0, 0, O, 0, 1 - O, 0, 0, O, 0, 0, 1 - O, 0, O, 0, 0, 0, 1, 0],
                j.resolution = s,
                O = h.linear(O, 0, .05, Qe),
                U < 180 && U++,
                _.scale.x = window.eases.easeOutElastic(U, .9, -.15, 180),
                _.scale.y = window.eases.easeOutElastic(U, .7, .05, 180),
                R || (u.updateCounter(h.linear(u.getCounterAmount(), p, .1, Qe)),
                l.x = 0,
                x > .01 && (l.x += Math.cos(w) * x * 5,
                w += .5 * Qe,
                x = h.linear(x, 0, .1, Qe)),
                I.alpha > 0 && (I.alpha -= .04))
            };
            c.ticker.add(F);
            let _ = Te(ee.Teardrop, y.Teardrop)
              , z = new PIXI.Rectangle(-60,-160,120,180);
            _.hitArea = z,
            _.interactive = !0,
            _.on("pointerup", (function() {
                n.totalSlaps++,
                2763 == n.totalSlaps && (Fe.achievementQueue("slapTD2763"),
                W());
                let e = 1 + Math.floor(4 * Math.random());
                te.wave.stop(),
                n.sfx && (te["slap" + e].attack = 0,
                te["slap" + e].stop(),
                te["slap" + e].play()),
                _.gotoPart("Slap"),
                _.currentPart = -1
            }
            )),
            _.onAnimationEnd = function() {
                _.currentPart = -1
            }
            ,
            i.sleep < 20 && (_.visible = !1),
            B[n.costume].apply(_),
            c.stage.addChild(_),
            _.x = c.screen.width / 2,
            _.y = c.screen.height / 2 + 250,
            _.scale.x = .8,
            _.scale.y = .8,
            _.play(60),
            _.gotoPart("Look");
            let j = new PIXI.ColorMatrixFilter;
            function H() {
                for (let e = 0; e < Re.length; e++)
                    clearInterval(Re[e]);
                c.ticker.remove(X),
                document.removeEventListener("pointermove", A),
                document.removeEventListener("pointerup", E);
                for (let e in g)
                    null != g[e].destroy && g[e].destroy(),
                    delete g[e];
                I.destroy(),
                G.destroy(),
                r.destroy();
                for (let e = 0; e < v.length; e++)
                    v[e].destroyed || v[e].destroy();
                u.destroyCounter(),
                null != _.destroyCostume && (_.destroyCostume(),
                _.destroyCostume = void 0),
                _.destroyAnimation(),
                c.ticker.remove(F),
                R = !0
            }
            j.matrix = [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
            _.filters = [j],
            c.stage.addChild(I),
            v.push(N),
            v.push(b),
            v.push(P)
        },
        achievements: function(e=function() {}
        ) {
            let t = new PIXI.Sprite($["Sprites/Rooms"][18]);
            c.stage.addChild(t),
            t.interactive = !0,
            t.x = c.screen.width / 2,
            t.y = c.screen.height / 2,
            t.anchor.set(.5, .5),
            t.scale.x = 1,
            t.scale.y = 1;
            let i = new PIXI.Container;
            c.stage.addChild(i);
            let r = {}
              , l = 0
              , d = 0
              , u = []
              , p = 0;
            for (let e in m)
                m[e].done && p++;
            let y = new PIXI.BitmapText(o.ui.achievements + ": " + p + "/" + Object.keys(m).length,{
                fontSize: 32,
                fontName: "arial"
            });
            y.x = 40,
            y.y = 20,
            y.width > c.screen.width - 130 && (y.width = c.screen.width - 130,
            y.scale.y = y.scale.x),
            c.stage.addChild(y);
            let g = a("", 32, "center");
            g.x = c.screen.width / 2,
            g.y = c.screen.height - 150,
            n.costume;
            let f = new PIXI.Container
              , x = new PIXI.Graphics;
            f.mask = x,
            c.stage.addChild(f),
            f.x = 40,
            f.y = 80;
            let w = c.screen.width - 80
              , v = c.screen.height - 80;
            x.beginFill(0),
            x.drawRect(f.x, f.y, w, v),
            x.endFill(),
            f.interactive = !0,
            f.on("pointerdown", (function(e) {
                let t = e.clientY / s;
                f.dragOffset = {
                    y: t - f.y
                },
                f.prevY = f.y,
                f.vy = 0,
                f.scrolling = !0
            }
            ));
            let I = function(e) {
                if (!f.scrolling)
                    return;
                let t = e.clientY / s;
                f.prevY = f.y,
                f.y = t - f.dragOffset.y
            }
              , S = function() {
                f.scrolling = !1
            };
            document.addEventListener("pointermove", I),
            document.addEventListener("pointerup", S),
            f.vy = 0;
            let C = function() {
                let e = 80 - M - 50 + v;
                f.vy = h.linear(f.vy, 0, .05, Qe),
                f.scrolling ? f.vy = f.y - f.prevY : f.y += f.vy,
                b.targetAlpha = 1,
                f.y >= 80 && (f.y = 80,
                f.vy = 0),
                f.y <= e && (b.targetAlpha = 0,
                f.y = e,
                f.vy = 0),
                b.alpha = h.linear(b.alpha, b.targetAlpha, .1, Qe)
            };
            c.ticker.add(C);
            let b = new PIXI.Sprite($["Sprites/Rooms"][11]);
            b.x = f.x,
            b.y = f.y + v - 90,
            b.width = w,
            b.height = 100;
            let M = 0;
            for (let e in m) {
                let t = m[e];
                if (t.secret && !t.done)
                    continue;
                let i = new PIXI.NineSlicePlane($.inputNineSlice[2]);
                i.width = w,
                i.x = 0,
                i.y = M,
                f.addChild(i);
                let n = new PIXI.BitmapText(t.title,{
                    fontName: "ShagBlack",
                    fontSize: 24
                });
                i.height = n.height + 50,
                n.anchor.set(0, .5),
                n.x = 80,
                n.y = 20,
                i.addChild(n);
                let o = new PIXI.BitmapText(t.description,{
                    fontName: "ShagBlack",
                    fontSize: 16,
                    breakWords: !0,
                    wordWrap: !0,
                    wordWrapWidth: 200,
                    maxWidth: i.width - 140,
                    whiteSpace: "normal"
                });
                o.anchor.set(0, 0),
                i.height += o.height,
                o.anchor.set(0, .5),
                o.x = 80,
                o.y = 35 + o.height / 2,
                i.addChild(o),
                null == t.icon && (t.icon = 11);
                let r = $["Sprites/GameUI"][t.icon]
                  , s = new PIXI.Sprite(r);
                i.addChild(s),
                s.anchor.set(.5, .5),
                s.y = i.height / 2 - 5,
                s.x = 40,
                s.scale.x = .5,
                s.scale.y = .5,
                u.push(i);
                let l = t.done ? 26 : 25
                  , d = new PIXI.Sprite($["Sprites/GameUI"][l]);
                if (d.anchor.set(.5, .5),
                i.addChild(d),
                d.x = w - 40,
                d.y = i.height / 2 - 5,
                null != t.getProgress) {
                    let e = a(t.getProgress(), 12, "center", void 0, 1);
                    e.x = w - 40,
                    e.y = d.y + 25,
                    i.addChild(e)
                }
                M += i.height + 4
            }
            u.push(y);
            let P = Fe.exitButton((function() {
                e(),
                Fe.flash(!1, A)
            }
            ), c.screen.width - 40, 40, .4, 0);
            c.stage.addChild(P.sprite),
            i.origX = 0,
            i.time = 50;
            let T = !1
              , k = function() {
                T || (i.x = 0,
                l > .01 && (i.x += Math.cos(d) * l * 5,
                d += .5 * Qe,
                l = h.linear(l, 0, .1, Qe)),
                g.alpha > 0 && (g.alpha -= .04))
            };
            function A() {
                c.ticker.remove(C),
                document.removeEventListener("pointermove", I),
                document.removeEventListener("pointerup", S);
                for (let e in r)
                    null != r[e].destroy && r[e].destroy(),
                    delete r[e];
                g.destroy(),
                P.destroy(),
                t.destroy();
                for (let e = 0; e < u.length; e++)
                    u[e].destroyed || u[e].destroy();
                c.ticker.remove(k),
                T = !0
            }
            c.ticker.add(k),
            c.stage.addChild(g),
            u.push(b),
            u.push(f),
            u.push(x)
        },
        settings: Be,
        cargame: function() {
            let e = new PIXI.TilingSprite($["Sprites/RepeatingUI"][0]);
            c.stage.addChild(e),
            e.interactive = !0,
            e.x = 0,
            e.y = 0,
            e.width = c.screen.width,
            e.height = c.screen.height,
            e.clampMargin = 1;
            let t = 0
              , i = !1;
            window.onblur = function() {
                i || g()
            }
            ;
            let a = new PIXI.Container;
            c.stage.addChild(a),
            a.pivot.x = -c.screen.width / 2,
            a.pivot.y = -c.screen.height / 2;
            let o = Matter.Engine.create()
              , r = {}
              , s = !1;
            document.addEventListener("keydown", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"),
                "ArrowRight" == e.key && (t = "d"),
                "ArrowUp" == e.key && (t = " "),
                "w" == e.key && (t = " "),
                r[t] = !0,
                ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
            }
            )),
            document.addEventListener("keyup", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"),
                "ArrowRight" == e.key && (t = "d"),
                "ArrowUp" == e.key && (t = " "),
                "w" == e.key && (t = " "),
                r[t] = !1
            }
            )),
            document.addEventListener("pointerdown", (function() {
                s = !0
            }
            )),
            document.addEventListener("pointerup", (function() {
                s = !1
            }
            ));
            let l = []
              , d = []
              , u = {
                box: Matter.Bodies.rectangle(0, -400, 100, 100),
                sprite: function() {
                    let e = new PIXI.NineSlicePlane($.inputNineSlice[5],15,15,15,15);
                    return e.width = 100,
                    e.height = 100,
                    a.addChild(e),
                    e.pivot.x = 50,
                    e.pivot.y = 50,
                    e
                }()
            };
            l.push(u),
            d.push(u.box);
            for (let e = 0; e < 500; e++) {
                let t = {}
                  , i = .1 + Math.random() / 2
                  , n = Matter.Bodies.polygon(400 * (Math.random() - .5), -300 - 100 * e, 16, 48 * i);
                t.box = n;
                let o = new PIXI.Sprite($["Sprites/GameUI"][Math.round(6 * Math.random())]);
                o.scale.x = i,
                o.scale.y = i,
                o.anchor.set(.5, .5),
                a.addChild(o),
                t.sprite = o,
                l.push(t),
                d.push(n),
                t.sprite.tint = 16777215 * Math.random()
            }
            let p = Matter.Bodies.rectangle(0, 200, 16e3, 120, {
                isStatic: !0
            });
            Matter.Composite.add(o.world, [p, ...d]);
            let m = Te(ee.faceMinigame);
            a.addChild(m);
            let y = function(t) {
                for (let e = 0; e < l.length; e++) {
                    let t = l[e].sprite
                      , i = l[e].box;
                    t.rotation = i.angle,
                    t.x = i.position.x,
                    t.y = i.position.y
                }
                r.a && Matter.Body.setAngularVelocity(u.box, u.box.angularVelocity - .01 * Qe),
                r[" "] && null != Matter.Collision.collides(p, u.box) && Matter.Body.setVelocity(u.box, {
                    x: u.box.velocity.x,
                    y: u.box.velocity.y - 20
                }),
                r.d && Matter.Body.setAngularVelocity(u.box, u.box.angularVelocity + .01 * Qe),
                m.x = u.sprite.x,
                m.y = u.sprite.y,
                m.rotation = u.sprite.rotation,
                a.x = h.linear(a.x, -l[0].sprite.x, .05, Qe),
                e.tilePosition.x = a.x / 2,
                Matter.Engine.update(o, t * (1e3 / 60))
            };
            function g() {
                i = !i,
                f.changePause(i),
                i ? (t = -Date.now(),
                n.inGame = !1,
                c.ticker.remove(y),
                Fe.message("Game paused", $["Sprites/GameUI"][32], (function() {
                    g()
                }
                ), (function() {
                    Fe.blurPan(c.stage, (function() {
                        !function() {
                            f.destroyPause(),
                            Matter.World.clear(o.world),
                            Matter.Engine.clear(o);
                            for (let e = 0; e < l.length; e++)
                                l[e].sprite.destroy();
                            m.destroyAnimation(),
                            e.destroy()
                        }(),
                        Fe.gameList(),
                        Fe.results(0, 0, "what", "what")
                    }
                    ))
                }
                ), ["Play", "Home"], !1)) : (n.inGame = !0,
                c.ticker.add(y))
            }
            m.gotoAndStop(Math.floor(100 * Math.random())),
            u.sprite.visible = !1,
            c.ticker.add(y);
            let f = Fe.pauseButton((function() {
                g()
            }
            ), .4);
            c.stage.addChild(f),
            f.x = c.screen.width - 40,
            f.y = 40
        },
        cargame2: function() {
            let e = new PIXI.TilingSprite($["Sprites/RepeatingUI"][0]);
            c.stage.addChild(e),
            e.interactive = !0,
            e.x = 0,
            e.y = 0,
            e.width = c.screen.width,
            e.height = c.screen.height,
            e.clampMargin = 1;
            let t = 0
              , i = !1;
            window.onblur = function() {
                i || g()
            }
            ;
            let a = new PIXI.Container;
            c.stage.addChild(a),
            a.pivot.x = -c.screen.width / 2,
            a.pivot.y = -c.screen.height / 2;
            let o = Matter.Engine.create()
              , r = {}
              , s = !1;
            document.addEventListener("keydown", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"),
                "ArrowRight" == e.key && (t = "d"),
                "ArrowUp" == e.key && (t = " "),
                "w" == e.key && (t = " "),
                r[t] = !0,
                ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
            }
            )),
            document.addEventListener("keyup", (function(e) {
                let t = e.key.toLowerCase();
                "ArrowLeft" == e.key && (t = "a"),
                "ArrowRight" == e.key && (t = "d"),
                "ArrowUp" == e.key && (t = " "),
                "w" == e.key && (t = " "),
                r[t] = !1
            }
            )),
            document.addEventListener("pointerdown", (function() {
                s = !0
            }
            )),
            document.addEventListener("pointerup", (function() {
                s = !1
            }
            ));
            let l = []
              , d = []
              , u = {
                box: Matter.Bodies.rectangle(0, -400, 100, 100),
                sprite: function() {
                    let e = new PIXI.NineSlicePlane($.inputNineSlice[5],15,15,15,15);
                    return e.width = 100,
                    e.height = 100,
                    a.addChild(e),
                    e.pivot.x = 50,
                    e.pivot.y = 50,
                    e
                }()
            };
            l.push(u),
            d.push(u.box);
            for (let e = 0; e < 500; e++) {
                let t = {}
                  , i = .1 + Math.random() / 2
                  , n = Matter.Bodies.polygon(400 * (Math.random() - .5), -300 - 100 * e, 16, 48 * i);
                t.box = n;
                let o = new PIXI.Sprite($["Sprites/GameUI"][Math.round(6 * Math.random())]);
                o.scale.x = i,
                o.scale.y = i,
                o.anchor.set(.5, .5),
                a.addChild(o),
                t.sprite = o,
                l.push(t),
                d.push(n),
                t.sprite.tint = 16777215 * Math.random()
            }
            let p = Matter.Bodies.rectangle(0, 200, 16e3, 120, {
                isStatic: !0
            });
            Matter.Composite.add(o.world, [p, ...d]);
            let m = Te(ee.faceMinigame);
            a.addChild(m);
            let y = function(t) {
                for (let e = 0; e < l.length; e++) {
                    let t = l[e].sprite
                      , i = l[e].box;
                    t.rotation = i.angle,
                    t.x = i.position.x,
                    t.y = i.position.y
                }
                r.a && Matter.Body.setAngularVelocity(u.box, u.box.angularVelocity - .01 * Qe),
                r[" "] && null != Matter.Collision.collides(p, u.box) && Matter.Body.setVelocity(u.box, {
                    x: u.box.velocity.x,
                    y: u.box.velocity.y - 20
                }),
                r.d && Matter.Body.setAngularVelocity(u.box, u.box.angularVelocity + .01 * Qe),
                m.x = u.sprite.x,
                m.y = u.sprite.y,
                m.rotation = u.sprite.rotation,
                a.x = h.linear(a.x, -l[0].sprite.x, .05, Qe),
                e.tilePosition.x = a.x / 2,
                Matter.Engine.update(o, t * (1e3 / 60))
            };
            function g() {
                i = !i,
                f.changePause(i),
                i ? (t = -Date.now(),
                n.inGame = !1,
                c.ticker.remove(y),
                Fe.message("Game paused", $["Sprites/GameUI"][32], (function() {
                    g()
                }
                ), (function() {
                    Fe.blurPan(c.stage, (function() {
                        !function() {
                            f.destroyPause(),
                            Matter.World.clear(o.world),
                            Matter.Engine.clear(o);
                            for (let e = 0; e < l.length; e++)
                                l[e].sprite.destroy();
                            m.destroyAnimation(),
                            e.destroy()
                        }(),
                        Fe.gameList(),
                        Fe.results(0, 0, "what", "what")
                    }
                    ))
                }
                ), ["Play", "Home"], !1)) : (n.inGame = !0,
                c.ticker.add(y))
            }
            m.gotoAndStop(Math.floor(100 * Math.random())),
            u.sprite.visible = !1,
            c.ticker.add(y);
            let f = Fe.pauseButton((function() {
                g()
            }
            ), .4);
            c.stage.addChild(f),
            f.x = c.screen.width - 40,
            f.y = 40
        },
        crashHandler: function(e, t=-1) {
            let i = "Unknown";
            e.message.includes("(reading 'off')") && (i = "ERR_PIXI_DESTROYOBJECT"),
            e.message.includes("(reading 'stop')") && (i = "ERR_PIZZICATO_FAILURETOSTOPAUDIO"),
            e.message.includes("(reading 'buffer')") && (i = "ERR_PIZZICATO_AUDIOBUFFER"),
            e.message.includes("getRawSourceNode") && (i = "ERR_PIZZICATO_NOTLOADED"),
            e.message.includes("(setting 'x')") && (i = "ERR_FOODSYSTEM_FAILURETOSETPOSITION"),
            -1 != t && (i = t);
            const n = new PIXI.Application({
                background: "#000011",
                width: c.screen.width,
                height: c.screen.height,
                resolution: s * window.devicePixelRatio
            });
            document.body.appendChild(n.view);
            let r = new PIXI.Sprite($["Sprites/GameThumbnails"][4]);
            r.x = n.screen.width / 2,
            r.y = n.screen.height / 2 - 100,
            r.scale.x = .5,
            r.scale.y = .5,
            r.anchor.set(.5, .5),
            n.stage.addChild(r);
            let l = a(o.crashHandler.whoops, 16, "center");
            l.x = c.screen.width / 2,
            l.y = c.screen.height / 2 - 200,
            n.stage.addChild(l);
            let d = a(i, 16, "center");
            d.x = c.screen.width / 2,
            d.y = c.screen.height / 2 + 175,
            n.stage.addChild(d);
            let h = a(o.crashHandler.description, 16, "center");
            h.x = c.screen.width / 2,
            h.y = c.screen.height / 2 - 30,
            h.anchor.set(.5, 0),
            n.stage.addChild(h);
            let u = new M((function() {
                !function() {
                    d.destroy(),
                    h.destroy(),
                    u.destroy(),
                    p.destroy(),
                    m.destroy(),
                    n.destroy(!0);
                    for (let e in te)
                        te[e].volume = te[e].defaultVolume
                }()
            }
            ),c.screen.width / 2 - 80,c.screen.height / 2 + 100,150,30,o.ui.continue,0,.5,.5,1,"center");
            n.stage.addChild(u.element);
            let p = new M((function() {
                window.location = window.location,
                setTimeout((function() {
                    p.inputText.text = "Couldn't reload",
                    p.inputText.scale.set(.9, .9)
                }
                ), 100)
            }
            ),c.screen.width / 2 + 80,c.screen.height / 2 + 100,150,30,o.ui.reload,0,.5,.5,1,"center");
            n.stage.addChild(p.element);
            let m = new M((async function() {
                1 == await async function(e) {
                    try {
                        return await navigator.clipboard.writeText(e),
                        1
                    } catch (e) {
                        return 0
                    }
                }(JSON.stringify({
                    message: e.message,
                    lineno: e.lineno,
                    colno: e.colno
                })) && (m.inputText.text = "Copied",
                m.element.resetSize(),
                m.element.interactive = !1,
                m.element.texture = $.inputNineSlice[9])
            }
            ),c.screen.width / 2,c.screen.height / 2 + 100 + 40,310,30,o.crashHandler.copyErrorText,0,.5,.5,1,"center");
            n.stage.addChild(m.element);
            for (let e in te)
                te[e].defaultVolume = te[e].volume,
                te[e].volume = 0
        }
    };
    let _e, ze = "1.3", We = !0, je = !1, He = {
        costumes: {},
        foods: {}
    };
    PIXI.Assets.load("/discount.json?nocache=" + Date.now()).then((e => {
        He = e
    }
    )),
    PIXI.Assets.load("./latest.json?nocache=" + Date.now()).then((e => {
        e.latestVersion != ze && (je = !0,
        _e = e.latestVersion),
        We = !1
    }
    ));
    let Qe = 2;
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    window.addEventListener("error", (function(e) {
        setTimeout((function() {
            Fe.crashHandler(e)
        }
        ), 100)
    }
    ));
    let Ve = !1;
    function Ye() {
        Fe.setUpTints(),
        PIXI.settings.MIPMAP_TEXTURES = PIXI.MIPMAP_MODES.OFF,
        "ontouchstart"in document.documentElement && (c.touchScreen = !0,
        ontouchstart = function(e) {
            e.returnValue = !1
        }
        ,
        ontouchend = function(e) {
            e.returnValue = !1
        }
        ,
        ontouchmove = function(e) {
            e.returnValue = !1
        }
        ,
        ontouchcancel = function(e) {
            e.returnValue = !1
        }
        ),
        window.book = Fe.book,
        c.ticker.add((function() {
            Qe = c.ticker.deltaTime;
            for (let e in x) {
                let t = x[e];
                x[e].animate && (t.animationTime += Qe,
                t.scale.x = eases.easeOutBack(Math.min(24, t.animationTime), t.animationSize.x, t.destinationSize.x - t.animationSize.x, 24),
                t.scale.y = eases.easeOutBack(Math.min(24, t.animationTime), t.animationSize.y, t.destinationSize.y - t.animationSize.y, 24))
            }
        }
        )),
        Ve = !0;
        let e = function() {
            n.music && te.brittlerille.play(),
            te.brittlerille.volume = .5,
            te.brittlerille.pausing = !1,
            te.brittlerille.attack = 2,
            te.brittlerille.release = 3,
            te.brittlerille.on("end", (function() {
                n.music && te.brittlerille.play()
            }
            )),
            window.brittlerille = te.brittlerille
        };
        0 == te.brittlerille.loaded ? te.brittlerille.onloadAudio = function() {
            e()
        }
        : e(),
        window.setFps = function(e) {
            c.ticker.maxFPS = e
        }
        ,
        document.body.appendChild(c.view),
        Xe.blendMode = PIXI.BLEND_MODES.SUBTRACT,
        Xe.interactive = !0,
        Le.width = c.screen.width,
        Le.height = c.screen.height,
        Xe.width = c.screen.width,
        Xe.height = c.screen.height,
        Fe.myTeardrop();
        let t = "";
        onkeydown = function(e) {
            t += e.key,
            "bfdibfdiaidfbbfbtpot".includes(t.toLowerCase()) && t.toLowerCase().startsWith("b") ? "bfdibfdiaidfbbfbtpot" == t && (Fe.intro(),
            t = "") : t = ""
        }
        ,
        je && Fe.updateWarning(),
        n.lastLogin = Date.now(),
        W(),
        (Date.now() - n.gameStartDate) / 1e3 / 60 / 60 / 24 > .5 && !n.saveFileWarning && setTimeout((function() {
            n.saveFileWarning = !0,
            Fe.message("Your save file is over 2 days old now! Since this is a web game, there's a high chance of your browser removing the game data after 7 days of inactivity. To prevent this, regularly backup/download your save file!", -1, (function() {
                Fe.flash(!1, (function() {
                    Fe.settings()
                }
                ))
            }
            ), (function() {}
            ), ["Settings", "Ignore"])
        }
        ), 500),
        q.loadAttempts = 0,
        de()
    }
}
)();
