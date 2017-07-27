"use strict";

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, Hyphenator = function(e) {
    var t, n, a, r = e, o = function() {
        var e = {}, t = function(t, n, a, r) {
            e[t] = {
                file: n,
                script: a,
                prompt: r
            };
        };
        return t("be", "be.js", 1, "Мова гэтага сайта не можа быць вызначаны аўтаматычна. Калі ласка пакажыце мову:"), 
        t("ca", "ca.js", 0, ""), t("cs", "cs.js", 0, "Jazyk této internetové stránky nebyl automaticky rozpoznán. Určete prosím její jazyk:"), 
        t("da", "da.js", 0, "Denne websides sprog kunne ikke bestemmes. Angiv venligst sprog:"), 
        t("bn", "bn.js", 4, ""), t("de", "de.js", 0, "Die Sprache dieser Webseite konnte nicht automatisch bestimmt werden. Bitte Sprache angeben:"), 
        t("el", "el-monoton.js", 6, ""), t("el-monoton", "el-monoton.js", 6, ""), t("el-polyton", "el-polyton.js", 6, ""), 
        t("en", "en-us.js", 0, "The language of this website could not be determined automatically. Please indicate the main language:"), 
        t("en-gb", "en-gb.js", 0, "The language of this website could not be determined automatically. Please indicate the main language:"), 
        t("en-us", "en-us.js", 0, "The language of this website could not be determined automatically. Please indicate the main language:"), 
        t("eo", "eo.js", 0, "La lingvo de ĉi tiu retpaĝo ne rekoneblas aŭtomate. Bonvolu indiki ĝian ĉeflingvon:"), 
        t("es", "es.js", 0, "El idioma del sitio no pudo determinarse autom%E1ticamente. Por favor, indique el idioma principal:"), 
        t("et", "et.js", 0, "Veebilehe keele tuvastamine ebaõnnestus, palun valige kasutatud keel:"), 
        t("fi", "fi.js", 0, "Sivun kielt%E4 ei tunnistettu automaattisesti. M%E4%E4rit%E4 sivun p%E4%E4kieli:"), 
        t("fr", "fr.js", 0, "La langue de ce site n%u2019a pas pu %EAtre d%E9termin%E9e automatiquement. Veuillez indiquer une langue, s.v.p.%A0:"), 
        t("grc", "grc.js", 6, ""), t("gu", "gu.js", 7, ""), t("hi", "hi.js", 5, ""), t("hu", "hu.js", 0, "A weboldal nyelvét nem sikerült automatikusan megállapítani. Kérem adja meg a nyelvet:"), 
        t("hy", "hy.js", 3, "Չհաջողվեց հայտնաբերել այս կայքի լեզուն։ Խնդրում ենք նշեք հիմնական լեզուն՝"), 
        t("it", "it.js", 0, "Lingua del sito sconosciuta. Indicare una lingua, per favore:"), 
        t("kn", "kn.js", 8, "ಜಾಲ ತಾಣದ ಭಾಷೆಯನ್ನು ನಿರ್ಧರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಮುಖ್ಯ ಭಾಷೆಯನ್ನು ಸೂಚಿಸಿ:"), 
        t("la", "la.js", 0, ""), t("lt", "lt.js", 0, "Nepavyko automatiškai nustatyti šios svetainės kalbos. Prašome įvesti kalbą:"), 
        t("lv", "lv.js", 0, "Šīs lapas valodu nevarēja noteikt automātiski. Lūdzu norādiet pamata valodu:"), 
        t("ml", "ml.js", 10, "ഈ വെ%u0D2C%u0D4D%u200Cസൈറ്റിന്റെ ഭാഷ കണ്ടുപിടിയ്ക്കാ%u0D28%u0D4D%u200D കഴിഞ്ഞില്ല. ഭാഷ ഏതാണെന്നു തിരഞ്ഞെടുക്കുക:"), 
        t("nb", "nb-no.js", 0, "Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:"), 
        t("no", "nb-no.js", 0, "Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:"), 
        t("nb-no", "nb-no.js", 0, "Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:"), 
        t("nl", "nl.js", 0, "De taal van deze website kan niet automatisch worden bepaald. Geef de hoofdtaal op:"), 
        t("or", "or.js", 11, ""), t("pa", "pa.js", 13, ""), t("pl", "pl.js", 0, "Języka tej strony nie można ustalić automatycznie. Proszę wskazać język:"), 
        t("pt", "pt.js", 0, "A língua deste site não pôde ser determinada automaticamente. Por favor indique a língua principal:"), 
        t("ru", "ru.js", 1, "Язык этого сайта не может быть определен автоматически. Пожалуйста укажите язык:"), 
        t("sk", "sk.js", 0, ""), t("sl", "sl.js", 0, "Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:"), 
        t("sr-cyrl", "sr-cyrl.js", 1, "Језик овог сајта није детектован аутоматски. Молим вас наведите језик:"), 
        t("sr-latn", "sr-latn.js", 0, "Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:"), 
        t("sv", "sv.js", 0, "Spr%E5ket p%E5 den h%E4r webbplatsen kunde inte avg%F6ras automatiskt. V%E4nligen ange:"), 
        t("ta", "ta.js", 14, ""), t("te", "te.js", 15, ""), t("tr", "tr.js", 0, "Bu web sitesinin dili otomatik olarak tespit edilememiştir. Lütfen dökümanın dilini seçiniz%A0:"), 
        t("uk", "uk.js", 1, "Мова цього веб-сайту не може бути визначена автоматично. Будь ласка, вкажіть головну мову:"), 
        t("ro", "ro.js", 0, "Limba acestui sit nu a putut fi determinată automat. Alege limba principală:"), 
        e;
    }(), i = function() {
        for (var e, t, n = r.document.getElementsByTagName("script"), a = 0, o = n[a], i = ""; o; ) o.src && -1 !== (e = (t = o.src).indexOf("Hyphenator.js")) && (i = t.substring(0, e)), 
        o = n[a += 1];
        return i || "//mnater.github.io/Hyphenator/";
    }(), s = function() {
        var t = !1;
        return -1 !== e.location.href.indexOf(i) && (t = !0), t;
    }(), l = !1, c = !1, h = !1, p = {
        video: !0,
        audio: !0,
        script: !0,
        code: !0,
        pre: !0,
        img: !0,
        br: !0,
        samp: !0,
        kbd: !0,
        var: !0,
        abbr: !0,
        acronym: !0,
        sub: !0,
        sup: !0,
        button: !0,
        option: !0,
        label: !0,
        textarea: !0,
        input: !0,
        math: !0,
        svg: !0,
        style: !0
    }, u = !0, d = "local", g = !1, y = !0, f = !1, m = function(t) {
        e.alert("Hyphenator.js says:\n\nAn Error occurred:\n" + t.message);
    }, b = function(t) {
        e.console.log(t.message);
    }, v = function(t, n) {
        n = n || r;
        var a;
        return e.document.createElementNS ? a = n.document.createElementNS("http://www.w3.org/1999/xhtml", t) : e.document.createElement && (a = n.document.createElement(t)), 
        a;
    }, w = !1, k = function() {
        var t, a = function(t) {
            var n = [ "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "абвгдеёжзийклмнопрстуфхцчшщъыьэюя", "أبتثجحخدذرزسشصضطظعغفقكلمنهوي", "աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆ", "ঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ", "ँंःअआइईउऊऋऌएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहऽािीुूृॄेैोौ्॒॑ॠॡॢॣ", "αβγδεζηθικλμνξοπρσςτυφχψω", "બહઅઆઇઈઉઊઋૠએઐઓઔાિીુૂૃૄૢૣેૈોૌકખગઘઙચછજઝઞટઠડઢણતથદધનપફસભમયરલળવશષ", "ಂಃಅಆಇಈಉಊಋಌಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲಳವಶಷಸಹಽಾಿೀುೂೃೄೆೇೈೊೋೌ್ೕೖೞೠೡ", "ກຂຄງຈຊຍດຕຖທນບປຜຝພຟມຢຣລວສຫອຮະັາິີຶືຸູົຼເແໂໃໄ່້໊໋ໜໝ", "ംഃഅആഇഈഉഊഋഌഎഏഐഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരറലളഴവശഷസഹാിീുൂൃെേൈൊോൌ്ൗൠൡൺൻർൽൾൿ", "ଁଂଃଅଆଇଈଉଊଋଌଏଐଓଔକଖଗଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହାିୀୁୂୃେୈୋୌ୍ୗୠୡ", "أبتثجحخدذرزسشصضطظعغفقكلمنهوي", "ਁਂਃਅਆਇਈਉਊਏਐਓਔਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਲ਼ਵਸ਼ਸਹਾਿੀੁੂੇੈੋੌ੍ੰੱ", "ஃஅஆஇஈஉஊஎஏஐஒஓஔகஙசஜஞடணதநனபமயரறலளழவஷஸஹாிீுூெேைொோௌ்ௗ", "ఁంఃఅఆఇఈఉఊఋఌఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరఱలళవశషసహాిీుూృౄెేైొోౌ్ౕౖౠౡ" ];
            return function(a) {
                var r, i, s, l = !1;
                return this.supportedBrowserLangs.hasOwnProperty(a) ? l = this.supportedBrowserLangs[a] : o.hasOwnProperty(a) ? (s = e.document.getElementsByTagName("body")[0], 
                (r = v("div", e)).id = "Hyphenator_LanguageChecker", r.style.width = "5em", r.style[t] = "auto", 
                r.style.hyphens = "auto", r.style.fontSize = "12px", r.style.lineHeight = "12px", 
                r.style.visibility = "hidden", r.lang = a, r.style["-webkit-locale"] = "'" + a + "'", 
                r.innerHTML = n[o[a].script], s.appendChild(r), i = r.offsetHeight, s.removeChild(r), 
                l = i > 12, this.supportedBrowserLangs[a] = l) : l = !1, l;
            };
        }, r = {
            support: !1,
            supportedBrowserLangs: {},
            property: "",
            checkLangSupport: {}
        };
        e.getComputedStyle ? (void 0 !== (t = e.getComputedStyle(e.document.getElementsByTagName("body")[0], null)).hyphens ? (r.support = !0, 
        r.property = "hyphens", r.checkLangSupport = a("hyphens")) : void 0 !== t["-webkit-hyphens"] ? (r.support = !0, 
        r.property = "-webkit-hyphens", r.checkLangSupport = a("-webkit-hyphens")) : void 0 !== t.MozHyphens ? (r.support = !0, 
        r.property = "-moz-hyphens", r.checkLangSupport = a("MozHyphens")) : void 0 !== t["-ms-hyphens"] && (r.support = !0, 
        r.property = "-ms-hyphens", r.checkLangSupport = a("-ms-hyphens")), n = r) : n = r;
    }, x = "hyphenate", S = "urlhyphenate", C = "Hyphenator" + Math.round(1e3 * Math.random()), E = C + "hide", O = new RegExp("\\s?\\b" + E + "\\b", "g"), H = C + "unhide", j = new RegExp("\\s?\\b" + H + "\\b", "g"), A = C + "css3hyphenate", N = "donthyphenate", L = 6, T = 1, P = function() {
        for (var e = null, t = !1, n = r.document.getElementsByTagName("script"), a = 0, o = n.length; !t && a < o; ) (e = n[a].getAttribute("src")) && -1 !== e.indexOf("Hyphenator.js?bm=true") && (t = !0), 
        a += 1;
        return t;
    }(), R = null, z = "", I = function() {
        var e = function(e) {
            this.element = e, this.hyphenated = !1, this.treated = !1;
        }, t = function() {
            this.count = 0, this.hyCount = 0, this.list = {};
        };
        return t.prototype = {
            add: function(t, n) {
                var a = new e(t);
                return this.list.hasOwnProperty(n) || (this.list[n] = []), this.list[n].push(a), 
                this.count += 1, a;
            },
            remove: function(e) {
                var t, n, a, r;
                for (t in this.list) if (this.list.hasOwnProperty(t)) for (n = 0; n < this.list[t].length; n += 1) if (this.list[t][n].element === e) {
                    a = n, r = t;
                    break;
                }
                this.list[r].splice(a, 1), this.count -= 1, this.hyCount -= 1;
            },
            each: function(e) {
                var t;
                for (t in this.list) this.list.hasOwnProperty(t) && (2 === e.length ? e(t, this.list[t]) : e(this.list[t]));
            }
        }, new t();
    }(), B = {}, D = {}, M = "(?:\\w*://)?(?:(?:\\w*:)?(?:\\w*)@)?(?:(?:(?:[\\d]{1,3}\\.){3}(?:[\\d]{1,3}))|(?:(?:www\\.|[a-zA-Z]\\.)?[a-zA-Z0-9\\-\\.]+\\.(?:[a-z]{2,4})))(?::\\d*)?(?:/[\\w#!:\\.?\\+=&%@!\\-]*)*", F = "[\\w-\\.]+@[\\w\\.]+", q = function() {
        var t, n = e.navigator.userAgent.toLowerCase();
        return t = String.fromCharCode(8203), -1 !== n.indexOf("msie 6") && (t = ""), -1 !== n.indexOf("opera") && -1 !== n.indexOf("version/10.00") && (t = ""), 
        t;
    }(), J = function(e) {
        return e;
    }, V = function(e) {
        return e;
    }, _ = function(e) {
        return e;
    }, U = !1, W = function(e) {
        var t = [], n = 0, a = 0, r = !0;
        for (t.push(e[0]), n = 1; n < e.length; n += 1) {
            for (a = 0; a < t.length; a += 1) if (t[a].contains(e[n])) {
                r = !1;
                break;
            }
            r && t.push(e[n]), r = !0;
        }
        return t;
    }, X = function(t) {
        var n, a, o, i = [];
        if (e.document.getElementsByClassName) i = r.document.getElementsByClassName(t); else if (e.document.querySelectorAll) i = r.document.querySelectorAll("." + t); else for (o = (n = r.document.getElementsByTagName("*")).length, 
        a = 0; a < o; a += 1) -1 !== n[a].className.indexOf(t) && -1 === n[a].className.indexOf(N) && i.push(n[a]);
        return i;
    }, $ = function() {
        var e;
        return 0 !== (e = U ? U() : X(x)).length && (e = W(e)), e;
    }, Z = "hidden", G = "wait", K = [], Y = function(t) {
        var n = (t = t || e).document, a = function() {
            var e, t, a, r = n.styleSheets.length, o = !1;
            for (e = 0; e < r; e += 1) {
                t = n.styleSheets[e];
                try {
                    if (t.cssRules) {
                        o = t;
                        break;
                    }
                } catch (e) {}
            }
            return !1 === o && ((a = n.createElement("style")).type = "text/css", n.getElementsByTagName("head")[0].appendChild(a), 
            o = n.styleSheets[n.styleSheets.length - 1]), o;
        }(), r = [], o = function(e) {
            var n, a, r, o, i, s = t.document.styleSheets, l = !1;
            for (o = 0; o < s.length; o += 1) {
                n = s[o];
                try {
                    n.cssRules ? r = n.cssRules : n.rules && (r = n.rules);
                } catch (e) {}
                if (r && r.length) for (i = 0; i < r.length; i += 1) (a = r[i]).selectorText === e && (l = {
                    index: i,
                    rule: a
                });
            }
            return l;
        }, i = function(e, t) {
            var n, r;
            return a.insertRule ? (n = a.cssRules ? a.cssRules.length : 0, r = a.insertRule(e + "{" + t + "}", n)) : a.addRule && (n = a.rules ? a.rules.length : 0, 
            a.addRule(e, t, n), r = n), r;
        }, s = function(e, t) {
            e.deleteRule ? e.deleteRule(t) : e.removeRule(t);
        };
        return {
            setRule: function(e, t) {
                var n, s, l;
                (s = o(e)) ? (l = s.rule.cssText ? s.rule.cssText : s.rule.style.cssText.toLowerCase()) !== e + " { " + t + " }" && (-1 !== l.indexOf(t) && (s.rule.style.visibility = ""), 
                n = i(e, t), r.push({
                    sheet: a,
                    index: n
                })) : (n = i(e, t), r.push({
                    sheet: a,
                    index: n
                }));
            },
            clearChanges: function() {
                for (var e = r.pop(); e; ) s(e.sheet, e.index), e = r.pop();
            }
        };
    }, Q = String.fromCharCode(173), ee = q, te = function(e) {
        var t, n = e.replace(/([:\/\.\?#&\-_,;!@]+)/gi, "$&" + ee).split(ee);
        for (t = 0; t < n.length; t += 1) n[t].length > 2 * L && (n[t] = n[t].replace(/(\w{3})(\w)/gi, "$1" + ee + "$2"));
        return "" === n[n.length - 1] && n.pop(), n.join(ee);
    }, ne = !0, ae = function() {
        return e.postMessage && e.addEventListener ? function() {
            var t = [], n = "Hyphenator_zeroTimeOut_message", a = function(a) {
                t.push(a), e.postMessage(n, "*");
            }, r = function(a) {
                a.source === e && a.data === n && (a.stopPropagation(), t.length > 0 && t.shift()());
            };
            return e.addEventListener("message", r, !0), a;
        }() : function(t) {
            e.setTimeout(t, 0);
        };
    }(), re = {}, oe = function t(n, a) {
        var o, i = e.document.addEventListener ? "addEventListener" : "attachEvent", s = e.document.addEventListener ? "removeEventListener" : "detachEvent", c = e.document.addEventListener ? "" : "on", p = function(t) {
            re[t.location.href] && b(new Error("Warning: multiple execution of Hyphenator.run() – This may slow down the script!")), 
            r = t || e, a(), re[r.location.href] = !0;
        }, u = function r(o) {
            var i, u, d;
            if (!o || "readystatechange" !== o.type || "interactive" === n.document.readyState || "complete" === n.document.readyState) if (n.document[s](c + "DOMContentLoaded", r, !1), 
            n.document[s](c + "readystatechange", r, !1), 0 !== (u = n.frames.length) && h) {
                if (h && u > 0 && o && "load" === o.type) {
                    for (n[s](c + "load", r, !1), i = 0; i < u; i += 1) {
                        d = void 0;
                        try {
                            d = e.frames[i].document.toString();
                        } catch (e) {
                            d = void 0;
                        }
                        d && t(n.frames[i], a);
                    }
                    p(n);
                }
            } else n[s](c + "load", r, !1), l = !0, p(n);
        };
        if (l || "complete" === n.document.readyState) l = !0, u({
            type: "load"
        }); else {
            n.document[i](c + "DOMContentLoaded", u, !1), n.document[i](c + "readystatechange", u, !1), 
            n[i](c + "load", u, !1), o = !1;
            try {
                o = !e.frameElement;
            } catch (e) {}
            o && n.document.documentElement.doScroll && function t() {
                try {
                    n.document.documentElement.doScroll("left");
                } catch (n) {
                    return void e.setTimeout(t, 1);
                }
                re[n.location.href] || (l = !0, p(n));
            }();
        }
    }, ie = function e(t, n) {
        try {
            return t.getAttribute("lang") ? t.getAttribute("lang").toLowerCase() : t.getAttribute("xml:lang") ? t.getAttribute("xml:lang").toLowerCase() : "html" !== t.tagName.toLowerCase() ? e(t.parentNode, n) : n ? R : null;
        } catch (t) {}
    }, se = function t(n) {
        var a, s = (n = n || r).document.getElementsByTagName("html")[0], l = n.document.getElementsByTagName("meta");
        if (!(R = ie(s, !1))) for (a = 0; a < l.length; a += 1) l[a].getAttribute("http-equiv") && "content-language" === l[a].getAttribute("http-equiv").toLowerCase() && (R = l[a].getAttribute("content").toLowerCase()), 
        l[a].getAttribute("name") && "dc.language" === l[a].getAttribute("name").toLowerCase() && (R = l[a].getAttribute("content").toLowerCase()), 
        l[a].getAttribute("name") && "language" === l[a].getAttribute("name").toLowerCase() && (R = l[a].getAttribute("content").toLowerCase());
        !R && h && r.frameElement && t(e.parent), R || "" === z || (R = z), R || (R = function() {
            var t, a, r = "", s = Math.floor((n.outerWidth - 450) / 2) + e.screenX, l = Math.floor((n.outerHeight - 300) / 2) + e.screenY, c = "";
            return e.showModalDialog && -1 !== n.location.href.indexOf(i) ? t = e.showModalDialog(i + "modalLangDialog.html", o, "dialogWidth: 450px; dialogHeight: 300px; dialogtop: " + l + "; dialogleft: " + s + "; center: on; resizable: off; scroll: off;") : (a = function() {
                var e, t = "";
                for (e in o) o.hasOwnProperty(e) && (t += e + ", ");
                return t = t.substring(0, t.length - 2);
            }(), c = (c = e.navigator.language || e.navigator.userLanguage).substring(0, 2), 
            r = o[c] && "" !== o[c].prompt ? o[c].prompt : o.en.prompt, r += " (ISO 639-1)\n\n" + a, 
            t = e.prompt(e.unescape(r), c).toLowerCase()), t;
        }()), s.lang = R;
    }, le = function() {
        var e, t, i, s = 0, l = function t(i, s, l) {
            l = l || !1;
            var c, h, u = 0, d = !0, g = function() {
                (a = new Y(r)).setRule("." + A, n.property + ": auto;"), a.setRule("." + N, n.property + ": manual;"), 
                h !== s && -1 !== n.property.indexOf("webkit") && a.setRule("." + A, "-webkit-locale : " + h + ";"), 
                i.className = i.className + " " + A;
            }, y = function() {
                P && h !== R || (o.hasOwnProperty(h) ? D[h] = !0 : o.hasOwnProperty(h.split("-")[0]) ? (h = h.split("-")[0], 
                D[h] = !0) : P || (d = !1, m(new Error('Language "' + h + '" is not yet supported.'))), 
                d && ("hidden" === Z && (i.className = i.className + " " + E), I.add(i, h)));
            };
            for (h = i.lang && "string" == typeof i.lang ? i.lang.toLowerCase() : s && "" !== s ? s.toLowerCase() : ie(i, !0), 
            l ? h !== s ? w && n.support && n.checkLangSupport(h) ? g() : y() : w && n.support && n.checkLangSupport(h) || y() : w && n.support && n.checkLangSupport(h) ? g() : y(), 
            c = i.childNodes[u]; c; ) 1 !== c.nodeType || p[c.nodeName.toLowerCase()] || -1 !== c.className.indexOf(N) || -1 !== c.className.indexOf(S) || e[c] || t(c, h, !0), 
            u += 1, c = i.childNodes[u];
        };
        if (w && k(), P) e = r.document.getElementsByTagName("body")[0], l(e, R, !1); else {
            for (w || "hidden" !== Z || (K.push(new Y(r)), K[K.length - 1].setRule("." + x, "visibility: hidden;"), 
            K[K.length - 1].setRule("." + E, "visibility: hidden;"), K[K.length - 1].setRule("." + H, "visibility: visible;")), 
            i = (e = $())[s]; i; ) l(i, "", !1), i = e[s += 1];
            for (i = (t = X(S))[s = 0]; i; ) (function e(n) {
                var a, r = 0;
                for (a = n.childNodes[r]; a; ) 1 !== a.nodeType || p[a.nodeName.toLowerCase()] || -1 !== a.className.indexOf(N) || -1 !== a.className.indexOf(x) || t[a] ? 3 === a.nodeType && (a.data = te(a.data)) : e(a), 
                r += 1, a = n.childNodes[r];
            })(i), i = t[s += 1];
        }
        if (0 === I.count) {
            for (s = 0; s < K.length; s += 1) K[s].clearChanges();
            _(r.location.href);
        }
    }, ce = function() {
        this.int2code = [], this.code2int = {}, this.add = function(e) {
            this.code2int[e] || (this.int2code.push(e), this.code2int[e] = this.int2code.length - 1);
        };
    }, he = function(t) {
        this.keys = function() {
            var n, a;
            if (Object.prototype.hasOwnProperty.call(e, "Uint8Array")) return new e.Uint8Array(t);
            for ((a = []).length = t, n = a.length - 1; n >= 0; n -= 1) a[n] = 0;
            return a;
        }(), this.startIndex = 1, this.actualIndex = 2, this.lastValueIndex = 2, this.add = function(e) {
            0 !== e && (this.keys[this.actualIndex] = e, this.lastValueIndex = this.actualIndex), 
            this.actualIndex += 1;
        }, this.finalize = function() {
            var e = this.startIndex;
            return this.keys[e] = this.lastValueIndex - e, this.startIndex = this.lastValueIndex + 1, 
            this.actualIndex = this.startIndex + 1, e;
        };
    }, pe = function(t) {
        var n, a, r, o, i, s = 0;
        for (t.charMap = new ce(), n = 0; n < t.patternChars.length; n += 1) t.charMap.add(t.patternChars.charCodeAt(n));
        if (a = t.charMap.code2int, t.valueStore = r = new he(t.valueStoreLength), Object.prototype.hasOwnProperty.call(e, "Int32Array")) t.indexedTrie = new e.Int32Array(2 * t.patternArrayLength); else for (t.indexedTrie = [], 
        t.indexedTrie.length = 2 * t.patternArrayLength, n = t.indexedTrie.length - 1; n >= 0; n -= 1) t.indexedTrie[n] = 0;
        o = t.indexedTrie, i = 2 * t.charMap.int2code.length;
        for (n in t.patterns) t.patterns.hasOwnProperty(n) && function(e, t) {
            var n = 0, l = 0, c = 0, h = 0, p = 0, u = !1;
            for (n = 0; n < t.length; n += 1) l = t.charCodeAt(n), (n + 1) % e != 0 ? l >= 49 && l <= 57 ? (r.add(l - 48), 
            u = !0) : (u || r.add(0), u = !1, -1 === p && (s = p = s + i, o[h + 2 * c] = p), 
            c = a[l], 0 === (p = o[(h = p) + 2 * c]) && (o[h + 2 * c] = -1, p = -1)) : (l >= 49 && l <= 57 ? (r.add(l - 48), 
            o[h + 2 * c + 1] = r.finalize()) : (u || r.add(0), r.add(0), -1 === p && (s = p = s + i, 
            o[h + 2 * c] = p), c = a[l], 0 === o[(h = p) + 2 * c] && (o[h + 2 * c] = -1), o[h + 2 * c + 1] = r.finalize()), 
            h = 0, p = 0, u = !1);
        }(parseInt(n, 10), t.patterns[n]);
    }, ue = function(e, t) {
        var n, a = [], r = e.split("");
        for (n = 0; n <= r.length; n += 1) t[n] && 0 !== t[n] && a.push(t[n]), r[n] && a.push(r[n]);
        return a.join("");
    }, de = function(e) {
        var t, n, a, r = e.split(", "), o = {};
        for (t = 0, n = r.length; t < n; t += 1) a = r[t].replace(/-/g, ""), o.hasOwnProperty(a) || (o[a] = r[t]);
        return o;
    }, ge = function(t, n) {
        var a, r, l, c, h = !1;
        if (o.hasOwnProperty(t) && !Hyphenator.languages[t]) {
            if (a = i + "patterns/" + o[t].file, s && !P) {
                r = null;
                try {
                    r = new e.XMLHttpRequest();
                } catch (t) {
                    try {
                        r = new e.ActiveXObject("Microsoft.XMLHTTP");
                    } catch (t) {
                        try {
                            r = new e.ActiveXObject("Msxml2.XMLHTTP");
                        } catch (e) {
                            r = null;
                        }
                    }
                }
                r && (r.open("HEAD", a, !0), r.setRequestHeader("Cache-Control", "no-cache"), r.onreadystatechange = function() {
                    if (2 === r.readyState) {
                        if (r.status >= 400) return m(new Error("Could not load\n" + a)), void delete D[t];
                        r.abort();
                    }
                }, r.send(null));
            }
            v && (l = e.document.getElementsByTagName("head").item(0), (c = v("script", e)).src = a, 
            c.type = "text/javascript", c.charset = "utf8", c.onload = c.onreadystatechange = function() {
                h || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (h = !0, 
                n(), c.onload = c.onreadystatechange = null, l && c.parentNode && l.removeChild(c));
            }, l.appendChild(c));
        }
    }, ye = function(n) {
        var a, r = Hyphenator.languages[n];
        r.prepared || (u && (r.cache = {}), g && (r.redPatSet = {}), r.hasOwnProperty("exceptions") && (Hyphenator.addExceptions(n, r.exceptions), 
        delete r.exceptions), B.hasOwnProperty("global") && (B.hasOwnProperty(n) ? B[n] += ", " + B.global : B[n] = B.global), 
        B.hasOwnProperty(n) ? (r.exceptions = de(B[n]), delete B[n]) : r.exceptions = {}, 
        pe(r), a = String().normalize ? "[\\w" + r.specialChars + r.specialChars.normalize("NFD") + String.fromCharCode(173) + String.fromCharCode(8204) + "-]{" + L + ",}" : "[\\w" + r.specialChars + String.fromCharCode(173) + String.fromCharCode(8204) + "-]{" + L + ",}", 
        r.genRegExp = new RegExp("(" + a + ")|(" + M + ")|(" + F + ")", "gi"), r.prepared = !0), 
        t && (t.deferred.whenAllDone = function() {
            var a = {
                charMap: {
                    code2int: r.charMap.code2int
                },
                charSubstitution: r.charSubstitution,
                exceptions: r.exceptions,
                indexedTrie: Array.prototype.slice.call(r.indexedTrie),
                leftmin: r.leftmin,
                prepared: r.prepared,
                rightmin: r.rightmin,
                specialChars: r.specialChars,
                valueStore: {
                    keys: Array.prototype.slice.call(r.valueStore.keys)
                }
            };
            t.setItem(n, e.JSON.stringify(a));
        });
    }, fe = function(n) {
        var a, r, o, i = function() {
            var e;
            for (e in D) D.hasOwnProperty(e) && Hyphenator.languages.hasOwnProperty(e) && (delete D[e], 
            ye(e), n(e));
        };
        if (y) {
            for (a in D) if (D.hasOwnProperty(a)) if (t && t.test(a)) {
                if (Hyphenator.languages[a] = e.JSON.parse(t.getItem(a)), Object.prototype.hasOwnProperty.call(e, "Int32Array") && (Hyphenator.languages[a].indexedTrie = new e.Int32Array(Hyphenator.languages[a].indexedTrie), 
                Hyphenator.languages[a].valueStore.keys = new e.Uint8Array(Hyphenator.languages[a].valueStore.keys)), 
                B.hasOwnProperty("global")) {
                    r = de(B.global);
                    for (o in r) r.hasOwnProperty(o) && (Hyphenator.languages[a].exceptions[o] = r[o]);
                }
                if (B.hasOwnProperty(a)) {
                    r = de(B[a]);
                    for (o in r) r.hasOwnProperty(o) && (Hyphenator.languages[a].exceptions[o] = r[o]);
                    delete B[a];
                }
                r = String().normalize ? "[\\w" + Hyphenator.languages[a].specialChars + Hyphenator.languages[a].specialChars.normalize("NFD") + String.fromCharCode(173) + String.fromCharCode(8204) + "-]{" + L + ",}" : "[\\w" + Hyphenator.languages[a].specialChars + String.fromCharCode(173) + String.fromCharCode(8204) + "-]{" + L + ",}", 
                Hyphenator.languages[a].genRegExp = new RegExp("(" + r + ")|(" + M + ")|(" + F + ")", "gi"), 
                u && (Hyphenator.languages[a].cache || (Hyphenator.languages[a].cache = {})), delete D[a], 
                n(a);
            } else ge(a, i);
            i();
        } else {
            for (a in Hyphenator.languages) Hyphenator.languages.hasOwnProperty(a) && ye(a);
            n("*");
        }
    }, me = function() {
        var e, t, n = Hyphenator.doHyphenation ? "Hy-phen-a-tion" : "Hyphenation", a = r.document.getElementById("HyphenatorToggleBox");
        a ? a.firstChild.data = n : (e = r.document.getElementsByTagName("body")[0], (a = v("div", r)).setAttribute("id", "HyphenatorToggleBox"), 
        a.setAttribute("class", N), t = r.document.createTextNode(n), a.appendChild(t), 
        a.onclick = Hyphenator.toggleHyphenation, a.style.position = "absolute", a.style.top = "0px", 
        a.style.right = "0px", a.style.margin = "0", a.style.backgroundColor = "#AAAAAA", 
        a.style.color = "#FFFFFF", a.style.font = "6pt Arial", a.style.letterSpacing = "0.2em", 
        a.style.padding = "3px", a.style.cursor = "pointer", a.style.WebkitBorderBottomLeftRadius = "4px", 
        a.style.MozBorderRadiusBottomleft = "4px", a.style.borderBottomLeftRadius = "4px", 
        e.appendChild(a));
    }, be = function(e, t) {
        var n, a;
        for (n in e) e.hasOwnProperty(n) && (a = t.replace(new RegExp(n, "g"), e[n]));
        return a;
    }, ve = function() {
        return Object.prototype.hasOwnProperty.call(e, "Int32Array") ? new e.Int32Array(32) : [];
    }(), we = function() {
        return Object.prototype.hasOwnProperty.call(e, "Uint8Array") ? new e.Uint8Array(32) : [];
    }(), ke = function e(t, n, a) {
        var r, o, i, s, l, c, h, p, d, y, f = "", m = we, b = a.length, v = "", w = t.charMap.code2int, k = 0, x = 0, S = 0, C = t.indexedTrie, E = t.valueStore.keys, O = ve;
        if ("" === (a = J(a, n))) v = ""; else if (u && t.cache && t.cache.hasOwnProperty(a)) v = t.cache[a]; else if (-1 !== a.indexOf(Q)) v = a; else if (t.exceptions.hasOwnProperty(a)) v = t.exceptions[a].replace(/-/g, Q); else if (-1 !== a.indexOf("-")) {
            for (r = a.split("-"), o = 0; o < r.length; o += 1) r[o] = e(t, n, r[o]);
            v = r.join("-");
        } else {
            for (i = a.toLowerCase(), String().normalize && (i = i.normalize()), t.hasOwnProperty("charSubstitution") && (i = be(t.charSubstitution, i)), 
            -1 !== a.indexOf("'") && (i = i.replace(/'/g, "’")), s = (i = "_" + i + "_").length, 
            l = 0; l < s; l += 1) m[l] = 0, p = i.charCodeAt(l), w.hasOwnProperty(p) ? O[l] = w[i.charCodeAt(l)] : O[l] = -1;
            for (l = 0; l < s; l += 1) for (k = 0, f = "", c = l; c < s && -1 !== (d = O[c]); c += 1) {
                if (g && (f += i.charAt(c)), x = C[k + 2 * d], (S = C[k + 2 * d + 1]) > 0) {
                    for (h = E[S]; h; ) E[S + 1 + (h -= 1)] > m[l + h] && (m[l + h] = E[S + 1 + h]);
                    g && (t.redPatSet || (t.redPatSet = {}), y = E.subarray ? E.subarray(S + 1, S + 1 + E[S]) : E.slice(S + 1, S + 1 + E[S]), 
                    t.redPatSet[f] = ue(f, y));
                }
                if (!(x > 0)) break;
                k = x;
            }
            for (h = 0; h < b; h += 1) h >= t.leftmin && h <= b - t.rightmin && m[h + 1] % 2 != 0 ? v += Q + a.charAt(h) : v += a.charAt(h);
        }
        return v = V(v, n), u && (t.cache[a] = v), v;
    }, xe = function e(t) {
        var n, a, r, o = 0;
        switch (Q) {
          case "|":
            n = "\\|";
            break;

          case "+":
            n = "\\+";
            break;

          case "*":
            n = "\\*";
            break;

          default:
            n = Q;
        }
        switch (ee) {
          case "|":
            a = "\\|";
            break;

          case "+":
            a = "\\+";
            break;

          case "*":
            a = "\\*";
            break;

          default:
            a = ee;
        }
        for (r = t.childNodes[o]; r; ) 3 === r.nodeType ? (r.data = r.data.replace(new RegExp(n, "g"), ""), 
        r.data = r.data.replace(new RegExp(a, "g"), "")) : 1 === r.nodeType && e(r), o += 1, 
        r = t.childNodes[o];
    }, Se = function() {
        var t = function() {
            this.oncopyHandler = function(t) {
                var n, a, r, o, i, s = (t = t || e.event).target || t.srcElement, l = s.ownerDocument, c = l.getElementsByTagName("body")[0], h = l.defaultView || l.parentWindow;
                s.tagName && p[s.tagName.toLowerCase()] || ((n = l.createElement("div")).style.color = e.getComputedStyle ? h.getComputedStyle(c, null).backgroundColor : "#FFFFFF", 
                n.style.fontSize = "0px", c.appendChild(n), e.getSelection ? (t.stopPropagation(), 
                a = h.getSelection(), r = a.getRangeAt(0), n.appendChild(r.cloneContents()), xe(n), 
                a.selectAllChildren(n), i = function() {
                    n.parentNode.removeChild(n), a.removeAllRanges(), a.addRange(r);
                }) : (t.cancelBubble = !0, a = h.document.selection, r = a.createRange(), n.innerHTML = r.htmlText, 
                xe(n), (o = c.createTextRange()).moveToElementText(n), o.select(), i = function() {
                    n.parentNode.removeChild(n), "" !== r.text && r.select();
                }), ae(i));
            }, this.removeOnCopy = function(t) {
                var n = t.ownerDocument.getElementsByTagName("body")[0];
                n && (t = t || n, e.removeEventListener ? t.removeEventListener("copy", this.oncopyHandler, !0) : t.detachEvent("oncopy", this.oncopyHandler));
            }, this.registerOnCopy = function(t) {
                var n = t.ownerDocument.getElementsByTagName("body")[0];
                n && (t = t || n, e.addEventListener ? t.addEventListener("copy", this.oncopyHandler, !0) : t.attachEvent("oncopy", this.oncopyHandler));
            };
        };
        return !!ne && new t();
    }(), Ce = function() {
        var e, n, a = !0, r = {};
        if (I.each(function(e) {
            var t, n = e.length;
            for (t = 0; t < n; t += 1) a = a && e[t].hyphenated, r.hasOwnProperty(e[t].element.baseURI) || (r[e[t].element.ownerDocument.location.href] = !0), 
            r[e[t].element.ownerDocument.location.href] = r[e[t].element.ownerDocument.location.href] && e[t].hyphenated;
        }), a) {
            for ("hidden" === Z && "progressive" === G && I.each(function(e) {
                var t, n, a = e.length;
                for (t = 0; t < a; t += 1) (n = e[t].element).className = n.className.replace(j, ""), 
                "" === n.className && n.removeAttribute("class");
            }), e = 0; e < K.length; e += 1) K[e].clearChanges();
            for (n in r) r.hasOwnProperty(n) && _(n);
            t && t.deferred.whenAllDone && (t.deferred.whenAllDone.call(), t.deferred.whenAllDone = void 0);
        }
    }, Ee = function(e) {
        var t, n;
        switch (Q) {
          case "|":
            t = "\\|";
            break;

          case "+":
            t = "\\+";
            break;

          case "*":
            t = "\\*";
            break;

          default:
            t = Q;
        }
        return e = e.replace(/[\s]*$/, ""), T >= 2 && ((n = e.split(" "))[1] = n[1].replace(new RegExp(t, "g"), ""), 
        n[1] = n[1].replace(new RegExp(q, "g"), ""), n = n.join(" ")), 3 === T && (n = n.replace(/[ ]+/g, String.fromCharCode(160))), 
        n;
    }, Oe = function(e, t) {
        var n, a, r, o, i = t.element;
        if (Hyphenator.languages.hasOwnProperty(e) && Hyphenator.doHyphenation) for (o = Hyphenator.languages[e], 
        n = function(t, n, a, r) {
            return void 0 !== a && "" !== a || "" !== r && void 0 !== r ? te(t) : ke(o, e, n);
        }, ne && "body" !== i.tagName.toLowerCase() && Se.registerOnCopy(i), r = 0, a = i.childNodes[r]; a; ) 3 === a.nodeType && /\S/.test(a.data) && a.data.length >= L && (a.data = a.data.replace(o.genRegExp, n), 
        1 !== T && (a.data = a.data.replace(/[\S]+ [\S]+[\s]*$/, Ee))), r += 1, a = i.childNodes[r];
        "hidden" === Z && "wait" === G && (i.className = i.className.replace(O, ""), "" === i.className && i.removeAttribute("class")), 
        "hidden" === Z && "progressive" === G && (i.className = i.className.replace(O, " " + H)), 
        t.hyphenated = !0, I.hyCount += 1, I.count <= I.hyCount && Ce();
    }, He = function(e) {
        function t(e, t, n) {
            return function() {
                return e(t, n);
            };
        }
        var n, a;
        if ("*" === e) I.each(function(e, n) {
            var a, r = n.length;
            for (a = 0; a < r; a += 1) ae(t(Oe, e, n[a]));
        }); else if (I.list.hasOwnProperty(e)) for (a = I.list[e].length, n = 0; n < a; n += 1) ae(t(Oe, e, I.list[e][n]));
    }, je = function() {
        I.each(function(e) {
            var t, n = e.length;
            for (t = 0; t < n; t += 1) xe(e[t].element), ne && Se.removeOnCopy(e[t].element), 
            e[t].hyphenated = !1;
        });
    }, Ae = function() {
        var n;
        try {
            if ("none" !== d && void 0 !== e.JSON && void 0 !== e.localStorage && void 0 !== e.sessionStorage && void 0 !== e.JSON.stringify && void 0 !== e.JSON.parse) {
                switch (d) {
                  case "session":
                    n = e.sessionStorage;
                    break;

                  case "local":
                    n = e.localStorage;
                    break;

                  default:
                    n = void 0;
                }
                n.setItem("storageTest", "1"), n.removeItem("storageTest");
            }
        } catch (e) {
            n = void 0;
        }
        t = n ? {
            prefix: "Hyphenator_" + Hyphenator.version + "_",
            store: n,
            deferred: {},
            test: function(e) {
                return !!this.store.getItem(this.prefix + e);
            },
            getItem: function(e) {
                var t = this.store.getItem(this.prefix + e);
                return t = t.replace(/-(\d{2,}|[2-9])/g, function(e, t) {
                    var n = parseInt(t, 10), a = "";
                    if (String.prototype.repeat) a = "0,".repeat(n - 1); else for (;n > 1; ) a += "0,", 
                    n -= 1;
                    return a += "0";
                });
            },
            setItem: function(e, t) {
                t = t.replace(/((0,){2,})/g, function(e, t) {
                    return 1 + ~(t.length >> 1) + ",";
                });
                try {
                    this.store.setItem(this.prefix + e, t);
                } catch (e) {
                    m(e);
                }
            }
        } : void 0;
    }, Ne = function() {
        if (t) {
            var n = {
                STORED: !0,
                classname: x,
                urlclassname: S,
                donthyphenateclassname: N,
                minwordlength: L,
                hyphenchar: Q,
                urlhyphenchar: ee,
                togglebox: me,
                displaytogglebox: f,
                remoteloading: y,
                enablecache: u,
                enablereducedpatternset: g,
                onhyphenationdonecallback: _,
                onerrorhandler: m,
                onwarninghandler: b,
                intermediatestate: Z,
                selectorfunction: U || X,
                safecopy: ne,
                doframes: h,
                storagetype: d,
                orphancontrol: T,
                dohyphenation: Hyphenator.doHyphenation,
                persistentconfig: c,
                defaultlanguage: z,
                useCSS3hyphenation: w,
                unhide: G,
                onbeforewordhyphenation: J,
                onafterwordhyphenation: V
            };
            t.setItem("config", e.JSON.stringify(n));
        }
    }, Le = function() {
        var n;
        t.test("config") && (n = e.JSON.parse(t.getItem("config")), Hyphenator.config(n));
    };
    return {
        version: "5.0.0",
        doHyphenation: !0,
        languages: {},
        config: function(e) {
            var n, a = function(t, n) {
                var a, r;
                return r = _typeof(e[t]), r === n ? a = !0 : (m(new Error("Config onError: " + t + " must be of type " + n)), 
                a = !1), a;
            };
            e.hasOwnProperty("storagetype") && (a("storagetype", "string") && (d = e.storagetype), 
            t || Ae()), !e.hasOwnProperty("STORED") && t && e.hasOwnProperty("persistentconfig") && !0 === e.persistentconfig && Le();
            for (n in e) if (e.hasOwnProperty(n)) switch (n) {
              case "STORED":
                break;

              case "classname":
                a("classname", "string") && (x = e[n]);
                break;

              case "urlclassname":
                a("urlclassname", "string") && (S = e[n]);
                break;

              case "donthyphenateclassname":
                a("donthyphenateclassname", "string") && (N = e[n]);
                break;

              case "minwordlength":
                a("minwordlength", "number") && (L = e[n]);
                break;

              case "hyphenchar":
                a("hyphenchar", "string") && ("&shy;" === e.hyphenchar && (e.hyphenchar = String.fromCharCode(173)), 
                Q = e[n]);
                break;

              case "urlhyphenchar":
                e.hasOwnProperty("urlhyphenchar") && a("urlhyphenchar", "string") && (ee = e[n]);
                break;

              case "togglebox":
                a("togglebox", "function") && (me = e[n]);
                break;

              case "displaytogglebox":
                a("displaytogglebox", "boolean") && (f = e[n]);
                break;

              case "remoteloading":
                a("remoteloading", "boolean") && (y = e[n]);
                break;

              case "enablecache":
                a("enablecache", "boolean") && (u = e[n]);
                break;

              case "enablereducedpatternset":
                a("enablereducedpatternset", "boolean") && (g = e[n]);
                break;

              case "onhyphenationdonecallback":
                a("onhyphenationdonecallback", "function") && (_ = e[n]);
                break;

              case "onerrorhandler":
                a("onerrorhandler", "function") && (m = e[n]);
                break;

              case "onwarninghandler":
                a("onwarninghandler", "function") && (b = e[n]);
                break;

              case "intermediatestate":
                a("intermediatestate", "string") && (Z = e[n]);
                break;

              case "selectorfunction":
                a("selectorfunction", "function") && (U = e[n]);
                break;

              case "safecopy":
                a("safecopy", "boolean") && (ne = e[n]);
                break;

              case "doframes":
                a("doframes", "boolean") && (h = e[n]);
                break;

              case "storagetype":
                a("storagetype", "string") && (d = e[n]);
                break;

              case "orphancontrol":
                a("orphancontrol", "number") && (T = e[n]);
                break;

              case "dohyphenation":
                a("dohyphenation", "boolean") && (Hyphenator.doHyphenation = e[n]);
                break;

              case "persistentconfig":
                a("persistentconfig", "boolean") && (c = e[n]);
                break;

              case "defaultlanguage":
                a("defaultlanguage", "string") && (z = e[n]);
                break;

              case "useCSS3hyphenation":
                a("useCSS3hyphenation", "boolean") && (w = e[n]);
                break;

              case "unhide":
                a("unhide", "string") && (G = e[n]);
                break;

              case "onbeforewordhyphenation":
                a("onbeforewordhyphenation", "function") && (J = e[n]);
                break;

              case "onafterwordhyphenation":
                a("onafterwordhyphenation", "function") && (V = e[n]);
                break;

              default:
                m(new Error("Hyphenator.config: property " + n + " not known."));
            }
            t && c && Ne();
        },
        run: function() {
            var n = function() {
                try {
                    if (r.document.getElementsByTagName("frameset").length > 0) return;
                    se(void 0), le(), fe(He), f && me();
                } catch (e) {
                    m(e);
                }
            };
            t || Ae(), oe(e, n);
        },
        addExceptions: function(e, t) {
            "" === e && (e = "global"), B.hasOwnProperty(e) ? B[e] += ", " + t : B[e] = t;
        },
        hyphenate: function(e, t) {
            var n, a, r, o;
            if (o = Hyphenator.languages[t], Hyphenator.languages.hasOwnProperty(t)) {
                if (o.prepared || ye(t), n = function(e, n, a, r) {
                    return a || r ? te(e) : ke(o, t, n);
                }, "object" == (void 0 === e ? "undefined" : _typeof(e)) && "string" != typeof e && e.constructor !== String) for (r = 0, 
                a = e.childNodes[r]; a; ) 3 === a.nodeType && /\S/.test(a.data) && a.data.length >= L ? a.data = a.data.replace(o.genRegExp, n) : 1 === a.nodeType && ("" !== a.lang ? Hyphenator.hyphenate(a, a.lang) : Hyphenator.hyphenate(a, t)), 
                r += 1, a = e.childNodes[r]; else if ("string" == typeof e || e.constructor === String) return e.replace(o.genRegExp, n);
            } else m(new Error('Language "' + t + '" is not loaded.'));
        },
        getRedPatternSet: function(e) {
            return Hyphenator.languages[e].redPatSet;
        },
        isBookmarklet: function() {
            return P;
        },
        getConfigFromURI: function() {
            var e, t, n, a, o, i, s = null, l = {}, c = r.document.getElementsByTagName("script");
            for (e = 0, n = c.length; e < n; e += 1) if (c[e].getAttribute("src") && (s = c[e].getAttribute("src")), 
            s && -1 !== s.indexOf("Hyphenator.js?")) {
                for (a = s.indexOf("Hyphenator.js?"), o = s.substring(a + 14).split("&"), t = 0; t < o.length; t += 1) "bm" !== (i = o[t].split("="))[0] && ("true" === i[1] ? i[1] = !0 : "false" === i[1] ? i[1] = !1 : isFinite(i[1]) && (i[1] = parseInt(i[1], 10)), 
                "togglebox" !== i[0] && "onhyphenationdonecallback" !== i[0] && "onerrorhandler" !== i[0] && "selectorfunction" !== i[0] && "onbeforewordhyphenation" !== i[0] && "onafterwordhyphenation" !== i[0] || (i[1] = new Function("", i[1])), 
                l[i[0]] = i[1]);
                break;
            }
            return l;
        },
        toggleHyphenation: function() {
            Hyphenator.doHyphenation ? (a && a.setRule("." + A, n.property + ": none;"), je(), 
            Hyphenator.doHyphenation = !1, Ne(), me()) : (a && a.setRule("." + A, n.property + ": auto;"), 
            Hyphenator.doHyphenation = !0, He("*"), Ne(), me());
        }
    };
}(window);

Hyphenator.isBookmarklet() && (Hyphenator.config({
    displaytogglebox: !0,
    intermediatestate: "visible",
    storagetype: "local",
    doframes: !0,
    useCSS3hyphenation: !0
}), Hyphenator.config(Hyphenator.getConfigFromURI()), Hyphenator.run());
