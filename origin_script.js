// 1. 僵尸死代码注入
// 2. 格式化检测（‘test'）
// 3. 环境检测（window）
global = undefined;
var window = this;
window.navigator = {
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
};
window.alert = function(){};

var _0x2b26 = ['X2Jsb2Nrc2l6ZQ==', 'X2RpZ2VzdHNpemU=', 'SWxsZWdhbCBhcmd1bWVudCA=', 'd29yZHNUb0J5dGVz', 'YXNCeXRlcw==', 'YXNTdHJpbmc=', 'Ynl0ZXNUb0hleA==', 'QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLw==', 'cm90bA==', 'Zmxvb3I=', 'cmFuZG9t', 'c3Vic3Ry', 'Y2hhckF0', 'cmVwbGFjZQ==', 'aW5kZXhPZg==', 'cG93', 'ZnVuY3Rpb24=', 'aXNCdWZmZXI=', 'cmVhZEZsb2F0TEU=', 'X2lzQnVmZmVy', 'QTROakZxWXU1d1BIc08wWFRkRGdNYTJyMVpRb2NWdGU5VUpCdms2Lzc9eVJuaElTR0tibENXaStMcGZFOHh6bTM=', 'aWFtc3BhbQ==', 'Z2V0VGltZQ==', 'dW5kZWZpbmVk', 'bmF2aWdhdG9y', 'dXNlckFnZW50', 'YWxlcnQ=', 'dGVzdA==', 'W29iamVjdCBPYmplY3Rd', 'W29iamVjdCBBcnJheV0=', 'c3RyaW5naWZ5', 'dC54aWFvaG9uZ3NodS5jb20=', 'Yy54aWFvaG9uZ3NodS5jb20=', 'c3BsdGVzdC54aWFvaG9uZ3NodS5jb20=', 'dDIueGlhb2hvbmdzaHUuY29t', 'dDItdGVzdC54aWFvaG9uZ3NodS5jb20=', 'bG5nLnhpYW9ob25nc2h1LmNvbQ==', 'YXBtLXRyYWNrLnhpYW9ob25nc2h1LmNvbQ==', 'YXBtLXRyYWNrLXRlc3QueGlhb2hvbmdzaHUuY29t', 'ZnNlLnhpYW9ob25nc2h1LmNvbQ==', 'ZnNlLmRldm9wcy54aWFvaG9uZ3NodS5jb20=', 'ZmVzZW50cnkueGlhb2hvbmdzaHUuY29t', 'bG9jYXRpb24=', 'aG9zdA==', 'c2l0LnhpYW9ob25nc2h1LmNvbQ==', 'c29tZQ==', 'c2lnbg==', 'c2hvdWxkU2lnbg==', 'ZXhwb3J0cw==', 'Y2FsbA==', 'ZGVmaW5lUHJvcGVydHk=', 'X19lc01vZHVsZQ==', 'ZGVmYXVsdA==', 'cHJvdG90eXBl', 'aGFzT3duUHJvcGVydHk=', 'Ymlu', 'c3RyaW5nVG9CeXRlcw==', 'Ynl0ZXNUb1N0cmluZw==', 'bGVuZ3Ro', 'cHVzaA==', 'Y2hhckNvZGVBdA==', 'ZnJvbUNoYXJDb2Rl', 'am9pbg==', 'dXRmOA==', 'Y29uc3RydWN0b3I=', 'YmluYXJ5', 'ZW5jb2Rpbmc=', 'c2xpY2U=', 'aXNBcnJheQ==', 'dG9TdHJpbmc=', 'Ynl0ZXNUb1dvcmRz', 'X2Zm', 'X2dn', 'X2ho', 'X2lp', 'ZW5kaWFu'];
(function (_0x111160, _0x48f4b2) {
  var _0x1daefb = function (_0x5052c4) {
    while (--_0x5052c4) {
      _0x111160['push'](_0x111160['shift']());
    }
  };
  var _0x5e5180 = function () {
    var _0x57c88f = {
      'data': {
        'key': 'cookie',
        'value': 'timeout'
      },
      'setCookie': function (_0x541f55, _0x568369, _0x46bcf7, _0x4bfac1) {
        _0x4bfac1 = _0x4bfac1 || {};
        var _0x5596f8 = _0x568369 + '=' + _0x46bcf7;
        var _0x378aae = 0x0;
        for (var _0x378aae = 0x0, _0x364fa8 = _0x541f55['length']; _0x378aae < _0x364fa8; _0x378aae++) {
          var _0x24f8b6 = _0x541f55[_0x378aae];
          _0x5596f8 += ';\x20' + _0x24f8b6;
          var _0x2eceef = _0x541f55[_0x24f8b6];
          _0x541f55['push'](_0x2eceef);
          _0x364fa8 = _0x541f55['length'];
          if (_0x2eceef !== !![]) {
            _0x5596f8 += '=' + _0x2eceef;
          }
        }
        _0x4bfac1['cookie'] = _0x5596f8;
      },
      'removeCookie': function(){return 'dev';},
      'getCookie': function (_0x226d73, _0x458be4) {
        _0x226d73 = _0x226d73 || function (_0x2fbe24) {
          return _0x2fbe24;
        }
          ;
        var _0x4b1ee2 = _0x226d73(new RegExp('(?:^|;\x20)' + _0x458be4['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
        var _0x13a20c = function (_0x1c67c3, _0xfd2b4) {
          _0x1c67c3(++_0xfd2b4);
        };
        _0x13a20c(_0x1daefb, _0x48f4b2);
        return _0x4b1ee2 ? decodeURIComponent(_0x4b1ee2[0x1]) : undefined;
      }
    };
    var _0x35a36c = function () {
      var _0x3a1419 = new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');
      return _0x3a1419['test'](_0x57c88f['removeCookie']['toString']());
    };
    _0x57c88f['updateCookie'] = _0x35a36c;
    var _0x277313 = '';
    var _0x18b6b7 = _0x57c88f['updateCookie']();
    if (!_0x18b6b7) {
      _0x57c88f['setCookie'](['*'], 'counter', 0x1);
    } else if (_0x18b6b7) {
      _0x277313 = _0x57c88f['getCookie'](null, 'counter');
    } else {
      _0x57c88f['removeCookie']();
    }
  };
  _0x5e5180();
}(_0x2b26, 0x160));
var _0x53b5 = function (_0x36bd3d, _0xefc2cf) {
  _0x36bd3d = _0x36bd3d - 0x0;
  var _0x1c6e1a = _0x2b26[_0x36bd3d];
  if (_0x53b5['jPkvVp'] === undefined) {
    (function () {
      var _0x417a31 = function () {
        var _0x3b367d;
        try {
          _0x3b367d = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
        } catch (_0x467c89) {
          _0x3b367d = window;
        }
        return _0x3b367d;
      };
      var _0x1cdca3 = _0x417a31();
      var _0x194a1e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      _0x1cdca3['atob'] || (_0x1cdca3['atob'] = function (_0xc9bfd9) {
        var _0x18fb30 = String(_0xc9bfd9)['replace'](/=+$/, '');
        for (var _0x1d966f = 0x0, _0x2a91e2, _0x46cfb9, _0x2ded03 = 0x0, _0x107786 = ''; _0x46cfb9 = _0x18fb30['charAt'](_0x2ded03++); ~_0x46cfb9 && (_0x2a91e2 = _0x1d966f % 0x4 ? _0x2a91e2 * 0x40 + _0x46cfb9 : _0x46cfb9,
          _0x1d966f++ % 0x4) ? _0x107786 += String['fromCharCode'](0xff & _0x2a91e2 >> (-0x2 * _0x1d966f & 0x6)) : 0x0) {
          _0x46cfb9 = _0x194a1e['indexOf'](_0x46cfb9);
        }
        return _0x107786;
      }
      );
    }());
    _0x53b5['oDGoTO'] = function (_0x10a15d) {
      var _0x48eb83 = atob(_0x10a15d);
      var _0x14d7ae = [];
      for (var _0x2e251e = 0x0, _0x17eda3 = _0x48eb83['length']; _0x2e251e < _0x17eda3; _0x2e251e++) {
        _0x14d7ae += '%' + ('00' + _0x48eb83['charCodeAt'](_0x2e251e)['toString'](0x10))['slice'](-0x2);
      }
      return decodeURIComponent(_0x14d7ae);
    }
      ;
    _0x53b5['TZtfjZ'] = {};
    _0x53b5['jPkvVp'] = !![];
  }
  var _0x45c8c9 = _0x53b5['TZtfjZ'][_0x36bd3d];
  if (_0x45c8c9 === undefined) {
    var _0x52a0f8 = function (_0x2b459a) {
      this['teawGk'] = _0x2b459a;
      this['MNRUFH'] = [0x1, 0x0, 0x0];
      this['oZWGeM'] = function(){return 'newState';};
      this['hilRhB'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';
      this['FecQsn'] = '[\x27|\x22].+[\x27|\x22];?\x20*}';
    };
    _0x52a0f8['prototype']['jGemtc'] = function () {
      var _0x4e18fa = new RegExp(this['hilRhB'] + this['FecQsn']);
      var _0x5b8020 = _0x4e18fa['test'](this['oZWGeM']['toString']()) ? --this['MNRUFH'][0x1] : --this['MNRUFH'][0x0];
      return this['cDqqRs'](_0x5b8020);
    }
      ;
    _0x52a0f8['prototype']['cDqqRs'] = function (_0x48ccb7) {
      if (!Boolean(~_0x48ccb7)) {
        return _0x48ccb7;
      }
      return this['VqaeaV'](this['teawGk']);
    }
      ;
    _0x52a0f8['prototype']['VqaeaV'] = function (_0x3a5ea4) {
      for (var _0x24d941 = 0x0, _0x268463 = this['MNRUFH']['length']; _0x24d941 < _0x268463; _0x24d941++) {
        this['MNRUFH']['push'](Math['round'](Math['random']()));
        _0x268463 = this['MNRUFH']['length'];
      }
      return _0x3a5ea4(this['MNRUFH'][0x0]);
    }
      ;
    new _0x52a0f8(_0x53b5)['jGemtc']();
    _0x1c6e1a = _0x53b5['oDGoTO'](_0x1c6e1a);
    _0x53b5['TZtfjZ'][_0x36bd3d] = _0x1c6e1a;
  } else {
    _0x1c6e1a = _0x45c8c9;
  }
  return _0x1c6e1a;
};
var _0x1ab918 = function () {
  var _0x105c21 = !![];
  return function (_0x36c5d5, _0x19fb07) {
    var _0x4ba66b = _0x105c21 ? function () {
      if (_0x19fb07) {
        var _0x3e26fe = _0x19fb07['apply'](_0x36c5d5, arguments);
        _0x19fb07 = null;
        return _0x3e26fe;
      }
    }
      : function () { }
      ;
    _0x105c21 = ![];
    return _0x4ba66b;
  }
    ;
}();
// 下面为僵尸代码
// var _0x3796cc = _0x1ab918(this, function () {
//   var _0x2724ba = function () {
//     return '\x64\x65\x76';
//   }
//     , _0x457bab = function () {
//       return '\x77\x69\x6e\x64\x6f\x77';
//     };
//   var _0x388899 = function () {
//     var _0x26face = new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');
//     return !_0x26face['\x74\x65\x73\x74'](_0x2724ba['\x74\x6f\x53\x74\x72\x69\x6e\x67']());
//   };
//   var _0x2a967d = function () {
//     var _0x28dc83 = new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');
//     return _0x28dc83['\x74\x65\x73\x74'](_0x457bab['\x74\x6f\x53\x74\x72\x69\x6e\x67']());
//   };
//   var _0x3c51b3 = function (_0x28529d) {
//     var _0x51a1f3 = ~-0x1 >> 0x1 + 0xff % 0x0;
//     if (_0x28529d['\x69\x6e\x64\x65\x78\x4f\x66']('\x69' === _0x51a1f3)) {
//       _0x674196(_0x28529d);
//     }
//   };
//   var _0x674196 = function (_0x1bf72d) {
//     var _0x58cebf = ~-0x4 >> 0x1 + 0xff % 0x0;
//     if (_0x1bf72d['\x69\x6e\x64\x65\x78\x4f\x66']((!![] + '')[0x3]) !== _0x58cebf) {
//       _0x3c51b3(_0x1bf72d);
//     }
//   };
//   if (!_0x388899()) {
//     if (!_0x2a967d()) {
//       _0x3c51b3('\x69\x6e\x64\u0435\x78\x4f\x66');
//     } else {
//       _0x3c51b3('\x69\x6e\x64\x65\x78\x4f\x66');
//     }
//   } else {
//     _0x3c51b3('\x69\x6e\x64\u0435\x78\x4f\x66');
//   }
// });
// _0x3796cc();
function sign(_0x5c15ff, _0x22b14c) {
  var _0x2b2945 = function (_0x3f4e97) {
    function _0x373b69(_0xe84468) {
      if (_0x5891ec[_0xe84468])
        return _0x5891ec[_0xe84468][_0x53b5('0x0')];
      var _0x5b5539 = _0x5891ec[_0xe84468] = {
        'i': _0xe84468,
        'l': !0x1,
        'exports': {}
      };
      return _0x3f4e97[_0xe84468][_0x53b5('0x1')](_0x5b5539[_0x53b5('0x0')], _0x5b5539, _0x5b5539[_0x53b5('0x0')], _0x373b69),
        _0x5b5539['l'] = !0x0,
        _0x5b5539[_0x53b5('0x0')];
    }
    var _0x5891ec = {};
    return _0x373b69['m'] = _0x3f4e97,
      _0x373b69['c'] = _0x5891ec,
      _0x373b69['i'] = function (_0x431e2d) {
        return _0x431e2d;
      }
      ,
      _0x373b69['d'] = function (_0x4681ea, _0x211f64, _0x7f7050) {
        _0x373b69['o'](_0x4681ea, _0x211f64) || Object[_0x53b5('0x2')](_0x4681ea, _0x211f64, {
          'configurable': !0x1,
          'enumerable': !0x0,
          'get': _0x7f7050
        });
      }
      ,
      _0x373b69['n'] = function (_0xe31015) {
        var _0x5891ec = _0xe31015 && _0xe31015[_0x53b5('0x3')] ? function () {
          return _0xe31015[_0x53b5('0x4')];
        }
          : function () {
            return _0xe31015;
          }
          ;
        return _0x373b69['d'](_0x5891ec, 'a', _0x5891ec),
          _0x5891ec;
      }
      ,
      _0x373b69['o'] = function (_0x493a20, _0x701279) {
        return Object[_0x53b5('0x5')][_0x53b5('0x6')][_0x53b5('0x1')](_0x493a20, _0x701279);
      }
      ,
      _0x373b69['p'] = '',
      _0x373b69(_0x373b69['s'] = 0x4);
  }([function (_0x11c34c, _0x3e9228) {
    var _0x17cf34 = {
      'utf8': {
        'stringToBytes': function (_0x4dca7a) {
          return _0x17cf34[_0x53b5('0x7')][_0x53b5('0x8')](unescape(encodeURIComponent(_0x4dca7a)));
        },
        'bytesToString': function (_0x2c2c5c) {
          return decodeURIComponent(escape(_0x17cf34[_0x53b5('0x7')][_0x53b5('0x9')](_0x2c2c5c)));
        }
      },
      'bin': {
        'stringToBytes': function (_0x568d3f) {
          for (var _0x3e9228 = [], _0x17cf34 = 0x0; _0x17cf34 < _0x568d3f[_0x53b5('0xa')]; _0x17cf34++)
            _0x3e9228[_0x53b5('0xb')](0xff & _0x568d3f[_0x53b5('0xc')](_0x17cf34));
          return _0x3e9228;
        },
        'bytesToString': function (_0x3abb0d) {
          for (var _0x3e9228 = [], _0x17cf34 = 0x0; _0x17cf34 < _0x3abb0d[_0x53b5('0xa')]; _0x17cf34++)
            _0x3e9228[_0x53b5('0xb')](String[_0x53b5('0xd')](_0x3abb0d[_0x17cf34]));
          return _0x3e9228[_0x53b5('0xe')]('');
        }
      }
    };
    _0x11c34c[_0x53b5('0x0')] = _0x17cf34;
  }
    , function (_0x221379, _0x22ba93, _0x3dc3e2) {
      !function () {
        var _0x22ba93 = _0x3dc3e2(0x2)
          , _0x57def5 = _0x3dc3e2(0x0)[_0x53b5('0xf')]
          , _0x551f23 = _0x3dc3e2(0x3)
          , _0x24d663 = _0x3dc3e2(0x0)[_0x53b5('0x7')]
          , _0x5b77c1 = function (_0x30ddd1, _0x877731) {
            _0x30ddd1[_0x53b5('0x10')] == String ? _0x30ddd1 = _0x877731 && _0x53b5('0x11') === _0x877731[_0x53b5('0x12')] ? _0x24d663[_0x53b5('0x8')](_0x30ddd1) : _0x57def5[_0x53b5('0x8')](_0x30ddd1) : _0x551f23(_0x30ddd1) ? _0x30ddd1 = Array[_0x53b5('0x5')][_0x53b5('0x13')][_0x53b5('0x1')](_0x30ddd1, 0x0) : Array[_0x53b5('0x14')](_0x30ddd1) || (_0x30ddd1 = _0x30ddd1[_0x53b5('0x15')]());
            for (var _0x4836e9 = _0x22ba93[_0x53b5('0x16')](_0x30ddd1), _0x324197 = 0x8 * _0x30ddd1[_0x53b5('0xa')], _0x4e502f = 0x67452301, _0x20296f = -0x10325477, _0xa1451d = -0x67452302, _0x443ed4 = 0x10325476, _0x49f435 = 0x0; _0x49f435 < _0x4836e9[_0x53b5('0xa')]; _0x49f435++)
              _0x4836e9[_0x49f435] = 0xff00ff & (_0x4836e9[_0x49f435] << 0x8 | _0x4836e9[_0x49f435] >>> 0x18) | 0xff00ff00 & (_0x4836e9[_0x49f435] << 0x18 | _0x4836e9[_0x49f435] >>> 0x8);
            _0x4836e9[_0x324197 >>> 0x5] |= 0x80 << _0x324197 % 0x20,
              _0x4836e9[0xe + (_0x324197 + 0x40 >>> 0x9 << 0x4)] = _0x324197;
            for (var _0x10c1fe = _0x5b77c1[_0x53b5('0x17')], _0x5c0f6c = _0x5b77c1[_0x53b5('0x18')], _0x2ddd5b = _0x5b77c1[_0x53b5('0x19')], _0x5f1798 = _0x5b77c1[_0x53b5('0x1a')], _0x49f435 = 0x0; _0x49f435 < _0x4836e9[_0x53b5('0xa')]; _0x49f435 += 0x10) {
              var _0x4a20e3 = _0x4e502f
                , _0x43476e = _0x20296f
                , _0x2eea87 = _0xa1451d
                , _0xb8b261 = _0x443ed4;
              _0x4e502f = _0x10c1fe(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0x0], 0x7, -0x28955b88),
                _0x443ed4 = _0x10c1fe(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0x1], 0xc, -0x173848aa),
                _0xa1451d = _0x10c1fe(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0x2], 0x11, 0x242070db),
                _0x20296f = _0x10c1fe(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0x3], 0x16, -0x3e423112),
                _0x4e502f = _0x10c1fe(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0x4], 0x7, -0xa83f051),
                _0x443ed4 = _0x10c1fe(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0x5], 0xc, 0x4787c62a),
                _0xa1451d = _0x10c1fe(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0x6], 0x11, -0x57cfb9ed),
                _0x20296f = _0x10c1fe(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0x7], 0x16, -0x2b96aff),
                _0x4e502f = _0x10c1fe(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0x8], 0x7, 0x698098d8),
                _0x443ed4 = _0x10c1fe(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0x9], 0xc, -0x74bb0851),
                _0xa1451d = _0x10c1fe(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0xa], 0x11, -0xa44f),
                _0x20296f = _0x10c1fe(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0xb], 0x16, -0x76a32842),
                _0x4e502f = _0x10c1fe(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0xc], 0x7, 0x6b901122),
                _0x443ed4 = _0x10c1fe(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0xd], 0xc, -0x2678e6d),
                _0xa1451d = _0x10c1fe(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0xe], 0x11, -0x5986bc72),
                _0x20296f = _0x10c1fe(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0xf], 0x16, 0x49b40821),
                _0x4e502f = _0x5c0f6c(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0x1], 0x5, -0x9e1da9e),
                _0x443ed4 = _0x5c0f6c(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0x6], 0x9, -0x3fbf4cc0),
                _0xa1451d = _0x5c0f6c(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0xb], 0xe, 0x265e5a51),
                _0x20296f = _0x5c0f6c(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0x0], 0x14, -0x16493856),
                _0x4e502f = _0x5c0f6c(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0x5], 0x5, -0x29d0efa3),
                _0x443ed4 = _0x5c0f6c(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0xa], 0x9, 0x2441453),
                _0xa1451d = _0x5c0f6c(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0xf], 0xe, -0x275e197f),
                _0x20296f = _0x5c0f6c(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0x4], 0x14, -0x182c0438),
                _0x4e502f = _0x5c0f6c(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0x9], 0x5, 0x21e1cde6),
                _0x443ed4 = _0x5c0f6c(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0xe], 0x9, -0x3cc8f82a),
                _0xa1451d = _0x5c0f6c(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0x3], 0xe, -0xb2af279),
                _0x20296f = _0x5c0f6c(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0x8], 0x14, 0x455a14ed),
                _0x4e502f = _0x5c0f6c(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0xd], 0x5, -0x561c16fb),
                _0x443ed4 = _0x5c0f6c(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0x2], 0x9, -0x3105c08),
                _0xa1451d = _0x5c0f6c(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0x7], 0xe, 0x676f02d9),
                _0x20296f = _0x5c0f6c(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0xc], 0x14, -0x72d5b376),
                _0x4e502f = _0x2ddd5b(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0x5], 0x4, -0x5c6be),
                _0x443ed4 = _0x2ddd5b(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0x8], 0xb, -0x788e097f),
                _0xa1451d = _0x2ddd5b(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0xb], 0x10, 0x6d9d6122),
                _0x20296f = _0x2ddd5b(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0xe], 0x17, -0x21ac7f4),
                _0x4e502f = _0x2ddd5b(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0x1], 0x4, -0x5b4115bc),
                _0x443ed4 = _0x2ddd5b(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0x4], 0xb, 0x4bdecfa9),
                _0xa1451d = _0x2ddd5b(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0x7], 0x10, -0x944b4a0),
                _0x20296f = _0x2ddd5b(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0xa], 0x17, -0x41404390),
                _0x4e502f = _0x2ddd5b(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0xd], 0x4, 0x289b7ec6),
                _0x443ed4 = _0x2ddd5b(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0x0], 0xb, -0x155ed806),
                _0xa1451d = _0x2ddd5b(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0x3], 0x10, -0x2b10cf7b),
                _0x20296f = _0x2ddd5b(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0x6], 0x17, 0x4881d05),
                _0x4e502f = _0x2ddd5b(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0x9], 0x4, -0x262b2fc7),
                _0x443ed4 = _0x2ddd5b(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0xc], 0xb, -0x1924661b),
                _0xa1451d = _0x2ddd5b(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0xf], 0x10, 0x1fa27cf8),
                _0x20296f = _0x2ddd5b(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0x2], 0x17, -0x3b53a99b),
                _0x4e502f = _0x5f1798(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0x0], 0x6, -0xbd6ddbc),
                _0x443ed4 = _0x5f1798(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0x7], 0xa, 0x432aff97),
                _0xa1451d = _0x5f1798(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0xe], 0xf, -0x546bdc59),
                _0x20296f = _0x5f1798(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0x5], 0x15, -0x36c5fc7),
                _0x4e502f = _0x5f1798(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0xc], 0x6, 0x655b59c3),
                _0x443ed4 = _0x5f1798(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0x3], 0xa, -0x70f3336e),
                _0xa1451d = _0x5f1798(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0xa], 0xf, -0x100b83),
                _0x20296f = _0x5f1798(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0x1], 0x15, -0x7a7ba22f),
                _0x4e502f = _0x5f1798(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0x8], 0x6, 0x6fa87e4f),
                _0x443ed4 = _0x5f1798(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0xf], 0xa, -0x1d31920),
                _0xa1451d = _0x5f1798(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0x6], 0xf, -0x5cfebcec),
                _0x20296f = _0x5f1798(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0xd], 0x15, 0x4e0811a1),
                _0x4e502f = _0x5f1798(_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4, _0x4836e9[_0x49f435 + 0x4], 0x6, -0x8ac817e),
                _0x443ed4 = _0x5f1798(_0x443ed4, _0x4e502f, _0x20296f, _0xa1451d, _0x4836e9[_0x49f435 + 0xb], 0xa, -0x42c50dcb),
                _0xa1451d = _0x5f1798(_0xa1451d, _0x443ed4, _0x4e502f, _0x20296f, _0x4836e9[_0x49f435 + 0x2], 0xf, 0x2ad7d2bb),
                _0x20296f = _0x5f1798(_0x20296f, _0xa1451d, _0x443ed4, _0x4e502f, _0x4836e9[_0x49f435 + 0x9], 0x15, -0x14792c6f),
                _0x4e502f = _0x4e502f + _0x4a20e3 >>> 0x0,
                _0x20296f = _0x20296f + _0x43476e >>> 0x0,
                _0xa1451d = _0xa1451d + _0x2eea87 >>> 0x0,
                _0x443ed4 = _0x443ed4 + _0xb8b261 >>> 0x0;
            }
            return _0x22ba93[_0x53b5('0x1b')]([_0x4e502f, _0x20296f, _0xa1451d, _0x443ed4]);
          };
        _0x5b77c1[_0x53b5('0x17')] = function (_0xeba622, _0x58d10c, _0x26ec12, _0x3619d7, _0x30a53e, _0x2e41a2, _0x51ea77) {
          var _0x2dd6f9 = _0xeba622 + (_0x58d10c & _0x26ec12 | ~_0x58d10c & _0x3619d7) + (_0x30a53e >>> 0x0) + _0x51ea77;
          return (_0x2dd6f9 << _0x2e41a2 | _0x2dd6f9 >>> 0x20 - _0x2e41a2) + _0x58d10c;
        }
          ,
          _0x5b77c1[_0x53b5('0x18')] = function (_0x467b43, _0x19e3cd, _0x542286, _0x43649a, _0x1eb403, _0x55281d, _0x56fb7b) {
            var _0x1ff6fb = _0x467b43 + (_0x19e3cd & _0x43649a | _0x542286 & ~_0x43649a) + (_0x1eb403 >>> 0x0) + _0x56fb7b;
            return (_0x1ff6fb << _0x55281d | _0x1ff6fb >>> 0x20 - _0x55281d) + _0x19e3cd;
          }
          ,
          _0x5b77c1[_0x53b5('0x19')] = function (_0x26167d, _0x48cc80, _0x50bb6c, _0xaf3712, _0x3a9877, _0x20d15e, _0x26b99a) {
            var _0xc3d46a = _0x26167d + (_0x48cc80 ^ _0x50bb6c ^ _0xaf3712) + (_0x3a9877 >>> 0x0) + _0x26b99a;
            return (_0xc3d46a << _0x20d15e | _0xc3d46a >>> 0x20 - _0x20d15e) + _0x48cc80;
          }
          ,
          _0x5b77c1[_0x53b5('0x1a')] = function (_0x35a638, _0x5e1c48, _0x29acc8, _0x374dc2, _0x5bf40b, _0x11a4cc, _0x48f550) {
            var _0x2ee2cf = _0x35a638 + (_0x29acc8 ^ (_0x5e1c48 | ~_0x374dc2)) + (_0x5bf40b >>> 0x0) + _0x48f550;
            return (_0x2ee2cf << _0x11a4cc | _0x2ee2cf >>> 0x20 - _0x11a4cc) + _0x5e1c48;
          }
          ,
          _0x5b77c1[_0x53b5('0x1c')] = 0x10,
          _0x5b77c1[_0x53b5('0x1d')] = 0x10,
          _0x221379[_0x53b5('0x0')] = function (_0x1dd3ba, _0x497160) {
            if (void 0x0 === _0x1dd3ba || null === _0x1dd3ba)
              throw new Error(_0x53b5('0x1e') + _0x1dd3ba);
            var _0x57def5 = _0x22ba93[_0x53b5('0x1f')](_0x5b77c1(_0x1dd3ba, _0x497160));
            return _0x497160 && _0x497160[_0x53b5('0x20')] ? _0x57def5 : _0x497160 && _0x497160[_0x53b5('0x21')] ? _0x24d663[_0x53b5('0x9')](_0x57def5) : _0x22ba93[_0x53b5('0x22')](_0x57def5);
          }
          ;
      }();
    }
    , function (_0x26a4ff, _0x46a92e) {
      !function () {
        var _0x46a92e = _0x53b5('0x23')
          , _0xb27353 = {
            'rotl': function (_0x2f234f, _0x2bd3a5) {
              return _0x2f234f << _0x2bd3a5 | _0x2f234f >>> 0x20 - _0x2bd3a5;
            },
            'rotr': function (_0x31246e, _0x3f5395) {
              return _0x31246e << 0x20 - _0x3f5395 | _0x31246e >>> _0x3f5395;
            },
            'endian': function (_0xcdcafa) {
              if (_0xcdcafa[_0x53b5('0x10')] == Number)
                return 0xff00ff & _0xb27353[_0x53b5('0x24')](_0xcdcafa, 0x8) | 0xff00ff00 & _0xb27353[_0x53b5('0x24')](_0xcdcafa, 0x18);
              for (var _0x46a92e = 0x0; _0x46a92e < _0xcdcafa[_0x53b5('0xa')]; _0x46a92e++)
                _0xcdcafa[_0x46a92e] = _0xb27353[_0x53b5('0x1b')](_0xcdcafa[_0x46a92e]);
              return _0xcdcafa;
            },
            'randomBytes': function (_0x3f6b01) {
              for (var _0x46a92e = []; _0x3f6b01 > 0x0; _0x3f6b01--)
                _0x46a92e[_0x53b5('0xb')](Math[_0x53b5('0x25')](0x100 * Math[_0x53b5('0x26')]()));
              return _0x46a92e;
            },
            'bytesToWords': function (_0x10328c) {
              for (var _0x46a92e = [], _0xb27353 = 0x0, _0x114556 = 0x0; _0xb27353 < _0x10328c[_0x53b5('0xa')]; _0xb27353++,
                _0x114556 += 0x8)
                _0x46a92e[_0x114556 >>> 0x5] |= _0x10328c[_0xb27353] << 0x18 - _0x114556 % 0x20;
              return _0x46a92e;
            },
            'wordsToBytes': function (_0x46c672) {
              for (var _0x46a92e = [], _0xb27353 = 0x0; _0xb27353 < 0x20 * _0x46c672[_0x53b5('0xa')]; _0xb27353 += 0x8)
                _0x46a92e[_0x53b5('0xb')](_0x46c672[_0xb27353 >>> 0x5] >>> 0x18 - _0xb27353 % 0x20 & 0xff);
              return _0x46a92e;
            },
            'bytesToHex': function (_0xaaea8e) {
              for (var _0x46a92e = [], _0xb27353 = 0x0; _0xb27353 < _0xaaea8e[_0x53b5('0xa')]; _0xb27353++)
                _0x46a92e[_0x53b5('0xb')]((_0xaaea8e[_0xb27353] >>> 0x4)[_0x53b5('0x15')](0x10)),
                  _0x46a92e[_0x53b5('0xb')]((0xf & _0xaaea8e[_0xb27353])[_0x53b5('0x15')](0x10));
              return _0x46a92e[_0x53b5('0xe')]('');
            },
            'hexToBytes': function (_0x305581) {
              for (var _0x46a92e = [], _0xb27353 = 0x0; _0xb27353 < _0x305581[_0x53b5('0xa')]; _0xb27353 += 0x2)
                _0x46a92e[_0x53b5('0xb')](parseInt(_0x305581[_0x53b5('0x27')](_0xb27353, 0x2), 0x10));
              return _0x46a92e;
            },
            'bytesToBase64': function (_0x31be9b) {
              for (var _0xb27353 = [], _0x4f8bf0 = 0x0; _0x4f8bf0 < _0x31be9b[_0x53b5('0xa')]; _0x4f8bf0 += 0x3)
                for (var _0x1c52c0 = _0x31be9b[_0x4f8bf0] << 0x10 | _0x31be9b[_0x4f8bf0 + 0x1] << 0x8 | _0x31be9b[_0x4f8bf0 + 0x2], _0x7887e9 = 0x0; _0x7887e9 < 0x4; _0x7887e9++)
                  0x8 * _0x4f8bf0 + 0x6 * _0x7887e9 <= 0x8 * _0x31be9b[_0x53b5('0xa')] ? _0xb27353[_0x53b5('0xb')](_0x46a92e[_0x53b5('0x28')](_0x1c52c0 >>> 0x6 * (0x3 - _0x7887e9) & 0x3f)) : _0xb27353[_0x53b5('0xb')]('=');
              return _0xb27353[_0x53b5('0xe')]('');
            },
            'base64ToBytes': function (_0x5f4654) {
              _0x5f4654 = _0x5f4654[_0x53b5('0x29')](/[^A-Z0-9+\/]/gi, '');
              for (var _0xb27353 = [], _0x1e7149 = 0x0, _0x3183be = 0x0; _0x1e7149 < _0x5f4654[_0x53b5('0xa')]; _0x3183be = ++_0x1e7149 % 0x4)
                0x0 != _0x3183be && _0xb27353[_0x53b5('0xb')]((_0x46a92e[_0x53b5('0x2a')](_0x5f4654[_0x53b5('0x28')](_0x1e7149 - 0x1)) & Math[_0x53b5('0x2b')](0x2, -0x2 * _0x3183be + 0x8) - 0x1) << 0x2 * _0x3183be | _0x46a92e[_0x53b5('0x2a')](_0x5f4654[_0x53b5('0x28')](_0x1e7149)) >>> 0x6 - 0x2 * _0x3183be);
              return _0xb27353;
            }
          };
        _0x26a4ff[_0x53b5('0x0')] = _0xb27353;
      }();
    }
    , function (_0x4de4dd, _0x3154cb) {
      function _0x1a115e(_0x47dad5) {
        return !!_0x47dad5[_0x53b5('0x10')] && _0x53b5('0x2c') == typeof _0x47dad5[_0x53b5('0x10')][_0x53b5('0x2d')] && _0x47dad5[_0x53b5('0x10')][_0x53b5('0x2d')](_0x47dad5);
      }
      function _0x906d89(_0x4aed2d) {
        return _0x53b5('0x2c') == typeof _0x4aed2d[_0x53b5('0x2e')] && _0x53b5('0x2c') == typeof _0x4aed2d[_0x53b5('0x13')] && _0x1a115e(_0x4aed2d[_0x53b5('0x13')](0x0, 0x0));
      }
      _0x4de4dd[_0x53b5('0x0')] = function (_0x104dba) {
        return null != _0x104dba && (_0x1a115e(_0x104dba) || _0x906d89(_0x104dba) || !!_0x104dba[_0x53b5('0x2f')]);
      }
        ;
    }
    , function (_0x23f4aa, _0x92abbe, _0x1075a7) {
      _0x23f4aa[_0x53b5('0x0')] = _0x1075a7(0x1);
    }
  ]);
  var _0x553c8a = function (_0x3b145c) {
    _0x3b145c = _0x3b145c[_0x53b5('0x29')](/\r\n/g, '\x0a');
    var _0x9d1b65 = '';
    for (var _0x48a1c5 = 0x0; _0x48a1c5 < _0x3b145c[_0x53b5('0xa')]; _0x48a1c5++) {
      var _0x20b781 = _0x3b145c[_0x53b5('0xc')](_0x48a1c5);
      if (_0x20b781 < 0x80) {
        _0x9d1b65 += String[_0x53b5('0xd')](_0x20b781);
      } else if (_0x20b781 > 0x7f && _0x20b781 < 0x800) {
        _0x9d1b65 += String[_0x53b5('0xd')](_0x20b781 >> 0x6 | 0xc0);
        _0x9d1b65 += String[_0x53b5('0xd')](_0x20b781 & 0x3f | 0x80);
      } else {
        _0x9d1b65 += String[_0x53b5('0xd')](_0x20b781 >> 0xc | 0xe0);
        _0x9d1b65 += String[_0x53b5('0xd')](_0x20b781 >> 0x6 & 0x3f | 0x80);
        _0x9d1b65 += String[_0x53b5('0xd')](_0x20b781 & 0x3f | 0x80);
      }
    }
    return _0x9d1b65;
  };
  var _0x59d459 = _0x53b5('0x30');
  var _0x4c4a9b = function (_0x6ad198) {
    var _0x2d2acc = '';
    var _0x312581, _0x11fbd2, _0x3381c3, _0x3df8b2, _0x1e474a, _0x208c02, _0x155a6e;
    var _0xf24116 = 0x0;
    _0x6ad198 = _0x553c8a(_0x6ad198);
    while (_0xf24116 < _0x6ad198[_0x53b5('0xa')]) {
      _0x312581 = _0x6ad198[_0x53b5('0xc')](_0xf24116++);
      _0x11fbd2 = _0x6ad198[_0x53b5('0xc')](_0xf24116++);
      _0x3381c3 = _0x6ad198[_0x53b5('0xc')](_0xf24116++);
      _0x3df8b2 = _0x312581 >> 0x2;
      _0x1e474a = (_0x312581 & 0x3) << 0x4 | _0x11fbd2 >> 0x4;
      _0x208c02 = (_0x11fbd2 & 0xf) << 0x2 | _0x3381c3 >> 0x6;
      _0x155a6e = _0x3381c3 & 0x3f;
      if (isNaN(_0x11fbd2)) {
        _0x208c02 = _0x155a6e = 0x40;
      } else if (isNaN(_0x3381c3)) {
        _0x155a6e = 0x40;
      }
      _0x2d2acc = _0x2d2acc + _0x59d459[_0x53b5('0x28')](_0x3df8b2) + _0x59d459[_0x53b5('0x28')](_0x1e474a) + _0x59d459[_0x53b5('0x28')](_0x208c02) + _0x59d459[_0x53b5('0x28')](_0x155a6e);
    }
    return _0x2d2acc;
  };
  var _0x1f98a9 = function (_0x7cde8d) {
    var _0x414f49 = Math[_0x53b5('0x25')](_0x7cde8d[_0x53b5('0xa')] * Math[_0x53b5('0x26')]());
    var _0xe9b2f7 = ('' + _0x7cde8d + _0x7cde8d)[_0x53b5('0x27')](_0x414f49, _0x7cde8d[_0x53b5('0xa')]);
    return _0xe9b2f7[_0x53b5('0x13')](0x0, _0x414f49) + '_' + _0xe9b2f7[_0x53b5('0x13')](_0x414f49, _0x7cde8d[_0x53b5('0xa')]);
  };
  var _0x3997ed = _0x53b5('0x31');
  var _0xe31de9 = new Date()[_0x53b5('0x32')]();
  var _0x18e73e = typeof window === _0x53b5('0x33') ? global : window;
  // console.log(_0x53b5('0x35'));
  _0x18e73e = new Proxy(_0x18e73e, {
    get(obj, prop){
      console.log(`window 属性: ${prop} 被调用了`)
      return obj[prop]
    }
  })
  // 这里要为true
  if (typeof _0x18e73e !== _0x53b5('0x33')) {
    if (_0x18e73e && _0x18e73e[_0x53b5('0x34')] && _0x18e73e[_0x53b5('0x34')][_0x53b5('0x35')] && _0x18e73e[_0x53b5('0x36')]) {
      _0x3997ed = _0x53b5('0x37');
    }
  }
  // 这里要为 false
  if (typeof global !== _0x53b5('0x33') && typeof window !== _0x53b5('0x33') && this !== window) {
    _0x3997ed = _0x53b5('0x31');
  }
  var _0x8e21aa = Object[_0x53b5('0x5')][_0x53b5('0x15')][_0x53b5('0x1')](_0x22b14c) === _0x53b5('0x38') || Object[_0x53b5('0x5')][_0x53b5('0x15')][_0x53b5('0x1')](_0x22b14c) === _0x53b5('0x39');
  return {
    'X-s': _0x4c4a9b(_0x2b2945([_0xe31de9, _0x3997ed, _0x5c15ff, _0x8e21aa ? JSON[_0x53b5('0x3a')](_0x22b14c) : ''][_0x53b5('0xe')](''))),
    'X-t': _0xe31de9
  };
}
var BLOCKED_HOSTS = [_0x53b5('0x3b'), _0x53b5('0x3c'), _0x53b5('0x3d'), _0x53b5('0x3e'), _0x53b5('0x3f'), _0x53b5('0x40'), _0x53b5('0x41'), _0x53b5('0x42'), _0x53b5('0x43'), _0x53b5('0x44'), _0x53b5('0x45')];
function shouldSign(_0x1df504) {
  var _0xcf338b = !![];
  if (_0x1df504[_0x53b5('0x2a')](window[_0x53b5('0x46')][_0x53b5('0x47')]) > -0x1) {
    return _0xcf338b;
  }
  if (_0x1df504[_0x53b5('0x2a')](_0x53b5('0x48')) > -0x1) {
    return _0xcf338b;
  }
  BLOCKED_HOSTS[_0x53b5('0x49')](function (_0x1c1995) {
    if (_0x1df504[_0x53b5('0x2a')](_0x1c1995) > -0x1) {
      _0xcf338b = ![];
      return !![];
    }
  });
  return _0xcf338b;
}


module.exports = (link, arg2 = undefined) => {
  return sign(link, arg2)
}
