/**
 * 基于 Highlight 插件，改自泽泽( https://qqdie.com/ )<br />
 * 在原有的功能上新增复制功能，Mac风格代码高亮<br />
 * (请勿与其它同类插件同时启用，以免互相影响)
 * 
 * @package FrshHighlight代码高亮
 * @author Xcnte
 * @version 1.2.0
 * @link https://www.xcnte.com/archives/377/
 */
;var encode_version = 'sojson.v5', xidem = '__0x2f999',  __0x2f999=['w5lMwrt/woQ=','w6zCkcO/w4rDjzPDlcOKXMO9wqTDqDs=','w5pTOcOpV8OtI8O7PV41','w57Dj8Kew4TCvg==','wpzCkzPCocKM','wrbClRDCpcKw','aX/DtzE+wqN2w4Y7fDAFw7TCvH9I','UMKrw5NLCg==','BsOmEEpp','wqEWAA5YwqM=','FnI1dMKf','w5bDkcK2','w73Dr1LChQg=','Uht6LioqajQYC1TClFjDtw==','wovCulsJw4vDjMKNwoIddsOew6PCvls=','w5rCkMKMZsKDw4gn','aEHDhxPDgA==','wqrCi8OAJTpGF3EeXi3Dgkcc','wqUhw60ww7Nvw6hmwp4=','wobCgkARwpdmwo3ChHE=','w5fDpgQ=','wopfesOwCcO1VcOvZk5l','en7DvG4kwp9jw5NzfCsOw6M=','woFWK8O4XA==','w7vDsMO2S3XDknlvVcKEw43CoMKkSxZt','wpbDhsOTwplG','w48DAiHCksO1','wrTCtE8Rwpw=','PMOyFgZI','B3gyTMK+RizDtjs=','CTvDiiwW','w6hnb8Oww7URw5PDgsOdb8KYYBg=','wqzCsizCocKR'];(function(_0x590205,_0x5009d9){var _0x4ba20e=function(_0x17ea28){while(--_0x17ea28){_0x590205['push'](_0x590205['shift']());}};_0x4ba20e(++_0x5009d9);}(__0x2f999,0x19e));var _0x530e=function(_0x2bb926,_0x3b9605){_0x2bb926=_0x2bb926-0x0;var _0x1d707b=__0x2f999[_0x2bb926];if(_0x530e['initialized']===undefined){(function(){var _0x2785f9=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xb198c1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2785f9['atob']||(_0x2785f9['atob']=function(_0x2520cf){var _0x29c383=String(_0x2520cf)['replace'](/=+$/,'');for(var _0x308d12=0x0,_0x13ef9d,_0x1bdf83,_0x57ec6b=0x0,_0x3c35e7='';_0x1bdf83=_0x29c383['charAt'](_0x57ec6b++);~_0x1bdf83&&(_0x13ef9d=_0x308d12%0x4?_0x13ef9d*0x40+_0x1bdf83:_0x1bdf83,_0x308d12++%0x4)?_0x3c35e7+=String['fromCharCode'](0xff&_0x13ef9d>>(-0x2*_0x308d12&0x6)):0x0){_0x1bdf83=_0xb198c1['indexOf'](_0x1bdf83);}return _0x3c35e7;});}());var _0x17a736=function(_0x1ccc2f,_0x30c884){var _0x2b7925=[],_0x36963f=0x0,_0x5259aa,_0x573406='',_0x181a5b='';_0x1ccc2f=atob(_0x1ccc2f);for(var _0x1c941d=0x0,_0xa1ca82=_0x1ccc2f['length'];_0x1c941d<_0xa1ca82;_0x1c941d++){_0x181a5b+='%'+('00'+_0x1ccc2f['charCodeAt'](_0x1c941d)['toString'](0x10))['slice'](-0x2);}_0x1ccc2f=decodeURIComponent(_0x181a5b);for(var _0x46fbad=0x0;_0x46fbad<0x100;_0x46fbad++){_0x2b7925[_0x46fbad]=_0x46fbad;}for(_0x46fbad=0x0;_0x46fbad<0x100;_0x46fbad++){_0x36963f=(_0x36963f+_0x2b7925[_0x46fbad]+_0x30c884['charCodeAt'](_0x46fbad%_0x30c884['length']))%0x100;_0x5259aa=_0x2b7925[_0x46fbad];_0x2b7925[_0x46fbad]=_0x2b7925[_0x36963f];_0x2b7925[_0x36963f]=_0x5259aa;}_0x46fbad=0x0;_0x36963f=0x0;for(var _0x125e97=0x0;_0x125e97<_0x1ccc2f['length'];_0x125e97++){_0x46fbad=(_0x46fbad+0x1)%0x100;_0x36963f=(_0x36963f+_0x2b7925[_0x46fbad])%0x100;_0x5259aa=_0x2b7925[_0x46fbad];_0x2b7925[_0x46fbad]=_0x2b7925[_0x36963f];_0x2b7925[_0x36963f]=_0x5259aa;_0x573406+=String['fromCharCode'](_0x1ccc2f['charCodeAt'](_0x125e97)^_0x2b7925[(_0x2b7925[_0x46fbad]+_0x2b7925[_0x36963f])%0x100]);}return _0x573406;};_0x530e['rc4']=_0x17a736;_0x530e['data']={};_0x530e['initialized']=!![];}var _0x402680=_0x530e['data'][_0x2bb926];if(_0x402680===undefined){if(_0x530e['once']===undefined){_0x530e['once']=!![];}_0x1d707b=_0x530e['rc4'](_0x1d707b,_0x3b9605);_0x530e['data'][_0x2bb926]=_0x1d707b;}else{_0x1d707b=_0x402680;}return _0x1d707b;};if(typeof encode_version!==_0x530e('0x0','k^F!')&&encode_version===_0x530e('0x1','I(zu')){function myFunction(){var _0x3e7918={'iUcwy':_0x530e('0x2','YxE%'),'YrYQW':function _0x360882(_0x287452,_0x39962f){return _0x287452<_0x39962f;},'AYesd':_0x530e('0x3','i7FI'),'WYENb':_0x530e('0x4','3%7#'),'SThFG':'button','fRdYG':'<i\x20class=\x22glyphicon\x20glyphicon-duplicate\x22></i>\x20复制','AVbWK':'data-clipboard-target','cuwFZ':function _0x885a3a(_0x4f2fe6,_0x4a46db){return _0x4f2fe6+_0x4a46db;},'IsTBf':'#code-','jtSrD':'pre\x20code','rffKR':function _0x47925a(_0x219181,_0x13f254){return _0x219181!==_0x13f254;},'dlwSO':'Cjr','ATuCp':_0x530e('0x5','gIyM'),'xPdJq':'error'};let _0x484b8e=document[_0x530e('0x6','5Aam')](_0x3e7918['iUcwy']);for(var _0x54642a=0x0;_0x3e7918[_0x530e('0x7','PfbS')](_0x54642a,_0x484b8e[_0x530e('0x8','N&D)')]);_0x54642a++){var _0x2a025c=_0x3e7918[_0x530e('0x9','I(zu')][_0x530e('0xa','2Ggl')]('|'),_0x1f1890=0x0;while(!![]){switch(_0x2a025c[_0x1f1890++]){case'0':_0x3b03cf[_0x530e('0xb','B5pn')]=_0x3e7918[_0x530e('0xc','Y@D(')];continue;case'1':var _0x3b03cf=document[_0x530e('0xd','FWwo')](_0x3e7918[_0x530e('0xe','t&mc')]);continue;case'2':_0x3b03cf['innerHTML']=_0x3e7918[_0x530e('0xf','R)k]')];continue;case'3':var _0x1b1433=document[_0x530e('0x10','fNMx')]('p');continue;case'4':_0x484b8e[_0x54642a][_0x530e('0x11','i7FI')](_0x3b03cf);continue;case'5':_0x3b03cf['setAttribute'](_0x3e7918[_0x530e('0x12','yagN')],_0x3e7918[_0x530e('0x13','t&mc')](_0x3e7918[_0x530e('0x14','t&mc')],_0x54642a));continue;}break;}}let _0x3d2b7d=document[_0x530e('0x15','3%7#')](_0x3e7918[_0x530e('0x16','$^ef')]);for(var _0x57759a=0x0;_0x3e7918[_0x530e('0x17','!tWi')](_0x57759a,_0x3d2b7d[_0x530e('0x18','YNt#')]);_0x57759a++){if(_0x3e7918[_0x530e('0x19','B5pn')](_0x530e('0x1a','^Bro'),_0x3e7918[_0x530e('0x1b','N]z$')])){_0x3d2b7d[_0x57759a]['id']=_0x3e7918['ATuCp']+_0x57759a;}else{e[_0x530e('0x1c','jI(d')]();}}var _0x14b543=new ClipboardJS(_0x530e('0x1d','pe27'));_0x14b543['on'](_0x530e('0x1e','Rkw)'),function(_0x2bab14){var _0x258c57={'betky':'urW','vINQS':function _0xbcedbd(_0x1d252a,_0x280b1d){return _0x1d252a(_0x280b1d);},'sefQY':'不能删除sojson.v5'};if(_0x258c57['betky']!=='dhu'){_0x2bab14['clearSelection']();}else{_0x258c57['vINQS'](alert,_0x258c57[_0x530e('0x1f','Pz5z')]);}});_0x14b543['on'](_0x3e7918['xPdJq'],function(_0x2d4b3a){_0x2d4b3a[_0x530e('0x20',')mdT')]();});}myFunction();}else{alert('不能删除sojson.v5');};encode_version = 'sojson.v5';