(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).fy = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{locale:"fy",pluralRuleFunction:function(e,n){var r=String(e).split("."),o=!r[1];return n?"other":1==e&&o?"one":"other"},fields:{year:{displayName:"Jier",relative:{0:"dit jier",1:"folgjend jier","-1":"foarich jier"},relativeTime:{future:{one:"Oer {0} jier",other:"Oer {0} jier"},past:{one:"{0} jier lyn",other:"{0} jier lyn"}}},month:{displayName:"Moanne",relative:{0:"dizze moanne",1:"folgjende moanne","-1":"foarige moanne"},relativeTime:{future:{one:"Oer {0} moanne",other:"Oer {0} moannen"},past:{one:"{0} moanne lyn",other:"{0} moannen lyn"}}},day:{displayName:"dei",relative:{0:"vandaag",1:"morgen",2:"Oermorgen","-1":"gisteren","-2":"eergisteren"},relativeTime:{future:{one:"Oer {0} dei",other:"Oer {0} deien"},past:{one:"{0} dei lyn",other:"{0} deien lyn"}}},hour:{displayName:"oere",relativeTime:{future:{one:"Oer {0} oere",other:"Oer {0} oere"},past:{one:"{0} oere lyn",other:"{0} oere lyn"}}},minute:{displayName:"Minút",relativeTime:{future:{one:"Oer {0} minút",other:"Oer {0} minuten"},past:{one:"{0} minút lyn",other:"{0} minuten lyn"}}},second:{displayName:"Sekonde",relative:{0:"nu"},relativeTime:{future:{one:"Oer {0} sekonde",other:"Oer {0} sekonden"},past:{one:"{0} sekonde lyn",other:"{0} sekonden lyn"}}}}},{locale:"fy-NL",parentLocale:"fy"}];
},{}]},{},[1])(1)
});