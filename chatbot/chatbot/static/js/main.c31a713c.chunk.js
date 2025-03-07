(this.webpackJsonpwiseichat_client = this.webpackJsonpwiseichat_client || []).push([
    [0], {
        166: function(e, t, s) {
            e.exports = s.p + "static/media/guide.75ac9e38.png"
        },
        167: function(e, t, s) {
            e.exports = s.p + "static/media/guide_en.b2cc5feb.png"
        },
        171: function(e, t, s) {
            e.exports = s(353)
        },
        331: function(e, t, s) {},
        332: function(e, t, s) {},
        333: function(e, t, s) {},
        353: function(e, t, s) {
            "use strict";
            s.r(t);
            s(172), s(244);
            var a = s(0),
                n = s.n(a),
                i = s(55),
                o = s.n(i),
                r = s(56),
                l = s(14),
                c = s(71),
                p = s(355),
                d = s(354);
            const h = "REQUEST",
                u = "SUCCESS",
                m = "FAILURE";

            function g(e) {
                return [h, u, m].reduce((t, s) => (t[s] = "".concat(e, "_").concat(s), t), {})
            }
            const E = g("GET_GREETING"),
                b = g("GET_CUSTOM_GREETING"),
                y = g("SEND_MESSAGE"),
                _ = g("PUSH_MESSAGE"),
                k = g("UPDATE_IS_GOOD"),
                v = g("GET_ARK"),
                x = g("GET_REALTIME_ANSWER"),
                S = g("GET_SETTING"),
                f = g("SET_SETTING"),
                C = g("WRITE_FEEDBACK"),
                N = g("GET_POLICY_CONTENT"),
                T = g("SAVE_POLICY_CONSENT");
            let I;
            I = {
                projectId: "26",
                channelCode: "DEFAULT",
                chatbotUrl: "/ichat_interface",
                getGreeting: "/message/greeting",
                sendQuestion: "/message/send",
                sendTrigger: "/message/trigger",
                sendPostback: "/message/postback",
                getPush: "/message/getPush",
                getCustom_greeting: "/message/greeting",
                getArk: "/ark",
                getRealtimeAnswer: "/realTimeAnswer.jsp",
                writeFeedback: "/feedback/write",
                logIn: "/login/login.jsp",
                logOut: "/ichat_interface/logout",
                userInfo: "/ichat_interface/user_info",
                requireAgreement: "/ichat_interface/requireAgreement",
                getSetting: "/setting/get",
                setSetting: "/setting/set",
                popWinTarget: "_blank",
                maxSetting: 5,
                privacyLink: "",
                useLogin: !1,
                timeout: 3e4,
                greeatingImg: "url(../chatbot/img/greeting.svg)",
                updateIsGood: "/message/updateIsGood",
                getPolicyContent: "/gpt_api/policyContent",
                savePolicyConsent: "/gpt_api/savePolicyConsent"
            };
            const L = {
                    outputs: [{
                        simpleText: {
                            text: "\uace0\ub824\ub300\ud559\uad50 \ucc57\ubd07\uc744 \uc774\uc6a9\ud558\ub824\uba74 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud574\uc694. \ud83d\ude03<br/><br/>\ub85c\uadf8\uc778 \ud6c4 \ub2e4\uc2dc \uc9c8\ubb38 \ud574 \uc904\ub798\uc694?",
                            buttons: [{
                                label: "\ub85c\uadf8\uc778 \ud558\uae30",
                                action: "webLink",
                                webLinkUrl: "",
                                target: "_self"
                            }]
                        }
                    }],
                    quickReplies: null
                },
                O = {
                    data: {
                        isLogin: !1,
                        useArk: !0,
                        menuPosition: "right",
                        greeting: [],
                        quickMenu: [{
                            isUse: "1",
                            id: 21,
                            label: "\ud559\uc0ac\uc77c\uc815",
                            utterance: "\ud559\uc0ac\uc77c\uc815 \uc54c\ub824\uc8fc\uc138\uc694."
                        }, {
                            isUse: "1",
                            id: 22,
                            label: "\uc154\ud2c0\ubc84\uc2a4",
                            utterance: "\uc154\ud2c0\ubc84\uc2a4 \uc774\uc6a9\uc5d0 \ub300\ud574 \uc548\ub0b4\ud574\uc8fc\uc138\uc694."
                        }, {
                            isUse: "0",
                            id: 23,
                            label: "\ucea0\ud37c\uc2a4\ub9f5",
                            utterance: "\uc6b0\uc1a1\ub300\ud559\uad50 \ucea0\ud37c\uc2a4\ub9f5 \ubcf4\uc5ec\uc8fc\uc138\uc694."
                        }, {
                            isUse: "0",
                            id: 24,
                            label: "\ud559\uc2dd\uba54\ub274",
                            utterance: "\uc2dd\ub2f9\uc5d0 \ub300\ud574 \uc54c\ub824\uc8fc\uc138\uc694."
                        }, {
                            isUse: "1",
                            id: 25,
                            label: "\uc7a5\ud559\uc77c\uc815",
                            utterance: "\uc7a5\ud559\uae08 \uc77c\uc815\uc5d0 \ub300\ud574 \uc54c\ub824\uc8fc\uc138\uc694."
                        }, {
                            isUse: "1",
                            id: 26,
                            label: "\uad50\ub0b4\uc5f0\ub77d\ucc98",
                            utterance: "\ubcf8\uad50 \ub300\ud45c \uc804\ud654\ubc88\ud638 \uc54c\ub824\uc8fc\uc138\uc694."
                        }, {
                            isUse: "1",
                            id: 27,
                            label: "\ub3c4\uc11c\uad00\uc774\uc6a9",
                            utterance: "\uc911\uc559\ub3c4\uc11c\uad00 \uc774\uc6a9\uc815\ubcf4\ub97c \uc54c\uace0 \uc2f6\uc5b4\uc694."
                        }],
                        theme: "",
                        state: {
                            code: 0,
                            detail: "SUCCESS"
                        }
                    }
                },
                w = {
                    outputs: [{
                        simpleText: {
                            text: "\uc557, \ucc57\ubd07 \uc11c\ube44\uc2a4 \uc810\uac80 \uc911\uc774\ub124\uc694\ud83d\ude22 \uc7a0\uc2dc \ud6c4\uc5d0 \ub2e4\uc2dc \uc9c8\ubb38\ud574\uc904\ub798\uc694?"
                        }
                    }],
                    quickReplies: null
                },
                j = {
                    outputs: [{
                        simpleText: {
                            text: "Oops, the chatbot service is currently undergoing maintenance\ud83d\ude22 Could you please try again later?"
                        }
                    }],
                    quickReplies: null
                },
                A = Object(d.a)(E.REQUEST),
                R = Object(d.a)(y.REQUEST),
                U = Object(d.a)(_.REQUEST),
                M = Object(d.a)("INIT_MESSAGE"),
                P = Object(d.a)(b.REQUEST),
                D = Object(d.a)("GET_ADMIS_GREETING"),
                G = Object(d.a)(k.REQUEST),
                F = new p.a,
                K = {
                    sessionKey: null,
                    channelId: null,
                    data: [],
                    isLogin: !1,
                    scenarioYn: "N",
                    dialogTaskId: null,
                    userName: null,
                    isLoading: !1,
                    isGreeting: !1,
                    init: !1,
                    clearTextbox: !1,
                    responseType: "ANSWER",
                    docId: null,
                    isGood: null
                };
            var q = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case "INIT_MESSAGE":
                        const s = t.payload.initData;
                        return { ...e,
                            sessionKey: t.payload.sessionKey,
                            data: s,
                            isLogin: !!F.get("ssotoken")
                        };
                    case E.REQUEST:
                        let a = void 0 != t.payload.first && !0 === t.payload.first;
                        if (void 0 === t.payload.utterance || "" === t.payload.utterance) return { ...e,
                            isLoading: a
                        }; {
                            const s = {
                                input: {
                                    utterance: t.payload.utterance
                                }
                            };
                            return { ...e,
                                isLoading: a,
                                data: [...e.data, s]
                            }
                        }
                    case E.SUCCESS:
                        return void 0 != t.payload.first && !0 === t.payload.first ? { ...e,
                            sessionKey: t.payload.response.data.data.sessionId,
                            channelId: t.payload.response.data.data.channelId,
                            data: [...e.data],
                            isLogin: !!F.get("ssotoken"),
                            userName: t.payload.response.data.data.userName,
                            isLoading: !1,
                            isGreeting: !0,
                            isPushMessage: !1,
                            init: !0
                        } : { ...e,
                            sessionKey: t.payload.response.data.data.sessionId,
                            channelId: t.payload.response.data.data.channelId,
                            data: [...e.data, t.payload.response.data.template],
                            isLogin: !!F.get("ssotoken"),
                            userName: t.payload.response.data.data.userName,
                            isLoading: !1,
                            isGreeting: !0,
                            isPushMessage: !1,
                            init: !0
                        };
                    case _.REQUEST:
                        return { ...e,
                            isLoading: !0
                        };
                    case _.SUCCESS:
                        return { ...e,
                            sessionKey: t.payload.response.data.data.sessionId,
                            data: [...e.data, t.payload.response.data.template],
                            isLogin: !!F.get("ssotoken"),
                            userName: t.payload.response.data.data.userName,
                            responseType: t.payload.response.data.data.responseType,
                            isLoading: !1,
                            isGreeting: !1,
                            isPushMessage: !0
                        };
                    case y.REQUEST:
                        const n = {
                            input: {
                                utterance: t.payload.utterance
                            }
                        };
                        return { ...e,
                            data: [...e.data, n],
                            isLoading: !0,
                            clearTextbox: !0
                        };
                    case y.SUCCESS:
                        t.payload.response.data.template.docId = t.payload.response.data.data.docId;
                        const i = { ...t.payload.response.data.template,
                            messageFromUser: t.payload.response.data.data.messageFromUser
                        };
                        return { ...e,
                            sessionKey: t.payload.response.data.data.sessionId,
                            data: [...e.data, i],
                            scenarioYn: t.payload.response.data.data.scenarioyn,
                            dialogTaskId: t.payload.response.data.data.dialogTaskId,
                            isLogin: !!F.get("ssotoken"),
                            isLoading: !1,
                            isGreeting: !1,
                            isPushMessage: !1,
                            clearTextbox: !1,
                            responseType: t.payload.response.data.data.responseType,
                            docId: t.payload.response.data.data.docId
                        };
                    case k.REQUEST:
                        return { ...e
                        };
                    case k.SUCCESS:
                        const o = e.data.map(e => e.docId === t.payload.response.data.data.docId ? { ...e,
                            isGood: t.payload.response.data.data.isGood
                        } : e);
                        return { ...e,
                            sessionKey: t.payload.response.data.data.sessionId,
                            data: o,
                            isLogin: !!F.get("ssotoken"),
                            userName: t.payload.response.data.data.userName,
                            responseType: t.payload.response.data.data.responseType,
                            isLoading: !1,
                            isGreeting: !1,
                            isPushMessage: !1
                        };
                    case b.REQUEST:
                        return { ...e
                        };
                    case b.SUCCESS:
                        return { ...e,
                            pharses: t.payload.response.data.template.outputs[0].text
                        };
                    case "GET_ADMIS_GREETING":
                        return { ...e,
                            data: [...e.data, {
                                admission_greet: !1
                            }]
                        };
                    default:
                        return e
                }
            };
            const B = {
                    text_00: "\ucfe0\ucc57(KUChat)",
                    text_01: "\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.",
                    text_02: "\uc124\uc815",
                    text_03: "\uba54\ub274 \uc704\uce58",
                    text_04: "\uceec\ub7ec\uc120\ud0dd",
                    text_05: "\uadf8\ub9ac\ud305\uba54\uc2dc\uc9c0\ub85c \ubc1b\uace0 \uc2f6\uc740 \uc815\ubcf4\ub97c ON \ud574\uc8fc\uc138\uc694!",
                    text_06: "\uadf8\ub9ac\ud305\uba54\uc2dc\uc9c0\ub294 \ucd5c\ub300 5\uac1c\uae4c\uc9c0 \uc124\uc815 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
                    text_07: "\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38",
                    text_08: "\uc9c8\ubb38\uc744 \uc785\ub825\ud558\uc138\uc694.",
                    text_09: "\uc790\ub3d9\uc644\uc131",
                    text_10: "\uc990\uaca8\ucc3e\ub294 \uc9c8\ubb38",
                    text_11: '\uc544\uc9c1 \uc990\uaca8\ucc3e\ub294 \uc9c8\ubb38\uc774 \uc5c6\ub124\uc694\ud83d\ude25<br/>\uace0\ub824\ub300\ud559\uad50 \ucc57\ubd07\uc5d0\uac8c \uc9c8\ubb38\uc744 \uc785\ub825\ud55c \ud6c4 \uc9c8\ubb38 \ub9d0\ud48d\uc120\uc758 <span className="ico_comm ico_bookmark">\ubd81\ub9c8\ud06c</span>\ub97c<br/> \ub204\ub974\uba74 \uc990\uaca8\ucc3e\ub294 \uc9c8\ubb38\uc73c\ub85c \ub4f1\ub85d\uc774 \uac00\ub2a5\ud574\uc694\ud83d\ude09',
                    text_12: "\uc990\uaca8\ucc3e\ub294 \uc9c8\ubb38 \ucd94\uac00",
                    text_13: "\uc704 \uc9c8\ubb38\uc744 \uc990\uaca8\ucc3e\ub294 \uc9c8\ubb38\uc73c\ub85c \ucd94\uac00\ud558\uc2e4\ub798\uc694?",
                    text_14: "\uc990\uaca8\ucc3e\ub294 \uc9c8\ubb38\uc740 \ucd1d 5\uac1c\uae4c\uc9c0\ub9cc<br/>\ub4f1\ub85d \uac00\ub2a5\ud574\uc694\ud83d\ude25<br/>\ub4f1\ub85d\ub41c \uc9c8\ubb38\uc744 \uc0ad\uc81c\ud55c \ud6c4<br/>\ub4f1\ub85d\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4!",
                    text_15: "\uc990\uaca8\ucc3e\ub294 \uc9c8\ubb38 \uc0ad\uc81c",
                    text_16: "\uc704 \uc9c8\ubb38\uc744 \uc990\uaca8\ucc3e\ub294 \uc9c8\ubb38\uc5d0\uc11c \uc0ad\uc81c\ud558\uc2e4\ub798\uc694?",
                    text_17: "\uace0\ub824\ub300\ud559\uad50 \ucc57\ubd07\uc758\uacac \uc81c\uc548",
                    text_18: "\uace0\ub824\ub300\ud559\uad50 \ucc57\ubd07\uc5d0 \ub300\ud55c \uc758\uacac\uc744 <br/> \uc81c\uc548\ud574\uc8fc\uc138\uc694\ud83d\ude00",
                    text_19: "\uc758\uacac \uc791\uc131",
                    text_20: "\ubd88\ud544\uc694\ud55c \uac1c\uc778\uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc9c0 \uc54a\ub3c4\ub85d \uc791\uc131 \uc2dc \uc720\uc758\ud574\uc8fc\uc138\uc694.",
                    text_21: "\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\ub97c \uc704\ud558\uc5ec \uc774\ub984, \uc774\uba54\uc77c \uc8fc\uc18c\uc640 \uac19\uc740 \uac1c\uc778\uc815\ubcf4\ub97c \ud3ec\ud568\ud558\uc9c0 \ub9c8\uc138\uc694.",
                    text_22: "\uc18c\uc911\ud55c \uc758\uacac\uc774 \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
                    text_23: "\ucfe0\ucc57(KUChat)",
                    text_24: "\ub85c\uadf8\uc778",
                    text_25: "\uc88c",
                    text_26: "\uc6b0",
                    text_27: "\ub85c\uadf8\uc544\uc6c3",
                    text_28: "\ub2d8",
                    text_29: "\ud655\uc778",
                    text_30: "\uc608",
                    text_31: "\uc544\ub2c8\uc624",
                    text_32: "\uadf8\ub9ac\ud305 \uba54\uc2dc\uc9c0 \uc124\uc815\uc740 \uc900\ube44\uc911\uc785\ub2c8\ub2e4.",
                    text_33: "\ucde8\uc18c\ud558\uae30",
                    text_34: "\ub354 \ub9ce\uc740 \uc815\ubcf4 \uc54c\uc544\ubcf4\uae30",
                    text_35: "\uc120\ud0dd",
                    text_36: "\ud035\uba54\ub274 \uc124\uc815\uc740 \uc900\ube44\uc911\uc785\ub2c8\ub2e4.",
                    text_37: "\ud035\uba54\ub274\ub294 \ucd5c\ub300 5\uac1c\uae4c\uc9c0 \uc124\uc815 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
                    text_38: "\uc774\uc6a9\ud301",
                    text_39: "\uadf8\ub9ac\ud305\uba54\uc138\uc9c0",
                    text_40: "\ud035\uba54\ub274",
                    text_41: "30\uc77c\uac04 \ub2e4\uc2dc \ubcf4\uc9c0 \uc54a\uae30",
                    text_42: "\ub2eb\uae30",
                    text_43: "KUPID",
                    text_44: "\uc548\ub155\ud558\uc138\uc694!",
                    text_45: "\uc758\uacac \ubcf4\ub0b4\uae30",
                    text_46: "\uc774 \ub2f5\ubcc0\uc774 \ub3c4\uc6c0\uc774 \ub418\uc5c8\ub098\uc694?",
                    text_47: "\uaddc\uc815 \uc548\ub0b4 \ucc57\ubd07(Beta)",
                    text_48: "\ub9cc\uc871\ub3c4 \uc870\uc0ac",
                    text_49: "\uac04\ub2e8\ud55c \uc758\uacac\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.(200\uc790 \uc81c\ud55c)",
                    text_50: "\ucc57\ubd07 \uc774\uc6a9 \uc57d\uad00 \ub3d9\uc758",
                    text_51: "\ucfe0\ucc57(KUChat)",
                    text_54: "\ucfe0\ucc57\uc774 \ub3c4\uc6c0\uc774 \ub418\uc5c8\ub098\uc694?<br />\uc0ac\uc6a9\uc131 \uac1c\uc120\uc744 \uc704\ud55c \uc758\uacac\uc744 \uc81c\uc548\ud574\uc8fc\uc138\uc694!",
                    text_55: "\uc88b\uc544\uc694",
                    text_56: "\ubd88\ud3b8\ud574\uc694",
                    text_57: "\ub2f5\ubcc0\uc5d0 \ub9cc\uc871\ud558\uc9c0 \ubabb\ud558\ub294 \uc774\uc720\ub97c \uc801\uc5b4\uc8fc\uc2dc\uba74 \ucfe0\ucc57\uc744 \uc774\uc6a9\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4!",
                    text_58: "\uace0\ub824\ub300\ud559\uad50 \ucc57\ubd07 \uac00\uc774\ub4dc",
                    text_59: "\uc758\uacac \uc811\uc218\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. <br/> \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4 \ubc14\ub78d\ub2c8\ub2e4."
                },
                Q = {
                    text_00: "KUChat",
                    text_01: "Log in before using.",
                    text_02: "Setting",
                    text_03: "Menu Position",
                    text_04: "Color Selection",
                    text_05: "Turn on the information you want to receive as a greeting message!",
                    text_06: "You can set up to 5 greeting messages.",
                    text_07: "Top questions",
                    text_08: "Please enter your questions.",
                    text_09: "Auto-completion",
                    text_10: "Favorite Questions",
                    text_11: 'No favorite questions yet\ud83d\ude25<br/>You can add a question to your favorites by entering a question to the Korea University chatbot and then clicking the <span className="ico_comm ico_bookmark">bookmark</span> on the question bubble\ud83d\ude09',
                    text_12: "Add Favorite Question",
                    text_13: "Would you like to add this question to your favorite questions?",
                    text_14: "You can only register up to 5 favorite questions\ud83d\ude25<br/>You need to delete a registered question to add a new one!",
                    text_15: "Delete Favorite Question",
                    text_16: "Would you like to remove this question from your favorite questions?",
                    text_17: "Suggest Feedback for Korea University Chatbot",
                    text_18: "Please provide your feedback on the Korea University chatbot\ud83d\ude00",
                    text_19: "Write a comment",
                    text_20: "Please be careful not to include unnecessary personal information.",
                    text_21: "For privacy protection, please do not include personal information such as names, email addresses, etc.",
                    text_22: "We have received valuable feedback.",
                    text_23: "KUChat",
                    text_24: "Log-in",
                    text_25: "Left",
                    text_26: "Right",
                    text_27: "Log-out",
                    text_28: "",
                    text_29: "Confirm",
                    text_30: "Yes",
                    text_31: "No",
                    text_32: "Greeting message settings are in preparation.",
                    text_33: "Cancel",
                    text_34: "Learn more information",
                    text_35: "Select",
                    text_36: "Quick menu settings are in preparation.",
                    text_37: "You can set up to 5 quick menus.",
                    text_38: "Guide",
                    text_39: "Greeting Messages",
                    text_40: "Quick Menu",
                    text_41: "Do not open for a month",
                    text_42: "Close",
                    text_43: "KUPID",
                    text_44: "Hello,",
                    text_45: "Send comment",
                    text_46: "Did this answer help you?",
                    text_47: "School Policies Guidance Chatbot(Beta)",
                    text_48: "Satisfaction survey",
                    text_49: "Please enter a brief comment (limit 200 characters).",
                    text_50: "Agree to chatbot terms of use",
                    text_51: "KUChat",
                    text_54: "Did KUCHAT help you?<br/>Please suggest any feedback for usability improvements!",
                    text_55: "Satisfied",
                    text_56: "Dissatisfied",
                    text_57: "If you could specify reasons for your dissatisfaction with the response, it would help improve KUCHAT!",
                    text_58: "Korea University Chatbot Guide",
                    text_59: "Error accepting comments. <br/> Please try again in a moment."
                },
                H = {
                    text_00: "Woosong Chat-bot",
                    text_01: "\u8bf7\u767b\u5f55\u540e\u4f7f\u7528",
                    text_02: "\u8bbe\u5b9a\u95ee\u5019\u4fe1\u606f",
                    text_03: "\u83dc\u5355\u4f4d\u7f6e",
                    text_04: "\u804a\u5929\u673a\u5668\u4eba\u4e3b\u9898",
                    text_05: "\u7528\u95ee\u5019\u4fe1\u606f\uff0c\u8bf7\u6253\u5f00\u60f3\u8981\u5f97\u5230\u7684\u4fe1\u606f\uff01",
                    text_06: "\u6700\u591a\u53ef\u8bbe\u5b9a5\u4e2a\u95ee\u5019\u4fe1\u606f\u3002",
                    text_07: "\u5b9e\u65f6TOP\u7b54\u590d",
                    text_08: "\u9700\u8981\u5e2e\u52a9\u5417\uff1f",
                    text_09: "\u81ea\u52a8\u5b8c\u6210\u529f\u80fd",
                    text_10: "\u6536\u85cf\u5939",
                    text_11: "\u8fd8\u6ca1\u6709\u559c\u6b22\u95ee\u7684\u95ee\u9898\ud83d\ude25<br/>\u5411Woosong Chat-bot\u8f93\u5165\u95ee\u9898\u540e\uff0c\u70b9\u51fb\u63d0\u95ee\u5bf9\u8bdd\u6846\u7684\u2606\u5c31\u53ef\u4ee5\u767b\u5f55\u4e3a\u559c\u6b22\u95ee\u7684\u95ee\u9898\u3002\ud83d\ude09",
                    text_12: "\u6dfb\u52a0\u5e38\u89c1\u95ee\u9898",
                    text_13: "\u4e0a\u9762\u95ee\u9898\u8981\u6dfb\u52a0\u5230\u5e38\u89c1\u95ee\u9898\u4e2d\u5417\uff1f",
                    text_14: "\u5e38\u89c1\u95ee\u9898\u6700\u591a\u53ef\u4ee5\u6ce8\u518c5\u4e2a\ud83d\ude25<br/>\u5220\u9664\u5df2\u6ce8\u518c\u7684\u95ee\u9898\u540e\u5373\u53ef\u6ce8\u518c\uff01",
                    text_15: "\u5e38\u89c1\u95ee\u9898\u5220\u9664",
                    text_16: "\u60f3\u4ece\u5e38\u89c1\u95ee\u9898\u4e2d\u5220\u9664\u4e0a\u9762\u7684\u95ee\u9898\u5417\uff1f",
                    text_17: "\u804a\u5929\u673a\u5668\u4eba\u610f\u89c1\u4e0e\u5efa\u8bae",
                    text_18: "\u8bf7\u7ed9\u6211\u4e00\u4e9b\u5173\u4e8e\u804a\u5929\u673a\u5668\u4eba\u7684\u5efa\u8bae\ud83d\ude00",
                    text_19: "\u586b\u5199\u5b9d\u8d35\u7684\u610f\u89c1",
                    text_20: "\u586b\u5199\u65f6\u8bf7\u6ce8\u610f\uff0c\u4e0d\u8981\u5305\u542b\u4e0d\u5fc5\u8981\u7684\u4e2a\u4eba\u4fe1\u606f\u3002",
                    text_21: "\u8bf7\u4e3a\u6240\u586b\u5199\u7684\u95ee\u9898\u8f93\u5165\u9002\u5408\u7684\u7b54\u6848\u3002\uff08\u5b57\u6570\u9650\u52361000\u5b57\uff09",
                    text_22: "\u6536\u5230\u60a8\u5b9d\u8d35\u7684\u610f\u89c1\u3002",
                    text_23: "Woosong Chat-bot",
                    text_24: "\u767b\u5f55",
                    text_25: "\u5de6",
                    text_26: "\u53f3",
                    text_27: "\u767b\u51fa",
                    text_28: "",
                    text_29: "\u786e\u8ba4",
                    text_30: "\u662f\u7684",
                    text_31: "\u4e0d",
                    text_32: "\u95ee\u5019\u8bed\u8bbe\u7f6e\u5c1a\u4e0d\u53ef\u7528\u3002",
                    text_33: "\u53d1\u9001",
                    text_34: "\u4e86\u89e3\u66f4\u591a\u4fe1\u606f",
                    text_35: "\u9009\u62e9"
                },
                W = Object(d.a)("OPEN_SIDEMENU"),
                Y = Object(d.a)("CLOSE_SIDEMENU"),
                z = Object(d.a)("OPEN_SETTING"),
                V = Object(d.a)("CLOSE_SETTING"),
                J = Object(d.a)("OPEN_FEEDBACK"),
                X = Object(d.a)("CLOSE_OPEN_FEEDBACK"),
                $ = Object(d.a)("OPEN_AGREE_CONTENT"),
                Z = Object(d.a)("CLOSE_AGREE_CONTENT"),
                ee = Object(d.a)("OPEN_LOGIN_ALERT"),
                te = Object(d.a)("CLOSE_LOGIN_ALERT"),
                se = Object(d.a)("CLICK_OVERLAY"),
                ae = Object(d.a)("TOGGLE_OVERLAY"),
                ne = Object(d.a)("OPEN_SATISFACTION_SURVEY"),
                ie = Object(d.a)("CLOSE_SATISFACTION_SURVEY"),
                oe = Object(d.a)("TOGGLE_FAVORITES"),
                re = Object(d.a)("OPEN_FAVORITE_ALERT"),
                le = Object(d.a)("CLOSE_FAVORITE_ALERT"),
                ce = Object(d.a)("SET_UI_TEXTS"),
                pe = Object(d.a)("SHOW_REALTIME_ANSWER"),
                de = Object(d.a)("TOGGLE_USETIP"),
                he = {
                    clickSideMenu: !1,
                    clickLogin: !1,
                    clickSetting: !1,
                    clickFeedback: !1,
                    clickAgreeContent: !1,
                    clickLoginAlert: !1,
                    clickSatisfactionSurvey: !1,
                    overLayShow: !1,
                    overLayzIndex: 100,
                    showRealtimeAnswer: !0,
                    showFavorites: !1,
                    showFavoriteAlert: !1,
                    favoriteAction: "add",
                    tempUtterance: "",
                    texts: B,
                    useTip: !0
                };
            var ue = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case "TOGGLE_USETIP":
                        return { ...e,
                            useTip: !0 !== e.useTip
                        };
                    case "SET_UI_TEXTS":
                        return { ...e,
                            texts: t.payload
                        };
                    case y.REQUEST:
                        return { ...e,
                            isLoading: !0
                        };
                    case y.SUCCESS:
                        return { ...e,
                            isLoading: !1
                        };
                    case "OPEN_SIDEMENU":
                        return { ...e,
                            clickSideMenu: !0,
                            overLayShow: !0,
                            overLayzIndex: 100
                        };
                    case "CLOSE_SIDEMENU":
                        return { ...e,
                            clickSideMenu: !1,
                            overLayShow: !1
                        };
                    case "OPEN_SETTING":
                        return { ...e,
                            clickSideMenu: !1,
                            clickSetting: !0,
                            overLayShow: !0,
                            overLayzIndex: 100
                        };
                    case "CLOSE_SETTING":
                        return { ...e,
                            clickSetting: !1,
                            overLayShow: !1
                        };
                    case "OPEN_FEEDBACK":
                        return { ...e,
                            clickFeedback: !0,
                            overLayShow: !0,
                            overLayzIndex: 100
                        };
                    case "CLOSE_OPEN_FEEDBACK":
                        return { ...e,
                            clickFeedback: !1,
                            overLayShow: !1
                        };
                    case "OPEN_AGREE_CONTENT":
                        return { ...e,
                            clickAgreeContent: !0,
                            overLayzIndex: 102
                        };
                    case "CLOSE_AGREE_CONTENT":
                        return { ...e,
                            clickAgreeContent: !1,
                            overLayzIndex: 100
                        };
                    case "OPEN_LOGIN_ALERT":
                        return { ...e,
                            clickLoginAlert: !0,
                            overLayzIndex: 102
                        };
                    case "CLOSE_LOGIN_ALERT":
                        return { ...e,
                            clickLoginAlert: !1,
                            overLayzIndex: 100
                        };
                    case "OPEN_SATISFACTION_SURVEY":
                        return { ...e,
                            clickSatisfactionSurvey: !0,
                            overLayShow: !0,
                            overLayzIndex: 100
                        };
                    case "CLOSE_SATISFACTION_SURVEY":
                        return { ...e,
                            clickSatisfactionSurvey: !1,
                            overLayShow: !1
                        };
                    case "CLICK_OVERLAY":
                        return { ...e,
                            overLayShow: !1,
                            clickLoginAlert: !1,
                            clickSetting: !1,
                            clickSideMenu: !1,
                            clickFeedback: !1,
                            clickAgreeContent: !1,
                            overLayzIndex: 100
                        };
                    case "TOGGLE_OVERLAY":
                        let s = 100;
                        !0 === t.payload.toggle && (s = 102);
                        let a = { ...e,
                            overLayShow: !0,
                            overLayzIndex: s
                        };
                        return !0 === t.payload.closeAll && (a = { ...e,
                            overLayShow: !1,
                            clickLoginAlert: !1,
                            clickSetting: !1,
                            clickSideMenu: !1,
                            clickFeedback: !1,
                            clickAgreeContent: !1,
                            overLayzIndex: 100
                        }), a;
                    case "TOGGLE_FAVORITES":
                        return { ...e,
                            showFavorites: !0 !== e.showFavorites
                        };
                    case "OPEN_FAVORITE_ALERT":
                        return { ...e,
                            showFavoriteAlert: !0,
                            favoriteAction: t.payload.action,
                            tempUtterance: t.payload.utterance
                        };
                    case "CLOSE_FAVORITE_ALERT":
                        return { ...e,
                            showFavoriteAlert: !1
                        };
                    case "SHOW_REALTIME_ANSWER":
                        return { ...e,
                            showRealtimeAnswer: t.payload
                        };
                    default:
                        return e
                }
            };
            const me = Object(d.a)(v.REQUEST),
                ge = Object(d.a)("INIT_ARK"),
                Ee = {};
            var be = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ee,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case v.REQUEST:
                            return { ...e,
                                query: t.payload.value
                            };
                        case v.SUCCESS:
                            return { ...e,
                                data: t.payload.response.data
                            };
                        case y.REQUEST:
                        case "INIT_ARK":
                            return {
                                data: null,
                                query: e.query
                            };
                        default:
                            return e
                    }
                },
                ye = s(110),
                _e = s.n(ye);
            const ke = Object(d.a)(S.REQUEST),
                ve = Object(d.a)(f.REQUEST),
                xe = Object(d.a)("USE_ARK"),
                Se = Object(d.a)("MENU_POSITION"),
                fe = Object(d.a)("TOGGLE_GREETING"),
                Ce = Object(d.a)("TOGGLE_QUICKMENU"),
                Ne = Object(d.a)("SET_FAVORITE"),
                Te = Object(d.a)("SET_THEME"),
                Ie = {};
            var Le = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case S.SUCCESS:
                        return e = t.payload.response.data, { ...e
                        };
                    case "USE_ARK":
                        return { ...e,
                            useArk: t.payload
                        };
                    case "SET_THEME":
                        return e.theme = "" !== t.payload ? t.payload : "", { ...e,
                            theme: "" !== t.payload ? t.payload : ""
                        };
                    case "MENU_POSITION":
                        return { ...e,
                            menuPosition: t.payload
                        };
                    case "TOGGLE_GREETING":
                        return { ...e,
                            greeting: _e()(e.greeting, {
                                [t.payload.target.value]: {
                                    isUse: {
                                        $set: "btn_control" === t.payload.target.className ? "1" : "0"
                                    }
                                }
                            })
                        };
                    case "SET_FAVORITE":
                        let s;
                        return "add" === t.payload.action && (null === e.favorite && (e.favorite = []), s = -1 === e.favorite.indexOf(t.payload.value) ? [...e.favorite, t.payload.value] : e.favorite), "del" === t.payload.action && (s = e.favorite.filter(e => e !== t.payload.value)), { ...e,
                            favorite: s
                        };
                    case "TOGGLE_QUICKMENU":
                        return { ...e,
                            quickMenu: _e()(e.quickMenu, {
                                [t.payload.target.value]: {
                                    isUse: {
                                        $set: "btn_control" === t.payload.target.className ? "1" : "0"
                                    }
                                }
                            })
                        };
                    default:
                        return e
                }
            };
            const Oe = Object(d.a)(C.REQUEST),
                we = Object(d.a)("CLEAR_FEEDBACK_ALERT"),
                je = {
                    alertMessage: ""
                };
            var Ae = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : je,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case C.REQUEST:
                        return t.payload;
                    case C.SUCCESS:
                        const {
                            successMsg: s,
                            failureMsg: a
                        } = JSON.parse(t.payload.response.config.data);
                        let n = a;
                        return 0 === t.payload.response.data.code && (n = s), {
                            alertMessage: n
                        };
                    case C.FAILURE:
                        return t.payload.error;
                    case "CLEAR_FEEDBACK_ALERT":
                        return {
                            alertMessage: ""
                        };
                    default:
                        return e
                }
            };
            const Re = Object(d.a)(x.REQUEST),
                Ue = {};
            var Me = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case x.REQUEST:
                        return { ...e
                        };
                    case x.SUCCESS:
                        return t.payload.response.data;
                    default:
                        return e
                }
            };
            const Pe = Object(d.a)("SET_PROJECT"),
                De = Object(d.a)("SET_LANG"),
                Ge = Object(d.a)("SET_IS_DEV"),
                Fe = {
                    projectId: I.projectId,
                    language: "kr",
                    isDev: !1
                };
            var Ke = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case "SET_PROJECT":
                        return { ...e,
                            projectId: t.payload
                        };
                    case "SET_LANG":
                        return { ...e,
                            language: t.payload
                        };
                    case "SET_IS_DEV":
                        return { ...e,
                            isDev: t.payload
                        };
                    default:
                        return e
                }
            };
            const qe = Object(d.a)(N.REQUEST),
                Be = Object(d.a)(T.REQUEST),
                Qe = {
                    content: ""
                };
            var He = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qe,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case N.REQUEST:
                        return t.payload;
                    case N.SUCCESS:
                        return {
                            content: t.payload.response.data.content.consentContent
                        };
                    default:
                        return e
                }
            };
            class We extends a.PureComponent {
                constructor(e) {
                    super(e), this.handleClickSideMenu = this.handleClickSideMenu.bind(this), this.handleClickFeedback = this.handleClickFeedback.bind(this), this.handleClickTip = this.handleClickTip.bind(this), this.state = {
                        lang_is_active: !1
                    }
                }
                handleClickSideMenu() {
                    this.props.openSideMenu()
                }
                handleClickFeedback() {
                    !1 !== this.props.init && (this.props.isLogin ? this.props.openFeedback() : (this.props.controlOverlay({
                        toggle: !0,
                        closeAll: !1
                    }), this.props.loginAlert()))
                }
                clickChatbotClose() {
                    try {
                        window.closeChatbot()
                    } catch (e) {
                        console.error(e)
                    }
                }
                settingLang(e) {
                    this.props.setLang(e), this.toggleSelect()
                }
                toggleSelect() {
                    this.state.lang_is_active ? (this.setState({
                        lang_is_active: !1
                    }), this.langSelect.className = "btn_language") : (this.setState({
                        lang_is_active: !0
                    }), this.langSelect.className = "btn_language is_active")
                }
                handleClickTip() {
                    this.props.openUseTip()
                }
                render() {
                    return n.a.createElement("div", {
                        className: "chat_header",
                        onClick: () => {
                            this.props.toggleRealtimeAnswer(!0)
                        }
                    }, n.a.createElement("div", {
                        className: "language_box"
                    }, n.a.createElement("button", {
                        type: "button",
                        className: "btn_language",
                        "aria-label": "kr" === this.props.lang ? "\uc5b8\uc5b4 \uc120\ud0dd \ucc3d \uc5f4\uae30" : "Open language selection window",
                        onClick: () => {
                            this.toggleSelect()
                        },
                        ref: e => {
                            this.langSelect = e
                        }
                    }, "KR/EN"), n.a.createElement("div", {
                        className: "language_inner_box"
                    }, n.a.createElement("h2", {
                        className: "screen_out"
                    }, "\uc5b8\uc5b4\uc120\ud0dd"), n.a.createElement("ul", {
                        className: "language_list"
                    }, ["kr", "en"].map(e => n.a.createElement("li", {
                        className: "language_item ".concat(this.props.lang === e ? "is_selected" : ""),
                        key: e
                    }, n.a.createElement("a", {
                        href: "./index.html?projectId=".concat("kr" === e ? 26 : 25, "&lang=").concat(e),
                        className: "language_link",
                        "aria-label": "kr" === this.props.lang ? "\uc5b8\uc5b4 \uc120\ud0dd: ".concat("kr" === e ? "\ud55c\uad6d\uc5b4" : "\uc601\uc5b4") : "Language selection: ".concat("kr" === e ? "Korean" : "English")
                    }, e.toUpperCase())))))), n.a.createElement("div", {
                        className: "h_tit"
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_bot_logo",
                        style: {
                            backgroundImage: I.logoImg
                        }
                    }), n.a.createElement("span", {
                        className: "logo_txt"
                    }, this.props.uiTexts.text_51)), n.a.createElement("div", {
                        className: "btn_unit"
                    }, n.a.createElement("button", {
                        type: "button",
                        className: "menu_btn btn_menu",
                        onClick: this.handleClickSideMenu
                    }, n.a.createElement("span", {
                        className: "c1" !== this.props.theme ? "ico_comm ico_menu" : "ico_comm ico_menu1"
                    }, "\uba54\ub274\ubcf4\uae30"))))
                }
            }
            var Ye = We;
            class ze extends a.PureComponent {
                constructor(e) {
                    super(e), this.focusIndex = -1, this.handleChange = this.handleChange.bind(this), this.handleKeyPress = this.handleKeyPress.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), window.recodeSend = this.sttSend.bind(this)
                }
                componentDidUpdate() {
                    !0 === this.props.clearTextbox && (this.input.value = "")
                }
                handleChange(e) {
                    this.props.useArk && (this.props.getArk({
                        value: e.target.value,
                        isDev: this.props.config.isDev,
                        projectId: this.props.config.projectId
                    }), this.focusIndex = -1)
                }
                handleKeyPress(e) {
                    13 === e.charCode && this.send()
                }
                handleKeyDown(e) {
                    if (38 === e.keyCode || 40 === e.keyCode) {
                        let t = document.getElementsByClassName("qna_link");
                        0 === t.length ? this.focusIndex = -1 : (-1 === this.focusIndex && 38 === e.keyCode ? this.focusIndex = 0 : 38 === e.keyCode ? (this.focusIndex = this.focusIndex - 1, this.focusIndex < 0 && (this.focusIndex = 0)) : 40 === e.keyCode && (this.focusIndex = this.focusIndex + 1, this.focusIndex === t.length && (this.focusIndex = t.length - 1)), t[this.focusIndex].focus())
                    }
                }
                send() {
                    if (this.input.value.trim().length > 0) {
                        let e = {
                            utterance: this.input.value,
                            sessionKey: this.props.sessionKey,
                            channelId: this.props.channelId,
                            isLogin: this.props.isLogin,
                            isDev: this.props.config.isDev,
                            blockId: "INPUT" === this.props.responseType ? this.props.blockId : "",
                            blockName: "INPUT" === this.props.responseType ? "INPUT" : "",
                            projectId: this.props.config.projectId
                        };
                        this.props.send(e)
                    }
                }
                reload() {
                    this.props.reload()
                }
                sttSend(e) {
                    if (e.value.trim().length > 0) {
                        let t = {
                            utterance: e.value,
                            sessionKey: this.props.sessionKey,
                            channelId: this.props.channelId,
                            isLogin: this.props.isLogin,
                            isDev: this.props.config.isDev,
                            blockId: "INPUT" === this.props.responseType ? this.props.blockId : "",
                            blockName: "INPUT" === this.props.responseType ? "INPUT" : "",
                            projectId: this.props.config.projectId
                        };
                        this.props.send(t)
                    }
                }
                openSTT() {
                    try {
                        window.requestRecord()
                    } catch (e) {
                        console.error(e)
                    }
                }
                render() {
                    return n.a.createElement("div", {
                        className: "chat_bottom"
                    }, n.a.createElement("div", {
                        className: "chat_bottom_inner"
                    }, n.a.createElement(Xe, {
                        settingArk: this.props.settingArk,
                        useArk: this.props.useArk,
                        data: this.props.arkData,
                        sessionKey: this.props.sessionKey,
                        channelId: this.props.channelId,
                        isLogin: this.props.isLogin,
                        config: this.props.config,
                        send: this.props.send,
                        uiTexts: this.props.uiTexts,
                        focusControl: this.handleKeyDown,
                        toggleRealtimeAnswer: this.props.toggleRealtimeAnswer
                    }), n.a.createElement("div", {
                        className: "inp_box"
                    }, n.a.createElement("div", {
                        className: "inp_refresh"
                    }, n.a.createElement("button", {
                        type: "button",
                        className: "btn_refresh",
                        onClick: () => this.reload()
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_refresh"
                    }, "\uc0c8\ub85c\uace0\uce68"))), n.a.createElement("div", {
                        className: "inp_txt"
                    }, n.a.createElement("label", {
                        htmlFor: "inquery",
                        className: "screen_out"
                    }, "\ubb38\uc758\ub0b4\uc6a9"), n.a.createElement("input", {
                        type: "text",
                        className: "inp",
                        id: "inquery",
                        placeholder: this.props.uiTexts.text_08,
                        title: "\uc9c8\ubb38\uc785\ub825",
                        autoComplete: "off",
                        value: this.props.value,
                        onChange: this.handleChange,
                        onKeyPress: this.handleKeyPress,
                        onKeyDown: this.handleKeyDown,
                        onFocus: () => this.props.toggleRealtimeAnswer(!1),
                        ref: e => {
                            this.input = e
                        }
                    }), n.a.createElement("button", {
                        type: "button",
                        className: "btn_send",
                        id: "img_btn",
                        onClick: () => this.send()
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_send"
                    }, "\ubb38\uc758 \ub0b4\uc6a9 \uc804\uc1a1"))))))
                }
            }
            var Ve = ze;
            class Je extends a.Component {
                constructor(e) {
                    super(e), this.state = {
                        renderArkResults: !0
                    }, this.handleClickHeaderOrContainer = this.handleClickHeaderOrContainer.bind(this), this.handleClickBottom = this.handleClickBottom.bind(this)
                }
                componentDidMount() {
                    document.querySelector(".chat_header").addEventListener("click", this.handleClickHeaderOrContainer), document.querySelector(".chat_container").addEventListener("click", this.handleClickHeaderOrContainer), document.querySelector(".chat_bottom").addEventListener("click", this.handleClickBottom)
                }
                componentWillUnmount() {
                    document.querySelector(".chat_header").removeEventListener("click", this.handleClickHeaderOrContainer), document.querySelector(".chat_container").removeEventListener("click", this.handleClickHeaderOrContainer), document.querySelector(".chat_bottom").removeEventListener("click", this.handleClickBottom)
                }
                handleClickHeaderOrContainer() {
                    this.setState({
                        renderArkResults: !1
                    })
                }
                handleClickBottom() {
                    this.setState({
                        renderArkResults: !0
                    })
                }
                send(e) {
                    let t = {
                        utterance: e,
                        sessionKey: this.props.sessionKey,
                        channelId: this.props.channelId,
                        isLogin: this.props.isLogin,
                        isDev: this.props.config.isDev,
                        projectId: this.props.config.projectId
                    };
                    this.props.send(t)
                }
                convertHL(e) {
                    let t = e;
                    return t.indexOf("<!HS>") > -1 && (t = e.split("<!HS>").map((e, t) => e.indexOf("<!HE>") > -1 ? e.split("<!HE>").map((e, t) => 0 === t ? n.a.createElement("mark", {
                        className: "search_keyword",
                        key: t
                    }, e) : n.a.createElement("mark", {
                        key: t
                    }, e)) : n.a.createElement("mark", {
                        key: t
                    }, e))), t
                }
                settingArk(e) {
                    this.props.settingArk(e)
                }
                focusControl(e) {
                    this.props.focusControl(e)
                }
                componentDidUpdate(e, t) {
                    this.props.data !== e.data && void 0 !== this.props.data && null !== this.props.data && this.props.toggleRealtimeAnswer(!1), this.updateChatContainerBottom()
                }
                updateChatContainerBottom() {
                    const e = document.querySelector(".chat_container"),
                        t = document.querySelector(".qna_list").children.length;
                    e.style.bottom = t >= 3 ? "182px" : 2 === t ? "144px" : 1 === t ? "106px" : "68px"
                }
                render() {
                    const e = {
                        display: "block"
                    };
                    return n.a.createElement("div", {
                        className: "ly_box_bottom auto",
                        style: e
                    }, n.a.createElement("div", {
                        className: "auto_box",
                        style: e
                    }, n.a.createElement("ul", {
                        className: "qna_list"
                    }, void 0 !== this.props.data && null !== this.props.data && this.state.renderArkResults && this.props.data.map((t, s) => n.a.createElement("li", {
                        className: "qna_item",
                        style: e,
                        key: s
                    }, n.a.createElement("button", {
                        onClick: () => this.send(t.text),
                        className: "qna_link",
                        style: e,
                        key: s,
                        onKeyDown: e => this.focusControl(e)
                    }, this.convertHL(t.modified)))))))
                }
            }
            var Xe = Je;

            function $e(e) {
                let t = e;
                if (e.indexOf("||") > 0) {
                    t = e.split("||")[0]
                }
                return t
            }

            function Ze() {
                const e = new Date;
                let t = e.getHours(),
                    s = e.getMinutes(),
                    a = "\uc624\uc804";
                return t > 11 && (a = "\uc624\ud6c4", t > 12 && (t -= 12)), s < 10 && (s = "0" + s), a + " " + t + ":" + s
            }

            function et() {
                const e = new Date;
                let t = e.getHours(),
                    s = e.getMinutes(),
                    a = "AM";
                return t > 11 && (a = "PM", t > 12 && (t -= 12)), s < 10 && (s = "0" + s), t + ":" + s + " " + a
            }

            function tt(e) {
                if (void 0 === e || null === e) return e;
                let t = e.replace(/(?:\r\n|\r|\n)/g, "<br />");
                return t = t.replace(/(?:\\r\\n|\\r|\\n)/g, "<br />"), t
            }

            function st(e) {
                if (!e) return null;
                const t = e.split("\n");
                return 0 === t.length ? e : t.map((e, t) => n.a.createElement("span", {
                    key: t
                }, e, n.a.createElement("br")))
            }

            function at(e, t, s) {
                if (s) {
                    let t = "link";
                    e.indexOf(".pdf") > -1 && (t = "file"), window.openUrl(t, e)
                } else if ("_self" === t) document.location.href = e;
                else {
                    window.open(e, t).focus()
                }
            }
            class nt extends a.PureComponent {
                render() {
                    return n.a.createElement("div", {
                        className: "user_wrap"
                    }, n.a.createElement("div", {
                        className: "user_box"
                    }, n.a.createElement("div", {
                        className: "user_txt image",
                        "aria-hidden": "true"
                    }), n.a.createElement("div", {
                        className: "user_txt"
                    }, n.a.createElement("span", {
                        className: "sr-only"
                    }, "\uc0ac\uc6a9\uc790: "), this.props.data.utterance), n.a.createElement("span", {
                        className: "time user"
                    }, "en" != this.props.lang ? Ze() : et())))
                }
            }
            var it = nt;
            class ot extends a.PureComponent {
                constructor(e) {
                    super(e), this.state = {
                        isMportalOpen: !1,
                        isEportalOpen: !1
                    }
                }
                linkMessage(e) {
                    let t = {
                        utterance: e,
                        sessionKey: this.props.message.sessionKey,
                        channelId: this.props.message.channelId,
                        isLogin: this.props.message.isLogin,
                        isDev: this.props.config.isDev,
                        blockId: "",
                        projectId: this.props.config.projectId
                    };
                    this.props.send(t)
                }
                linkBlockId(e, t) {
                    let s = {
                        utterance: t,
                        sessionKey: this.props.message.sessionKey,
                        channelId: this.props.message.channelId,
                        isLogin: this.props.message.isLogin,
                        isDev: this.props.config.isDev,
                        blockId: e,
                        projectId: this.props.config.projectId
                    };
                    this.props.send(s)
                }
                linkPhone(e) {
                    this.props.fromApp ? window.openUrl("tel", "tel:" + e) : document.location.href = "tel:" + e
                }
                clickProject(e, t) {
                    var s = JSON.parse(JSON.stringify(this.props));
                    this.props.config.projectId !== e && (s.message.sessionKey = void 0), s.projectId = e, s.utterance = t, this.props.setProject(e), this.props.get(s)
                }
                clickWebLink(e, t) {
                    let s = t;
                    void 0 !== s && "" !== s || (s = I.popWinTarget), at("https://search.korea.ac.kr/search/front/Search.jsp" === e ? e + "#gsc.tab=0&gsc.q=" + this.props.messageFromUser + "&gsc.sort=" : e, s, this.props.fromApp)
                }
                render() {
                    let e = "";
                    return null !== this.props.data && void 0 !== this.props.data && "" !== this.props.data && this.props.data.length > 0 && (e = this.props.data.map((e, t) => "webLink" === e.action ? n.a.createElement("a", {
                        href: "#none",
                        title: "kr" === this.props.config.language ? "".concat(e.label, " (\uc0c8 \ucc3d\uc5d0\uc11c \uc5f4\ub9bc)") : "".concat(e.label, " (opens in a new window)"),
                        className: "btn_link",
                        onClick: () => this.clickWebLink($e(e.webLinkUrl), e.target),
                        key: t,
                        "aria-label": "kr" === this.props.config.language ? "".concat(e.label, " (\uc0c8 \ucc3d\uc5d0\uc11c \uc5f4\ub9bc)") : "".concat(e.label, " (opens in a new window)")
                    }, e.label) : "message" === e.action ? n.a.createElement("a", {
                        href: "#none",
                        className: "btn_link",
                        onClick: () => {
                            this.linkMessage(e.messageText)
                        },
                        key: t,
                        "aria-label": e.label,
                        draggable: "false"
                    }, e.label) : "phone" === e.action ? n.a.createElement("a", {
                        href: "#none",
                        title: "kr" === this.props.config.language ? "".concat(e.label, " (\uc804\ud654 \uac78\uae30)") : "".concat(e.label, " (make a call)"),
                        className: "btn_link",
                        onClick: () => {
                            this.linkPhone(e.phoneNumber)
                        },
                        key: t,
                        "aria-label": "kr" === this.props.config.language ? "".concat(e.label, " (\uc804\ud654 \uac78\uae30)") : "".concat(e.label, " (make a call)"),
                        draggable: "false"
                    }, e.label) : "projectChange" === e.action ? n.a.createElement("a", {
                        className: "btn_link",
                        href: "#none",
                        onClick: () => {
                            this.clickProject(e.targetProjectId, e.label)
                        },
                        key: t
                    }, e.label) : "block" === e.action && n.a.createElement("a", {
                        className: "btn_link",
                        href: "#none",
                        onClick: () => {
                            this.linkBlockId(e.blockId, e.label)
                        },
                        key: t
                    }, e.label))), n.a.createElement("div", {
                        className: "btn_group"
                    }, e)
                }
            }
            var rt = Object(l.b)((function(e) {
                return { ...e
                }
            }), (function(e) {
                return {
                    send: t => e(R(t)),
                    setProject: t => e(Pe(t)),
                    get: t => e(A(t))
                }
            }))(ot);
            class lt extends a.PureComponent {
                constructor(e) {
                    super(e), this.state = {
                        thumbnailURL: this.getThumbnail()
                    }
                }
                makeThumbnail() {
                    let {
                        thumbnail: e
                    } = this.props.data, t = "";
                    return void 0 !== e && null !== e && void 0 !== e.imageUrl && null !== e.imageUrl && (t = {
                        backgroundImage: "url('" + e.imageUrl + "')",
                        maxWidth: "240px"
                    }, "true" === e.fixedRatio && (t = {
                        backgroundImage: "url('" + e.imageUrl + "')",
                        width: e.width - 11 + "px",
                        height: e.height - 11 + "px",
                        maxWidth: "240px"
                    })), t
                }
                getThumbnail() {
                    let {
                        thumbnail: e
                    } = this.props.data, t = "";
                    return void 0 !== e && null !== e && void 0 !== e.imageUrl && null !== e.imageUrl && (t = e.imageUrl), t
                }
                render() {
                    const {
                        title: e,
                        description: t
                    } = this.props.data, s = this.makeThumbnail();
                    let a;
                    return this.props.isCarousel && (a = {
                        width: "236px",
                        minWidth: "236px"
                    }), n.a.createElement("div", {
                        className: "bot_box"
                    }, n.a.createElement("div", {
                        className: "bot_txt item",
                        style: a
                    }, n.a.createElement("div", null, this.state.thumbnailURL && n.a.createElement("div", {
                        className: "img_box",
                        style: s,
                        ref: e => {
                            this.image = e
                        }
                    }), n.a.createElement("div", {
                        className: "txt_title"
                    }, n.a.createElement("strong", null, e)), n.a.createElement("div", {
                        className: "txt_area",
                        dangerouslySetInnerHTML: {
                            __html: tt(t)
                        }
                    })), this.props.data.buttons && n.a.createElement(rt, {
                        data: this.props.data.buttons,
                        fromApp: this.props.fromApp
                    })))
                }
            }
            var ct = lt;
            class pt extends a.PureComponent {
                constructor(e) {
                    super(e)
                }
                clickMessage(e) {
                    let t = {
                        utterance: e,
                        sessionKey: this.props.message.sessionKey,
                        channelId: this.props.message.channelId,
                        isLogin: this.props.message.isLogin,
                        isDev: this.props.config.isDev,
                        blockId: "",
                        projectId: this.props.config.projectId
                    };
                    this.props.send(t)
                }
                removeHighlightTags(e) {
                    return e.replace(/<!HS>/g, "").replace(/<!HE>/g, "")
                }
                render() {
                    let {
                        header: e,
                        items: t
                    } = this.props.data;
                    return n.a.createElement("div", {
                        className: "bot_box"
                    }, n.a.createElement("div", {
                        className: "bot_txt ui_list"
                    }, e.title && n.a.createElement("div", {
                        className: "ui_top"
                    }, n.a.createElement("strong", null, this.props.uiTexts.text_07), " ", e.title), n.a.createElement("div", {
                        className: "ui_cont"
                    }, n.a.createElement("ul", {
                        className: "list_box"
                    }, t.map((e, t) => n.a.createElement("li", {
                        key: t,
                        onClick: () => this.clickMessage(e.title)
                    }, n.a.createElement("button", {
                        className: "list_tit_box",
                        "aria-label": "".concat(t + 1, "\ubc88: ").concat(e.title)
                    }, t + 1, ". ", e.title)))))))
                }
            }
            var dt = Object(l.b)((function(e) {
                return { ...e
                }
            }), (function(e) {
                return {
                    send: t => e(R(t)),
                    get: t => e(A(t)),
                    setProject: t => e(Pe(t))
                }
            }))(pt);
            class ht extends a.PureComponent {
                constructor(e) {
                    super(e)
                }
                render() {
                    const {
                        data: e,
                        cIdx: t
                    } = this.props, s = 17076 == t, a = e.replace(/contenteditable="true"/g, 'contenteditable="false"').replace(/(<[^>]+)style="[^"]*"/g, "$1"), i = s ? "ku_restaurant sanhak" : "ku_restaurant";
                    return n.a.createElement("div", {
                        className: i,
                        dangerouslySetInnerHTML: {
                            __html: a
                        }
                    })
                }
            }
            var ut = ht;
            class mt extends a.PureComponent {
                render() {
                    const {
                        text: e
                    } = this.props.data, t = e.includes("<ol>");
                    let s;
                    this.props.isCarousel && (s = {
                        width: "260px",
                        minWidth: "260px"
                    });
                    return n.a.createElement("div", {
                        className: "bot_box"
                    }, n.a.createElement("div", {
                        className: "bot_txt",
                        style: s
                    }, t ? n.a.createElement(ut, {
                        data: this.props.data.text,
                        cIdx: this.props.data.cIdx
                    }) : n.a.createElement("div", {
                        style: {
                            wordBreak: "break-word"
                        },
                        dangerouslySetInnerHTML: {
                            __html: tt(this.props.data.text)
                        }
                    }), this.props.data.buttons && n.a.createElement(rt, {
                        data: this.props.data.buttons,
                        messageFromUser: this.props.messageFromUser,
                        lang: this.props.lang
                    })))
                }
            }
            var gt = mt,
                Et = s(39);
            class bt extends a.PureComponent {
                constructor(e) {
                    super(e), this.state = {
                        currentPage: 0
                    }
                }
                clickMessage(e) {
                    let t = {
                        utterance: e,
                        sessionKey: this.props.message.sessionKey,
                        channelId: this.props.message.channelId,
                        isLogin: this.props.message.isLogin,
                        isDev: this.props.config.isDev,
                        blockId: "",
                        projectId: this.props.config.projectId
                    };
                    this.props.send(t)
                }
                clickPhoneNum(e) {
                    document.location.href = "tel:" + e
                }
                clickProject(e, t) {
                    var s = JSON.parse(JSON.stringify(this.props));
                    this.props.config.projectId !== e && (s.message.sessionKey = void 0), s.projectId = e, s.utterance = t, this.props.setProject(e), this.props.get(s)
                }
                clickPageDot(e) {
                    this.carousel.moveTo(e, 500), this.changePageDot(e)
                }
                changePageDot(e) {
                    this.setState({
                        currentPage: e
                    })
                }
                render() {
                    const e = (e, t) => "webLink" === e.action ? e.target ? n.a.createElement("a", {
                            href: e.webLinkUrl,
                            target: e.target,
                            className: "icon_box",
                            tabIndex: t,
                            key: t
                        }, n.a.createElement("span", {
                            className: "icon",
                            style: {
                                backgroundImage: "url(" + e.image.url + ")"
                            }
                        }), n.a.createElement("span", {
                            className: "m_txt"
                        }, st(e.label))) : n.a.createElement("a", {
                            className: "icon_box web_link",
                            key: t,
                            href: e.webLinkUrl,
                            title: "kr" === this.props.lang ? "".concat(e.label, " (\uc0c8 \ucc3d\uc5d0\uc11c \uc5f4\ub9bc)") : "".concat(e.label, " (opens in a new window)"),
                            target: I.popWinTarget,
                            draggable: "false",
                            "aria-label": "kr" === this.props.lang ? "".concat(e.label, " (\uc0c8 \ucc3d\uc5d0\uc11c \uc5f4\ub9bc)") : "".concat(e.label, " (opens in a new window)")
                        }, n.a.createElement("span", {
                            className: "icon",
                            style: {
                                backgroundImage: "url(" + e.image.url + ")"
                            }
                        }), n.a.createElement("span", {
                            className: "m_txt"
                        }, st(e.label))) : "message" === e.action ? n.a.createElement("a", {
                            role: "button",
                            tabIndex: "0",
                            className: "icon_box",
                            onClick: () => this.clickMessage(e.messageText),
                            key: t,
                            "aria-label": e.label,
                            draggable: "false",
                            onKeyDown: t => {
                                "Enter" === t.key && (t.preventDefault(), this.clickMessage(e.messageText))
                            }
                        }, n.a.createElement("span", {
                            className: "icon",
                            style: {
                                backgroundImage: "url(" + e.image.url + ")"
                            }
                        }), n.a.createElement("span", {
                            className: "m_txt m_txt-".concat(this.props.config.projectId)
                        }, st(e.label))) : "phone" === e.action ? n.a.createElement("a", {
                            title: "\uc804\ud654 \uac78\uae30",
                            href: "#none",
                            className: "icon_box",
                            onClick: () => this.clickPhoneNum(e.phoneNumber),
                            key: t,
                            "aria-label": "".concat(e.label, " (\uc804\ud654 \uac78\uae30)"),
                            draggable: "false"
                        }, n.a.createElement("div", null, n.a.createElement("span", {
                            className: "icon",
                            style: {
                                backgroundImage: "url(" + e.image.url + ")"
                            }
                        }), n.a.createElement("span", {
                            className: "m_txt"
                        }, st(e.label)))) : "projectChange" === e.action ? n.a.createElement("a", {
                            href: "#none",
                            className: "icon_box",
                            tabIndex: t,
                            onClick: () => this.clickProject(e.targetProjectId, e.label),
                            key: t
                        }, n.a.createElement("div", null, n.a.createElement("span", {
                            className: "icon",
                            style: {
                                backgroundImage: "url(" + e.image.url + ")"
                            }
                        }), n.a.createElement("span", {
                            className: "m_txt"
                        }, st(e.label)))) : void 0,
                        t = (t, s) => this.props.data.buttons.map((a, i) => i >= t && i < s && n.a.createElement("li", {
                            key: i
                        }, e(a, i))),
                        s = void 0 !== this.props.data.buttonRow ? this.props.data.buttonRow : 2,
                        a = 4 * s,
                        i = this.props.data.buttons.length,
                        o = Math.ceil(i / 4 / s),
                        r = () => {
                            let e = 0,
                                s = 0,
                                i = [];
                            for (let r = 0; r < o; r++) e = r * a, s = a * (r + 1), i[r] = n.a.createElement("div", {
                                className: "chat_menu",
                                style: {
                                    width: "100%",
                                    display: "inline-block"
                                },
                                key: r
                            }, t(e, s));
                            return i
                        };
                    let l = () => {
                            let e = [];
                            for (let t = 0; t < o; t++) this.state.currentPage === t ? e[t] = n.a.createElement("li", {
                                key: t
                            }, n.a.createElement("button", {
                                className: "checked",
                                "aria-label": "\ud604\uc7ac \ud398\uc774\uc9c0 ".concat(t + 1),
                                "aria-current": "page"
                            })) : e[t] = n.a.createElement("li", {
                                key: t
                            }, n.a.createElement("button", {
                                onClick: () => this.clickPageDot(t),
                                "aria-label": "\ud398\uc774\uc9c0 ".concat(t + 1, "\ub85c \uc774\ub3d9")
                            }));
                            return e
                        },
                        c = {
                            border: "unset",
                            background: "unset",
                            padding: 0
                        };
                    return this.props.data.image ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                        className: "bot_box greeting"
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_greeting",
                        style: {
                            backgroundImage: I.greeatingImg
                        }
                    }, n.a.createElement("span", {
                        className: "sr-only"
                    }, "\uace0\ub824\ub300\ud559\uad50 \ucc57\ubd07: "), "\uadf8\ub9ac\ud305 \uc774\ubbf8\uc9c0"), n.a.createElement("div", {
                        className: "bot_txt greeting_bot_box"
                    }, n.a.createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: this.props.data.text
                        }
                    }), this.props.data.rowButton && n.a.createElement("div", {
                        className: "btn_group"
                    }, n.a.createElement("a", {
                        className: "btn_link",
                        href: this.props.data.rowButton.url,
                        title: "kr" === this.props.lang ? "".concat(this.props.data.rowButton.label, " (\uc0c8 \ucc3d\uc5d0\uc11c \uc5f4\ub9bc)") : "".concat(this.props.data.rowButton.label, " (opens in a new window)"),
                        target: "_blank",
                        "aria-label": "kr" === this.props.lang ? "".concat(this.props.data.rowButton.label, " (\uc0c8 \ucc3d\uc5d0\uc11c \uc5f4\ub9bc)") : "".concat(this.props.data.rowButton.label, " (opens in a new window)"),
                        dangerouslySetInnerHTML: {
                            __html: tt(this.props.data.rowButton.label)
                        }
                    })))), n.a.createElement("div", {
                        className: "bot_box"
                    }, n.a.createElement(Et.a, {
                        ref: e => {
                            this.carousel = e
                        },
                        deceleration: .0075,
                        horizontal: !0,
                        circular: !1,
                        threshold: 20,
                        duration: 500,
                        defaultIndex: 0,
                        inputType: ["touch", "mouse"],
                        moveType: "snap",
                        autoResize: !0,
                        adaptive: !1,
                        bound: !1,
                        hanger: 0,
                        anchor: 0,
                        onChanged: () => this.changePageDot(this.carousel.index)
                    }, r()), n.a.createElement("div", {
                        className: "pagination"
                    }, n.a.createElement("ul", null, l())))) : n.a.createElement("div", {
                        className: "bot_box"
                    }, n.a.createElement("div", {
                        className: "bot_txt main",
                        style: c
                    }, n.a.createElement("div", {
                        className: "menu_box",
                        dangerouslySetInnerHTML: {
                            __html: tt(this.props.data.text)
                        }
                    }), n.a.createElement("div", {
                        className: "menu_txt"
                    }, n.a.createElement(Et.a, {
                        ref: e => {
                            this.carousel = e
                        },
                        deceleration: .0075,
                        horizontal: !0,
                        circular: !1,
                        threshold: 20,
                        duration: 500,
                        defaultIndex: 0,
                        inputType: ["touch", "mouse"],
                        moveType: "snap",
                        autoResize: !0,
                        adaptive: !1,
                        bound: !1,
                        hanger: 0,
                        anchor: 0,
                        onChanged: () => this.changePageDot(this.carousel.index)
                    }, r()), n.a.createElement("div", {
                        className: "pagination"
                    }, n.a.createElement("ul", null, l())))))
                }
            }
            var yt = Object(l.b)((function(e) {
                    return { ...e
                    }
                }), (function(e) {
                    return {
                        send: t => e(R(t)),
                        get: t => e(A(t)),
                        setProject: t => e(Pe(t))
                    }
                }))(bt),
                _t = s(83),
                kt = s.n(_t);
            class vt extends a.PureComponent {
                constructor(e) {
                    super(e)
                }
                componentDidMount() {
                    if (void 0 !== this.carousel) {
                        let e = this.carousel.panelCount,
                            t = 0;
                        for (let s = 0; s < e; s++) t < kt()(this.carousel.getPanel(s).element.firstChild.firstChild).height() && (t = kt()(this.carousel.getPanel(s).element.firstChild.firstChild).height());
                        if (t > 0)
                            for (let s = 0; s < e; s++) this.carousel.getPanel(s).element.firstChild.firstChild.style.height = t + 25 + "px"
                    }
                }
                render() {
                    const e = this.props.data.type,
                        t = this.props.data.items.map((t, s) => "simpleText" === e ? n.a.createElement("div", {
                            key: s
                        }, n.a.createElement(gt, {
                            data: t,
                            isCarousel: !1,
                            messageFromUser: this.props.messageFromUser
                        })) : "basicCard" === e && n.a.createElement("div", {
                            key: s
                        }, n.a.createElement(ct, {
                            data: t,
                            isCarousel: !1
                        })));
                    return this.props.data.items.length > 1 ? n.a.createElement("div", {
                        className: "menual_area"
                    }, n.a.createElement(Et.a, {
                        deceleration: .0075,
                        horizontal: !0,
                        circular: !1,
                        threshold: 20,
                        duration: 500,
                        defaultIndex: 0,
                        inputType: ["touch", "mouse"],
                        bounce: ["10", "10"],
                        autoResize: !0,
                        adaptive: !1,
                        bound: !1,
                        hanger: 0,
                        anchor: 0,
                        align: "prev",
                        ref: e => {
                            this.carousel = e
                        }
                    }, t)) : "simpleText" === this.props.data.type ? n.a.createElement(gt, {
                        data: this.props.data.items[0],
                        isCarousel: this.props.isCarousel
                    }) : "basicCard" === this.props.data.type && n.a.createElement(ct, {
                        data: this.props.data.items[0].itemType,
                        isCarousel: this.props.isCarousel
                    })
                }
            }
            var xt = vt;
            class St extends a.PureComponent {
                clickSend(e) {
                    let t = {
                        utterance: e,
                        sessionKey: this.props.message.sessionKey,
                        channelId: this.props.message.channelId,
                        isLogin: this.props.message.isLogin,
                        isDev: this.props.config.isDev,
                        projectId: this.props.config.projectId
                    };
                    this.props.send(t)
                }
                clickLink(e, t) {
                    let s = t;
                    void 0 === s && "" !== s || (s = I.popWinTarget), at(e, s, this.props.fromApp)
                }
                clickProject(e, t) {
                    var s = JSON.parse(JSON.stringify(this.props));
                    this.props.config.projectId !== e && (s.message.sessionKey = void 0), s.projectId = e, s.utterance = t, this.props.setProject(e), this.props.get(s)
                }
                render() {
                    const e = this.props.data.map((e, t) => "webLink" === e.action ? n.a.createElement("a", {
                        href: "#none",
                        className: "btn_link",
                        onClick: () => {
                            this.clickLink($e(e.webLinkUrl), e.target)
                        },
                        title: "".concat(e.label, " (\uc0c8 \ucc3d\uc5d0\uc11c \uc5f4\ub9bc)")
                    }, e.label) : "message" === e.action && n.a.createElement("a", {
                        href: "#none",
                        className: "btn_link",
                        onClick: () => {
                            this.clickSend(e.messageText)
                        }
                    }, e.label));
                    return n.a.createElement("div", {
                        className: "option_inner_box"
                    }, n.a.createElement("ul", {
                        className: "option_list"
                    }, n.a.createElement(Et.a, {
                        ref: e => {
                            this.carousel = e
                        },
                        tag: "div",
                        viewportTag: "div",
                        cameraTag: "div",
                        deceleration: .0075,
                        horizontal: !0,
                        circular: !1,
                        lastIndex: 1 / 0,
                        threshold: 20,
                        duration: 500,
                        panelEffect: e => 1 - Math.pow(1 - e, 3),
                        defaultIndex: 0,
                        inputType: ["touch", "mouse"],
                        thresholdAngle: 45,
                        bounce: ["10", "10"],
                        autoResize: !0,
                        adaptive: !1,
                        bound: !1,
                        overflow: !0,
                        hanger: 0,
                        anchor: 0,
                        collectStatistics: !1
                    }, e)))
                }
            }
            var ft = Object(l.b)((function(e) {
                return { ...e
                }
            }), (function(e) {
                return {
                    send: t => e(R(t)),
                    setProject: t => e(Pe(t)),
                    get: t => e(A(t))
                }
            }))(St);
            s(331);
            class Ct extends a.PureComponent {
                constructor(e) {
                    super(e), this.uniqueId = "optionSelect-".concat(Math.random().toString(36).substring(2, 9))
                }
                send(e) {
                    let t = {
                        utterance: e,
                        sessionKey: this.props.message.sessionKey,
                        channelId: this.props.message.channelId,
                        isLogin: this.props.message.isLogin,
                        isDev: this.props.config.isDev,
                        projectId: this.props.config.projectId
                    };
                    this.props.send(t)
                }
                openLink(e) {
                    at(e, I.popWinTarget, this.props.fromApp)
                }
                click() {
                    let e = this.select.options[this.select.selectedIndex].value,
                        t = this.select.options[this.select.selectedIndex].html;
                    "" !== e && (!0 === this.validURL(e) ? this.openLink(e) : e.indexOf("project_") > -1 ? this.clickProject(e.substring(8), t) : this.send(e))
                }
                clickProject(e, t) {
                    var s = JSON.parse(JSON.stringify(this.props));
                    this.props.config.projectId !== e && (s.message.sessionKey = void 0), s.projectId = e, s.utterance = t, this.props.setProject(e), this.props.get(s)
                }
                validURL(e) {
                    return new RegExp("^(https?:\\/\\/)+").test(e)
                }
                render() {
                    let e = "";
                    for (let s = 0; s < this.props.data.length; s++)
                        if ("message" === this.props.data[s].action && "{TEXT}" === this.props.data[s].label) {
                            e = this.props.data[s].messageText;
                            break
                        }
                    const t = this.props.data.map((e, t) => "webLink" === e.action ? n.a.createElement("option", {
                        key: t,
                        value: $e(e.webLinkUrl)
                    }, e.label) : "projectChange" === e.action ? n.a.createElement("option", {
                        key: t,
                        value: "project_" + e.targetProjectId
                    }, e.label) : "message" === e.action && "{TEXT}" !== e.label && n.a.createElement("option", {
                        key: t,
                        value: e.messageText
                    }, e.label));
                    return n.a.createElement("div", {
                        className: "bot_box"
                    }, n.a.createElement("div", {
                        className: "bot_txt",
                        style: {
                            width: "260px",
                            minWidth: "260px",
                            background: "#fff",
                            border: "none",
                            padding: 0
                        }
                    }, n.a.createElement("div", {
                        style: {
                            wordBreak: "break-word"
                        },
                        dangerouslySetInnerHTML: {
                            __html: tt(e)
                        }
                    }), n.a.createElement("div", {
                        className: "option_box"
                    }, n.a.createElement("div", {
                        include: "form-input-select()"
                    }, n.a.createElement("label", {
                        htmlFor: this.uniqueId,
                        className: "sr-only"
                    }, "kr" === this.props.lang ? "\uc635\uc158 \uc120\ud0dd" : "Select an option"), n.a.createElement("select", {
                        id: this.uniqueId,
                        required: !0,
                        ref: e => {
                            this.select = e
                        },
                        onChange: () => {
                            this.click()
                        },
                        title: "kr" === this.props.lang ? "\uc635\uc158 \uc120\ud0dd" : "Select an option",
                        "aria-label": "kr" === this.props.lang ? "\uc635\uc158 \uc120\ud0dd" : "Select an option"
                    }, n.a.createElement("option", {
                        value: "",
                        hidden: !0
                    }, this.props.uiTexts.text_34), t)))))
                }
            }
            var Nt = Object(l.b)((function(e) {
                return { ...e
                }
            }), (function(e) {
                return {
                    send: t => e(R(t)),
                    setProject: t => e(Pe(t)),
                    get: t => e(A(t))
                }
            }))(Ct);
            class Tt extends a.PureComponent {
                constructor(e) {
                    super(e), this.state = {
                        defaultTxt: this.props.uiTexts.text_49,
                        comment: "",
                        isButtonDisabled: !0,
                        textLength: 0
                    }, this.handleChangeTextarea = this.handleChangeTextarea.bind(this), this.trapFocus = this.trapFocus.bind(this)
                }
                componentDidMount() {
                    this.firstFocusableElement = this.modal.querySelector("textarea"), this.lastFocusableElement = this.modal.querySelector(".btn_close"), this.firstFocusableElement.focus(), document.addEventListener("keydown", this.trapFocus)
                }
                componentWillUnmount() {
                    document.removeEventListener("keydown", this.trapFocus)
                }
                trapFocus(e) {
                    const t = this.modal.querySelectorAll('a, button, textarea, input, [tabindex]:not([tabindex="-1"])'),
                        s = t[0],
                        a = t[t.length - 1];
                    "Tab" === e.key && (e.shiftKey ? document.activeElement === s && (a.focus(), e.preventDefault()) : document.activeElement === a && (s.focus(), e.preventDefault()))
                }
                handleChangeTextarea(e) {
                    const t = e.target.value;
                    this.setState({
                        isButtonDisabled: 0 === t.length,
                        textLength: t.length <= 200 ? t.length : this.state.textLength,
                        comment: t.length <= 200 ? t : this.state.comment
                    })
                }
                render() {
                    const {
                        defaultTxt: e,
                        comment: t,
                        isButtonDisabled: s,
                        textLength: a
                    } = this.state, {
                        onSend: i,
                        onClose: o
                    } = this.props;
                    return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                        className: "dimmed_feedback",
                        style: {
                            display: "block"
                        },
                        onClick: o
                    }), n.a.createElement("div", {
                        className: "suggestion satisfaction_survey",
                        ref: e => this.modal = e
                    }, n.a.createElement("div", {
                        className: "tit"
                    }, n.a.createElement("a", {
                        href: "#none",
                        className: "header"
                    }, this.props.uiTexts.text_48), n.a.createElement("button", {
                        type: "button",
                        className: "btn_close layer",
                        onClick: o
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_w_close"
                    }, "\ub808\uc774\uc5b4 \ub2eb\uae30"))), n.a.createElement("div", {
                        className: "inner"
                    }, n.a.createElement("p", {
                        className: "txt",
                        dangerouslySetInnerHTML: {
                            __html: this.props.uiTexts.text_57
                        }
                    }), n.a.createElement("dl", null, n.a.createElement("h4", null, n.a.createElement("label", {
                        htmlFor: "commentTextarea"
                    }, this.props.uiTexts.text_19)), n.a.createElement("dd", null, n.a.createElement("textarea", {
                        id: "commentTextarea",
                        placeholder: e,
                        value: t,
                        onChange: this.handleChangeTextarea
                    }), n.a.createElement("p", null, "(", "".concat(a, "/200"), ")")))), n.a.createElement("div", {
                        className: "btn_group"
                    }, n.a.createElement("a", {
                        href: "#none",
                        className: "cancel_btn alert_btn",
                        onClick: o
                    }, this.props.uiTexts.text_33), n.a.createElement("a", {
                        href: "#none",
                        className: "send_btn alert_btn ".concat(s ? "disabled" : ""),
                        onClick: s ? null : () => i(t)
                    }, this.props.uiTexts.text_45))))
                }
            }
            var It = Tt;
            class Lt extends a.Component {
                constructor(e) {
                    super(e), this.handleClickIsGood = () => {
                        this.setState({
                            isGoodActive: !0,
                            isBadActive: !1
                        }, () => {
                            let e = {
                                sessionKey: this.props.sessionKey,
                                docId: this.props.docId,
                                isGood: "Y"
                            };
                            this.props.updateIsGood(e)
                        })
                    }, this.handleShowSatisfactionSurvey = () => {
                        this.setState({
                            showSatisfactionSurvey: !0
                        })
                    }, this.handleSendSurvey = e => {
                        this.setState({
                            isGoodActive: !1,
                            isBadActive: !0,
                            showSatisfactionSurvey: !1
                        }, () => {
                            let t = {
                                sessionKey: this.props.sessionKey,
                                docId: this.props.docId,
                                isGood: "N",
                                comment: e
                            };
                            this.props.updateIsGood(t)
                        })
                    }, this.handleCloseSurvey = () => {
                        this.setState({
                            showSatisfactionSurvey: !1
                        })
                    }, this.handleClickIsBad = () => {
                        this.setState({
                            showSatisfactionSurvey: !0
                        })
                    }, this.state = {
                        isGoodActive: !1,
                        isBadActive: !1,
                        showSatisfactionSurvey: !1
                    }, this.handleClickIsGood = this.handleClickIsGood.bind(this), this.handleShowSatisfactionSurvey = this.handleShowSatisfactionSurvey.bind(this), this.handleSendSurvey = this.handleSendSurvey.bind(this), this.handleCloseSurvey = this.handleCloseSurvey.bind(this)
                }
                shouldComponentUpdate(e, t) {
                    return e === this.props
                }
                render() {
                    const {
                        isGoodActive: e,
                        isBadActive: t,
                        showSatisfactionSurvey: s
                    } = this.state;
                    let a = !1,
                        i = !1;
                    for (let n = 0; n < this.props.data.length; n++)
                        if (this.props.data[n].simpleGrid && this.props.data[n].simpleGrid.image && (i = !0), this.props.data[n].carousel && this.props.data[n].carousel.items.length > 1) {
                            a = !0;
                            break
                        }
                    let o, r, l = [...this.props.data.filter(e => e.listCard).map((e, t) => n.a.createElement(dt, {
                        key: t,
                        data: e.listCard,
                        uiTexts: this.props.uiTexts
                    })), ...this.props.data.filter(e => !e.listCard).map((e, t) => e.carousel ? n.a.createElement(xt, {
                        key: t,
                        data: e.carousel,
                        isCarousel: a,
                        messageFromUser: this.props.messageFromUser
                    }) : e.simpleText ? n.a.createElement(gt, {
                        key: t,
                        data: e.simpleText,
                        isGreeting: this.props.isGreeting,
                        isCarousel: a,
                        lang: this.props.lang
                    }) : e.basicCard ? n.a.createElement(ct, {
                        key: t,
                        data: e.basicCard,
                        isCarousel: a
                    }) : e.simpleGrid && n.a.createElement(yt, {
                        key: t,
                        data: e.simpleGrid,
                        lang: this.props.lang
                    }))];
                    return a && (o = {
                        width: "100%"
                    }), i && (r = {
                        display: "none"
                    }), n.a.createElement(n.a.Fragment, null, s && n.a.createElement(It, {
                        onSend: this.handleSendSurvey,
                        onClose: this.handleCloseSurvey,
                        uiTexts: this.props.uiTexts,
                        sessionKey: this.props.sessionKey,
                        docId: this.props.docId
                    }), n.a.createElement("div", {
                        className: "bot_wrap",
                        style: o
                    }, !i && n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
                        className: "ico_comm ico_chatbot",
                        style: r
                    }), n.a.createElement("span", {
                        className: "bot_name",
                        style: r
                    }, this.props.uiTexts.text_00)), n.a.createElement("div", {
                        className: "bot_flex"
                    }, l, void 0 !== this.props.quickBtns && null !== this.props.quickBtns && this.props.quickBtns.length >= 3 && n.a.createElement(Nt, {
                        data: this.props.quickBtns,
                        uiTexts: this.props.uiTexts,
                        lang: this.props.lang
                    }), void 0 !== this.props.quickBtns && null !== this.props.quickBtns && this.props.quickBtns.length < 3 && n.a.createElement(ft, {
                        data: this.props.quickBtns,
                        uiTexts: this.props.uiTexts,
                        lang: this.props.lang
                    })), n.a.createElement("span", {
                        className: "time slide"
                    }, "en" !== this.props.lang ? Ze() : et()), !this.props.isGreeting && !this.props.isPushMessage && n.a.createElement("div", {
                        className: "btn_answer_group"
                    }, n.a.createElement("p", {
                        className: "tit"
                    }, this.props.uiTexts.text_46), n.a.createElement("div", {
                        className: "select_btn"
                    }, n.a.createElement(n.a.Fragment, null, n.a.createElement("a", {
                        href: "#",
                        className: e ? "is_good active" : "is_good",
                        onClick: this.handleClickIsGood,
                        "aria-label": e ? "kr" === this.props.lang ? "\ub9cc\uc871 \uc120\ud0dd\ub428" : "Selected as Satisfied" : "kr" === this.props.lang ? "\ub9cc\uc871" : "Satisfied",
                        "aria-current": e ? "true" : void 0
                    }, n.a.createElement("span", {
                        className: "sr-only"
                    }, "\ub9cc\uc871")), n.a.createElement("a", {
                        href: "#",
                        className: t ? "is_bad active" : "is_bad",
                        onClick: this.handleClickIsBad,
                        "aria-label": t ? "kr" === this.props.lang ? "\ubd88\ub9cc\uc871 \uc120\ud0dd\ub428" : "Selected as Dissatisfied" : "kr" === this.props.lang ? "\ubd88\ub9cc\uc871" : "Dissatisfied",
                        "aria-current": t ? "true" : void 0
                    }, n.a.createElement("span", {
                        className: "sr-only"
                    }, "\ubd88\ub9cc\uc871")))))))
                }
            }
            var Ot = Lt;
            class wt extends a.PureComponent {
                constructor(e) {
                    super(e)
                }
                clickMessage(e) {
                    console.log(e);
                    let t = {
                        utterance: e,
                        sessionKey: this.props.message.sessionKey,
                        channelId: this.props.message.channelId,
                        isLogin: this.props.message.isLogin,
                        isDev: this.props.config.isDev,
                        blockId: "",
                        projectId: this.props.config.projectId
                    };
                    this.props.send(t)
                }
                clickProject(e, t) {
                    var s = JSON.parse(JSON.stringify(this.props));
                    this.props.config.projectId !== e && (s.message.sessionKey = void 0), s.projectId = e, s.utterance = t, this.props.setProject(e), this.props.get(s)
                }
                render() {
                    return n.a.createElement("div", {
                        className: "bot_wrap"
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_chatbot"
                    }), n.a.createElement("span", {
                        className: "bot_name"
                    }, this.props.uiTexts.text_00), n.a.createElement("div", {
                        className: "bot_flex"
                    }, n.a.createElement("div", {
                        className: "bot_box"
                    }, n.a.createElement("div", {
                        className: "bot_txt main"
                    }, n.a.createElement("div", {
                        style: {
                            textAlign: "center"
                        }
                    }, n.a.createElement("img", {
                        src: "/contents_image/greeting.png",
                        style: {
                            width: "100px",
                            height: "126px"
                        }
                    })), st(this.props.pharses), n.a.createElement("div", {
                        className: "btn_group"
                    }, n.a.createElement("a", {
                        className: "btn_link greet",
                        onClick: () => this.clickProject("23", "\uc218\uc2dc"),
                        style: {
                            width: "49.5%",
                            display: "inline-block"
                        }
                    }, n.a.createElement("img", {
                        src: "http://answerny.ai/chatbot/projects/ewha/image/image_Swipebtn13.png"
                    }), "\uc218\uc2dc\uc804\ud615"), n.a.createElement("a", {
                        className: "btn_link greet",
                        href: "https://chat.ewha.ac.kr/upload/24ED_EWHA_44.pdf",
                        style: {
                            width: "49.5%",
                            display: "inline-block",
                            float: "right"
                        }
                    }, n.a.createElement("img", {
                        src: "http://answerny.ai/chatbot/projects/ewha/image/image_Swipebtn14.png"
                    }), "\uc815\uc2dc\uc804\ud615"))))))
                }
            }
            var jt = Object(l.b)((function(e) {
                return { ...e
                }
            }), (function(e) {
                return {
                    send: t => e(R(t)),
                    get: t => e(A(t)),
                    setProject: t => e(Pe(t))
                }
            }))(wt);
            class At extends a.PureComponent {
                render() {
                    return n.a.createElement("div", {
                        className: "bot_wrap"
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_chatbot"
                    }), n.a.createElement("span", {
                        className: "bot_name"
                    }, this.props.uiTexts.text_00), n.a.createElement("div", {
                        className: "bot_flex"
                    }, n.a.createElement("div", {
                        className: "bot_box"
                    }, n.a.createElement("div", {
                        className: "bot_txt",
                        style: {
                            width: "60px",
                            paddingTop: "5px"
                        }
                    }, n.a.createElement("div", {
                        className: "three-balls"
                    }, n.a.createElement("div", {
                        className: "ball ball1"
                    }), n.a.createElement("div", {
                        className: "ball ball2"
                    }), n.a.createElement("div", {
                        className: "ball ball3"
                    }))))), n.a.createElement("span", {
                        className: "time slide"
                    }, "en" != this.props.lang ? Ze() : et()))
                }
            }
            var Rt = At;
            class Ut extends a.PureComponent {
                componentDidUpdate(e, t) {
                    if (e.data.data.length !== this.props.data.data.length) {
                        const e = this.element,
                            t = e.querySelector(".chat_content");
                        if (t.childNodes.length >= 2) {
                            const s = t.childNodes[t.childNodes.length - 2],
                                a = t.childNodes[t.childNodes.length - 1];
                            if ("bot_wrap" === s.className && "bot_wrap" === a.className) return void(e.scrollTop = a.offsetTop)
                        }
                        const s = t.querySelectorAll(".user_wrap"),
                            a = s[s.length - 1];
                        a && (e.scrollTop = a.offsetTop)
                    }
                }
                render() {
                    return n.a.createElement("div", {
                        className: "chat_container",
                        ref: e => {
                            this.element = e
                        },
                        onScroll: this.handleScroll,
                        onClick: () => {
                            this.props.toggleRealtimeAnswer(!0)
                        }
                    }, n.a.createElement("div", {
                        className: "chat_content"
                    }, this.props.data.data.map((e, t) => e.outputs ? n.a.createElement(Ot, {
                        data: e.outputs,
                        lang: this.props.lang,
                        isGreeting: this.props.data.isGreeting,
                        isPushMessage: this.props.data.isPushMessage,
                        quickBtns: e.quickReplies,
                        messageFromUser: e.messageFromUser,
                        isDev: this.props.isDev,
                        uiTexts: this.props.uiTexts,
                        key: t,
                        docId: e.docId,
                        sessionKey: this.props.data.sessionKey,
                        isLogin: this.props.isLogin,
                        loginAlert: this.props.loginAlert,
                        updateIsGood: this.props.updateIsGood
                    }) : !0 === e.admission_greet ? n.a.createElement(jt, {
                        pharses: this.props.data.pharses,
                        lang: this.props.lang,
                        isGreeting: this.props.data.isGreeting,
                        isDev: this.props.isDev,
                        uiTexts: this.props.uiTexts,
                        key: t
                    }) : e.input && n.a.createElement(it, {
                        key: t,
                        data: e.input,
                        favorite: this.props.favorite,
                        lang: this.props.lang
                    })), this.props.data.isLoading && n.a.createElement(Rt, {
                        uiTexts: this.props.uiTexts,
                        lang: this.props.lang
                    })))
                }
            }
            var Mt = Ut;
            class Pt extends a.PureComponent {
                setFavorite(e) {
                    this.props.controlOverlay({
                        toggle: !0,
                        closeAll: !1
                    }), this.props.openFavoriteAlert({
                        utterance: e,
                        action: "del"
                    })
                }
                send(e) {
                    let t = {
                        utterance: e,
                        sessionKey: this.props.sessionKey,
                        channelId: this.props.channelId,
                        isLogin: this.props.isLogin,
                        isDev: this.props.config.isDev,
                        projectId: this.props.config.projectId
                    };
                    this.props.send(t), this.props.toggleFavorites()
                }
                render() {
                    let e, t = 0;
                    return null !== this.props.data && (e = this.props.data.map((e, t) => n.a.createElement("li", {
                        className: "qna_item",
                        key: t
                    }, n.a.createElement("a", {
                        href: "#none",
                        className: "qna_link",
                        onClick: () => {
                            this.send(e)
                        }
                    }, e), n.a.createElement("button", {
                        type: "button",
                        className: "btn_delete",
                        onClick: () => {
                            this.setFavorite(e)
                        }
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_delete"
                    }, "\uc0ad\uc81c")))), t = this.props.data.length), n.a.createElement("div", {
                        id: "lyBookmark",
                        className: "ly_box_bottom ly_bookmark"
                    }, n.a.createElement("strong", {
                        className: "ly_box_tit"
                    }, this.props.uiTexts.text_10, "(", t, "/5)"), n.a.createElement("div", {
                        className: "qna_box"
                    }, 0 === t && n.a.createElement("p", {
                        className: "no_list_desc",
                        dangerouslySetInnerHTML: {
                            __html: this.props.uiTexts.text_11
                        }
                    }), t >= 0 && n.a.createElement("ul", {
                        className: "qna_list"
                    }, e)), n.a.createElement("button", {
                        type: "button",
                        className: "btn_close",
                        onClick: () => {
                            this.props.toggleFavorites()
                        }
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_close"
                    }, "\uc990\uaca8\ucc3e\ub294 \uc9c8\ubb38 \ubaa9\ub85d \ub2eb\uae30")))
                }
            }
            Object(l.b)((function(e) {
                return { ...e
                }
            }), (function(e) {
                return {
                    openFavoriteAlert: t => e(re(t)),
                    controlOverlay: t => e(ae(t))
                }
            }))(Pt);
            a.Component;
            class Dt extends a.PureComponent {
                constructor(e) {
                    super(e), this.handleClickClose = this.handleClickClose.bind(this), this.handelGreetingSetting = this.handelGreetingSetting.bind(this), this.handelQuickMenuSetting = this.handelQuickMenuSetting.bind(this), this.state = {
                        greetingCount: 0,
                        quickMenuCount: 0,
                        maxCount: I.maxSetting
                    }
                }
                componentDidMount() {
                    let e = 0;
                    this.props.data.greeting.map(t => "1" === t.isUse && e++);
                    let t = 0;
                    this.props.data.quickMenu.map(e => "1" === e.isUse && t++), this.setState({ ...this.state,
                        greetingCount: e,
                        quickMenuCount: t
                    })
                }
                handleClickClose() {
                    this.props.setSetting(), this.props.close()
                }
                handelGreetingSetting(e) {
                    if ("btn_control" === e.target.className) {
                        let t = this.state.greetingCount + 1;
                        this.state.maxCount < t ? alert(this.props.uiTexts.text_06) : (this.setState({ ...this.state,
                            greetingCount: this.state.greetingCount + 1
                        }), this.props.toggleGreeting(e))
                    }
                    "btn_control is_active" === e.target.className && (this.setState({ ...this.state,
                        greetingCount: this.state.greetingCount - 1
                    }), this.props.toggleGreeting(e))
                }
                handelQuickMenuSetting(e) {
                    if ("btn_control" === e.target.className) {
                        let t = this.state.quickMenuCount + 1;
                        this.state.maxCount < t ? alert(this.props.uiTexts.text_37) : (this.setState({ ...this.state,
                            quickMenuCount: this.state.quickMenuCount + 1
                        }), this.props.toggleQuickMenu(e))
                    }
                    "btn_control is_active" === e.target.className && (this.setState({ ...this.state,
                        quickMenuCount: this.state.quickMenuCount - 1
                    }), this.props.toggleQuickMenu(e))
                }
                tabClick(e) {
                    let t = this.quickMenuTab,
                        s = this.quickMenuSetting,
                        a = this.greetingTab,
                        n = this.greetingSetting;
                    "greeting" === e && (t = this.greetingTab, s = this.greetingSetting, a = this.quickMenuTab, n = this.quickMenuSetting), t.className = "tab_menu_item active", s.className = "tab_cont active", a.className = "tab_menu_item", n.className = "tab_cont"
                }
                render() {
                    return n.a.createElement("div", {
                        className: "layer_inner"
                    }, n.a.createElement("div", {
                        className: "layer_top"
                    }, n.a.createElement("h2", {
                        className: "layer_h_tit"
                    }, n.a.createElement("span", null, this.props.uiTexts.text_02))), n.a.createElement("div", {
                        className: "layer_cont"
                    }, n.a.createElement("div", {
                        className: "tab_menu_box"
                    }, n.a.createElement("div", {
                        className: "sch_area"
                    }, n.a.createElement("h2", {
                        className: "screen_out"
                    }, this.props.uiTexts.text_40), n.a.createElement("div", {
                        className: "message_set"
                    }, null !== this.props.data && this.props.data.quickMenu.length > 0 ? n.a.createElement("ul", {
                        className: "message_set_list"
                    }, this.props.data.quickMenu.map((e, t) => n.a.createElement("li", {
                        className: "message_set_item",
                        key: t
                    }, n.a.createElement("span", {
                        className: "set_tit"
                    }, e.label), n.a.createElement("button", {
                        type: "button",
                        className: "1" === e.isUse ? "btn_control is_active" : "btn_control",
                        value: t,
                        onClick: this.handelQuickMenuSetting
                    })))) : n.a.createElement("span", null, this.props.uiTexts.text_36)))), n.a.createElement("button", {
                        type: "button",
                        className: "btn_close layer"
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_w_close",
                        onClick: this.handleClickClose
                    }, "\ub808\uc774\uc5b4 \ub2eb\uae30"))))
                }
            }
            var Gt = Dt;
            class Ft extends a.PureComponent {
                constructor(e) {
                    super(e), this.state = {
                        isOpenTheme: !1,
                        loginStatus: !1,
                        consentStatus: !1,
                        userName: ""
                    }, this.cookies = new p.a, this.handleClickClose = this.handleClickClose.bind(this), this.handleClickTip = this.handleClickTip.bind(this), this.handleAlert = this.handleAlert.bind(this), this.handleClickSetting = this.handleClickSetting.bind(this), this.handleQuickMenuClick = this.handleQuickMenuClick.bind(this), this.handleClickFeedback = this.handleClickFeedback.bind(this), this.handleLogout = this.handleLogout.bind(this)
                }
                async componentDidMount() {
                    let e = document.getElementsByClassName("sub_menu_item");
                    if (e.length > I.maxSetting)
                        for (let s = 0; s < e.length; s++) s > I.maxSetting - 1 && (e[s].style.display = "none");
                    if (this.cookies.get("ssotoken")) try {
                        const e = await fetch(I.userInfo, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }),
                            t = await e.json();
                        26 == this.props.config.projectId && t.KOR_NAME ? this.setState({
                            loginStatus: !0,
                            userName: t.KOR_NAME
                        }) : 25 == this.props.config.projectId && (t.ENG_NAME || t.KOR_NAME) ? this.setState({
                            loginStatus: !0,
                            userName: t.ENG_NAME || t.KOR_NAME
                        }) : (this.cookies.remove("ssotoken"), this.setState({
                            loginStatus: !1
                        }))
                    } catch (t) {
                        console.error("\uc720\uc800 \uc815\ubcf4\ub97c \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4: ", t), this.cookies.remove("ssotoken"), this.setState({
                            loginStatus: !1
                        })
                    }
                    null !== this.props.consentInfo && "Y" === this.props.consentInfo.consentStatus && this.setState({
                        consentStatus: !0
                    })
                }
                clickMessage(e) {
                    let t = {
                        utterance: e,
                        sessionKey: this.props.sessionKey,
                        channelId: this.props.channelId,
                        isLogin: this.state.loginStatus,
                        isDev: this.props.config.isDev,
                        blockId: "",
                        projectId: this.props.config.projectId
                    };
                    this.props.send(t)
                }
                handleQuickMenuClick(e) {
                    this.props.close();
                    let t = {
                        utterance: e.target.value,
                        sessionKey: this.props.sessionKey,
                        channelId: this.props.channelId,
                        isLogin: this.state.loginStatus,
                        isDev: this.props.config.isDev,
                        projectId: this.props.config.projectId
                    };
                    this.props.send(t)
                }
                handleClickClose() {
                    this.state.loginStatus && this.props.setSetting(), this.props.close()
                }
                handleClickTip() {
                    this.props.openUseTip()
                }
                handleClickSetting() {
                    this.state.loginStatus ? this.props.openSetting() : this.props.loginAlert()
                }
                handleClickFeedback() {
                    this.props.openFeedback()
                }
                handleAlert() {
                    alert("\uc900\ube44\uc911\uc785\ub2c8\ub2e4.")
                }
                clickPosition(e) {
                    this.props.setMenuPostion(e)
                }
                openThemeSet() {
                    const e = this.themeSetDiv.style.display;
                    "" === e || "none" === e ? (this.themeSetDiv.style.display = "block", this.setState({
                        isOpenTheme: !0
                    })) : (this.themeSetDiv.style.display = "none", this.setState({
                        isOpenTheme: !1
                    }))
                }
                handleLogout() {
                    window.location.href = "".concat(I.logOut, "?projectId=").concat(this.props.config.projectId, "&lang=").concat(26 == this.props.config.projectId ? "kr" : "en")
                }
                render() {
                    let e = {
                        color: "#fff",
                        fontFamily: "KUCentennial"
                    };
                    return n.a.createElement("div", {
                        className: "sub_menu_inner",
                        ref: e => {
                            this.sidemenuElement = e
                        }
                    }, n.a.createElement("button", {
                        type: "button",
                        className: "btn_close",
                        onClick: this.handleClickClose
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_close"
                    }, "\uba54\ub274 \ub808\uc774\uc5b4 \ub2eb\uae30")), this.state.loginStatus && n.a.createElement("button", {
                        type: "button",
                        className: "logout_link",
                        onClick: this.handleLogout
                    }, n.a.createElement("span", null, this.props.uiTexts.text_27)), n.a.createElement("div", {
                        className: "profile_box"
                    }, this.state.loginStatus ? n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
                        className: "chat_logo_box"
                    }), n.a.createElement("div", {
                        className: "sub_btn_group"
                    }, 26 == this.props.config.projectId ? n.a.createElement("span", {
                        className: "profile_name"
                    }, this.state.userName, " ", this.props.uiTexts.text_28, n.a.createElement("br", null), this.props.uiTexts.text_44) : n.a.createElement("span", {
                        className: "profile_name"
                    }, this.props.uiTexts.text_44, n.a.createElement("br", null), this.state.userName, " ", this.props.uiTexts.text_28)), n.a.createElement("div", {
                        className: "btn_feedback",
                        onClick: this.handleClickFeedback
                    }, n.a.createElement("button", {
                        type: "button",
                        className: "btn_lin",
                        style: e
                    }, n.a.createElement("span", null, this.props.uiTexts.text_45)))) : n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
                        className: "chat_logo_box"
                    }), n.a.createElement("div", {
                        className: "sub_btn_group"
                    }, n.a.createElement("span", {
                        className: "profile_name"
                    }, this.props.uiTexts.text_23), n.a.createElement("div", {
                        className: "btn_login",
                        onClick: () => window.location.href = "".concat(I.logIn, "?projectId=").concat(this.props.config.projectId, "&lang=").concat(26 == this.props.config.projectId ? "kr" : "en")
                    }, n.a.createElement("a", {
                        href: "".concat(I.logIn, "?projectId=").concat(this.props.config.projectId, "&lang=").concat(26 == this.props.config.projectId ? "kr" : "en"),
                        className: "btn_lin"
                    }, this.props.uiTexts.text_24))), n.a.createElement("div", {
                        className: "btn_feedback",
                        onClick: this.handleClickFeedback
                    }, n.a.createElement("button", {
                        type: "button",
                        className: "btn_lin",
                        style: e
                    }, n.a.createElement("span", null, this.props.uiTexts.text_45))))), this.props.quickMenu && n.a.createElement("ul", {
                        className: "sub_menu_list sub_menu_list-".concat(this.props.lang)
                    }, this.props.quickMenu.map((e, t) => "1" === e.isUse && n.a.createElement("li", {
                        className: "sub_menu_item",
                        key: t
                    }, n.a.createElement("button", {
                        type: "button",
                        value: e.utterance,
                        className: "sub_menu_link",
                        onClick: this.handleQuickMenuClick
                    }, e.label)))), n.a.createElement("ul", {
                        className: "sub_btn_group bottom",
                        style: 24 == this.props.config.projectId ? {
                            position: "unset",
                            color: "#790030"
                        } : null
                    }, n.a.createElement("li", null, n.a.createElement("button", {
                        type: "button",
                        className: "btn setting",
                        onClick: this.handleClickSetting
                    }, n.a.createElement("span", null, this.props.uiTexts.text_02))), n.a.createElement("div", {
                        className: "divider"
                    }), (23 == this.props.config.projectId || 25 == this.props.config.projectId || 26 == this.props.config.projectId) && n.a.createElement("li", null, n.a.createElement("button", {
                        type: "button",
                        value: this.props.uiTexts.text_38,
                        className: "btn tip",
                        onClick: () => this.handleClickTip(this.props.uiTexts.text_38)
                    }, n.a.createElement("span", null, this.props.uiTexts.text_38)))))
                }
            }
            var Kt = Ft;
            class qt extends a.PureComponent {
                constructor(e) {
                    super(e), this.handleClickClose = this.handleClickClose.bind(this)
                }
                componentDidMount() {}
                handleClickClose() {
                    !1 === this.props.isViewAgree && !1 === this.props.isLoginAlert && this.props.click()
                }
                render() {
                    const e = {
                        zIndex: this.props.zIndex
                    };
                    return n.a.createElement("div", {
                        className: "dimmed",
                        style: e,
                        onClick: this.handleClickClose
                    })
                }
            }
            var Bt = qt;
            class Qt extends a.PureComponent {
                constructor(e) {
                    super(e), this.handleClickClose = this.handleClickClose.bind(this)
                }
                componentDidMount() {}
                handleClickClose() {
                    this.props.close()
                }
                render() {
                    return n.a.createElement("div", {
                        className: "layer_wrap advisor_layer_wrap",
                        style: {
                            zIndex: "103"
                        }
                    }, n.a.createElement("div", {
                        className: "layer_inner"
                    }, n.a.createElement("div", {
                        className: "layer_cont"
                    }, n.a.createElement("strong", {
                        className: "layer_sub_tit"
                    }, "\xa0"), n.a.createElement("strong", null, n.a.createElement("p", {
                        className: "layer_txt",
                        dangerouslySetInnerHTML: {
                            __html: tt(this.props.message)
                        }
                    })), n.a.createElement("div", {
                        className: "btn_area"
                    })), n.a.createElement("button", {
                        type: "button",
                        className: "btn_close",
                        onClick: this.handleClickClose
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_close"
                    }, "\ub808\uc774\uc5b4 \ub2eb\uae30"))))
                }
            }
            var Ht = Qt;
            class Wt extends a.PureComponent {
                handleClickClose() {
                    !1 === this.props.clickSideMenu && this.props.clickOverlay(), this.props.close()
                }
                loginLink() {
                    document.location.href = I.logIn
                }
                render() {
                    return n.a.createElement("div", {
                        className: "layer_wrap advisor_layer_wrap",
                        style: {
                            zIndex: "103"
                        }
                    }, n.a.createElement("div", {
                        className: "layer_inner"
                    }, n.a.createElement("div", {
                        className: "layer_cont",
                        style: {
                            minHeight: "100px",
                            lineHeight: "100px"
                        }
                    }, n.a.createElement("strong", {
                        className: "layer_sub_tit"
                    }, this.props.uiTexts.text_01)), n.a.createElement("button", {
                        type: "button",
                        className: "btn_close",
                        onClick: () => this.handleClickClose()
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_close"
                    }, "\ub808\uc774\uc5b4 \ub2eb\uae30"))))
                }
            }
            var Yt = Wt;
            class zt extends a.PureComponent {
                constructor(e) {
                    super(e), this.state = {
                        defaultTxt: this.props.uiTexts.text_21,
                        allowYn: "N",
                        feedback: "",
                        isButtonDisabled: !0,
                        satisfactionYn: "",
                        textLength: 0
                    }, this.handleClickClose = this.handleClickClose.bind(this), this.handleClickTextarea = this.handleClickTextarea.bind(this), this.handleChangeInput = this.handleChangeInput.bind(this), this.handelClickSend = this.handelClickSend.bind(this), this.handleSatisfactionChange = this.handleSatisfactionChange.bind(this), this.trapFocus = this.trapFocus.bind(this)
                }
                componentDidMount() {
                    this.firstFocusableElement = this.modal.querySelector("textarea"), this.lastFocusableElement = this.modal.querySelector(".btn_close"), this.firstFocusableElement.focus(), document.addEventListener("keydown", this.trapFocus)
                }
                componentWillUnmount() {
                    document.removeEventListener("keydown", this.trapFocus)
                }
                trapFocus(e) {
                    const t = this.modal.querySelectorAll('a, button, textarea, input, [tabindex]:not([tabindex="-1"])'),
                        s = t[0],
                        a = t[t.length - 1];
                    "Tab" === e.key && (e.shiftKey ? document.activeElement === s && (a.focus(), e.preventDefault()) : document.activeElement === a && (s.focus(), e.preventDefault()))
                }
                handleClickClose() {
                    this.props.close()
                }
                handleClickTextarea(e) {
                    const t = e.target.value;
                    t.length <= 200 && (this.setState({
                        textLength: t.length
                    }), this.setState({
                        feedback: t
                    }))
                }
                handleChangeInput(e) {
                    !0 === e.target.checked ? (this.setState({
                        allowYn: "Y"
                    }), this.props.view()) : this.setState({
                        allowYn: "N"
                    })
                }
                handelClickSend() {
                    if ("" === this.state.feedback.trim()) this.props.alert("\uc758\uacac\uc744 \uc785\ub825\ud574 \uc8fc\uc2ed\uc2dc\uc624");
                    else {
                        const e = {
                            projectId: this.props.config.projectId,
                            satisfactionYn: this.state.satisfactionYn,
                            allowYn: "N",
                            loginYn: this.props.isLogin ? "Y" : "N",
                            feedbackContent: this.state.feedback,
                            isDev: this.props.config.isDev,
                            successMsg: this.props.uiTexts.text_22,
                            failureMsg: this.props.uiTexts.text_59
                        };
                        this.props.write(e)
                    }
                }
                handleSatisfactionChange(e) {
                    this.setState({
                        satisfactionYn: e.target.value,
                        isButtonDisabled: !1
                    })
                }
                render() {
                    const {
                        isButtonDisabled: e,
                        textLength: t
                    } = this.state;
                    return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                        className: "dimmed_feedback",
                        style: {
                            display: "block"
                        }
                    }), n.a.createElement("div", {
                        className: "suggestion",
                        ref: e => this.modal = e
                    }, n.a.createElement("div", {
                        className: "tit"
                    }, n.a.createElement("a", {
                        href: "#none",
                        className: "header"
                    }, this.props.uiTexts.text_45), n.a.createElement("button", {
                        type: "button",
                        className: "btn_close layer",
                        onClick: this.handleClickClose
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_w_close"
                    }, "\ub808\uc774\uc5b4 \ub2eb\uae30"))), n.a.createElement("div", {
                        className: "inner"
                    }, n.a.createElement("div", {
                        className: "img"
                    }), n.a.createElement("p", {
                        className: "txt",
                        dangerouslySetInnerHTML: {
                            __html: this.props.uiTexts.text_54
                        }
                    }), n.a.createElement("div", {
                        className: "radios"
                    }, n.a.createElement("div", {
                        className: "radio"
                    }, n.a.createElement("label", null, n.a.createElement("input", {
                        type: "radio",
                        name: "satisfactionYn",
                        value: "Y",
                        onChange: this.handleSatisfactionChange
                    }), this.props.uiTexts.text_55)), n.a.createElement("div", {
                        className: "radio"
                    }, n.a.createElement("label", null, n.a.createElement("input", {
                        type: "radio",
                        name: "satisfactionYn",
                        value: "N",
                        onChange: this.handleSatisfactionChange
                    }), this.props.uiTexts.text_56))), n.a.createElement("dl", null, n.a.createElement("dd", null, n.a.createElement("label", {
                        htmlFor: "feedbackTextarea",
                        className: "sr-only"
                    }, "kr" === this.props.config.language ? "\ud53c\ub4dc\ubc31 \uc785\ub825" : "Enter feedback"), n.a.createElement("textarea", {
                        id: "feedbackTextarea",
                        placeholder: this.state.defaultTxt,
                        value: this.state.feedback,
                        onChange: this.handleClickTextarea
                    }), n.a.createElement("p", null, "(", "".concat(t, "/200"), ")")))), n.a.createElement("div", {
                        className: "btn_group"
                    }, n.a.createElement("a", {
                        href: "#none",
                        className: "cancel_btn alert_btn",
                        onClick: this.handleClickClose
                    }, this.props.uiTexts.text_33), n.a.createElement("a", {
                        href: "#none",
                        className: "send_btn alert_btn ".concat(e ? "disabled" : ""),
                        onClick: e ? null : this.handelClickSend
                    }, this.props.uiTexts.text_45))))
                }
            }
            var Vt = zt;
            class Jt extends a.PureComponent {
                constructor(e) {
                    super(e), this.state = {
                        defaultTxt: "1. \ubaa9\uc801 : \ucc38\uc5ec\uc790 \uacbd\ud488(\uae30\ud504\ud2f0\ucf58) \ucd94\ucca8 \ubc0f \ubc1c\uc1a1<br>2. \ud56d\ubaa9 : \ud3ec\ud0c8ID, \uc131\uba85 \ubc0f \uc5f0\ub77d\ucc98(ID\uc5f0\uacc4)\n3. \ubcf4\uc720\uae30\uac04 : \uacbd\ud488(\uae30\ud504\ud2f0\ucf58) \ucd94\ucca8 \ubc0f \ubc1c\uc1a1 \ud6c4 6\uac1c\uc6d4"
                    }, this.handleClickClose = this.handleClickClose.bind(this)
                }
                componentDidMount() {}
                handleClickClose() {
                    this.props.close()
                }
                render() {
                    return n.a.createElement("div", {
                        className: "layer_wrap layer_wrap_type2 advisor_layer_wrap agreement",
                        style: {
                            zIndex: "103"
                        }
                    }, n.a.createElement("div", {
                        className: "layer_inner"
                    }, n.a.createElement("div", {
                        className: "layer_cont"
                    }, n.a.createElement("h2", {
                        className: "layer_h_tit"
                    }, "\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9 \ub3d9\uc758"), n.a.createElement("div", {
                        className: "agreeText"
                    }, "1. \ubaa9\uc801 : \ucc38\uc5ec\uc790 \uacbd\ud488(\uae30\ud504\ud2f0\ucf58) \ucd94\ucca8 \ubc0f \ubc1c\uc1a1", n.a.createElement("br", null), "2. \ud56d\ubaa9 : \ud3ec\ud0c8ID, \uc131\uba85 \ubc0f \uc5f0\ub77d\ucc98(ID\uc5f0\uacc4)", n.a.createElement("br", null), "3. \ubcf4\uc720\uae30\uac04 : \uacbd\ud488(\uae30\ud504\ud2f0\ucf58) \ucd94\ucca8 \ubc0f ", n.a.createElement("br", null), "\xa0\xa0\xa0\xa0\ubc1c\uc1a1 \ud6c4 ", n.a.createElement("strong", {
                        style: {
                            color: "blue"
                        }
                    }, "6\uac1c\uc6d4")), n.a.createElement("p", {
                        className: "layer_txt"
                    }, "\u203b \ubbf8 \ub3d9\uc758 \uc2dc \ubd88\uc774\uc775 : \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9 \ub3d9\uc758\ub97c \ud558\uc9c0 ", n.a.createElement("br", null), "\xa0\xa0\xa0\xa0\xa0\uc54a\uc744 \uacbd\uc6b0 \uacbd\ud488 \ucd94\ucca8 \ubc0f \uc120\uc815 \ub300\uc0c1\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."), n.a.createElement("p", {
                        className: "layer_txt"
                    }, "\u203b \ucc38\uc5ec\uc790 \ucd94\ucca8 \uacbd\ud488 : ", n.a.createElement("br", null), "\xa0\xa0\xa0\xa0\xa0\uc544\uba54\ub9ac\uce74\ub178(\uc2a4\ud0c0\ubc85\uc2a4) \ucee4\ud53c \uae30\ud504\ud2f0\ucf58 100\uba85"), n.a.createElement("div", {
                        className: "btn_area"
                    }, n.a.createElement("button", {
                        type: "button",
                        className: "layer_btn",
                        onClick: this.handleClickClose
                    }, "\ud655\uc778")))))
                }
            }
            var Xt = Jt;
            a.PureComponent;
            class $t extends a.PureComponent {
                constructor(e) {
                    super(e), this.handleSetSetting = this.handleSetSetting.bind(this), this.handleClickClose = this.handleClickClose.bind(this)
                }
                componentDidMount() {}
                handleSetSetting() {
                    this.props.setFavorite({
                        action: this.props.action,
                        value: this.props.utterance
                    }), this.props.clickOverlay(), this.props.close()
                }
                handleClickClose() {
                    this.props.clickOverlay(), this.props.close()
                }
                render() {
                    let e;
                    return "del" === this.props.action && (e = this.props.uiTexts.text_15), "add" === this.props.action && (e = this.props.uiTexts.text_12), n.a.createElement("div", {
                        className: "layer_wrap advisor_layer_wrap",
                        style: {
                            zIndex: "103"
                        }
                    }, n.a.createElement("div", {
                        className: "layer_inner"
                    }, n.a.createElement("div", {
                        className: "layer_cont"
                    }, n.a.createElement("h2", {
                        className: "layer_h_tit"
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_star_on"
                    }), e), "warning" === this.props.action ? n.a.createElement("strong", {
                        className: "layer_sub_tit",
                        dangerouslySetInnerHTML: {
                            __html: this.props.uiTexts.text_14
                        }
                    }) : n.a.createElement("strong", {
                        className: "layer_sub_tit"
                    }, '"', this.props.utterance, '"'), "del" === this.props.action && n.a.createElement("p", {
                        className: "layer_txt"
                    }, this.props.uiTexts.text_16), "add" === this.props.action && n.a.createElement("p", {
                        className: "layer_txt"
                    }, this.props.uiTexts.text_13), "warning" === this.props.action ? n.a.createElement("div", {
                        className: "btn_area"
                    }, n.a.createElement("button", {
                        type: "button",
                        className: "layer_btn",
                        onClick: this.handleClickClose
                    }, this.props.uiTexts.text_29)) : n.a.createElement("div", {
                        className: "btn_area btn_area_half"
                    }, n.a.createElement("button", {
                        type: "button",
                        className: "layer_btn layer_btn_type",
                        onClick: this.handleClickClose
                    }, this.props.uiTexts.text_31), n.a.createElement("button", {
                        type: "button",
                        className: "layer_btn",
                        onClick: this.handleSetSetting
                    }, this.props.uiTexts.text_30))), n.a.createElement("button", {
                        type: "button",
                        className: "btn_close",
                        onClick: this.handleClickClose
                    }, n.a.createElement("span", {
                        className: "ico_comm ico_close"
                    }, "\ub808\uc774\uc5b4 \ub2eb\uae30"))))
                }
            }
            var Zt = $t,
                es = s(166),
                ts = s.n(es),
                ss = s(167),
                as = s.n(ss);
            class ns extends a.PureComponent {
                clickClose() {
                    this.props.closeUseTip()
                }
                setExpries() {
                    this.props.setExpires()
                }
                render() {
                    const e = {
                        display: "block"
                    };
                    return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                        className: "dimmed guide",
                        style: e
                    }), n.a.createElement("div", {
                        className: "layer_wrap guide",
                        style: e,
                        onClick: () => this.clickClose()
                    }, n.a.createElement("div", {
                        className: "layer_inner"
                    }, n.a.createElement("div", {
                        className: "layer_cont"
                    }, n.a.createElement("div", {
                        className: "layer_btn_group"
                    }, this.props.showExpiresBtn && n.a.createElement("button", {
                        type: "button",
                        className: "btn_never_view",
                        onClick: () => this.setExpries(),
                        "aria-label": this.props.uiTexts.text_41
                    }, this.props.uiTexts.text_41), n.a.createElement("button", {
                        type: "button",
                        className: "btn_ly_close",
                        onClick: () => this.clickClose(),
                        "aria-label": this.props.uiTexts.text_42
                    }, this.props.uiTexts.text_42)), n.a.createElement("img", {
                        src: void 0 != this.props.lang && "en" == this.props.lang ? as.a : ts.a,
                        className: "img_guide",
                        alt: this.props.uiTexts.text_58
                    })))))
                }
            }
            var is = ns;
            s(332), s(333), s(334), s(335);
            const os = {
                isDev: {
                    type: c.UrlQueryParamTypes.boolean,
                    queryParam: "isDev"
                },
                projectId: {
                    type: c.UrlQueryParamTypes.String,
                    queryParam: "projectId"
                },
                lang: {
                    type: c.UrlQueryParamTypes.String,
                    queryParam: "lang"
                }
            };
            class rs extends a.PureComponent {
                constructor(e) {
                    super(e), this.cookies = new p.a;
                    let t = !1;
                    if (window && window.parent && window !== window.parent) {
                        const e = {
                            enabled: !0,
                            publicInfo: {
                                icon: "../img/ico_chatbot.png",
                                title: "\uace0\ub824\ub300\ud559\uad50 \ucc57\ubd07",
                                iconSize: "68px",
                                themeColor: "#2f6e8d",
                                description: "[]",
                                iconPosition: "right",
                                popupMessage: '<HTML> <body> <p style="color:#2F6E8D;"><b>\n\ub3c4\uc6c0\uc774 \ud544\uc694\ud558\uc2e0\uac00\uc694?</b></body> </HTML>',
                                showPopupMessage: !1,
                                buttonBorderRadius: "50%"
                            }
                        };
                        window.parent.postMessage(e, "*"), t = !0
                    }
                    if (void 0 !== this.props.projectId && null !== this.props.projectId && "" !== this.props.projectId && this.props.configEvents.setProject(this.props.projectId), void 0 !== this.props.lang && null !== this.props.lang && "" !== this.props.lang) {
                        this.props.configEvents.setLang(this.props.lang);
                        let e = B;
                        "en" === this.props.lang && (e = Q), "cn" === this.props.lang && (e = H), this.props.uiEvents.Layout.setTexts(e)
                    }
                    void 0 !== this.props.isDev && null !== this.props.isDev && "" !== this.props.isDev && this.props.configEvents.setIsDev(this.props.isDev), t ? window.addEventListener("message", (function(e) {
                        !0 === e.data.botInit && window.botInit()
                    })) : this.botInit(), this.state = {
                        alertMsg: "",
                        closeAll: !1,
                        showUseTip: !1,
                        showExpiresBtn: !0,
                        agreedToTheTermsAndConditions: !1,
                        closeTermsAndConditions: !1
                    };
                    const s = localStorage.getItem("hasVisitedBefore");
                    s && Date.parse(s) > new Date ? this.state = { ...this.state,
                        showUseTip: !1
                    } : this.state = { ...this.state,
                        showUseTip: !0
                    }, this.handleSetSetting = this.handleSetSetting.bind(this), this.handleGetGreeting = this.handleGetGreeting.bind(this), this.closeTermsAndConditions = this.closeTermsAndConditions.bind(this), window.botInit = this.botInit.bind(this)
                }
                pushSet() {
                    return setTimeout(() => {
                        let e = {
                            sessionKey: this.props.message.sessionKey,
                            channelId: this.props.message.channelId,
                            isLogin: this.props.message.isLogin,
                            isDev: this.props.config.isDev,
                            projectId: this.props.config.projectId
                        };
                        this.props.messageEvents.getPush(e)
                    }, 1e3 * this.props.setting.pushTimeout * 60)
                }
                componentDidUpdate(e, t) {
                    void 0 !== this.props.setting.pushTimeout && "" !== this.props.setting.pushTimeout && this.props.setting.pushTimeout > 0 && (void 0 === e.message.isPushMessage && !1 === this.props.message.isPushMessage ? this.timer = this.pushSet() : !1 === e.message.isPushMessage && !1 === this.props.message.isPushMessage ? (void 0 !== this.timer && clearTimeout(this.timer), this.timer = this.pushSet()) : void 0 !== this.timer && clearTimeout(this.timer)), this.props.setting.isLogin && (void 0 !== this.timer_logout && clearTimeout(this.timer_logout), this.timer_logout = setTimeout(() => {
                        window.location.href = I.logOut
                    }, 36e5)), void 0 !== this.props.feedback.alertMessage && "" !== this.props.feedback.alertMessage && this.openAlert(this.props.feedback.alertMessage), e.setting.useArk !== this.props.setting.useArk && !0 === e.setting.useArk && !1 === this.props.setting.useArk && this.props.arkEvents.init(), e.setting.useArk !== this.props.setting.useArk && !1 === e.setting.useArk && !0 === this.props.setting.useArk && this.props.ark.query && this.props.arkEvents.get({
                        value: this.props.ark.query,
                        isDev: this.props.isDev
                    }), !this.props.setting.isLogin || null !== this.props.setting.consentInfo && "N" !== this.props.setting.consentInfo.consentStatus || (window.location.href = "https://kuchat.korea.ac.kr" + I.requireAgreement)
                }
                async botInit() {
                    const e = this.cookies.get("ssotoken");
                    if (console.log("ssotoken", !!e), e) {
                        await fetch(I.userInfo, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                    }
                    this.props.settingEvents.get(this.props), this.props.realTimeAnswerEvent.get(this.props), this.props.messageEvents.get(this.props)
                }
                openAlert(e) {
                    this.setState({
                        alertMsg: e
                    }), this.props.uiEvents.Layout.controlOverlay({
                        toggle: !0,
                        closeAll: this.state.closeAll
                    }), "" !== this.props.feedback.alertMessage && (this.setState({
                        closeAll: !0
                    }), this.props.feedbackEvents.clearAlert())
                }
                closeAlert() {
                    this.setState({
                        alertMsg: ""
                    }), this.props.uiEvents.Layout.controlOverlay({
                        toggle: !1,
                        closeAll: this.state.closeAll
                    }), !0 === this.state.closeAll && this.setState({
                        closeAll: !1
                    })
                }
                setExpires() {
                    let e = new Date,
                        t = new Date(e.setMonth(e.getMonth() + 1));
                    localStorage.setItem("hasVisitedBefore", t), this.setState({
                        showUseTip: !1
                    })
                }
                closeUseTip() {
                    this.setState({
                        showUseTip: !1
                    })
                }
                openUseTip() {
                    this.setState({
                        showUseTip: !0,
                        showExpiresBtn: !1
                    })
                }
                closeTermsAndConditions() {
                    this.setState({
                        closeTermsAndConditions: !0
                    })
                }
                handleSetSetting() {
                    this.props.message.isLogin && this.props.settingEvents.set({
                        settingData: this.props.setting,
                        isDev: this.props.config.isDev,
                        projectId: this.props.config.projectId
                    })
                }
                handleGetGreeting() {
                    this.props.messageEvents.get(this.props)
                }
                render() {
                    let e = "";
                    return e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark_mode" : "", n.a.createElement(n.a.Fragment, null, this.state.showUseTip && n.a.createElement(is, {
                        closeUseTip: () => this.closeUseTip(),
                        setExpires: () => this.setExpires(),
                        showExpiresBtn: this.state.showExpiresBtn,
                        uiTexts: this.props.ui.texts,
                        lang: this.props.lang
                    }), n.a.createElement("div", {
                        className: e
                    }, n.a.createElement("div", {
                        className: "chat_wrap"
                    }, n.a.createElement(Ye, {
                        setLang: this.handleSetLanguage,
                        lang: this.props.config.language,
                        openSideMenu: this.props.uiEvents.Layout.openSideMenu,
                        openFeedback: this.props.uiEvents.Layout.openFeedback,
                        loginAlert: this.props.uiEvents.Layout.openLoginAlert,
                        controlOverlay: this.props.uiEvents.Layout.controlOverlay,
                        isLogin: this.props.message.isLogin,
                        init: this.props.message.init,
                        menuPosition: this.props.setting.menuPosition,
                        uiTexts: this.props.ui.texts,
                        theme: this.props.setting.theme,
                        config: this.props.config,
                        openUseTip: () => this.openUseTip(),
                        toggleRealtimeAnswer: this.props.uiEvents.Layout.toggleRealtimeAnswer
                    }), n.a.createElement(Mt, {
                        data: this.props.message,
                        isDev: this.props.config.isDev,
                        favorite: this.props.setting.favorite,
                        toggleRealtimeAnswer: this.props.uiEvents.Layout.toggleRealtimeAnswer,
                        uiTexts: this.props.ui.texts,
                        lang: this.props.config.language,
                        isLogin: this.props.message.isLogin,
                        loginAlert: this.props.uiEvents.Layout.openLoginAlert,
                        updateIsGood: this.props.messageEvents.updateIsGood,
                        ref: e => {
                            this.ChatMessageList = e
                        }
                    }), n.a.createElement(Ve, {
                        config: this.props.config,
                        realtimeAnswer: this.props.realtimeAnswer,
                        getArk: this.props.arkEvents.get,
                        useArk: this.props.setting.useArk,
                        settingArk: this.props.settingEvents.useArk,
                        arkData: this.props.ark.data,
                        showFavorites: this.props.ui.showFavorites,
                        showRealtimeAnswer: this.props.ui.showRealtimeAnswer,
                        toggleFavorites: this.props.uiEvents.Layout.toggleFavorites,
                        toggleRealtimeAnswer: this.props.uiEvents.Layout.toggleRealtimeAnswer,
                        setFavorite: this.props.settingEvents.setFavorite,
                        favorite: this.props.setting.favorite,
                        sessionKey: this.props.message.sessionKey,
                        channelId: this.props.message.channelId,
                        responseType: this.props.message.responseType,
                        blockId: this.props.message.dialogTaskId,
                        isLogin: this.props.message.isLogin,
                        clearTextbox: this.props.message.clearTextbox,
                        send: this.props.messageEvents.send,
                        uiTexts: this.props.ui.texts,
                        reload: this.handleGetGreeting,
                        ref: e => {
                            this.ChatBottom = e
                        }
                    })), this.props.ui.overLayShow && n.a.createElement(Bt, {
                        click: this.props.uiEvents.Layout.clickOverlay,
                        isLoginAlert: this.props.ui.clickLoginAlert,
                        isViewAgree: this.props.ui.clickAgreeContent,
                        zIndex: this.props.ui.overLayzIndex
                    }), this.props.ui.clickSideMenu && n.a.createElement(Kt, {
                        config: this.props.config,
                        close: this.props.uiEvents.Layout.closeSideMenu,
                        openSetting: this.props.uiEvents.Layout.openSetting,
                        openFeedback: this.props.uiEvents.Layout.openFeedback,
                        loginAlert: this.props.uiEvents.Layout.openLoginAlert,
                        send: this.props.messageEvents.send,
                        sessionKey: this.props.message.sessionKey,
                        channelId: this.props.message.channelId,
                        isLogin: this.props.message.isLogin,
                        isLoding: this.props.message.isLoding,
                        userName: this.props.message.userName,
                        menuPosition: this.props.setting.menuPosition,
                        theme: this.props.setting.theme,
                        setMenuPostion: this.props.settingEvents.menuPosition,
                        setTheme: this.props.settingEvents.setTheme,
                        setSetting: this.handleSetSetting,
                        uiTexts: this.props.ui.texts,
                        lang: this.props.config.language,
                        quickMenu: this.props.setting.quickMenu,
                        openUseTip: () => this.openUseTip(),
                        consentInfo: this.props.setting.consentInfo
                    }), this.props.ui.clickSetting && n.a.createElement(Gt, {
                        config: this.props.config,
                        close: this.props.uiEvents.Layout.closeSetting,
                        alert: e => this.openAlert(e),
                        useArk: this.props.settingEvents.useArk,
                        menuPosition: this.props.settingEvents.menuPosition,
                        toggleGreeting: this.props.settingEvents.toggleGreeting,
                        toggleQuickMenu: this.props.settingEvents.toggleQuickMenu,
                        data: this.props.setting,
                        setSetting: this.handleSetSetting,
                        uiTexts: this.props.ui.texts
                    }), this.props.ui.clickFeedback && n.a.createElement(Vt, {
                        config: this.props.config,
                        view: this.props.uiEvents.Layout.openAgreeContent,
                        close: this.props.uiEvents.Layout.closeFeedback,
                        alert: e => this.openAlert(e),
                        write: this.props.feedbackEvents.write,
                        uiTexts: this.props.ui.texts,
                        isLogin: this.props.message.isLogin
                    }), this.props.ui.clickAgreeContent && n.a.createElement(Xt, {
                        close: this.props.uiEvents.Layout.closeAgreeContent
                    }), this.props.ui.clickLoginAlert && n.a.createElement(Yt, {
                        clickOverlay: this.props.uiEvents.Layout.clickOverlay,
                        close: this.props.uiEvents.Layout.closeLoginAlert,
                        clickSideMenu: this.props.ui.clickSideMenu,
                        uiTexts: this.props.ui.texts
                    }), this.props.ui.showFavoriteAlert && n.a.createElement(Zt, {
                        action: this.props.ui.favoriteAction,
                        utterance: this.props.ui.tempUtterance,
                        favorites: this.props.setting.favorite,
                        setFavorite: this.props.settingEvents.setFavorite,
                        clickOverlay: this.props.uiEvents.Layout.clickOverlay,
                        close: this.props.uiEvents.Layout.closeFavoriteAlert,
                        setSetting: this.handleSetSetting,
                        uiTexts: this.props.ui.texts
                    }), "" !== this.state.alertMsg && n.a.createElement(Ht, {
                        close: () => this.closeAlert(),
                        message: this.state.alertMsg,
                        uiTexts: this.props.ui.texts
                    })))
                }
            }
            var ls = Object(c.addUrlProps)({
                urlPropsQueryConfig: os
            })(Object(l.b)((function(e) {
                return {
                    ui: e.ui,
                    message: e.message,
                    ark: e.ark,
                    setting: e.setting,
                    feedback: e.feedback,
                    realtimeAnswer: e.realtimeAnswer,
                    config: e.config,
                    policy: e.policy
                }
            }), (function(e) {
                return {
                    configEvents: {
                        setProject: t => e(Pe(t)),
                        setLang: t => e(De(t)),
                        setIsDev: t => e(Ge(t))
                    },
                    realTimeAnswerEvent: {
                        get: t => e(Re(t))
                    },
                    messageEvents: {
                        get: t => e(A(t)),
                        send: t => e(R(t)),
                        init: t => e(M(t)),
                        getPush: t => e(U(t)),
                        getAdms: t => e(D(t)),
                        getCustom_greeting: t => e(P(t)),
                        updateIsGood: t => e(G(t))
                    },
                    uiEvents: {
                        Layout: {
                            openSideMenu: () => e(W()),
                            closeSideMenu: () => e(Y()),
                            openSetting: () => e(z()),
                            openFeedback: () => e(J()),
                            closeSetting: () => e(V()),
                            openFeedback: () => e(J()),
                            closeFeedback: () => e(X()),
                            openAgreeContent: () => e($()),
                            closeAgreeContent: () => e(Z()),
                            openLoginAlert: () => e(ee()),
                            closeLoginAlert: () => e(te()),
                            openSatisfactionSurvey: () => e(ne()),
                            closeSatisfactionSurvey: () => e(ie()),
                            clickOverlay: () => e(se()),
                            controlOverlay: t => e(ae(t)),
                            toggleFavorites: () => e(oe()),
                            closeFavoriteAlert: () => e(le()),
                            setTexts: t => e(ce(t)),
                            toggleRealtimeAnswer: t => e(pe(t)),
                            toggleUseTip: t => e(de(t))
                        }
                    },
                    arkEvents: {
                        get: t => e(me(t)),
                        init: () => e(ge())
                    },
                    settingEvents: {
                        get: t => e(ke(t)),
                        set: t => e(ve(t)),
                        useArk: t => e(xe(t)),
                        menuPosition: t => e(Se(t)),
                        toggleGreeting: t => e(fe(t)),
                        toggleQuickMenu: t => e(Ce(t)),
                        setFavorite: t => e(Ne(t)),
                        setTheme: t => e(Te(t))
                    },
                    feedbackEvents: {
                        write: t => e(Oe(t)),
                        clearAlert: () => e(we())
                    },
                    policyEvents: {
                        getContent: t => e(qe(t)),
                        saveConsent: t => e(Be(t))
                    }
                }
            }))(rs));
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var cs = Object(r.combineReducers)({
                    message: q,
                    ui: ue,
                    ark: be,
                    setting: Le,
                    feedback: Ae,
                    realtimeAnswer: Me,
                    config: Ke,
                    policy: He
                }),
                ps = s(2),
                ds = s(168),
                hs = s.n(ds);

            function us(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "post",
                    s = arguments.length > 2 ? arguments[2] : void 0,
                    a = arguments.length > 3 ? arguments[3] : void 0;
                return hs()({
                    method: t,
                    url: e,
                    data: s,
                    ...a
                }).then(e => ({
                    response: e
                })).catch(e => ({
                    error: e
                }))
            }

            function ms(e) {
                let t = I.chatbotUrl;
                return !0 === e && (t += "_develop"), t
            }
            const gs = {
                userRequest: {
                    timezone: "Asia/Seoul",
                    utterance: "",
                    lang: "kr",
                    block: {
                        id: "",
                        name: ""
                    },
                    user: {
                        id: "",
                        type: "botUserKey",
                        properties: {
                            channelCode: I.channelCode,
                            dialogTaskId: ""
                        }
                    }
                },
                bot: {
                    id: I.projectId
                }
            };

            function Es(e) {
                const t = ms(e.config.isDev) + I.getGreeting,
                    s = "ko" === e.lang ? "kr" : "en" === e.lang ? "en" : "kr";
                return us(t, "post", { ...gs,
                    userRequest: { ...gs.userRequest,
                        lang: s,
                        user: { ...gs.userRequest.user,
                            id: void 0 === e.message.sessionKey || null === e.message.sessionKey ? "" : e.message.sessionKey
                        }
                    },
                    bot: {
                        id: void 0 === e.projectId ? e.config.projectId : e.projectId
                    }
                }, {
                    timeout: I.timeout
                })
            }

            function bs(e) {
                let {
                    utterance: t,
                    sessionKey: s,
                    blockId: a,
                    blockName: n,
                    projectId: i,
                    isDev: o
                } = e;
                const r = ms(o) + I.sendQuestion,
                    l = 26 == i ? "kr" : "en";
                let c;
                return void 0 !== n && null !== n && "" !== n || (n = t), c = "" === a ? { ...gs,
                    userRequest: { ...gs.userRequest,
                        utterance: t,
                        lang: l,
                        user: { ...gs.userRequest.user,
                            id: s
                        }
                    },
                    bot: {
                        id: i
                    }
                } : { ...gs,
                    userRequest: { ...gs.userRequest,
                        utterance: t,
                        lang: l,
                        block: {
                            id: a,
                            name: n
                        },
                        user: { ...gs.userRequest.user,
                            id: s
                        }
                    },
                    bot: {
                        id: i
                    }
                }, us(r, "post", c, {
                    timeout: I.timeout
                })
            }

            function ys(e) {
                let {
                    sessionKey: t,
                    projectId: s,
                    isDev: a
                } = e;
                const n = ms(a) + I.getPush;
                let i;
                return i = { ...gs,
                    userRequest: { ...gs.userRequest,
                        user: { ...gs.userRequest.user,
                            id: t
                        }
                    },
                    bot: {
                        id: s
                    }
                }, us(n, "post", i, {
                    timeout: I.timeout
                })
            }

            function _s(e) {
                return us(ms(e.config.isDev) + I.getCustom_greeting, "post", { ...gs,
                    userRequest: { ...gs.userRequest,
                        user: { ...gs.userRequest.user,
                            id: void 0 === e.message.sessionKey || null === e.message.sessionKey ? "" : e.message.sessionKey
                        }
                    },
                    bot: {
                        id: void 0 === e.projectId ? e.config.projectId : e.projectId
                    }
                }, {
                    timeout: I.timeout
                })
            }

            function ks(e) {
                let {
                    sessionId: t,
                    projectId: s,
                    isDev: a
                } = e;
                const n = ms(a) + I.updateIsGood;
                let i;
                return i = { ...gs,
                    userRequest: { ...gs.userRequest,
                        user: { ...gs.userRequest.user,
                            id: e.data.data.sessionId
                        },
                        isGood: {
                            docId: e.data.data.docId,
                            isGood: e.data.data.isGood,
                            comment: e.data.data.comment
                        }
                    },
                    bot: {
                        id: I.projectId
                    }
                }, us(n, "post", i, {
                    timeout: I.timeout
                })
            }

            function* vs(e) {
                let t = w;
                "25" === e.payload.projectId && (t = j);
                let s = e.payload.first;
                const {
                    response: a,
                    error: n
                } = yield Object(ps.b)(Es, e.payload);
                if (a) yield Object(ps.e)({
                    type: E.SUCCESS,
                    payload: {
                        response: a,
                        first: s
                    }
                });
                else {
                    console.error("[ERROR][getGreeting]", n);
                    const s = {
                        data: {
                            version: "2.0",
                            template: t,
                            data: {
                                sessionId: "",
                                projectId: e.payload.projectId,
                                channelId: "",
                                responseType: "LOCAL_ANSWER",
                                messageFromUser: "",
                                scenarioyn: "N",
                                dialogTaskId: "",
                                dialogTaskName: "",
                                scenarioId: null,
                                userName: null,
                                isLogin: !1
                            },
                            state: {
                                code: 0,
                                detail: "SUCCESS"
                            }
                        }
                    };
                    yield Object(ps.e)({
                        type: E.SUCCESS,
                        payload: {
                            response: s
                        }
                    })
                }
            }

            function* xs(e) {
                let t = w;
                "25" === e.payload.projectId && (t = j), I.useLogin && !e.payload.isLogin && (t = L);
                const s = {
                    data: {
                        version: "2.0",
                        template: t,
                        data: {
                            sessionId: e.payload.sessionKey,
                            projectId: e.payload.projectId,
                            channelId: e.payload.channelId,
                            responseType: "LOCAL_ANSWER",
                            messageFromUser: e.payload.utterance,
                            scenarioyn: "N",
                            dialogTaskId: "",
                            dialogTaskName: "",
                            scenarioId: null,
                            userName: null,
                            isLogin: e.payload.isLogin,
                            docId: e.payload.docId
                        },
                        state: {
                            code: -1,
                            detail: "ERROR"
                        }
                    }
                };
                if (I.useLogin && e.payload.isLogin || !I.useLogin) {
                    const {
                        response: t,
                        error: a
                    } = yield Object(ps.b)(bs, e.payload);
                    t ? 0 === t.data.state.code ? yield Object(ps.e)({
                        type: y.SUCCESS,
                        payload: {
                            response: t
                        }
                    }): (console.error("[ERROR][sendMessage]", t.data.state), yield Object(ps.c)(500), yield Object(ps.e)({
                        type: y.SUCCESS,
                        payload: {
                            response: s
                        }
                    })): (console.error("[ERROR][sendMessage]", a), yield Object(ps.c)(500), yield Object(ps.e)({
                        type: y.SUCCESS,
                        payload: {
                            response: s
                        }
                    }))
                } else yield Object(ps.c)(500), yield Object(ps.e)({
                    type: y.SUCCESS,
                    payload: {
                        response: s
                    }
                })
            }

            function* Ss(e) {
                let t = w;
                "25" === e.payload.projectId && (t = j);
                const s = {
                        data: {
                            version: "2.0",
                            template: t,
                            data: {
                                sessionId: e.payload.sessionKey,
                                projectId: e.payload.projectId,
                                channelId: e.payload.channelId,
                                responseType: "LOCAL_ANSWER",
                                messageFromUser: e.payload.utterance,
                                scenarioyn: "N",
                                dialogTaskId: "",
                                dialogTaskName: "",
                                scenarioId: null,
                                userName: null,
                                isLogin: e.payload.isLogin
                            },
                            state: {
                                code: -1,
                                detail: "ERROR"
                            }
                        }
                    },
                    {
                        response: a,
                        error: n
                    } = yield Object(ps.b)(ys, e.payload);
                a ? 0 === a.data.state.code ? yield Object(ps.e)({
                    type: _.SUCCESS,
                    payload: {
                        response: a
                    }
                }): (console.error("[ERROR][pushMessage]", a.data.state), yield Object(ps.c)(500), yield Object(ps.e)({
                    type: _.SUCCESS,
                    payload: {
                        response: s
                    }
                })): (console.error("[ERROR][pushMessage]", n), yield Object(ps.c)(500), yield Object(ps.e)({
                    type: _.SUCCESS,
                    payload: {
                        response: s
                    }
                }))
            }

            function* fs(e) {
                const t = {
                        data: {
                            version: "2.0",
                            template: {
                                outputs: [{
                                    text: "\uc548\ub155\ud558\uc138\uc694. \uc6b0\uc1a1\ub300 \ucc57\ubd07\uc774\uc5d0\uc694.<br/>\uad81\uae08\ud55c \ub0b4\uc6a9\uc744 \uc9c8\ubb38\ud558\uba74 \uc5b8\uc81c\ub4e0 \ub2f5\ubcc0\ud574 \ub4dc\ub9b4\uac8c\uc694!<br/>\uc624\ub978\ucabd \uc0c1\ub2e8\uc758 \uba54\ub274(\u2261)\uc5d0\uc11c \ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud558\uba74 \uac15\uc758\uc2dc\uac04\ud45c, \ud559\uc0ac\uc77c\uc815, \uc774\uc218\ud559\uc810 \uc870\ud68c \ub4f1 \ub098\ub9cc\uc758 \ub9de\ucda4 \ucc57\ubd07\uc73c\ub85c \uc774\uc6a9\ud560 \uc218 \uc788\uc5b4\uc694!\n"
                                }]
                            },
                            state: {
                                code: -1,
                                detail: "ERROR"
                            }
                        }
                    },
                    {
                        response: s,
                        error: a
                    } = yield Object(ps.b)(_s, e.payload);
                s && 0 === s.data.state.code ? yield Object(ps.e)({
                    type: b.SUCCESS,
                    payload: {
                        response: s
                    }
                }): (console.error("[ERROR][getCustom_greeting]", s.data.state), yield Object(ps.c)(500), yield Object(ps.e)({
                    type: b.SUCCESS,
                    payload: {
                        response: t
                    }
                }))
            }

            function* Cs(e) {
                const t = {
                        data: {
                            version: "2.0",
                            template: w,
                            data: {
                                sessionId: e.payload.sessionKey,
                                projectId: e.payload.projectId,
                                channelId: e.payload.channelId,
                                responseType: "LOCAL_ANSWER",
                                messageFromUser: e.payload.utterance,
                                scenarioyn: "N",
                                dialogTaskId: "",
                                dialogTaskName: "",
                                scenarioId: null,
                                userName: null,
                                isLogin: e.payload.isLogin,
                                isGood: e.payload.isGood,
                                docId: e.payload.docId,
                                comment: e.payload.comment
                            },
                            state: {
                                code: -1,
                                detail: "ERROR"
                            }
                        }
                    },
                    {
                        response: s,
                        error: a
                    } = yield Object(ps.b)(ks, t);
                s ? 0 === s.data.state.code ? yield Object(ps.e)({
                    type: k.SUCCESS,
                    payload: {
                        response: s
                    }
                }): (console.error("[ERROR][updateIsGood]", s.data.state), yield Object(ps.c)(500), yield Object(ps.e)({
                    type: k.SUCCESS,
                    payload: {
                        response: t
                    }
                })): (console.error("[ERROR][updateIsGood]", a), yield Object(ps.c)(500), yield Object(ps.e)({
                    type: k.SUCCESS,
                    payload: {
                        response: t
                    }
                }))
            }

            function* Ns() {
                yield Object(ps.g)(E.REQUEST, vs), yield Object(ps.f)(y.REQUEST, xs), yield Object(ps.f)(_.REQUEST, Ss), yield Object(ps.g)(b.REQUEST, fs), yield Object(ps.f)(k.REQUEST, Cs)
            }

            function* Ts() {
                yield Object(ps.d)(Ns)
            }

            function Is(e) {
                let t = e.projectId;
                const s = {
                    query: e.value,
                    projectId: t
                };
                return us(ms(e.isDev) + I.getArk, "post", s)
            }

            function* Ls(e) {
                const {
                    response: t,
                    error: s
                } = yield Object(ps.b)(Is, e.payload);
                t ? yield Object(ps.e)({
                    type: v.SUCCESS,
                    payload: {
                        response: t
                    }
                }): console.error("[ERROR][getArk]", s)
            }

            function* Os() {
                yield Object(ps.g)(v.REQUEST, Ls)
            }

            function* ws() {
                yield Object(ps.d)(Os)
            }

            function js(e) {
                return us(ms(e.config.isDev) + I.getSetting, "post", {
                    projectId: void 0 === e.projectId ? e.config.projectId : e.projectId
                }, {
                    timeout: I.timeout
                })
            }

            function As(e) {
                return us(ms(e.isDev) + I.setSetting, "post", {
                    projectId: e.projectId,
                    setting: e.settingData
                }, {
                    timeout: I.timeout
                })
            }

            function* Rs(e) {
                const {
                    response: t,
                    error: s
                } = yield Object(ps.b)(js, e.payload);
                if (t) yield Object(ps.e)({
                    type: S.SUCCESS,
                    payload: {
                        response: t
                    }
                });
                else {
                    console.error("[ERROR][getSetting]", s);
                    const e = O;
                    yield Object(ps.e)({
                        type: S.SUCCESS,
                        payload: {
                            response: e
                        }
                    })
                }
            }

            function* Us(e) {
                const {
                    response: t,
                    error: s
                } = yield Object(ps.b)(As, e.payload);
                t ? yield Object(ps.e)({
                    type: f.SUCCESS,
                    payload: {
                        response: t
                    }
                }): console.error("[ERROR][setSetting]", s)
            }

            function* Ms() {
                yield Object(ps.g)(S.REQUEST, Rs), yield Object(ps.g)(f.REQUEST, Us)
            }

            function* Ps() {
                yield Object(ps.d)(Ms)
            }

            function Ds(e) {
                return us(ms(e.isDev) + I.writeFeedback, "post", e)
            }

            function* Gs(e) {
                const {
                    response: t,
                    error: s
                } = yield Object(ps.b)(Ds, e.payload);
                t ? yield Object(ps.e)({
                    type: C.SUCCESS,
                    payload: {
                        response: t
                    }
                }): (yield Object(ps.e)({
                    type: C.FAILURE,
                    payload: {
                        error: s
                    }
                }), console.error("[ERROR][wirteFeedback]", s))
            }

            function* Fs() {
                yield Object(ps.g)(C.REQUEST, Gs)
            }

            function* Ks() {
                yield Object(ps.d)(Fs)
            }

            function qs(e) {
                const t = {
                    projectId: void 0 === e.projectId ? e.config.projectId : e.projectId
                };
                return us(ms(e.config.isDev) + I.getRealtimeAnswer, "post", t)
            }

            function* Bs(e) {
                const {
                    response: t,
                    error: s
                } = yield Object(ps.b)(qs, e.payload);
                t ? yield Object(ps.e)({
                    type: x.SUCCESS,
                    payload: {
                        response: t
                    }
                }): console.error("[ERROR][getRealtimeAnswer]", s)
            }

            function* Qs() {
                yield Object(ps.g)(x.REQUEST, Bs)
            }

            function* Hs() {
                yield Object(ps.d)(Qs)
            }

            function Ws(e) {
                return us(I.getPolicyContent, "get", null, {
                    timeout: I.timeout
                })
            }

            function Ys(e) {
                return us(I.savePolicyConsent, "post", e, {
                    timeout: I.timeout
                })
            }

            function* zs(e) {
                const {
                    response: t,
                    error: s
                } = yield Object(ps.b)(Ws, e.payload);
                if (t) yield Object(ps.e)({
                    type: N.SUCCESS,
                    payload: {
                        response: t
                    }
                });
                else {
                    console.error("[ERROR][getPolicyContent]", s);
                    const e = w;
                    yield Object(ps.e)({
                        type: N.SUCCESS,
                        payload: {
                            response: e
                        }
                    })
                }
            }

            function* Vs(e) {
                const {
                    response: t,
                    error: s
                } = yield Object(ps.b)(Ys, e.payload);
                t ? yield Object(ps.e)({
                    type: T.SUCCESS,
                    payload: {
                        response: t
                    }
                }): console.error("[ERROR][savePolicyConsent]", s)
            }

            function* Js() {
                yield Object(ps.g)(N.REQUEST, zs), yield Object(ps.g)(T.REQUEST, Vs)
            }

            function* Xs() {
                yield Object(ps.d)(Js)
            }
            s(352);
            var $s = s(170),
                Zs = s(169);
            const ea = Object($s.a)();
            let ta = [ea];
            const sa = Object(r.createStore)(cs, Object(Zs.composeWithDevTools)(Object(r.applyMiddleware)(...ta)));
            ea.run((function*() {
                yield Object(ps.a)([Ts(), ws(), Ps(), Ks(), Hs(), Xs()])
            })), o.a.render(n.a.createElement(l.a, {
                store: sa
            }, n.a.createElement(ls, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(e => {
                e.unregister()
            })
        }
    },
    [
        [171, 1, 2]
    ]
]);
//# sourceMappingURL=main.c31a713c.chunk.js.map