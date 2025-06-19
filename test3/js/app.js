var fileForSign
var isDocumentSignedSuccess = false
window.addEventListener('message', event => {
	// console.log('event', event)
	// if (event.origin !== 'https://your-parent-origin.com') return // Validate origin
	fileForSign = event.data.file
	console.log('fileForSign:', fileForSign)
})

function sendSignedDataToParent(stringBase64) {
	window.parent.postMessage(
		{
			type: 'signed-data',
			stringBase64,
			isDocumentSignedSuccess,
		},
		'*' // або вкажи конкретний origin замість '*', наприклад: 'http://localhost:81'
	)
}

function getFile() {
	var ext = getMimeType(fileForSign?.extension)
	var base64Data = fileForSign.file
	const byteCharacters = atob(base64Data)
	const byteNumbers = new Array(byteCharacters.length)
	for (let i = 0; i < byteCharacters.length; i++) {
		byteNumbers[i] = byteCharacters.charCodeAt(i)
	}
	const byteArray = new Uint8Array(byteNumbers)
	const file = new File([byteArray], fileForSign.fileName, { type: ext })
	const dataTransfer = new DataTransfer()
	dataTransfer.items.add(file)
	document.getElementById('signFilesInput').files = dataTransfer.files
	return file
}

function getMimeType(extension) {
	const mimeTypes = {
		txt: 'text/plain',
		html: 'text/html',
		htm: 'text/html',
		css: 'text/css',
		js: 'application/javascript',
		json: 'application/json',
		csv: 'text/csv',
		jpg: 'image/jpeg',
		jpeg: 'image/jpeg',
		png: 'image/png',
		gif: 'image/gif',
		pdf: 'application/pdf',
		doc: 'application/msword',
		docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		xls: 'application/vnd.ms-excel',
		xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		ppt: 'application/vnd.ms-powerpoint',
		pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
		zip: 'application/zip',
		rar: 'application/vnd.rar',
		'7z': 'application/x-7z-compressed',
	}
	return mimeTypes[extension] || 'application/octet-stream'
}

function uint8ToBase64(uint8Array) {
	const binaryString = Array.from(uint8Array)
		.map(byte => String.fromCharCode(byte))
		.join('')
	return btoa(binaryString)
}

!(function (e) {
	var t = {}
	function n(r) {
		if (t[r]) return t[r].exports
		var i = (t[r] = {
			i: r,
			l: !1,
			exports: {},
		})
		return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
	}
	;(n.m = e),
		(n.c = t),
		(n.d = function (e, t, r) {
			n.o(e, t) ||
				Object.defineProperty(e, t, {
					enumerable: !0,
					get: r,
				})
		}),
		(n.r = function (e) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: 'Module',
				}),
				Object.defineProperty(e, '__esModule', {
					value: !0,
				})
		}),
		(n.t = function (e, t) {
			if ((1 & t && (e = n(e)), 8 & t)) return e
			if (4 & t && 'object' == typeof e && e && e.__esModule) return e
			var r = Object.create(null)
			if (
				(n.r(r),
				Object.defineProperty(r, 'default', {
					enumerable: !0,
					value: e,
				}),
				2 & t && 'string' != typeof e)
			)
				for (var i in e)
					n.d(
						r,
						i,
						function (t) {
							return e[t]
						}.bind(null, i)
					)
			return r
		}),
		(n.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default
					  }
					: function () {
							return e
					  }
			return n.d(t, 'a', t), t
		}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}),
		(n.p = ''),
		n((n.s = 1))
})([
	function (e, t, n) {
		e.exports = (function (e) {
			var t = {}
			function n(r) {
				if (t[r]) return t[r].exports
				var i = (t[r] = {
					i: r,
					l: !1,
					exports: {},
				})
				return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
			}
			return (
				(n.m = e),
				(n.c = t),
				(n.d = function (e, t, r) {
					n.o(e, t) ||
						Object.defineProperty(e, t, {
							enumerable: !0,
							get: r,
						})
				}),
				(n.r = function (e) {
					'undefined' != typeof Symbol &&
						Symbol.toStringTag &&
						Object.defineProperty(e, Symbol.toStringTag, {
							value: 'Module',
						}),
						Object.defineProperty(e, '__esModule', {
							value: !0,
						})
				}),
				(n.t = function (e, t) {
					if ((1 & t && (e = n(e)), 8 & t)) return e
					if (4 & t && 'object' == typeof e && e && e.__esModule) return e
					var r = Object.create(null)
					if (
						(n.r(r),
						Object.defineProperty(r, 'default', {
							enumerable: !0,
							value: e,
						}),
						2 & t && 'string' != typeof e)
					)
						for (var i in e)
							n.d(
								r,
								i,
								function (t) {
									return e[t]
								}.bind(null, i)
							)
					return r
				}),
				(n.n = function (e) {
					var t =
						e && e.__esModule
							? function () {
									return e.default
							  }
							: function () {
									return e
							  }
					return n.d(t, 'a', t), t
				}),
				(n.o = function (e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}),
				(n.p = ''),
				n((n.s = 4))
			)
		})([
			function (e, t, n) {
				'use strict'
				n.r(t),
					n.d(t, 'EU_LIBRARY_TYPE_JS', function () {
						return i
					}),
					n.d(t, 'EU_LIBRARY_TYPE_SW', function () {
						return o
					}),
					n.d(t, 'EU_LIBRARY_TYPE_MS', function () {
						return s
					}),
					n.d(t, 'EndUserLibraryType', function () {
						return r
					}),
					n.d(t, 'EU_SUBJECT_TYPE_UNDIFFERENCED', function () {
						return u
					}),
					n.d(t, 'EU_SUBJECT_TYPE_CA', function () {
						return l
					}),
					n.d(t, 'EU_SUBJECT_TYPE_CA_SERVER', function () {
						return c
					}),
					n.d(t, 'EU_SUBJECT_TYPE_RA_ADMINISTRATOR', function () {
						return p
					}),
					n.d(t, 'EU_SUBJECT_TYPE_END_USER', function () {
						return _
					}),
					n.d(t, 'EndUserSubjectType', function () {
						return a
					}),
					n.d(t, 'EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED', function () {
						return E
					}),
					n.d(t, 'EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP', function () {
						return h
					}),
					n.d(t, 'EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP', function () {
						return S
					}),
					n.d(t, 'EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP', function () {
						return d
					}),
					n.d(t, 'EndUserSubjectCAServerSubType', function () {
						return f
					}),
					n.d(t, 'EU_CERT_KEY_TYPE_UNKNOWN', function () {
						return C
					}),
					n.d(t, 'EU_CERT_KEY_TYPE_DSTU4145', function () {
						return T
					}),
					n.d(t, 'EU_CERT_KEY_TYPE_RSA', function () {
						return A
					}),
					n.d(t, 'EU_CERT_KEY_TYPE_ECDSA', function () {
						return R
					}),
					n.d(t, 'EndUserCertKeyType', function () {
						return y
					}),
					n.d(t, 'EU_CERT_HASH_TYPE_UNKNOWN', function () {
						return g
					}),
					n.d(t, 'EU_CERT_HASH_TYPE_GOST34311', function () {
						return P
					}),
					n.d(t, 'EU_CERT_HASH_TYPE_SHA1', function () {
						return v
					}),
					n.d(t, 'EU_CERT_HASH_TYPE_SHA224', function () {
						return I
					}),
					n.d(t, 'EU_CERT_HASH_TYPE_SHA256', function () {
						return U
					}),
					n.d(t, 'EU_CERT_HASH_TYPE_SHA384', function () {
						return O
					}),
					n.d(t, 'EU_CERT_HASH_TYPE_SHA512', function () {
						return b
					}),
					n.d(t, 'EU_CERT_HASH_TYPE_DSTU7564_256', function () {
						return D
					}),
					n.d(t, 'EU_CERT_HASH_TYPE_DSTU7564_384', function () {
						return k
					}),
					n.d(t, 'EU_CERT_HASH_TYPE_DSTU7564_512', function () {
						return N
					}),
					n.d(t, 'EndUserCertHashType', function () {
						return m
					}),
					n.d(t, 'EU_KEY_USAGE_UNKNOWN', function () {
						return M
					}),
					n.d(t, 'EU_KEY_USAGE_DIGITAL_SIGNATURE', function () {
						return G
					}),
					n.d(t, 'EU_KEY_USAGE_NON_REPUDATION', function () {
						return K
					}),
					n.d(t, 'EU_KEY_USAGE_KEY_AGREEMENT', function () {
						return L
					}),
					n.d(t, 'EndUserKeyUsage', function () {
						return w
					}),
					n.d(t, 'EU_CCS_TYPE_REVOKE', function () {
						return F
					}),
					n.d(t, 'EU_CCS_TYPE_HOLD', function () {
						return x
					}),
					n.d(t, 'EndUserCCSType', function () {
						return B
					}),
					n.d(t, 'EU_REVOCATION_REASON_UNKNOWN', function () {
						return H
					}),
					n.d(t, 'EU_REVOCATION_REASON_KEY_COMPROMISE', function () {
						return V
					}),
					n.d(t, 'EU_REVOCATION_REASON_NEW_ISSUED', function () {
						return W
					}),
					n.d(t, 'EndUserRevocationReason', function () {
						return Y
					}),
					n.d(t, 'EU_KEYS_TYPE_NONE', function () {
						return j
					}),
					n.d(t, 'EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOST', function () {
						return X
					}),
					n.d(t, 'EU_KEYS_TYPE_RSA_WITH_SHA', function () {
						return z
					}),
					n.d(t, 'EU_KEYS_TYPE_ECDSA_WITH_SHA', function () {
						return J
					}),
					n.d(t, 'EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_DSTU', function () {
						return q
					}),
					n.d(t, 'EndUserKeysType', function () {
						return $
					}),
					n.d(t, 'EU_KEYS_LENGTH_DS_UA_191', function () {
						return Q
					}),
					n.d(t, 'EU_KEYS_LENGTH_DS_UA_257', function () {
						return ee
					}),
					n.d(t, 'EU_KEYS_LENGTH_DS_UA_307', function () {
						return te
					}),
					n.d(t, 'EU_KEYS_LENGTH_DS_UA_FILE', function () {
						return ne
					}),
					n.d(t, 'EU_KEYS_LENGTH_DS_UA_CERT', function () {
						return re
					}),
					n.d(t, 'EndUserKeysLengthDSUA', function () {
						return Z
					}),
					n.d(t, 'EU_KEYS_LENGTH_KEP_UA_257', function () {
						return oe
					}),
					n.d(t, 'EU_KEYS_LENGTH_KEP_UA_431', function () {
						return se
					}),
					n.d(t, 'EU_KEYS_LENGTH_KEP_UA_571', function () {
						return ae
					}),
					n.d(t, 'EU_KEYS_LENGTH_KEP_UA_FILE', function () {
						return ue
					}),
					n.d(t, 'EU_KEYS_LENGTH_KEP_UA_CERT', function () {
						return le
					}),
					n.d(t, 'EndUserKeysLengthKEPUA', function () {
						return ie
					}),
					n.d(t, 'EU_KEYS_LENGTH_DS_RSA_1024', function () {
						return pe
					}),
					n.d(t, 'EU_KEYS_LENGTH_DS_RSA_2048', function () {
						return _e
					}),
					n.d(t, 'EU_KEYS_LENGTH_DS_RSA_3072', function () {
						return fe
					}),
					n.d(t, 'EU_KEYS_LENGTH_DS_RSA_4096', function () {
						return Ee
					}),
					n.d(t, 'EU_KEYS_LENGTH_DS_RSA_FILE', function () {
						return he
					}),
					n.d(t, 'EU_KEYS_LENGTH_DS_RSA_CERT', function () {
						return Se
					}),
					n.d(t, 'EndUserKeysLengthDSRSA', function () {
						return ce
					}),
					n.d(t, 'EU_KEYS_REQUEST_TYPE_UA_DS', function () {
						return ye
					}),
					n.d(t, 'EU_KEYS_REQUEST_TYPE_UA_KEP', function () {
						return Ce
					}),
					n.d(t, 'EU_KEYS_REQUEST_TYPE_INT_RSA', function () {
						return Te
					}),
					n.d(t, 'EndUserRequestTypes', function () {
						return de
					}),
					n.d(t, 'EU_MOBILE_OPERATOR_ID_KYIVSTAR', function () {
						return Re
					}),
					n.d(t, 'EU_MOBILE_OPERATOR_ID_VODAFONE', function () {
						return me
					}),
					n.d(t, 'EU_MOBILE_OPERATOR_ID_LIFECELL', function () {
						return ge
					}),
					n.d(t, 'EndUserMobileOperatorID', function () {
						return Ae
					}),
					n.d(t, 'EU_KSP_IIT', function () {
						return Ie
					}),
					n.d(t, 'EU_KSP_UKEY', function () {
						return Ue
					}),
					n.d(t, 'EU_KSP_PB', function () {
						return Oe
					}),
					n.d(t, 'EU_KSP_DIIA', function () {
						return be
					}),
					n.d(t, 'EndUserKSP', function () {
						return Pe
					}),
					n.d(t, 'EndUserKSPClientIdType', function () {
						return ve
					}),
					n.d(t, 'EU_SIGN_TYPE_UNKNOWN', function () {
						return ke
					}),
					n.d(t, 'EU_SIGN_TYPE_CADES_BES', function () {
						return Ne
					}),
					n.d(t, 'EU_SIGN_TYPE_CADES_T', function () {
						return we
					}),
					n.d(t, 'EU_SIGN_TYPE_CADES_C', function () {
						return Me
					}),
					n.d(t, 'EU_SIGN_TYPE_CADES_X_LONG', function () {
						return Ge
					}),
					n.d(t, 'EU_SIGN_TYPE_CADES_X_LONG_TRUSTED', function () {
						return Ke
					}),
					n.d(t, 'EndUserSignType', function () {
						return De
					}),
					n.d(t, 'EU_CADES_TYPE_UNKNOWN', function () {
						return Be
					}),
					n.d(t, 'EU_CADES_TYPE_DETACHED', function () {
						return Fe
					}),
					n.d(t, 'EU_CADES_TYPE_ENVELOPED', function () {
						return xe
					}),
					n.d(t, 'EndUserCAdESType', function () {
						return Le
					}),
					n.d(t, 'EU_CTX_SIGN_UNKNOWN', function () {
						return He
					}),
					n.d(t, 'EU_CTX_SIGN_DSTU4145_WITH_GOST34311', function () {
						return Ve
					}),
					n.d(t, 'EU_CTX_SIGN_RSA_WITH_SHA', function () {
						return We
					}),
					n.d(t, 'EU_CTX_SIGN_ECDSA_WITH_SHA', function () {
						return $e
					}),
					n.d(t, 'EU_CTX_SIGN_DSTU4145_WITH_DSTU7564', function () {
						return je
					}),
					n.d(t, 'EndUserSignAlgo', function () {
						return Ye
					}),
					n.d(t, 'EU_SIGN_TYPE_PARAMETER', function () {
						return ze
					}),
					n.d(t, 'EU_USE_SLOGIN_PRIVATE_KEY', function () {
						return Je
					}),
					n.d(t, 'EU_FS_CALCULATE_FINGERPRINT', function () {
						return qe
					}),
					n.d(t, 'EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER', function () {
						return Ze
					}),
					n.d(t, 'EU_USE_SLOGIN_PRIVATE_KEY_CONTEXT_PARAMETER', function () {
						return Qe
					}),
					n.d(t, 'EU_UA_OID_EXT_KEY_USAGE_STAMP', function () {
						return et
					}),
					n.d(t, 'EU_USER_INFO_VERSION', function () {
						return tt
					}),
					n.d(t, 'EndUserCMPCompatibility', function () {
						return Xe
					}),
					n.d(t, 'EU_CTX_HASH_ALGO_UNKNOWN', function () {
						return rt
					}),
					n.d(t, 'EU_CTX_HASH_ALGO_GOST34311', function () {
						return it
					}),
					n.d(t, 'EU_CTX_HASH_ALGO_SHA160', function () {
						return ot
					}),
					n.d(t, 'EU_CTX_HASH_ALGO_SHA224', function () {
						return st
					}),
					n.d(t, 'EU_CTX_HASH_ALGO_SHA256', function () {
						return at
					}),
					n.d(t, 'EU_CTX_HASH_ALGO_SHA384', function () {
						return ut
					}),
					n.d(t, 'EU_CTX_HASH_ALGO_SHA512', function () {
						return lt
					}),
					n.d(t, 'EU_CTX_HASH_ALGO_DSTU7564_256', function () {
						return ct
					}),
					n.d(t, 'EU_CTX_HASH_ALGO_DSTU7564_384', function () {
						return pt
					}),
					n.d(t, 'EU_CTX_HASH_ALGO_DSTU7564_512', function () {
						return _t
					}),
					n.d(t, 'EndUserHashAlgo', function () {
						return nt
					}),
					n.d(t, 'EU_ASIC_TYPE_UNKNOWN', function () {
						return Et
					}),
					n.d(t, 'EU_ASIC_TYPE_S', function () {
						return ht
					}),
					n.d(t, 'EU_ASIC_TYPE_E', function () {
						return St
					}),
					n.d(t, 'EndUserASiCType', function () {
						return ft
					}),
					n.d(t, 'EU_ASIC_SIGN_TYPE_UNKNOWN', function () {
						return yt
					}),
					n.d(t, 'EU_ASIC_SIGN_TYPE_CADES', function () {
						return Ct
					}),
					n.d(t, 'EU_ASIC_SIGN_TYPE_XADES', function () {
						return Tt
					}),
					n.d(t, 'EndUserASiCSignType', function () {
						return dt
					}),
					n.d(t, 'EU_XADES_TYPE_UNKNOWN', function () {
						return Rt
					}),
					n.d(t, 'EU_XADES_TYPE_DETACHED', function () {
						return mt
					}),
					n.d(t, 'EU_XADES_TYPE_ENVELOPING', function () {
						return gt
					}),
					n.d(t, 'EU_XADES_TYPE_ENVELOPED', function () {
						return Pt
					}),
					n.d(t, 'EndUserXAdESType', function () {
						return At
					}),
					n.d(t, 'EU_XADES_SIGN_LEVEL_UNKNOWN', function () {
						return It
					}),
					n.d(t, 'EU_XADES_SIGN_LEVEL_B_B', function () {
						return Ut
					}),
					n.d(t, 'EU_XADES_SIGN_LEVEL_B_T', function () {
						return Ot
					}),
					n.d(t, 'EU_XADES_SIGN_LEVEL_B_LT', function () {
						return bt
					}),
					n.d(t, 'EU_XADES_SIGN_LEVEL_B_LTA', function () {
						return Dt
					}),
					n.d(t, 'EndUserXAdESSignLevel', function () {
						return vt
					}),
					n.d(t, 'EU_PADES_SIGN_LEVEL_UNKNOWN', function () {
						return wt
					}),
					n.d(t, 'EU_PADES_SIGN_LEVEL_B_B', function () {
						return Mt
					}),
					n.d(t, 'EU_PADES_SIGN_LEVEL_B_T', function () {
						return Gt
					}),
					n.d(t, 'EU_PADES_SIGN_LEVEL_B_LT', function () {
						return Kt
					}),
					n.d(t, 'EU_PADES_SIGN_LEVEL_B_LTA', function () {
						return Lt
					}),
					n.d(t, 'EndUserPAdESSignLevel', function () {
						return kt
					}),
					n.d(t, 'EndUserEventType', function () {
						return Nt
					}),
					n.d(t, 'EU_SIGN_CONTAINER_TYPE_UNKNOWN', function () {
						return Ft
					}),
					n.d(t, 'EU_SIGN_CONTAINER_TYPE_CADES', function () {
						return xt
					}),
					n.d(t, 'EU_SIGN_CONTAINER_TYPE_XADES', function () {
						return Yt
					}),
					n.d(t, 'EU_SIGN_CONTAINER_TYPE_PADES', function () {
						return Ht
					}),
					n.d(t, 'EU_SIGN_CONTAINER_TYPE_ASIC', function () {
						return Vt
					}),
					n.d(t, 'EndUserSignContainerType', function () {
						return Bt
					})
				var r,
					i = 1,
					o = 2,
					s = 3
				!(function (e) {
					;(e[(e.JS = i)] = 'JS'),
						(e[(e.SW = o)] = 'SW'),
						(e[(e.MS = s)] = 'MS')
				})(r || (r = {}))
				var a,
					u = 0,
					l = 1,
					c = 2,
					p = 3,
					_ = 4
				!(function (e) {
					;(e[(e.Undifferenced = u)] = 'Undifferenced'),
						(e[(e.CA = l)] = 'CA'),
						(e[(e.CAServer = c)] = 'CAServer'),
						(e[(e.RAAdministrator = p)] = 'RAAdministrator'),
						(e[(e.EndUser = _)] = 'EndUser')
				})(a || (a = {}))
				var f,
					E = 0,
					h = 1,
					S = 2,
					d = 3
				!(function (e) {
					;(e[(e.Undifferenced = E)] = 'Undifferenced'),
						(e[(e.CMP = h)] = 'CMP'),
						(e[(e.TSP = S)] = 'TSP'),
						(e[(e.OCSP = d)] = 'OCSP')
				})(f || (f = {}))
				var y,
					C = 0,
					T = 1,
					A = 2,
					R = 4
				!(function (e) {
					;(e[(e.Unknown = C)] = 'Unknown'),
						(e[(e.DSTU4145 = T)] = 'DSTU4145'),
						(e[(e.RSA = A)] = 'RSA'),
						(e[(e.ECDSA = R)] = 'ECDSA')
				})(y || (y = {}))
				var m,
					g = 0,
					P = 1,
					v = 2,
					I = 3,
					U = 4,
					O = 5,
					b = 6,
					D = 7,
					k = 8,
					N = 9
				!(function (e) {
					;(e[(e.Unknown = g)] = 'Unknown'),
						(e[(e.GOST34311 = P)] = 'GOST34311'),
						(e[(e.SHA1 = v)] = 'SHA1'),
						(e[(e.SHA224 = I)] = 'SHA224'),
						(e[(e.SHA256 = U)] = 'SHA256'),
						(e[(e.SHA384 = O)] = 'SHA384'),
						(e[(e.SHA512 = b)] = 'SHA512'),
						(e[(e.DSTU7564_256 = D)] = 'DSTU7564_256'),
						(e[(e.DSTU7564_384 = k)] = 'DSTU7564_384'),
						(e[(e.DSTU7564_512 = N)] = 'DSTU7564_512')
				})(m || (m = {}))
				var w,
					M = 0,
					G = 1,
					K = 2,
					L = 16
				!(function (e) {
					;(e[(e.Unknown = C)] = 'Unknown'),
						(e[(e.DigitalSignature = G)] = 'DigitalSignature'),
						(e[(e.NonRepudation = K)] = 'NonRepudation'),
						(e[(e.KeyAgreement = L)] = 'KeyAgreement')
				})(w || (w = {}))
				var B,
					F = 1,
					x = 2
				!(function (e) {
					;(e[(e.Revoke = F)] = 'Revoke'), (e[(e.Hold = x)] = 'Hold')
				})(B || (B = {}))
				var Y,
					H = 0,
					V = 1,
					W = 2
				!(function (e) {
					;(e[(e.Unknown = H)] = 'Unknown'),
						(e[(e.KeyCompromise = V)] = 'KeyCompromise'),
						(e[(e.NewIssued = W)] = 'NewIssued')
				})(Y || (Y = {}))
				var $,
					j = 0,
					X = 1,
					z = 2,
					J = 4,
					q = 8
				!(function (e) {
					;(e[(e.None = j)] = 'None'),
						(e[(e.DSTUAndECDHWithGOST = X)] = 'DSTUAndECDHWithGOST'),
						(e[(e.RSAWithSHA = z)] = 'RSAWithSHA'),
						(e[(e.ECDSAWithSHA = J)] = 'ECDSAWithSHA'),
						(e[(e.DSTUAndECDHWithDSTU = q)] = 'DSTUAndECDHWithDSTU')
				})($ || ($ = {}))
				var Z,
					Q = 1,
					ee = 2,
					te = 3,
					ne = 4,
					re = 5
				!(function (e) {
					;(e[(e.EC_191 = Q)] = 'EC_191'),
						(e[(e.EC_257 = ee)] = 'EC_257'),
						(e[(e.EC_307 = te)] = 'EC_307'),
						(e[(e.File = ne)] = 'File'),
						(e[(e.Cert = re)] = 'Cert')
				})(Z || (Z = {}))
				var ie,
					oe = 1,
					se = 2,
					ae = 3,
					ue = 4,
					le = 5
				!(function (e) {
					;(e[(e.EC_257 = oe)] = 'EC_257'),
						(e[(e.EC_431 = se)] = 'EC_431'),
						(e[(e.EC_571 = ae)] = 'EC_571'),
						(e[(e.File = ne)] = 'File'),
						(e[(e.Cert = re)] = 'Cert')
				})(ie || (ie = {}))
				var ce,
					pe = 1,
					_e = 2,
					fe = 3,
					Ee = 4,
					he = 5,
					Se = 6
				!(function (e) {
					;(e[(e.N_1024 = pe)] = 'N_1024'),
						(e[(e.N_2048 = _e)] = 'N_2048'),
						(e[(e.N_3072 = fe)] = 'N_3072'),
						(e[(e.N_4096 = Ee)] = 'N_4096'),
						(e[(e.File = ne)] = 'File'),
						(e[(e.Cert = re)] = 'Cert')
				})(ce || (ce = {}))
				var de,
					ye = 1,
					Ce = 2,
					Te = 3
				!(function (e) {
					;(e[(e.uaDS = ye)] = 'uaDS'),
						(e[(e.uaKEP = Ce)] = 'uaKEP'),
						(e[(e.intRSA = Te)] = 'intRSA')
				})(de || (de = {}))
				var Ae,
					Re = 1,
					me = 2,
					ge = 3
				!(function (e) {
					;(e[(e.Kyivstar = Re)] = 'Kyivstar'),
						(e[(e.Vodafone = me)] = 'Vodafone'),
						(e[(e.Lifecell = ge)] = 'Lifecell')
				})(Ae || (Ae = {}))
				var Pe,
					ve,
					Ie = 4,
					Ue = 5,
					Oe = 6,
					be = 7
				!(function (e) {
					;(e[(e.Kyivstar = Re)] = 'Kyivstar'),
						(e[(e.Vodafone = me)] = 'Vodafone'),
						(e[(e.Lifecell = ge)] = 'Lifecell'),
						(e[(e.IIT = Ie)] = 'IIT'),
						(e[(e.UKey = Ue)] = 'UKey'),
						(e[(e.PB = Oe)] = 'PB'),
						(e[(e.DIIA = be)] = 'DIIA')
				})(Pe || (Pe = {})),
					(function (e) {
						;(e[(e.Default = 0)] = 'Default'),
							(e[(e.Name = 1)] = 'Name'),
							(e[(e.Phone = 2)] = 'Phone'),
							(e[(e.Email = 3)] = 'Email')
					})(ve || (ve = {}))
				var De,
					ke = 0,
					Ne = 1,
					we = 4,
					Me = 8,
					Ge = 16,
					Ke = 128
				!(function (e) {
					;(e[(e.Unknown = ke)] = 'Unknown'),
						(e[(e.CAdES_BES = Ne)] = 'CAdES_BES'),
						(e[(e.CAdES_T = we)] = 'CAdES_T'),
						(e[(e.CAdES_C = Me)] = 'CAdES_C'),
						(e[(e.CAdES_X_Long = Ge)] = 'CAdES_X_Long'),
						(e[(e.CAdES_X_Long_Trusted = Ke)] = 'CAdES_X_Long_Trusted')
				})(De || (De = {}))
				var Le,
					Be = 0,
					Fe = 1,
					xe = 3
				!(function (e) {
					;(e[(e.Unknown = Be)] = 'Unknown'),
						(e[(e.Detached = Fe)] = 'Detached'),
						(e[(e.Enveloped = xe)] = 'Enveloped')
				})(Le || (Le = {}))
				var Ye,
					He = 0,
					Ve = 1,
					We = 2,
					$e = 3,
					je = 4
				!(function (e) {
					;(e[(e.Unknown = He)] = 'Unknown'),
						(e[(e.DSTU4145WithGOST34311 = Ve)] = 'DSTU4145WithGOST34311'),
						(e[(e.RSAWithSHA = We)] = 'RSAWithSHA'),
						(e[(e.ECDSAWithSHA = $e)] = 'ECDSAWithSHA'),
						(e[(e.DSTU4145WithDSTU7564 = je)] = 'DSTU4145WithDSTU7564')
				})(Ye || (Ye = {}))
				var Xe,
					ze = 'SignType',
					Je = 'UseSLoginPrivateKey',
					qe = 'FSCalculateFingerprint',
					Ze = 'CheckPrivateKey',
					Qe = 'UseSLoginPrivateKey',
					et = '1.2.804.2.1.1.1.3.9',
					tt = 3
				!(function (e) {
					;(e[(e.None = 0)] = 'None'),
						(e[(e.DownloadEUCerts = 1)] = 'DownloadEUCerts'),
						(e[(e.SearchEUCerts = 2)] = 'SearchEUCerts')
				})(Xe || (Xe = {}))
				var nt,
					rt = 0,
					it = 1,
					ot = 2,
					st = 3,
					at = 4,
					ut = 5,
					lt = 6,
					ct = 7,
					pt = 8,
					_t = 9
				!(function (e) {
					;(e[(e.Unknown = rt)] = 'Unknown'),
						(e[(e.GOST34311 = it)] = 'GOST34311'),
						(e[(e.SHA160 = ot)] = 'SHA160'),
						(e[(e.SHA224 = st)] = 'SHA224'),
						(e[(e.SHA256 = at)] = 'SHA256'),
						(e[(e.SHA384 = ut)] = 'SHA384'),
						(e[(e.SHA512 = lt)] = 'SHA512'),
						(e[(e.DSTU7564_256 = ct)] = 'DSTU7564_256'),
						(e[(e.DSTU7564_384 = pt)] = 'DSTU7564_384'),
						(e[(e.DSTU7564_512 = _t)] = 'DSTU7564_512')
				})(nt || (nt = {}))
				var ft,
					Et = 0,
					ht = 1,
					St = 2
				!(function (e) {
					;(e[(e.Unknown = Et)] = 'Unknown'),
						(e[(e.S = ht)] = 'S'),
						(e[(e.E = St)] = 'E')
				})(ft || (ft = {}))
				var dt,
					yt = 0,
					Ct = 1,
					Tt = 2
				!(function (e) {
					;(e[(e.Unknown = yt)] = 'Unknown'),
						(e[(e.CAdES = Ct)] = 'CAdES'),
						(e[(e.XAdES = Tt)] = 'XAdES')
				})(dt || (dt = {}))
				var At,
					Rt = 0,
					mt = 1,
					gt = 2,
					Pt = 3
				!(function (e) {
					;(e[(e.Unknown = Rt)] = 'Unknown'),
						(e[(e.Detached = mt)] = 'Detached'),
						(e[(e.Enveloping = gt)] = 'Enveloping'),
						(e[(e.Enveloped = Pt)] = 'Enveloped')
				})(At || (At = {}))
				var vt,
					It = 0,
					Ut = 1,
					Ot = 4,
					bt = 16,
					Dt = 32
				!(function (e) {
					;(e[(e.Unknown = It)] = 'Unknown'),
						(e[(e.B_B = Ut)] = 'B_B'),
						(e[(e.B_T = Ot)] = 'B_T'),
						(e[(e.B_LT = bt)] = 'B_LT'),
						(e[(e.B_LTA = Dt)] = 'B_LTA')
				})(vt || (vt = {}))
				var kt,
					Nt,
					wt = 0,
					Mt = 1,
					Gt = 4,
					Kt = 16,
					Lt = 32
				!(function (e) {
					;(e[(e.Unknown = It)] = 'Unknown'),
						(e[(e.B_B = Mt)] = 'B_B'),
						(e[(e.B_T = Gt)] = 'B_T'),
						(e[(e.B_LT = Kt)] = 'B_LT'),
						(e[(e.B_LTA = Lt)] = 'B_LTA')
				})(kt || (kt = {})),
					(function (e) {
						;(e[(e.None = 0)] = 'None'),
							(e[(e.All = 1)] = 'All'),
							(e[(e.ConfirmKSPOperation = 2)] = 'ConfirmKSPOperation')
					})(Nt || (Nt = {}))
				var Bt,
					Ft = 0,
					xt = 1,
					Yt = 2,
					Ht = 3,
					Vt = 4
				!(function (e) {
					;(e[(e.Unknown = Ft)] = 'Unknown'),
						(e[(e.CAdES = xt)] = 'CAdES'),
						(e[(e.XAdES = Yt)] = 'XAdES'),
						(e[(e.PAdES = Ht)] = 'PAdES'),
						(e[(e.ASiC = Vt)] = 'ASiC')
				})(Bt || (Bt = {}))
			},
			function (e, t, n) {
				'use strict'
				n.r(t),
					n.d(t, 'EU_ERROR_NONE', function () {
						return r
					}),
					n.d(t, 'EU_ERROR_UNKNOWN', function () {
						return i
					}),
					n.d(t, 'EU_ERROR_NOT_SUPPORTED', function () {
						return o
					}),
					n.d(t, 'EU_ERROR_NOT_INITIALIZED', function () {
						return s
					}),
					n.d(t, 'EU_ERROR_BAD_PARAMETER', function () {
						return a
					}),
					n.d(t, 'EU_ERROR_LIBRARY_LOAD', function () {
						return u
					}),
					n.d(t, 'EU_ERROR_READ_SETTINGS', function () {
						return l
					}),
					n.d(t, 'EU_ERROR_TRANSMIT_REQUEST', function () {
						return c
					}),
					n.d(t, 'EU_ERROR_MEMORY_ALLOCATION', function () {
						return p
					}),
					n.d(t, 'EU_WARNING_END_OF_ENUM', function () {
						return _
					}),
					n.d(t, 'EU_ERROR_PROXY_NOT_AUTHORIZED', function () {
						return f
					}),
					n.d(t, 'EU_ERROR_NO_GUI_DIALOGS', function () {
						return E
					}),
					n.d(t, 'EU_ERROR_DOWNLOAD_FILE', function () {
						return h
					}),
					n.d(t, 'EU_ERROR_WRITE_SETTINGS', function () {
						return S
					}),
					n.d(t, 'EU_ERROR_CANCELED_BY_GUI', function () {
						return d
					}),
					n.d(t, 'EU_ERROR_OFFLINE_MODE', function () {
						return y
					}),
					n.d(t, 'EU_ERROR_KEY_MEDIAS_FAILED', function () {
						return C
					}),
					n.d(t, 'EU_ERROR_KEY_MEDIAS_ACCESS_FAILED', function () {
						return T
					}),
					n.d(t, 'EU_ERROR_KEY_MEDIAS_READ_FAILED', function () {
						return A
					}),
					n.d(t, 'EU_ERROR_KEY_MEDIAS_WRITE_FAILED', function () {
						return R
					}),
					n.d(t, 'EU_WARNING_KEY_MEDIAS_READ_ONLY', function () {
						return m
					}),
					n.d(t, 'EU_ERROR_KEY_MEDIAS_DELETE', function () {
						return g
					}),
					n.d(t, 'EU_ERROR_KEY_MEDIAS_CLEAR', function () {
						return P
					}),
					n.d(t, 'EU_ERROR_BAD_PRIVATE_KEY', function () {
						return v
					}),
					n.d(t, 'EU_ERROR_PKI_FORMATS_FAILED', function () {
						return I
					}),
					n.d(t, 'EU_ERROR_CSP_FAILED', function () {
						return U
					}),
					n.d(t, 'EU_ERROR_BAD_SIGNATURE', function () {
						return O
					}),
					n.d(t, 'EU_ERROR_AUTH_FAILED', function () {
						return b
					}),
					n.d(t, 'EU_ERROR_NOT_RECEIVER', function () {
						return D
					}),
					n.d(t, 'EU_ERROR_STORAGE_FAILED', function () {
						return k
					}),
					n.d(t, 'EU_ERROR_BAD_CERT', function () {
						return N
					}),
					n.d(t, 'EU_ERROR_CERT_NOT_FOUND', function () {
						return w
					}),
					n.d(t, 'EU_ERROR_INVALID_CERT_TIME', function () {
						return M
					}),
					n.d(t, 'EU_ERROR_CERT_IN_CRL', function () {
						return G
					}),
					n.d(t, 'EU_ERROR_BAD_CRL', function () {
						return K
					}),
					n.d(t, 'EU_ERROR_NO_VALID_CRLS', function () {
						return L
					}),
					n.d(t, 'EU_ERROR_GET_TIME_STAMP', function () {
						return B
					}),
					n.d(t, 'EU_ERROR_BAD_TSP_RESPONSE', function () {
						return F
					}),
					n.d(t, 'EU_ERROR_TSP_SERVER_CERT_NOT_FOUND', function () {
						return x
					}),
					n.d(t, 'EU_ERROR_TSP_SERVER_CERT_INVALID', function () {
						return Y
					}),
					n.d(t, 'EU_ERROR_GET_OCSP_STATUS', function () {
						return H
					}),
					n.d(t, 'EU_ERROR_BAD_OCSP_RESPONSE', function () {
						return V
					}),
					n.d(t, 'EU_ERROR_CERT_BAD_BY_OCSP', function () {
						return W
					}),
					n.d(t, 'EU_ERROR_OCSP_SERVER_CERT_NOT_FOUND', function () {
						return $
					}),
					n.d(t, 'EU_ERROR_OCSP_SERVER_CERT_INVALID', function () {
						return j
					}),
					n.d(t, 'EU_ERROR_LDAP_ERROR', function () {
						return X
					}),
					n.d(t, 'EndUserError', function () {
						return z
					})
				var r = 0,
					i = 65535,
					o = 65534,
					s = 1,
					a = 2,
					u = 3,
					l = 4,
					c = 5,
					p = 6,
					_ = 7,
					f = 8,
					E = 9,
					h = 10,
					S = 11,
					d = 12,
					y = 13,
					C = 17,
					T = 18,
					A = 19,
					R = 20,
					m = 21,
					g = 22,
					P = 23,
					v = 24,
					I = 33,
					U = 34,
					O = 35,
					b = 36,
					D = 37,
					k = 49,
					N = 50,
					w = 51,
					M = 52,
					G = 53,
					K = 54,
					L = 55,
					B = 65,
					F = 66,
					x = 67,
					Y = 68,
					H = 81,
					V = 82,
					W = 83,
					$ = 84,
					j = 85,
					X = 97,
					z = function () {}
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'a', function () {
					return s
				})
				var r = n(8),
					i = n(10),
					o = n(4),
					s = (function () {
						function e() {}
						return (
							(e.MapFromKeyMedia = function (e, t) {
								return (
									t.SetTypeIndex(e.typeIndex),
									t.SetDevIndex(e.devIndex),
									t.SetPassword(
										e.user ? '##' + e.user + '##' + e.password : e.password
									),
									t
								)
							}),
							(e.MapToProxySettings = function (e, t) {
								return (
									(t.useProxy = e.GetUseProxy()),
									(t.address = e.GetAddress()),
									(t.port = e.GetPort()),
									(t.anonymous = e.GetAnonymous()),
									(t.user = e.GetUser()),
									(t.password = e.GetPassword()),
									(t.savePassword = e.GetSavePassword()),
									t
								)
							}),
							(e.MapFromProxySettings = function (e, t) {
								return (
									t.SetUseProxy(e.useProxy),
									t.SetAddress(e.address),
									t.SetPort(e.port),
									t.SetAnonymous(e.anonymous),
									t.SetUser(e.user),
									t.SetPassword(e.password),
									t.SetSavePassword(e.savePassword),
									t
								)
							}),
							(e.MapEndUserOwnerInfo = function (e, t) {
								return (
									(t.isFilled = e.IsFilled()),
									(t.issuer = e.GetIssuer()),
									(t.issuerCN = e.GetIssuerCN()),
									(t.serial = e.GetSerial()),
									(t.subject = e.GetSubject()),
									(t.subjCN = e.GetSubjCN()),
									(t.subjOrg = e.GetSubjOrg()),
									(t.subjOrgUnit = e.GetSubjOrgUnit()),
									(t.subjTitle = e.GetSubjTitle()),
									(t.subjState = e.GetSubjState()),
									(t.subjLocality = e.GetSubjLocality()),
									(t.subjFullName = e.GetSubjFullName()),
									(t.subjAddress = e.GetSubjAddress()),
									(t.subjPhone = e.GetSubjPhone()),
									(t.subjEMail = e.GetSubjEMail()),
									(t.subjDNS = e.GetSubjDNS()),
									(t.subjEDRPOUCode = e.GetSubjEDRPOUCode()),
									(t.subjDRFOCode = e.GetSubjDRFOCode()),
									t
								)
							}),
							(e.MapToEndUserCertificateInfoEx = function (e, t) {
								return (
									(t.isFilled = e.IsFilled()),
									(t.version = e.GetVersion()),
									(t.issuer = e.GetIssuer()),
									(t.issuerCN = e.GetIssuerCN()),
									(t.serial = e.GetSerial()),
									(t.subject = e.GetSubject()),
									(t.subjCN = e.GetSubjCN()),
									(t.subjOrg = e.GetSubjOrg()),
									(t.subjOrgUnit = e.GetSubjOrgUnit()),
									(t.subjTitle = e.GetSubjTitle()),
									(t.subjState = e.GetSubjState()),
									(t.subjLocality = e.GetSubjLocality()),
									(t.subjFullName = e.GetSubjFullName()),
									(t.subjAddress = e.GetSubjAddress()),
									(t.subjPhone = e.GetSubjPhone()),
									(t.subjEMail = e.GetSubjEMail()),
									(t.subjDNS = e.GetSubjDNS()),
									(t.subjEDRPOUCode = e.GetSubjEDRPOUCode()),
									(t.subjDRFOCode = e.GetSubjDRFOCode()),
									(t.subjNBUCode = e.GetSubjNBUCode()),
									(t.subjSPFMCode = e.GetSubjSPFMCode()),
									(t.subjOCode = e.GetSubjOCode()),
									(t.subjOUCode = e.GetSubjOUCode()),
									(t.subjUserCode = e.GetSubjUserCode()),
									(t.certBeginTime = e.GetCertBeginTime()),
									(t.certEndTime = e.GetCertEndTime()),
									(t.isPrivKeyTimesAvail = e.IsPrivKeyTimesAvail()),
									(t.privKeyBeginTime = e.GetPrivKeyBeginTime()),
									(t.privKeyEndTime = e.GetPrivKeyEndTime()),
									(t.publicKeyBits = e.GetPublicKeyBits()),
									(t.publicKey = e.GetPublicKey()),
									(t.publicKeyID = e.GetPublicKeyID()),
									(t.issuerPublicKeyID = e.GetIssuerPublicKeyID()),
									(t.keyUsage = e.GetKeyUsage()),
									(t.extKeyUsages = e.GetExtKeyUsages()),
									(t.policies = e.GetPolicies()),
									(t.crlDistribPoint1 = e.GetCRLDistribPoint1()),
									(t.crlDistribPoint2 = e.GetCRLDistribPoint2()),
									(t.isPowerCert = e.IsPowerCert()),
									(t.isSubjTypeAvail = e.IsSubjTypeAvail()),
									(t.isSubjCA = e.IsSubjCA()),
									(t.chainLength = e.GetChainLength()),
									(t.UPN = e.GetUPN()),
									(t.publicKeyType = e.GetPublicKeyType()),
									(t.keyUsageType = e.GetKeyUsageType()),
									(t.RSAModul = e.GetRSAModul()),
									(t.RSAExponent = e.GetRSAExponent()),
									(t.OCSPAccessInfo = e.GetOCSPAccessInfo()),
									(t.issuerAccessInfo = e.GetIssuerAccessInfo()),
									(t.TSPAccessInfo = e.GetTSPAccessInfo()),
									(t.isLimitValueAvailable = e.IsLimitValueAvail()),
									(t.limitValue = e.GetLimitValue()),
									(t.limitValueCurrency = e.GetLimitValueCurrency()),
									(t.subjType = e.GetSubjType()),
									(t.subjSubType = e.GetSubjSubType()),
									(t.subjUNZR = e.GetSubjUNZR()),
									(t.subjCountry = e.GetSubjCountry()),
									(t.fingerprint = e.GetFingerprint()),
									(t.isQSCD = e.IsQSCD()),
									(t.subjUserID = e.GetSubjUserID()),
									(t.certHashType = e.GetCertHashType()),
									t
								)
							}),
							(e.MapToEndUserParams = function (e, t) {
								return (
									(t.SN = e.GetSN()),
									(t.commonName = e.GetCommonName()),
									(t.locality = e.GetLocality()),
									(t.state = e.GetState()),
									(t.organization = e.GetOrganization()),
									(t.orgUnit = e.GetOrgUnit()),
									(t.title = e.GetTitle()),
									(t.street = e.GetStreet()),
									(t.phone = e.GetPhone()),
									(t.surname = e.GetSurname()),
									(t.givenname = e.GetGivenname()),
									(t.EMail = e.GetEMail()),
									(t.DNS = e.GetDNS()),
									(t.EDRPOUCode = e.GetEDRPOUCode()),
									(t.DRFOCode = e.GetDRFOCode()),
									(t.NBUCode = e.GetNBUCode()),
									(t.SPFMCode = e.GetSPFMCode()),
									(t.information = e.GetInformation()),
									(t.passPhrase = e.GetPassPhrase()),
									(t.isPublishCertificate = e.GetIsPublishCertificate()),
									(t.RAAdminSN = e.GetRAAdminSN()),
									t
								)
							}),
							(e.MapToEndUserTimeInfo = function (e, t) {
								return (
									(t.version = e.GetVersion()),
									(t.isTimeAvail = e.IsTimeAvail()),
									(t.isTimeStamp = e.IsTimeStamp()),
									(t.time = e.GetTime()),
									(t.isSignTimeStampAvail = e.IsSignTimeStampAvail()),
									(t.signTimeStamp = e.GetSignTimeStamp()),
									t
								)
							}),
							(e.MapToEndUserSignInfo = function (t, n) {
								return (
									(n.ownerInfo = e.MapEndUserOwnerInfo(
										t.GetOwnerInfo(),
										new i.a()
									)),
									(n.timeInfo = e.MapToEndUserTimeInfo(
										t.GetTimeInfo(),
										new o.EndUserTimeInfo()
									)),
									(n.data = t.GetData()),
									(n.signLevel = 0),
									n
								)
							}),
							(e.MapToEndUserSenderInfo = function (t, n) {
								return (
									(n.ownerInfo = e.MapEndUserOwnerInfo(
										t.GetOwnerInfo(),
										new i.a()
									)),
									(n.timeInfo = e.MapToEndUserTimeInfo(
										t.GetTimeInfo(),
										new o.EndUserTimeInfo()
									)),
									(n.data = t.GetData()),
									n
								)
							}),
							(e.MapToEndUserCertificate = function (t, n) {
								return (
									(n.data = t.GetData()),
									(n.infoEx = e.MapToEndUserCertificateInfoEx(
										t.GetInfoEx(),
										new r.a()
									)),
									n
								)
							}),
							(e.MapFromEndUserInfo = function (e, t) {
								return (
									t.SetCommonName(e.commonName),
									t.SetLocality(e.locality),
									t.SetState(e.state),
									t.SetOrganization(e.organization),
									t.SetOrgUnit(e.orgUnit),
									t.SetTitle(e.title),
									t.SetStreet(e.street),
									t.SetPhone(e.phone),
									t.SetSurname(e.surname),
									t.SetGivenname(e.givenname),
									t.SetEMail(e.EMail),
									t.SetDNS(e.DNS),
									t.SetEDRPOUCode(e.EDRPOUCode),
									t.SetDRFOCode(e.DRFOCode),
									t.SetNBUCode(e.NBUCode),
									t.SetSPFMCode(e.SPFMCode),
									t.SetOCode(e.OCode),
									t.SetOUCode(e.OUCode),
									t.SetUserCode(e.userCode),
									t.SetUPN(e.UPN),
									t.SetUNZR(e.UNZR),
									t.SetCountry(e.country),
									t
								)
							}),
							(e.MapToEndUserRequestInfo = function (e, t) {
								return (
									(t.isFilled = !0),
									(t.data = e.GetRequest()),
									(t.type = e.GetRequestType()),
									(t.fileName = e.GetDefaultRequestFileName()),
									(t.isSimple = e.IsSimple()),
									(t.subject = e.GetSubject()),
									(t.subjCN = e.GetSubjCN()),
									(t.subjOrg = e.GetSubjOrg()),
									(t.subjOrgUnit = e.GetSubjOrgUnit()),
									(t.subjTitle = e.GetSubjTitle()),
									(t.subjState = e.GetSubjState()),
									(t.subjLocality = e.GetSubjLocality()),
									(t.subjFullName = e.GetSubjFullName()),
									(t.subjAddress = e.GetSubjAddress()),
									(t.subjPhone = e.GetSubjPhone()),
									(t.subjEMail = e.GetSubjEMail()),
									(t.subjDNS = e.GetSubjDNS()),
									(t.subjEDRPOUCode = e.GetSubjEDRPOUCode()),
									(t.subjDRFOCode = e.GetSubjDRFOCode()),
									(t.subjNBUCode = e.GetSubjNBUCode()),
									(t.subjSPFMCode = e.GetSubjSPFMCode()),
									(t.subjOCode = e.GetSubjOCode()),
									(t.subjOUCode = e.GetSubjOUCode()),
									(t.subjUserCode = e.GetSubjUserCode()),
									(t.certBeginTime = e.GetCertBeginTime()),
									(t.certEndTime = e.GetCertEndTime()),
									(t.isPrivKeyTimesAvail = e.IsPrivKeyTimesAvail()),
									(t.privKeyBeginTime = e.GetPrivKeyBeginTime()),
									(t.privKeyEndTime = e.GetPrivKeyEndTime()),
									(t.publicKeyType = e.GetPublicKeyType()),
									(t.publicKeyBits = e.GetPublicKeyBits()),
									(t.RSAModul = e.GetRSAModul()),
									(t.RSAExponent = e.GetRSAExponent()),
									(t.publicKey = e.GetPublicKey()),
									(t.publicKeyID = e.GetPublicKeyID()),
									(t.extKeyUsages = e.GetExtKeyUsages()),
									(t.crlDistribPoint1 = e.GetCRLDistribPoint1()),
									(t.crlDistribPoint2 = e.GetCRLDistribPoint2()),
									(t.isSubjTypeAvail = e.IsSubjTypeAvail()),
									(t.subjType = e.GetSubjType()),
									(t.subjSubType = e.GetSubjSubType()),
									(t.isSelfSigned = e.IsSelfSigned()),
									(t.signIssuer = e.GetSignIssuer()),
									(t.signSerial = e.GetSignSerial()),
									(t.subjUNZR = e.GetSubjUNZR()),
									(t.subjCountry = e.GetSubjCountry()),
									(t.isQSCD = e.IsQSCD()),
									t
								)
							}),
							(e.MapToEndUserReference = function (e, t) {
								return (t.name = e.GetName()), (t.val = e.GetData()), t
							}),
							(e.MapFromEndUserReference = function (e, t) {
								return t.SetName(e.name), t.SetData(e.val), t
							}),
							e
						)
					})()
			},
			function (e, t, n) {
				var r, i
				void 0 ===
					(i =
						'function' ==
						typeof (r = function () {
							var e = function () {
								;(this.vendor = 'JSC IIT'),
									(this.classVersion = 1),
									(this.className = 'EndUserUTF8Coder')
							}
							;(e.prototype.encode = function (e) {
								for (var t = [], n = 0, r = 0; r < e.length; r++) {
									var i = e.charCodeAt(r)
									i < 128
										? (t[n++] = i)
										: i < 2048
										? ((t[n++] = (i >> 6) | 192), (t[n++] = (63 & i) | 128))
										: ((t[n++] = (i >> 12) | 224),
										  (t[n++] = ((i >> 6) & 63) | 128),
										  (t[n++] = (63 & i) | 128))
								}
								return t
							}),
								(e.prototype.decode = function (e) {
									for (var t, n, r, i = [], o = 0, s = 0; o < e.length; )
										(t = e[o++]) < 128
											? (i[s++] = String.fromCharCode(t))
											: t > 191 && t < 224
											? ((n = e[o++]),
											  (i[s++] = String.fromCharCode(
													((31 & t) << 6) | (63 & n)
											  )))
											: ((n = e[o++]),
											  (r = e[o++]),
											  (i[s++] = String.fromCharCode(
													((15 & t) << 12) | ((63 & n) << 6) | (63 & r)
											  )))
									return i.join('')
								})
							var t = function () {
								;(this.vendor = 'JSC IIT'),
									(this.classVersion = 1),
									(this.className = 'EndUserUTF16LECoder')
							}
							;(t.prototype.encode = function (e) {
								for (var t, n = [], r = 0; r < e.length; r++)
									(t = e.charCodeAt(r)),
										n.push(255 & t),
										n.push((65280 & t) >> 8)
								return n
							}),
								(t.prototype.decode = function (e) {
									var t,
										n = 0,
										r = ''
									if (e.length % 2 != 0) return null
									for (
										(t = e.length) > 0 &&
										0 == e[t - 2] &&
										0 == e[t - 1] &&
										(t -= 2);
										n < t;

									)
										(r += String.fromCharCode(e[n] | (e[n + 1] << 8))), (n += 2)
									return r
								})
							var n = function () {
								;(this.vendor = 'JSC IIT'),
									(this.classVersion = 1),
									(this.className = 'EndUserCP1251Coder'),
									(this.m_cp1251_table = {
										0: 0,
										1: 1,
										2: 2,
										3: 3,
										4: 4,
										5: 5,
										6: 6,
										7: 7,
										8: 8,
										9: 9,
										10: 10,
										11: 11,
										12: 12,
										13: 13,
										14: 14,
										15: 15,
										16: 16,
										17: 17,
										18: 18,
										19: 19,
										20: 20,
										21: 21,
										22: 22,
										23: 23,
										24: 24,
										25: 25,
										26: 26,
										27: 27,
										28: 28,
										29: 29,
										30: 30,
										31: 31,
										32: 32,
										33: 33,
										34: 34,
										35: 35,
										36: 36,
										37: 37,
										38: 38,
										39: 39,
										40: 40,
										41: 41,
										42: 42,
										43: 43,
										44: 44,
										45: 45,
										46: 46,
										47: 47,
										48: 48,
										49: 49,
										50: 50,
										51: 51,
										52: 52,
										53: 53,
										54: 54,
										55: 55,
										56: 56,
										57: 57,
										58: 58,
										59: 59,
										60: 60,
										61: 61,
										62: 62,
										63: 63,
										64: 64,
										65: 65,
										66: 66,
										67: 67,
										68: 68,
										69: 69,
										70: 70,
										71: 71,
										72: 72,
										73: 73,
										74: 74,
										75: 75,
										76: 76,
										77: 77,
										78: 78,
										79: 79,
										80: 80,
										81: 81,
										82: 82,
										83: 83,
										84: 84,
										85: 85,
										86: 86,
										87: 87,
										88: 88,
										89: 89,
										90: 90,
										91: 91,
										92: 92,
										93: 93,
										94: 94,
										95: 95,
										96: 96,
										97: 97,
										98: 98,
										99: 99,
										100: 100,
										101: 101,
										102: 102,
										103: 103,
										104: 104,
										105: 105,
										106: 106,
										107: 107,
										108: 108,
										109: 109,
										110: 110,
										111: 111,
										112: 112,
										113: 113,
										114: 114,
										115: 115,
										116: 116,
										117: 117,
										118: 118,
										119: 119,
										120: 120,
										121: 121,
										122: 122,
										123: 123,
										124: 124,
										125: 125,
										126: 126,
										127: 127,
										1027: 129,
										8225: 135,
										1046: 198,
										8222: 132,
										1047: 199,
										1168: 165,
										1048: 200,
										1113: 154,
										1049: 201,
										1045: 197,
										1050: 202,
										1028: 170,
										160: 160,
										1040: 192,
										1051: 203,
										164: 164,
										166: 166,
										167: 167,
										169: 169,
										171: 171,
										172: 172,
										173: 173,
										174: 174,
										1053: 205,
										176: 176,
										177: 177,
										1114: 156,
										181: 181,
										182: 182,
										183: 183,
										8221: 148,
										187: 187,
										1029: 189,
										1056: 208,
										1057: 209,
										1058: 210,
										8364: 136,
										1112: 188,
										1115: 158,
										1059: 211,
										1060: 212,
										1030: 178,
										1061: 213,
										1062: 214,
										1063: 215,
										1116: 157,
										1064: 216,
										1065: 217,
										1031: 175,
										1066: 218,
										1067: 219,
										1068: 220,
										1069: 221,
										1070: 222,
										1032: 163,
										8226: 149,
										1071: 223,
										1072: 224,
										8482: 153,
										1073: 225,
										8240: 137,
										1118: 162,
										1074: 226,
										1110: 179,
										8230: 133,
										1075: 227,
										1033: 138,
										1076: 228,
										1077: 229,
										8211: 150,
										1078: 230,
										1119: 159,
										1079: 231,
										1042: 194,
										1080: 232,
										1034: 140,
										1025: 168,
										1081: 233,
										1082: 234,
										8212: 151,
										1083: 235,
										1169: 180,
										1084: 236,
										1052: 204,
										1085: 237,
										1035: 142,
										1086: 238,
										1087: 239,
										1088: 240,
										1089: 241,
										1090: 242,
										1036: 141,
										1041: 193,
										1091: 243,
										1092: 244,
										8224: 134,
										1093: 245,
										8470: 185,
										1094: 246,
										1054: 206,
										1095: 247,
										1096: 248,
										8249: 139,
										1097: 249,
										1098: 250,
										1044: 196,
										1099: 251,
										1111: 191,
										1055: 207,
										1100: 252,
										1038: 161,
										8220: 147,
										1101: 253,
										8250: 155,
										1102: 254,
										8216: 145,
										1103: 255,
										1043: 195,
										1105: 184,
										1039: 143,
										1026: 128,
										1106: 144,
										8218: 130,
										1107: 131,
										8217: 146,
										1108: 186,
										1109: 190,
									}),
									(this.m_ut8_table = unescape(
										'%u0402%u0403%u201A%u0453%u201E%u2026%u2020%u2021%u20AC%u2030%u0409%u2039%u040A%u040C%u040B%u040F%u0452%u2018%u2019%u201C%u201D%u2022%u2013%u2014%u0000%u2122%u0459%u203A%u045A%u045C%u045B%u045F%u00A0%u040E%u045E%u0408%u00A4%u0490%u00A6%u00A7%u0401%u00A9%u0404%u00AB%u00AC%u00AD%u00AE%u0407%u00B0%u00B1%u0406%u0456%u0491%u00B5%u00B6%u00B7%u0451%u2116%u0454%u00BB%u0458%u0405%u0455%u0457'
									))
							}
							;(n.prototype.encode = function (e) {
								for (var t = [], n = 0; n < e.length; n++) {
									var r = e.charCodeAt(n)
									if (!(r in this.m_cp1251_table))
										throw (
											'Character ' +
											e.charAt(n) +
											" isn't supported by win1251!"
										)
									t.push(this.m_cp1251_table[r])
								}
								return t
							}),
								(n.prototype.decode = function (e) {
									for (var t, n = '', r = 0; r < e.length; r++)
										n +=
											(t = e[r]) >= 192 && t <= 255
												? String.fromCharCode(t - 192 + 1040)
												: t >= 128 && t <= 191
												? this.m_ut8_table.charAt(t - 128)
												: String.fromCharCode(t)
									return n
								})
							var r = {
									GetCoder: function (r) {
										switch ((r = r.toUpperCase())) {
											case 'UTF-8':
												return new e()
											case 'UTF-16LE':
												return new t()
											case 'WINDOWS-1251':
												return new n()
											default:
												return null
										}
									},
									ArrayToString: function (e, t) {
										var n, i
										if (
											(void 0 === e && (e = 'UTF-8'),
											null == (n = r.GetCoder(e)))
										)
											throw new te(
												(i = ee.ERROR_BAD_PARAMETER),
												ee.getErrorDescriptionEx(i, 0)
											)
										return n.decode(t)
									},
								},
								i = function () {
									;(this.vendor = 'JSC IIT'),
										(this.classVersion = 1),
										(this.className = 'EndUserDateCoder'),
										(this.dateDelimeter = '.'),
										(this.timeDelimeter = ':'),
										(this.dateTimeDelimeter = ' '),
										(this.format = 'dd.MM.yyyy HH:mm:ss')
								}
							;(i.prototype.encode = function (e) {
								var t = e.getDate(),
									n = e.getMonth() + 1,
									r = e.getFullYear(),
									i = e.getHours(),
									o = e.getMinutes(),
									s = e.getSeconds()
								return (
									t +
									this.dateDelimeter +
									n +
									this.dateDelimeter +
									r +
									this.dateTimeDelimeter +
									i +
									this.timeDelimeter +
									o +
									this.timeDelimeter +
									s
								)
							}),
								(i.prototype.decode = function (e) {
									try {
										var t = e.split(this.dateTimeDelimeter),
											n = t[0].split(this.dateDelimeter),
											r = t[1].split(this.timeDelimeter),
											i = parseInt(n[0]),
											o = parseInt(n[1]) - 1,
											s = parseInt(n[2])
										if (i < 0 || i > 31 || o < 0 || o > 12 || s < 0) return null
										var a = parseInt(r[0]),
											u = parseInt(r[1]),
											l = parseInt(r[2])
										return a < 0 || a > 23 || u < 0 || u > 59 || l < 0 || l > 59
											? null
											: new Date(s, o, i, a, u, l, 0)
									} catch (e) {
										return null
									}
								})
							var o = function () {
								;(this.vendor = 'JSC IIT'),
									(this.classVersion = 1),
									(this.className = 'EndUserBase64Coder'),
									(this.m_map =
										'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'),
									(this.m_codes = [
										65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
										80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100,
										101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
										113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49,
										50, 51, 52, 53, 54, 55, 56, 57, 43, 47,
									])
							}
							;(o.prototype._getTextDecoder = function () {
								try {
									if ('undefined' == typeof TextDecoder) return null
									var e = new TextDecoder('utf-8')
									return 'utf-8' != e.encoding ? null : e
								} catch (e) {
									return null
								}
							}),
								(o.prototype._encodePart = function (e, t, n) {
									for (var r, i, o = [], s = t; s < n; s += 3)
										(r = (e[s] << 16) | (e[s + 1] << 8) | e[s + 2]),
											(i =
												this.m_map[(r >> 18) & 63] +
												this.m_map[(r >> 12) & 63] +
												this.m_map[(r >> 6) & 63] +
												this.m_map[63 & r]),
											o.push(i)
									return o.join('')
								}),
								(o.prototype.encode = function (e) {
									var t,
										n,
										r,
										i,
										o,
										s,
										a = ''
									if (
										0 ==
										(o = (t =
											'undefined' == typeof Uint8Array
												? void 0 === f
													? e.slice(0)
													: new f(e)
												: new Uint8Array(e)).length)
									)
										return ''
									var u = this._getTextDecoder()
									if (null != u) {
										for (
											s = new Uint8Array(4 * parseInt((o + 2) / 3)),
												n = 0,
												r = 0;
											n < o - (o % 3);
											n += 3, r += 4
										)
											(i = (t[n] << 16) | (t[n + 1] << 8) | t[n + 2]),
												(s[r] = this.m_codes[(i >> 18) & 63]),
												(s[r + 1] = this.m_codes[(i >> 12) & 63]),
												(s[r + 2] = this.m_codes[(i >> 6) & 63]),
												(s[r + 3] = this.m_codes[63 & i])
										switch (o % 3) {
											case 1:
												;(i = t[n] << 16),
													(s[r] = this.m_codes[(i >> 18) & 63]),
													(s[r + 1] = this.m_codes[(i >> 12) & 63]),
													(s[r + 2] = 61),
													(s[r + 3] = 61)
												break
											case 2:
												;(i = (t[n] << 16) | (t[n + 1] << 8)),
													(s[r] = this.m_codes[(i >> 18) & 63]),
													(s[r + 1] = this.m_codes[(i >> 12) & 63]),
													(s[r + 2] = this.m_codes[(i >> 6) & 63]),
													(s[r + 3] = 61)
										}
										a = u.decode(s)
									} else {
										var l,
											c = null,
											p = o - (o % 3),
											_ = parseInt(p / 15360)
										for (s = [], n = 0; n < _; n++)
											(c = this._encodePart(t, 15360 * n, 15360 * n + 15360)),
												s.push(c)
										switch (
											(15360 * _ < p &&
												((c = this._encodePart(t, 15360 * n, p)), s.push(c)),
											o % 3)
										) {
											case 1:
												;(i = t[o - 1] << 16),
													(l = this.m_map[(i >> 18) & 63]),
													(l += this.m_map[(i >> 12) & 63]),
													(l += '='),
													(l += '='),
													s.push(l)
												break
											case 2:
												;(i = (t[o - 2] << 16) | (t[o - 1] << 8)),
													(l = this.m_map[(i >> 18) & 63]),
													(l += this.m_map[(i >> 12) & 63]),
													(l += this.m_map[(i >> 6) & 63]),
													(l += '='),
													s.push(l)
										}
										a = s.join('')
									}
									return a
								}),
								(o.prototype.decode = function (e) {
									var t, n, r, i, o, s, a, u, l, c, p
									if ('' == e || (3 & e.length) > 0)
										return 'undefined' == typeof Uint8Array
											? void 0 === f
												? []
												: new f(0)
											: new Uint8Array(0)
									for (
										n =
											((s = e.length) / 4) * 3 -
											(a = '=' == e[s - 1] ? ('=' == e[s - 2] ? 2 : 1) : 0),
											t =
												'undefined' == typeof Uint8Array
													? void 0 === f
														? []
														: new f(n)
													: new Uint8Array(n),
											r = 0,
											i = 0,
											o = 0;
										r < Math.floor((s - a) / 4);
										r++
									)
										(u = this.m_map.indexOf(e[i++])),
											(l = this.m_map.indexOf(e[i++])),
											(c = this.m_map.indexOf(e[i++])),
											(p = this.m_map.indexOf(e[i++])),
											(t[o++] = (u << 2) | (l >> 4)),
											(t[o++] = ((15 & l) << 4) | (c >> 2)),
											(t[o++] = ((3 & c) << 6) | (63 & p))
									switch (a) {
										case 2:
											;(u = this.m_map.indexOf(e[i])),
												(l = this.m_map.indexOf(e[i + 1])),
												(t[o++] = (u << 2) | (l >> 4))
											break
										case 1:
											;(u = this.m_map.indexOf(e[i])),
												(l = this.m_map.indexOf(e[i + 1])),
												(c = this.m_map.indexOf(e[i + 2])),
												(t[o++] = (u << 2) | (l >> 4)),
												(t[o++] = ((15 & l) << 4) | (c >> 2))
									}
									return t
								})
							var s = function (e) {
									return new (function () {
										var t = this,
											n = function () {
												var e
												t.deferred.length &&
													((e = [].slice.call(arguments)).unshift(n),
													t.deferred[0].apply(t, e),
													t.deferred.shift())
											}
										;(this.deferred = []),
											(this.eu_wait = function (e) {
												return this.deferred.push(e), t
											}),
											e(n)
									})()
								},
								a = function () {
									var e = this._getBrowserInfo()
									;(this.m_name = e.name),
										(this.m_version = e.version),
										(this.m_arch = this._getArch()),
										(this.m_os_name = this._getOSName())
								}
							;(a.BROWSER_NAME_IE = 'IE'),
								(a.BROWSER_NAME_OPERA = 'Opera'),
								(a.BROWSER_NAME_CHROME = 'Chrome'),
								(a.BROWSER_NAME_FIREFOX = 'Firefox'),
								(a.BROWSER_NAME_SAFARI = 'Safari'),
								(a.BROWSER_NAME_EDGE = 'Edge'),
								(a.BROWSER_NAME_EU_SIGN_AGENT = 'EUSignAgent'),
								(a.BROWSER_NAME_UNKNOWN = 'Unknown'),
								(a.OS_NAME_WINDOWS = 'Windows'),
								(a.OS_NAME_LINUX = 'Linux'),
								(a.OS_NAME_UNIX = 'Unix'),
								(a.OS_NAME_MAC = 'Mac OS X'),
								(a.OS_NAME_ANDROID = 'Android'),
								(a.OS_NAME_IOS = 'iOS'),
								(a.OS_NAME_UNKNOWN = 'Unknown'),
								(a.BROWSER_ARCH_NAME_X86 = 'x86'),
								(a.BROWSER_ARCH_NAME_X64 = 'x64'),
								(a.BROWSER_ARCH_NAME_ARM = 'arm'),
								(a.BROWSER_ARCH_NAME_UNKNOWN = 'Unknown'),
								(a.prototype._getBrowserInfo = function () {
									var e,
										t = {
											name: a.BROWSER_NAME_UNKNOWN,
											version: '',
										},
										n = navigator.userAgent,
										r =
											n.match(
												/(opera|chrome|safari|firefox|msie|trident|eusignagent(?=\/))\/?\s*(\d+)/i
											) || []
									return /msie/i.test(r[1]) || /trident/i.test(r[1])
										? ((t.name = a.BROWSER_NAME_IE),
										  /msie/i.test(r[1])
												? (t.version = parseInt(r[2]))
												: ((e = /\brv[ :]+(\d+)/g.exec(n) || []),
												  (t.version = parseInt(e[1]))),
										  t)
										: 'Chrome' === r[1] &&
										  null != (e = n.match(/\b(OPR|Edge)\/(\d+)/))
										? ((t.name = e[1].replace('OPR', a.BROWSER_NAME_OPERA)),
										  (t.version = parseInt(e[2])),
										  t)
										: ((r = r[2]
												? [r[1], r[2]]
												: [navigator.appName, navigator.appVersion, '-?']),
										  null != (e = n.match(/version\/(\d+)/i)) &&
												r.splice(1, 1, e[1]),
										  (t.name = r[0]),
										  (t.version = parseInt(r[1])),
										  t)
								}),
								(a.prototype._getOSName = function () {
									var e = navigator.platform || '',
										t = (navigator.userAgent || '').toLowerCase(),
										n = navigator.userAgentData || []
									return -1 != e.indexOf('Win')
										? a.OS_NAME_WINDOWS
										: -1 != e.indexOf('iPad') ||
										  -1 != e.indexOf('iPhone') ||
										  -1 != e.indexOf('iPod') ||
										  -1 != e.indexOf('Android') ||
										  (t.includes('Mac') && 'ontouchend' in document)
										? a.OS_NAME_IOS
										: -1 != e.indexOf('Mac')
										? a.OS_NAME_MAC
										: -1 != e.indexOf('Android') ||
										  -1 != t.indexOf('android') ||
										  'Android' == n.platform ||
										  (-1 != e.indexOf('Linux') &&
												navigator.maxTouchPoints &&
												navigator.maxTouchPoints > 1)
										? a.OS_NAME_ANDROID
										: -1 != e.indexOf('Linux')
										? a.OS_NAME_LINUX
										: -1 != e.indexOf('FreeBSD')
										? a.OS_NAME_UNIX
										: a.OS_NAME_UNKNOWN
								}),
								(a.prototype._getArch = function () {
									var e,
										t = navigator.platform || ''
									switch (this._getOSName()) {
										case a.OS_NAME_WINDOWS:
											e =
												-1 != t.indexOf('Win32')
													? a.BROWSER_ARCH_NAME_X86
													: a.BROWSER_ARCH_NAME_X64
											break
										case a.OS_NAME_MAC:
											e =
												-1 != t.indexOf('MacIntel')
													? a.BROWSER_ARCH_NAME_X86
													: a.BROWSER_ARCH_NAME_X64
											break
										case a.OS_NAME_IOS:
											e = a.BROWSER_ARCH_NAME_ARM
											break
										case a.OS_NAME_UNIX:
										case a.OS_NAME_LINUX:
										case a.OS_NAME_ANDROID:
											e =
												-1 != t.indexOf('armv')
													? a.BROWSER_ARCH_NAME_ARM
													: -1 != t.indexOf('x86_64')
													? a.BROWSER_ARCH_NAME_X64
													: a.BROWSER_ARCH_NAME_X86
											break
										default:
											e = a.BROWSER_ARCH_NAME_UNKNOWN
									}
									return e
								}),
								(a.prototype.GetName = function () {
									return this.m_name
								}),
								(a.prototype.GetVersion = function () {
									return this.m_version
								}),
								(a.prototype.GetArch = function () {
									return this.m_arch
								}),
								(a.prototype.GetOSName = function () {
									return this.m_os_name
								})
							var u = []
							;(u[0] = 'Executed successfully'),
								(u[-1] = 'Unknown error'),
								(u[-32300] = 'Transport error'),
								(u[-32400] = 'System error'),
								(u[-32500] = 'Application error'),
								(u[-32510] = 'Application error. Invalid session'),
								(u[-32600] =
									'Server error. Invalid rpc. Not conforming to spec'),
								(u[-32601] = 'Server error. Requested method not found'),
								(u[-32602] = 'Server error. Invalid method parameters'),
								(u[-32603] = 'Server error. Internal rpc error'),
								(u[-32700] = 'Parse error. Not well formed'),
								(u[-32701] = 'Parse error. Unsupported encoding'),
								(u[-32702] = 'Parse error. Invalid character for encoding')
							var l = function (e, t, n, r) {
								switch (
									((this.Vendor = 'JSC IIT'),
									(this.ClassVersion = '1.0.2'),
									(this.ClassName = 'JSONRPCClient'),
									(this.m_type = e),
									(this.m_log = !1),
									this._logFunction('Initialize', arguments, [
										'type',
										'address',
										'port',
										'useHttps',
									]),
									e)
								) {
									case 2:
										;(this.m_uri = t),
											(this.m_callbacks = []),
											this._registerOnExtensionRecieveEventHandler()
										break
									case 3:
									case 4:
										;(this.m_uri = t), (this.m_callbacks = [])
										break
									case 1:
									default:
										;(this.m_uri = ''),
											r && t.indexOf('https://')
												? (this.m_uri += 'https://')
												: 0 != t.indexOf('http://') &&
												  (this.m_uri += 'http://'),
											(this.m_uri += t + ':' + n)
								}
								;(this.m_requests = 0),
									(this.m_session_id = this._loadSessionId())
							}
							;(l.prototype._logFunction = function (e, t, n) {
								if (this.m_log) {
									for (var r = '(', i = 0; i < t.length; i++)
										(r += n[i] + ': ' + t[i].toString()),
											i != t.length - 1 && (r += ', ')
									;(r += ')'), this._log(e, r)
								}
							}),
								(l.prototype._log = function (e, t) {
									this.m_log && console.log(e + ': ' + t)
								}),
								(l.prototype._loadSessionId = function () {
									try {
										var e = sessionStorage.getItem(
											this.ClassName + 'session_id'
										)
										return void 0 === e || null == e || '' == e ? null : e
									} catch (e) {
										return null
									}
								}),
								(l.prototype._saveSessionId = function (e) {
									try {
										sessionStorage.setItem(this.ClassName + 'session_id', e)
									} catch (e) {}
								}),
								(l.prototype._removeSessionId = function () {
									try {
										sessionStorage.removeItem(this.ClassName + 'session_id')
									} catch (e) {}
								}),
								(l.prototype.createXMLHttpRequest = function () {
									return (
										'undefined' == typeof XMLHttpRequest &&
											(XMLHttpRequest = function () {
												try {
													return new ActiveXObject('Msxml2.XMLHTTP.6.0')
												} catch (e) {}
												try {
													return new ActiveXObject('Msxml2.XMLHTTP.3.0')
												} catch (e) {}
												try {
													return new ActiveXObject('Msxml2.XMLHTTP')
												} catch (e) {}
												try {
													return new ActiveXObject('Microsoft.XMLHTTP')
												} catch (e) {}
												throw u[-32300]
											}),
										new XMLHttpRequest()
									)
								}),
								(l.prototype.makeRequest = function (e, t, n) {
									var r = null
									try {
										;((r = {}).jsonrpc = '2.0'),
											(r.id = n),
											(r.method = e),
											(r.params = t),
											(r.session_id = this.m_session_id),
											(r = JSON.stringify(r))
									} catch (e) {}
									return r
								}),
								(l.prototype.verifyResponse = function (e, t) {
									try {
										if ('2.0' != t.jsonrpc) return !1
										var n = t.error
										if (void 0 === n) {
											if (t.id != e || void 0 === t.result) return !1
										} else {
											if (void 0 === n.code || void 0 === n.message) return !1
											if (0 != n.code) return !1
										}
										if (void 0 !== t.session_id)
											if (null != this.m_session_id && null != t.session_id) {
												if (this.m_session_id != t.session_id) return !1
											} else
												(this.m_session_id = t.session_id),
													this._saveSessionId(this.m_session_id)
										return !0
									} catch (e) {
										return !1
									}
								}),
								(l.prototype.handleResponse = function (e, t) {
									try {
										return (
											(t = JSON.parse(t)),
											this.verifyResponse(e, t)
												? t
												: ((this.m_session_id = null),
												  this._removeSessionId(),
												  null)
										)
									} catch (e) {
										return null
									}
								}),
								(l.prototype._sendHttp = function (e, t, n) {
									var r,
										i,
										o = this
									try {
										if (
											((r = this.createXMLHttpRequest()).open(
												'POST',
												this.m_uri,
												null != n
											),
											r.setRequestHeader(
												'Content-Type',
												'application/json-rpc'
											),
											null != n &&
												((r.onload = function () {
													200 == r.status
														? ((i = o.handleResponse(t, r.response)),
														  n(null != i ? i.result : null))
														: n(null)
												}),
												(r.onerror = function () {
													n(null)
												})),
											r.send(e),
											null != n)
										)
											return
										return 200 != r.status ||
											null == (i = this.handleResponse(t, r.response))
											? null
											: i.result
									} catch (e) {
										if (null == n) return null
										n(null)
									}
								}),
								(l.prototype._registerOnExtensionRecieveEventHandler =
									function () {
										var e = this
										window.addEventListener(
											'message',
											function (t) {
												if (t.data.sender == e.m_uri)
													try {
														var n = t.data.callback_id,
															r = e.m_callbacks[n - 1]
														delete e.m_callbacks[n - 1],
															e._logFunction(
																'_registerOnExtensionRecieveEventHandler',
																[r.request_id, t.data.data],
																['request_id', 'data']
															)
														var i = e.handleResponse(r.request_id, t.data.data)
														if (null == i) return void r.callback(null)
														r.callback(i.result)
													} catch (e) {}
											},
											!1
										)
									}),
								(l.prototype._sendExtension = function (e, t, n) {
									var r = this
									if (
										(r._logFunction(
											'_sendExtension',
											[arguments[0], arguments[1]],
											['request', 'request_id']
										),
										!n)
									)
										throw 'Synchronous calls for web extensions not supported'
									if (1 == document.getElementsByClassName(r.m_uri).length)
										try {
											var i = {
													request_id: t,
													callback: n,
												},
												o = r.m_callbacks.push(i),
												s = {
													sender: r.ClassName,
													request: e,
													callback_id: o,
												}
											window.postMessage(s, '*')
										} catch (e) {
											n(null)
										}
									else n(null)
								}),
								(l.prototype._getPluginObject = function () {
									try {
										for (
											var e = document.getElementsByTagName('object'), t = 0;
											t < e.length;
											t++
										) {
											var n = e[t].classid
											if (
												(!n &&
													e[t].attributes &&
													e[t].attributes.classid &&
													(n = e[t].attributes.classid.value),
												n === this.m_uri)
											)
												return e[t]
										}
										return null
									} catch (e) {
										return null
									}
								}),
								(l.prototype._sendPlugin = function (e, t, n) {
									var i,
										s = this
									s._logFunction(
										'_sendPlugin',
										[arguments[0], arguments[1]],
										['request', 'request_id']
									)
									var a = s._getPluginObject()
									if (null == a) return null != n && n(null), null
									var u = function (e) {
										try {
											for (var t = new o(), n = new f(0); ; ) {
												var i = a.ProcessData(e),
													s = i.slice(0, 5),
													u = i.slice(5, i.length - 1)
												if (null != u || '' != u) {
													var l = t.decode(u),
														c = new f(n.length + l.length)
													c.set(n), c.set(l, n.length), (n = c)
												}
												switch (s) {
													case '"part':
														e = '"next"'
														continue
													case '"last':
														return r.ArrayToString('UTF-8', n)
													default:
														return null
												}
											}
										} catch (e) {
											return null
										}
									}
									try {
										return null != n
											? void setTimeout(function () {
													;(i = u(e)),
														s._logFunction(
															'_sendPlugin',
															[t, i],
															['request_id', 'response']
														),
														null != (i = s.handleResponse(t, i))
															? n(i.result)
															: n(null)
											  }, 1)
											: ((i = u(e)),
											  null == (i = s.handleResponse(t, i)) ? null : i.result)
									} catch (e) {
										n(null)
									}
								}),
								(l.prototype.send = function (e, t, n) {
									switch (this.m_type) {
										case 1:
											return this._sendHttp(e, t, n)
										case 2:
											return this._sendExtension(e, t, n)
										case 3:
										case 4:
											return this._sendPlugin(e, t, n)
									}
								}),
								(l.prototype.execute = function (e, t, n) {
									var r, i
									return (
										(r = this.m_requests),
										this.m_requests++,
										null == (i = this.makeRequest(e, t, r))
											? null != n
												? void n(null)
												: null
											: null == n
											? this.send(i, r, n)
											: void this.send(i, r, n)
									)
								})
							var c = function () {}
							;(c.WEB_LIBRARY_OS_NOT_SUPPORTED = 131072),
								(c.WEB_LIBRARY_NOT_INSTALLED_OR_RUN = 131073),
								(c.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED = 131074),
								(c.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED = 131075),
								(c.WEB_LIBRARY_INSTALL_PACKAGE = 131076),
								(c.WEB_LIBRARY_UPDATE_PACKAGE = 131077),
								(c.WEB_LIBRARY_USER_MANUAL = 131078),
								(c.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE = 131079),
								(c.WEB_LIBRARY_CHECK_JRE_VERSION = 131080),
								(c.WEB_LIBRARY_WEB_EXTENSION_NOT_INSTALLED_OR_RUN = 131081),
								((c.DESCRIPTIONS = [])[c.WEB_LIBRARY_OS_NOT_SUPPORTED] = [
									'Інсталяційний пакет web-бібліотеки підпису для вашої системи відсутній',
									'Инсталяционный  пакет web-библиотеки подписи для вашей системы отсутствует',
									'The installation package of the library for the web signature for your system is absent',
								]),
								(c.DESCRIPTIONS[c.WEB_LIBRARY_NOT_INSTALLED_OR_RUN] = [
									'Бібліотеку web-підпису не запущено або не інстальовано у системі. Для продовження необхідно запустити або інсталювати бібліотеку web-підпису.',
									'Библиотеку web-подписи не запущено или не установлено в системе. Для продолжения необходимо запустить или установить библиотеку web-подписи.',
									"The library for the web signature isn't started or not installed in system. To continue, it is necessary to start or install library for the web signature.",
								]),
								(c.DESCRIPTIONS[c.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED] =
									[
										'Інстальована версія web-бібліотеки підпису більше не підтримується. Для продовження необхідно інсталювати оновлену версію web-бібліотеки підпису.',
										'Инсталированная версия web-библиотеки подписи больше не поддерживается. Для продолжения необходимо установить обновленную версию web-библиотеки подписи.',
										"The installed version of library for the web signature isn't supported any more. To continue, it is necessary to install the updated version of the library for the web signature.",
									]),
								(c.DESCRIPTIONS[c.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED] = [
									'Java-апплет не завантажено. Необхідно перевірити версію JRE',
									'Java-апплет не загружен. Необходимо проверить версию JRE',
									"Java applet isn't loaded. It is necessary to check the version of JRE",
								]),
								(c.DESCRIPTIONS[c.WEB_LIBRARY_INSTALL_PACKAGE] = [
									'Інсталяційний пакет web-бібліотеки підпису',
									'Инсталяционный пакет web-библиотеки подписи',
									'Install package of library for the web signature',
								]),
								(c.DESCRIPTIONS[c.WEB_LIBRARY_UPDATE_PACKAGE] = [
									'Оновлення web-бібліотеки підпису',
									'Обновление web-библиотеки подписи',
									'Update of library for the web signature',
								]),
								(c.DESCRIPTIONS[c.WEB_LIBRARY_USER_MANUAL] = [
									'Настанова користувача',
									'Руководство пользователя',
									'User manual',
								]),
								(c.DESCRIPTIONS[c.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE] = [
									'Інсталяційний пакет бібліотеки підпису (web-розширення)',
									'Инсталяционный пакет библиотеки подписи (web-расширение)',
									'Install package of library for the web signature (web-extension)',
								]),
								(c.DESCRIPTIONS[c.WEB_LIBRARY_CHECK_JRE_VERSION] = [
									'Перевірити версію JRE',
									'Проверить версию JRE',
									'Check JRE version',
								]),
								(c.DESCRIPTIONS[
									c.WEB_LIBRARY_WEB_EXTENSION_NOT_INSTALLED_OR_RUN
								] = [
									'Веб-розширення для роботи бібліотеки web-підпису не запущено або не інстальовано в браузері. Для продовження необхідно запустити або інсталювати веб-розширення.',
									'Веб-расширение для работы библиотеки web-подписи не запущено или не установлено в браузере. Для продолжения необходимо запустить или установить веб-расширение.',
									'The web extension for the web signature library is not running or installed in the browser. To continue, you need to run or install the web extension.',
								]),
								(c.getString = function (e, t) {
									var n, r
									return (
										void 0 === (n = c.DESCRIPTIONS[e]) && (n = ''),
										void 0 === (r = n[t - 1]) ? n[0] : r
									)
								})
							var p = function (e, t, n, r, i) {
								switch (
									((this.m_id = t),
									(this.m_library = null),
									(this.m_language = n),
									(this.m_supportedLibraryTypes = []),
									(this.m_supportedLibraryTypesIndex = 0),
									(this.m_noJavaApplet = !1 | r),
									(this.m_webExtensionFirst = !1 | i),
									(this.m_errorResult = null),
									e)
								) {
									case p.LIBRARY_TYPE_JAVA_APPLET:
									case p.LIBRARY_TYPE_SIGN_AGENT:
									case p.LIBRARY_TYPE_WEB_EXTENSION:
									case p.LIBRARY_TYPE_NPAPI:
									case p.LIBRARY_TYPE_ACTIVE_X:
										this.m_libraryType = e
										break
									default:
										this.m_libraryType = p.LIBRARY_TYPE_DEFAULT
								}
								this.m_libraryType == p.LIBRARY_TYPE_DEFAULT
									? (this.m_webExtensionFirst &&
											p.isWebExtensionSupported() &&
											this.m_supportedLibraryTypes.push(
												p.LIBRARY_TYPE_WEB_EXTENSION
											),
									  p.isSignAgentSupported() &&
											this.m_supportedLibraryTypes.push(
												p.LIBRARY_TYPE_SIGN_AGENT
											),
									  !this.m_webExtensionFirst &&
											p.isWebExtensionSupported() &&
											this.m_supportedLibraryTypes.push(
												p.LIBRARY_TYPE_WEB_EXTENSION
											),
									  p.isNPAPISupported() &&
											this.m_supportedLibraryTypes.push(p.LIBRARY_TYPE_NPAPI),
									  p.isActiveXSupported() &&
											this.m_supportedLibraryTypes.push(
												p.LIBRARY_TYPE_ACTIVE_X
											),
									  !this.m_noJavaApplet &&
											p.isJavaAppletSupported() &&
											this.m_supportedLibraryTypes.push(
												p.LIBRARY_TYPE_JAVA_APPLET
											))
									: this.m_supportedLibraryTypes.push(this.m_libraryType),
									(this.onload = function (e) {}),
									(this.onerror = function (e, t, n) {}),
									(this.getLibraryType = function () {
										return this.m_libraryType
									})
							}
							;(p.LIBRARY_TYPE_DEFAULT = 0),
								(p.LIBRARY_TYPE_JAVA_APPLET = 1),
								(p.LIBRARY_TYPE_SIGN_AGENT = 2),
								(p.LIBRARY_TYPE_WEB_EXTENSION = 3),
								(p.LIBRARY_TYPE_NPAPI = 4),
								(p.LIBRARY_TYPE_ACTIVE_X = 5),
								(p.EU_DEFAULT_LANG = 0),
								(p.EU_UA_LANG = 1),
								(p.EU_RU_LANG = 2),
								(p.EU_EN_LANG = 3),
								(p.isJavaAppletSupported = function () {
									var e = new a()
									if (this.m_noJavaApplet) return !1
									switch (e.GetName()) {
										case a.BROWSER_NAME_FIREFOX:
										case a.BROWSER_NAME_CHROME:
											return !(e.GetVersion() > 44)
										case a.BROWSER_NAME_OPERA:
											return !(e.GetVersion() > 30)
										case a.BROWSER_NAME_EDGE:
										case a.BROWSER_NAME_UNKNOWN:
											return !1
										default:
											return !0
									}
								}),
								(p.isSignAgentSupported = function () {
									var e = new a()
									switch (e.GetName()) {
										case a.BROWSER_NAME_IE:
											if (e.GetVersion() < 10) return !1
											break
										case a.BROWSER_NAME_SAFARI:
											if (e.GetVersion() < 7) return !1
											break
										case a.BROWSER_NAME_UNKNOWN:
											return !1
									}
									switch (e.GetOSName()) {
										case a.OS_NAME_WINDOWS:
										case a.OS_NAME_MAC:
											break
										case a.OS_NAME_IOS:
											return e.GetName() == a.BROWSER_NAME_EU_SIGN_AGENT
										case a.OS_NAME_ANDROID:
										case a.OS_NAME_LINUX:
											break
										case a.OS_NAME_UNKNOWN:
										default:
											return !1
									}
									return !0
								}),
								(p.isWebExtensionSupported = function () {
									var e = new a()
									switch (e.GetName()) {
										case a.BROWSER_NAME_CHROME:
											break
										case a.BROWSER_NAME_OPERA:
											if (e.GetVersion() < 35) return !1
											break
										case a.BROWSER_NAME_FIREFOX:
											if (e.GetVersion() < 50) return !1
											break
										case a.BROWSER_NAME_UNKNOWN:
										default:
											return !1
									}
									switch (e.GetOSName()) {
										case a.OS_NAME_ANDROID:
										case a.OS_NAME_UNKNOWN:
											return !1
									}
									return !0
								}),
								(p.isNPAPISupported = function () {
									var e = new a()
									switch (e.GetName()) {
										case a.BROWSER_NAME_FIREFOX:
											if (e.GetVersion() > 51) return !1
											break
										default:
											return !1
									}
									return !0
								}),
								(p.isActiveXSupported = function () {
									var e = new a()
									switch (e.GetName()) {
										case a.BROWSER_NAME_IE:
											if (
												e.GetVersion() < 9 ||
												e.GetArch() == a.BROWSER_ARCH_NAME_X64
											)
												return !1
											break
										default:
											return !1
									}
									return !0
								}),
								(p.isWebExtensionInstalled = function () {
									var e =
										new a().GetName() == a.BROWSER_NAME_FIREFOX
											? 'eusw@iit.com.ua'
											: 'chrome-extension://jffafkigfgmjafhpkoibhfefeaebmccg/'
									return 1 == document.getElementsByClassName(e).length
								}),
								(p.prototype.getLibraryType = function () {
									return this.m_libraryType
								}),
								(p.prototype.load = function () {
									var e = this
									setTimeout(function () {
										e._load(
											e.m_supportedLibraryTypes[e.m_supportedLibraryTypesIndex]
										)
									}, 1)
								}),
								(p.prototype.unload = function () {
									var e = document.getElementById(this.m_id)
									e && e.parentNode && e.parentNode.removeChild(e)
								}),
								(p.prototype._load = function (e) {
									switch (e) {
										case p.LIBRARY_TYPE_JAVA_APPLET:
											return void this._loadSignApplet()
										case p.LIBRARY_TYPE_SIGN_AGENT:
											return void this._loadSignAgent()
										case p.LIBRARY_TYPE_WEB_EXTENSION:
											return void this._loadWebExtension()
										case p.LIBRARY_TYPE_NPAPI:
											return void this._loadNPAPI()
										case p.LIBRARY_TYPE_ACTIVE_X:
											return void this._loadActiveX()
									}
								}),
								(p.prototype._onLoad = function () {
									this.m_libraryType =
										this.m_supportedLibraryTypes[
											this.m_supportedLibraryTypesIndex
										]
									try {
										this.onload(this.m_library)
									} catch (e) {
										console.log(e)
									}
								}),
								(p.prototype._onLoadError = function (e, t, n, r) {
									null == this.m_errorResult &&
										(this.m_errorResult = {
											msg: t,
											code: n,
											library: r,
										})
									var i = document.getElementById(this.m_id)
									if ((i && i.parentNode && i.parentNode.removeChild(i), e))
										if (
											(this.m_supportedLibraryTypesIndex++,
											this.m_supportedLibraryTypesIndex >=
												this.m_supportedLibraryTypes.length)
										)
											try {
												this.onerror(
													this.m_errorResult.msg,
													this.m_errorResult.code,
													this.m_errorResult.library
												)
											} catch (e) {
												console.log(e)
											}
										else this.load()
									else
										try {
											this.onerror(
												this.m_errorResult.msg,
												this.m_errorResult.code,
												this.m_errorResult.library
											)
										} catch (e) {
											console.log(e)
										}
								}),
								(p.prototype._loadSignApplet = function () {
									var e = document.createElement('applet')
									e.setAttribute('codebase', 'https://sign.eu.iit.com.ua'),
										e.setAttribute(
											'code',
											'com.iit.certificateAuthority.endUser.libraries.signJava.EndUser.class'
										),
										e.setAttribute('archive', 'EUSignJava.jar'),
										e.setAttribute('cache_archive', 'EUSignJava.jar'),
										e.setAttribute('cache_version', '1.3.102'),
										e.setAttribute('separate_jvm', !0),
										e.setAttribute('id', this.m_id),
										e.setAttribute('width', '100%'),
										e.setAttribute('height', '1'),
										document.body.appendChild(e),
										(this.m_library = document.getElementById(this.m_id)),
										this._waitForSignAppletLoad(this, 100, 1200)
								}),
								(p.prototype._waitForSignAppletLoad = function (e, t, n) {
									try {
										e.m_library.SetUIMode(!1)
									} catch (i) {
										if (0 != n)
											return void setTimeout(
												function () {
													e._waitForSignAppletLoad(e, t, n - 1)
												},
												t,
												n
											)
										var r = ''
										return (
											(r =
												ee.getErrorDescriptionEx(
													ee.ERROR_LIBRARY_COMUNICATION_FAILED,
													e.m_language
												) + '. '),
											(r += c.getString(
												c.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED,
												e.m_language
											)),
											(r += '<br><br>'),
											(r +=
												'<a style="text-indent:18px" href="https://www.java.com/ru/download/installed.jsp">' +
												c.getString(
													c.WEB_LIBRARY_CHECK_JRE_VERSION,
													e.m_language
												) +
												'</a>'),
											void e._onLoadError(
												!0,
												r,
												ee.ERROR_LIBRARY_COMUNICATION_FAILED,
												null
											)
										)
									}
									e._onLoad(e.m_library)
								}),
								(p.prototype._appendWebWrapperObject = function (e, t, n, r) {
									try {
										var i = new ne(e, t),
											o = document.createElement('object')
										for (var s in (o.setAttribute('id', this.m_id),
										n
											? r
												? (o.setAttribute('classid', e),
												  o.setAttribute('height', '1px'))
												: ((o.type = e), (o.classid = e), (o.height = '1px'))
											: ((o.classid = 'EUSignCP.class'),
											  (o.style = 'display:none'),
											  (o.style.visibility = 'hidden')),
										document.body.appendChild(o),
										i))
											o[s] = i[s]
										return (
											(this.m_library = document.getElementById(this.m_id)), !0
										)
									} catch (e) {
										return !1
									}
								}),
								(p.prototype._onLoadWebLibraryError = function (e) {
									var t,
										n = this.m_library,
										r = !0,
										i = ''
									switch (
										((t =
											p.isWebExtensionSupported() &&
											!p.isWebExtensionInstalled() &&
											this.m_webExtensionFirst),
										(i += ee.getErrorDescriptionEx(
											ee.ERROR_LIBRARY_COMUNICATION_FAILED,
											this.m_language
										)),
										(i += '. '),
										e.GetErrorCode())
									) {
										case ee.ERROR_LIBRARY_COMUNICATION_FAILED:
											i += c.getString(
												t
													? c.WEB_LIBRARY_WEB_EXTENSION_NOT_INSTALLED_OR_RUN
													: c.WEB_LIBRARY_NOT_INSTALLED_OR_RUN,
												this.m_language
											)
											break
										case ee.ERROR_LIBRARY_VERSION_NOT_SUPPORTED:
											;(i += c.getString(
												c.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED,
												this.m_language
											)),
												(r = !1),
												(this.m_errorResult = null)
											break
										default:
											i +=
												ee.getErrorDescriptionEx(
													e.GetErrorCode(),
													this.m_language
												) + '.'
									}
									;(i += '<br><br>'),
										null != n.GetInstallURL()
											? (e.GetErrorCode() ==
											  ee.ERROR_LIBRARY_VERSION_NOT_SUPPORTED
													? (i +=
															'<div><a style="text-indent:18px" href="' +
															n.GetUpdateURL() +
															'">' +
															c.getString(
																c.WEB_LIBRARY_UPDATE_PACKAGE,
																this.m_language
															) +
															'</a></div>')
													: (i += t
															? '<div><a style="text-indent:18px" href="' +
															  n.GetWebExtensionInstallURL() +
															  '">' +
															  c.getString(
																	c.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE,
																	this.m_language
															  ) +
															  '</a></div>'
															: '<div><a style="text-indent:18px" href="' +
															  n.GetInstallURL() +
															  '">' +
															  c.getString(
																	c.WEB_LIBRARY_INSTALL_PACKAGE,
																	this.m_language
															  ) +
															  '</a></div>'),
											  (i +=
													'<div><a style="text-indent:18px" href="' +
													n.GetHelpURL() +
													'">' +
													c.getString(
														c.WEB_LIBRARY_USER_MANUAL,
														this.m_language
													) +
													'</a></div>'))
											: (i +=
													'<div>' +
													c.getString(
														c.WEB_LIBRARY_OS_NOT_SUPPORTED,
														this.m_language
													) +
													'</div>'),
										this._onLoadError(r, i, e.GetErrorCode(), n)
								}),
								(p.prototype._loadWebLibrary = function () {
									var e = this
									e.m_library.Load(
										function () {
											e._onLoad()
										},
										function (t) {
											e._onLoadWebLibraryError(t)
										}
									)
								}),
								(p.prototype._loadSignAgent = function () {
									if (
										this._appendWebWrapperObject(
											'localhost',
											'http:' == window.location.protocol ? '8081' : '8083',
											!1,
											!1
										)
									)
										this._loadWebLibrary()
									else {
										var e = ee.getErrorDescriptionEx(
											ee.ERROR_LIBRARY_COMUNICATION_FAILED,
											this.m_language
										)
										this._onLoadError(
											!0,
											e,
											ee.ERROR_LIBRARY_COMUNICATION_FAILED,
											null
										)
									}
								}),
								(p.prototype._loadWebExtension = function () {
									if (
										this._appendWebWrapperObject(
											'chrome-extension://jffafkigfgmjafhpkoibhfefeaebmccg/',
											'',
											!1,
											!1
										)
									)
										this._loadWebLibrary()
									else {
										var e = ee.getErrorDescriptionEx(
											ee.ERROR_LIBRARY_COMUNICATION_FAILED,
											this.m_language
										)
										this._onLoadError(
											!0,
											e,
											ee.ERROR_LIBRARY_COMUNICATION_FAILED,
											null
										)
									}
								}),
								(p.prototype._loadPlugin = function (e, t, n, r) {
									if (this._appendWebWrapperObject(e, '', !0, r))
										this._waitForPluginLoad(this, t, n)
									else {
										var i = ee.getErrorDescriptionEx(
											ee.ERROR_LIBRARY_COMUNICATION_FAILED,
											this.m_language
										)
										this._onLoadError(
											!0,
											i,
											ee.ERROR_LIBRARY_COMUNICATION_FAILED,
											null
										)
									}
								}),
								(p.prototype._waitForPluginLoad = function (e, t, n) {
									e.m_library.Load(
										function () {
											e._onLoad()
										},
										function (r) {
											r.GetErrorCode() !=
												ee.ERROR_LIBRARY_COMUNICATION_FAILED || 0 == n
												? e._onLoadWebLibraryError(r)
												: setTimeout(
														function () {
															e._waitForPluginLoad(e, t, n - 1)
														},
														t,
														n
												  )
										}
									)
								}),
								(p.prototype._loadNPAPI = function () {
									this._loadPlugin('application/x-eusign-cp', 100, 50, !1)
								}),
								(p.prototype._loadActiveX = function () {
									this._loadPlugin(
										'clsid:B7E24C75-E343-4DA2-A8D3-C80970FB7D7B',
										100,
										50,
										!0
									)
								})
							var _ = function () {
								;(this.vendor = 'JSC IIT'),
									(this.parentClassName = 'Object'),
									(this.className = 'EndUserArrayList'),
									(this.classVersion = 1),
									(this.m_array = [])
							}
							;(_.prototype.add = function (e) {
								return this.m_array.push(e), !0
							}),
								(_.prototype.clear = function () {
									this.m_array = []
								}),
								(_.prototype.get = function (e) {
									return this.m_array[e]
								}),
								(_.prototype.size = function () {
									return this.m_array.length
								}),
								Object.create ||
									(Object.create = function (e, t) {
										if (
											('object' != typeof e && 'function' != typeof e) ||
											null === e ||
											void 0 !== t
										)
											throw new Error('Invalid arguments')
										function n() {}
										return (n.prototype = e), new n()
									}),
								Uint8Array.prototype.slice ||
									(Uint8Array.prototype.slice = Uint8Array.prototype.subarray)
							var f = null
							function E(e) {
								return (
									null != e &&
									'object' == typeof e &&
									('EndUserTransferableObject' == e.className ||
										'EndUserTransferableObject' == e.parentClassName)
								)
							}
							f =
								'undefined' == typeof Uint8Array
									? function (e) {
											var t
											if ('number' == typeof e) {
												t = new Array(e)
												for (var n = 0; n < e; ++n) t[n] = 0
											} else t = e.slice(0)
											return (
												(t.buffer = t),
												(t.subarray = function (e, n) {
													return t.slice(e, n)
												}),
												(t.set = function (e, n) {
													arguments.length < 2 && (n = 0)
													for (var r = 0, i = e.length; r < i; ++r, ++n)
														t[n] = 255 & e[r]
												}),
												(t.byteLength = t.length),
												'object' == typeof e &&
													e.buffer &&
													(t.buffer = e.buffer),
												t
											)
									  }
									: Uint8Array
							var h = function () {
								;(this.vendor = 'JSC IIT'),
									(this.parentClassName = 'Object'),
									(this.className = 'EndUserTransferableObject'),
									(this.classVersion = 1),
									(this.isFilled = !1),
									(this.fields = {})
							}
							;(h.makeTransferable = function (e) {
								var t, n
								;(n = h),
									((t = e).prototype = Object.create(n.prototype)),
									(t.prototype.constructor = t),
									(h[new e().className] = e)
							}),
								(h.prototype.base64Coder = new o()),
								(h.prototype.dateCoder = new i()),
								(h.prototype.setClassInfo = function (e, t) {
									;(this.parentClassName = 'EndUserTransferableObject'),
										(this.className = e),
										(this.classVersion = t)
								}),
								(h.prototype.initializeFields = function () {
									for (var e in this.fields)
										switch (this.fields[e]) {
											case 'boolean':
												this[e] = !1
												break
											case 'int':
											case 'long':
											case 'number':
												this[e] = 0
												break
											case 'string':
												this[e] = ''
												break
											case 'EndUserKeyMedia':
												this[e] = new d()
												break
											default:
												this[e] = null
										}
								}),
								(h.prototype.set = function (e) {
									if (this.className != e.className) throw 'invalid class'
									for (var t in this.fields) this[t] = e[t]
								}),
								(h.prototype.encode = function () {
									var e, t
									for (var n in ((t = new Object()),
									(e = new Object()),
									this.fields))
										null != this[n]
											? E(this[n])
												? (t[n] = this[n].encode())
												: 'byteArray' == this.fields[n]
												? (t[n] = this.base64Coder.encode(this[n]))
												: 'time' == this.fields[n]
												? (t[n] = this.dateCoder.encode(this[n]))
												: (t[n] = this[n])
											: (t[n] = null)
									return (
										(e.className = this.className),
										(e.classVersion = this.classVersion),
										(e.classFields = t),
										e
									)
								}),
								(h.prototype.decode = function (e) {
									try {
										if (null == e.classVersion || null == e.classFields)
											return !1
										var t = e.classFields
										for (var n in this.fields)
											if ('time' == this.fields[n])
												this[n] = this.dateCoder.decode(t[n])
											else if ('EndUserOwnerInfo' == this.fields[n])
												(this[n] = new O()), this[n].decode(t[n])
											else if ('EndUserTimeInfo' == this.fields[n])
												(this[n] = new b()), this[n].decode(t[n])
											else if ('EndUserKeyMedia' == this.fields[n])
												(this[n] = new d()), this[n].decode(t[n])
											else if ('EndUserCertificateInfoEx' == this.fields[n])
												(this[n] = new w()), this[n].decode(t[n])
											else if ('byteArray' == this.fields[n])
												null != t[n] &&
													(this[n] = this.base64Coder.decode(t[n]))
											else if ('array' == this.fields[n]) {
												this[n] = []
												for (var r = t[n], i = 0; i < r.length; i++) {
													var o = r[i].className,
														s = new h[o]()
													if (void 0 !== s) {
														if (!s.decode(r[i])) throw 'invalid class'
														'EndUserByteArray' == s.className &&
															(s = s.GetData()),
															this[n].push(s)
													} else this[n].push(r[i])
												}
											} else this[n] = t[n]
										return !0
									} catch (e) {
										return (this.isFilled = !1), !1
									}
								})
							var S = function (e) {
								this.setClassInfo('EndUserByteArray', 1),
									(this.fields = {
										data: 'byteArray',
									}),
									this.initializeFields(),
									(this.data = e)
							}
							h.makeTransferable(S),
								(S.prototype.GetData = function () {
									return this.data
								}),
								(S.prototype.SetData = function (e) {
									this.data = e
								})
							var d = function () {
								this.setClassInfo('EndUserKeyMedia', 1),
									(this.fields = {
										typeIndex: 'long',
										devIndex: 'long',
										password: 'string',
									}),
									this.initializeFields()
							}
							h.makeTransferable(d),
								(d.prototype.GetTypeIndex = function () {
									return this.typeIndex
								}),
								(d.prototype.SetTypeIndex = function (e) {
									this.typeIndex = e
								}),
								(d.prototype.GetDevIndex = function () {
									return this.devIndex
								}),
								(d.prototype.SetDevIndex = function (e) {
									this.devIndex = e
								}),
								(d.prototype.GetPassword = function () {
									return this.password
								}),
								(d.prototype.SetPassword = function (e) {
									this.password = e
								})
							var y = function () {
								this.setClassInfo('EndUserFileStoreSettings', 1),
									(this.fields = {
										path: 'string',
										checkCRLs: 'boolean',
										autoRefresh: 'boolean',
										ownCRLsOnly: 'boolean',
										fullAndDeltaCRLs: 'boolean',
										autoDownloadCRLs: 'boolean',
										saveLoadedCerts: 'boolean',
										expireTime: 'long',
									}),
									this.initializeFields(),
									(this.expireTime = 3600)
							}
							h.makeTransferable(y),
								(y.prototype.GetPath = function () {
									return this.path
								}),
								(y.prototype.SetPath = function (e) {
									this.path = e
								}),
								(y.prototype.GetCheckCRLs = function () {
									return this.checkCRLs
								}),
								(y.prototype.SetCheckCRLs = function (e) {
									this.checkCRLs = e
								}),
								(y.prototype.GetAutoRefresh = function () {
									return this.autoRefresh
								}),
								(y.prototype.SetAutoRefresh = function (e) {
									this.autoRefresh = e
								}),
								(y.prototype.GetOwnCRLsOnly = function () {
									return this.ownCRLsOnly
								}),
								(y.prototype.SetOwnCRLsOnly = function (e) {
									this.ownCRLsOnly = e
								}),
								(y.prototype.GetFullAndDeltaCRLs = function () {
									return this.fullAndDeltaCRLs
								}),
								(y.prototype.SetFullAndDeltaCRLs = function (e) {
									this.fullAndDeltaCRLs = e
								}),
								(y.prototype.GetAutoDownloadCRLs = function () {
									return this.autoDownloadCRLs
								}),
								(y.prototype.SetAutoDownloadCRLs = function (e) {
									this.autoDownloadCRLs = e
								}),
								(y.prototype.GetSaveLoadedCerts = function () {
									return this.saveLoadedCerts
								}),
								(y.prototype.SetSaveLoadedCerts = function (e) {
									this.saveLoadedCerts = e
								}),
								(y.prototype.GetExpireTime = function () {
									return this.expireTime
								}),
								(y.prototype.SetExpireTime = function (e) {
									this.expireTime = e
								})
							var C = function () {
								this.setClassInfo('EndUserProxySettings', 1),
									(this.fields = {
										useProxy: 'boolean',
										anonymous: 'boolean',
										address: 'string',
										port: 'string',
										user: 'string',
										password: 'string',
										savePassword: 'boolean',
									}),
									this.initializeFields(),
									(this.port = '80')
							}
							h.makeTransferable(C),
								(C.prototype.GetUseProxy = function () {
									return this.useProxy
								}),
								(C.prototype.SetUseProxy = function (e) {
									this.useProxy = e
								}),
								(C.prototype.GetAnonymous = function () {
									return this.anonymous
								}),
								(C.prototype.SetAnonymous = function (e) {
									this.anonymous = e
								}),
								(C.prototype.GetAddress = function () {
									return this.address
								}),
								(C.prototype.SetAddress = function (e) {
									this.address = e
								}),
								(C.prototype.GetPort = function () {
									return this.port
								}),
								(C.prototype.SetPort = function (e) {
									this.port = e
								}),
								(C.prototype.GetUser = function () {
									return this.user
								}),
								(C.prototype.SetUser = function (e) {
									this.user = e
								}),
								(C.prototype.GetPassword = function () {
									return this.password
								}),
								(C.prototype.SetPassword = function (e) {
									this.password = e
								}),
								(C.prototype.GetSavePassword = function () {
									return this.savePassword
								}),
								(C.prototype.SetSavePassword = function (e) {
									this.savePassword = e
								})
							var T = function () {
								this.setClassInfo('EndUserTSPSettings', 1),
									(this.fields = {
										getStamps: 'boolean',
										address: 'string',
										port: 'string',
									}),
									this.initializeFields(),
									(this.port = '80')
							}
							h.makeTransferable(T),
								(T.prototype.GetGetStamps = function () {
									return this.getStamps
								}),
								(T.prototype.SetGetStamps = function (e) {
									this.getStamps = e
								}),
								(T.prototype.GetAddress = function () {
									return this.address
								}),
								(T.prototype.SetAddress = function (e) {
									this.address = e
								}),
								(T.prototype.GetPort = function () {
									return this.port
								}),
								(T.prototype.SetPort = function (e) {
									this.port = e
								})
							var A = function () {
								this.setClassInfo('EndUserOCSPSettings', 1),
									(this.fields = {
										useOCSP: 'boolean',
										beforeStore: 'boolean',
										address: 'string',
										port: 'string',
									}),
									this.initializeFields(),
									(this.port = '80')
							}
							h.makeTransferable(A),
								(A.prototype.GetUseOCSP = function () {
									return this.useOCSP
								}),
								(A.prototype.SetUseOCSP = function (e) {
									this.useOCSP = e
								}),
								(A.prototype.GetBeforeStore = function () {
									return this.beforeStore
								}),
								(A.prototype.SetBeforeStore = function (e) {
									this.beforeStore = e
								}),
								(A.prototype.GetAddress = function () {
									return this.address
								}),
								(A.prototype.SetAddress = function (e) {
									this.address = e
								}),
								(A.prototype.GetPort = function () {
									return this.port
								}),
								(A.prototype.SetPort = function (e) {
									this.port = e
								})
							var R = function () {
								this.setClassInfo('EndUserLDAPSettings', 1),
									(this.fields = {
										useLDAP: 'boolean',
										address: 'string',
										port: 'string',
										anonymous: 'boolean',
										user: 'string',
										password: 'string',
									}),
									this.initializeFields(),
									(this.port = '389')
							}
							h.makeTransferable(R),
								(R.prototype.GetUseLDAP = function () {
									return this.useLDAP
								}),
								(R.prototype.SetUseLDAP = function (e) {
									this.useLDAP = e
								}),
								(R.prototype.GetAddress = function () {
									return this.address
								}),
								(R.prototype.SetAddress = function (e) {
									this.address = e
								}),
								(R.prototype.GetPort = function () {
									return this.port
								}),
								(R.prototype.SetPort = function (e) {
									this.port = e
								}),
								(R.prototype.GetAnonymous = function () {
									return this.anonymous
								}),
								(R.prototype.SetAnonymous = function (e) {
									this.anonymous = e
								}),
								(R.prototype.GetUser = function () {
									return this.user
								}),
								(R.prototype.SetUser = function (e) {
									this.user = e
								}),
								(R.prototype.GetPassword = function () {
									return this.password
								}),
								(R.prototype.SetPassword = function (e) {
									this.password = e
								})
							var m = function () {
								this.setClassInfo('EndUserCMPSettings', 1),
									(this.fields = {
										useCMP: 'boolean',
										address: 'string',
										port: 'string',
										commonName: 'string',
									}),
									this.initializeFields(),
									(this.port = '80')
							}
							h.makeTransferable(m),
								(m.prototype.GetUseCMP = function () {
									return this.useCMP
								}),
								(m.prototype.SetUseCMP = function (e) {
									this.useCMP = e
								}),
								(m.prototype.GetAddress = function () {
									return this.address
								}),
								(m.prototype.SetAddress = function (e) {
									this.address = e
								}),
								(m.prototype.GetPort = function () {
									return this.port
								}),
								(m.prototype.SetPort = function (e) {
									this.port = e
								}),
								(m.prototype.GetCommonName = function () {
									return this.commonName
								}),
								(m.prototype.SetCommonName = function (e) {
									this.commonName = e
								})
							var g = function () {
								this.setClassInfo('EndUserModeSettings', 1),
									(this.fields = {
										offlineMode: 'boolean',
									}),
									this.initializeFields()
							}
							h.makeTransferable(g),
								(g.prototype.GetOfflineMode = function () {
									return this.offlineMode
								}),
								(g.prototype.SetOfflineMode = function (e) {
									this.offlineMode = e
								})
							var P = function () {
								this.setClassInfo('EndUserOCSPAccessInfoModeSettings', 1),
									(this.fields = {
										enabled: 'boolean',
									}),
									this.initializeFields()
							}
							h.makeTransferable(P),
								(P.prototype.GetEnabled = function () {
									return this.enabled
								}),
								(P.prototype.SetEnabled = function (e) {
									this.enabled = e
								})
							var v = function () {
								this.setClassInfo('EndUserOCSPAccessInfoSettings', 1),
									(this.fields = {
										issuerCN: 'string',
										address: 'string',
										port: 'string',
									}),
									this.initializeFields()
							}
							h.makeTransferable(v),
								(v.prototype.GetIssuerCN = function () {
									return this.issuerCN
								}),
								(v.prototype.SetIssuerCN = function (e) {
									this.issuerCN = e
								}),
								(v.prototype.GetAddress = function () {
									return this.address
								}),
								(v.prototype.SetAddress = function (e) {
									this.address = e
								}),
								(v.prototype.GetPort = function () {
									return this.port
								}),
								(v.prototype.SetPort = function (e) {
									this.port = e
								})
							var I = function () {
								this.setClassInfo('EndUserKeyMediaSettings', 1),
									(this.fields = {
										sourceType: 'long',
										showErrors: 'boolean',
										keyMedia: 'EndUserKeyMedia',
									}),
									this.initializeFields(),
									(this.sourceType = 1),
									(this.showErrors = !0)
							}
							h.makeTransferable(I),
								(I.prototype.GetSourceType = function () {
									return this.sourceType
								}),
								(I.prototype.SetSourceType = function (e) {
									this.sourceType = e
								}),
								(I.prototype.GetShowErrors = function () {
									return this.showErrors
								}),
								(I.prototype.SetShowErrors = function (e) {
									this.showErrors = e
								}),
								(I.prototype.GetKeyMedia = function () {
									return this.keyMedia
								}),
								(I.prototype.SetKeyMedia = function (e) {
									this.keyMedia = e
								})
							var U = function () {
								this.setClassInfo('EndUserTSLSettings', 1),
									(this.fields = {
										useTSL: 'boolean',
										autoDownloadTSL: 'boolean',
										tslAddress: 'string',
									}),
									this.initializeFields()
							}
							h.makeTransferable(U),
								(U.prototype.GetUseTSL = function () {
									return this.useTSL
								}),
								(U.prototype.SetUseTSL = function (e) {
									this.useTSL = e
								}),
								(U.prototype.GetAutoDownloadTSL = function () {
									return this.autoDownloadTSL
								}),
								(U.prototype.SetAutoDownloadTSL = function (e) {
									this.autoDownloadTSL = e
								}),
								(U.prototype.GetTSLAddress = function () {
									return this.tslAddress
								}),
								(U.prototype.SetTSLAddress = function (e) {
									this.tslAddress = e
								})
							var O = function () {
								this.setClassInfo('EndUserOwnerInfo', 1),
									(this.fields = {
										isFilled: 'boolean',
										issuer: 'string',
										issuerCN: 'string',
										serial: 'string',
										subject: 'string',
										subjCN: 'string',
										subjOrg: 'string',
										subjOrgUnit: 'string',
										subjTitle: 'string',
										subjState: 'string',
										subjLocality: 'string',
										subjFullName: 'string',
										subjAddress: 'string',
										subjPhone: 'string',
										subjEMail: 'string',
										subjDNS: 'string',
										subjEDRPOUCode: 'string',
										subjDRFOCode: 'string',
									}),
									this.initializeFields()
							}
							h.makeTransferable(O),
								(O.prototype.IsFilled = function () {
									return this.isFilled
								}),
								(O.prototype.GetIssuer = function () {
									return this.issuer
								}),
								(O.prototype.GetIssuerCN = function () {
									return this.issuerCN
								}),
								(O.prototype.GetSerial = function () {
									return this.serial
								}),
								(O.prototype.GetSubject = function () {
									return this.subject
								}),
								(O.prototype.GetSubjCN = function () {
									return this.subjCN
								}),
								(O.prototype.GetSubjOrg = function () {
									return this.subjOrg
								}),
								(O.prototype.GetSubjOrgUnit = function () {
									return this.subjOrgUnit
								}),
								(O.prototype.GetSubjTitle = function () {
									return this.subjTitle
								}),
								(O.prototype.GetSubjState = function () {
									return this.subjState
								}),
								(O.prototype.GetSubjLocality = function () {
									return this.subjLocality
								}),
								(O.prototype.GetSubjFullName = function () {
									return this.subjFullName
								}),
								(O.prototype.GetSubjAddress = function () {
									return this.subjAddress
								}),
								(O.prototype.GetSubjPhone = function () {
									return this.subjPhone
								}),
								(O.prototype.GetSubjEMail = function () {
									return this.subjEMail
								}),
								(O.prototype.GetSubjDNS = function () {
									return this.subjDNS
								}),
								(O.prototype.GetSubjEDRPOUCode = function () {
									return this.subjEDRPOUCode
								}),
								(O.prototype.GetSubjDRFOCode = function () {
									return this.subjDRFOCode
								})
							var b = function () {
								this.setClassInfo('EndUserTimeInfo', 2),
									(this.fields = {
										version: 'number',
										isTimeAvail: 'boolean',
										isTimeStamp: 'boolean',
										time: 'time',
										isSignTimeStampAvail: 'boolean',
										signTimeStamp: 'time',
									}),
									this.initializeFields()
							}
							h.makeTransferable(b),
								(b.prototype.GetVersion = function () {
									return this.version
								}),
								(b.prototype.IsTimeAvail = function () {
									return this.isTimeAvail
								}),
								(b.prototype.IsTimeStamp = function () {
									return this.isTimeStamp
								}),
								(b.prototype.GetTime = function () {
									return this.time
								}),
								(b.prototype.IsSignTimeStampAvail = function () {
									return this.isSignTimeStampAvail
								}),
								(b.prototype.GetSignTimeStamp = function () {
									return this.signTimeStamp
								})
							var D = function () {
								this.setClassInfo('EndUserSignInfo', 1),
									(this.fields = {
										ownerInfo: 'EndUserOwnerInfo',
										timeInfo: 'EndUserTimeInfo',
										data: 'byteArray',
									}),
									this.initializeFields()
							}
							h.makeTransferable(D),
								(D.prototype.GetOwnerInfo = function () {
									return this.ownerInfo
								}),
								(D.prototype.GetTimeInfo = function () {
									return this.timeInfo
								}),
								(D.prototype.GetData = function () {
									return this.data
								}),
								(D.prototype.GetDataString = function (e) {
									return r.ArrayToString(e, this.data)
								})
							var k = function () {
								this.setClassInfo('EndUserSenderInfo', 1),
									(this.fields = {
										ownerInfo: 'EndUserOwnerInfo',
										timeInfo: 'EndUserTimeInfo',
										data: 'byteArray',
									}),
									this.initializeFields()
							}
							h.makeTransferable(k),
								(k.prototype.GetOwnerInfo = function () {
									return this.ownerInfo
								}),
								(k.prototype.GetTimeInfo = function () {
									return this.timeInfo
								}),
								(k.prototype.GetData = function () {
									return this.data
								}),
								(k.prototype.GetDataString = function (e) {
									return r.ArrayToString(e, this.data)
								})
							var N = function () {
								this.setClassInfo('EndUserCertificateInfo', 1),
									(this.fields = {
										isFilled: 'boolean',
										version: 'long',
										issuer: 'string',
										issuerCN: 'string',
										serial: 'string',
										subject: 'string',
										subjCN: 'string',
										subjOrg: 'string',
										subjOrgUnit: 'string',
										subjTitle: 'string',
										subjState: 'string',
										subjLocality: 'string',
										subjFullName: 'string',
										subjAddress: 'string',
										subjPhone: 'string',
										subjEMail: 'string',
										subjDNS: 'string',
										subjEDRPOUCode: 'string',
										subjDRFOCode: 'string',
										subjNBUCode: 'string',
										subjSPFMCode: 'string',
										subjOCode: 'string',
										subjOUCode: 'string',
										subjUserCode: 'string',
										certBeginTime: 'time',
										certEndTime: 'time',
										isPrivKeyTimesAvail: 'boolean',
										privKeyBeginTime: 'time',
										privKeyEndTime: 'time',
										publicKeyBits: 'long',
										publicKey: 'string',
										publicKeyID: 'string',
										isECDHPublicKeyAvail: 'boolean',
										ECDHPublicKeyBits: 'long',
										ECDHPublicKey: 'string',
										ECDHPublicKeyID: 'string',
										issuerPublicKeyID: 'string',
										keyUsage: 'string',
										extKeyUsages: 'string',
										policies: 'string',
										crlDistribPoint1: 'string',
										crlDistribPoint2: 'string',
										isPowerCert: 'boolean',
										isSubjTypeAvail: 'boolean',
										isSubjCA: 'boolean',
									}),
									this.initializeFields()
							}
							h.makeTransferable(N),
								(N.prototype.IsFilled = function () {
									return this.isFilled
								}),
								(N.prototype.GetVersion = function () {
									return this.version
								}),
								(N.prototype.GetIssuer = function () {
									return this.issuer
								}),
								(N.prototype.GetIssuerCN = function () {
									return this.issuerCN
								}),
								(N.prototype.GetSerial = function () {
									return this.serial
								}),
								(N.prototype.GetSubject = function () {
									return this.subject
								}),
								(N.prototype.GetSubjCN = function () {
									return this.subjCN
								}),
								(N.prototype.GetSubjOrg = function () {
									return this.subjOrg
								}),
								(N.prototype.GetSubjOrgUnit = function () {
									return this.subjOrgUnit
								}),
								(N.prototype.GetSubjTitle = function () {
									return this.subjTitle
								}),
								(N.prototype.GetSubjState = function () {
									return this.subjState
								}),
								(N.prototype.GetSubjLocality = function () {
									return this.subjLocality
								}),
								(N.prototype.GetSubjFullName = function () {
									return this.subjFullName
								}),
								(N.prototype.GetSubjAddress = function () {
									return this.subjAddress
								}),
								(N.prototype.GetSubjPhone = function () {
									return this.subjPhone
								}),
								(N.prototype.GetSubjEMail = function () {
									return this.subjEMail
								}),
								(N.prototype.GetSubjDNS = function () {
									return this.subjDNS
								}),
								(N.prototype.GetSubjEDRPOUCode = function () {
									return this.subjEDRPOUCode
								}),
								(N.prototype.GetSubjDRFOCode = function () {
									return this.subjDRFOCode
								}),
								(N.prototype.GetSubjNBUCode = function () {
									return this.subjNBUCode
								}),
								(N.prototype.GetSubjSPFMCode = function () {
									return this.subjSPFMCode
								}),
								(N.prototype.GetSubjOCode = function () {
									return this.subjOCode
								}),
								(N.prototype.GetSubjOUCode = function () {
									return this.subjOUCode
								}),
								(N.prototype.GetSubjUserCode = function () {
									return this.subjUserCode
								}),
								(N.prototype.GetCertBeginTime = function () {
									return this.certBeginTime
								}),
								(N.prototype.GetCertEndTime = function () {
									return this.certEndTime
								}),
								(N.prototype.IsPrivKeyTimesAvail = function () {
									return this.isPrivKeyTimesAvail
								}),
								(N.prototype.GetPrivKeyBeginTime = function () {
									return this.privKeyBeginTime
								}),
								(N.prototype.GetPrivKeyEndTime = function () {
									return this.privKeyEndTime
								}),
								(N.prototype.GetPublicKeyBits = function () {
									return this.publicKeyBits
								}),
								(N.prototype.GetPublicKey = function () {
									return this.publicKey
								}),
								(N.prototype.GetPublicKeyID = function () {
									return this.publicKeyID
								}),
								(N.prototype.IsECDHPublicKeyAvail = function () {
									return this.isECDHPublicKeyAvail
								}),
								(N.prototype.GetECDHPublicKeyBits = function () {
									return this.ECDHPublicKeyBits
								}),
								(N.prototype.GetECDHPublicKey = function () {
									return this.ECDHPublicKey
								}),
								(N.prototype.GetECDHPublicKeyID = function () {
									return this.ECDHPublicKeyID
								}),
								(N.prototype.GetIssuerPublicKeyID = function () {
									return this.issuerPublicKeyID
								}),
								(N.prototype.GetKeyUsage = function () {
									return this.keyUsage
								}),
								(N.prototype.GetExtKeyUsages = function () {
									return this.extKeyUsages
								}),
								(N.prototype.GetPolicies = function () {
									return this.policies
								}),
								(N.prototype.GetCRLDistribPoint1 = function () {
									return this.crlDistribPoint1
								}),
								(N.prototype.GetCRLDistribPoint2 = function () {
									return this.crlDistribPoint2
								}),
								(N.prototype.IsPowerCert = function () {
									return this.isPowerCert
								}),
								(N.prototype.IsSubjTypeAvail = function () {
									return this.isSubjTypeAvail
								}),
								(N.prototype.IsSubjCA = function () {
									return this.isSubjCA
								})
							var w = function () {
								this.setClassInfo('EndUserCertificateInfoEx', 8),
									(this.fields = {
										isFilled: 'boolean',
										version: 'long',
										issuer: 'string',
										issuerCN: 'string',
										serial: 'string',
										subject: 'string',
										subjCN: 'string',
										subjOrg: 'string',
										subjOrgUnit: 'string',
										subjTitle: 'string',
										subjState: 'string',
										subjLocality: 'string',
										subjFullName: 'string',
										subjAddress: 'string',
										subjPhone: 'string',
										subjEMail: 'string',
										subjDNS: 'string',
										subjEDRPOUCode: 'string',
										subjDRFOCode: 'string',
										subjNBUCode: 'string',
										subjSPFMCode: 'string',
										subjOCode: 'string',
										subjOUCode: 'string',
										subjUserCode: 'string',
										certBeginTime: 'time',
										certEndTime: 'time',
										isPrivKeyTimesAvail: 'boolean',
										privKeyBeginTime: 'time',
										privKeyEndTime: 'time',
										publicKeyBits: 'long',
										publicKey: 'string',
										publicKeyID: 'string',
										issuerPublicKeyID: 'string',
										keyUsage: 'string',
										extKeyUsages: 'string',
										policies: 'string',
										crlDistribPoint1: 'string',
										crlDistribPoint2: 'string',
										isPowerCert: 'boolean',
										isSubjTypeAvail: 'boolean',
										isSubjCA: 'boolean',
										chainLength: 'int',
										UPN: 'string',
										publicKeyType: 'long',
										keyUsageType: 'long',
										RSAModul: 'string',
										RSAExponent: 'string',
										OCSPAccessInfo: 'string',
										issuerAccessInfo: 'string',
										TSPAccessInfo: 'string',
										isLimitValueAvailable: 'boolean',
										limitValue: 'long',
										limitValueCurrency: 'string',
										subjType: 'long',
										subjSubType: 'long',
										subjUNZR: 'string',
										subjCountry: 'string',
										fingerprint: 'string',
										isQSCD: 'boolean',
										subjUserID: 'string',
										certHashType: 'number',
									}),
									this.initializeFields()
								var e = this
								this.IsLimitValueAvailable = function () {
									return e.isLimitValueAvailable
								}
							}
							h.makeTransferable(w),
								(w.prototype.IsFilled = function () {
									return this.isFilled
								}),
								(w.prototype.GetVersion = function () {
									return this.version
								}),
								(w.prototype.GetIssuer = function () {
									return this.issuer
								}),
								(w.prototype.GetIssuerCN = function () {
									return this.issuerCN
								}),
								(w.prototype.GetSerial = function () {
									return this.serial
								}),
								(w.prototype.GetSubject = function () {
									return this.subject
								}),
								(w.prototype.GetSubjCN = function () {
									return this.subjCN
								}),
								(w.prototype.GetSubjOrg = function () {
									return this.subjOrg
								}),
								(w.prototype.GetSubjOrgUnit = function () {
									return this.subjOrgUnit
								}),
								(w.prototype.GetSubjTitle = function () {
									return this.subjTitle
								}),
								(w.prototype.GetSubjState = function () {
									return this.subjState
								}),
								(w.prototype.GetSubjLocality = function () {
									return this.subjLocality
								}),
								(w.prototype.GetSubjFullName = function () {
									return this.subjFullName
								}),
								(w.prototype.GetSubjAddress = function () {
									return this.subjAddress
								}),
								(w.prototype.GetSubjPhone = function () {
									return this.subjPhone
								}),
								(w.prototype.GetSubjEMail = function () {
									return this.subjEMail
								}),
								(w.prototype.GetSubjDNS = function () {
									return this.subjDNS
								}),
								(w.prototype.GetSubjEDRPOUCode = function () {
									return this.subjEDRPOUCode
								}),
								(w.prototype.GetSubjDRFOCode = function () {
									return this.subjDRFOCode
								}),
								(w.prototype.GetSubjNBUCode = function () {
									return this.subjNBUCode
								}),
								(w.prototype.GetSubjSPFMCode = function () {
									return this.subjSPFMCode
								}),
								(w.prototype.GetSubjOCode = function () {
									return this.subjOCode
								}),
								(w.prototype.GetSubjOUCode = function () {
									return this.subjOUCode
								}),
								(w.prototype.GetSubjUserCode = function () {
									return this.subjUserCode
								}),
								(w.prototype.GetCertBeginTime = function () {
									return this.certBeginTime
								}),
								(w.prototype.GetCertEndTime = function () {
									return this.certEndTime
								}),
								(w.prototype.IsPrivKeyTimesAvail = function () {
									return this.isPrivKeyTimesAvail
								}),
								(w.prototype.GetPrivKeyBeginTime = function () {
									return this.privKeyBeginTime
								}),
								(w.prototype.GetPrivKeyEndTime = function () {
									return this.privKeyEndTime
								}),
								(w.prototype.GetPublicKeyBits = function () {
									return this.publicKeyBits
								}),
								(w.prototype.GetPublicKey = function () {
									return this.publicKey
								}),
								(w.prototype.GetPublicKeyID = function () {
									return this.publicKeyID
								}),
								(w.prototype.GetIssuerPublicKeyID = function () {
									return this.issuerPublicKeyID
								}),
								(w.prototype.GetKeyUsage = function () {
									return this.keyUsage
								}),
								(w.prototype.GetExtKeyUsages = function () {
									return this.extKeyUsages
								}),
								(w.prototype.GetPolicies = function () {
									return this.policies
								}),
								(w.prototype.GetCRLDistribPoint1 = function () {
									return this.crlDistribPoint1
								}),
								(w.prototype.GetCRLDistribPoint2 = function () {
									return this.crlDistribPoint2
								}),
								(w.prototype.IsPowerCert = function () {
									return this.isPowerCert
								}),
								(w.prototype.IsSubjTypeAvail = function () {
									return this.isSubjTypeAvail
								}),
								(w.prototype.IsSubjCA = function () {
									return this.isSubjCA
								}),
								(w.prototype.GetChainLength = function () {
									return this.chainLength
								}),
								(w.prototype.GetUPN = function () {
									return this.UPN
								}),
								(w.prototype.GetPublicKeyType = function () {
									return this.publicKeyType
								}),
								(w.prototype.GetKeyUsageType = function () {
									return this.keyUsageType
								}),
								(w.prototype.GetRSAModul = function () {
									return this.RSAModul
								}),
								(w.prototype.GetRSAExponent = function () {
									return this.RSAExponent
								}),
								(w.prototype.GetOCSPAccessInfo = function () {
									return this.OCSPAccessInfo
								}),
								(w.prototype.GetIssuerAccessInfo = function () {
									return this.issuerAccessInfo
								}),
								(w.prototype.GetTSPAccessInfo = function () {
									return this.TSPAccessInfo
								}),
								(w.prototype.IsLimitValueAvail = function () {
									return this.isLimitValueAvailable
								}),
								(w.prototype.GetLimitValue = function () {
									return this.limitValue
								}),
								(w.prototype.GetLimitValueCurrency = function () {
									return this.limitValueCurrency
								}),
								(w.prototype.GetSubjType = function () {
									return this.subjType
								}),
								(w.prototype.GetSubjSubType = function () {
									return this.subjSubType
								}),
								(w.prototype.GetSubjUNZR = function () {
									return this.subjUNZR
								}),
								(w.prototype.GetSubjCountry = function () {
									return this.subjCountry
								}),
								(w.prototype.GetFingerprint = function () {
									return this.fingerprint
								}),
								(w.prototype.IsQSCD = function () {
									return this.isQSCD
								}),
								(w.prototype.GetSubjUserID = function () {
									return this.subjUserID
								}),
								(w.prototype.GetCertHashType = function () {
									return this.certHashType
								})
							var M = function () {
								this.setClassInfo('EndUserCertificate', 1),
									(this.fields = {
										infoEx: 'EndUserCertificateInfoEx',
										data: 'byteArray',
									}),
									this.initializeFields()
							}
							h.makeTransferable(M),
								(M.prototype.GetInfoEx = function () {
									return this.infoEx
								}),
								(M.prototype.SetInfoEx = function (e) {
									this.infoEx = e
								}),
								(M.prototype.GetData = function () {
									return this.data
								}),
								(M.prototype.SetData = function (e) {
									this.data = e
								})
							var G = function () {
								this.setClassInfo('EndUserCRLInfo', 1, !0, !1),
									(this.fields = {
										isFilled: 'boolean',
										issuer: 'string',
										issuerCN: 'string',
										crlNumber: 'long',
										thisUpdate: 'time',
										nextUpdate: 'time',
									}),
									this.initializeFields()
							}
							h.makeTransferable(G),
								(G.prototype.IsFilled = function () {
									return this.isFilled
								}),
								(G.prototype.GetIssuer = function () {
									return this.issuer
								}),
								(G.prototype.GetIssuerCN = function () {
									return this.issuerCN
								}),
								(G.prototype.GetCRLNumber = function () {
									return this.crlNumber
								}),
								(G.prototype.GetThisUpdate = function () {
									return this.thisUpdate
								}),
								(G.prototype.GetNextUpdate = function () {
									return this.nextUpdate
								})
							var K = function () {
								this.setClassInfo('EndUserCRLDetailedInfo', 1),
									(this.fields = {
										isFilled: 'boolean',
										version: 'long',
										issuer: 'string',
										issuerCN: 'string',
										issuerPublicKeyID: 'string',
										crlNumber: 'long',
										thisUpdate: 'time',
										nextUpdate: 'time',
										revokedItemsCount: 'long',
									}),
									this.initializeFields()
							}
							h.makeTransferable(K),
								(K.prototype.IsFilled = function () {
									return this.isFilled
								}),
								(K.prototype.GetVersion = function () {
									return this.version
								}),
								(K.prototype.GetIssuer = function () {
									return this.issuer
								}),
								(K.prototype.GetIssuerCN = function () {
									return this.issuerCN
								}),
								(K.prototype.GetIssuerPublicKeyID = function () {
									return this.issuerPublicKeyID
								}),
								(K.prototype.GetCRLNumber = function () {
									return this.crlNumber
								}),
								(K.prototype.GetThisUpdate = function () {
									return this.thisUpdate
								}),
								(K.prototype.GetNextUpdate = function () {
									return this.nextUpdate
								}),
								(K.prototype.GetRevokedItemsCount = function () {
									return this.revokedItemsCount
								})
							var L = function () {
								this.setClassInfo('EndUserPrivateKeyInfo', 1),
									(this.fields = {
										privateKey: 'byteArray',
										privateKeyInfo: 'byteArray',
									}),
									this.initializeFields()
							}
							h.makeTransferable(L),
								(L.prototype.GetPrivateKey = function () {
									return this.privateKey
								}),
								(L.prototype.SetPrivateKey = function (e) {
									this.privateKey = e
								}),
								(L.prototype.GetPrivateKeyInfo = function () {
									return this.privateKeyInfo
								}),
								(L.prototype.SetPrivateKeyInfo = function (e) {
									this.privateKeyInfo = e
								})
							var B = function () {
								this.setClassInfo('EndUserJKSPrivateKey', 1),
									(this.fields = {
										privateKey: 'byteArray',
										certificates: 'array',
									}),
									this.initializeFields()
							}
							h.makeTransferable(B),
								(B.prototype.GetPrivateKey = function () {
									return this.privateKey
								}),
								(B.prototype.GetCertificate = function (e) {
									return e < 0 || e >= this.certificates.length
										? null
										: this.certificates[e]
								}),
								(B.prototype.GetCertificatesCount = function () {
									return this.certificates.length
								}),
								(B.prototype.GetCertificates = function () {
									return this.certificates
								})
							var F = function () {
								this.setClassInfo('EndUserRequestInfo', 4),
									(this.fields = {
										request: 'byteArray',
										requestType: 'number',
										defaultRequestFileName: 'string',
										isSimple: 'boolean',
										subject: 'string',
										subjCN: 'string',
										subjOrg: 'string',
										subjOrgUnit: 'string',
										subjTitle: 'string',
										subjState: 'string',
										subjLocality: 'string',
										subjFullName: 'string',
										subjAddress: 'string',
										subjPhone: 'string',
										subjEMail: 'string',
										subjDNS: 'string',
										subjEDRPOUCode: 'string',
										subjDRFOCode: 'string',
										subjNBUCode: 'string',
										subjSPFMCode: 'string',
										subjOCode: 'string',
										subjOUCode: ' string',
										subjUserCode: 'string',
										certBeginTime: 'time',
										certEndTime: 'time',
										isPrivKeyTimesAvail: 'boolean',
										privKeyBeginTime: 'time',
										privKeyEndTime: 'time',
										publicKeyType: 'number',
										publicKeyBits: 'number',
										RSAModul: 'string',
										RSAExponent: 'string',
										publicKey: 'string',
										publicKeyID: 'string',
										extKeyUsages: 'string',
										crlDistribPoint1: 'string',
										crlDistribPoint2: 'string',
										isSubjTypeAvail: 'boolean',
										subjType: 'number',
										subjSubType: 'number',
										isSelfSigned: 'boolean',
										signIssuer: 'string',
										signSerial: 'string',
										subjUNZR: 'string',
										subjCountry: 'string',
										isQSCD: 'boolean',
									}),
									this.initializeFields()
							}
							h.makeTransferable(F),
								(F.prototype.GetRequest = function () {
									return this.request
								}),
								(F.prototype.GetRequestType = function () {
									return this.requestType
								}),
								(F.prototype.GetDefaultRequestFileName = function () {
									return this.defaultRequestFileName
								}),
								(F.prototype.IsSimple = function () {
									return this.isSimple
								}),
								(F.prototype.GetSubject = function () {
									return this.subject
								}),
								(F.prototype.GetSubjCN = function () {
									return this.subjCN
								}),
								(F.prototype.GetSubjOrg = function () {
									return this.subjOrg
								}),
								(F.prototype.GetSubjOrgUnit = function () {
									return this.subjOrgUnit
								}),
								(F.prototype.GetSubjTitle = function () {
									return this.subjTitle
								}),
								(F.prototype.GetSubjState = function () {
									return this.subjState
								}),
								(F.prototype.GetSubjLocality = function () {
									return this.subjLocality
								}),
								(F.prototype.GetSubjFullName = function () {
									return this.subjFullName
								}),
								(F.prototype.GetSubjAddress = function () {
									return this.subjAddress
								}),
								(F.prototype.GetSubjPhone = function () {
									return this.subjPhone
								}),
								(F.prototype.GetSubjEMail = function () {
									return this.subjEMail
								}),
								(F.prototype.GetSubjDNS = function () {
									return this.subjDNS
								}),
								(F.prototype.GetSubjEDRPOUCode = function () {
									return this.subjEDRPOUCode
								}),
								(F.prototype.GetSubjDRFOCode = function () {
									return this.subjDRFOCode
								}),
								(F.prototype.GetSubjNBUCode = function () {
									return this.subjNBUCode
								}),
								(F.prototype.GetSubjSPFMCode = function () {
									return this.subjSPFMCode
								}),
								(F.prototype.GetSubjOCode = function () {
									return this.subjOCode
								}),
								(F.prototype.GetSubjOUCode = function () {
									return this.subjOUCode
								}),
								(F.prototype.GetSubjUserCode = function () {
									return this.subjUserCode
								}),
								(F.prototype.GetCertBeginTime = function () {
									return this.certBeginTime
								}),
								(F.prototype.GetCertEndTime = function () {
									return this.certEndTime
								}),
								(F.prototype.IsPrivKeyTimesAvail = function () {
									return this.isPrivKeyTimesAvail
								}),
								(F.prototype.GetPrivKeyBeginTime = function () {
									return this.privKeyBeginTime
								}),
								(F.prototype.GetPrivKeyEndTime = function () {
									return this.privKeyEndTime
								}),
								(F.prototype.GetPublicKeyType = function () {
									return this.publicKeyType
								}),
								(F.prototype.GetPublicKeyBits = function () {
									return this.publicKeyBits
								}),
								(F.prototype.GetRSAModul = function () {
									return this.RSAModul
								}),
								(F.prototype.GetRSAExponent = function () {
									return this.RSAExponent
								}),
								(F.prototype.GetPublicKey = function () {
									return this.publicKey
								}),
								(F.prototype.GetPublicKeyID = function () {
									return this.publicKeyID
								}),
								(F.prototype.GetExtKeyUsages = function () {
									return this.extKeyUsages
								}),
								(F.prototype.GetCRLDistribPoint1 = function () {
									return this.crlDistribPoint1
								}),
								(F.prototype.GetCRLDistribPoint2 = function () {
									return this.crlDistribPoint2
								}),
								(F.prototype.IsSubjTypeAvail = function () {
									return this.isSubjTypeAvail
								}),
								(F.prototype.GetSubjType = function () {
									return this.subjType
								}),
								(F.prototype.GetSubjSubType = function () {
									return this.subjSubType
								}),
								(F.prototype.IsSelfSigned = function () {
									return this.isSelfSigned
								}),
								(F.prototype.GetSignIssuer = function () {
									return this.signIssuer
								}),
								(F.prototype.GetSignSerial = function () {
									return this.signSerial
								}),
								(F.prototype.GetSubjUNZR = function () {
									return this.subjUNZR
								}),
								(F.prototype.GetSubjCountry = function () {
									return this.subjCountry
								}),
								(F.prototype.IsQSCD = function () {
									return this.isQSCD
								})
							var x = function () {
								this.setClassInfo('EndUserInfo', 3),
									(this.fields = {
										commonName: 'string',
										locality: 'string',
										state: 'string',
										organization: 'string',
										orgUnit: 'string',
										title: 'string',
										street: 'string',
										phone: 'string',
										surname: 'string',
										givenname: 'string',
										EMail: 'string',
										DNS: 'string',
										EDRPOUCode: 'string',
										DRFOCode: 'string',
										NBUCode: 'string',
										SPFMCode: 'string',
										OCode: 'string',
										OUCode: 'string',
										userCode: 'string',
										UPN: 'string',
										UNZR: 'string',
										country: 'string',
									}),
									this.initializeFields()
							}
							h.makeTransferable(x),
								(x.prototype.GetCommonName = function () {
									return this.commonName
								}),
								(x.prototype.SetCommonName = function (e) {
									this.commonName = e
								}),
								(x.prototype.GetLocality = function () {
									return this.locality
								}),
								(x.prototype.SetLocality = function (e) {
									this.locality = e
								}),
								(x.prototype.GetState = function () {
									return this.state
								}),
								(x.prototype.SetState = function (e) {
									this.state = e
								}),
								(x.prototype.GetOrganization = function () {
									return this.organization
								}),
								(x.prototype.SetOrganization = function (e) {
									this.organization = e
								}),
								(x.prototype.GetOrgUnit = function () {
									return this.orgUnit
								}),
								(x.prototype.SetOrgUnit = function (e) {
									this.orgUnit = e
								}),
								(x.prototype.GetTitle = function () {
									return this.title
								}),
								(x.prototype.SetTitle = function (e) {
									this.title = e
								}),
								(x.prototype.GetStreet = function () {
									return this.street
								}),
								(x.prototype.SetStreet = function (e) {
									this.street = e
								}),
								(x.prototype.GetPhone = function () {
									return this.phone
								}),
								(x.prototype.SetPhone = function (e) {
									this.phone = e
								}),
								(x.prototype.GetSurname = function () {
									return this.surname
								}),
								(x.prototype.SetSurname = function (e) {
									this.surname = e
								}),
								(x.prototype.GetGivenname = function () {
									return this.givenname
								}),
								(x.prototype.SetGivenname = function (e) {
									this.givenname = e
								}),
								(x.prototype.GetEMail = function () {
									return this.EMail
								}),
								(x.prototype.SetEMail = function (e) {
									this.EMail = e
								}),
								(x.prototype.GetDNS = function () {
									return this.DNS
								}),
								(x.prototype.SetDNS = function (e) {
									this.DNS = e
								}),
								(x.prototype.GetEDRPOUCode = function () {
									return this.EDRPOUCode
								}),
								(x.prototype.SetEDRPOUCode = function (e) {
									this.EDRPOUCode = e
								}),
								(x.prototype.GetDRFOCode = function () {
									return this.DRFOCode
								}),
								(x.prototype.SetDRFOCode = function (e) {
									this.DRFOCode = e
								}),
								(x.prototype.GetNBUCode = function () {
									return this.NBUCode
								}),
								(x.prototype.SetNBUCode = function (e) {
									this.NBUCode = e
								}),
								(x.prototype.GetSPFMCode = function () {
									return this.SPFMCode
								}),
								(x.prototype.SetSPFMCode = function (e) {
									this.SPFMCode = e
								}),
								(x.prototype.GetOCode = function () {
									return this.OCode
								}),
								(x.prototype.SetOCode = function (e) {
									this.OCode = e
								}),
								(x.prototype.GetOUCode = function () {
									return this.OUCode
								}),
								(x.prototype.SetOUCode = function (e) {
									this.OUCode = e
								}),
								(x.prototype.GetUserCode = function () {
									return this.userCode
								}),
								(x.prototype.SetUserCode = function (e) {
									this.userCode = e
								}),
								(x.prototype.GetUPN = function () {
									return this.UPN
								}),
								(x.prototype.SetUPN = function (e) {
									this.UPN = e
								}),
								(x.prototype.GetUNZR = function () {
									return this.UNZR
								}),
								(x.prototype.SetUNZR = function (e) {
									this.UNZR = e
								}),
								(x.prototype.GetCountry = function () {
									return this.country
								}),
								(x.prototype.SetCountry = function (e) {
									this.country = e
								})
							var Y = function () {
								this.setClassInfo('EndUserParams', 1),
									(this.fields = {
										SN: 'number',
										commonName: 'string',
										locality: 'string',
										state: 'string',
										organization: 'string',
										orgUnit: 'string',
										title: 'string',
										street: 'string',
										phone: 'string',
										surname: 'string',
										givenname: 'string',
										EMail: 'string',
										DNS: 'string',
										EDRPOUCode: 'string',
										DRFOCode: 'string',
										NBUCode: 'string',
										SPFMCode: 'string',
										information: 'string',
										passPhrase: 'string',
										isPublishCertificate: 'boolean',
										RAAdminSN: 'number',
									}),
									this.initializeFields()
							}
							h.makeTransferable(Y),
								(Y.prototype.GetSN = function () {
									return this.SN
								}),
								(Y.prototype.SetSN = function (e) {
									this.SN = e
								}),
								(Y.prototype.GetCommonName = function () {
									return this.commonName
								}),
								(Y.prototype.SetCommonName = function (e) {
									this.commonName = e
								}),
								(Y.prototype.GetLocality = function () {
									return this.locality
								}),
								(Y.prototype.SetLocality = function (e) {
									this.locality = e
								}),
								(Y.prototype.GetState = function () {
									return this.state
								}),
								(Y.prototype.SetState = function (e) {
									this.state = e
								}),
								(Y.prototype.GetOrganization = function () {
									return this.organization
								}),
								(Y.prototype.SetOrganization = function (e) {
									this.organization = e
								}),
								(Y.prototype.GetOrgUnit = function () {
									return this.orgUnit
								}),
								(Y.prototype.SetOrgUnit = function (e) {
									this.orgUnit = e
								}),
								(Y.prototype.GetTitle = function () {
									return this.title
								}),
								(Y.prototype.SetTitle = function (e) {
									this.title = e
								}),
								(Y.prototype.GetStreet = function () {
									return this.street
								}),
								(Y.prototype.SetStreet = function (e) {
									this.street = e
								}),
								(Y.prototype.GetPhone = function () {
									return this.phone
								}),
								(Y.prototype.SetPhone = function (e) {
									this.phone = e
								}),
								(Y.prototype.GetSurname = function () {
									return this.surname
								}),
								(Y.prototype.SetSurname = function (e) {
									this.surname = e
								}),
								(Y.prototype.GetGivenname = function () {
									return this.givenname
								}),
								(Y.prototype.SetGivenname = function (e) {
									this.givenname = e
								}),
								(Y.prototype.GetEMail = function () {
									return this.EMail
								}),
								(Y.prototype.SetEMail = function (e) {
									this.EMail = e
								}),
								(Y.prototype.GetDNS = function () {
									return this.DNS
								}),
								(Y.prototype.SetDNS = function (e) {
									this.DNS = e
								}),
								(Y.prototype.GetEDRPOUCode = function () {
									return this.EDRPOUCode
								}),
								(Y.prototype.SetEDRPOUCode = function (e) {
									this.EDRPOUCode = e
								}),
								(Y.prototype.GetDRFOCode = function () {
									return this.DRFOCode
								}),
								(Y.prototype.SetDRFOCode = function (e) {
									this.DRFOCode = e
								}),
								(Y.prototype.GetNBUCode = function () {
									return this.NBUCode
								}),
								(Y.prototype.SetNBUCode = function (e) {
									this.NBUCode = e
								}),
								(Y.prototype.GetSPFMCode = function () {
									return this.SPFMCode
								}),
								(Y.prototype.SetSPFMCode = function (e) {
									this.SPFMCode = e
								}),
								(Y.prototype.GetInformation = function () {
									return this.information
								}),
								(Y.prototype.SetInformation = function (e) {
									this.information = e
								}),
								(Y.prototype.GetPassPhrase = function () {
									return this.passPhrase
								}),
								(Y.prototype.SetPassPhrase = function (e) {
									this.passPhrase = e
								}),
								(Y.prototype.GetIsPublishCertificate = function () {
									return this.isPublishCertificate
								}),
								(Y.prototype.SetIsPublishCertificate = function (e) {
									this.isPublishCertificate = e
								}),
								(Y.prototype.GetRAAdminSN = function () {
									return this.RAAdminSN
								}),
								(Y.prototype.SetRAAdminSN = function (e) {
									this.RAAdminSN = e
								})
							var H = function () {
								this.setClassInfo('EndUserOperationContext', 1),
									(this.fields = {
										handle: 'string',
									}),
									this.initializeFields(),
									(this.handle = null)
							}
							h.makeTransferable(H),
								(H.prototype.GetHandle = function () {
									return this.handle
								})
							var V = function () {
								this.setClassInfo('EndUserSession', 1),
									(this.fields = {
										handle: 'string',
										data: 'byteArray',
									}),
									this.initializeFields()
							}
							h.makeTransferable(V),
								(V.prototype.GetHandle = function () {
									return this.handle
								}),
								(V.prototype.GetData = function () {
									return this.data
								}),
								(V.prototype.SetData = function (e) {
									this.data = e
								})
							var W = function () {
								this.setClassInfo('EndUserSCClientStatistic', 1),
									(this.fields = {
										activeSessions: 'number',
										gatedSessions: 'number',
										unprotectedData: 'number',
										protectedData: 'number',
									}),
									this.initializeFields()
							}
							h.makeTransferable(W),
								(W.prototype.GetActiveSessions = function () {
									return this.activeSessions
								}),
								(W.prototype.GetGatedSessions = function () {
									return this.gatedSessions
								}),
								(W.prototype.GetUnprotectedData = function () {
									return this.unprotectedData
								}),
								(W.prototype.GetProtectedData = function () {
									return this.protectedData
								})
							var $ = function () {
								this.setClassInfo('EndUserDeviceContext', 1),
									(this.fields = {
										handle: 'string',
									}),
									this.initializeFields(),
									(this.handle = null)
							}
							h.makeTransferable($),
								($.prototype.GetHandle = function () {
									return this.handle
								})
							var j = function () {
								this.setClassInfo('EndUserTransportHeader', 1),
									(this.fields = {
										receiptNumber: 'number',
										cryptoData: 'byteArray',
									}),
									this.initializeFields()
							}
							h.makeTransferable(j),
								(j.prototype.GetReceiptNumber = function () {
									return this.receiptNumber
								}),
								(j.prototype.GetCryptoData = function () {
									return this.cryptoData
								})
							var X = function () {
								this.setClassInfo('EndUserCryptoHeader', 1),
									(this.fields = {
										caType: 'string',
										headerType: 'number',
										headerSize: 'number',
										cryptoData: 'byteArray',
									}),
									this.initializeFields()
							}
							h.makeTransferable(X),
								(X.prototype.GetCAType = function () {
									return this.caType
								}),
								(X.prototype.GetHeaderType = function () {
									return this.headerType
								}),
								(X.prototype.GetHeaderSize = function () {
									return this.headerSize
								}),
								(X.prototype.GetCryptoData = function () {
									return this.cryptoData
								})
							var z = function () {
								this.setClassInfo('EndUserContext', 1),
									(this.fields = {
										handle: 'string',
									}),
									this.initializeFields()
							}
							h.makeTransferable(z),
								(z.prototype.GetHandle = function () {
									return this.handle
								})
							var J = function () {
								this.setClassInfo('EndUserHashContext', 1),
									(this.fields = {
										handle: 'string',
									}),
									this.initializeFields()
							}
							h.makeTransferable(J),
								(J.prototype.GetHandle = function () {
									return this.handle
								})
							var q = function () {
								this.setClassInfo('EndUserPrivateKeyContext', 1),
									(this.fields = {
										handle: 'string',
										ownerInfo: 'EndUserOwnerInfo',
									}),
									this.initializeFields()
							}
							h.makeTransferable(q),
								(q.prototype.GetHandle = function () {
									return this.handle
								}),
								(q.prototype.GetOwnerInfo = function () {
									return this.ownerInfo
								})
							var Z = function (e, t) {
								this.setClassInfo('EndUserReference', 1),
									(this.fields = {
										name: 'string',
										data: 'byteArray',
									}),
									this.initializeFields(),
									(this.name = e),
									(this.data = t)
							}
							h.makeTransferable(Z),
								(Z.prototype.GetName = function () {
									return this.name
								}),
								(Z.prototype.SetName = function (e) {
									this.name = e
								}),
								(Z.prototype.GetData = function () {
									return this.data
								}),
								(Z.prototype.SetData = function (e) {
									this.data = e
								})
							var Q = function (e, t, n, r, i) {
								this.setClassInfo('EndUserSSSignHashResult', 1),
									(this.fields = {
										error: 'number',
										hash: 'string',
										signature: 'string',
										statusCode: 'number',
										status: 'string',
									}),
									this.initializeFields(),
									(this.error = e),
									(this.hash = t),
									(this.signature = n),
									(this.statusCode = r),
									(this.status = i)
							}
							h.makeTransferable(Q),
								(Q.prototype.GetError = function () {
									return this.error
								}),
								(Q.prototype.GetHash = function () {
									return this.hash
								}),
								(Q.prototype.GetSignature = function () {
									return this.signature
								}),
								(Q.prototype.GetStatusCode = function () {
									return this.statusCode
								}),
								(Q.prototype.GetStatus = function () {
									return this.status
								})
							var ee = function (e, t) {
								;(this.errorCode = e),
									(this.message = t),
									(this.toString = function () {
										return this.message + ' (' + this.errorCode + ')'
									}),
									(this.GetErrorCode = function () {
										return this.errorCode
									}),
									(this.GetMessage = function () {
										return this.message
									})
							}
							function te(e, t) {
								;(this.errorCode = e),
									(this.message = t),
									(this.toString = function () {
										return this.message + ' (' + this.errorCode + ')'
									}),
									(this.GetErrorCode = function () {
										return this.errorCode
									}),
									(this.GetMessage = function () {
										return this.message
									})
							}
							;(ee.ERROR_NONE = 0),
								(ee.ERROR_UNKNOWN = 65535),
								(ee.ERROR_NOT_SUPPORTED = 65534),
								(ee.ERROR_NOT_INITIALIZED = 1),
								(ee.ERROR_BAD_PARAMETER = 2),
								(ee.ERROR_LIBRARY_LOAD = 3),
								(ee.ERROR_READ_SETTINGS = 4),
								(ee.ERROR_TRANSMIT_REQUEST = 5),
								(ee.ERROR_MEMORY_ALLOCATION = 6),
								(ee.WARNING_END_OF_ENUM = 7),
								(ee.ERROR_PROXY_NOT_AUTHORIZED = 8),
								(ee.ERROR_NO_GUI_DIALOGS = 9),
								(ee.ERROR_DOWNLOAD_FILE = 10),
								(ee.ERROR_WRITE_SETTINGS = 11),
								(ee.ERROR_CANCELED_BY_GUI = 12),
								(ee.ERROR_OFFLINE_MODE = 13),
								(ee.ERROR_KEY_MEDIAS_FAILED = 17),
								(ee.ERROR_KEY_MEDIAS_ACCESS_FAILED = 18),
								(ee.ERROR_KEY_MEDIAS_READ_FAILED = 19),
								(ee.ERROR_KEY_MEDIAS_WRITE_FAILED = 20),
								(ee.WARNING_KEY_MEDIAS_READ_ONLY = 21),
								(ee.ERROR_KEY_MEDIAS_DELETE = 22),
								(ee.ERROR_KEY_MEDIAS_CLEAR = 23),
								(ee.ERROR_BAD_PRIVATE_KEY = 24),
								(ee.ERROR_PKI_FORMATS_FAILED = 33),
								(ee.ERROR_CSP_FAILED = 34),
								(ee.ERROR_BAD_SIGNATURE = 35),
								(ee.ERROR_AUTH_FAILED = 36),
								(ee.ERROR_NOT_RECEIVER = 37),
								(ee.ERROR_STORAGE_FAILED = 49),
								(ee.ERROR_BAD_CERT = 50),
								(ee.ERROR_CERT_NOT_FOUND = 51),
								(ee.ERROR_INVALID_CERT_TIME = 52),
								(ee.ERROR_CERT_IN_CRL = 53),
								(ee.ERROR_BAD_CRL = 54),
								(ee.ERROR_NO_VALID_CRLS = 55),
								(ee.ERROR_GET_TIME_STAMP = 65),
								(ee.ERROR_BAD_TSP_RESPONSE = 66),
								(ee.ERROR_TSP_SERVER_CERT_NOT_FOUND = 67),
								(ee.ERROR_TSP_SERVER_CERT_INVALID = 68),
								(ee.ERROR_GET_OCSP_STATUS = 81),
								(ee.ERROR_BAD_OCSP_RESPONSE = 82),
								(ee.ERROR_CERT_BAD_BY_OCSP = 83),
								(ee.ERROR_OCSP_SERVER_CERT_NOT_FOUND = 84),
								(ee.ERROR_OCSP_SERVER_CERT_INVALID = 85),
								(ee.ERROR_LDAP_ERROR = 97),
								(ee.ERROR_LIBRARY_COMUNICATION_FAILED = 4097),
								(ee.ERROR_LIBRARY_VERSION_NOT_SUPPORTED = 4098),
								(ee.ERROR_BROWSER_NOT_SUPPORTED = 65537),
								(ee.ERROR_OPEN_FILE = 65552),
								(ee.ERROR_READ_FILE = 65553),
								(ee.ERROR_WRITE_FILE = 65554),
								(ee.ERROR_DESCRIPTIONS_EX = []),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_NONE] = [
									'Виконано успішно',
									'Выполнено успешно',
									'Executed successfully',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_NOT_SUPPORTED] = [
									'Операція не підтримується',
									'Операция не поддерживается',
									'Operation is not supported',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_UNKNOWN] = [
									'Невідома помилка',
									'Неизвестная ошибка',
									'Unknown error',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_LIBRARY_LOAD] = [
									'Виникла помилка при завантаженні криптографічної бібліотеки',
									'Возникла ошибка при загрузке криптографической библиотеки',
									'Error at load crypto library',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_NOT_INITIALIZED] = [
									'Бібліотека не ініціалізована',
									'Библиотека не инициализирована',
									'Library is not initialized',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_BAD_PARAMETER] = [
									'Невірний параметр',
									'Неверный параметр',
									'Incorrect parameter',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_BAD_CERT] = [
									'Сертифікат пошкоджений або не може бути використаний',
									'Сертификат поврежден или не может быть использован',
									'Certificate corrupted or cannot be used',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_CERT_NOT_FOUND] = [
									'Сертифікат не знайдено',
									'Сертификат не найден',
									'Certificate not found',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_TRANSMIT_REQUEST] = [
									'Виникла помилка при передачі запиту на сервер ЦСК за протоколом HTTP',
									'Возникла ошибка при передаче запроса на сервер ЦСК по протоколу HTTP',
									"Error at request transfer to CA's server by HTTP protocol",
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_DOWNLOAD_FILE] = [
									'Виникла помилка при завантаженні файлу з HTTP-сервера',
									'Возникла ошибка при загрузке файла с HTTP-сервера',
									'Error at the load of file from a HTTP-server',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_WRITE_SETTINGS] = [
									'Виникла помилка при записі параметрів',
									'Возникла ошибка при записи параметров',
									'Error at the writing settings',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_PKI_FORMATS_FAILED] = [
									'Виникла помилка при розборі чи формуванні даних (пошкоджені дані чи невірний формат)',
									'Возникла ошибка при разборе или формировании данных (поврежденные данные или неверный формат)',
									'Error at parsing or generating data (data corrupted or wrong format)',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[
									ee.ERROR_LIBRARY_COMUNICATION_FAILED
								] = [
									'Виникла помилка при взаємодії з криптографічною бібліотекою',
									'Возникла ошибка при взаимодействии с криптографической библиотекой',
									'Error at comunication with crypto library',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[
									ee.ERROR_LIBRARY_VERSION_NOT_SUPPORTED
								] = [
									'Встановлена версія бібліотеки не підтримується',
									'Установленная версия библиотеки не поддерживается',
									'The installed version of the library is not supported',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_BROWSER_NOT_SUPPORTED] = [
									'Ваш браузер не підтримується',
									'Ваш браузер не поддерживается',
									'Your browser is not supported',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_OPEN_FILE] = [
									'Виникла помилка при відкритті файлу',
									'Возникла ошибка при открытии файла',
									'Error at open file',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_READ_FILE] = [
									'Виникла помилка при зчитуванні файлу',
									'Возникла ошибка при чтении файла',
									'Error at read file',
								]),
								(ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_WRITE_FILE] = [
									'Виникла помилка при записі файлу',
									'Возникла ошибка при записи файла',
									'Error at write file',
								]),
								(ee.isError = function (e) {
									return e != ee.ERROR_NONE
								}),
								(ee.isSuccess = function (e) {
									return e == ee.ERROR_NONE
								}),
								(ee.getErrorDescriptionEx = function (e, t) {
									var n, r
									return (
										void 0 === (n = ee.ERROR_DESCRIPTIONS_EX[e]) &&
											(n = ee.ERROR_DESCRIPTIONS_EX[ee.ERROR_UNKNOWN]),
										void 0 === (r = n[t - 1]) ? n[0] : r
									)
								})
							var ne = function (t, n) {
								;(this.vendor = 'JSC IIT'),
									(this.classVersion = '1.3.95'),
									(this.className = 'EUSignCP'),
									(this.SUBJECT_TYPE_UNDIFFERENCED = 0),
									(this.SUBJECT_TYPE_CA = 1),
									(this.SUBJECT_TYPE_CA_SERVER = 2),
									(this.SUBJECT_TYPE_RA_ADMINISTRATOR = 3),
									(this.SUBJECT_TYPE_END_USER = 4),
									(this.EU_SUBJECT_TYPE_UNDIFFERENCED =
										this.SUBJECT_TYPE_UNDIFFERENCED),
									(this.EU_SUBJECT_TYPE_CA = this.SUBJECT_TYPE_CA),
									(this.EU_SUBJECT_TYPE_CA_SERVER =
										this.SUBJECT_TYPE_CA_SERVER),
									(this.EU_SUBJECT_TYPE_RA_ADMINISTRATOR =
										this.SUBJECT_TYPE_RA_ADMINISTRATOR),
									(this.EU_SUBJECT_TYPE_END_USER = this.SUBJECT_TYPE_END_USER),
									(this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 0),
									(this.SUBJECT_CA_SERVER_SUB_TYPE_CMP = 1),
									(this.SUBJECT_CA_SERVER_SUB_TYPE_TSP = 2),
									(this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 3),
									(this.EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED =
										this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED),
									(this.EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP =
										this.SUBJECT_CA_SERVER_SUB_TYPE_CMP),
									(this.EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP =
										this.SUBJECT_CA_SERVER_SUB_TYPE_TSP),
									(this.EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP =
										this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP),
									(this.CERT_KEY_TYPE_UNKNOWN = 0),
									(this.CERT_KEY_TYPE_DSTU4145 = 1),
									(this.CERT_KEY_TYPE_RSA = 2),
									(this.CERT_KEY_TYPE_ECDSA = 4),
									(this.EU_CERT_KEY_TYPE_UNKNOWN = this.CERT_KEY_TYPE_UNKNOWN),
									(this.EU_CERT_KEY_TYPE_DSTU4145 =
										this.CERT_KEY_TYPE_DSTU4145),
									(this.EU_CERT_KEY_TYPE_RSA = this.CERT_KEY_TYPE_RSA),
									(this.EU_CERT_KEY_TYPE_ECDSA = this.CERT_KEY_TYPE_ECDSA),
									(this.EU_CERT_HASH_TYPE_UNKNOWN = 0),
									(this.EU_CERT_HASH_TYPE_GOST34311 = 1),
									(this.EU_CERT_HASH_TYPE_SHA1 = 2),
									(this.EU_CERT_HASH_TYPE_SHA224 = 3),
									(this.EU_CERT_HASH_TYPE_SHA256 = 4),
									(this.EU_CERT_HASH_TYPE_SHA384 = 5),
									(this.EU_CERT_HASH_TYPE_SHA512 = 6),
									(this.EU_CERT_HASH_TYPE_DSTU7564_256 = 7),
									(this.EU_CERT_HASH_TYPE_DSTU7564_384 = 8),
									(this.EU_CERT_HASH_TYPE_DSTU7564_512 = 9),
									(this.KEY_USAGE_UNKNOWN = 0),
									(this.KEY_USAGE_DIGITAL_SIGNATUR = 1),
									(this.KEY_KEY_USAGE_KEY_AGREEMENT = 16),
									(this.EU_KEY_USAGE_UNKNOWN = this.KEY_USAGE_UNKNOWN),
									(this.EU_KEY_USAGE_DIGITAL_SIGNATURE =
										this.KEY_USAGE_DIGITAL_SIGNATUR),
									(this.EU_KEY_USAGE_NON_REPUDATION = 2),
									(this.EU_KEY_USAGE_KEY_AGREEMENT =
										this.KEY_KEY_USAGE_KEY_AGREEMENT),
									(this.EU_KEYS_REQUEST_TYPE_UA_DS = 1),
									(this.EU_KEYS_REQUEST_TYPE_UA_KEP = 2),
									(this.EU_KEYS_REQUEST_TYPE_INTERNATIONAL = 3),
									(this.EU_KEYS_TYPE_NONE = 0),
									(this.EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOSTS = 1),
									(this.EU_KEYS_TYPE_RSA_WITH_SHA = 2),
									(this.EU_KEYS_TYPE_ECDSA_WITH_SHA = 4),
									(this.EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_DSTU = 8),
									(this.EU_KEYS_LENGTH_DS_UA_191 = 1),
									(this.EU_KEYS_LENGTH_DS_UA_257 = 2),
									(this.EU_KEYS_LENGTH_DS_UA_307 = 3),
									(this.EU_KEYS_LENGTH_DS_UA_FILE = 4),
									(this.EU_KEYS_LENGTH_DS_UA_CERT = 5),
									(this.EU_KEYS_LENGTH_KEP_UA_257 = 1),
									(this.EU_KEYS_LENGTH_KEP_UA_431 = 2),
									(this.EU_KEYS_LENGTH_KEP_UA_571 = 3),
									(this.EU_KEYS_LENGTH_KEP_UA_FILE = 4),
									(this.EU_KEYS_LENGTH_KEP_UA_CERT = 5),
									(this.EU_KEYS_LENGTH_DS_RSA_1024 = 1),
									(this.EU_KEYS_LENGTH_DS_RSA_2048 = 2),
									(this.EU_KEYS_LENGTH_DS_RSA_3072 = 3),
									(this.EU_KEYS_LENGTH_DS_RSA_4096 = 4),
									(this.EU_KEYS_LENGTH_DS_RSA_FILE = 5),
									(this.EU_KEYS_LENGTH_DS_RSA_CERT = 6),
									(this.EU_KEYS_LENGTH_DS_ECDSA_192 = 1),
									(this.EU_KEYS_LENGTH_DS_ECDSA_256 = 2),
									(this.EU_KEYS_LENGTH_DS_ECDSA_384 = 3),
									(this.EU_KEYS_LENGTH_DS_ECDSA_521 = 4),
									(this.EU_KEYS_LENGTH_DS_ECDSA_FILE = 5),
									(this.EU_KEYS_LENGTH_DS_ECDSA_CERT = 6),
									(this.EU_RECIPIENT_APPEND_ISSUER_AND_SERIAL = 1),
									(this.EU_RECIPIENT_APPEND_KEY_ID = 2),
									(this.EU_RECIPIENT_APPEND_KEY_ID_USC_COMPAT = 3),
									(this.EU_SAVE_SETTINGS_PARAMETER = 'SaveSettings'),
									(this.EU_RESOLVE_OIDS_PARAMETER = 'ResolveOIDs'),
									(this.EU_MAKE_PKEY_PFX_CONTAINER_PARAMETER =
										'MakePKeyPFXContainer'),
									(this.EU_SIGN_INCLUDE_CONTENT_TIME_STAMP_PARAMETER =
										'SignIncludeContentTimeStamp'),
									(this.EU_SIGN_TYPE_PARAMETER = 'SignType'),
									(this.EU_SIGN_INCLUDE_CA_CERTIFICATES_PARAMETER =
										'SignIncludeCACertificates'),
									(this.EU_FS_CALCULATE_FINGERPRINT = 'FSCalculateFingerprint'),
									(this.EU_FORCE_USE_TSP_FROM_SETTINGS_PARAMETER =
										'ForceUseTSPFromSettings'),
									(this.EU_STRING_ENCODING_PARAMETER = 'StringEncoding'),
									(this.EU_CHECK_CERT_CHAIN_ON_SIGN_TIME_PARAMETER =
										'CheckCertChainOnSignTime'),
									(this.EU_CONNECTIONS_TIMEOUT_PARAMETER =
										'ConnectionsTimeout'),
									(this.EU_LOG_EVENTS_THRESHOLD_PARAMETER =
										'LogEventsThreshold'),
									(this.EU_USE_SLOGIN_PRIVATE_KEY = 'UseSLoginPrivateKey'),
									(this.EU_SETTINGS_ID_NONE = 0),
									(this.EU_SETTINGS_ID_MANDATORY = 31),
									(this.EU_SETTINGS_ID_ALL = 1023),
									(this.EU_SETTINGS_ID_FSTORE = 1),
									(this.EU_SETTINGS_ID_PROXY = 2),
									(this.EU_SETTINGS_ID_TSP = 4),
									(this.EU_SETTINGS_ID_OCSP = 8),
									(this.EU_SETTINGS_ID_LDAP = 16),
									(this.EU_SETTINGS_ID_MODE = 32),
									(this.EU_SETTINGS_ID_CMP = 64),
									(this.EU_SETTINGS_ID_KM = 128),
									(this.EU_SETTINGS_ID_OCSP_ACCESS_INFO_MODE = 256),
									(this.EU_SETTINGS_ID_OCSP_ACCESS_INFO = 512),
									(this.EU_SETTINGS_ID_TSL = 1024),
									(this.EU_SETTINGS_ID_LOG = 2048),
									(this.EU_HEADER_CA_TYPE = 'UA1'),
									(this.EU_HEADER_PART_TYPE_SIGNED = 1),
									(this.EU_HEADER_PART_TYPE_ENCRYPTED = 2),
									(this.EU_HEADER_PART_TYPE_STAMPED = 3),
									(this.EU_HEADER_PART_TYPE_CERTCRYPT = 4),
									(this.EU_HEADER_MAX_CA_TYPE_SIZE = 3),
									(this.EU_SIGNED_CRYPTO_HEADER =
										this.EU_HEADER_PART_TYPE_SIGNED),
									(this.EU_ENCRYPTED_CRYPTO_HEADER =
										this.EU_HEADER_PART_TYPE_ENCRYPTED),
									(this.EU_TIMESTAMPED_CRYPTO_HEADER =
										this.EU_HEADER_PART_TYPE_STAMPED),
									(this.EU_CERTCRYPT_CRYPTO_HEADER =
										this.EU_HEADER_PART_TYPE_CERTCRYPT),
									(this.EU_DEFAULT_LANG = 0),
									(this.EU_UA_LANG = 1),
									(this.EU_RU_LANG = 2),
									(this.EU_EN_LANG = 3),
									(this.EU_CONTENT_ENC_ALGO_DEFAULT = 0),
									(this.EU_CONTENT_ENC_ALGO_GOST28147_CFB = 2),
									(this.EU_CONTENT_ENC_ALGO_TDES_CBC = 4),
									(this.EU_CONTENT_ENC_ALGO_AES_128_CBC = 5),
									(this.EU_CONTENT_ENC_ALGO_AES_192_CBC = 6),
									(this.EU_CONTENT_ENC_ALGO_AES_256_CBC = 7),
									(this.EU_CONTENT_ENC_ALGO_DSTU7624_256_OFB = 8),
									(this.EU_CONTENT_ENC_ALGO_DSTU7624_256_CFB = 9),
									(this.EU_DEV_CTX_MIN_PUBLIC_DATA_ID = 16),
									(this.EU_DEV_CTX_MAX_PRIVATE_DATA_ID = 175),
									(this.EU_UA_OID_EXT_KEY_USAGE_STAMP = '1.2.804.2.1.1.1.3.9'),
									(this.EU_CCS_TYPE_REVOKE = 1),
									(this.EU_CCS_TYPE_HOLD = 2),
									(this.EU_REVOCATION_REASON_UNKNOWN = 0),
									(this.EU_REVOCATION_REASON_KEY_COMPROMISE = 1),
									(this.EU_REVOCATION_REASON_NEW_ISSURED = 2),
									(this.EU_SIGN_TYPE_UNKNOWN = 0),
									(this.EU_SIGN_TYPE_CADES_BES = 1),
									(this.EU_SIGN_TYPE_CADES_T = 4),
									(this.EU_SIGN_TYPE_CADES_C = 8),
									(this.EU_SIGN_TYPE_CADES_X_LONG = 16),
									(this.EU_SIGN_TYPE_CADES_X_LONG_TRUSTED = 128),
									(this.EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER =
										'CheckPrivateKey'),
									(this.EU_RESOLVE_OIDS_CONTEXT_PARAMETER = 'ResolveOIDs'),
									(this.EU_EXPORATABLE_CONTEXT_CONTEXT_PARAMETER =
										'ExportableContext'),
									(this.EU_ENCODE_ECDSA_SIGN_VALUE_CONTEXT_PARAMETER =
										'EncodeECDSASignValue'),
									(this.EU_USE_SLOGIN_PRIVATE_KEY_CONTEXT_PARAMETER =
										'UseSLoginPrivateKey'),
									(this.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL = 1),
									(this.EU_RECIPIENT_APPEND_TYPE_BY_KEY_ID = 2),
									(this.EU_CTX_HASH_ALGO_UNKNOWN = 0),
									(this.EU_CTX_HASH_ALGO_GOST34311 = 1),
									(this.EU_CTX_HASH_ALGO_SHA160 = 2),
									(this.EU_CTX_HASH_ALGO_SHA224 = 3),
									(this.EU_CTX_HASH_ALGO_SHA256 = 4),
									(this.EU_CTX_HASH_ALGO_SHA384 = 5),
									(this.EU_CTX_HASH_ALGO_SHA512 = 6),
									(this.EU_CTX_HASH_ALGO_DSTU7564_256 = 7),
									(this.EU_CTX_HASH_ALGO_DSTU7564_384 = 8),
									(this.EU_CTX_HASH_ALGO_DSTU7564_512 = 9),
									(this.EU_CTX_SIGN_UNKNOWN = 0),
									(this.EU_CTX_SIGN_DSTU4145_WITH_GOST34311 = 1),
									(this.EU_CTX_SIGN_RSA_WITH_SHA = 2),
									(this.EU_CTX_SIGN_ECDSA_WITH_SHA = 3),
									(this.EU_CTX_SIGN_DSTU4145_WITH_DSTU7564 = 4),
									(this.EU_FILE_PROCESS_CHUNK_SIZE = 1048576),
									(this.EU_ASIC_TYPE_UNKNOWN = 0),
									(this.EU_ASIC_TYPE_S = 1),
									(this.EU_ASIC_TYPE_E = 2),
									(this.EU_ASIC_SIGN_TYPE_UNKNOWN = 0),
									(this.EU_ASIC_SIGN_TYPE_CADES = 1),
									(this.EU_ASIC_SIGN_TYPE_XADES = 2),
									(this.EU_ASIC_SIGN_LEVEL_BES = 1),
									(this.EU_ASIC_SIGN_LEVEL_T = 4),
									(this.EU_ASIC_SIGN_LEVEL_C = 8),
									(this.EU_ASIC_SIGN_LEVEL_X_LONG = 16),
									(this.EU_ASIC_SIGN_LEVEL_X_LONG_TRUSTED = 128),
									(this.EU_XADES_SIGN_TYPE_UNKNOWN = 0),
									(this.EU_XADES_TYPE_DETACHED = 1),
									(this.EU_XADES_TYPE_ENVELOPING = 2),
									(this.EU_XADES_TYPE_ENVELOPED = 3),
									(this.EU_XADES_SIGN_LEVEL_BES = 1),
									(this.EU_XADES_SIGN_LEVEL_T = 4),
									(this.EU_XADES_SIGN_LEVEL_B_LT = 16),
									(this.EU_XADES_SIGN_LEVEL_B_LTA = 32),
									(this.EU_PADES_SIGN_LEVEL_B_B = 1),
									(this.EU_PADES_SIGN_LEVEL_B_T = 4),
									(this.EU_PADES_SIGN_LEVEL_B_LT = 16),
									(this.EU_PADES_SIGN_LEVEL_B_LTA = 32),
									(this.EU_CP_ACP_ENCODING = 0),
									(this.EU_CP_1251_ENCODING = 1251),
									(this.EU_UTF8_ENCODING = 65001),
									(this.m_language = this.EU_DEFAULT_LANG),
									(this.m_lastErrorCode = ee.ERROR_NONE),
									(this.m_lastError = ''),
									(this.m_charset = 'UTF-8'),
									(this.m_stringCoder = new e()),
									(this.m_base64Coder = new o()),
									(this.m_dateCoder = new i()),
									(this.m_browserInfo = new a())
								var r = 1
								switch (t) {
									case 'chrome-extension://jffafkigfgmjafhpkoibhfefeaebmccg/':
										;(r = 2),
											this.m_browserInfo.GetName() == a.BROWSER_NAME_FIREFOX &&
												(t = 'eusw@iit.com.ua')
										break
									case 'clsid:B7E24C75-E343-4DA2-A8D3-C80970FB7D7B':
										r = 4
										break
									case 'application/x-eusign-cp':
										r = 3
								}
								;(this.m_jsonRpcClient = new l(
									r,
									t,
									n,
									'https:' == window.location.protocol
								)),
									(this.m_monitorLibraryTimer = null)
							}
							return (
								(ne.prototype._funcMakeParams = function (e) {
									var t = []
									null == e && (e = [])
									for (
										var n = function (e) {
												if (E(e)) return e.encode()
												if (Array.isArray(e)) {
													for (var t = e.length, r = [], i = 0; i < t; i++)
														r[i] = n(e[i])
													return r
												}
												return e
											},
											r = e.length,
											i = 0;
										i < r;
										i++
									)
										t[i] = n(e[i])
									return t
								}),
								(ne.prototype._funcCall = function (e, t, n, r, i) {
									var o
									if (!this.IsAsync(n, r))
										return (
											(o = this.m_jsonRpcClient.execute(e, t, null)),
											(o = this._funcHandleResult(o)),
											i ? i(o) : o
										)
									var s =
											null == i
												? n
												: function (e) {
														i(e, n, r)
												  },
										a = this
									this.m_jsonRpcClient.execute(e, t, function (e) {
										a._funcHandleResult(e, s, r)
									})
								}),
								(ne.prototype._funcHandleResult = function (e, t, n) {
									var r,
										i,
										o = this.IsAsync(t, n)
									if (null == e) {
										if (
											((r = this.MakeError(
												ee.ERROR_LIBRARY_COMUNICATION_FAILED,
												''
											)),
											o)
										)
											return void n(r)
										throw new te(r.errorCode, r.message)
									}
									if (((i = (r = e.error).code), ee.isError(i))) {
										if (i == ee.WARNING_END_OF_ENUM)
											return o ? void t(null) : null
										if (((r = this.MakeError(i, r.message)), o))
											return void n(r)
										throw new te(r.errorCode, r.message)
									}
									try {
										e = this._funcDecodeResult(e.result)
									} catch (e) {
										if (
											((r = this.MakeError(
												ee.ERROR_LIBRARY_COMUNICATION_FAILED,
												''
											)),
											o)
										)
											return void n(r)
										throw new te(r.errorCode, r.message)
									}
									if (!o) return e
									t(e)
								}),
								(ne.prototype._funcDecodeResult = function (e) {
									if (null == e) return null
									var t = function (e) {
										if (Array.isArray(e)) {
											for (var n = [], r = e.length, i = 0; i < r; i++)
												n[i] = t(e[i])
											return n
										}
										if ('object' == typeof e) {
											var o,
												s = e.className
											return (o = new h[s]()).decode(e)
												? 'EndUserByteArray' == o.className
													? o.GetData()
													: o
												: null
										}
										return e
									}
									return t(e)
								}),
								(ne.prototype._checkVersion = function (e) {
									try {
										var t = this.classVersion
										if (t == e) return !0
										if (
											((t = t.split('.')),
											(e = e.split('.')),
											t.length != e.length)
										)
											return !1
										for (var n = 0; n < e.length; n++)
											if (parseInt(t[n]) > parseInt(e[n])) return !1
									} catch (e) {
										return !1
									}
									return !0
								}),
								(ne.prototype._stringToBytes = function (e, t) {
									try {
										return this.m_stringCoder.encode(e)
									} catch (e) {
										var n = this.MakeError(ee.ERROR_BAD_PARAMETER, '')
										if (void 0 !== t)
											return (
												setTimeout(function () {
													t(n)
												}, 1),
												null
											)
										throw new te(n.errorCode, n.message)
									}
								}),
								(ne.prototype._bytesToString = function (e, t) {
									try {
										return this.m_stringCoder.decode(e)
									} catch (e) {
										var n = this.MakeError(ee.ERROR_BAD_PARAMETER, '')
										if (void 0 !== t)
											return (
												setTimeout(function () {
													t(n)
												}, 1),
												null
											)
										throw new te(n.errorCode, n.message)
									}
								}),
								(ne.prototype._base64Encode = function (e, t) {
									try {
										return this.m_base64Coder.encode(e)
									} catch (e) {
										var n = this.MakeError(ee.ERROR_BAD_PARAMETER, '')
										if (void 0 !== t)
											return (
												setTimeout(function () {
													t(n)
												}, 1),
												null
											)
										throw new te(n.errorCode, n.message)
									}
								}),
								(ne.prototype._base64Decode = function (e, t) {
									try {
										return this.m_base64Coder.decode(e)
									} catch (e) {
										var n = this.MakeError(ee.ERROR_BAD_PARAMETER, '')
										if (void 0 !== t)
											return (
												setTimeout(function () {
													t(n)
												}, 1),
												null
											)
										throw new te(n.errorCode, n.message)
									}
								}),
								(ne.prototype._copyArrayData = function (e, t) {
									try {
										if (e.length != t.length) return !1
										if (Array.isArray(t) || Array.isArray(e))
											for (var n = 0; n < t.length; n++) e[n] = t[n]
										else e.set(t)
										return !0
									} catch (e) {
										return !1
									}
								}),
								(ne.prototype._startMonitorLibraryStatus = function () {
									var e = this
									try {
										e.m_monitorLibraryTimer = setInterval(function () {
											e.IsInitialized(
												function (t) {
													t || e._stopMonitorLibraryStatus()
												},
												function (t) {
													e._stopMonitorLibraryStatus()
												}
											)
										}, 6e5)
									} catch (e) {}
								}),
								(ne.prototype._stopMonitorLibraryStatus = function () {
									try {
										if (null == this.m_monitorLibraryTimer) return
										clearInterval(this.m_monitorLibraryTimer),
											(this.m_monitorLibraryTimer = null)
									} catch (e) {}
								}),
								(ne.prototype._getAndroidAppIntentURL = function (e, t) {
									var n =
										'intent://addurlandstart?url={URL_LOCATION}#Intent;scheme=saclient;package=ua.com.iit.signagentmanagement;S.browser_fallback_url={URL_INSTALL};end;'
									return (n = n.replace(
										'{URL_LOCATION}',
										encodeURIComponent(location.origin)
									)).replace('{URL_INSTALL}', encodeURIComponent(e + '/' + t))
								}),
								(ne.prototype.IsAsync = function (e, t) {
									return void 0 !== e && void 0 !== t
								}),
								(ne.prototype.MakeError = function (e, t) {
									return (
										'' == t &&
											(t = ee.getErrorDescriptionEx(e, this.m_language)),
										(this.m_lastErrorCode = e),
										(this.m_lastError = t),
										new ee(e, t)
									)
								}),
								(ne.prototype.RaiseError = function (e, t) {
									var n
									throw new te((n = this.MakeError(e, t)).errorCode, n.message)
								}),
								(ne.prototype.GetInstallURL = function (e, t) {
									var n = this,
										r = n.m_browserInfo.GetOSName(),
										i = n.m_browserInfo.GetArch(),
										o = []
									t = t || 'https://iit.com.ua/download/productfiles'
									var s = function (e) {
										o.push(t + '/' + e)
									}
									switch (r) {
										case a.OS_NAME_WINDOWS:
											s('EUSignWebInstall.exe')
											break
										case a.OS_NAME_MAC:
											s('EUSignWebInstall.pkg')
											break
										case a.OS_NAME_LINUX:
											i == a.BROWSER_ARCH_NAME_X86
												? (s('euswi.deb'), s('euswi.rpm'), s('euswi.tar'))
												: (s('euswi.64.deb'),
												  s('euswi.64.rpm'),
												  s('euswi.64.tar'))
											break
										case a.OS_NAME_ANDROID:
											o.push(
												n._getAndroidAppIntentURL(t, 'EUSignWebInstall.apk')
											)
											break
										case a.OS_NAME_IOS:
											s('EUSignWebInstall.app')
											break
										default:
											return null
									}
									return e ? o : o[0]
								}),
								(ne.prototype.GetUpdateURL = function (e, t) {
									var n = this,
										r = n.m_browserInfo.GetOSName(),
										i = n.m_browserInfo.GetArch(),
										o = []
									t = t || 'https://iit.com.ua/download/productfiles'
									var s = function (e) {
										o.push(t + '/' + e)
									}
									switch (r) {
										case a.OS_NAME_WINDOWS:
											s('EUSignWebUpdate.exe')
											break
										case a.OS_NAME_MAC:
											s('EUSignWebInstall.pkg')
											break
										case a.OS_NAME_LINUX:
											i == a.BROWSER_ARCH_NAME_X86
												? (s('euswi.deb'), s('euswi.rpm'), s('euswi.tar'))
												: (s('euswi.64.deb'),
												  s('euswi.64.rpm'),
												  s('euswi.64.tar'))
											break
										case a.OS_NAME_ANDROID:
											o.push(
												n._getAndroidAppIntentURL(t, 'EUSignWebInstall.apk')
											)
											break
										case a.OS_NAME_IOS:
											s('EUSignWebInstall.app')
											break
										default:
											return null
									}
									return e ? o : o[0]
								}),
								(ne.prototype.GetHelpURL = function (e) {
									switch (
										((e = e || 'https://iit.com.ua/download/productfiles'),
										this.m_browserInfo.GetOSName())
									) {
										case a.OS_NAME_WINDOWS:
										case a.OS_NAME_MAC:
										case a.OS_NAME_LINUX:
											return e + '/EUSignWebOManual.pdf'
										default:
											return null
									}
								}),
								(ne.prototype.GetWebExtensionInstallURL = function () {
									switch (this.m_browserInfo.GetName()) {
										case a.BROWSER_NAME_CHROME:
											return 'https://chrome.google.com/webstore/detail/%D1%96%D1%96%D1%82-%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%87-%D1%86%D1%81%D0%BA-1-%D0%B1%D1%96%D0%B1%D0%BB/jffafkigfgmjafhpkoibhfefeaebmccg?utm_source=chrome-app-launcher-info-dialog'
										case a.BROWSER_NAME_FIREFOX:
											return 'https://eu.iit.com.ua/download/productfiles/eusw@iit.com.ua.xpi'
										case a.BROWSER_NAME_OPERA:
											return 'https://chrome.google.com/webstore/detail/%D1%96%D1%96%D1%82-%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%87-%D1%86%D1%81%D0%BA-1-%D0%B1%D1%96%D0%B1%D0%BB/jffafkigfgmjafhpkoibhfefeaebmccg?utm_source=chrome-app-launcher-info-dialog'
										default:
											return null
									}
								}),
								(ne.prototype.GetInstallPath = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetInstallPath', n, e, t, null)
									)
								}),
								(ne.prototype.SelectFile = function (e, t, n, r) {
									return this.SelectFileEx(e, t, null, null, null, null, n, r)
								}),
								(ne.prototype.SelectFileEx = function (e, t, n, r, i, o, s, a) {
									var u
									return (
										(u = this._funcMakeParams([e, t, n, r, i, o])),
										this._funcCall('SelectFile', u, s, a, null)
									)
								}),
								(ne.prototype.SelectFolder = function (e, t) {
									return this.SelectFolderEx(null, null, null, e, t)
								}),
								(ne.prototype.SelectFolderEx = function (e, t, n, r, i) {
									var o
									return (
										(o = this._funcMakeParams([e, t, n])),
										this._funcCall('SelectFolder', o, r, i, null)
									)
								}),
								(ne.prototype.CreateFolder = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('CreateFolder', r, t, n, null)
									)
								}),
								(ne.prototype.ReadFile = function (e, t, n) {
									var r = this.IsAsync(t, n),
										i = this,
										o = i.EU_FILE_PROCESS_CHUNK_SIZE
									if (!r) {
										for (
											var s,
												a = i.GetFileSize(e),
												u = Math.floor(a / o),
												l = a % o,
												c = new Uint8Array(a),
												p = 0;
											p < u;
											p++
										)
											(s = i.ReadFileWithOffset(e, p * o, o)),
												c.set(s, p * o, s.length)
										return (
											0 != l &&
												((s = i.ReadFileWithOffset(e, u * o, l)),
												c.set(s, u * o, s.length)),
											c
										)
									}
									var _ = {
											buf: null,
											length: 0,
											curLength: 0,
										},
										f = function (r) {
											if (r.curLength != r.length) {
												var s = r.length - r.curLength
												s > o && (s = o),
													i.ReadFileWithOffset(
														e,
														r.curLength,
														s,
														function (e) {
															r.buf.set(e, r.curLength, e.length),
																(r.curLength += e.length),
																f(r)
														},
														n
													)
											} else t(r.buf)
										}
									i.GetFileSize(
										e,
										function (e) {
											;(_.buf = new Uint8Array(e)), (_.length = e), f(_)
										},
										n
									)
								}),
								(ne.prototype.WriteFile = function (e, t, n, r) {
									var i = this.IsAsync(n, r),
										o = this,
										s = o.EU_FILE_PROCESS_CHUNK_SIZE
									if (i) {
										var a = {
												buf: null,
												length: 0,
												curLength: 0,
											},
											u = function (t, i) {
												if (i || t.curLength != t.length) {
													var a = t.length - t.curLength
													a > s && (a = s),
														o.WriteFileWithOffset(
															e,
															t.curLength,
															o.Copy(t.buf, t.curLength, s),
															function () {
																;(t.curLength += a), u(t, !1)
															},
															r
														)
												} else n()
											}
										;(a.buf = t), (a.length = t.length), u(a, !0)
									} else {
										for (
											var l = t.length, c = Math.floor(l / s), p = l % s, _ = 0;
											_ < c;
											_++
										)
											o.WriteFileWithOffset(e, _ * s, o.Copy(t, _ * s, s))
										;(0 == p && 0 != t.length) ||
											o.WriteFileWithOffset(e, c * s, o.Copy(t, c * s, p))
									}
								}),
								(ne.prototype.GetFileSize = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('GetFileSize', r, t, n, null)
									)
								}),
								(ne.prototype.ReadFileWithOffset = function (e, t, n, r, i) {
									var o
									return (
										(o = this._funcMakeParams([e, t, n])),
										this._funcCall('ReadFileWithOffset', o, r, i, null)
									)
								}),
								(ne.prototype.WriteFileWithOffset = function (e, t, n, r, i) {
									var o
									return (
										(o = this._funcMakeParams([e, t, new S(n)])),
										this._funcCall('WriteFileWithOffset', o, r, i, null)
									)
								}),
								(ne.prototype.DeleteFile = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('DeleteFile', r, t, n, null)
								}),
								(ne.prototype.AppendFile = function (e, t, n, r) {
									var i
									;(i = this._funcMakeParams([e, t])),
										this._funcCall('AppendFile', i, n, r, null)
								}),
								(ne.prototype.CopyFileWithOffset = function (e, t, n, r, i, o) {
									var s
									;(s = this._funcMakeParams([e, t, n, r])),
										this._funcCall('CopyFileWithOffset', s, i, o, null)
								}),
								(ne.prototype.Load = function (e, t) {
									var n = this.IsAsync(e, t),
										r = this
									if (n)
										this.GetVersion(
											function (n) {
												if (r._checkVersion(n)) e()
												else {
													var i = r.MakeError(
														ee.ERROR_LIBRARY_VERSION_NOT_SUPPORTED,
														''
													)
													t(i)
												}
											},
											function (e) {
												;(e = r.MakeError(
													ee.ERROR_LIBRARY_COMUNICATION_FAILED,
													''
												)),
													t(e)
											}
										)
									else {
										var i
										try {
											i = this._checkVersion(this.GetVersion())
										} catch (e) {
											this.RaiseError(ee.ERROR_LIBRARY_COMUNICATION_FAILED, '')
										}
										i ||
											this.RaiseError(
												ee.ERROR_LIBRARY_VERSION_NOT_SUPPORTED,
												''
											)
									}
								}),
								(ne.prototype.GetVersion = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetVersion', n, e, t, null)
									)
								}),
								(ne.prototype.IsInitialized = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('IsInitialized', n, e, t, null)
									)
								}),
								(ne.prototype.Initialize = function (e, t) {
									var n,
										r = this,
										i = this.IsAsync(e, t)
									;(n = this._funcMakeParams(null)),
										this._funcCall(
											'Initialize',
											n,
											i
												? function () {
														r._startMonitorLibraryStatus(), e()
												  }
												: e,
											t,
											null
										),
										i || r._startMonitorLibraryStatus()
								}),
								(ne.prototype.Finalize = function (e, t) {
									var n
									this._stopMonitorLibraryStatus(),
										(n = this._funcMakeParams(null)),
										this._funcCall('Finalize', n, e, t, null)
								}),
								(ne.prototype.ResetOperation = function (e, t) {
									var n
									;(n = this._funcMakeParams(null)),
										this._funcCall('ResetOperation', n, e, t, null)
								}),
								(ne.prototype.SetUIMode = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('SetUIMode', r, t, n, null)
								}),
								(ne.prototype.SetLanguage = function (e, t, n) {
									var r,
										i = this,
										o = this.IsAsync(t, n)
									;(r = this._funcMakeParams([e])),
										this._funcCall(
											'SetLanguage',
											r,
											o
												? function () {
														;(i.m_language = e), t()
												  }
												: t,
											n,
											null
										),
										o || (this.m_language = e)
								}),
								(ne.prototype.SetCharset = function (e, t, n) {
									var i,
										o = this.IsAsync(t, n)
									if (null == (i = r.GetCoder(e))) {
										var s = this.MakeError(ee.ERROR_BAD_PARAMETER, '')
										if (o)
											return void setTimeout(function () {
												n(s)
											}, 1)
										throw new te(s.errorCode, s.message)
									}
									;(this.m_stringCoder = i),
										(this.m_charset = e),
										o &&
											setTimeout(function () {
												t()
											}, 1)
								}),
								(ne.prototype.SetRuntimeParameter = function (e, t, n, r) {
									var i
									'boolean' == typeof t && (t = t ? 1 : 0),
										(i = this._funcMakeParams([e, t])),
										this._funcCall('SetRuntimeParameter', i, n, r, null)
								}),
								(ne.prototype.GetStorageParameter = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetStorageParameter', i, n, r, null)
									)
								}),
								(ne.prototype.SetStorageParameter = function (e, t, n, r, i) {
									var o
									;(o = this._funcMakeParams([e, t, n])),
										this._funcCall('SetStorageParameter', o, r, i, null)
								}),
								(ne.prototype.CreateArrayList = function () {
									return new _()
								}),
								(ne.prototype.GetLastError = function () {
									return this.m_lastError
								}),
								(ne.prototype.GetLastErrorCode = function () {
									return this.m_lastErrorCode
								}),
								(ne.prototype.BASE64Encode = function (e, t, n) {
									var r = this._base64Encode(e, n)
									if (!this.IsAsync(t, n)) return r
									setTimeout(function () {
										t(r)
									}, 1)
								}),
								(ne.prototype.BASE64Decode = function (e, t, n) {
									var r = this._base64Decode(e, n)
									if (!this.IsAsync(t, n)) return r
									setTimeout(function () {
										t(r)
									}, 1)
								}),
								(ne.prototype.StringToBytes = function (e, t, n) {
									var r = this._stringToBytes(e, n)
									if (!this.IsAsync(t, n)) return r
									setTimeout(function () {
										t(r)
									}, 1)
								}),
								(ne.prototype.BytesToString = function (e, t, n) {
									var r = this._bytesToString(e, n)
									if (!this.IsAsync(t, n)) return r
									setTimeout(function () {
										t(r)
									}, 1)
								}),
								(ne.prototype.Concatenate = function (e, t) {
									if (Array.isArray(e) && Array.isArray(t)) return e.concat(t)
									var n,
										r = e.length + t.length
									if (Array.isArray(e) || Array.isArray(t)) {
										var i, o
										for (n = new Array(r), i = 0; i < e.length; i++) n[i] = e[i]
										for (o = 0; o < t.length; i++, o++) n[i] = t[o]
									} else (n = new f(r)).set(e), n.set(t, e.length)
									return n
								}),
								(ne.prototype.Copy = function (e, t, n) {
									return e.slice(t, t + n)
								}),
								(ne.prototype.SetSettings = function (e, t) {
									var n
									;(n = this._funcMakeParams(null)),
										this._funcCall('SetSettings', n, e, t, null)
								}),
								(ne.prototype.DoesNeedSetSettings = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('DoesNeedSetSettings', n, e, t, null)
									)
								}),
								(ne.prototype.InitializeMandatorySettings = function (e, t) {
									var n = this
									if (this.IsAsync(e, t))
										s(function (e) {
											var r = n.CreateFileStoreSettings()
											n.SetFileStoreSettings(r, e, t)
										})
											.eu_wait(function (e) {
												n.GetProxySettings(
													function (t) {
														e()
													},
													function (r) {
														n.GetSystemProxySettings(
															function (r) {
																n.SetProxySettings(r, e, t)
															},
															function (r) {
																var i = n.CreateProxySettings()
																n.SetProxySettings(i, e, t)
															}
														)
													}
												)
											})
											.eu_wait(function (e) {
												var r = n.CreateTSPSettings()
												n.SetTSPSettings(r, e, t)
											})
											.eu_wait(function (e) {
												var r = n.CreateLDAPSettings()
												n.SetLDAPSettings(r, e, t)
											})
											.eu_wait(function () {
												var r = n.CreateOCSPSettings()
												n.SetOCSPSettings(r, e, t)
											})
									else {
										var r,
											i = n.CreateFileStoreSettings()
										n.SetFileStoreSettings(i)
										try {
											r = n.GetProxySettings()
										} catch (e) {
											r = n.CreateProxySettings()
											try {
												r = n.GetSystemProxySettings()
											} catch (e) {}
											n.SetProxySettings(r)
										}
										var o = n.CreateTSPSettings()
										n.SetTSPSettings(o)
										var a = n.CreateLDAPSettings()
										n.SetLDAPSettings(a)
										var u = n.CreateOCSPSettings()
										n.SetOCSPSettings(u)
									}
								}),
								(ne.prototype.CreateModeSettings = function () {
									return new g()
								}),
								(ne.prototype.GetModeSettings = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetModeSettings', n, e, t, null)
									)
								}),
								(ne.prototype.SetModeSettings = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('SetModeSettings', r, t, n, null)
								}),
								(ne.prototype.CreateKeyMediaSettings = function () {
									return new I()
								}),
								(ne.prototype.GetKeyMediaSettings = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetKeyMediaSettings', n, e, t, null)
									)
								}),
								(ne.prototype.SetKeyMediaSettings = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('SetKeyMediaSettings', r, t, n, null)
								}),
								(ne.prototype.CreateFileStoreSettings = function () {
									return new y()
								}),
								(ne.prototype.GetFileStoreSettings = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetFileStoreSettings', n, e, t, null)
									)
								}),
								(ne.prototype.SetFileStoreSettings = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('SetFileStoreSettings', r, t, n, null)
								}),
								(ne.prototype.CreateProxySettings = function () {
									return new C()
								}),
								(ne.prototype.GetProxySettings = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetProxySettings', n, e, t, null)
									)
								}),
								(ne.prototype.SetProxySettings = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('SetProxySettings', r, t, n, null)
								}),
								(ne.prototype.CreateOCSPSettings = function () {
									return new A()
								}),
								(ne.prototype.GetOCSPSettings = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetOCSPSettings', n, e, t, null)
									)
								}),
								(ne.prototype.SetOCSPSettings = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('SetOCSPSettings', r, t, n, null)
								}),
								(ne.prototype.CreateOCSPAccessInfoModeSettings = function () {
									return new P()
								}),
								(ne.prototype.GetOCSPAccessInfoModeSettings = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall(
											'GetOCSPAccessInfoModeSettings',
											n,
											e,
											t,
											null
										)
									)
								}),
								(ne.prototype.SetOCSPAccessInfoModeSettings = function (
									e,
									t,
									n
								) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall(
											'SetOCSPAccessInfoModeSettings',
											r,
											t,
											n,
											null
										)
								}),
								(ne.prototype.CreateOCSPAccessInfoSettings = function () {
									return new v()
								}),
								(ne.prototype.EnumOCSPAccessInfoSettings = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('EnumOCSPAccessInfoSettings', r, t, n, null)
									)
								}),
								(ne.prototype.GetOCSPAccessInfoSettings = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('GetOCSPAccessInfoSettings', r, t, n, null)
									)
								}),
								(ne.prototype.SetOCSPAccessInfoSettings = function (e, t, n) {
									var r,
										i = this,
										o = i.IsAsync(t, n)
									if (((e = Array.isArray(e) ? e : [e]), o)) {
										var s = function (o) {
											o >= e.length
												? t()
												: ((r = i._funcMakeParams([e[o]])),
												  i._funcCall(
														'SetOCSPAccessInfoSettings',
														r,
														function () {
															s(o + 1)
														},
														n,
														null
												  ))
										}
										s(0)
									} else
										for (var a = 0; a < e.length; a++)
											(r = i._funcMakeParams([e[a]])),
												i._funcCall('SetOCSPAccessInfoSettings', r, t, n, null)
								}),
								(ne.prototype.DeleteOCSPAccessInfoSettings = function (
									e,
									t,
									n
								) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall(
											'DeleteOCSPAccessInfoSettings',
											r,
											t,
											n,
											null
										)
								}),
								(ne.prototype.CreateTSPSettings = function () {
									return new T()
								}),
								(ne.prototype.GetTSPSettings = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetTSPSettings', n, e, t, null)
									)
								}),
								(ne.prototype.SetTSPSettings = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('SetTSPSettings', r, t, n, null)
								}),
								(ne.prototype.CreateLDAPSettings = function () {
									return new R()
								}),
								(ne.prototype.GetLDAPSettings = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetLDAPSettings', n, e, t, null)
									)
								}),
								(ne.prototype.SetLDAPSettings = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('SetLDAPSettings', r, t, n, null)
								}),
								(ne.prototype.CreateCMPSettings = function () {
									return new m()
								}),
								(ne.prototype.GetCMPSettings = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetCMPSettings', n, e, t, null)
									)
								}),
								(ne.prototype.SetCMPSettings = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('SetCMPSettings', r, t, n, null)
								}),
								(ne.prototype.GetSystemProxySettings = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetSystemProxySettings', n, e, t, null)
									)
								}),
								(ne.prototype.SetOCSPResponseExpireTime = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('SetOCSPResponseExpireTime', r, t, n, null)
								}),
								(ne.prototype.CreateTSLSettings = function () {
									return new U()
								}),
								(ne.prototype.GetTSLSettings = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetTSLSettings', n, e, t, null)
									)
								}),
								(ne.prototype.SetTSLSettings = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('SetTSLSettings', r, t, n, null)
								}),
								(ne.prototype.RefreshFileStore = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('RefreshFileStore', r, t, n, null)
								}),
								(ne.prototype.ShowCertificates = function (e, t) {
									var n
									;(n = this._funcMakeParams(null)),
										this._funcCall('ShowCertificates', n, e, t, null)
								}),
								(ne.prototype.SelectCertificateInfo = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('SelectCertificateInfo', n, e, t, null)
									)
								}),
								(ne.prototype.GetCertificatesCount = function (e, t, n, r) {
									var i
									return (
										('number' == typeof e && 'number' == typeof t) ||
											((n = e),
											(r = t),
											(e = this.SUBJECT_TYPE_UNDIFFERENCED),
											(t = this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED)),
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetCertificatesCount', i, n, r, null)
									)
								}),
								(ne.prototype.GetCACertificatesCount = function (e, t) {
									return this.GetCertificatesCount(
										this.SUBJECT_TYPE_CA,
										this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
										e,
										t
									)
								}),
								(ne.prototype.GetCAServerCertificatesCount = function (e, t) {
									return this.GetCertificatesCount(
										this.SUBJECT_TYPE_CA_SERVER,
										this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
										e,
										t
									)
								}),
								(ne.prototype.GetCMPServerCertificatesCount = function (e, t) {
									return this.GetCertificatesCount(
										this.SUBJECT_TYPE_CA_SERVER,
										this.SUBJECT_CA_SERVER_SUB_TYPE_CMP,
										e,
										t
									)
								}),
								(ne.prototype.GetOCSPServerCertificatesCount = function (e, t) {
									return this.GetCertificatesCount(
										this.SUBJECT_TYPE_CA_SERVER,
										this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP,
										e,
										t
									)
								}),
								(ne.prototype.GetTSPServerCertificatesCount = function (e, t) {
									return this.GetCertificatesCount(
										this.SUBJECT_TYPE_CA_SERVER,
										this.SUBJECT_CA_SERVER_SUB_TYPE_TSP,
										e,
										t
									)
								}),
								(ne.prototype.GetRAAdministratorCertificatesCount = function (
									e,
									t
								) {
									return this.GetCertificatesCount(
										this.SUBJECT_TYPE_RA_ADMINISTRATOR,
										this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
										e,
										t
									)
								}),
								(ne.prototype.GetEndUserCertificatesCount = function (e, t) {
									return this.GetCertificatesCount(
										this.SUBJECT_TYPE_END_USER,
										this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
										e,
										t
									)
								}),
								(ne.prototype.EnumCertificates = function (e, t, n, r, i) {
									var o
									return (
										('number' == typeof t && 'number' == typeof n) ||
											((r = t),
											(i = n),
											(n = e),
											(e = this.SUBJECT_TYPE_UNDIFFERENCED),
											(t = this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED)),
										(o = this._funcMakeParams([e, t, n])),
										this._funcCall('EnumCertificates', o, r, i, null)
									)
								}),
								(ne.prototype.EnumCACertificates = function (e, t, n) {
									return this.EnumCertificates(
										e,
										this.SUBJECT_TYPE_CA,
										this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
										t,
										n
									)
								}),
								(ne.prototype.EnumCAServerCertificates = function (e, t, n) {
									return this.EnumCertificates(
										e,
										this.SUBJECT_TYPE_CA_SERVER,
										this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
										t,
										n
									)
								}),
								(ne.prototype.EnumCMPServerCertificatesCount = function (
									e,
									t,
									n
								) {
									return this.EnumCertificates(
										e,
										this.SUBJECT_TYPE_CA_SERVER,
										this.SUBJECT_CA_SERVER_SUB_TYPE_CMP,
										t,
										n
									)
								}),
								(ne.prototype.EnumOCSPServerCertificatesCount = function (
									e,
									t,
									n
								) {
									return this.EnumCertificates(
										e,
										this.SUBJECT_TYPE_CA_SERVER,
										this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP,
										t,
										n
									)
								}),
								(ne.prototype.EnumTSPServerCertificatesCount = function (
									e,
									t,
									n
								) {
									return this.EnumCertificates(
										e,
										this.SUBJECT_TYPE_CA_SERVER,
										this.SUBJECT_CA_SERVER_SUB_TYPE_TSP,
										t,
										n
									)
								}),
								(ne.prototype.EnumRAAdministratorCertificatesCount = function (
									e,
									t,
									n
								) {
									return this.EnumCertificates(
										e,
										this.SUBJECT_TYPE_RA_ADMINISTRATOR,
										this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
										t,
										n
									)
								}),
								(ne.prototype.EnumEndUserCertificatesCount = function (
									e,
									t,
									n
								) {
									return this.EnumCertificates(
										e,
										this.SUBJECT_TYPE_END_USER,
										this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
										t,
										n
									)
								}),
								(ne.prototype.GetCertificateInfo = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetCertificateInfo', i, n, r, null)
									)
								}),
								(ne.prototype.GetCertificateInfoEx = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetCertificateInfoEx', i, n, r, null)
									)
								}),
								(ne.prototype.GetCertificate = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetCertificate', i, n, r, null)
									)
								}),
								(ne.prototype.CheckCertificateByIssuerAndSerial = function (
									e,
									t,
									n,
									r
								) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall(
											'CheckCertificateByIssuerAndSerial',
											i,
											n,
											r,
											null
										)
									)
								}),
								(ne.prototype.CheckCertificate = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([new S(e)])),
										this._funcCall('CheckCertificate', r, t, n, null)
									)
								}),
								(ne.prototype.ParseCertificate = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([new S(e)])),
										this._funcCall('ParseCertificate', r, t, n, null)
									)
								}),
								(ne.prototype.ParseCertificateEx = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([new S(e)])),
										this._funcCall('ParseCertificateEx', r, t, n, null)
									)
								}),
								(ne.prototype.SaveCertificate = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([new S(e)])),
										this._funcCall('SaveCertificate', r, t, n, null)
									)
								}),
								(ne.prototype.SaveCertificates = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([new S(e)])),
										this._funcCall('SaveCertificates', r, t, n, null)
									)
								}),
								(ne.prototype.SaveCertificatesEx = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([new S(e), t ? new S(t) : null])),
										this._funcCall('SaveCertificatesEx', i, n, r, null)
									)
								}),
								(ne.prototype.GetCertificatesFromLDAPByEDRPOUCode = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									var a
									return (
										null != r && null != i
											? ('EndUserArrayList' == r.className && (r = r.m_array),
											  'EndUserArrayList' == i.className && (i = i.m_array))
											: ((r = null), (i = null)),
										(a = this._funcMakeParams([e, t, n, r, i])),
										this._funcCall(
											'GetCertificatesFromLDAPByEDRPOUCode',
											a,
											o,
											s,
											null
										)
									)
								}),
								(ne.prototype.GetCertificateByEmail = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									var s
									return (
										'string' != typeof r && (r = this.m_dateCoder.encode(r)),
										(s = this._funcMakeParams([e, t, n, r])),
										this._funcCall('GetCertificateByEmail', s, i, o, null)
									)
								}),
								(ne.prototype.GetCertificateByNBUCode = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									var s
									return (
										'string' != typeof r && (r = this.m_dateCoder.encode(r)),
										(s = this._funcMakeParams([e, t, n, r])),
										this._funcCall('GetCertificateByNBUCode', s, i, o, null)
									)
								}),
								(ne.prototype.GetReceiversCertificates = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetReceiversCertificates', n, e, t, null)
									)
								}),
								(ne.prototype.GetReceiversCertificatesInArrayList = function (
									e,
									t
								) {
									var n,
										r = this
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall(
											'GetReceiversCertificates',
											n,
											e,
											t,
											function (e, t, n) {
												var i = r.IsAsync(t, n)
												try {
													for (var o = new _(), s = 0; s < e.length; s++)
														o.add(e[s])
													if (!i) return o
													t(o)
												} catch (e) {
													var a = r.MakeError(
														ee.ERROR_LIBRARY_COMUNICATION_FAILED,
														''
													)
													if (i) return void n(a)
													throw new te(a.errorCode, a.message)
												}
											}
										)
									)
								}),
								(ne.prototype.GetCertificates = function (e, t, n, r) {
									var i,
										o = this
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall(
											'GetCertificates',
											i,
											n,
											r,
											function (e, t, n) {
												var r = o.IsAsync(t, n)
												try {
													for (var i = new _(), s = 0; s < e.length; s++)
														i.add(e[s])
													if (!r) return i
													t(i)
												} catch (e) {
													var a = o.MakeError(
														ee.ERROR_LIBRARY_COMUNICATION_FAILED,
														''
													)
													if (r) return void n(a)
													throw new te(a.errorCode, a.message)
												}
											}
										)
									)
								}),
								(ne.prototype.GetCertificateByFingerprint = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('GetCertificateByFingerprint', r, t, n, null)
									)
								}),
								(ne.prototype.GetCertificatesByEDRPOUAndDRFOCode = function (
									e,
									t,
									n,
									r
								) {
									var i,
										o = this
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall(
											'GetCertificatesByEDRPOUAndDRFOCode',
											i,
											n,
											r,
											function (e, t, n) {
												var r = o.IsAsync(t, n)
												try {
													for (var i = new _(), s = 0; s < e.length; s++)
														i.add(e[s])
													if (!r) return i
													t(i)
												} catch (e) {
													var a = o.MakeError(
														ee.ERROR_LIBRARY_COMUNICATION_FAILED,
														''
													)
													if (r) return void n(a)
													throw new te(a.errorCode, a.message)
												}
											}
										)
									)
								}),
								(ne.prototype.ShowCRLs = function (e, t) {
									var n
									;(n = this._funcMakeParams(null)),
										this._funcCall('ShowCRLs', n, e, t, null)
								}),
								(ne.prototype.GetCRLsCount = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetCRLsCount', n, e, t, null)
									)
								}),
								(ne.prototype.EnumCRLs = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('EnumCRLs', r, t, n, null)
									)
								}),
								(ne.prototype.GetCRLDetailedInfo = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, parseInt(t)])),
										this._funcCall('GetCRLDetailedInfo', i, n, r, null)
									)
								}),
								(ne.prototype.SaveCRL = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, new S(t)])),
										this._funcCall('SaveCRL', i, n, r, null)
									)
								}),
								(ne.prototype.GetTSPByAccessInfo = function (e, t, n, r, i, o) {
									var s
									if (
										'string' == typeof t ||
										null != (t = this._base64Encode(t, o))
									)
										return (
											(s = this._funcMakeParams([e, t, n, r])),
											this._funcCall('GetTSPByAccessInfo', s, i, o, null)
										)
								}),
								(ne.prototype.CheckTSP = function (e, t, n, r, i) {
									var o
									;('string' == typeof e &&
										null == (e = this._base64Decode(e, i))) ||
										(null != n &&
											'string' != typeof n &&
											null == (n = this._base64Encode(n, i))) ||
										((o = this._funcMakeParams([new S(e), t, n])),
										this._funcCall('CheckTSP', o, r, i, null))
								}),
								(ne.prototype.GetOCSPResponseByAccessInfo = function (
									e,
									t,
									n,
									r,
									i
								) {
									var o
									return (
										(o = this._funcMakeParams([new S(e), t, n])),
										this._funcCall('GetOCSPResponseByAccessInfo', o, r, i, null)
									)
								}),
								(ne.prototype.CheckOCSPResponse = function (e, t, n, r) {
									var i
									if (
										'string' != typeof e ||
										null != (e = this._base64Decode(e, r))
									)
										return (
											null != t &&
												'string' != typeof t &&
												(t = this.m_dateCoder.encode(t)),
											(i = this._funcMakeParams([new S(e), t])),
											this._funcCall('CheckOCSPResponse', i, n, r, null)
										)
								}),
								(ne.prototype.CreateKeyMedia = function () {
									return new d()
								}),
								(ne.prototype.GetPrivateKeyMedia = function (e, t, n) {
									var r
									return (
										'string' != typeof e && (e = null),
										(r = this._funcMakeParams([e])),
										this._funcCall('GetPrivateKeyMedia', r, t, n, null)
									)
								}),
								(ne.prototype.EnumKeyMediaTypes = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('EnumKeyMediaTypes', r, t, n, null)
									)
								}),
								(ne.prototype.EnumKeyMediaDevices = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('EnumKeyMediaDevices', i, n, r, null)
									)
								}),
								(ne.prototype.GetKeyMediaTypes = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetKeyMediaTypes', n, e, t, null)
									)
								}),
								(ne.prototype.GetKeyMediaDevices = function (e, t, n) {
									var r
									return (
										'number' == typeof e && (e = [e]),
										e && (e = new S(e)),
										(r = this._funcMakeParams([e])),
										this._funcCall('GetKeyMediaDevices', r, t, n, null)
									)
								}),
								(ne.prototype.IsPrivateKeyReaded = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('IsPrivateKeyReaded', n, e, t, null)
									)
								}),
								(ne.prototype.ReadPrivateKey = function (e, t) {
									var n
									;(n = this._funcMakeParams(null)),
										this._funcCall('ReadPrivateKey', n, e, t, null)
								}),
								(ne.prototype.ReadPrivateKeySilently = function (
									e,
									t,
									n,
									r,
									i
								) {
									var o, s
									'number' == typeof e
										? (((s = new d()).typeIndex = e),
										  (s.devIndex = t),
										  (s.password = n))
										: ((s = e), (r = t), (i = n)),
										(o = this._funcMakeParams([s])),
										this._funcCall('ReadPrivateKeySilently', o, r, i, null)
								}),
								(ne.prototype.ReadPrivateKeyBinary = function (e, t, n, r) {
									var i
									;(i = this._funcMakeParams([new S(e), t])),
										this._funcCall('ReadPrivateKeyBinary', i, n, r, null)
								}),
								(ne.prototype.ReadPrivateKeyFile = function (e, t, n, r) {
									var i
									;(i = this._funcMakeParams([e, t])),
										this._funcCall('ReadPrivateKeyFile', i, n, r, null)
								}),
								(ne.prototype.CtxReadPrivateKey = function (e, t, n, r, i, o) {
									var s, a
									return (
										'number' == typeof t
											? (((a = new d()).typeIndex = t),
											  (a.devIndex = n),
											  (a.password = r))
											: ((a = t), (i = n), (o = r)),
										(s = this._funcMakeParams([e, a])),
										this._funcCall('CtxReadPrivateKey', s, i, o, null)
									)
								}),
								(ne.prototype.CtxReadPrivateKeyBinary = function (
									e,
									t,
									n,
									r,
									i
								) {
									var o
									return (
										(o = this._funcMakeParams([e, new S(t), n])),
										this._funcCall('CtxReadPrivateKeyBinary', o, r, i, null)
									)
								}),
								(ne.prototype.ResetPrivateKey = function (e, t) {
									var n
									;(n = this._funcMakeParams(null)),
										this._funcCall('ResetPrivateKey', n, e, t, null)
								}),
								(ne.prototype.CtxFreePrivateKey = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('CtxFreePrivateKey', r, t, n, null)
								}),
								(ne.prototype.ShowOwnCertificate = function (e, t) {
									var n
									;(n = this._funcMakeParams(null)),
										this._funcCall('ShowOwnCertificate', n, e, t, null)
								}),
								(ne.prototype.GetOwnCertificate = function (e, t, n, r) {
									var i
									return (
										('number' == typeof e && 'number' == typeof t) ||
											((n = e), (r = t), (e = null), (t = null)),
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetOwnCertificate', i, n, r, null)
									)
								}),
								(ne.prototype.EnumOwnCertificates = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('EnumOwnCertificates', r, t, n, null)
									)
								}),
								(ne.prototype.GetPrivateKeyOwnerInfo = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetPrivateKeyOwnerInfo', n, e, t, null)
									)
								}),
								(ne.prototype.CtxEnumOwnCertificates = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('CtxEnumOwnCertificates', i, n, r, null)
									)
								}),
								(ne.prototype.CtxGetOwnCertificate = function (e, t, n, r, i) {
									var o
									return (
										(o = this._funcMakeParams([e, t, n])),
										this._funcCall('CtxGetOwnCertificate', o, r, i, null)
									)
								}),
								(ne.prototype.GetKeyInfo = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('GetKeyInfo', r, t, n, null)
									)
								}),
								(ne.prototype.GetKeyInfoSilently = function (e, t, n, r, i) {
									var o
									return (
										((o = new d()).typeIndex = e),
										(o.devIndex = t),
										(o.password = n),
										this.GetKeyInfo(o, r, i)
									)
								}),
								(ne.prototype.GetKeyInfoBinary = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([new S(e), t])),
										this._funcCall('GetKeyInfoBinary', i, n, r, null)
									)
								}),
								(ne.prototype.GetKeyInfoFile = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetKeyInfoFile', i, n, r, null)
									)
								}),
								(ne.prototype.GetCertificateByKeyInfo = function (e, t, n, r) {
									var i,
										o = []
									return (
										('number' == typeof e && 'number' == typeof t) ||
											((r = n), (n = t)),
										'number' == typeof e && 'number' == typeof t
											? (o.push(e), o.push(t), o.push(null))
											: (o.push(null), o.push(null), o.push(new S(e))),
										(i = this._funcMakeParams(o)),
										this._funcCall('GetCertificateByKeyInfo', i, n, r, null)
									)
								}),
								(ne.prototype.GetCertificatesByKeyInfo = function (
									e,
									t,
									n,
									r,
									i
								) {
									var o
									return (
										'EndUserPrivateKeyInfo' == e.className &&
											(e = e.GetPrivateKeyInfo()),
										null != t && null != n
											? ('EndUserArrayList' == t.className && (t = t.m_array),
											  'EndUserArrayList' == n.className && (n = n.m_array))
											: ((t = null), (n = null)),
										(o = this._funcMakeParams([new S(e), t, n])),
										this._funcCall('GetCertificatesByKeyInfo', o, r, i, null)
									)
								}),
								(ne.prototype.ChangeSoftwarePrivateKeyPassword = function (
									e,
									t,
									n,
									r,
									i
								) {
									var o
									return (
										(o = this._funcMakeParams([new S(e), t, n])),
										this._funcCall(
											'ChangeSoftwarePrivateKeyPassword',
											o,
											r,
											i,
											null
										)
									)
								}),
								(ne.prototype.EnumJKSPrivateKeys = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([new S(e), t])),
										this._funcCall('EnumJKSPrivateKeys', i, n, r, null)
									)
								}),
								(ne.prototype.EnumJKSPrivateKeysFile = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('EnumJKSPrivateKeysFile', i, n, r, null)
									)
								}),
								(ne.prototype.GetJKSPrivateKey = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([new S(e), t])),
										this._funcCall('GetJKSPrivateKey', i, n, r, null)
									)
								}),
								(ne.prototype.GetJKSPrivateKeyFile = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetJKSPrivateKeyFile', i, n, r, null)
									)
								}),
								(ne.prototype.CreatePrivateKeyInfo = function () {
									return new L()
								}),
								(ne.prototype.CreateEndUserInfo = function () {
									return new x()
								}),
								(ne.prototype._generatePrivateKey = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									c,
									p,
									_,
									f,
									E,
									h
								) {
									if (!this.IsAsync(E, h))
										return this.GeneratePrivateKeyEx(
											e,
											t,
											n,
											r,
											!1,
											i,
											o,
											s,
											a,
											u,
											l,
											c,
											p,
											null,
											null,
											_,
											f,
											E,
											h
										).m_array
									this.GeneratePrivateKeyEx(
										e,
										t,
										n,
										r,
										!1,
										i,
										o,
										s,
										a,
										u,
										l,
										c,
										p,
										null,
										null,
										_,
										f,
										function (e) {
											E(e.m_array)
										},
										h
									)
								}),
								(ne.prototype.GeneratePrivateKey = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									c,
									p,
									_,
									f,
									E,
									h
								) {
									if ('boolean' == typeof e)
										return this._generatePrivateKeyEx(
											e,
											t,
											n,
											r,
											i,
											o,
											s,
											a,
											u,
											l,
											c,
											p,
											_,
											f,
											E,
											h
										)
									if ('boolean' == typeof n)
										return this._generatePrivateKey(
											!0,
											0,
											0,
											'',
											e,
											t,
											n,
											r,
											i,
											o,
											s,
											a,
											null,
											!1,
											u,
											l
										)
									if ('string' == typeof n)
										return this._generatePrivateKey(
											!1,
											e,
											t,
											n,
											r,
											i,
											o,
											s,
											a,
											u,
											l,
											c,
											null,
											!1,
											p,
											_
										)
									if ('number' == typeof n)
										return this._generatePrivateKey(
											!1,
											0,
											0,
											e,
											t,
											n,
											r,
											i,
											o,
											s,
											a,
											u,
											l,
											!0,
											c,
											p
										)
									var S = this.MakeError(ee.ERROR_BAD_PARAMETER, '')
									throw new te(S.errorCode, S.message)
								}),
								(ne.prototype._generatePrivateKeyEx = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									c,
									p,
									f,
									E,
									h,
									S,
									y,
									C,
									T
								) {
									var A,
										R,
										m = this
									return (
										e
											? (R = null)
											: (((R = new d()).typeIndex = t),
											  (R.devIndex = n),
											  (R.password = 'string' != typeof r ? '' : r)),
										null == S && (y = !1),
										(A = this._funcMakeParams([
											e,
											R,
											i,
											o,
											s,
											a,
											u,
											l,
											c,
											p,
											f,
											E,
											h,
											null != S,
											y,
										])),
										this._funcCall(
											'GeneratePrivateKeyEx',
											A,
											C,
											T,
											function (e, t, n) {
												var r = m.IsAsync(t, n)
												try {
													for (
														var i = e[0], o = new _(), s = 0;
														s < i.length;
														s++
													)
														o.add(i[s])
													if ((null != S && S.set(e[1]), !r)) return o
													t(o)
												} catch (e) {
													var a = m.MakeError(
														ee.ERROR_LIBRARY_COMUNICATION_FAILED,
														''
													)
													if (r) return void n(a)
													throw new te(a.errorCode, a.message)
												}
											}
										)
									)
								}),
								(ne.prototype.GeneratePrivateKeyEx = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									c,
									p,
									_,
									f,
									E,
									h,
									S,
									d,
									y
								) {
									if ('boolean' == typeof e)
										return 'boolean' == typeof i
											? this._generatePrivateKeyEx(
													e,
													t,
													n,
													r,
													i,
													o,
													s,
													a,
													u,
													l,
													c,
													p,
													_,
													f,
													E,
													h,
													S,
													d,
													y
											  )
											: this._generatePrivateKeyEx(
													e,
													t,
													n,
													r,
													!1,
													i,
													o,
													s,
													a,
													u,
													l,
													c,
													p,
													null,
													null,
													_,
													f,
													E,
													h
											  )
									if ('boolean' == typeof n)
										return (void 0 !== l && null == l) || 'string' == typeof l
											? this._generatePrivateKeyEx(
													!0,
													0,
													0,
													'',
													!1,
													e,
													t,
													n,
													r,
													i,
													o,
													s,
													a,
													u,
													l,
													null,
													!1,
													c,
													p
											  )
											: this._generatePrivateKeyEx(
													!0,
													0,
													0,
													'',
													!1,
													e,
													t,
													n,
													r,
													i,
													o,
													s,
													a,
													null,
													null,
													null,
													!1,
													u,
													l
											  )
									if ('number' == typeof e)
										return 'boolean' == typeof r
											? this._generatePrivateKeyEx(
													!1,
													e,
													t,
													n,
													r,
													i,
													o,
													s,
													a,
													u,
													l,
													c,
													p,
													_,
													f,
													null,
													!1,
													E,
													h
											  )
											: this._generatePrivateKeyEx(
													!1,
													e,
													t,
													n,
													!1,
													r,
													i,
													o,
													s,
													a,
													u,
													l,
													c,
													null,
													null,
													null,
													!1,
													p,
													_
											  )
									if ('string' == typeof e)
										return (void 0 !== c && null == c) || 'string' == typeof c
											? this._generatePrivateKeyEx(
													!1,
													0,
													0,
													e,
													!1,
													t,
													n,
													r,
													i,
													o,
													s,
													a,
													u,
													l,
													c,
													p,
													!0,
													_,
													f
											  )
											: this._generatePrivateKeyEx(
													!1,
													0,
													0,
													e,
													!1,
													t,
													n,
													r,
													i,
													o,
													s,
													a,
													u,
													null,
													null,
													l,
													!0,
													c,
													p
											  )
									var C = this.MakeError(ee.ERROR_BAD_PARAMETER, '')
									throw new te(C.errorCode, C.message)
								}),
								(ne.prototype.GetCRInfo = function (e, t, n, r, i) {
									var o
									return (
										(o = this._funcMakeParams([new S(e), t, n])),
										this._funcCall('GetCRInfo', o, r, i, null)
									)
								}),
								(ne.prototype.IsHardwareKeyMedia = function (e, t, n, r, i) {
									var o, s
									return (
										'number' == typeof e
											? (((s = new d()).typeIndex = e),
											  (s.devIndex = t),
											  (s.password = n))
											: ((s = null), (r = e), (i = t)),
										(o = this._funcMakeParams([s])),
										this._funcCall('IsHardwareKeyMedia', o, r, i, null)
									)
								}),
								(ne.prototype.IsPrivateKeyExists = function (e, t, n, r, i) {
									var o, s
									return (
										'number' == typeof e
											? (((s = new d()).typeIndex = e),
											  (s.devIndex = t),
											  (s.password = n))
											: ((s = null), (r = e), (i = t)),
										(o = this._funcMakeParams([s])),
										this._funcCall('IsPrivateKeyExists', o, r, i, null)
									)
								}),
								(ne.prototype.ChangePrivateKeyPassword = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									var s, a
									'number' == typeof e
										? (((a = new d()).typeIndex = e),
										  (a.devIndex = t),
										  (a.password = n))
										: ((a = null), (r = null), (i = e), (o = t)),
										(s = this._funcMakeParams([a, r])),
										this._funcCall('ChangePrivateKeyPassword', s, i, o, null)
								}),
								(ne.prototype.BackupPrivateKey = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a
								) {
									var u, l, c
									'number' == typeof e
										? (((l = new d()).typeIndex = e),
										  (l.devIndex = t),
										  (l.password = n),
										  ((c = new d()).typeIndex = r),
										  (c.devIndex = i),
										  (c.password = o))
										: ((l = null), (c = null), (s = e), (a = t)),
										(u = this._funcMakeParams([l, c])),
										this._funcCall('BackupPrivateKey', u, s, a, null)
								}),
								(ne.prototype.DestroyPrivateKey = function (e, t, n, r, i) {
									var o, s
									'number' == typeof e
										? (((s = new d()).typeIndex = e),
										  (s.devIndex = t),
										  (s.password = n))
										: ((s = null), (r = e), (i = t)),
										(o = this._funcMakeParams([s])),
										this._funcCall('DestroyPrivateKey', o, r, i, null)
								}),
								(ne.prototype.SetKeyMediaPassword = function (e, t, n, r, i) {
									var o, s
									'number' == typeof e
										? (((s = new d()).typeIndex = e),
										  (s.devIndex = t),
										  (s.password = n))
										: ((s = null), (r = e), (i = t)),
										(o = this._funcMakeParams([s])),
										this._funcCall('SetKeyMediaPassword', o, r, i, null)
								}),
								(ne.prototype.SetKeyMediaUserPassword = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									var s, a
									'number' == typeof t
										? (((a = new d()).typeIndex = t),
										  (a.devIndex = n),
										  (a.password = r))
										: ((a = null), (i = t), (o = n)),
										(s = this._funcMakeParams([e, a])),
										this._funcCall('SetKeyMediaUserPassword', s, i, o, null)
								}),
								(ne.prototype.ChangeOwnCertificatesStatus = function (
									e,
									t,
									n,
									r
								) {
									var i
									;(i = this._funcMakeParams([e, t])),
										this._funcCall('ChangeOwnCertificatesStatus', i, n, r, null)
								}),
								(ne.prototype.CtxChangeOwnCertificatesStatus = function (
									e,
									t,
									n,
									r,
									i
								) {
									var o
									;(o = this._funcMakeParams([e, t, n])),
										this._funcCall(
											'CtxChangeOwnCertificatesStatus',
											o,
											r,
											i,
											null
										)
								}),
								(ne.prototype.MakeNewCertificate = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									c,
									p,
									_,
									f,
									E
								) {
									var h
									return (
										null != t && (t = new S(t)),
										(h = this._funcMakeParams([
											e,
											t,
											n,
											r,
											i,
											o,
											s,
											a,
											u,
											l,
											c,
											p,
											_,
										])),
										this._funcCall('MakeNewCertificate', h, f, E, null)
									)
								}),
								(ne.prototype.MakeNewOwnCertificate = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l
								) {
									var c
									return (
										(c = this._funcMakeParams([e, t, n, r, i, o, s, a])),
										this._funcCall('MakeNewOwnCertificate', c, u, l, null)
									)
								}),
								(ne.prototype.CtxMakeNewOwnCertificate = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									c
								) {
									var p
									return (
										(p = this._funcMakeParams([e, t, n, r, i, o, s, a, u])),
										this._funcCall('CtxMakeNewOwnCertificate', p, l, c, null)
									)
								}),
								(ne.prototype.CtxMakeNewOwnCertificateWithCR = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									var a
									return (
										null != t && (t = new S(t)),
										null != n && (n = new S(n)),
										null != r && (r = new S(r)),
										null != i && (i = new S(i)),
										(a = this._funcMakeParams([e, t, n, r, i])),
										this._funcCall(
											'CtxMakeNewOwnCertificateWithCR',
											a,
											o,
											s,
											null
										)
									)
								}),
								(ne.prototype.CtxMakeDeviceCertificate = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l
								) {
									var c
									return (
										null != n && (n = new S(n)),
										null != r && (r = new S(r)),
										null != i && (i = new S(i)),
										null != o && (o = new S(o)),
										(c = this._funcMakeParams([e, t, n, r, i, o, s, a])),
										this._funcCall('CtxMakeDeviceCertificate', c, u, l, null)
									)
								}),
								(ne.prototype.GetOwnEUserParams = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetOwnEUserParams', n, e, t, null)
									)
								}),
								(ne.prototype.ModifyOwnEUserParams = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('ModifyOwnEUserParams', i, n, r, null)
									)
								}),
								(ne.prototype.CtxGetOwnEUserParams = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('CtxGetOwnEUserParams', r, t, n, null)
									)
								}),
								(ne.prototype.CtxModifyOwnEUserParams = function (
									e,
									t,
									n,
									r,
									i
								) {
									var o
									return (
										(o = this._funcMakeParams([e, t, n])),
										this._funcCall('CtxModifyOwnEUserParams', o, r, i, null)
									)
								}),
								(ne.prototype.Hash = function (e, t, n) {
									var r
									if (
										'string' != typeof e ||
										null != (e = this._stringToBytes(e, n))
									)
										return (
											(r = this._funcMakeParams([new S(e)])),
											this._funcCall('Hash', r, t, n, null)
										)
								}),
								(ne.prototype.ContinueHash = function (e, t, n, r, i) {
									var o
									;('number' == typeof t && 'number' == typeof n) ||
										((r = t), (i = n)),
										('string' == typeof e &&
											null == (e = this._stringToBytes(e, i))) ||
											('number' == typeof t &&
												'number' == typeof n &&
												(e = e.slice(t, t + n)),
											(o = this._funcMakeParams([new S(e)])),
											this._funcCall('ContinueHash', o, r, i, null))
								}),
								(ne.prototype.EndHash = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('EndHash', n, e, t, null)
									)
								}),
								(ne.prototype.HashWithParams = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._stringToBytes(t, r))
									)
										return (
											(i = this._funcMakeParams([new S(e), new S(t)])),
											this._funcCall('HashWithParams', i, n, r, null)
										)
								}),
								(ne.prototype.HashBeginWithParams = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([new S(e)])),
										this._funcCall('HashBeginWithParams', r, t, n, null)
								}),
								(ne.prototype.HashFile = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('HashFile', r, t, n, null)
									)
								}),
								(ne.prototype.HashFileWithParams = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([new S(e), t])),
										this._funcCall('HashFileWithParams', i, n, r, null)
									)
								}),
								(ne.prototype.CtxHash = function (e, t, n, r, i, o) {
									var a = this,
										u = this.IsAsync(i, o),
										l = a.EU_FILE_PROCESS_CHUNK_SIZE
									if (
										'string' != typeof r ||
										null != (r = this._stringToBytes(r, o))
									)
										if (u) {
											var c = {
													hashContext: null,
													hash: null,
												},
												p = function (e) {
													null == c.hashContext
														? o(e)
														: a.CtxHashFree(
																c.hashContext,
																function () {
																	o(e)
																},
																function () {
																	o(e)
																}
														  )
												}
											s(function (r) {
												a.CtxHashBegin(e, t, n, r, p)
											})
												.eu_wait(function (e, t) {
													c.hashContext = t
													var n = function (i) {
														if (i >= r.length) a.CtxHashEnd(t, e, p)
														else {
															var o = r.length - i
															o > l && (o = l)
															var s = r.slice(i, i + o)
															a.CtxHashContinue(
																t,
																s,
																function () {
																	n(i + o)
																},
																p
															)
														}
													}
													n(0)
												})
												.eu_wait(function (e, t) {
													;(c.hash = t), a.CtxHashFree(c.hashContext, e, o)
												})
												.eu_wait(function () {
													i(c.hash)
												})
										} else {
											var _ = null
											try {
												var f,
													E = 0
												for (_ = a.CtxHashBegin(e, t, n); ; ) {
													var h = r.length - E
													h > l && (h = l)
													var S = r.slice(E, E + h)
													if ((a.CtxHashContinue(_, S), !((E += h) < r.length)))
														break
												}
												return (
													(f = a.CtxHashEnd(_)), a.CtxHashFree(_), (_ = null), f
												)
											} catch (e) {
												throw (null != _ && a.CtxHashFree(_), e)
											}
										}
								}),
								(ne.prototype.CtxHashBegin = function (e, t, n, r, i) {
									var o
									return (
										(o = this._funcMakeParams([e, t, n ? new S(n) : null])),
										this._funcCall('CtxHashBegin', o, r, i, null)
									)
								}),
								(ne.prototype.CtxHashContinue = function (e, t, n, r) {
									var i
									;(i = this._funcMakeParams([e, new S(t)])),
										this._funcCall('CtxHashContinue', i, n, r, null)
								}),
								(ne.prototype.CtxHashEnd = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('CtxHashEnd', r, t, n, null)
									)
								}),
								(ne.prototype.CtxHashFree = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('CtxHashFree', r, t, n, null)
								}),
								(ne.prototype.ShowSignInfo = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('ShowSignInfo', r, t, n, null)
								}),
								(ne.prototype.IsSigned = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([new S(e)])),
										this._funcCall('IsSigned', r, t, n, null)
									)
								}),
								(ne.prototype.IsSignedFile = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('IsSignedFile', r, t, n, null)
									)
								}),
								(ne.prototype.GetSignType = function (e, t, n, r) {
									var i
									if (
										'string' == typeof t ||
										null != (t = this._base64Encode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, t])),
											this._funcCall('GetSignType', i, n, r, null)
										)
								}),
								(ne.prototype.GetFileSignType = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetFileSignType', i, n, r, null)
									)
								}),
								(ne.prototype.GetSignsCount = function (e, t, n) {
									var r
									if (
										'string' == typeof e ||
										null != (e = this._base64Encode(e, n))
									)
										return (
											(r = this._funcMakeParams([e])),
											this._funcCall('GetSignsCount', r, t, n, null)
										)
								}),
								(ne.prototype.GetSignerInfo = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetSignerInfo', i, n, r, null)
									)
								}),
								(ne.prototype.GetSignerCertificate = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetSignerCertificate', i, n, r, null)
									)
								}),
								(ne.prototype.GetFileSignsCount = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('GetFileSignsCount', r, t, n, null)
									)
								}),
								(ne.prototype.GetFileSignerInfo = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetFileSignerInfo', i, n, r, null)
									)
								}),
								(ne.prototype.GetFileSignerCertificate = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetFileSignerCertificate', i, n, r, null)
									)
								}),
								(ne.prototype.CtxGetSignerInfo = function (e, t, n, r, i) {
									var o
									if (
										'string' == typeof n ||
										null != (n = this._base64Encode(n, i))
									)
										return (
											(o = this._funcMakeParams([e, t, n])),
											this._funcCall('CtxGetSignerInfo', o, r, i, null)
										)
								}),
								(ne.prototype.Sign = function (e, t, n) {
									var r
									if (
										'string' != typeof e ||
										null != (e = this._stringToBytes(e, n))
									)
										return (
											(r = this._funcMakeParams([new S(e)])),
											this._funcCall('Sign', r, t, n, null)
										)
								}),
								(ne.prototype.Verify = function (e, t, n, r, i) {
									var o,
										s = []
									if (
										('boolean' != typeof n && ((i = r), (r = n)),
										'string' != typeof t ||
											null != (t = this._stringToBytes(t, i)))
									)
										return (
											s.push(e),
											s.push(new S(t)),
											'boolean' == typeof n ? s.push(n) : s.push(null),
											(o = this._funcMakeParams(s)),
											this._funcCall('Verify', o, r, i, null)
										)
								}),
								(ne.prototype.ContinueSign = function (e, t, n, r, i) {
									var o
									;('number' == typeof t && 'number' == typeof n) ||
										((r = t), (i = n)),
										('string' == typeof e &&
											null == (e = this._stringToBytes(e, i))) ||
											('number' == typeof t &&
												'number' == typeof n &&
												(e = e.slice(t, t + n)),
											(o = this._funcMakeParams([new S(e)])),
											this._funcCall('ContinueSign', o, r, i, null))
								}),
								(ne.prototype.EndSign = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('EndSign', n, e, t, null)
									)
								}),
								(ne.prototype.BeginVerify = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('BeginVerify', r, t, n, null)
								}),
								(ne.prototype.ContinueVerify = function (e, t, n, r, i) {
									var o
									;('number' == typeof t && 'number' == typeof n) ||
										((r = t), (i = n)),
										('string' == typeof e &&
											null == (e = this._stringToBytes(e, i))) ||
											('number' == typeof t &&
												'number' == typeof n &&
												(e = e.slice(t, t + n)),
											(o = this._funcMakeParams([new S(e)])),
											this._funcCall('ContinueVerify', o, r, i, null))
								}),
								(ne.prototype.EndVerify = function (e, t, n) {
									var r,
										i = []
									return (
										'boolean' != typeof e && ((n = t), (t = e)),
										'boolean' != typeof e ? i.push(e) : i.push(null),
										(r = this._funcMakeParams(i)),
										this._funcCall('EndVerify', r, t, n, null)
									)
								}),
								(ne.prototype.SignHash = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('SignHash', r, t, n, null)
									)
								}),
								(ne.prototype.VerifyHash = function (e, t, n, r, i) {
									var o,
										s = []
									return (
										'boolean' != typeof n && ((i = r), (r = n)),
										s.push(e),
										s.push(t),
										'boolean' == typeof n ? s.push(n) : s.push(null),
										(o = this._funcMakeParams(s)),
										this._funcCall('VerifyHash', o, r, i, null)
									)
								}),
								(ne.prototype.SignInternal = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._stringToBytes(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('SignInternal', i, n, r, null)
										)
								}),
								(ne.prototype.VerifyInternal = function (e, t, n, r) {
									var i,
										o = []
									return (
										'boolean' != typeof t && ((r = n), (n = t)),
										o.push(e),
										'boolean' == typeof t ? o.push(t) : o.push(null),
										(i = this._funcMakeParams(o)),
										this._funcCall('VerifyInternal', i, n, r, null)
									)
								}),
								(ne.prototype.VerifyInternalString = function (e, t, n, r) {
									var i = this
									if (
										('boolean' != typeof t && ((r = n), (n = t)),
										!this.IsAsync(n, r))
									) {
										var o = this.VerifyInternal(e, t)
										return this.BytesToString(o)
									}
									this.VerifyInternal(
										e,
										t,
										function (e) {
											i.BytesToString(e, n, r)
										},
										r
									)
								}),
								(ne.prototype.SignFile = function (e, t, n, r, i) {
									var o
									;(o = this._funcMakeParams([e, t, n])),
										this._funcCall('SignFile', o, r, i, null)
								}),
								(ne.prototype.VerifyFile = function (e, t, n, r, i) {
									var o,
										s = []
									return (
										'boolean' != typeof n && ((i = r), (r = n)),
										s.push(e),
										s.push(t),
										'boolean' == typeof n ? s.push(n) : s.push(null),
										(o = this._funcMakeParams(s)),
										this._funcCall('VerifyFile', o, r, i, null)
									)
								}),
								(ne.prototype.VerifyFileWithExternalSign = function (
									e,
									t,
									n,
									r,
									i
								) {
									return this.VerifyFile(t, e, n, r, i)
								}),
								(ne.prototype.VerifyFileWithInternalSign = function (
									e,
									t,
									n,
									r,
									i
								) {
									return this.VerifyFile(e, t, n, r, i)
								}),
								(ne.prototype.IsAlreadySigned = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('IsAlreadySigned', r, t, n, null)
									)
								}),
								(ne.prototype.IsFileAlreadySigned = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('IsFileAlreadySigned', r, t, n, null)
									)
								}),
								(ne.prototype.AppendSign = function (e, t, n, r) {
									var i
									if (
										!(
											('string' == typeof e &&
												null == (e = this._stringToBytes(e, r))) ||
											('string' != typeof t &&
												null == (t = this._base64Encode(t, r)))
										)
									)
										return (
											(i = this._funcMakeParams([new S(e), t])),
											this._funcCall('AppendSign', i, n, r, null)
										)
								}),
								(ne.prototype.VerifySpecific = function (e, t, n, r, i, o) {
									var s,
										a = []
									if (
										('boolean' != typeof r && ((o = i), (i = r)),
										'string' != typeof t ||
											null != (t = this._stringToBytes(t, o)))
									)
										return (
											a.push(e),
											a.push(new S(t)),
											a.push(n),
											'boolean' == typeof r ? a.push(r) : a.push(null),
											(s = this._funcMakeParams(a)),
											this._funcCall('VerifySpecific', s, i, o, null)
										)
								}),
								(ne.prototype.AppendSignBegin = function (e, t, n) {
									var r
									;('string' != typeof e &&
										null == (e = this._base64Encode(e, n))) ||
										((r = this._funcMakeParams([e])),
										this._funcCall('AppendSignBegin', r, t, n, null))
								}),
								(ne.prototype.VerifyDataSpecificBegin = function (e, t, n, r) {
									var i
									;(i = this._funcMakeParams([e, t])),
										this._funcCall('VerifyDataSpecificBegin', i, n, r, null)
								}),
								(ne.prototype.AppendSignHash = function (e, t, n, r) {
									var i
									if (
										!(
											('string' != typeof e &&
												null == (e = this._base64Encode(e, r))) ||
											('string' != typeof t &&
												null == (t = this._base64Encode(t, r)))
										)
									)
										return (
											(i = this._funcMakeParams([e, t])),
											this._funcCall('AppendSignHash', i, n, r, null)
										)
								}),
								(ne.prototype.VerifyHashSpecific = function (e, t, n, r, i, o) {
									var s,
										a = []
									return (
										'boolean' != typeof r && ((o = i), (i = r)),
										a.push(e),
										a.push(t),
										a.push(n),
										'boolean' == typeof r ? a.push(r) : a.push(null),
										(s = this._funcMakeParams(a)),
										this._funcCall('VerifyHashSpecific', s, i, o, null)
									)
								}),
								(ne.prototype.AppendSignInternal = function (e, t, n, r) {
									var i
									if (
										'string' == typeof t ||
										null != (t = this._base64Encode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, t])),
											this._funcCall('AppendSignInternal', i, n, r, null)
										)
								}),
								(ne.prototype.VerifySpecificInternal = function (
									e,
									t,
									n,
									r,
									i
								) {
									var o,
										s = []
									return (
										'boolean' != typeof n && ((i = r), (r = n)),
										s.push(e),
										s.push(t),
										'boolean' == typeof n ? s.push(n) : s.push(null),
										(o = this._funcMakeParams(s)),
										this._funcCall('VerifySpecificInternal', o, r, i, null)
									)
								}),
								(ne.prototype.VerifySpecificInternalString = function (
									e,
									t,
									n,
									r,
									i
								) {
									var o = this
									if (
										('boolean' != typeof n && ((i = r), (r = n)),
										!this.IsAsync(r, i))
									) {
										var s = this.VerifySpecificInternal(e, t, n)
										return this.BytesToString(s)
									}
									this.VerifySpecificInternal(
										e,
										t,
										n,
										function (e) {
											o.BytesToString(e, r, i)
										},
										i
									)
								}),
								(ne.prototype.AppendSignFile = function (e, t, n, r, i, o) {
									var s
									return (
										(s = this._funcMakeParams([e, t, n, r])),
										this._funcCall('AppendSignFile', s, i, o, null)
									)
								}),
								(ne.prototype.VerifyFileSpecific = function (e, t, n, r, i, o) {
									var s,
										a = []
									return (
										'boolean' != typeof r && ((o = i), (i = r)),
										a.push(e),
										a.push(t),
										a.push(n),
										'boolean' == typeof r ? a.push(r) : a.push(null),
										(s = this._funcMakeParams(a)),
										this._funcCall('VerifyFileSpecific', s, i, o, null)
									)
								}),
								(ne.prototype.VerifyFileWithExternalSignSpecific = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									return this.VerifyFileSpecific(e, t, n, r, i, o)
								}),
								(ne.prototype.VerifyFileWithInternalSignSpecific = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									return this.VerifyFileSpecific(e, t, n, r, i, o)
								}),
								(ne.prototype.CreateEmptySign = function (e, t, n) {
									var r,
										i = []
									if (
										(2 == arguments.length && ((n = t), (t = e)),
										'string' != typeof e ||
											null != (e = this._stringToBytes(e, n)))
									)
										return (
											1 == arguments.length || 3 == arguments.length
												? i.push(new S(e))
												: i.push(null),
											(r = this._funcMakeParams(i)),
											this._funcCall('CreateEmptySign', r, t, n, null)
										)
								}),
								(ne.prototype.CreateSigner = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('CreateSigner', r, t, n, null)
									)
								}),
								(ne.prototype.CreateSignerEx = function (e, t, n, r, i) {
									var o
									if (
										'string' == typeof e ||
										null != (e = this._base64Encode(e, i))
									)
										return (
											(o = this._funcMakeParams([e, t, n])),
											this._funcCall('CreateSignerEx', o, r, i, null)
										)
								}),
								(ne.prototype.AppendSigner = function (e, t, n, r, i) {
									var o,
										s = []
									return (
										s.push(e),
										null != t ? s.push(new S(t)) : s.push(null),
										s.push(n),
										(o = this._funcMakeParams(s)),
										this._funcCall('AppendSigner', o, r, i, null)
									)
								}),
								(ne.prototype.AppendValidationDataToSignerEx = function (
									e,
									t,
									n,
									r,
									i
								) {
									var o,
										s = []
									if (
										'string' == typeof e ||
										null != (e = this._base64Encode(e, i))
									)
										return (
											s.push(e),
											null != t ? s.push(new S(t)) : s.push(null),
											s.push(n),
											(o = this._funcMakeParams(s)),
											this._funcCall(
												'AppendValidationDataToSignerEx',
												o,
												r,
												i,
												null
											)
										)
								}),
								(ne.prototype.IsDataInSignedDataAvailable = function (e, t, n) {
									var r
									if (
										'string' == typeof e ||
										null != (e = this._base64Encode(e, n))
									)
										return (
											(r = this._funcMakeParams([e])),
											this._funcCall(
												'IsDataInSignedDataAvailable',
												r,
												t,
												n,
												null
											)
										)
								}),
								(ne.prototype.IsDataInSignedFileAvailable = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('IsDataInSignedFileAvailable', r, t, n, null)
									)
								}),
								(ne.prototype.GetDataFromSignedData = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('GetDataFromSignedData', r, t, n, null)
									)
								}),
								(ne.prototype.GetDataFromSignedFile = function (e, t, n, r) {
									var i
									;(i = this._funcMakeParams([e, t])),
										this._funcCall('GetDataFromSignedFile', i, n, r, null)
								}),
								(ne.prototype.GetCertificateFromSignedData = function (
									e,
									t,
									n,
									r
								) {
									var i
									if (
										'string' == typeof t ||
										null != (t = this._base64Encode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, t])),
											this._funcCall(
												'GetCertificateFromSignedData',
												i,
												n,
												r,
												null
											)
										)
								}),
								(ne.prototype.GetCertificateFromSignedFile = function (
									e,
									t,
									n,
									r
								) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall(
											'GetCertificateFromSignedFile',
											i,
											n,
											r,
											null
										)
									)
								}),
								(ne.prototype.GetSignTimeInfo = function (e, t, n, r) {
									var i
									if (
										'string' == typeof t ||
										null != (t = this._base64Encode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, t])),
											this._funcCall('GetSignTimeInfo', i, n, r, null)
										)
								}),
								(ne.prototype.GetFileSignTimeInfo = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('GetFileSignTimeInfo', i, n, r, null)
									)
								}),
								(ne.prototype.VerifyHashOnTime = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									return this.VerifyHashOnTimeEx(
										e,
										t,
										n,
										r,
										null != r,
										!1,
										i,
										o,
										s
									)
								}),
								(ne.prototype.VerifyHashOnTimeEx = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u
								) {
									var l,
										c = []
									if (
										('boolean' != typeof s && ((u = a), (a = s)),
										!(
											('string' != typeof e &&
												null == (e = this._base64Encode(e, u))) ||
											('string' != typeof n &&
												null == (n = this._base64Encode(n, u)))
										))
									)
										return (
											(c = [e, t, n, r, i, o]),
											'boolean' == typeof s ? c.push(s) : c.push(null),
											(l = this._funcMakeParams(c)),
											this._funcCall('VerifyHashOnTimeEx', l, a, u, null)
										)
								}),
								(ne.prototype.VerifyDataOnTime = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									return this.VerifyDataOnTimeEx(
										e,
										t,
										n,
										r,
										null != r,
										!1,
										i,
										o,
										s
									)
								}),
								(ne.prototype.VerifyDataOnTimeEx = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u
								) {
									var l,
										c = []
									if (
										('boolean' != typeof s && ((u = a), (a = s)),
										!(
											('string' == typeof e &&
												null == (e = this._stringToBytes(e, u))) ||
											('string' != typeof n &&
												null == (n = this._base64Encode(n, u)))
										))
									)
										return (
											(c = [new S(e), t, n, r, i, o]),
											'boolean' == typeof s ? c.push(s) : c.push(null),
											(l = this._funcMakeParams(c)),
											this._funcCall('VerifyDataOnTimeEx', l, a, u, null)
										)
								}),
								(ne.prototype.VerifyDataInternalOnTime = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									return this.VerifyDataInternalOnTimeEx(
										e,
										t,
										n,
										null != n,
										!1,
										r,
										i,
										o
									)
								}),
								(ne.prototype.VerifyDataInternalOnTimeEx = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a
								) {
									var u,
										l = []
									if (
										('boolean' != typeof o && ((a = s), (s = o)),
										'string' == typeof e ||
											null != (e = this._base64Encode(e, a)))
									)
										return (
											(l = [e, t, n, r, i]),
											'boolean' == typeof o ? l.push(o) : l.push(null),
											(u = this._funcMakeParams(l)),
											this._funcCall(
												'VerifyDataInternalOnTimeEx',
												u,
												s,
												a,
												null
											)
										)
								}),
								(ne.prototype.VerifyDataInternalOnTimeString = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									return this.VerifyDataInternalOnTimeStringEx(
										e,
										t,
										n,
										null != n,
										!1,
										r,
										i,
										o
									)
								}),
								(ne.prototype.VerifyDataInternalOnTimeStringEx = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a
								) {
									var u = this
									if (
										('boolean' != typeof o && ((a = s), (s = o)),
										!this.IsAsync(s, a))
									) {
										var l = this.VerifyDataInternalOnTimeEx(e, t, n, r, i, o)
										return this.BytesToString(l)
									}
									this.VerifyDataInternalOnTimeEx(
										e,
										t,
										n,
										r,
										i,
										o,
										function (e) {
											u.BytesToString(e, s, a)
										},
										a
									)
								}),
								(ne.prototype.VerifyDataOnTimeBegin = function (e, t, n, r, i) {
									this.VerifyDataOnTimeBeginEx(e, t, n, null != n, !1, r, i)
								}),
								(ne.prototype.VerifyDataOnTimeBeginEx = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									var a
									;(a = this._funcMakeParams([e, t, n, r, i])),
										this._funcCall('VerifyDataOnTimeBeginEx', a, o, s, null)
								}),
								(ne.prototype.VerifyFileOnTime = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u
								) {
									var l,
										c = []
									return (
										'boolean' != typeof s && ((u = a), (a = s)),
										(c = [e, t, n, r, i, o]),
										'boolean' == typeof s ? c.push(s) : c.push(null),
										(l = this._funcMakeParams(c)),
										this._funcCall('VerifyFileOnTimeEx', l, a, u, null)
									)
								}),
								(ne.prototype.VerifyFileWithExternalSignOnTime = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									return this.VerifyFileOnTime(
										e,
										n,
										t,
										r,
										null != r,
										!1,
										i,
										o,
										s
									)
								}),
								(ne.prototype.VerifyFileWithExternalSignOnTimeEx = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u
								) {
									return this.VerifyFileOnTime(e, n, t, r, i, o, s, a, u)
								}),
								(ne.prototype.VerifyFileWithInternalSignOnTime = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									return this.VerifyFileOnTime(
										e,
										t,
										n,
										r,
										null != r,
										!1,
										i,
										o,
										s
									)
								}),
								(ne.prototype.VerifyFileWithInternalSignOnTimeEx = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u
								) {
									return this.VerifyFileOnTime(e, n, t, r, i, o, s, a, u)
								}),
								(ne.prototype.ContinueSignCtx = function (e, t, n, r) {
									var i
									if (
										(null == e && (e = new H()),
										'string' != typeof t ||
											null != (t = this._stringToBytes(t, r)))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('ContinueSignCtx', i, n, r, null)
										)
								}),
								(ne.prototype.ContinueSignCtxWithOffset = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									return (
										(t = t.slice(n, n + r)), this.ContinueSignCtx(e, t, i, o)
									)
								}),
								(ne.prototype.EndSignCtx = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('EndSignCtx', i, n, r, null)
									)
								}),
								(ne.prototype.BeginVerifyCtx = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('BeginVerifyCtx', r, t, n, null)
									)
								}),
								(ne.prototype.ContinueVerifyCtx = function (e, t, n, r, i, o) {
									var s
									;('number' == typeof n && 'number' == typeof r) ||
										((i = n), (o = r)),
										('string' == typeof t &&
											null == (t = this._stringToBytes(t, o))) ||
											('number' == typeof n &&
												'number' == typeof r &&
												(t = t.slice(n, n + r)),
											(s = this._funcMakeParams([e, new S(t)])),
											this._funcCall('ContinueVerifyCtx', s, i, o, null))
								}),
								(ne.prototype.EndVerifyCtx = function (e, t, n, r) {
									var i,
										o = []
									return (
										'boolean' != typeof t && (r = n = t),
										o.push(e),
										'boolean' == typeof t ? o.push(t) : o.push(null),
										(i = this._funcMakeParams(o)),
										this._funcCall('EndVerifyCtx', i, n, r, null)
									)
								}),
								(ne.prototype.ResetOperationCtx = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('ResetOperationCtx', r, t, n, null)
								}),
								(ne.prototype.SignHashRSA = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('SignHashRSA', r, t, n, null)
									)
								}),
								(ne.prototype.SignRSA = function (e, t, n, r, i) {
									var o
									if (
										'string' != typeof e ||
										null != (e = this._stringToBytes(e, i))
									)
										return (
											(o = this._funcMakeParams([new S(e), t, n])),
											this._funcCall('SignRSA', o, r, i, null)
										)
								}),
								(ne.prototype.ContinueRSASign = function (e, t, n) {
									var r
									;('string' == typeof e &&
										null == (e = this._stringToBytes(e, n))) ||
										((r = this._funcMakeParams([new S(e)])),
										this._funcCall('ContinueRSASign', r, t, n, null))
								}),
								(ne.prototype.ContinueRSASignWithOffset = function (
									e,
									t,
									n,
									r,
									i
								) {
									return (e = e.slice(t, t + n)), this.ContinueRSASign(e, r, i)
								}),
								(ne.prototype.EndRSASign = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('EndRSASign', r, t, n, null)
									)
								}),
								(ne.prototype.SignRSAFile = function (e, t, n, r, i) {
									var o
									return (
										(o = this._funcMakeParams([e, t, n])),
										this._funcCall('SignRSAFile', o, r, i, null)
									)
								}),
								(ne.prototype.ContinueRSASignCtx = function (e, t, n, r) {
									var i
									if (
										(null == e && (e = new H()),
										'string' != typeof t ||
											null != (t = this._stringToBytes(t, r)))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('ContinueRSASignCtx', i, n, r, null)
										)
								}),
								(ne.prototype.ContinueRSASignCtxWithOffset = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									return (
										(t = t.slice(n, n + r)), this.ContinueRSASignCtx(t, i, o)
									)
								}),
								(ne.prototype.EndRSASignCtx = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('EndRSASignCtx', i, n, r, null)
									)
								}),
								(ne.prototype.SignECDSA = function (e, t, n, r, i) {
									var o
									if (
										'string' != typeof e ||
										null != (e = this._stringToBytes(e, i))
									)
										return (
											(o = this._funcMakeParams([new S(e), t, n])),
											this._funcCall('SignECDSA', o, r, i, null)
										)
								}),
								(ne.prototype.RawSign = function (e, t, n) {
									var r
									if (
										'string' != typeof e ||
										null != (e = this._stringToBytes(e, n))
									)
										return (
											(r = this._funcMakeParams([new S(e)])),
											this._funcCall('RawSign', r, t, n, null)
										)
								}),
								(ne.prototype.RawVerify = function (e, t, n, r, i) {
									var o,
										s = []
									if (
										('boolean' != typeof n && ((i = r), (r = n)),
										'string' != typeof t ||
											null != (t = this._stringToBytes(t, i)))
									)
										return (
											s.push(e),
											s.push(new S(t)),
											'boolean' == typeof n ? s.push(n) : s.push(null),
											(o = this._funcMakeParams(s)),
											this._funcCall('RawVerify', o, r, i, null)
										)
								}),
								(ne.prototype.RawSignHash = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('RawSignHash', r, t, n, null)
									)
								}),
								(ne.prototype.RawVerifyHash = function (e, t, n, r, i) {
									var o,
										s = []
									return (
										'boolean' != typeof n && ((i = r), (r = n)),
										s.push(e),
										s.push(t),
										'boolean' == typeof n ? s.push(n) : s.push(null),
										(o = this._funcMakeParams(s)),
										this._funcCall('RawVerifyHash', o, r, i, null)
									)
								}),
								(ne.prototype.RawSignFile = function (e, t, n, r) {
									var i
									;(i = this._funcMakeParams([e, t])),
										this._funcCall('RawSignFile', i, n, r, null)
								}),
								(ne.prototype.RawVerifyFile = function (e, t, n, r, i) {
									var o,
										s = []
									return (
										'boolean' != typeof n && ((i = r), (r = n)),
										s.push(e),
										s.push(t),
										'boolean' == typeof n ? s.push(n) : s.push(null),
										(o = this._funcMakeParams(s)),
										this._funcCall('RawVerifyFile', o, r, i, null)
									)
								}),
								(ne.prototype.NBUSign = function (e, t, n, r) {
									var i
									if (
										'string' != typeof e ||
										null != (e = this._stringToBytes(e, r))
									)
										return (
											(i = this._funcMakeParams([new S(e), t])),
											this._funcCall('NBUSign', i, n, r, null)
										)
								}),
								(ne.prototype.NBUVerify = function (e, t, n, r, i, o, s) {
									var a,
										u = []
									if (
										('boolean' != typeof i && ((s = o), (o = i)),
										'string' != typeof n ||
											null != (n = this._stringToBytes(n, s)))
									)
										return (
											u.push(e),
											u.push(t),
											u.push(new S(n)),
											u.push(r),
											'boolean' == typeof i ? u.push(i) : u.push(null),
											(a = this._funcMakeParams(u)),
											this._funcCall('NBUVerify', a, o, s, null)
										)
								}),
								(ne.prototype.CtxSignHash = function (e, t, n, r, i, o) {
									var s
									if (
										'string' == typeof n ||
										null != (n = this._base64Encode(n, o))
									)
										return (
											(s = this._funcMakeParams([e, t, n, r])),
											this._funcCall('CtxSignHash', s, i, o, null)
										)
								}),
								(ne.prototype.CtxSign = function (e, t, n, r, i, o, s) {
									var a
									if (
										'string' != typeof n ||
										null != (n = this._stringToBytes(n, s))
									)
										return (
											(a = this._funcMakeParams([e, t, new S(n), r, i])),
											this._funcCall('CtxSign', a, o, s, null)
										)
								}),
								(ne.prototype.CtxSignFile = function (e, t, n, r, i, o, s, a) {
									var u
									;(u = this._funcMakeParams([e, t, n, r, i, o])),
										this._funcCall('CtxSignFile', u, s, a, null)
								}),
								(ne.prototype.CtxAppendSignHash = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									var a
									if (
										!(
											('string' != typeof n &&
												null == (n = this._base64Encode(n, s))) ||
											('string' != typeof r &&
												null == (r = this._base64Encode(r, s)))
										)
									)
										return (
											(a = this._funcMakeParams([e, t, n, r, i])),
											this._funcCall('CtxAppendSignHash', a, o, s, null)
										)
								}),
								(ne.prototype.CtxAppendSign = function (e, t, n, r, i, o, s) {
									var a
									if (
										!(
											(null != n &&
												'string' == typeof n &&
												null == (n = this._stringToBytes(n, s))) ||
											('string' != typeof r &&
												null == (r = this._base64Encode(r, s)))
										)
									)
										return (
											(a = this._funcMakeParams([
												e,
												t,
												n ? new S(n) : null,
												r,
												i,
											])),
											this._funcCall('CtxAppendSign', a, o, s, null)
										)
								}),
								(ne.prototype.CtxAppendSignFile = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a
								) {
									var u
									;(u = this._funcMakeParams([e, t, n, r, i, o])),
										this._funcCall('CtxAppendSignFile', u, s, a, null)
								}),
								(ne.prototype.CtxGetSignValue = function (e, t, n, r, i) {
									var o
									if (
										'string' == typeof n ||
										null != (n = this._base64Encode(n, i))
									)
										return (
											(o = this._funcMakeParams([e, t, n])),
											this._funcCall('CtxGetSignValue', o, r, i, null)
										)
								}),
								(ne.prototype.CtxCreateSignerEx = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									var a
									if (
										'string' == typeof n ||
										null != (n = this._base64Encode(n, s))
									)
										return (
											(a = this._funcMakeParams([e, t, n, r, i])),
											this._funcCall('CtxCreateSignerEx', a, o, s, null)
										)
								}),
								(ne.prototype.ShowSenderInfo = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('ShowSenderInfo', r, t, n, null)
									)
								}),
								(ne.prototype.IsEnveloped = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([new S(e)])),
										this._funcCall('IsEnveloped', r, t, n, null)
									)
								}),
								(ne.prototype.IsEnvelopedFile = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('IsEnvelopedFile', r, t, n, null)
									)
								}),
								(ne.prototype.Envelop = function (e, t, n, r, i, o) {
									var s
									if (
										'string' != typeof r ||
										null != (r = this._stringToBytes(r, o))
									)
										return (
											(s = this._funcMakeParams([e, t, n, new S(r)])),
											this._funcCall('Envelop', s, i, o, null)
										)
								}),
								(ne.prototype.Develop = function (e, t, n, r) {
									var i,
										o = []
									if (
										('boolean' != typeof t && ((r = n), (n = t)),
										'string' == typeof e ||
											null != (e = this._base64Encode(e, r)))
									)
										return (
											o.push(e),
											'boolean' == typeof t ? o.push(t) : o.push(null),
											(i = this._funcMakeParams(o)),
											this._funcCall('Develop', i, n, r, null)
										)
								}),
								(ne.prototype.EnvelopFile = function (e, t, n, r, i, o, s) {
									var a
									;(a = this._funcMakeParams([e, t, n, r, i])),
										this._funcCall('EnvelopFile', a, o, s, null)
								}),
								(ne.prototype.DevelopFile = function (e, t, n, r, i) {
									var o,
										s = []
									return (
										'boolean' != typeof n && ((i = r), (r = n)),
										s.push(e),
										s.push(t),
										'boolean' == typeof n ? s.push(n) : s.push(null),
										(o = this._funcMakeParams(s)),
										this._funcCall('DevelopFile', o, r, i, null)
									)
								}),
								(ne.prototype.EnvelopEx = function (e, t, n, r, i, o) {
									var s
									if (
										('EndUserArrayList' == e.className && (e = e.m_array),
										'EndUserArrayList' == t.className && (t = t.m_array),
										'string' != typeof r ||
											null != (r = this._stringToBytes(r, o)))
									)
										return (
											(s = this._funcMakeParams([e, t, n, new S(r)])),
											this._funcCall('EnvelopEx', s, i, o, null)
										)
								}),
								(ne.prototype.DevelopEx = function (e, t, n, r, i) {
									var o,
										s = []
									if (
										('boolean' != typeof n && ((i = r), (r = n)),
										'string' == typeof e ||
											null != (e = this._base64Encode(e, i)))
									)
										return (
											s.push(e),
											s.push(t ? new S(t) : null),
											'boolean' == typeof n ? s.push(n) : s.push(null),
											(o = this._funcMakeParams(s)),
											this._funcCall('DevelopEx', o, r, i, null)
										)
								}),
								(ne.prototype.EnvelopFileEx = function (e, t, n, r, i, o, s) {
									var a
									'EndUserArrayList' == e.className && (e = e.m_array),
										'EndUserArrayList' == t.className && (t = t.m_array),
										(a = this._funcMakeParams([e, t, n, r, i])),
										this._funcCall('EnvelopFileEx', a, o, s, null)
								}),
								(ne.prototype.EnvelopToRecipients = function (e, t, n, r, i) {
									var o
									'EndUserArrayList' == e.className && (e = e.m_array)
									for (var s = [], a = 0; a < e.length; a++) s.push(new S(e[a]))
									if (
										'string' != typeof n ||
										null != (n = this._stringToBytes(n, i))
									)
										return (
											(o = this._funcMakeParams([s, t, new S(n)])),
											this._funcCall('EnvelopToRecipients', o, r, i, null)
										)
								}),
								(ne.prototype.EnvelopFileToRecipients = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									var s
									'EndUserArrayList' == e.className && (e = e.m_array)
									for (var a = [], u = 0; u < e.length; u++) a.push(new S(e[u]))
									;(s = this._funcMakeParams([a, t, n, r])),
										this._funcCall('EnvelopFileToRecipients', s, i, o, null)
								}),
								(ne.prototype.EnvelopToRecipientsEx = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									var s
									'EndUserArrayList' == e.className && (e = e.m_array)
									for (var a = [], u = 0; u < e.length; u++) a.push(new S(e[u]))
									if (
										'string' != typeof r ||
										null != (r = this._stringToBytes(r, o))
									)
										return (
											(s = this._funcMakeParams([a, t, n, new S(r)])),
											this._funcCall('EnvelopToRecipientsEx', s, i, o, null)
										)
								}),
								(ne.prototype.EnvelopFileToRecipientsEx = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									var a
									'EndUserArrayList' == e.className && (e = e.m_array)
									for (var u = [], l = 0; l < e.length; l++) u.push(new S(e[l]))
									;(a = this._funcMakeParams([u, t, n, r, i])),
										this._funcCall('EnvelopFileToRecipientsEx', a, o, s, null)
								}),
								(ne.prototype.EnvelopToRecipientsWithOCode = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									var s
									if (
										'string' != typeof r ||
										null != (r = this._stringToBytes(r, o))
									)
										return (
											(s = this._funcMakeParams([e, t, n, new S(r)])),
											this._funcCall(
												'EnvelopToRecipientsWithOCode',
												s,
												i,
												o,
												null
											)
										)
								}),
								(ne.prototype.EnvelopExWithDynamicKey = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									var a
									if (
										('EndUserArrayList' == e.className && (e = e.m_array),
										'EndUserArrayList' == t.className && (t = t.m_array),
										'string' != typeof i ||
											null != (i = this._stringToBytes(i, s)))
									)
										return (
											(a = this._funcMakeParams([e, t, n, r, new S(i)])),
											this._funcCall('EnvelopExWithDynamicKey', a, o, s, null)
										)
								}),
								(ne.prototype.EnvelopFileExWithDynamicKey = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a
								) {
									var u
									'EndUserArrayList' == e.className && (e = e.m_array),
										'EndUserArrayList' == t.className && (t = t.m_array),
										(u = this._funcMakeParams([e, t, n, r, i, o])),
										this._funcCall('EnvelopFileExWithDynamicKey', u, s, a, null)
								}),
								(ne.prototype.EnvelopToRecipientsWithDynamicKey = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									var s
									'EndUserArrayList' == e.className && (e = e.m_array)
									for (var a = [], u = 0; u < e.length; u++) a.push(new S(e[u]))
									if (
										'string' != typeof r ||
										null != (r = this._stringToBytes(r, o))
									)
										return (
											(s = this._funcMakeParams([a, t, n, new S(r)])),
											this._funcCall(
												'EnvelopToRecipientsWithDynamicKey',
												s,
												i,
												o,
												null
											)
										)
								}),
								(ne.prototype.EnvelopFileToRecipientsWithDynamicKey = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									var a
									'EndUserArrayList' == e.className && (e = e.m_array)
									for (var u = [], l = 0; l < e.length; l++) u.push(new S(e[l]))
									;(a = this._funcMakeParams([u, t, n, r, i])),
										this._funcCall(
											'EnvelopFileToRecipientsWithDynamicKey',
											a,
											o,
											s,
											null
										)
								}),
								(ne.prototype.EnvelopToRecipientsWithSettings = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u
								) {
									var l
									if (
										'string' != typeof n ||
										null != (n = this._stringToBytes(n, u))
									) {
										'EndUserArrayList' == e.className && (e = e.m_array)
										for (var c = [], p = 0; p < e.length; p++)
											c.push(new S(e[p]))
										return (
											(l = this._funcMakeParams([c, t, new S(n), r, i, o, s])),
											this._funcCall(
												'EnvelopToRecipientsWithSettings',
												l,
												a,
												u,
												null
											)
										)
									}
								}),
								(ne.prototype.RawEnvelop = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._stringToBytes(t, r))
									)
										return (
											(i = this._funcMakeParams([new S(e), new S(t)])),
											this._funcCall('RawEnvelop', i, n, r, null)
										)
								}),
								(ne.prototype.RawDevelop = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('RawDevelop', i, n, r, null)
									)
								}),
								(ne.prototype.EnvelopRSA = function (e, t, n, r, i, o, s) {
									return this.EnvelopRSAEx(e, [t], [n], r, i, o, s)
								}),
								(ne.prototype.EnvelopFileRSA = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a
								) {
									this.EnvelopFileRSAEx(e, [t], [n], r, i, o, s, a)
								}),
								(ne.prototype.EnvelopRSAEx = function (e, t, n, r, i, o, s) {
									var a
									if (
										('EndUserArrayList' == t.className && (t = t.m_array),
										'EndUserArrayList' == n.className && (n = n.m_array),
										'string' != typeof i ||
											null != (i = this._stringToBytes(i, s)))
									)
										return (
											(a = this._funcMakeParams([e, t, n, r, new S(i)])),
											this._funcCall('EnvelopRSAEx', a, o, s, null)
										)
								}),
								(ne.prototype.EnvelopFileRSAEx = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a
								) {
									var u
									'EndUserArrayList' == t.className && (t = t.m_array),
										'EndUserArrayList' == n.className && (n = n.m_array),
										(u = this._funcMakeParams([e, t, n, r, i, o])),
										this._funcCall('EnvelopFileRSAEx', u, s, a, null)
								}),
								(ne.prototype.EnvelopToRecipientsRSA = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									var s
									'EndUserArrayList' == t.className && (t = t.m_array)
									for (var a = [], u = 0; u < t.length; u++) a.push(new S(t[u]))
									if (
										'string' != typeof r ||
										null != (r = this._stringToBytes(r, o))
									)
										return (
											(s = this._funcMakeParams([e, a, n, new S(r)])),
											this._funcCall('EnvelopToRecipientsRSA', s, i, o, null)
										)
								}),
								(ne.prototype.EnvelopFileToRecipientsRSA = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									var a
									'EndUserArrayList' == t.className && (t = t.m_array)
									for (var u = [], l = 0; l < t.length; l++) u.push(new S(t[l]))
									;(a = this._funcMakeParams([e, u, n, r, i])),
										this._funcCall('EnvelopFileToRecipientsRSA', a, o, s, null)
								}),
								(ne.prototype.CtxEnvelop = function (e, t, n, r, i, o, s, a) {
									var u
									if (
										'string' != typeof o ||
										null != (o = this._stringToBytes(o, a))
									) {
										'EndUserArrayList' == t.className && (t = t.m_array)
										for (var l = [], c = 0; c < t.length; c++)
											l.push(new S(t[c]))
										return (
											(u = this._funcMakeParams([e, l, n, r, i, new S(o)])),
											this._funcCall('CtxEnvelop', u, s, a, null)
										)
									}
								}),
								(ne.prototype.CtxEnvelopFile = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u
								) {
									var l
									'EndUserArrayList' == t.className && (t = t.m_array)
									for (var c = [], p = 0; p < t.length; p++) c.push(new S(t[p]))
									;(l = this._funcMakeParams([e, c, n, r, i, o, s])),
										this._funcCall('CtxEnvelopFile', l, a, u, null)
								}),
								(ne.prototype.CtxEnvelopWithDynamicKey = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a
								) {
									var u
									if (
										'string' != typeof o ||
										null != (o = this._stringToBytes(o, a))
									) {
										'EndUserArrayList' == t.className && (t = t.m_array)
										for (var l = [], c = 0; c < t.length; c++)
											l.push(new S(t[c]))
										return (
											(u = this._funcMakeParams([e, l, n, r, i, new S(o)])),
											this._funcCall('CtxEnvelopWithDynamicKey', u, s, a, null)
										)
									}
								}),
								(ne.prototype.CtxEnvelopFileWithDynamicKey = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u
								) {
									var l
									'EndUserArrayList' == t.className && (t = t.m_array)
									for (var c = [], p = 0; p < t.length; p++) c.push(new S(t[p]))
									;(l = this._funcMakeParams([e, c, n, r, i, o, s])),
										this._funcCall(
											'CtxEnvelopFileWithDynamicKey',
											l,
											a,
											u,
											null
										)
								}),
								(ne.prototype.CtxDevelop = function (e, t, n, r, i, o) {
									var s,
										a = []
									if (
										('boolean' != typeof r && ((o = i), (i = r)),
										'string' == typeof t ||
											null != (t = this._base64Encode(t, o)))
									)
										return (
											a.push(e),
											a.push(t),
											a.push(n ? new S(n) : null),
											'boolean' == typeof r ? a.push(r) : a.push(null),
											(s = this._funcMakeParams(a)),
											this._funcCall('CtxDevelop', s, i, o, null)
										)
								}),
								(ne.prototype.CtxDevelopFile = function (e, t, n, r, i, o, s) {
									var a,
										u = []
									return (
										'boolean' != typeof i && ((s = o), (o = i)),
										u.push(e),
										u.push(t),
										u.push(n ? new S(n) : null),
										u.push(r),
										'boolean' == typeof i ? u.push(i) : u.push(null),
										(a = this._funcMakeParams(u)),
										this._funcCall('CtxDevelopFile', a, o, s, null)
									)
								}),
								(ne.prototype.CtxCreateAuthData = function (e, t, n, r, i) {
									var o
									if (
										'string' != typeof n ||
										null != (n = this._stringToBytes(n, i))
									)
										return (
											(o = this._funcMakeParams([e, new S(t), new S(n)])),
											this._funcCall('CtxCreateAuthData', o, r, i, null)
										)
								}),
								(ne.prototype.ProtectDataByPassword = function (e, t, n, r) {
									var i
									if (
										'string' != typeof e ||
										null != (e = this._stringToBytes(e, r))
									)
										return (
											(i = this._funcMakeParams([new S(e), t])),
											this._funcCall('ProtectDataByPassword', i, n, r, null)
										)
								}),
								(ne.prototype.UnprotectDataByPassword = function (e, t, n, r) {
									var i
									if (
										'string' == typeof e ||
										null != (e = this._base64Encode(e, r))
									)
										return (
											(i = this._funcMakeParams([e, t])),
											this._funcCall('UnprotectDataByPassword', i, n, r, null)
										)
								}),
								(ne.prototype.SessionIsInitialized = function (e, t, n) {
									var r
									return (
										e.SetData(null),
										(r = this._funcMakeParams([e])),
										this._funcCall('SessionIsInitialized', r, t, n, null)
									)
								}),
								(ne.prototype.SessionClose = function (e, t, n) {
									var r
									e.SetData(null),
										(r = this._funcMakeParams([e])),
										this._funcCall('SessionClose', r, t, n, null)
								}),
								(ne.prototype.ClientSessionCreateStep1 = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('ClientSessionCreateStep1', r, t, n, null)
									)
								}),
								(ne.prototype.ServerSessionCreateStep1 = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, new S(t)])),
										this._funcCall('ServerSessionCreateStep1', i, n, r, null)
									)
								}),
								(ne.prototype.ClientSessionCreateStep2 = function (e, t, n, r) {
									var i,
										o = this
									e.SetData(null),
										(i = this._funcMakeParams([e, new S(t)])),
										this._funcCall(
											'ClientSessionCreateStep2',
											i,
											n,
											r,
											function (t, n, r) {
												e.SetData(t.GetData()), o.IsAsync(n, r) && n()
											}
										)
								}),
								(ne.prototype.ServerSessionCreateStep2 = function (e, t, n, r) {
									var i
									e.SetData(null),
										(i = this._funcMakeParams([e, new S(t)])),
										this._funcCall('ServerSessionCreateStep2', i, n, r, null)
								}),
								(ne.prototype.SessionSave = function (e, t, n) {
									var r
									return (
										e.SetData(null),
										(r = this._funcMakeParams([e])),
										this._funcCall('SessionSave', r, t, n, null)
									)
								}),
								(ne.prototype.SessionLoad = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([new S(e)])),
										this._funcCall('SessionLoad', r, t, n, null)
									)
								}),
								(ne.prototype.SessionCheckCertificates = function (e, t, n) {
									var r
									return (
										e.SetData(null),
										(r = this._funcMakeParams([e])),
										this._funcCall('SessionCheckCertificates', r, t, n, null)
									)
								}),
								(ne.prototype.SessionEncrypt = function (e, t, n, r) {
									var i,
										o = !1,
										s = this
									if (
										'string' != typeof t ||
										((o = !0), null != (t = this._stringToBytes(t, r)))
									)
										return (
											e.SetData(null),
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall(
												'SessionEncrypt',
												i,
												n,
												r,
												o
													? function (e, t, n) {
															return s.BASE64Encode(e, t, n)
													  }
													: null
											)
										)
								}),
								(ne.prototype.SessionDecrypt = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											e.SetData(null),
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('SessionDecrypt', i, n, r, null)
										)
								}),
								(ne.prototype.SessionEncryptContinue = function (e, t, n, r) {
									var i,
										o = this,
										s = !1
									if (
										'string' != typeof t ||
										((s = !0), null != (t = this._stringToBytes(t, r)))
									)
										return (
											e.SetData(null),
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall(
												'SessionEncryptContinue',
												i,
												n,
												r,
												function (e, n, r) {
													if (s) return o.BASE64Encode(e, n, r)
													var i = o.IsAsync(n, r)
													if (!o._copyArrayData(t, e)) {
														var a = o.MakeError(ee.ERROR_BAD_PARAMETER, '')
														if (i) return void r(a)
														throw new te(a.errorCode, a.message)
													}
													if (!i) return t
													n(t)
												}
											)
										)
								}),
								(ne.prototype.SessionDecryptContinue = function (e, t, n, r) {
									var i,
										o = this
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											e.SetData(null),
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall(
												'SessionDecryptContinue',
												i,
												n,
												r,
												function (e, n, r) {
													var i = o.IsAsync(n, r)
													if (!o._copyArrayData(t, e)) {
														var s = o.MakeError(ee.ERROR_BAD_PARAMETER, '')
														if (i) return void r(s)
														throw new te(s.errorCode, s.message)
													}
													if (!i) return t
													n(t)
												}
											)
										)
								}),
								(ne.prototype.SessionGetPeerCertificateInfo = function (
									e,
									t,
									n
								) {
									var r
									return (
										e.SetData(null),
										(r = this._funcMakeParams([e])),
										this._funcCall(
											'SessionGetPeerCertificateInfo',
											r,
											t,
											n,
											null
										)
									)
								}),
								(ne.prototype.ClientDynamicKeySessionCreate = function (
									e,
									t,
									n,
									r,
									i
								) {
									var o,
										s = []
									return (
										('string' == typeof t && 'string' == typeof n) ||
											((i = r), (r = n)),
										s.push(e),
										'string' == typeof t && 'string' == typeof n
											? (s.push(t), s.push(n), s.push(null))
											: (s.push(null), s.push(null), s.push(new S(t))),
										(o = this._funcMakeParams(s)),
										this._funcCall(
											'ClientDynamicKeySessionCreate',
											o,
											r,
											i,
											null
										)
									)
								}),
								(ne.prototype.ServerDynamicKeySessionCreate = function (
									e,
									t,
									n,
									r
								) {
									var i
									return (
										(i = this._funcMakeParams([e, new S(t)])),
										this._funcCall(
											'ServerDynamicKeySessionCreate',
											i,
											n,
											r,
											null
										)
									)
								}),
								(ne.prototype.ClientDynamicKeySessionLoad = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([new S(e)])),
										this._funcCall('ClientDynamicKeySessionLoad', r, t, n, null)
									)
								}),
								(ne.prototype.SCClientIsRunning = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('SCClientIsRunning', n, e, t, null)
									)
								}),
								(ne.prototype.SCClientStart = function (e, t) {
									var n
									;(n = this._funcMakeParams(null)),
										this._funcCall('SCClientStart', n, e, t, null)
								}),
								(ne.prototype.SCClientStop = function (e, t) {
									var n
									;(n = this._funcMakeParams(null)),
										this._funcCall('SCClientStop', n, e, t, null)
								}),
								(ne.prototype.SCClientAddGate = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a
								) {
									var u
									'string' != typeof i &&
										((s = i), (a = o), (i = null), (o = null)),
										(u = this._funcMakeParams([e, t, n, r, i, o])),
										this._funcCall('SCClientAddGate', u, s, a, null)
								}),
								(ne.prototype.SCClientRemoveGate = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('SCClientRemoveGate', r, t, n, null)
								}),
								(ne.prototype.SCClientGetStatistic = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('SCClientGetStatistic', n, e, t, null)
									)
								}),
								(ne.prototype.AppendTransportHeader = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									var a
									return (
										(a = this._funcMakeParams([e, t, n, new S(r), new S(i)])),
										this._funcCall('AppendTransportHeader', a, o, s, null)
									)
								}),
								(ne.prototype.ParseTransportHeader = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([new S(e)])),
										this._funcCall('ParseTransportHeader', r, t, n, null)
									)
								}),
								(ne.prototype.AppendCryptoHeader = function (e, t, n, r, i) {
									var o
									return (
										(o = this._funcMakeParams([e, t, new S(n)])),
										this._funcCall('AppendCryptoHeader', o, r, i, null)
									)
								}),
								(ne.prototype.ParseCryptoHeader = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([new S(e)])),
										this._funcCall('ParseCryptoHeader', r, t, n, null)
									)
								}),
								(ne.prototype.AppendFileTransportHeader = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a
								) {
									var u
									;(u = this._funcMakeParams([e, t, n, new S(r), i, o])),
										this._funcCall('AppendFileTransportHeader', u, s, a, null)
								}),
								(ne.prototype.ParseFileTransportHeader = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('ParseFileTransportHeader', i, n, r, null)
									)
								}),
								(ne.prototype.AppendFileCryptoHeader = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									var s
									;(s = this._funcMakeParams([e, t, n, r])),
										this._funcCall('AppendFileCryptoHeader', s, i, o, null)
								}),
								(ne.prototype.ParseFileCryptoHeader = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('ParseFileCryptoHeader', i, n, r, null)
									)
								}),
								(ne.prototype.DevCtxEnum = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('DevCtxEnum', r, t, n, null)
									)
								}),
								(ne.prototype.DevCtxOpen = function (e, t, n, r, i) {
									var o
									return (
										(o = this._funcMakeParams([e, t, n])),
										this._funcCall('DevCtxOpen', o, r, i, null)
									)
								}),
								(ne.prototype.CreateDeviceContext = function () {
									return new $()
								}),
								(ne.prototype.DevCtxEnumVirtual = function (e, t, n) {
									var r,
										i = this
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall(
											'DevCtxEnumVirtual',
											r,
											t,
											n,
											function (t, n, r) {
												var o = i.IsAsync(n, r)
												try {
													if (null == t) {
														if (!o) return null
														n(null)
													}
													if ((e.set(t[1]), !o)) return t[0]
													n(t[0])
												} catch (e) {
													var s = i.MakeError(
														ee.ERROR_LIBRARY_COMUNICATION_FAILED,
														''
													)
													if (o) return void r(s)
													throw new te(s.errorCode, s.message)
												}
											}
										)
									)
								}),
								(ne.prototype.DevCtxClose = function (e, t, n) {
									var r
									return (
										(r = this._funcMakeParams([e])),
										this._funcCall('DevCtxClose', r, t, n, null)
									)
								}),
								(ne.prototype.DevCtxGetData = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('DevCtxGetData', i, n, r, null)
									)
								}),
								(ne.prototype.DevCtxChangePassword = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([e, t])),
										this._funcCall('DevCtxChangePassword', i, n, r, null)
									)
								}),
								(ne.prototype.GetHostInfo = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('GetHostInfo', n, e, t, null)
									)
								}),
								(ne.prototype.IsRemotelyControlled = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('IsRemotelyControlled', n, e, t, null)
									)
								}),
								(ne.prototype.CtxCreate = function (e, t) {
									var n
									return (
										(n = this._funcMakeParams(null)),
										this._funcCall('CtxCreate', n, e, t, null)
									)
								}),
								(ne.prototype.CtxFree = function (e, t, n) {
									var r
									;(r = this._funcMakeParams([e])),
										this._funcCall('CtxFree', r, t, n, null)
								}),
								(ne.prototype.CtxSetParameter = function (e, t, n, r, i) {
									var o
									'boolean' == typeof n && (n = n ? 1 : 0),
										(o = this._funcMakeParams([e, t, n])),
										this._funcCall('CtxSetParameter', o, r, i, null)
								}),
								(ne.prototype.CreateReference = function (e, t) {
									return new Z(e, t)
								}),
								(ne.prototype.ASiCGetASiCType = function (e, t, n) {
									var r
									if (
										'string' != typeof e ||
										null != (e = this._base64Decode(e, n))
									)
										return (
											(r = this._funcMakeParams([new S(e)])),
											this._funcCall('ASiCGetASiCType', r, t, n, null)
										)
								}),
								(ne.prototype.ASiCGetSignType = function (e, t, n) {
									var r
									if (
										'string' != typeof e ||
										null != (e = this._base64Decode(e, n))
									)
										return (
											(r = this._funcMakeParams([new S(e)])),
											this._funcCall('ASiCGetSignType', r, t, n, null)
										)
								}),
								(ne.prototype.ASiCGetSignsCount = function (e, t, n) {
									var r
									if (
										'string' != typeof e ||
										null != (e = this._base64Decode(e, n))
									)
										return (
											(r = this._funcMakeParams([new S(e)])),
											this._funcCall('ASiCGetSignsCount', r, t, n, null)
										)
								}),
								(ne.prototype.ASiCGetSignerInfo = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('ASiCGetSignerInfo', i, n, r, null)
										)
								}),
								(ne.prototype.ASiCGetSignTimeInfo = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('ASiCGetSignTimeInfo', i, n, r, null)
										)
								}),
								(ne.prototype.ASiCGetSignReferences = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('ASiCGetSignReferences', i, n, r, null)
										)
								}),
								(ne.prototype.ASiCGetReference = function (e, t, n, r) {
									var i
									if (
										'string' != typeof e ||
										null != (e = this._base64Decode(e, r))
									)
										return (
											(i = this._funcMakeParams([new S(e), t])),
											this._funcCall('ASiCGetReference', i, n, r, null)
										)
								}),
								(ne.prototype.ASiCSign = function (e, t, n, r, i, o) {
									for (var s, a = [], u = [], l = 0; l < r.length; l++)
										a.push(r[l].GetName()), u.push(new S(r[l].GetData()))
									return (
										(s = this._funcMakeParams([e, t, n, a, u])),
										this._funcCall('ASiCSign', s, i, o, null)
									)
								}),
								(ne.prototype.ASiCAppendSign = function (e, t, n, r, i) {
									var o
									if (
										'string' != typeof n ||
										null != (n = this._base64Decode(n, i))
									)
										return (
											(o = this._funcMakeParams([e, t, new S(n)])),
											this._funcCall('ASiCAppendSign', o, r, i, null)
										)
								}),
								(ne.prototype.ASiCVerify = function (e, t, n, r, i) {
									var o,
										s = []
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, i))
									)
										return (
											'boolean' != typeof n && ((i = r), (r = n)),
											s.push(e),
											s.push(new S(t)),
											'boolean' == typeof n ? s.push(n) : s.push(null),
											(o = this._funcMakeParams(s)),
											this._funcCall('ASiCVerify', o, r, i, null)
										)
								}),
								(ne.prototype.CtxASiCSign = function (e, t, n, r, i, o, s, a) {
									for (var u, l = [], c = [], p = 0; p < o.length; p++)
										l.push(o[p].GetName()), c.push(new S(o[p].GetData()))
									return (
										(u = this._funcMakeParams([e, t, n, r, i, l, c])),
										this._funcCall('CtxASiCSign', u, s, a, null)
									)
								}),
								(ne.prototype.CtxASiCAppendSign = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s
								) {
									var a
									if (
										'string' != typeof i ||
										null != (i = this._base64Decode(i, s))
									)
										return (
											(a = this._funcMakeParams([e, t, n, r, new S(i)])),
											this._funcCall('CtxASiCAppendSign', a, o, s, null)
										)
								}),
								(ne.prototype.CtxASiCGetSignerInfo = function (e, t, n, r, i) {
									var o
									if (
										'string' != typeof n ||
										null != (n = this._base64Decode(n, i))
									)
										return (
											(o = this._funcMakeParams([e, t, new S(n)])),
											this._funcCall('CtxASiCGetSignerInfo', o, r, i, null)
										)
								}),
								(ne.prototype.ASiCGetSignLevel = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('ASiCGetSignLevel', i, n, r, null)
										)
								}),
								(ne.prototype.ASiCIsAllContentCovered = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('ASiCIsAllContentCovered', i, n, r, null)
										)
								}),
								(ne.prototype.PDFGetSignType = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('PDFGetSignType', i, n, r, null)
										)
								}),
								(ne.prototype.PDFGetSignsCount = function (e, t, n) {
									var r
									if (
										'string' != typeof e ||
										null != (e = this._base64Decode(e, n))
									)
										return (
											(r = this._funcMakeParams([new S(e)])),
											this._funcCall('PDFGetSignsCount', r, t, n, null)
										)
								}),
								(ne.prototype.PDFGetSignerInfo = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('PDFGetSignerInfo', i, n, r, null)
										)
								}),
								(ne.prototype.PDFGetSignTimeInfo = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('PDFGetSignTimeInfo', i, n, r, null)
										)
								}),
								(ne.prototype.PDFSign = function (e, t, n, r) {
									var i
									return (
										(i = this._funcMakeParams([new S(e), t])),
										this._funcCall('PDFSign', i, n, r, null)
									)
								}),
								(ne.prototype.PDFVerify = function (e, t, n, r, i) {
									var o,
										s = []
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, i))
									)
										return (
											'boolean' != typeof n && ((i = r), (r = n)),
											s.push(e),
											s.push(new S(t)),
											'boolean' == typeof n ? s.push(n) : s.push(null),
											(o = this._funcMakeParams(s)),
											this._funcCall('PDFVerify', o, r, i, null)
										)
								}),
								(ne.prototype.CtxPDFSign = function (e, t, n, r, i, o) {
									var s
									return (
										(s = this._funcMakeParams([e, t, new S(n), r])),
										this._funcCall('CtxPDFSign', s, i, o, null)
									)
								}),
								(ne.prototype.CtxPDFGetSignerInfo = function (e, t, n, r, i) {
									var o
									if (
										'string' != typeof n ||
										null != (n = this._base64Decode(n, i))
									)
										return (
											(o = this._funcMakeParams([e, t, new S(n)])),
											this._funcCall('CtxPDFGetSignerInfo', o, r, i, null)
										)
								}),
								(ne.prototype.XAdESGetType = function (e, t, n) {
									var r
									if (
										'string' != typeof e ||
										null != (e = this._base64Decode(e, n))
									)
										return (
											(r = this._funcMakeParams([new S(e)])),
											this._funcCall('XAdESGetType', r, t, n, null)
										)
								}),
								(ne.prototype.XAdESGetSignsCount = function (e, t, n) {
									var r
									if (
										'string' != typeof e ||
										null != (e = this._base64Decode(e, n))
									)
										return (
											(r = this._funcMakeParams([new S(e)])),
											this._funcCall('XAdESGetSignsCount', r, t, n, null)
										)
								}),
								(ne.prototype.XAdESGetSignLevel = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('XAdESGetSignLevel', i, n, r, null)
										)
								}),
								(ne.prototype.XAdESGetSignerInfo = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('XAdESGetSignerInfo', i, n, r, null)
										)
								}),
								(ne.prototype.XAdESGetSignTimeInfo = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('XAdESGetSignTimeInfo', i, n, r, null)
										)
								}),
								(ne.prototype.XAdESGetSignReferences = function (e, t, n, r) {
									var i
									if (
										'string' != typeof t ||
										null != (t = this._base64Decode(t, r))
									)
										return (
											(i = this._funcMakeParams([e, new S(t)])),
											this._funcCall('XAdESGetSignReferences', i, n, r, null)
										)
								}),
								(ne.prototype.XAdESGetReference = function (e, t, n, r) {
									var i
									if (
										'string' != typeof e ||
										null != (e = this._base64Decode(e, r))
									)
										return (
											(i = this._funcMakeParams([new S(e), t])),
											this._funcCall('XAdESGetReference', i, n, r, null)
										)
								}),
								(ne.prototype.XAdESSign = function (e, t, n, r, i) {
									for (var o, s = [], a = [], u = 0; u < n.length; u++)
										s.push(n[u].GetName()), a.push(new S(n[u].GetData()))
									return (
										(o = this._funcMakeParams([e, t, s, a])),
										this._funcCall('XAdESSign', o, r, i, null)
									)
								}),
								(ne.prototype.XAdESVerify = function (e, t, n, r, i, o) {
									var s,
										a = [],
										u = null,
										l = null
									if (null != e) {
										;(u = []), (l = [])
										for (var c = 0; c < e.length; c++)
											u.push(e[c].GetName()), l.push(new S(e[c].GetData()))
									}
									if (
										'string' != typeof n ||
										null != (n = this._base64Decode(n, o))
									)
										return (
											'boolean' != typeof r && ((o = i), (i = r)),
											a.push(u),
											a.push(l),
											a.push(t),
											a.push(new S(n)),
											'boolean' == typeof r ? a.push(r) : a.push(null),
											(s = this._funcMakeParams(a)),
											this._funcCall('XAdESVerify', s, i, o, null)
										)
								}),
								(ne.prototype.CtxXAdESSign = function (e, t, n, r, i, o, s) {
									for (var a, u = [], l = [], c = 0; c < i.length; c++)
										u.push(i[c].GetName()), l.push(new S(i[c].GetData()))
									return (
										(a = this._funcMakeParams([e, t, n, r, u, l])),
										this._funcCall('CtxXAdESSign', a, o, s, null)
									)
								}),
								(ne.prototype.CtxXAdESGetSignerInfo = function (e, t, n, r, i) {
									var o
									if (
										'string' != typeof n ||
										null != (n = this._base64Decode(n, i))
									)
										return (
											(o = this._funcMakeParams([e, t, new S(n)])),
											this._funcCall('CtxXAdESGetSignerInfo', o, r, i, null)
										)
								}),
								(ne.prototype.SServerClientGeneratePrivateKeyAsync = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									c,
									p,
									_
								) {
									var f
									return (
										(f = this._funcMakeParams([
											e,
											t,
											n,
											r,
											i,
											o,
											s,
											a,
											u,
											l,
											c,
										])),
										this._funcCall(
											'SServerClientGeneratePrivateKeyAsync',
											f,
											p,
											_,
											null
										)
									)
								}),
								(ne.prototype.SServerClientCheckGeneratePrivateKeyStatus =
									function (e, t, n, r, i, o) {
										var s,
											a = this
										return (
											(s = this._funcMakeParams([e, t, n, r])),
											this._funcCall(
												'SServerClientCheckGeneratePrivateKeyStatus',
												s,
												i,
												o,
												function (e, t, n) {
													var r = a.IsAsync(t, n)
													try {
														for (var i = new _(), o = 0; o < e.length; o++)
															i.add(e[o])
														if ((0 == i.size() && (i = null), !r)) return i
														t(i)
													} catch (e) {
														var s = a.MakeError(
															ee.ERROR_LIBRARY_COMUNICATION_FAILED,
															''
														)
														if (r) return void n(s)
														throw new te(s.errorCode, s.message)
													}
												}
											)
										)
									}),
								(ne.prototype.SServerClientSignHashAsync = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u
								) {
									var l
									if (
										'string' == typeof o ||
										null != (o = this._base64Encode(o, u))
									)
										return (
											(l = this._funcMakeParams([e, t, n, r, i, o, s])),
											this._funcCall(
												'SServerClientSignHashAsync',
												l,
												a,
												u,
												null
											)
										)
								}),
								(ne.prototype.SServerClientCheckSignHashStatus = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									var s
									return (
										(s = this._funcMakeParams([e, t, n, r])),
										this._funcCall(
											'SServerClientCheckSignHashStatus',
											s,
											i,
											o,
											null
										)
									)
								}),
								(ne.prototype.SServerClientSignHashesAsync = function (
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l
								) {
									var c
									return (
										'EndUserArrayList' == o.className && (o = o.m_array),
										'EndUserArrayList' == s.className && (s = s.m_array),
										(c = this._funcMakeParams([e, t, n, r, i, o, s, a])),
										this._funcCall(
											'SServerClientSignHashesAsync',
											c,
											u,
											l,
											null
										)
									)
								}),
								(ne.prototype.SServerClientCheckSignHashesStatus = function (
									e,
									t,
									n,
									r,
									i,
									o
								) {
									var s,
										a = this
									return (
										(s = this._funcMakeParams([e, t, n, r])),
										this._funcCall(
											'SServerClientCheckSignHashesStatus',
											s,
											i,
											o,
											function (e, t, n) {
												var r = a.IsAsync(t, n)
												try {
													for (var i = new _(), o = 0; o < e.length; o++)
														i.add(e[o])
													if ((0 == i.size() && (i = null), !r)) return i
													t(i)
												} catch (e) {
													var s = a.MakeError(
														ee.ERROR_LIBRARY_COMUNICATION_FAILED,
														''
													)
													if (r) return void n(s)
													throw new te(s.errorCode, s.message)
												}
											}
										)
									)
								}),
								{
									EndUserLibraryLoader: p,
									EUSignCP: ne,
									EndUserError: ee,
								}
							)
						})
							? r.apply(t, [])
							: r) || (e.exports = i)
			},
			function (e, t, n) {
				'use strict'
				n.r(t),
					n.d(t, 'CASettings', function () {
						return s.a
					}),
					n.d(t, 'KSPSettings', function () {
						return s.d
					}),
					n.d(t, 'EndUserError', function () {
						return i
					}),
					n.d(t, 'EndUserConstants', function () {
						return E
					}),
					n.d(t, 'EndUserEvents', function () {
						return r
					}),
					n.d(t, 'EndUserLibraryInfoJS', function () {
						return o.a
					}),
					n.d(t, 'EndUserLibraryInfoSW', function () {
						return o.b
					}),
					n.d(t, 'EndUserSettings', function () {
						return s.c
					}),
					n.d(t, 'EndUserProxySettings', function () {
						return s.b
					}),
					n.d(t, 'EndUserOwnerInfo', function () {
						return a.a
					}),
					n.d(t, 'EndUserCertificateInfoEx', function () {
						return u.a
					}),
					n.d(t, 'EndUserCertificate', function () {
						return l
					}),
					n.d(t, 'EndUserKeyMedia', function () {
						return c
					}),
					n.d(t, 'EndUserJKSPrivateKeyInfo', function () {
						return p.a
					}),
					n.d(t, 'EndUserContext', function () {
						return _
					}),
					n.d(t, 'EndUserPrivateKeyContext', function () {
						return f
					}),
					n.d(t, 'EndUserTimeInfo', function () {
						return S.a
					}),
					n.d(t, 'EndUserSignContainerInfo', function () {
						return d.a
					}),
					n.d(t, 'EndUserSignInfo', function () {
						return y.a
					}),
					n.d(t, 'EndUserSenderInfo', function () {
						return C.a
					}),
					n.d(t, 'EndUserParams', function () {
						return T.a
					}),
					n.d(t, 'EndUserInfo', function () {
						return A
					}),
					n.d(t, 'EndUserRequestInfo', function () {
						return R.a
					}),
					n.d(t, 'EndUserClientRegistrationParameters', function () {
						return m
					}),
					n.d(t, 'EndUserClientRegistrationToken', function () {
						return g
					}),
					n.d(t, 'EndUserTaxReport', function () {
						return h.b
					}),
					n.d(t, 'EndUserTaxReceipt', function () {
						return h.a
					}),
					n.d(t, 'EndUser', function () {
						return O
					})
				var r = {}
				n.r(r),
					n.d(r, 'EndUserConfirmKSPOperationEvent', function () {
						return P
					})
				var i = n(1),
					o = n(13),
					s = n(9),
					a = n(10),
					u = n(8),
					l = function () {},
					c = function (e) {
						;(this.type = e ? e.type : ''),
							(this.device = e ? e.device : ''),
							(this.visibleName = e ? e.visibleName : ''),
							(this.typeIndex = e ? e.typeIndex : -1),
							(this.devIndex = e ? e.devIndex : -1),
							(this.password = e ? e.password : ''),
							(this.user = e ? e.user : '')
					},
					p = n(14),
					_ = function () {},
					f = function () {},
					E = n(0),
					h = n(11),
					S = n(6),
					d = n(7),
					y = n(5),
					C = n(12),
					T = n(15),
					A = function () {
						;(this.version = E.EU_USER_INFO_VERSION),
							(this.commonName = ''),
							(this.locality = ''),
							(this.state = ''),
							(this.organization = ''),
							(this.orgUnit = ''),
							(this.title = ''),
							(this.street = ''),
							(this.phone = ''),
							(this.surname = ''),
							(this.givenname = ''),
							(this.EMail = ''),
							(this.DNS = ''),
							(this.EDRPOUCode = ''),
							(this.DRFOCode = ''),
							(this.NBUCode = ''),
							(this.SPFMCode = ''),
							(this.OCode = ''),
							(this.OUCode = ''),
							(this.userCode = ''),
							(this.UPN = ''),
							(this.UNZR = ''),
							(this.country = 'UA')
					},
					R = n(16),
					m = function () {},
					g = function () {},
					P = function () {
						this.type = E.EndUserEventType.ConfirmKSPOperation
					},
					v = n(18),
					I = (function () {
						function e(e, t) {
							var n = this,
								r = ''
							'number' == typeof t &&
								t > 0 &&
								('string' == typeof r &&
									r.length > 0 &&
									(r = 'var EU_MAX_DATA_SIZE_MB = ' + t + ';' + r),
								'string' == typeof e &&
									e.length > 0 &&
									(e += (e.includes('?') ? '&' : '?') + 'maxDataSize=' + t)),
								(this.m_worker = new v.a(r, e, function (e) {
									n.OnEvent(e)
								})),
								(this.m_eventListeners = new Array())
						}
						return (
							(e.prototype.OnEvent = function (e) {
								try {
									var t =
										this.m_eventListeners[e.type] ||
										this.m_eventListeners[E.EndUserEventType.All]
									t && t(e)
								} catch (e) {}
							}),
							(e.prototype.AddEventListener = function (e, t) {
								switch (e) {
									case E.EndUserEventType.None:
										this.m_eventListeners = []
										break
									case E.EndUserEventType.All:
										;(this.m_eventListeners = []),
											(this.m_eventListeners[e] = t)
										break
									default:
										this.m_eventListeners[e] = t
								}
								return this.m_worker.postMessage('AddEventListener', [e])
							}),
							(e.prototype.GetLibraryInfo = function (e) {
								return this.m_worker.postMessage(
									'GetLibraryInfo',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.IsInitialized = function () {
								return this.m_worker.postMessage(
									'IsInitialized',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.Initialize = function (e) {
								return this.m_worker.postMessage(
									'Initialize',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.SetLanguage = function (e) {
								return this.m_worker.postMessage(
									'SetLanguage',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.SetRuntimeParameter = function (e, t) {
								return this.m_worker.postMessage(
									'SetRuntimeParameter',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetStorageParameter = function (e, t) {
								return this.m_worker.postMessage(
									'GetStorageParameter',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.SetStorageParameter = function (e, t, n) {
								return this.m_worker.postMessage(
									'SetStorageParameter',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetCAs = function () {
								return this.m_worker.postMessage(
									'GetCAs',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetProxySettings = function () {
								return this.m_worker.postMessage(
									'GetProxySettings',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.SetProxySettings = function (e) {
								return this.m_worker.postMessage(
									'SetProxySettings',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetHostInfo = function () {
								return this.m_worker.postMessage(
									'GetHostInfo',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetKeyMedias = function () {
								return this.m_worker.postMessage(
									'GetKeyMedias',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetJKSPrivateKeys = function (e) {
								return this.m_worker.postMessage(
									'GetJKSPrivateKeys',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.IsPrivateKeyReaded = function () {
								return this.m_worker.postMessage(
									'IsPrivateKeyReaded',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ResetPrivateKey = function () {
								return this.m_worker.postMessage(
									'ResetPrivateKey',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ResetOperationKSP = function () {
								return this.m_worker.postMessage(
									'ResetOperationKSP',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ReadPrivateKey = function (e, t, n) {
								return this.m_worker.postMessage(
									'ReadPrivateKey',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ReadPrivateKeyBinary = function (e, t, n, r) {
								return this.m_worker.postMessage(
									'ReadPrivateKeyBinary',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ReadPrivateKeySIM = function (e, t, n, r) {
								return this.m_worker.postMessage(
									'ReadPrivateKeySIM',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ReadPrivateKeyKSP = function (e, t, n, r, i, o) {
								return this.m_worker.postMessage(
									'ReadPrivateKeyKSP',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetOwnCertificates = function () {
								return this.m_worker.postMessage(
									'GetOwnCertificates',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetOwnEUserParams = function () {
								return this.m_worker.postMessage(
									'GetOwnEUserParams',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ChangeOwnCertificatesStatus = function (e, t) {
								return this.m_worker.postMessage(
									'ChangeOwnCertificatesStatus',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.MakeNewCertificate = function (
								e,
								t,
								n,
								r,
								i,
								o,
								s,
								a,
								u,
								l,
								c,
								p,
								_,
								f,
								E,
								h,
								S,
								d
							) {
								return (
									void 0 === h && (h = !1),
									void 0 === S && (S = null),
									void 0 === d && (d = null),
									this.m_worker.postMessage(
										'MakeNewCertificate',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.MakeDeviceCertificate = function (e, t, n, r, i) {
								return this.m_worker.postMessage(
									'MakeDeviceCertificate',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.SetKeyMediaUserPassword = function (e, t) {
								return this.m_worker.postMessage(
									'SetKeyMediaUserPassword',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ChangePrivateKeyPassword = function (e, t) {
								return this.m_worker.postMessage(
									'ChangePrivateKeyPassword',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ChangePrivateKeyPasswordBinary = function (e, t, n) {
								return this.m_worker.postMessage(
									'ChangePrivateKeyPasswordBinary',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GeneratePrivateKey = function (
								e,
								t,
								n,
								r,
								i,
								o,
								s,
								a,
								u,
								l,
								c,
								p
							) {
								return this.m_worker.postMessage(
									'GeneratePrivateKey',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GeneratePrivateKeyBinary = function (
								e,
								t,
								n,
								r,
								i,
								o,
								s,
								a,
								u,
								l,
								c
							) {
								return this.m_worker.postMessage(
									'GeneratePrivateKeyBinary',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetKeyInfo = function (e) {
								return this.m_worker.postMessage(
									'GetKeyInfo',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetKeyInfoBinary = function (e, t) {
								return this.m_worker.postMessage(
									'GetKeyInfoBinary',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetClientRegistrationTokenKSP = function (e, t) {
								return (
									void 0 === t && (t = null),
									this.m_worker.postMessage(
										'GetClientRegistrationTokenKSP',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.HashData = function (e, t, n) {
								return this.m_worker.postMessage(
									'HashData',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetSigner = function (e, t, n) {
								return (
									void 0 === t && (t = -1),
									void 0 === n && (n = !1),
									this.m_worker.postMessage(
										'GetSigner',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.SignData = function (e, t) {
								return (
									void 0 === t && (t = !1),
									this.m_worker.postMessage(
										'SignData',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.SignDataInternal = function (e, t, n) {
								return (
									void 0 === n && (n = !1),
									this.m_worker.postMessage(
										'SignDataInternal',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.SignHash = function (e, t, n, r) {
								return this.m_worker.postMessage(
									'SignHash',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.SignDataEx = function (e, t, n, r, i) {
								return this.m_worker.postMessage(
									'SignDataEx',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.AppendSign = function (e, t, n, r, i) {
								return this.m_worker.postMessage(
									'AppendSign',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.AppendSignHash = function (e, t, n, r, i) {
								return this.m_worker.postMessage(
									'AppendSignHash',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetSignValue = function (e, t, n, r) {
								return (
									void 0 === r && (r = !1),
									this.m_worker.postMessage(
										'GetSignValue',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.VerifyHash = function (e, t, n) {
								return (
									void 0 === n && (n = -1),
									this.m_worker.postMessage(
										'VerifyHash',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.VerifyData = function (e, t, n) {
								return (
									void 0 === n && (n = -1),
									this.m_worker.postMessage(
										'VerifyData',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.VerifyDataInternal = function (e, t) {
								return (
									void 0 === t && (t = -1),
									this.m_worker.postMessage(
										'VerifyDataInternal',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.EnvelopData = function (e, t, n, r, i, o) {
								return (
									void 0 === o && (o = !1),
									this.m_worker.postMessage(
										'EnvelopData',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.DevelopData = function (e, t) {
								return this.m_worker.postMessage(
									'DevelopData',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CreateAuthData = function (e, t, n) {
								return this.m_worker.postMessage(
									'CreateAuthData',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ProtectDataByPassword = function (e, t, n) {
								return this.m_worker.postMessage(
									'ProtectDataByPassword',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.UnprotectDataByPassword = function (e, t, n) {
								return this.m_worker.postMessage(
									'UnprotectDataByPassword',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.GetTSPByAccessInfo = function (e, t, n, r, i) {
								return this.m_worker.postMessage(
									'GetTSPByAccessInfo',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CheckTSP = function (e, t, n) {
								return this.m_worker.postMessage(
									'CheckTSP',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxCreate = function () {
								return this.m_worker.postMessage(
									'CtxCreate',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxFree = function (e) {
								return this.m_worker.postMessage(
									'CtxFree',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxSetParameter = function (e, t, n) {
								return this.m_worker.postMessage(
									'CtxSetParameter',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxReadPrivateKey = function (e, t, n, r) {
								return this.m_worker.postMessage(
									'CtxReadPrivateKey',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxReadPrivateKeyBinary = function (e, t, n, r, i) {
								return this.m_worker.postMessage(
									'CtxReadPrivateKeyBinary',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxFreePrivateKey = function (e) {
								return this.m_worker.postMessage(
									'CtxFreePrivateKey',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxGetOwnCertificates = function (e) {
								return this.m_worker.postMessage(
									'CtxGetOwnCertificates',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxSignHash = function (e, t, n, r, i) {
								return this.m_worker.postMessage(
									'CtxSignHash',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxSignData = function (e, t, n, r, i, o) {
								return this.m_worker.postMessage(
									'CtxSignData',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxAppendSignHash = function (e, t, n, r, i, o) {
								return this.m_worker.postMessage(
									'CtxAppendSignHash',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxAppendSign = function (e, t, n, r, i, o) {
								return this.m_worker.postMessage(
									'CtxAppendSign',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxGetSignValue = function (e, t, n, r, i) {
								return (
									void 0 === i && (i = !1),
									this.m_worker.postMessage(
										'CtxGetSignValue',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.CtxEnvelopData = function (e, t, n, r, i, o, s) {
								return this.m_worker.postMessage(
									'CtxEnvelopData',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.CtxDevelopData = function (e, t, n) {
								return this.m_worker.postMessage(
									'CtxDevelopData',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ProtectTaxReports = function (e, t, n, r, i, o, s) {
								return (
									void 0 === e && (e = null),
									void 0 === t && (t = null),
									void 0 === n && (n = null),
									void 0 === s && (s = !1),
									this.m_worker.postMessage(
										'ProtectTaxReports',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.UnprotectTaxReceipts = function (e, t) {
								return this.m_worker.postMessage(
									'UnprotectTaxReceipts',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ASiCGetSigner = function (e, t, n) {
								return this.m_worker.postMessage(
									'ASiCGetSigner',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ASiCSignData = function (e, t, n, r, i, o) {
								return this.m_worker.postMessage(
									'ASiCSignData',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ASiCAppendSign = function (e, t, n, r, i) {
								return this.m_worker.postMessage(
									'ASiCAppendSign',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.ASiCVerifyData = function (e, t) {
								return (
									void 0 === t && (t = -1),
									this.m_worker.postMessage(
										'ASiCVerifyData',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.PDFSignData = function (e, t, n, r) {
								return this.m_worker.postMessage(
									'PDFSignData',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.PDFVerifyData = function (e, t) {
								return (
									void 0 === t && (t = -1),
									this.m_worker.postMessage(
										'PDFVerifyData',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.PDFGetSigner = function (e, t, n) {
								return (
									void 0 === t && (t = -1),
									void 0 === n && (n = !1),
									this.m_worker.postMessage(
										'PDFGetSigner',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.XAdESGetSigner = function (e, t, n) {
								return (
									void 0 === t && (t = -1),
									void 0 === n && (n = !1),
									this.m_worker.postMessage(
										'XAdESGetSigner',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.XAdESSignData = function (e, t, n, r, i) {
								return this.m_worker.postMessage(
									'XAdESSignData',
									Array.prototype.slice.call(arguments)
								)
							}),
							(e.prototype.XAdESVerifyData = function (e, t, n) {
								return (
									void 0 === n && (n = -1),
									this.m_worker.postMessage(
										'XAdESVerifyData',
										Array.prototype.slice.call(arguments)
									)
								)
							}),
							(e.prototype.GetSignContainerInfo = function (e) {
								return this.m_worker.postMessage(
									'GetSignContainerInfo',
									Array.prototype.slice.call(arguments)
								)
							}),
							e
						)
					})(),
					U = n(19),
					O = (function () {
						function e(e, t, n) {
							switch (
								(void 0 === t && (t = E.EndUserLibraryType.JS),
								void 0 === n && (n = 5),
								t)
							) {
								case E.EndUserLibraryType.SW:
									this.m_library = new U.a()
									break
								case E.EndUserLibraryType.JS:
								case E.EndUserLibraryType.MS:
								default:
									this.m_library = new I(e, n)
							}
						}
						return (
							(e.prototype.AddEventListener = function (e, t) {
								return this.m_library.AddEventListener(e, t)
							}),
							(e.prototype.GetLibraryInfo = function (e) {
								return this.m_library.GetLibraryInfo(e)
							}),
							(e.prototype.IsInitialized = function () {
								return this.m_library.IsInitialized()
							}),
							(e.prototype.Initialize = function (e) {
								return this.m_library.Initialize(e)
							}),
							(e.prototype.SetLanguage = function (e) {
								return this.m_library.SetLanguage(e)
							}),
							(e.prototype.SetRuntimeParameter = function (e, t) {
								return this.m_library.SetRuntimeParameter(e, t)
							}),
							(e.prototype.GetStorageParameter = function (e, t) {
								return (
									void 0 === t && (t = !1),
									this.m_library.GetStorageParameter(e, t)
								)
							}),
							(e.prototype.SetStorageParameter = function (e, t, n) {
								return (
									void 0 === n && (n = !1),
									this.m_library.SetStorageParameter(e, t, n)
								)
							}),
							(e.prototype.GetCAs = function () {
								return this.m_library.GetCAs()
							}),
							(e.prototype.GetProxySettings = function () {
								return this.m_library.GetProxySettings()
							}),
							(e.prototype.SetProxySettings = function (e) {
								return this.m_library.SetProxySettings(e)
							}),
							(e.prototype.GetHostInfo = function () {
								return this.m_library.GetHostInfo()
							}),
							(e.prototype.GetKeyMedias = function () {
								return this.m_library.GetKeyMedias()
							}),
							(e.prototype.GetJKSPrivateKeys = function (e) {
								return this.m_library.GetJKSPrivateKeys(e)
							}),
							(e.prototype.IsPrivateKeyReaded = function () {
								return this.m_library.IsPrivateKeyReaded()
							}),
							(e.prototype.ResetPrivateKey = function () {
								return this.m_library.ResetPrivateKey()
							}),
							(e.prototype.ResetOperationKSP = function () {
								return this.m_library.ResetOperationKSP()
							}),
							(e.prototype.ReadPrivateKey = function (e, t, n) {
								return this.m_library.ReadPrivateKey(e, t, n)
							}),
							(e.prototype.ReadPrivateKeyBinary = function (e, t, n, r) {
								return this.m_library.ReadPrivateKeyBinary(e, t, n, r)
							}),
							(e.prototype.ReadPrivateKeySIM = function (e, t, n, r) {
								return (
									void 0 === n && (n = !0),
									void 0 === r && (r = 0),
									this.m_library.ReadPrivateKeySIM(e, t, n, r)
								)
							}),
							(e.prototype.ReadPrivateKeyKSP = function (e, t, n, r, i, o) {
								return (
									void 0 === n && (n = !0),
									void 0 === r && (r = 0),
									void 0 === i && (i = null),
									void 0 === o && (o = null),
									this.m_library.ReadPrivateKeyKSP(e, t, n, r, i, o)
								)
							}),
							(e.prototype.GetOwnCertificates = function () {
								return this.m_library.GetOwnCertificates()
							}),
							(e.prototype.GetOwnEUserParams = function () {
								return this.m_library.GetOwnEUserParams()
							}),
							(e.prototype.ChangeOwnCertificatesStatus = function (e, t) {
								return this.m_library.ChangeOwnCertificatesStatus(e, t)
							}),
							(e.prototype.MakeNewCertificate = function (
								e,
								t,
								n,
								r,
								i,
								o,
								s,
								a,
								u,
								l,
								c,
								p,
								_,
								f,
								E,
								h,
								S,
								d
							) {
								return (
									void 0 === h && (h = !1),
									void 0 === S && (S = null),
									void 0 === d && (d = null),
									this.m_library.MakeNewCertificate(
										e,
										t,
										n,
										r,
										i,
										o,
										s,
										a,
										u,
										l,
										c,
										p,
										_,
										f,
										E,
										h,
										S,
										d
									)
								)
							}),
							(e.prototype.MakeDeviceCertificate = function (e, t, n, r, i) {
								return this.m_library.MakeDeviceCertificate(e, t, n, r, i)
							}),
							(e.prototype.SetKeyMediaUserPassword = function (e, t) {
								return this.m_library.SetKeyMediaUserPassword(e, t)
							}),
							(e.prototype.ChangePrivateKeyPassword = function (e, t) {
								return this.m_library.ChangePrivateKeyPassword(e, t)
							}),
							(e.prototype.ChangePrivateKeyPasswordBinary = function (e, t, n) {
								return this.m_library.ChangePrivateKeyPasswordBinary(e, t, n)
							}),
							(e.prototype.GeneratePrivateKey = function (
								e,
								t,
								n,
								r,
								i,
								o,
								s,
								a,
								u,
								l,
								c,
								p
							) {
								return this.m_library.GeneratePrivateKey(
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									c,
									p
								)
							}),
							(e.prototype.GeneratePrivateKeyBinary = function (
								e,
								t,
								n,
								r,
								i,
								o,
								s,
								a,
								u,
								l,
								c
							) {
								return this.m_library.GeneratePrivateKeyBinary(
									e,
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									c
								)
							}),
							(e.prototype.GetKeyInfo = function (e) {
								return this.m_library.GetKeyInfo(e)
							}),
							(e.prototype.GetKeyInfoBinary = function (e, t) {
								return this.m_library.GetKeyInfoBinary(e, t)
							}),
							(e.prototype.GetClientRegistrationTokenKSP = function (e, t) {
								return this.m_library.GetClientRegistrationTokenKSP(e, t)
							}),
							(e.prototype.HashData = function (e, t, n) {
								return this.m_library.HashData(e, t, n)
							}),
							(e.prototype.GetSigner = function (e, t, n) {
								return this.m_library.GetSigner(e, t, n)
							}),
							(e.prototype.SignData = function (e, t) {
								return void 0 === t && (t = !1), this.m_library.SignData(e, t)
							}),
							(e.prototype.SignDataInternal = function (e, t, n) {
								return (
									void 0 === n && (n = !1),
									this.m_library.SignDataInternal(e, t, n)
								)
							}),
							(e.prototype.SignHash = function (e, t, n, r) {
								return (
									void 0 === r && (r = !1), this.m_library.SignHash(e, t, n, r)
								)
							}),
							(e.prototype.SignDataEx = function (e, t, n, r, i) {
								return (
									void 0 === i && (i = !1),
									this.m_library.SignDataEx(e, t, n, r, i)
								)
							}),
							(e.prototype.AppendSign = function (e, t, n, r, i) {
								return (
									void 0 === i && (i = !1),
									this.m_library.AppendSign(e, t, n, r, i)
								)
							}),
							(e.prototype.AppendSignHash = function (e, t, n, r, i) {
								return this.m_library.AppendSignHash(e, t, n, r, i)
							}),
							(e.prototype.GetSignValue = function (e, t, n, r) {
								return (
									void 0 === r && (r = !1),
									this.m_library.GetSignValue(e, t, n, r)
								)
							}),
							(e.prototype.VerifyHash = function (e, t, n) {
								return (
									void 0 === n && (n = -1), this.m_library.VerifyHash(e, t, n)
								)
							}),
							(e.prototype.VerifyData = function (e, t, n) {
								return (
									void 0 === n && (n = -1), this.m_library.VerifyData(e, t, n)
								)
							}),
							(e.prototype.VerifyDataInternal = function (e, t) {
								return (
									void 0 === t && (t = -1),
									this.m_library.VerifyDataInternal(e, t)
								)
							}),
							(e.prototype.EnvelopData = function (e, t, n, r, i, o) {
								return (
									void 0 === o && (o = !1),
									this.m_library.EnvelopData(e, t, n, r, i, o)
								)
							}),
							(e.prototype.DevelopData = function (e, t) {
								return this.m_library.DevelopData(e, t)
							}),
							(e.prototype.ProtectDataByPassword = function (e, t, n) {
								return this.m_library.ProtectDataByPassword(e, t, n)
							}),
							(e.prototype.UnprotectDataByPassword = function (e, t, n) {
								return this.m_library.UnprotectDataByPassword(e, t, n)
							}),
							(e.prototype.CreateAuthData = function (e, t, n) {
								return this.m_library.CreateAuthData(e, t, n)
							}),
							(e.prototype.GetTSPByAccessInfo = function (e, t, n, r, i) {
								return this.m_library.GetTSPByAccessInfo(e, t, n, r, i)
							}),
							(e.prototype.CheckTSP = function (e, t, n) {
								return this.m_library.CheckTSP(e, t, n)
							}),
							(e.prototype.CtxCreate = function () {
								return this.m_library.CtxCreate()
							}),
							(e.prototype.CtxFree = function (e) {
								return this.m_library.CtxFree(e)
							}),
							(e.prototype.CtxSetParameter = function (e, t, n) {
								return this.m_library.CtxSetParameter(e, t, n)
							}),
							(e.prototype.CtxReadPrivateKey = function (e, t, n, r) {
								return (
									void 0 === e && (e = null),
									this.m_library.CtxReadPrivateKey(e, t, n, r)
								)
							}),
							(e.prototype.CtxReadPrivateKeyBinary = function (e, t, n, r, i) {
								return (
									void 0 === e && (e = null),
									this.m_library.CtxReadPrivateKeyBinary(e, t, n, r, i)
								)
							}),
							(e.prototype.CtxFreePrivateKey = function (e) {
								return this.m_library.CtxFreePrivateKey(e)
							}),
							(e.prototype.CtxGetOwnCertificates = function (e) {
								return this.m_library.CtxGetOwnCertificates(e)
							}),
							(e.prototype.CtxSignHash = function (e, t, n, r, i) {
								return this.m_library.CtxSignHash(e, t, n, r, i)
							}),
							(e.prototype.CtxSignData = function (e, t, n, r, i, o) {
								return this.m_library.CtxSignData(e, t, n, r, i, o)
							}),
							(e.prototype.CtxAppendSignHash = function (e, t, n, r, i, o) {
								return this.m_library.CtxAppendSignHash(e, t, n, r, i, o)
							}),
							(e.prototype.CtxAppendSign = function (e, t, n, r, i, o) {
								return this.m_library.CtxAppendSign(e, t, n, r, i, o)
							}),
							(e.prototype.CtxGetSignValue = function (e, t, n, r, i) {
								return (
									void 0 === i && (i = !1),
									this.m_library.CtxGetSignValue(e, t, n, r, i)
								)
							}),
							(e.prototype.CtxEnvelopData = function (e, t, n, r, i, o, s) {
								return this.m_library.CtxEnvelopData(e, t, n, r, i, o, s)
							}),
							(e.prototype.CtxDevelopData = function (e, t, n) {
								return this.m_library.CtxDevelopData(e, t, n)
							}),
							(e.prototype.ProtectTaxReports = function (e, t, n, r, i, o, s) {
								return (
									void 0 === e && (e = null),
									void 0 === t && (t = null),
									void 0 === n && (n = null),
									this.m_library.ProtectTaxReports(e, t, n, r, i, o, s)
								)
							}),
							(e.prototype.UnprotectTaxReceipts = function (e, t) {
								return this.m_library.UnprotectTaxReceipts(e, t)
							}),
							(e.prototype.ASiCGetSigner = function (e, t, n) {
								return this.m_library.ASiCGetSigner(e, t, n)
							}),
							(e.prototype.ASiCSignData = function (e, t, n, r, i, o) {
								return this.m_library.ASiCSignData(e, t, n, r, i, o)
							}),
							(e.prototype.ASiCAppendSign = function (e, t, n, r, i) {
								return this.m_library.ASiCAppendSign(e, t, n, r, i)
							}),
							(e.prototype.ASiCVerifyData = function (e, t) {
								return this.m_library.ASiCVerifyData(e, t)
							}),
							(e.prototype.PDFGetSigner = function (e, t, n) {
								return this.m_library.PDFGetSigner(e, t, n)
							}),
							(e.prototype.PDFSignData = function (e, t, n, r) {
								return this.m_library.PDFSignData(e, t, n, r)
							}),
							(e.prototype.PDFVerifyData = function (e, t) {
								return this.m_library.PDFVerifyData(e, t)
							}),
							(e.prototype.XAdESGetSigner = function (e, t, n) {
								return this.m_library.XAdESGetSigner(e, t, n)
							}),
							(e.prototype.XAdESSignData = function (e, t, n, r, i) {
								return this.m_library.XAdESSignData(e, t, n, r, i)
							}),
							(e.prototype.XAdESVerifyData = function (e, t, n) {
								return this.m_library.XAdESVerifyData(e, t, n)
							}),
							(e.prototype.GetSignContainerInfo = function (e) {
								return this.m_library.GetSignContainerInfo(e)
							}),
							e
						)
					})()
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'a', function () {
					return r
				})
				var r = function () {}
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'a', function () {
					return r
				})
				var r = function () {}
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'a', function () {
					return i
				})
				var r = n(0),
					i = function () {
						;(this.type = r.EndUserSignContainerType.Unknown),
							(this.subType = r.EndUserCAdESType.Unknown),
							(this.asicSignType = r.EndUserASiCSignType.Unknown)
					}
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'a', function () {
					return r
				})
				var r = function () {}
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'a', function () {
					return r
				}),
					n.d(t, 'd', function () {
						return i
					}),
					n.d(t, 'c', function () {
						return o
					}),
					n.d(t, 'b', function () {
						return s
					})
				var r = function () {},
					i = function () {},
					o = function () {},
					s = function () {}
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'a', function () {
					return r
				})
				var r = function () {}
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'b', function () {
					return r
				}),
					n.d(t, 'a', function () {
						return i
					})
				var r = function () {},
					i = function () {}
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'a', function () {
					return r
				})
				var r = function () {}
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'a', function () {
					return r
				}),
					n.d(t, 'b', function () {
						return i
					})
				var r = function () {
						;(this.version = null), (this.supported = !1), (this.loaded = !1)
					},
					i = function () {
						;(this.version = null),
							(this.supported = !1),
							(this.loaded = !1),
							(this.isSignAgentSupported = !1),
							(this.isWebExtensionSupported = !1),
							(this.isNPAPISupported = !1),
							(this.isActiveXSupported = !1),
							(this.isWebExtensionInstalled = !1),
							(this.isNativeLibraryNeedUpdate = !1),
							(this.nativeLibraryInstallURL = null),
							(this.nativeLibraryUpdateURL = null),
							(this.webExtensionInstallURL = null),
							(this.helpURL = null)
					}
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'a', function () {
					return r
				})
				var r = function () {}
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'a', function () {
					return r
				})
				var r = function () {}
			},
			function (e, t, n) {
				'use strict'
				n.d(t, 'a', function () {
					return r
				})
				var r = function () {}
			},
			function (e, t, n) {
				;(function (t, r) {
					var i
						/*!
						 * @overview es6-promise - a tiny implementation of Promises/A+.
						 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
						 * @license   Licensed under MIT license
						 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
						 * @version   3.3.1
						 */
					;(i = function () {
						'use strict'
						function e(e) {
							return 'function' == typeof e
						}
						var i = Array.isArray
								? Array.isArray
								: function (e) {
										return (
											'[object Array]' === Object.prototype.toString.call(e)
										)
								  },
							o = 0,
							s = void 0,
							a = void 0,
							u = function (e, t) {
								;(h[o] = e), (h[o + 1] = t), 2 === (o += 2) && (a ? a(S) : A())
							},
							l = 'undefined' != typeof window ? window : void 0,
							c = l || {},
							p = c.MutationObserver || c.WebKitMutationObserver,
							_ =
								'undefined' == typeof self &&
								void 0 !== t &&
								'[object process]' === {}.toString.call(t),
							f =
								'undefined' != typeof Uint8ClampedArray &&
								'undefined' != typeof importScripts &&
								'undefined' != typeof MessageChannel
						function E() {
							var e = setTimeout
							return function () {
								return e(S, 1)
							}
						}
						var h = new Array(1e3)
						function S() {
							for (var e = 0; e < o; e += 2)
								(0, h[e])(h[e + 1]), (h[e] = void 0), (h[e + 1] = void 0)
							o = 0
						}
						var d,
							y,
							C,
							T,
							A = void 0
						function R(e, t) {
							var n = arguments,
								r = this,
								i = new this.constructor(P)
							void 0 === i[g] && B(i)
							var o,
								s = r._state
							return (
								s
									? ((o = n[s - 1]),
									  u(function () {
											return K(s, i, o, r._result)
									  }))
									: N(r, i, e, t),
								i
							)
						}
						function m(e) {
							if (e && 'object' == typeof e && e.constructor === this) return e
							var t = new this(P)
							return O(t, e), t
						}
						_
							? (A = function () {
									return t.nextTick(S)
							  })
							: p
							? ((y = 0),
							  (C = new p(S)),
							  (T = document.createTextNode('')),
							  C.observe(T, {
									characterData: !0,
							  }),
							  (A = function () {
									T.data = y = ++y % 2
							  }))
							: f
							? (((d = new MessageChannel()).port1.onmessage = S),
							  (A = function () {
									return d.port2.postMessage(0)
							  }))
							: (A =
									void 0 === l
										? (function () {
												try {
													var e = n(23)
													return (
														(s = e.runOnLoop || e.runOnContext),
														function () {
															s(S)
														}
													)
												} catch (e) {
													return E()
												}
										  })()
										: E())
						var g = Math.random().toString(36).substring(16)
						function P() {}
						var v = new M()
						function I(e) {
							try {
								return e.then
							} catch (e) {
								return (v.error = e), v
							}
						}
						function U(t, n, r) {
							n.constructor === t.constructor &&
							r === R &&
							n.constructor.resolve === m
								? (function (e, t) {
										1 === t._state
											? D(e, t._result)
											: 2 === t._state
											? k(e, t._result)
											: N(
													t,
													void 0,
													function (t) {
														return O(e, t)
													},
													function (t) {
														return k(e, t)
													}
											  )
								  })(t, n)
								: r === v
								? k(t, v.error)
								: void 0 === r
								? D(t, n)
								: e(r)
								? (function (e, t, n) {
										u(function (e) {
											var r = !1,
												i = (function (e, t, n, r) {
													try {
														e.call(t, n, r)
													} catch (e) {
														return e
													}
												})(
													n,
													t,
													function (n) {
														r || ((r = !0), t !== n ? O(e, n) : D(e, n))
													},
													function (t) {
														r || ((r = !0), k(e, t))
													},
													e._label
												)
											!r && i && ((r = !0), k(e, i))
										}, e)
								  })(t, n, r)
								: D(t, n)
						}
						function O(e, t) {
							var n
							e === t
								? k(
										e,
										new TypeError('You cannot resolve a promise with itself')
								  )
								: 'function' == typeof (n = t) ||
								  ('object' == typeof n && null !== n)
								? U(e, t, I(t))
								: D(e, t)
						}
						function b(e) {
							e._onerror && e._onerror(e._result), w(e)
						}
						function D(e, t) {
							void 0 === e._state &&
								((e._result = t),
								(e._state = 1),
								0 !== e._subscribers.length && u(w, e))
						}
						function k(e, t) {
							void 0 === e._state && ((e._state = 2), (e._result = t), u(b, e))
						}
						function N(e, t, n, r) {
							var i = e._subscribers,
								o = i.length
							;(e._onerror = null),
								(i[o] = t),
								(i[o + 1] = n),
								(i[o + 2] = r),
								0 === o && e._state && u(w, e)
						}
						function w(e) {
							var t = e._subscribers,
								n = e._state
							if (0 !== t.length) {
								for (
									var r = void 0, i = void 0, o = e._result, s = 0;
									s < t.length;
									s += 3
								)
									(r = t[s]), (i = t[s + n]), r ? K(n, r, i, o) : i(o)
								e._subscribers.length = 0
							}
						}
						function M() {
							this.error = null
						}
						var G = new M()
						function K(t, n, r, i) {
							var o = e(r),
								s = void 0,
								a = void 0,
								u = void 0,
								l = void 0
							if (o) {
								if (
									((s = (function (e, t) {
										try {
											return e(t)
										} catch (e) {
											return (G.error = e), G
										}
									})(r, i)) === G
										? ((l = !0), (a = s.error), (s = null))
										: (u = !0),
									n === s)
								)
									return void k(
										n,
										new TypeError(
											'A promises callback cannot return that same promise.'
										)
									)
							} else (s = i), (u = !0)
							void 0 !== n._state ||
								(o && u
									? O(n, s)
									: l
									? k(n, a)
									: 1 === t
									? D(n, s)
									: 2 === t && k(n, s))
						}
						var L = 0
						function B(e) {
							;(e[g] = L++),
								(e._state = void 0),
								(e._result = void 0),
								(e._subscribers = [])
						}
						function F(e, t) {
							;(this._instanceConstructor = e),
								(this.promise = new e(P)),
								this.promise[g] || B(this.promise),
								i(t)
									? ((this._input = t),
									  (this.length = t.length),
									  (this._remaining = t.length),
									  (this._result = new Array(this.length)),
									  0 === this.length
											? D(this.promise, this._result)
											: ((this.length = this.length || 0),
											  this._enumerate(),
											  0 === this._remaining && D(this.promise, this._result)))
									: k(
											this.promise,
											new Error('Array Methods must be provided an Array')
									  )
						}
						function x(e) {
							;(this[g] = L++),
								(this._result = this._state = void 0),
								(this._subscribers = []),
								P !== e &&
									('function' != typeof e &&
										(function () {
											throw new TypeError(
												'You must pass a resolver function as the first argument to the promise constructor'
											)
										})(),
									this instanceof x
										? (function (e, t) {
												try {
													t(
														function (t) {
															O(e, t)
														},
														function (t) {
															k(e, t)
														}
													)
												} catch (t) {
													k(e, t)
												}
										  })(this, e)
										: (function () {
												throw new TypeError(
													"Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
												)
										  })())
						}
						function Y() {
							var e = void 0
							if (void 0 !== r) e = r
							else if ('undefined' != typeof self) e = self
							else
								try {
									e = Function('return this')()
								} catch (e) {
									throw new Error(
										'polyfill failed because global object is unavailable in this environment'
									)
								}
							var t = e.Promise
							if (t) {
								var n = null
								try {
									n = Object.prototype.toString.call(t.resolve())
								} catch (e) {}
								if ('[object Promise]' === n && !t.cast) return
							}
							e.Promise = x
						}
						return (
							(F.prototype._enumerate = function () {
								for (
									var e = this.length, t = this._input, n = 0;
									void 0 === this._state && n < e;
									n++
								)
									this._eachEntry(t[n], n)
							}),
							(F.prototype._eachEntry = function (e, t) {
								var n = this._instanceConstructor,
									r = n.resolve
								if (r === m) {
									var i = I(e)
									if (i === R && void 0 !== e._state)
										this._settledAt(e._state, t, e._result)
									else if ('function' != typeof i)
										this._remaining--, (this._result[t] = e)
									else if (n === x) {
										var o = new n(P)
										U(o, e, i), this._willSettleAt(o, t)
									} else
										this._willSettleAt(
											new n(function (t) {
												return t(e)
											}),
											t
										)
								} else this._willSettleAt(r(e), t)
							}),
							(F.prototype._settledAt = function (e, t, n) {
								var r = this.promise
								void 0 === r._state &&
									(this._remaining--,
									2 === e ? k(r, n) : (this._result[t] = n)),
									0 === this._remaining && D(r, this._result)
							}),
							(F.prototype._willSettleAt = function (e, t) {
								var n = this
								N(
									e,
									void 0,
									function (e) {
										return n._settledAt(1, t, e)
									},
									function (e) {
										return n._settledAt(2, t, e)
									}
								)
							}),
							(x.all = function (e) {
								return new F(this, e).promise
							}),
							(x.race = function (e) {
								var t = this
								return i(e)
									? new t(function (n, r) {
											for (var i = e.length, o = 0; o < i; o++)
												t.resolve(e[o]).then(n, r)
									  })
									: new t(function (e, t) {
											return t(new TypeError('You must pass an array to race.'))
									  })
							}),
							(x.resolve = m),
							(x.reject = function (e) {
								var t = new this(P)
								return k(t, e), t
							}),
							(x._setScheduler = function (e) {
								a = e
							}),
							(x._setAsap = function (e) {
								u = e
							}),
							(x._asap = u),
							(x.prototype = {
								constructor: x,
								then: R,
								catch: function (e) {
									return this.then(null, e)
								},
							}),
							Y(),
							(x.polyfill = Y),
							(x.Promise = x),
							x
						)
					}),
						(e.exports = i())
				}).call(this, n(21), n(22))
			},
			function (e, t, n) {
				'use strict'
				;(function (e) {
					var n = function (e, t, n) {
							;(this.id = e),
								(this.cmd = t),
								(this.params = n),
								(this.origin = window.location.origin
									? window.location.origin
									: window.location.protocol +
									  '//' +
									  window.location.hostname +
									  (window.location.port ? ':' + window.location.port : '')),
								(this.pathname = window.location.pathname)
						},
						r = function (e, t, n, r) {
							;(this.id = e),
								(this.cmd = t),
								(this.result = n),
								(this.error = r)
						},
						i = (function () {
							function t(e, t, n) {
								var r = this
								;(this.m_worker = this.loadWorker(e, t)),
									(this.m_worker.onmessage = function (e) {
										var t = e.data
										if (-2 != t.id) {
											var i = r.m_promises[t.id - 1]
											i &&
												(delete r.m_promises[t.id - 1],
												t.error ? i.reject(t.error) : i.resolve(t.result))
										} else n(t.result)
									}),
									(this.m_worker.onerror = function (e) {
										r.m_promises.forEach(function (t) {
											t.reject(e.error)
										}),
											(r.m_promises = new Array())
									}),
									(this.m_promises = new Array())
							}
							return (
								(t.prototype.loadWorker = function (e, t) {
									try {
										if (!e) throw 'No worker content'
										try {
											var n,
												r = window,
												i = r.URL || r.webkitURL
											try {
												;(n = new (r.BlobBuilder ||
													r.WebKitBlobBuilder ||
													r.MozBlobBuilder ||
													r.MSBlobBuilder)()).append(e),
													(n = n.getBlob())
											} catch (t) {
												n = new Blob([e])
											}
											return new Worker(i.createObjectURL(n))
										} catch (t) {
											return new Worker(
												'data:application/javascript,' + encodeURIComponent(e)
											)
										}
									} catch (e) {
										if (!t) throw Error('Inline worker is not supported')
										return new Worker(t)
									}
								}),
								(t.prototype.postMessage = function (t, r) {
									var i = this,
										o = new n(-1, t, r),
										s = new e(function (e, t) {
											o.id = i.m_promises.push({
												resolve: e,
												reject: t,
											})
										})
									return this.m_worker.postMessage(o), s
								}),
								t
							)
						})()
					;(t.a = i),
						(function () {
							function e(e) {
								;(this.m_context = e), (this.m_initialized = !1)
								var t = this
								self.onmessage = function (e) {
									t.onMessage(e.data)
								}
							}
							;(e.prototype.postMessage = function (e, t, n, i) {
								var o = new r(e, t, n, i)
								self.postMessage(o)
							}),
								(e.prototype.onMessage = function (e) {
									var t = this
									this.m_initialized
										? this.m_context[e.cmd]
												.apply(this.m_context, e.params)
												.then(
													function (n) {
														t.postMessage(e.id, e.cmd, n)
													},
													function (n) {
														t.postMessage(e.id, e.cmd, null, n)
													}
												)
										: setTimeout(function () {
												t.onMessage(e)
										  }, 50)
								}),
								(e.prototype.initialize = function () {
									this.m_initialized = !0
								})
						})()
				}).call(this, n(17).Promise)
			},
			function (e, t, n) {
				'use strict'
				;(function (e) {
					var r = n(1),
						i = n(9),
						o = n(10),
						s = n(14),
						a = n(20),
						u = n(4),
						l = n(13),
						c = n(2),
						p = n(8),
						_ = n(0),
						f = n(11),
						E = n(15),
						h = n(16),
						S = n(7),
						d = n(5),
						y = n(12),
						C = n(6),
						T = function () {},
						A = (function () {
							function t() {
								;(this.GetDefaultTSPSettings = function () {
									for (
										var e = null, t = this.m_settings.CAs, n = 0;
										n < t.length &&
										(!t[n].tspAddress ||
											!t[n].tspAddressPort ||
											((e && '80' != t[n].tspAddressPort) || (e = t[n]),
											'80' != e.tspAddressPort));
										n++
									);
									return e
								}),
									(this.MakeExpireDate = function (e) {
										e || (e = 300)
										var t = new Date()
										return t.setTime(t.getTime() + 1e3 * e), t
									}),
									(this.m_library = new a.a()),
									(this.m_settings = null),
									(this.m_initialized = !1),
									(this.m_kmTypes = null),
									(this.m_kmActiveOperation = !1),
									(this.m_context = null),
									(this.m_pkContext = null),
									(this.m_eventListeners = new Array()),
									(this.m_resolveOIDs = !1),
									(this.m_origin = window.location.origin
										? window.location.origin
										: window.location.protocol +
										  '//' +
										  window.location.hostname +
										  (window.location.port ? ':' + window.location.port : ''))
							}
							return (
								(t.prototype.MapError = function (e) {
									var t = new r.EndUserError()
									return (
										void 0 !== e.GetErrorCode && void 0 !== e.GetMessage
											? ((t.code = e.GetErrorCode()),
											  (t.message = e.GetMessage()))
											: void 0 !== e.code && void 0 !== e.message
											? ((t.code = e.code), (t.message = e.message))
											: ((t.code = r.EU_ERROR_UNKNOWN),
											  (t.message = e.toString())),
										t
									)
								}),
								(t.prototype.ProcessArray = function (t, n) {
									var r = this
									return new e(function (e, i) {
										var o = Array(),
											s = 0,
											a = function () {
												s >= t.length
													? e(o)
													: (n(t[s])
															.then(function (e) {
																o.push(e), a()
															})
															.catch(function (e) {
																return i(r.MapError(e))
															}),
													  s++)
											}
										a()
									})
								}),
								(t.prototype.DataToNamedDataArray = function (e) {
									;(e = null != e ? e : []), (e = Array.isArray(e) ? e : [e])
									for (var t = [], n = 0; n < e.length; n++) {
										var r = void 0 !== e[n].name && void 0 !== e[n].val
										t.push({
											name: r ? e[n].name : "Ім'я відсутнє",
											val: r ? e[n].val : e[n],
										})
									}
									return t
								}),
								(t.prototype.DataToResult = function (e, t) {
									for (
										var n = [], r = !Array.isArray(e), i = r ? [e] : e, o = 0;
										o < i.length;
										o++
									) {
										var s =
											void 0 !== i[o].name && void 0 !== i[o].val
												? {
														name: i[o].name,
														val: t[o],
												  }
												: t[o]
										n.push(s)
									}
									return r ? n[0] : n
								}),
								(t.prototype.NamedDataToReference = function (t) {
									var n = this,
										r = n.m_library
									return new e(function (e, i) {
										'string' == typeof t.val
											? r
													.StringToBytes(t.val)
													.then(function (n) {
														var i = r.CreateReference(t.name, n)
														e(i)
													})
													.catch(function (e) {
														return i(n.MapError(e))
													})
											: setTimeout(function () {
													var n = r.CreateReference(t.name, t.val)
													e(n)
											  }, 1)
									})
								}),
								(t.prototype.OnEvent = function (e) {
									try {
										var t =
											this.m_eventListeners[e.type] ||
											this.m_eventListeners[_.EndUserEventType.All]
										t && t(e)
									} catch (e) {}
								}),
								(t.prototype.CheckInitialize = function () {
									var t = this,
										n = t.m_library
									return new e(function (e, i) {
										t.m_initialized
											? e()
											: n
													.Load()
													.then(function () {
														throw n.MakeError(r.EU_ERROR_NOT_INITIALIZED, '')
													})
													.catch(function (e) {
														return i(t.MapError(e))
													})
									})
								}),
								(t.prototype.BeginKMOperation = function () {
									var t = this
									return new e(function (e, n) {
										var r = function () {
											t.m_kmActiveOperation
												? setTimeout(r, 10)
												: ((t.m_kmActiveOperation = !0), e())
										}
										r()
									})
								}),
								(t.prototype.EndKMOperation = function () {
									this.m_kmActiveOperation = !1
								}),
								(t.prototype.GetCASettings = function (e) {
									if (!e) return null
									for (var t = this.m_settings.CAs, n = 0; n < t.length; n++)
										for (var r = t[n].issuerCNs, i = 0; i < r.length; i++)
											if (r[i] == e) return t[n]
									return null
								}),
								(t.prototype.IsCMPCompatible = function (e, t) {
									return (
										!!e.cmpAddress &&
										(void 0 === e.cmpCompatibility ||
											(e.cmpCompatibility & t) == t)
									)
								}),
								(t.prototype.SetCMPSettings = function (t) {
									var n = this,
										i = n.m_library,
										o = this.GetCASettings(t)
									return new e(function (e, s) {
										if (t && null == o)
											throw i.MakeError(r.EU_ERROR_WRITE_SETTINGS, '')
										var a
										a = !(!o || !o.cmpAddress)
										var u = i.CreateCMPSettings()
										u.SetUseCMP(a),
											a && (u.SetAddress(o.cmpAddress), u.SetPort('80')),
											i
												.SetCMPSettings(u)
												.then(function () {
													e()
												})
												.catch(function (e) {
													s(n.MapError(e))
												})
									})
								}),
								(t.prototype.GetJKSPrivateKey = function (t, n) {
									var r = this,
										i = r.m_library
									return new e(function (e, o) {
										var a = {
											alias: null,
											info: null,
										}
										i.EnumJKSPrivateKeys(t, n)
											.then(function (n) {
												if (null != n)
													return (a.alias = n), i.GetJKSPrivateKey(t, n)
												e(null)
											})
											.then(function (e) {
												a.info = e
												for (
													var t = new Array(), n = 0;
													n < e.GetCertificatesCount();
													n++
												)
													t.push(e.GetCertificate(n))
												return r.ProcessArray(t, function (e) {
													return i.ParseCertificateEx(e)
												})
											})
											.then(function (t) {
												var n = new s.a()
												;(n.alias = a.alias),
													(n.privateKey = a.info.GetPrivateKey()),
													(n.certificates = new Array()),
													(n.digitalStamp = !1)
												for (var r = 0; r < t.length; r++) {
													var o = t[r]
													if (o.GetSubjType() == i.EU_SUBJECT_TYPE_END_USER) {
														o.GetPublicKeyType() ==
															i.EU_CERT_KEY_TYPE_DSTU4145 &&
															(o.GetKeyUsageType() &
																i.EU_KEY_USAGE_DIGITAL_SIGNATURE) ==
																i.EU_KEY_USAGE_DIGITAL_SIGNATURE &&
															(n.digitalStamp =
																o
																	.GetExtKeyUsages()
																	.indexOf(i.EU_UA_OID_EXT_KEY_USAGE_STAMP) >
																-1)
														var l = new u.EndUserCertificate()
														;(l.data = a.info.GetCertificate(r)),
															(l.infoEx = c.a.MapToEndUserCertificateInfoEx(
																o,
																new p.a()
															)),
															n.certificates.push(l)
													}
												}
												;(n.digitalStamp = !1), e(n)
											})
											.catch(function (e) {
												return o(r.MapError(e))
											})
									})
								}),
								(t.prototype.SaveCertificatesInternal = function (t) {
									var n = this,
										r = this.m_library
									return new e(function (e, i) {
										t
											? Array.isArray(t)
												? n
														.ProcessArray(t, function (e) {
															return r.SaveCertificate(e)
														})
														.then(function () {
															return e()
														})
														.catch(function (e) {
															return i(e)
														})
												: r
														.SaveCertificates(t)
														.then(function () {
															return e()
														})
														.catch(function (e) {
															return i(e)
														})
											: e()
									})
								}),
								(t.prototype.CtxReadPrivateKeyInternal = function (
									t,
									n,
									i,
									o,
									s,
									a,
									u
								) {
									void 0 === u && (u = !0)
									var l = this,
										c = this.m_library,
										p = {
											pkContext: null,
										}
									return (
										t || (t = l.m_context),
										new e(function (e, _) {
											l.SaveCertificatesInternal(s)
												.then(function () {
													return l.SetCMPSettings(a)
												})
												.then(function () {
													return null != n && null != i
														? c.CtxReadPrivateKeyBinary(t, n, i)
														: c.CtxReadPrivateKey(t, o)
												})
												.then(function (e) {
													p.pkContext = e
													var t = e.GetOwnerInfo()
													if (!a) return l.SetCMPSettings(t.GetIssuerCN())
													var n = l.GetCASettings(t.GetIssuerCN())
													if (!n || -1 == n.issuerCNs.indexOf(a))
														throw c.MakeError(r.EU_ERROR_CERT_NOT_FOUND, '')
												})
												.then(function () {
													e(p.pkContext)
												})
												.catch(function (s) {
													null == p.pkContext
														? l.MapError(s).code == r.EU_ERROR_CERT_NOT_FOUND &&
														  !a &&
														  u
															? l
																	.SearchPrivateKeyCertificatesWithCMP(n, i, o)
																	.then(function (e) {
																		return l.CtxReadPrivateKeyInternal(
																			t,
																			n,
																			i,
																			o,
																			e.certs,
																			null,
																			!1
																		)
																	})
																	.then(function (t) {
																		e(t)
																	})
																	.catch(function (e) {
																		return _(l.MapError(e))
																	})
															: _(l.MapError(s))
														: c
																.CtxFreePrivateKey(p.pkContext)
																.then(function () {
																	_(l.MapError(s))
																})
																.catch(function () {
																	_(l.MapError(s))
																})
												})
										})
									)
								}),
								(t.prototype.ReadPrivateKeyInternal = function (t, n, r, i, s) {
									var a = this
									return new e(function (e, u) {
										a.ResetPrivateKeyInternal()
											.then(function () {
												return a.CtxReadPrivateKeyInternal(
													a.m_context,
													t,
													n,
													r,
													i,
													s,
													!0
												)
											})
											.then(function (t) {
												a.m_pkContext = t
												var n = c.a.MapEndUserOwnerInfo(
													t.GetOwnerInfo(),
													new o.a()
												)
												e(n)
											})
											.catch(function (e) {
												u(a.MapError(e))
											})
									})
								}),
								(t.prototype.ResetPrivateKeyInternal = function () {
									var t = this,
										n = this.m_library
									return new e(function (e, r) {
										null != t.m_pkContext
											? n
													.CtxFreePrivateKey(t.m_pkContext)
													.then(function () {
														;(t.m_pkContext = null), e()
													})
													.catch(function (e) {
														return r(t.MapError(e))
													})
											: e()
									})
								}),
								(t.prototype.SearchPrivateKeyCertificatesWithCMP = function (
									t,
									n,
									i,
									o
								) {
									var s = this,
										a = s.m_library,
										u = s.m_settings.CAs
									return new e(function (e, l) {
										;(null != t && null != n
											? a.GetKeyInfoBinary(t, n)
											: a.GetKeyInfo(i)
										)
											.then(function (t) {
												var n = function (i, c) {
													if (i >= u.length) {
														var p = a.MakeError(
															c
																? r.EU_ERROR_CERT_NOT_FOUND
																: r.EU_ERROR_TRANSMIT_REQUEST,
															''
														)
														l(s.MapError(p))
													} else {
														var f = o
															? _.EndUserCMPCompatibility.DownloadEUCerts
															: _.EndUserCMPCompatibility.SearchEUCerts
														s.IsCMPCompatible(u[i], f)
															? o && -1 == u[i].issuerCNs.indexOf(o)
																? n(i + 1, c)
																: a
																		.GetCertificatesByKeyInfo(
																			t,
																			[u[i].cmpAddress],
																			['80']
																		)
																		.then(function (t) {
																			e({
																				certs: t,
																				CACommonName: u[i].issuerCNs[0],
																			})
																		})
																		.catch(function (e) {
																			var t = e.GetErrorCode()
																			;(t != r.EU_ERROR_CERT_NOT_FOUND &&
																				t != r.EU_ERROR_TRANSMIT_REQUEST) ||
																				(c =
																					c || t == r.EU_ERROR_CERT_NOT_FOUND),
																				n(i + 1, c)
																		})
															: n(i + 1, c)
													}
												}
												n(0, !1)
											})
											.catch(function (e) {
												return l(s.MapError(e))
											})
									})
								}),
								(t.prototype.GetUserCertificatesFromCertificates = function (
									t
								) {
									var n = this,
										r = n.m_library
									return new e(function (e, i) {
										var o = new Array(),
											s = function (a) {
												r.GetCertificateFromSignedData(a, t)
													.then(function (t) {
														if (null != t) {
															var n = new u.EndUserCertificate()
															return (
																(n.data = t), o.push(n), r.ParseCertificateEx(t)
															)
														}
														for (var i = new Array(), s = 0; s < o.length; s++)
															o[s].infoEx.subjType ==
																r.EU_SUBJECT_TYPE_END_USER && i.push(o[s])
														e(i)
													})
													.then(function (e) {
														;(o[a].infoEx = c.a.MapToEndUserCertificateInfoEx(
															e,
															new p.a()
														)),
															s(a + 1)
													})
													.catch(function (e) {
														return i(n.MapError(e))
													})
											}
										s(0)
									})
								}),
								(t.prototype.GeneratePrivateKeyInternal = function (
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									p,
									_,
									f,
									E
								) {
									var S = this,
										d = this.m_library
									return new e(function (e, y) {
										var C = null == t && null == r,
											T = null != r,
											A = d.CreatePrivateKeyInfo(),
											R = null
										null != f &&
											(R = c.a.MapFromEndUserInfo(f, d.CreateEndUserInfo())),
											d
												.GeneratePrivateKeyEx(
													C,
													t ? t.GetTypeIndex() : -1,
													t ? t.GetDevIndex() : -1,
													t ? t.GetPassword() : r,
													n,
													i,
													o,
													s,
													a,
													u,
													l,
													p,
													_,
													R,
													E,
													A,
													null != r
												)
												.then(function (t) {
													for (var n = new Array(), r = 0; r < t.size(); r++) {
														var i = t.get(r)
														;(i = c.a.MapToEndUserRequestInfo(i, new h.a())),
															n.push(i)
													}
													var o = {
														key: T ? A.GetPrivateKey() : null,
														requests: n,
													}
													e(o)
												})
												.catch(function (e) {
													return y(S.MapError(e))
												})
									})
								}),
								(t.prototype.GetSignAlgoByCertificate = function (e) {
									switch (e.GetInfoEx().GetPublicKeyType()) {
										case _.EndUserCertKeyType.DSTU4145:
											return e.GetInfoEx().GetCertHashType() ==
												_.EndUserCertHashType.GOST34311
												? _.EndUserSignAlgo.DSTU4145WithGOST34311
												: _.EndUserSignAlgo.DSTU4145WithDSTU7564
										case _.EndUserCertKeyType.RSA:
											return _.EndUserSignAlgo.RSAWithSHA
										case _.EndUserCertKeyType.ECDSA:
											return _.EndUserSignAlgo.ECDSAWithSHA
										default:
											return _.EndUserSignAlgo.Unknown
									}
								}),
								(t.prototype.GetHashAlgoBySignAlgo = function (e) {
									var t = this.m_library
									switch (e) {
										case _.EndUserSignAlgo.DSTU4145WithGOST34311:
											return _.EndUserHashAlgo.GOST34311
										case _.EndUserSignAlgo.RSAWithSHA:
										case _.EndUserSignAlgo.ECDSAWithSHA:
											return _.EndUserHashAlgo.SHA256
										case _.EndUserSignAlgo.DSTU4145WithDSTU7564:
											return _.EndUserHashAlgo.DSTU7564_256
										default:
											throw t.MakeError(r.EU_ERROR_BAD_PARAMETER, '')
									}
								}),
								(t.prototype.CtxSignHashInternal = function (t, n, i, o, s, a) {
									var u = this,
										l = this.m_library,
										c = null != o,
										p = u.DataToNamedDataArray(i),
										_ = u.DataToNamedDataArray(o)
									return new e(function (o, f) {
										u.CheckInitialize()
											.then(function () {
												if (null == t)
													throw l.MakeError(r.EU_ERROR_BAD_CERT, '')
												if (c && p.length != _.length)
													throw l.MakeError(r.EU_ERROR_BAD_PARAMETER, '')
												for (var i = new Array(), o = 0; o < p.length; o++)
													i.push({
														hash: p[o],
														previousSign: c ? _[o] : null,
													})
												return u.ProcessArray(i, function (r) {
													return new e(function (e, i) {
														;(c
															? l.CtxAppendSignHash(
																	t,
																	n,
																	r.hash.val,
																	r.previousSign.val,
																	s
															  )
															: l.CtxSignHash(t, n, r.hash.val, s)
														)
															.then(function (e) {
																return a ? e : l.BASE64Decode(e)
															})
															.then(function (t) {
																e(t)
															})
															.catch(function (e) {
																return i(e)
															})
													})
												})
											})
											.then(function (e) {
												var t = u.DataToResult(i, e)
												o(t)
											})
											.catch(function (e) {
												return f(u.MapError(e))
											})
									})
								}),
								(t.prototype.CtxSignDataInternal = function (
									t,
									n,
									i,
									o,
									s,
									a,
									u
								) {
									var l = this,
										c = this,
										p = this.m_library,
										f = null != o,
										E = c.DataToNamedDataArray(i),
										h = c.DataToNamedDataArray(o)
									return new e(function (S, d) {
										c.CheckInitialize()
											.then(function () {
												if (null == t)
													throw p.MakeError(r.EU_ERROR_BAD_CERT, '')
												if (f && s && E.length != h.length)
													throw p.MakeError(r.EU_ERROR_BAD_PARAMETER, '')
												return n != _.EndUserSignAlgo.Unknown
													? null
													: p.CtxEnumOwnCertificates(t, 0)
											})
											.then(function (e) {
												if (
													(n == _.EndUserSignAlgo.Unknown &&
														null != e &&
														(n = c.GetSignAlgoByCertificate(e)),
													!s)
												)
													return E
												var t = c.GetHashAlgoBySignAlgo(n)
												return c.HashData(t, E, !0)
											})
											.then(function (r) {
												for (
													var i = new Array(),
														o = f ? h.length : r.length,
														l = 0;
													l < o;
													l++
												)
													i.push({
														dataOrHash: null != r ? r[l] : null,
														previousSign: f ? h[l] : null,
													})
												return c.ProcessArray(i, function (r) {
													return new e(function (e, i) {
														;(f
															? s
																? p.CtxAppendSignHash(
																		t,
																		n,
																		r.dataOrHash.val,
																		r.previousSign.val,
																		a
																  )
																: p.CtxAppendSign(
																		t,
																		n,
																		null,
																		r.previousSign.val,
																		a
																  )
															: s
															? p.CtxSignHash(t, n, r.dataOrHash.val, a)
															: p.CtxSign(t, n, r.dataOrHash.val, !1, a)
														)
															.then(function (e) {
																return u ? e : p.BASE64Decode(e)
															})
															.then(function (t) {
																e(t)
															})
															.catch(function (e) {
																return i(e)
															})
													})
												})
											})
											.then(function (e) {
												var t = l.DataToResult(f && !s ? o : i, e)
												S(t)
											})
											.catch(function (e) {
												return d(c.MapError(e))
											})
									})
								}),
								(t.prototype.LoadTaxReportPKey = function (t, n, i) {
									var o = this,
										s = this.m_library
									return new e(function (e, a) {
										var u = new T()
										if ((Array.isArray(t) || (t = [t]), t.length > 2))
											a(o.MapError(s.MakeError(r.EU_ERROR_BAD_PARAMETER, '')))
										else {
											var l = function (c, p) {
												var f = n[c],
													E = t[p]
												s.CtxGetOwnCertificate(
													E,
													_.EndUserCertKeyType.DSTU4145,
													f
												)
													.then(function (t) {
														if (
															i &&
															f & _.EndUserKeyUsage.DigitalSignature &&
															!(
																t
																	.GetInfoEx()
																	.GetExtKeyUsages()
																	.indexOf(s.EU_UA_OID_EXT_KEY_USAGE_STAMP) > -1
															)
														)
															throw s.MakeError(r.EU_ERROR_BAD_PARAMETER, '')
														if (f & _.EndUserKeyUsage.DigitalSignature)
															(u.signPKCtx = E), (u.signCert = t)
														else {
															if (!(f & _.EndUserKeyUsage.KeyAgreement))
																throw s.MakeError(r.EU_ERROR_BAD_PARAMETER, '')
															;(u.envelopPKCtx = E), (u.envelopCert = t)
														}
														c + 1 < n.length ? l(c + 1, 0) : e(u)
													})
													.catch(function (e) {
														if (e.GetErrorCode() == r.EU_ERROR_CERT_NOT_FOUND) {
															if (p + 1 < t.length) return void l(c, p + 1)
															e = s.MakeError(r.EU_ERROR_BAD_PARAMETER, '')
														}
														a(o.MapError(e))
													})
											}
											l(0, 0)
										}
									})
								}),
								(t.prototype.ProtectTaxReport = function (t, n, i, o, s, a, u) {
									var l = this,
										c = this.m_library,
										p = new f.b()
									p.name = a.name
									var _ = function (t, n) {
											return new e(function (e, r) {
												return c
													.CtxSign(
														t.signPKCtx,
														l.GetSignAlgoByCertificate(t.signCert),
														n,
														!1,
														!0
													)
													.then(function (e) {
														return c.BASE64Decode(e)
													})
													.then(function (e) {
														return c.AppendCryptoHeader(
															c.EU_HEADER_CA_TYPE,
															c.EU_HEADER_PART_TYPE_SIGNED,
															e
														)
													})
													.then(function (t) {
														e(t)
													})
													.catch(function (e) {
														return r(l.MapError(e))
													})
											})
										},
										E = function (t, n) {
											return new e(function (r, i) {
												return c
													.CtxEnvelop(
														t.envelopPKCtx,
														[s],
														c.EU_RECIPIENT_APPEND_ISSUER_AND_SERIAL,
														!1,
														!1,
														n
													)
													.then(function (e) {
														return c.BASE64Decode(e)
													})
													.then(function (e) {
														return c.AppendCryptoHeader(
															c.EU_HEADER_CA_TYPE,
															c.EU_HEADER_PART_TYPE_ENCRYPTED,
															e
														)
													})
													.then(function (n) {
														var r = t.envelopCert,
															i =
																c.EU_KEY_USAGE_DIGITAL_SIGNATURE |
																c.EU_KEY_USAGE_KEY_AGREEMENT
														return i == (r.GetInfoEx().GetKeyUsageType() & i)
															? n
															: (function (t, n) {
																	return new e(function (e, r) {
																		return c
																			.AppendCryptoHeader(
																				c.EU_HEADER_CA_TYPE,
																				c.EU_HEADER_PART_TYPE_CERTCRYPT,
																				t
																			)
																			.then(function (t) {
																				var r = new Uint8Array(
																					t.byteLength + n.byteLength
																				)
																				r.set(new Uint8Array(t), 0),
																					r.set(
																						new Uint8Array(n),
																						t.byteLength
																					),
																					e(r)
																			})
																			.catch(function (e) {
																				return r(l.MapError(e))
																			})
																	})
															  })(r.GetData(), n)
													})
													.then(function (e) {
														return _(t, e)
													})
													.then(function (e) {
														r({
															reportData: e,
															ownCert: t.envelopCert.GetData(),
														})
													})
													.catch(function (e) {
														return i(l.MapError(e))
													})
											})
										}
									return new e(function (s, f) {
										new e(function (e, t) {
											e(a.data)
										})
											.then(function (e) {
												return null != t ? _(t, e) : e
											})
											.then(function (e) {
												return null != n ? _(n, e) : e
											})
											.then(function (e) {
												return null != i ? _(i, e) : e
											})
											.then(function (e) {
												return (
													u && (p.signedData = e),
													null != n || null != i
														? E(null != i ? i : n, e)
														: {
																reportData: e,
																ownCert: t.signCert.GetData(),
														  }
												)
											})
											.then(function (e) {
												return c.AppendTransportHeader(
													c.EU_HEADER_CA_TYPE,
													a.name,
													o,
													e.ownCert,
													e.reportData
												)
											})
											.then(function (e) {
												;(p.data = e),
													(p.error = l.MapError(
														c.MakeError(r.EU_ERROR_NONE, '')
													)),
													s(p)
											})
											.catch(function (e) {
												;(p.error = l.MapError(e)), s(p)
											})
									})
								}),
								(t.prototype.UnprotectTaxReceipt = function (t, n) {
									var i = this,
										o = this.m_library,
										s = new f.a()
									return (
										(s.data = null),
										(s.receiptNumber = 0),
										(s.initiators = []),
										(s.error = null),
										new e(function (a, u) {
											var l
											;((l = n.data),
											new e(function (e, t) {
												o.ParseTransportHeader(l)
													.then(function (t) {
														;(s.receiptNumber = t.GetReceiptNumber()),
															e(t.GetCryptoData())
													})
													.catch(function (n) {
														n.GetErrorCode() == r.EU_ERROR_PKI_FORMATS_FAILED
															? e(l)
															: t(i.MapError(n))
													})
											}))
												.then(function (n) {
													var l = function (n) {
														;(function (n) {
															var a = {
																headerInfo: null,
															}
															return new e(function (e, u) {
																o.ParseCryptoHeader(n)
																	.then(function (e) {
																		a.headerInfo = e
																		var n = e.GetCryptoData()
																		switch (e.GetHeaderType()) {
																			case o.EU_HEADER_PART_TYPE_SIGNED:
																				return o.VerifyDataInternalOnTimeEx(
																					n,
																					0,
																					null,
																					!1,
																					!1
																				)
																			case o.EU_HEADER_PART_TYPE_ENCRYPTED:
																				return o.CtxDevelop(t, n)
																			case o.EU_HEADER_PART_TYPE_STAMPED:
																			case o.EU_HEADER_PART_TYPE_CERTCRYPT:
																				return null
																			default:
																				throw o.MakeError(
																					r.EU_ERROR_PKI_FORMATS_FAILED,
																					''
																				)
																		}
																	})
																	.then(function (t) {
																		if (null != t) {
																			var r =
																				a.headerInfo.GetHeaderType() ==
																				o.EU_HEADER_PART_TYPE_SIGNED
																					? c.a.MapToEndUserSignInfo(
																							t,
																							new d.a()
																					  )
																					: c.a.MapToEndUserSenderInfo(
																							t,
																							new y.a()
																					  )
																			s.initiators.push(r), (n = t.GetData())
																		} else n = n.slice(a.headerInfo.GetHeaderSize() + a.headerInfo.GetCryptoData().length, n.length)
																		e(n)
																	})
																	.catch(function (t) {
																		t.GetErrorCode() == r.EU_ERROR_BAD_PARAMETER
																			? e(null)
																			: u(i.MapError(t))
																	})
															})
														})(n)
															.then(function (e) {
																if (null == e)
																	return (
																		(s.data = n),
																		(s.error = i.MapError(
																			o.MakeError(r.EU_ERROR_NONE, '')
																		)),
																		void a(s)
																	)
																l(e)
															})
															.catch(function (e) {
																return u(i.MapError(e))
															})
													}
													l(n)
												})
												.catch(function (e) {
													return u(i.MapError(e))
												})
										})
									)
								}),
								(t.prototype.GetKSPSettings = function (e) {
									var t
									if (!this.m_settings.KSPs) return null
									if ('string' == typeof e) {
										for (t = 0; t < this.m_settings.KSPs.length; t++)
											if (this.m_settings.KSPs[t].name == e)
												return this.m_settings.KSPs[t]
										return null
									}
									if ('number' == typeof e) {
										for (t = 0; t < this.m_settings.KSPs.length; t++)
											if (this.m_settings.KSPs[t].ksp == e)
												return this.m_settings.KSPs[t]
										return null
									}
									return null
								}),
								(t.prototype.GetPollingInterval = function (e) {
									return e && 'number' == typeof e.pollingInterval
										? 1e3 * e.pollingInterval
										: 1e3
								}),
								(t.prototype.MakeNewCertificateKSP = function (
									t,
									n,
									i,
									o,
									s,
									a,
									l,
									p,
									_,
									f,
									E,
									h,
									S,
									d,
									y,
									C,
									T,
									A
								) {
									void 0 === C && (C = !1),
										void 0 === T && (T = null),
										void 0 === A && (A = null)
									var R = this,
										m = R.m_library,
										g = {
											kspSettings: null,
											userId: null,
											operationId: null,
										},
										P = {
											key: null,
											certs: null,
										}
									return new e(function (p, E) {
										R.CheckInitialize()
											.then(function () {
												return R.BeginKMOperation()
											})
											.then(function () {
												var e = null
												return (
													null != t &&
														(e = c.a.MapFromKeyMedia(t, m.CreateKeyMedia())),
													C ? null : R.ReadPrivateKeyInternal(n, i, e, null, d)
												)
											})
											.then(function (e) {
												return y && !C
													? m.CtxGetOwnEUserParams(R.m_pkContext)
													: null
											})
											.then(function (e) {
												return y
													? m.CtxModifyOwnEUserParams(
															R.m_pkContext,
															y.phone,
															y.EMail
													  )
													: null
											})
											.then(function () {
												if (
													((g.userId = T),
													(g.kspSettings = R.GetKSPSettings(A)),
													!g.kspSettings || !g.kspSettings.address)
												)
													throw m.MakeError(r.EU_ERROR_BAD_PARAMETER, '')
												var e = []
												;(e[m.EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOSTS] =
													'DSTU4145'),
													(e[m.EU_KEYS_TYPE_RSA_WITH_SHA] = 'RSA'),
													(s != m.EU_KEYS_LENGTH_DS_UA_FILE &&
														s != m.EU_KEYS_LENGTH_DS_UA_CERT) ||
														(s = m.EU_KEYS_LENGTH_DS_UA_257),
													(l != m.EU_KEYS_LENGTH_KEP_UA_FILE &&
														l != m.EU_KEYS_LENGTH_KEP_UA_CERT) ||
														(l = m.EU_KEYS_LENGTH_KEP_UA_431),
													(f != m.EU_KEYS_LENGTH_DS_RSA_FILE &&
														f != m.EU_KEYS_LENGTH_DS_RSA_CERT) ||
														(f = m.EU_KEYS_LENGTH_DS_RSA_2048)
												var t = []
												;(t[m.EU_KEYS_LENGTH_DS_UA_191] = 191),
													(t[m.EU_KEYS_LENGTH_DS_UA_257] = 257),
													(t[m.EU_KEYS_LENGTH_DS_UA_307] = 307)
												var n = []
												;(n[m.EU_KEYS_LENGTH_KEP_UA_257] = 257),
													(n[m.EU_KEYS_LENGTH_KEP_UA_431] = 431),
													(n[m.EU_KEYS_LENGTH_KEP_UA_571] = 571)
												var i = []
												;(i[m.EU_KEYS_LENGTH_DS_RSA_1024] = 1024),
													(i[m.EU_KEYS_LENGTH_DS_RSA_2048] = 2048),
													(i[m.EU_KEYS_LENGTH_DS_RSA_3072] = 3072),
													(i[m.EU_KEYS_LENGTH_DS_RSA_4096] = 4096)
												var u = e[o] || null,
													c = t[s] || 0,
													p = n[l] || 0,
													E = e[_] || null,
													h = i[f] || 0,
													S = 'Веб-сайт: %s'.replace(
														'%s',
														g.kspSettings.systemId || R.m_origin
													),
													d = 'Генерація ос. ключа у системі %s'.replace(
														'%s',
														g.kspSettings.systemId || R.m_origin
													)
												return m.SServerClientGeneratePrivateKeyAsync(
													g.kspSettings.address,
													g.kspSettings.port,
													g.userId,
													S,
													d,
													u,
													c,
													a,
													p,
													E,
													h
												)
											})
											.then(function (t) {
												g.operationId = t
												var n = R.GetPollingInterval(g.kspSettings),
													i = R.MakeExpireDate(300)
												return new e(function (e, t) {
													var o = function (i) {
														new Date() > i
															? t(m.MakeError(r.EU_ERROR_TRANSMIT_REQUEST, ''))
															: R.m_library
																	.SServerClientCheckGeneratePrivateKeyStatus(
																		g.kspSettings.address,
																		g.kspSettings.port,
																		g.userId,
																		g.operationId
																	)
																	.then(function (t) {
																		null != t
																			? e(t)
																			: setTimeout(function () {
																					o(i)
																			  }, n)
																	})
																	.catch(function (e) {
																		t(R.MapError(e))
																	})
													}
													o(i)
												})
											})
											.then(function (e) {
												for (
													var t = null, n = null, r = null, i = 0;
													i < e.size();
													i++
												) {
													var o = e.get(i)
													switch (o.GetRequestType()) {
														case m.EU_KEYS_REQUEST_TYPE_UA_DS:
															t = o.GetRequest()
															break
														case m.EU_KEYS_REQUEST_TYPE_UA_KEP:
															n = o.GetRequest()
															break
														case m.EU_KEYS_REQUEST_TYPE_INTERNATIONAL:
															r = o.GetRequest()
													}
												}
												return R.m_library.CtxMakeNewOwnCertificateWithCR(
													R.m_pkContext,
													t,
													n,
													r,
													null
												)
											})
											.then(function () {
												var e = 'Веб-сайт: %s'.replace(
														'%s',
														g.kspSettings.systemId || R.m_origin
													),
													t = 'Ідентифікація клієнта у системі %s'.replace(
														'%s',
														g.kspSettings.systemId || R.m_origin
													)
												return m.SServerClientSignHashesAsync(
													g.kspSettings.address,
													g.kspSettings.port,
													g.userId,
													e,
													t,
													['Зчитування ос. ключа'],
													['AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='],
													'DSTU4145'
												)
											})
											.then(function (t) {
												g.operationId = t
												var n = R.GetPollingInterval(g.kspSettings),
													i = R.MakeExpireDate(300)
												return new e(function (e, t) {
													var o = function (i) {
														new Date() > i
															? t(m.MakeError(r.EU_ERROR_TRANSMIT_REQUEST, ''))
															: m
																	.SServerClientCheckSignHashesStatus(
																		g.kspSettings.address,
																		g.kspSettings.port,
																		g.userId,
																		g.operationId
																	)
																	.then(function (s) {
																		if (null != s)
																			if (1 == s.size()) {
																				var a = s.get(0)
																				if (a.GetError() == r.EU_ERROR_NONE) {
																					var l = a.GetSignature(),
																						p = new u.EndUserCertificate()
																					m.CtxGetSignerInfo(R.m_context, 0, l)
																						.then(function (t) {
																							c.a.MapToEndUserCertificate(t, p),
																								e([p])
																						})
																						.catch(function (e) {
																							return t(R.MapError(e))
																						})
																				} else
																					t(
																						m.MakeError(
																							a.GetError(),
																							a.GetStatus()
																						)
																					)
																			} else
																				t(
																					m.MakeError(
																						r.EU_ERROR_PKI_FORMATS_FAILED,
																						''
																					)
																				)
																		else
																			setTimeout(function () {
																				o(i)
																			}, n)
																	})
																	.catch(function (e) {
																		t(R.MapError(e))
																	})
													}
													o(i)
												})
											})
											.then(function (e) {
												R.EndKMOperation(), (P.certs = e), p(P)
											})
											.catch(function (e) {
												R.ResetPrivateKeyInternal()
													.then(function () {
														R.EndKMOperation(), E(R.MapError(e))
													})
													.catch(function () {
														R.EndKMOperation(), E(R.MapError(e))
													})
											})
									})
								}),
								(t.prototype.AddEventListener = function (t, n) {
									var i = this,
										o = i.m_library
									return new e(function (e, s) {
										if (
											[
												_.EndUserEventType.None,
												_.EndUserEventType.All,
												_.EndUserEventType.ConfirmKSPOperation,
											].indexOf(t) < 0
										)
											s(i.MapError(o.MakeError(r.EU_ERROR_BAD_PARAMETER, '')))
										else {
											switch (t) {
												case _.EndUserEventType.None:
													i.m_eventListeners = []
													break
												case _.EndUserEventType.All:
													;(i.m_eventListeners = []),
														(i.m_eventListeners[t] = n)
													break
												default:
													i.m_eventListeners[t] = n
											}
											e()
										}
									})
								}),
								(t.prototype.GetLibraryInfo = function (t) {
									var n = this,
										r = this.m_library
									return new e(function (e, i) {
										var o = new l.b()
										;(o.supported = r.IsSupported()),
											(o.isSignAgentSupported = r.IsSignAgentSupported()),
											(o.isWebExtensionSupported = r.IsWebExtensionSupported()),
											(o.isNPAPISupported = r.IsNPAPISupported()),
											(o.isActiveXSupported = r.IsActiveXSupported()),
											(o.isWebExtensionInstalled = r.IsWebExtensionInstalled()),
											(o.nativeLibraryInstallURLs = r.GetInstallURL(!0, t)),
											(o.nativeLibraryInstallURL = o.nativeLibraryInstallURLs
												? o.nativeLibraryInstallURLs[0]
												: null),
											(o.nativeLibraryUpdateURLs = r.GetUpdateURL(!0, t)),
											(o.nativeLibraryUpdateURL = o.nativeLibraryUpdateURLs
												? o.nativeLibraryUpdateURLs[0]
												: null),
											(o.webExtensionInstallURL =
												r.GetWebExtensionInstallURL()),
											(o.helpURL = r.GetHelpURL(t)),
											o.supported
												? r
														.Load()
														.then(function () {
															;(o.loaded = !0),
																r
																	.GetVersion()
																	.then(function (t) {
																		;(o.version = t), e(o)
																	})
																	.catch(function (e) {
																		return i(n.MapError(e))
																	})
														})
														.catch(function (t) {
															var i = n.MapError(t)
															;(o.loaded = !1),
																(o.isNativeLibraryNeedUpdate =
																	r.IsLibraryVersionNotSupportedError(i.code)),
																e(o)
														})
												: e(o)
									})
								}),
								(t.prototype.IsInitialized = function () {
									var t = this
									return new e(function (e, n) {
										e(t.m_initialized)
									})
								}),
								(t.prototype.Initialize = function (t) {
									var n = this,
										r = n.m_library
									n.m_settings = t
									var i = {
										offline: !0,
										tspSettings: null,
										useOCSP: !1,
									}
									return new e(function (e, o) {
										r.Load()
											.then(function () {
												return r.SetRuntimeParameter(
													r.EU_SAVE_SETTINGS_PARAMETER,
													r.EU_SETTINGS_ID_PROXY
												)
											})
											.then(function () {
												return r.SetUIMode(!1)
											})
											.then(function () {
												return r.Initialize()
											})
											.then(function () {
												return r.SetUIMode(!1)
											})
											.then(function () {
												return r.SetCharset(n.m_settings.encoding)
											})
											.then(function () {
												return r.SetLanguage(n.m_settings.language)
											})
											.then(function () {
												return r.InitializeMandatorySettings()
											})
											.then(function () {
												var e = r.CreateFileStoreSettings()
												return (
													e.SetPath(''),
													e.SetSaveLoadedCerts(!0),
													r.SetFileStoreSettings(e)
												)
											})
											.then(function () {
												return null != n.m_settings.CAs &&
													'string' == typeof n.m_settings.CAs
													? r.DownloadData(n.m_settings.CAs, 'json')
													: n.m_settings.CAs
											})
											.then(function (e) {
												;(n.m_settings.CAs = e),
													(i.tspSettings = n.GetDefaultTSPSettings())
												for (var t = 0; t < e.length; t++)
													if (
														e[t].ocspAccessPointAddress &&
														e[t].ocspAccessPointPort
													) {
														i.useOCSP = !0
														break
													}
												i.offline = !i.tspSettings && !i.useOCSP
												var o = r.CreateModeSettings()
												return o.SetOfflineMode(i.offline), r.SetModeSettings(o)
											})
											.then(function () {
												var e = r.CreateTSPSettings()
												return (
													e.SetGetStamps(!!i.tspSettings),
													i.tspSettings &&
														(e.SetAddress(i.tspSettings.tspAddress),
														e.SetPort(i.tspSettings.tspAddressPort)),
													r.SetTSPSettings(e)
												)
											})
											.then(function () {
												var e = r.CreateOCSPSettings()
												return (
													e.SetUseOCSP(i.useOCSP),
													i.useOCSP &&
														(e.SetBeforeStore(!0),
														e.SetAddress('czo.gov.ua'),
														e.SetPort('80')),
													r.SetOCSPSettings(e)
												)
											})
											.then(function () {
												var e = r.CreateOCSPAccessInfoModeSettings()
												return (
													e.SetEnabled(i.useOCSP),
													r.SetOCSPAccessInfoModeSettings(e)
												)
											})
											.then(function () {
												if (i.useOCSP) {
													for (
														var e = new Array(), t = n.m_settings.CAs, o = 0;
														o < t.length;
														o++
													)
														for (var s = 0; s < t[o].issuerCNs.length; s++) {
															var a = r.CreateOCSPAccessInfoSettings()
															a.SetAddress(t[o].ocspAccessPointAddress),
																a.SetPort(t[o].ocspAccessPointPort),
																a.SetIssuerCN(t[o].issuerCNs[s]),
																e.push(a)
														}
													return r.SetOCSPAccessInfoSettings(e)
												}
											})
											.then(function () {
												return null != t.CACertificates &&
													'string' == typeof t.CACertificates
													? r.DownloadData(t.CACertificates, 'binary')
													: t.CACertificates
											})
											.then(function (e) {
												if (null != t.CACertificates)
													return r.SaveCertificates(e)
											})
											.then(function () {
												var e = !!t.TSLAddress,
													n = r.CreateTSLSettings()
												return (
													n.SetUseTSL(e),
													n.SetAutoDownloadTSL(!!e),
													n.SetTSLAddress(e ? t.TSLAddress : ''),
													r.SetTSLSettings(n)
												)
											})
											.then(function () {
												return r.SetRuntimeParameter(
													r.EU_RESOLVE_OIDS_PARAMETER,
													n.m_resolveOIDs
												)
											})
											.then(function () {
												if ('number' == typeof n.m_settings.connectionTimeout)
													return r.SetRuntimeParameter(
														r.EU_CONNECTIONS_TIMEOUT_PARAMETER,
														n.m_settings.connectionTimeout
													)
											})
											.then(function () {
												if ('number' == typeof t.ocspResponseExpireTime)
													return r.SetOCSPResponseExpireTime(
														n.m_settings.ocspResponseExpireTime
													)
											})
											.then(function () {
												return r.CtxCreate()
											})
											.then(function (e) {
												return (
													(n.m_context = e),
													r.CtxSetParameter(
														e,
														r.EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
														n.m_resolveOIDs
													)
												)
											})
											.then(function () {
												return r.SetRuntimeParameter(
													r.EU_CHECK_CERT_CHAIN_ON_SIGN_TIME_PARAMETER,
													!0
												)
											})
											.then(function () {
												return null != n.m_settings.signInfoTmpl &&
													'string' == typeof n.m_settings.signInfoTmpl
													? r.DownloadData(n.m_settings.signInfoTmpl, '')
													: n.m_settings.signInfoTmpl
											})
											.then(function (t) {
												;(n.m_settings.signInfoTmpl = t),
													(n.m_initialized = !0),
													e()
											})
											.catch(function (e) {
												return o(n.MapError(e))
											})
									})
								}),
								(t.prototype.SetLanguage = function (t) {
									var n = this,
										r = n.m_library
									return new e(function (e, i) {
										n.CheckInitialize()
											.then(function () {
												return r.SetLanguage(t)
											})
											.then(function () {
												n.m_settings.language = t
											})
											.then(function () {
												e()
											})
											.catch(function (e) {
												return i(n.MapError(e))
											})
									})
								}),
								(t.prototype.SetRuntimeParameter = function (t, n) {
									var r = this,
										i = r.m_library
									return new e(function (e, o) {
										r.CheckInitialize()
											.then(function () {
												return i.SetRuntimeParameter(t, n)
											})
											.then(function () {
												return t != i.EU_USE_SLOGIN_PRIVATE_KEY
													? null
													: i.CtxSetParameter(r.m_context, t, n)
											})
											.then(function () {
												e()
											})
											.catch(function (e) {
												return o(r.MapError(e))
											})
									})
								}),
								(t.prototype.GetStorageParameter = function (t, n) {
									var r = this,
										i = r.m_library
									return new e(function (e, o) {
										r.CheckInitialize()
											.then(function () {
												return i.GetStorageParameter(n, t)
											})
											.then(function (t) {
												e(t)
											})
											.catch(function (e) {
												return o(r.MapError(e))
											})
									})
								}),
								(t.prototype.SetStorageParameter = function (t, n, r) {
									var i = this,
										o = i.m_library
									return new e(function (e, s) {
										i.CheckInitialize()
											.then(function () {
												return o.SetStorageParameter(r, t, n)
											})
											.then(function () {
												e()
											})
											.catch(function (e) {
												return s(i.MapError(e))
											})
									})
								}),
								(t.prototype.GetCAs = function () {
									var t = this
									return new e(function (e, n) {
										t.CheckInitialize()
											.then(function () {
												e(t.m_settings.CAs)
											})
											.catch(function (e) {
												return n(t.MapError(e))
											})
									})
								}),
								(t.prototype.GetProxySettings = function () {
									var t = this,
										n = t.m_library
									return new e(function (e, r) {
										t.CheckInitialize()
											.then(function () {
												return n.GetProxySettings()
											})
											.then(function (t) {
												var n = c.a.MapToProxySettings(t, new i.b())
												e(n)
											})
											.catch(function (e) {
												return r(t.MapError(e))
											})
									})
								}),
								(t.prototype.SetProxySettings = function (t) {
									var n = this,
										r = n.m_library
									return new e(function (e, i) {
										n.CheckInitialize()
											.then(function () {
												var e = c.a.MapFromProxySettings(
													t,
													r.CreateProxySettings()
												)
												return r.SetProxySettings(e)
											})
											.then(function () {
												e()
											})
											.catch(function (e) {
												return i(n.MapError(e))
											})
									})
								}),
								(t.prototype.GetHostInfo = function () {
									var t = this,
										n = t.m_library
									return new e(function (e, r) {
										t.CheckInitialize()
											.then(function () {
												return n.GetHostInfo()
											})
											.then(function (t) {
												e(t)
											})
											.catch(function (e) {
												return r(t.MapError(e))
											})
									})
								}),
								(t.prototype.GetKeyMedias = function () {
									var t = this,
										n = t.m_library,
										r = new Array(),
										i = null
									return (
										t.m_settings.allowedKeyMediaDevices &&
											((i = {}),
											t.m_settings.allowedKeyMediaDevices.forEach(function (e) {
												i[e.type] = e.devices
											})),
										new e(function (e, o) {
											t.CheckInitialize()
												.then(function () {
													return t.BeginKMOperation()
												})
												.then(function () {
													return t.m_kmTypes
														? t.m_kmTypes
														: n.GetKeyMediaTypes()
												})
												.then(function (e) {
													t.m_kmTypes = e
													var i = t.m_settings.allowedKeyMediaTypes
													r = new Array()
													for (var o = 0; o < e.length; o++) {
														var s = e[o]
														;(!i || i.indexOf(s) >= 0) && r.push(o)
													}
													return n.GetKeyMediaDevices(r)
												})
												.then(function (n) {
													for (var o = new Array(), s = 0; s < n.length; s++)
														for (
															var a = r[s],
																l = t.m_kmTypes[a],
																c = n[s],
																p = i && i[l] ? i[l] : null,
																_ = 0;
															_ < c.length;
															_++
														)
															if (!p || -1 != p.indexOf(c[_])) {
																var f = new u.EndUserKeyMedia()
																;(f.typeIndex = a),
																	(f.devIndex = _),
																	(f.password = null),
																	(f.type = l),
																	(f.device = c[_]),
																	(f.visibleName =
																		f.device + '(' + f.type + ')'),
																	o.push(f)
															}
													t.EndKMOperation(), e(o)
												})
												.catch(function (e) {
													t.EndKMOperation(), o(t.MapError(e))
												})
										})
									)
								}),
								(t.prototype.GetJKSPrivateKeys = function (t) {
									var n = this
									return new e(function (e, r) {
										n.CheckInitialize()
											.then(function () {
												var i = new Array(),
													o = function (s) {
														n.GetJKSPrivateKey(t, s)
															.then(function (t) {
																t ? (i.push(t), o(s + 1)) : e(i)
															})
															.catch(function (e) {
																return r(n.MapError(e))
															})
													}
												o(0)
											})
											.catch(function (e) {
												return r(n.MapError(e))
											})
									})
								}),
								(t.prototype.IsPrivateKeyReaded = function () {
									var t = this
									return new e(function (e, n) {
										t.CheckInitialize()
											.then(function () {
												e(null != t.m_pkContext)
											})
											.catch(function (e) {
												return n(t.MapError(e))
											})
									})
								}),
								(t.prototype.ResetPrivateKey = function () {
									var t = this
									return new e(function (e, n) {
										t.CheckInitialize()
											.then(function () {
												return t.ResetPrivateKeyInternal()
											})
											.then(function () {
												e()
											})
											.catch(function (e) {
												return n(t.MapError(e))
											})
									})
								}),
								(t.prototype.ResetOperationKSP = function () {
									var t = this,
										n = this.m_library
									return new e(function (e, i) {
										t.CheckInitialize()
											.then(function () {
												throw n.MakeError(r.EU_ERROR_NOT_SUPPORTED, '')
											})
											.catch(function (e) {
												return i(t.MapError(e))
											})
									})
								}),
								(t.prototype.ReadPrivateKey = function (t, n, r) {
									var i = this,
										o = this.m_library
									return new e(function (e, s) {
										i.CheckInitialize()
											.then(function () {
												i.BeginKMOperation()
											})
											.then(function () {
												var e = c.a.MapFromKeyMedia(t, o.CreateKeyMedia())
												return i.ReadPrivateKeyInternal(null, null, e, n, r)
											})
											.then(function (t) {
												i.EndKMOperation(), e(t)
											})
											.catch(function (e) {
												i.EndKMOperation(), s(i.MapError(e))
											})
									})
								}),
								(t.prototype.ReadPrivateKeyBinary = function (t, n, r, i) {
									var o = this
									return new e(function (e, s) {
										o.CheckInitialize()
											.then(function () {
												return o.ReadPrivateKeyInternal(t, n, null, r, i)
											})
											.then(function (t) {
												e(t)
											})
											.catch(function (e) {
												return s(o.MapError(e))
											})
									})
								}),
								(t.prototype.ReadPrivateKeySIM = function (t, n, i, o) {
									var s = this,
										a = this.m_library
									return new e(function (e, t) {
										s.CheckInitialize()
											.then(function () {
												throw a.MakeError(r.EU_ERROR_NOT_SUPPORTED, '')
											})
											.catch(function (e) {
												return t(s.MapError(e))
											})
									})
								}),
								(t.prototype.ReadPrivateKeyKSP = function (t, n, i, o, s, a) {
									var u = this,
										l = this.m_library
									return new e(function (e, t) {
										u.CheckInitialize()
											.then(function () {
												throw l.MakeError(r.EU_ERROR_NOT_SUPPORTED, '')
											})
											.catch(function (e) {
												return t(u.MapError(e))
											})
									})
								}),
								(t.prototype.GetOwnCertificates = function () {
									return this.CtxGetOwnCertificates(this.m_pkContext)
								}),
								(t.prototype.GetOwnEUserParams = function () {
									var t = this,
										n = t.m_library
									return new e(function (e, i) {
										t.CheckInitialize()
											.then(function () {
												if (null == t.m_pkContext)
													throw n.MakeError(r.EU_ERROR_BAD_CERT, '')
												return n.CtxGetOwnEUserParams(t.m_pkContext)
											})
											.then(function (t) {
												var n = c.a.MapToEndUserParams(t, new E.a())
												e(n)
											})
											.catch(function (e) {
												return i(t.MapError(e))
											})
									})
								}),
								(t.prototype.ChangeOwnCertificatesStatus = function (t, n) {
									var i = this,
										o = i.m_library
									return new e(function (e, s) {
										i.CheckInitialize()
											.then(function () {
												if (null == i.m_pkContext)
													throw o.MakeError(r.EU_ERROR_BAD_CERT, '')
												return o.CtxChangeOwnCertificatesStatus(
													i.m_pkContext,
													t,
													n
												)
											})
											.then(function () {
												e()
											})
											.catch(function (e) {
												return s(i.MapError(e))
											})
									})
								}),
								(t.prototype.MakeNewCertificate = function (
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									p,
									_,
									f,
									E,
									h,
									S,
									d,
									y,
									C
								) {
									void 0 === d && (d = !1),
										void 0 === y && (y = null),
										void 0 === C && (C = null)
									var T = this,
										A = T.m_library,
										R = {
											key: null,
											certs: null,
										}
									return null != y || null != C
										? T.MakeNewCertificateKSP(
												t,
												n,
												r,
												i,
												o,
												s,
												a,
												u,
												l,
												p,
												_,
												f,
												E,
												h,
												S,
												d,
												y,
												C
										  )
										: new e(function (y, C) {
												T.CheckInitialize()
													.then(function () {
														return T.BeginKMOperation()
													})
													.then(function () {
														var e = null
														return (
															null != t &&
																(e = c.a.MapFromKeyMedia(
																	t,
																	A.CreateKeyMedia()
																)),
															d
																? null
																: T.ReadPrivateKeyInternal(n, r, e, null, h)
														)
													})
													.then(function (e) {
														return S && !d
															? A.CtxGetOwnEUserParams(T.m_pkContext)
															: null
													})
													.then(function (e) {
														return S
															? A.CtxModifyOwnEUserParams(
																	T.m_pkContext,
																	S.phone,
																	S.EMail
															  )
															: null
													})
													.then(function () {
														return d ? null : T.ResetPrivateKeyInternal()
													})
													.then(function () {
														if (d)
															return new e(function (e, n) {
																A.CtxMakeNewOwnCertificate(
																	T.m_pkContext,
																	i,
																	o,
																	s,
																	a,
																	u,
																	l,
																	p,
																	_
																)
																	.then(function () {
																		return T.ResetPrivateKeyInternal()
																	})
																	.then(function () {
																		var e = c.a.MapFromKeyMedia(
																			t,
																			A.CreateKeyMedia()
																		)
																		return f && f.password != t.password
																			? A.ChangePrivateKeyPassword(
																					e,
																					f.password
																			  )
																			: null
																	})
																	.then(function () {
																		e(null)
																	})
																	.catch(function (e) {
																		n(T.MapError(e))
																	})
															})
														var h = null,
															S = null
														return (
															t &&
																(h = c.a.MapFromKeyMedia(
																	t,
																	A.CreateKeyMedia()
																)),
															f &&
																(S = c.a.MapFromKeyMedia(
																	f,
																	A.CreateKeyMedia()
																)),
															A.MakeNewCertificate(
																h,
																n,
																r,
																i,
																o,
																s,
																a,
																u,
																l,
																p,
																_,
																S,
																E
															)
														)
													})
													.then(function (e) {
														R.key = e
														var n = null
														return (
															((d && t) || f) &&
																(n = c.a.MapFromKeyMedia(
																	f || t,
																	A.CreateKeyMedia()
																)),
															T.SearchPrivateKeyCertificatesWithCMP(e, E, n, h)
														)
													})
													.then(function (e) {
														return T.GetUserCertificatesFromCertificates(
															e.certs
														)
													})
													.then(function (e) {
														T.EndKMOperation(), (R.certs = e), y(R)
													})
													.catch(function (e) {
														T.EndKMOperation(), C(T.MapError(e))
													})
										  })
								}),
								(t.prototype.MakeDeviceCertificate = function (t, n, i, o, s) {
									var a = this,
										l = a.m_library
									return new e(function (_, f) {
										a.CheckInitialize()
											.then(function () {
												if (null == a.m_pkContext)
													throw l.MakeError(r.EU_ERROR_BAD_CERT, '')
												var e = a.m_pkContext.GetOwnerInfo(),
													u = a.GetCASettings(e.GetIssuerCN())
												if (!u || !u.cmpAddress || '' == u.cmpAddress)
													throw l.MakeError(r.EU_ERROR_BAD_PARAMETER, '')
												return l.CtxMakeDeviceCertificate(
													a.m_pkContext,
													t,
													n,
													i,
													o,
													s,
													u.cmpAddress,
													'80'
												)
											})
											.then(function (t) {
												return a.ProcessArray(t, function (t) {
													return new e(function (e, n) {
														l.ParseCertificateEx(t)
															.then(function (n) {
																var r = new u.EndUserCertificate()
																;(r.data = t),
																	(r.infoEx = c.a.MapToEndUserCertificateInfoEx(
																		n,
																		new p.a()
																	)),
																	e(r)
															})
															.catch(function (e) {
																return n(e)
															})
													})
												})
											})
											.then(function (e) {
												_(e)
											})
											.catch(function (e) {
												a.EndKMOperation(), f(a.MapError(e))
											})
									})
								}),
								(t.prototype.SetKeyMediaUserPassword = function (t, n) {
									var r = this,
										i = r.m_library
									return new e(function (e, o) {
										r.CheckInitialize()
											.then(function () {
												return r.BeginKMOperation()
											})
											.then(function () {
												var e = c.a.MapFromKeyMedia(n, i.CreateKeyMedia())
												return r.m_library.SetKeyMediaUserPassword(t, e)
											})
											.then(function () {
												r.EndKMOperation(), e()
											})
											.catch(function (e) {
												r.EndKMOperation(), o(r.MapError(e))
											})
									})
								}),
								(t.prototype.ChangePrivateKeyPassword = function (t, n) {
									var r = this,
										i = r.m_library
									return new e(function (e, o) {
										r.CheckInitialize()
											.then(function () {
												return r.BeginKMOperation()
											})
											.then(function () {
												var e = c.a.MapFromKeyMedia(t, i.CreateKeyMedia())
												return r.m_library.ChangePrivateKeyPassword(e, n)
											})
											.then(function () {
												r.EndKMOperation(), e()
											})
											.catch(function (e) {
												r.EndKMOperation(), o(r.MapError(e))
											})
									})
								}),
								(t.prototype.ChangePrivateKeyPasswordBinary = function (
									t,
									n,
									r
								) {
									var i = this,
										o = i.m_library
									return new e(function (e, s) {
										i.CheckInitialize()
											.then(function () {
												return o.ChangeSoftwarePrivateKeyPassword(t, n, r)
											})
											.then(function (t) {
												e(t), e()
											})
											.catch(function (e) {
												s(i.MapError(e))
											})
									})
								}),
								(t.prototype.GeneratePrivateKey = function (
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									p,
									_,
									f
								) {
									var E = this,
										h = E.m_library
									return new e(function (e, S) {
										E.CheckInitialize()
											.then(function () {
												return E.BeginKMOperation()
											})
											.then(function () {
												var e = null
												return (
													t && (e = c.a.MapFromKeyMedia(t, h.CreateKeyMedia())),
													E.GeneratePrivateKeyInternal(
														e,
														n,
														null,
														r,
														i,
														o,
														s,
														a,
														u,
														l,
														p,
														_,
														f
													)
												)
											})
											.then(function (t) {
												E.EndKMOperation(), e(t)
											})
											.catch(function (e) {
												E.EndKMOperation(), S(E.MapError(e))
											})
									})
								}),
								(t.prototype.GeneratePrivateKeyBinary = function (
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									c,
									p
								) {
									var _ = this
									return new e(function (e, f) {
										_.CheckInitialize()
											.then(function () {
												return _.BeginKMOperation()
											})
											.then(function () {
												return _.GeneratePrivateKeyInternal(
													null,
													!1,
													t,
													n,
													r,
													i,
													o,
													s,
													a,
													u,
													l,
													c,
													p
												)
											})
											.then(function (t) {
												_.EndKMOperation(), e(t)
											})
											.catch(function (e) {
												_.EndKMOperation(), f(_.MapError(e))
											})
									})
								}),
								(t.prototype.GetKeyInfo = function (t) {
									var n = this,
										r = n.m_library
									return new e(function (e, i) {
										n.CheckInitialize()
											.then(function () {
												return n.BeginKMOperation()
											})
											.then(function () {
												var e = c.a.MapFromKeyMedia(t, r.CreateKeyMedia())
												return r.GetKeyInfo(e)
											})
											.then(function (t) {
												n.EndKMOperation(), e(t.GetPrivateKeyInfo())
											})
											.catch(function (e) {
												n.EndKMOperation(), i(n.MapError(e))
											})
									})
								}),
								(t.prototype.GetKeyInfoBinary = function (t, n) {
									var r = this,
										i = r.m_library
									return new e(function (e, o) {
										r.CheckInitialize()
											.then(function () {
												return i.GetKeyInfoBinary(t, n)
											})
											.then(function (t) {
												e(t.GetPrivateKeyInfo())
											})
											.catch(function (e) {
												o(r.MapError(e))
											})
									})
								}),
								(t.prototype.GetClientRegistrationTokenKSP = function (t, n) {
									var i = this,
										o = i.m_library
									return new e(function (e, t) {
										i.CheckInitialize()
											.then(function () {
												throw o.MakeError(r.EU_ERROR_NOT_SUPPORTED, '')
											})
											.catch(function (e) {
												t(i.MapError(e))
											})
									})
								}),
								(t.prototype.HashData = function (t, n, r) {
									var i = this,
										o = this.m_library,
										s = i.DataToNamedDataArray(n)
									return new e(function (a, u) {
										i.CheckInitialize()
											.then(function () {
												return i.ProcessArray(s, function (n) {
													return new e(function (e, s) {
														o.CtxHash(i.m_context, t, null, n.val)
															.then(function (e) {
																return r ? e : o.BASE64Decode(e)
															})
															.then(function (t) {
																e(t)
															})
															.catch(function (e) {
																return s(e)
															})
													})
												})
											})
											.then(function (e) {
												var t = i.DataToResult(n, e)
												a(t)
											})
											.catch(function (e) {
												u(i.MapError(e))
											})
									})
								}),
								(t.prototype.GetSigner = function (t, n, r) {
									void 0 === n && (n = -1), void 0 === r && (r = !1)
									var i = this,
										o = this.m_library,
										s = {
											context: null,
											signersInfo: null,
										}
									return new e(function (a, l) {
										i.CheckInitialize()
											.then(function () {
												return o.CtxCreate()
											})
											.then(function (e) {
												return (
													(s.context = e),
													o.CtxSetParameter(
														e,
														o.EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
														r
													)
												)
											})
											.then(function () {
												return -1 == n ? o.GetSignsCount(t) : 1
											})
											.then(function (r) {
												var a = new Array()
												if (-1 != n) a.push(n)
												else for (var l = 0; l < r; l++) a.push(l)
												return i.ProcessArray(a, function (n) {
													return new e(function (e, r) {
														var a = new u.EndUserCertificate()
														o.CtxGetSignerInfo(s.context, n, t)
															.then(function (t) {
																c.a.MapToEndUserCertificate(t, a), e(a)
															})
															.catch(function (e) {
																return r(i.MapError(e))
															})
													})
												})
											})
											.then(function (e) {
												return (s.signersInfo = e), o.CtxFree(s.context)
											})
											.then(function () {
												;(s.context = null),
													a(-1 != n ? s.signersInfo[0] : s.signersInfo)
											})
											.catch(function (e) {
												s.context
													? o
															.CtxFree(s.context)
															.then(function () {
																l(i.MapError(e))
															})
															.catch(function () {
																l(i.MapError(e))
															})
													: l(i.MapError(e))
											})
									})
								}),
								(t.prototype.SignData = function (e, t) {
									return (
										void 0 === t && (t = !1),
										this.SignDataEx(_.EndUserSignAlgo.Unknown, e, !0, !0, t)
									)
								}),
								(t.prototype.SignDataInternal = function (e, t, n) {
									return (
										void 0 === n && (n = !1),
										this.SignDataEx(_.EndUserSignAlgo.Unknown, t, !1, e, n)
									)
								}),
								(t.prototype.SignHash = function (e, t, n, r) {
									return this.CtxSignHashInternal(
										this.m_pkContext,
										e,
										t,
										null,
										n,
										r
									)
								}),
								(t.prototype.SignDataEx = function (e, t, n, r, i) {
									return this.CtxSignDataInternal(
										this.m_pkContext,
										e,
										t,
										null,
										n,
										r,
										i
									)
								}),
								(t.prototype.AppendSign = function (e, t, n, r, i) {
									return this.CtxSignDataInternal(
										this.m_pkContext,
										e,
										t,
										n,
										null != t,
										r,
										i
									)
								}),
								(t.prototype.AppendSignHash = function (e, t, n, r, i) {
									return this.CtxSignHashInternal(
										this.m_pkContext,
										e,
										t,
										n,
										r,
										i
									)
								}),
								(t.prototype.GetSignValue = function (e, t, n, r) {
									return (
										void 0 === r && (r = !1),
										this.CtxGetSignValue(this.m_pkContext, e, t, n, r)
									)
								}),
								(t.prototype.VerifyHash = function (t, n, r) {
									void 0 === r && (r = -1)
									var i = this,
										o = this.m_library
									return new e(function (s, a) {
										i.CheckInitialize()
											.then(function () {
												return -1 == r ? o.GetSignsCount(n) : 1
											})
											.then(function (s) {
												var a = new Array()
												if (-1 != r) a.push(r)
												else for (var u = 0; u < s; u++) a.push(u)
												return i.ProcessArray(a, function (r) {
													return new e(function (e, s) {
														var a = new d.a()
														o.VerifyHashOnTimeEx(t, r, n, null, !1, !1)
															.then(function (e) {
																return (
																	c.a.MapToEndUserSignInfo(e, a),
																	o.GetSignTimeInfo(r, n)
																)
															})
															.then(function (e) {
																return (
																	(a.timeInfo = c.a.MapToEndUserTimeInfo(
																		e,
																		new C.a()
																	)),
																	o.GetSignType(r, n)
																)
															})
															.then(function (t) {
																;(a.signLevel = t), e(a)
															})
															.catch(function (e) {
																return s(i.MapError(e))
															})
													})
												})
											})
											.then(function (e) {
												s(-1 != r ? e[0] : e)
											})
											.catch(function (e) {
												return a(i.MapError(e))
											})
									})
								}),
								(t.prototype.VerifyData = function (t, n, r) {
									void 0 === r && (r = -1)
									var i = this,
										o = this.m_library
									return new e(function (s, a) {
										i.CheckInitialize()
											.then(function () {
												return -1 == r ? o.GetSignsCount(n) : 1
											})
											.then(function (s) {
												var a = new Array()
												if (-1 != r) a.push(r)
												else for (var u = 0; u < s; u++) a.push(u)
												return i.ProcessArray(a, function (r) {
													return new e(function (e, s) {
														var a = new d.a()
														o.VerifyDataOnTimeEx(t, r, n, null, !1, !1)
															.then(function (e) {
																return (
																	c.a.MapToEndUserSignInfo(e, a),
																	o.GetSignTimeInfo(r, n)
																)
															})
															.then(function (e) {
																return (
																	(a.timeInfo = c.a.MapToEndUserTimeInfo(
																		e,
																		new C.a()
																	)),
																	o.GetSignType(r, n)
																)
															})
															.then(function (t) {
																;(a.signLevel = t), e(a)
															})
															.catch(function (e) {
																return s(i.MapError(e))
															})
													})
												})
											})
											.then(function (e) {
												s(-1 != r ? e[0] : e)
											})
											.catch(function (e) {
												return a(i.MapError(e))
											})
									})
								}),
								(t.prototype.VerifyDataInternal = function (t, n) {
									void 0 === n && (n = -1)
									var r = this,
										i = this.m_library
									return new e(function (o, s) {
										r.CheckInitialize()
											.then(function () {
												return -1 == n ? i.GetSignsCount(t) : 1
											})
											.then(function (o) {
												var s = new Array()
												if (-1 != n) s.push(n)
												else for (var a = 0; a < o; a++) s.push(a)
												return r.ProcessArray(s, function (n) {
													return new e(function (e, o) {
														var s = new d.a()
														i.VerifyDataInternalOnTimeEx(t, n, null, !1, !1)
															.then(function (e) {
																return (
																	c.a.MapToEndUserSignInfo(e, s),
																	i.GetSignTimeInfo(n, t)
																)
															})
															.then(function (e) {
																return (
																	(s.timeInfo = c.a.MapToEndUserTimeInfo(
																		e,
																		new C.a()
																	)),
																	i.GetSignType(n, t)
																)
															})
															.then(function (t) {
																;(s.signLevel = t), e(s)
															})
															.catch(function (e) {
																return o(r.MapError(e))
															})
													})
												})
											})
											.then(function (e) {
												o(-1 != n ? e[0] : e)
											})
											.catch(function (e) {
												return s(r.MapError(e))
											})
									})
								}),
								(t.prototype.EnvelopData = function (t, n, i, o, s, a) {
									void 0 === a && (a = !1)
									var u = this,
										l = this.m_library
									return new e(function (e, c) {
										u.CheckInitialize()
											.then(function () {
												if (null == u.m_pkContext && (!a || i))
													throw l.MakeError(r.EU_ERROR_BAD_CERT, '')
												var e = l.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL
												return a
													? i
														? l.CtxEnvelopWithDynamicKey(
																u.m_pkContext,
																t,
																e,
																i,
																o,
																n
														  )
														: l.EnvelopToRecipientsWithDynamicKey(t, i, o, n)
													: l.CtxEnvelop(u.m_pkContext, t, e, i, o, n)
											})
											.then(function (e) {
												return s ? e : l.BASE64Decode(e)
											})
											.then(function (t) {
												e(t)
											})
											.catch(function (e) {
												return c(u.MapError(e))
											})
									})
								}),
								(t.prototype.DevelopData = function (t, n) {
									var i = this,
										o = this.m_library
									return new e(function (e, s) {
										i.CheckInitialize()
											.then(function () {
												if (null == i.m_pkContext)
													throw o.MakeError(r.EU_ERROR_BAD_CERT, '')
												return o.CtxDevelop(i.m_pkContext, t, n)
											})
											.then(function (t) {
												var n = c.a.MapToEndUserSenderInfo(t, new y.a())
												e(n)
											})
											.catch(function (e) {
												return s(i.MapError(e))
											})
									})
								}),
								(t.prototype.ProtectDataByPassword = function (t, n, r) {
									var i = this,
										o = this.m_library
									return new e(function (e, s) {
										i.CheckInitialize()
											.then(function () {
												return o.ProtectDataByPassword(t, n)
											})
											.then(function (e) {
												return r ? e : o.BASE64Decode(e)
											})
											.then(function (t) {
												e(t)
											})
											.catch(function (e) {
												return s(i.MapError(e))
											})
									})
								}),
								(t.prototype.UnprotectDataByPassword = function (t, n, r) {
									var i = this,
										o = this.m_library
									return new e(function (e, s) {
										i.CheckInitialize()
											.then(function () {
												return o.UnprotectDataByPassword(t, n)
											})
											.then(function (e) {
												return r ? o.BytesToString(e) : e
											})
											.then(function (t) {
												e(t)
											})
											.catch(function (e) {
												return s(i.MapError(e))
											})
									})
								}),
								(t.prototype.CreateAuthData = function (t, n, i) {
									var o = this,
										s = this.m_library
									return new e(function (e, a) {
										o.CheckInitialize()
											.then(function () {
												if (null == o.m_pkContext)
													throw s.MakeError(r.EU_ERROR_BAD_CERT, '')
												return s.CtxCreateAuthData(o.m_pkContext, t, n)
											})
											.then(function (e) {
												return i ? e : s.BASE64Decode(e)
											})
											.then(function (t) {
												e(t)
											})
											.catch(function (e) {
												return a(o.MapError(e))
											})
									})
								}),
								(t.prototype.GetTSPByAccessInfo = function (t, n, r, i, o) {
									var s = this,
										a = this.m_library
									return new e(function (e, u) {
										s.CheckInitialize()
											.then(function () {
												return a.GetTSPByAccessInfo(t, n, r, i)
											})
											.then(function (e) {
												return o ? a.BASE64Encode(e) : e
											})
											.then(function (t) {
												e(t)
											})
											.catch(function (e) {
												return u(s.MapError(e))
											})
									})
								}),
								(t.prototype.CheckTSP = function (t, n, r) {
									var i = this,
										o = this.m_library
									return new e(function (e, s) {
										i.CheckInitialize()
											.then(function () {
												return o.CheckTSP(t, n, r)
											})
											.then(function () {
												e()
											})
											.catch(function (e) {
												return s(i.MapError(e))
											})
									})
								}),
								(t.prototype.CtxCreate = function () {
									var t = this,
										n = this.m_library,
										r = {
											context: null,
										}
									return new e(function (e, i) {
										t.CheckInitialize()
											.then(function () {
												return n.CtxCreate()
											})
											.then(function (e) {
												return (
													(r.context = e),
													n.CtxSetParameter(
														e,
														n.EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
														t.m_resolveOIDs
													)
												)
											})
											.then(function () {
												e(r.context)
											})
											.catch(function (e) {
												return i(t.MapError(e))
											})
									})
								}),
								(t.prototype.CtxFree = function (t) {
									var n = this,
										r = this.m_library
									return new e(function (e, i) {
										n.CheckInitialize()
											.then(function () {
												r.CtxFree(t)
											})
											.then(function () {
												e()
											})
											.catch(function (e) {
												return i(n.MapError(e))
											})
									})
								}),
								(t.prototype.CtxSetParameter = function (t, n, r) {
									var i = this,
										o = i.m_library
									return new e(function (e, s) {
										i.CheckInitialize()
											.then(function () {
												return (
													null == t && (t = i.m_context),
													o.CtxSetParameter(t, n, r)
												)
											})
											.then(function () {
												e()
											})
											.catch(function (e) {
												i.EndKMOperation(), s(i.MapError(e))
											})
									})
								}),
								(t.prototype.CtxReadPrivateKey = function (t, n, r, i) {
									var o = this,
										s = o.m_library
									return new e(function (e, a) {
										o.CheckInitialize()
											.then(function () {
												return o.BeginKMOperation()
											})
											.then(function () {
												var e = c.a.MapFromKeyMedia(n, s.CreateKeyMedia())
												return o.CtxReadPrivateKeyInternal(
													t,
													null,
													null,
													e,
													r,
													i,
													!0
												)
											})
											.then(function (t) {
												o.EndKMOperation(), e(t)
											})
											.catch(function (e) {
												o.EndKMOperation(), a(o.MapError(e))
											})
									})
								}),
								(t.prototype.CtxReadPrivateKeyBinary = function (
									t,
									n,
									r,
									i,
									o
								) {
									var s = this
									return new e(function (e, a) {
										s.CheckInitialize()
											.then(function () {
												return s.CtxReadPrivateKeyInternal(
													t,
													n,
													r,
													null,
													i,
													o,
													!0
												)
											})
											.then(function (t) {
												e(t)
											})
											.catch(function (e) {
												return a(s.MapError(e))
											})
									})
								}),
								(t.prototype.CtxFreePrivateKey = function (t) {
									var n = this,
										r = this.m_library
									return new e(function (e, i) {
										n.CheckInitialize()
											.then(function () {
												return r.CtxFreePrivateKey(t)
											})
											.then(function () {
												e()
											})
											.catch(function (e) {
												return i(n.MapError(e))
											})
									})
								}),
								(t.prototype.CtxGetOwnCertificates = function (t) {
									var n = this,
										i = this.m_library
									return new e(function (e, o) {
										n.CheckInitialize()
											.then(function () {
												if (null == t)
													throw i.MakeError(r.EU_ERROR_BAD_CERT, '')
												var s = new Array(),
													a = function (r) {
														i.CtxEnumOwnCertificates(t, r)
															.then(function (t) {
																if (t) {
																	var n = c.a.MapToEndUserCertificate(
																		t,
																		new u.EndUserCertificate()
																	)
																	s.push(n), a(r + 1)
																} else e(s)
															})
															.catch(function (e) {
																return o(n.MapError(e))
															})
													}
												a(0)
											})
											.catch(function (e) {
												return o(n.MapError(e))
											})
									})
								}),
								(t.prototype.CtxSignHash = function (e, t, n, r, i) {
									return this.CtxSignHashInternal(e, t, n, null, r, i)
								}),
								(t.prototype.CtxSignData = function (e, t, n, r, i, o) {
									return this.CtxSignDataInternal(e, t, n, null, r, i, o)
								}),
								(t.prototype.CtxAppendSignHash = function (e, t, n, r, i, o) {
									return this.CtxSignHashInternal(e, t, n, r, i, o)
								}),
								(t.prototype.CtxAppendSign = function (e, t, n, r, i, o) {
									return this.CtxSignDataInternal(e, t, n, r, null != n, i, o)
								}),
								(t.prototype.CtxGetSignValue = function (t, n, i, o, s) {
									void 0 === s && (s = !1)
									var a = this,
										u = this.m_library,
										l = a.DataToNamedDataArray(i)
									return new e(function (c, p) {
										a.CheckInitialize()
											.then(function () {
												if (null == t)
													throw u.MakeError(r.EU_ERROR_BAD_CERT, '')
												return n != _.EndUserSignAlgo.ECDSAWithSHA
													? null
													: u.CtxSetParameter(
															a.m_context,
															u.EU_ENCODE_ECDSA_SIGN_VALUE_CONTEXT_PARAMETER,
															s
													  )
											})
											.then(function () {
												return a.ProcessArray(l, function (r) {
													return new e(function (e, i) {
														u.CtxGetSignValue(t, n, r.val)
															.then(function (e) {
																return o ? e : u.BASE64Decode(e)
															})
															.then(function (t) {
																e(t)
															})
															.catch(function (e) {
																return i(e)
															})
													})
												})
											})
											.then(function (e) {
												var t = a.DataToResult(i, e)
												c(t)
											})
											.catch(function (e) {
												return p(a.MapError(e))
											})
									})
								}),
								(t.prototype.CtxEnvelopData = function (t, n, i, o, s, a, u) {
									var l = this,
										c = this.m_library
									return new e(function (e, p) {
										l.CheckInitialize()
											.then(function () {
												if (null == t && (!u || o))
													throw c.MakeError(r.EU_ERROR_BAD_CERT, '')
												var e = c.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL
												return u
													? o
														? c.CtxEnvelopWithDynamicKey(t, n, e, o, s, i)
														: c.EnvelopToRecipientsWithDynamicKey(n, o, s, i)
													: c.CtxEnvelop(t, n, e, o, s, i)
											})
											.then(function (e) {
												return a ? e : c.BASE64Decode(e)
											})
											.then(function (t) {
												e(t)
											})
											.catch(function (e) {
												return p(l.MapError(e))
											})
									})
								}),
								(t.prototype.CtxDevelopData = function (t, n, i) {
									var o = this,
										s = this.m_library
									return new e(function (e, a) {
										o.CheckInitialize()
											.then(function () {
												if (null == t)
													throw s.MakeError(r.EU_ERROR_BAD_CERT, '')
												return s.CtxDevelop(t, n, i)
											})
											.then(function (t) {
												var n = c.a.MapToEndUserSenderInfo(t, new y.a())
												e(n)
											})
											.catch(function (e) {
												return a(o.MapError(e))
											})
									})
								}),
								(t.prototype.ProtectTaxReports = function (
									t,
									n,
									r,
									i,
									o,
									s,
									a
								) {
									void 0 === t && (t = null),
										void 0 === n && (n = null),
										void 0 === r && (r = null),
										void 0 === a && (a = !1)
									var u = this
									return new e(function (e, l) {
										var c = {
											accountant: null,
											director: null,
											stamp: null,
										}
										u.CheckInitialize()
											.then(function () {
												var e = [_.EndUserKeyUsage.DigitalSignature]
												return null != t ? u.LoadTaxReportPKey(t, e, !1) : null
											})
											.then(function (e) {
												c.accountant = e
												var t = [_.EndUserKeyUsage.DigitalSignature]
												return (
													r || t.push(_.EndUserKeyUsage.KeyAgreement),
													null != n ? u.LoadTaxReportPKey(n, t, !1) : null
												)
											})
											.then(function (e) {
												c.director = e
												var t = [
													_.EndUserKeyUsage.DigitalSignature,
													_.EndUserKeyUsage.KeyAgreement,
												]
												return null != r ? u.LoadTaxReportPKey(r, t, !0) : null
											})
											.then(function (e) {
												return (
													(c.stamp = e),
													u.ProcessArray(s, function (e) {
														return u.ProtectTaxReport(
															c.accountant,
															c.director,
															c.stamp,
															i,
															o,
															e,
															a
														)
													})
												)
											})
											.then(function (t) {
												e(t)
											})
											.catch(function (e) {
												return l(u.MapError(e))
											})
									})
								}),
								(t.prototype.UnprotectTaxReceipts = function (t, n) {
									var r = this
									return new e(function (e, i) {
										r.CheckInitialize()
											.then(function () {
												return r.ProcessArray(n, function (e) {
													return r.UnprotectTaxReceipt(t, e)
												})
											})
											.then(function (t) {
												e(t)
											})
											.catch(function (e) {
												return i(r.MapError(e))
											})
									})
								}),
								(t.prototype.ASiCGetSigner = function (t, n, r) {
									void 0 === n && (n = -1), void 0 === r && (r = !1)
									var i = this,
										o = this.m_library,
										s = {
											context: null,
											signersInfo: null,
										}
									return new e(function (a, l) {
										i.CheckInitialize()
											.then(function () {
												return o.CtxCreate()
											})
											.then(function (e) {
												return (
													(s.context = e),
													o.CtxSetParameter(
														e,
														o.EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
														r
													)
												)
											})
											.then(function () {
												return -1 == n ? o.ASiCGetSignsCount(t) : 1
											})
											.then(function (r) {
												var a = new Array()
												if (-1 != n) a.push(n)
												else for (var l = 0; l < r; l++) a.push(l)
												return i.ProcessArray(a, function (n) {
													return new e(function (e, r) {
														var a = new u.EndUserCertificate()
														o.CtxASiCGetSignerInfo(s.context, n, t)
															.then(function (t) {
																c.a.MapToEndUserCertificate(t, a), e(a)
															})
															.catch(function (e) {
																return r(i.MapError(e))
															})
													})
												})
											})
											.then(function (e) {
												return (s.signersInfo = e), o.CtxFree(s.context)
											})
											.then(function () {
												a(-1 != n ? s.signersInfo[0] : s.signersInfo)
											})
											.catch(function (e) {
												s.context &&
													o
														.CtxFree(s.context)
														.then(function () {
															l(i.MapError(e))
														})
														.catch(function () {
															l(i.MapError(e))
														})
											})
									})
								}),
								(t.prototype.ASiCSignData = function (t, n, i, o, s, a) {
									var u = this,
										l = this,
										c = this.m_library
									return new e(function (e, p) {
										l.CheckInitialize()
											.then(function () {
												if (null == u.m_pkContext)
													throw c.MakeError(r.EU_ERROR_BAD_CERT, '')
												return l.ProcessArray(s, function (e) {
													return l.NamedDataToReference(e)
												})
											})
											.then(function (e) {
												return c.CtxASiCSign(u.m_pkContext, t, n, i, o, e)
											})
											.then(function (e) {
												return a ? e : c.BASE64Decode(e)
											})
											.then(function (t) {
												var r = {
													name:
														s[0].name +
														(n == _.EndUserASiCType.S ? '.asics' : '.asice'),
													val: t,
												}
												e(r)
											})
											.catch(function (e) {
												return p(l.MapError(e))
											})
									})
								}),
								(t.prototype.ASiCAppendSign = function (t, n, i, o, s) {
									var a = this,
										u = this,
										l = this.m_library,
										c = u.DataToNamedDataArray(o)
									return new e(function (e, o) {
										u.CheckInitialize()
											.then(function () {
												if (null == a.m_pkContext)
													throw l.MakeError(r.EU_ERROR_BAD_CERT, '')
												return l.CtxASiCAppendSign(
													a.m_pkContext,
													t,
													n,
													i,
													c[0].val
												)
											})
											.then(function (e) {
												return s ? e : l.BASE64Decode(e)
											})
											.then(function (t) {
												var n = {
													name: c[0].name,
													val: t,
												}
												e(n)
											})
											.catch(function (e) {
												return o(u.MapError(e))
											})
									})
								}),
								(t.prototype.ASiCVerifyData = function (t, n) {
									void 0 === n && (n = -1)
									var r = this,
										i = this.m_library
									return new e(function (o, s) {
										r.CheckInitialize()
											.then(function () {
												return -1 == n ? i.ASiCGetSignsCount(t) : 1
											})
											.then(function (o) {
												var s = new Array()
												if (-1 != n) s.push(n)
												else for (var a = 0; a < o; a++) s.push(a)
												return r.ProcessArray(s, function (n) {
													return new e(function (e, o) {
														var s = new d.a()
														i.ASiCVerify(n, t)
															.then(function (e) {
																return (
																	c.a.MapToEndUserSignInfo(e, s),
																	i.ASiCGetSignTimeInfo(n, t)
																)
															})
															.then(function (e) {
																return (
																	(s.timeInfo = c.a.MapToEndUserTimeInfo(
																		e,
																		new C.a()
																	)),
																	i.ASiCGetSignLevel(n, t)
																)
															})
															.then(function (t) {
																;(s.signLevel = t), e(s)
															})
															.catch(function (e) {
																return o(r.MapError(e))
															})
													})
												})
											})
											.then(function (e) {
												o(-1 != n ? e[0] : e)
											})
											.catch(function (e) {
												return s(r.MapError(e))
											})
									})
								}),
								(t.prototype.PDFGetSigner = function (t, n, r) {
									void 0 === n && (n = -1), void 0 === r && (r = !1)
									var i = this,
										o = this.m_library,
										s = {
											context: null,
											signersInfo: null,
										}
									return new e(function (a, l) {
										i.CheckInitialize()
											.then(function () {
												return o.CtxCreate()
											})
											.then(function (e) {
												return (
													(s.context = e),
													o.CtxSetParameter(
														e,
														o.EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
														r
													)
												)
											})
											.then(function () {
												return -1 == n ? o.PDFGetSignsCount(t) : 1
											})
											.then(function (r) {
												var a = new Array()
												if (-1 != n) a.push(n)
												else for (var l = 0; l < r; l++) a.push(l)
												return i.ProcessArray(a, function (n) {
													return new e(function (e, r) {
														var a = new u.EndUserCertificate()
														o.CtxPDFGetSignerInfo(s.context, n, t)
															.then(function (t) {
																c.a.MapToEndUserCertificate(t, a), e(a)
															})
															.catch(function (e) {
																return r(i.MapError(e))
															})
													})
												})
											})
											.then(function (e) {
												return (s.signersInfo = e), o.CtxFree(s.context)
											})
											.then(function () {
												a(-1 != n ? s.signersInfo[0] : s.signersInfo)
											})
											.catch(function (e) {
												s.context &&
													o
														.CtxFree(s.context)
														.then(function () {
															l(i.MapError(e))
														})
														.catch(function () {
															l(i.MapError(e))
														})
											})
									})
								}),
								(t.prototype.PDFSignData = function (t, n, i, o) {
									var s = this,
										a = this,
										u = this.m_library,
										l = a.DataToNamedDataArray(n)
									return new e(function (c, p) {
										a.CheckInitialize()
											.then(function () {
												if (null == s.m_pkContext)
													throw u.MakeError(r.EU_ERROR_BAD_CERT, '')
												return a.ProcessArray(l, function (n) {
													return new e(function (e, r) {
														return u
															.CtxPDFSign(s.m_pkContext, t, n.val, i)
															.then(function (e) {
																return o ? e : u.BASE64Decode(e)
															})
															.then(function (t) {
																e(t)
															})
															.catch(function (e) {
																return r(e)
															})
													})
												})
											})
											.then(function (e) {
												var t = s.DataToResult(n, e)
												c(t)
											})
											.catch(function (e) {
												return p(a.MapError(e))
											})
									})
								}),
								(t.prototype.PDFVerifyData = function (t, n) {
									void 0 === n && (n = -1)
									var r = this,
										i = this.m_library
									return new e(function (o, s) {
										r.CheckInitialize()
											.then(function () {
												return -1 == n ? i.PDFGetSignsCount(t) : 1
											})
											.then(function (o) {
												var s = new Array()
												if (-1 != n) s.push(n)
												else for (var a = 0; a < o; a++) s.push(a)
												return r.ProcessArray(s, function (n) {
													return new e(function (e, o) {
														var s = new d.a()
														i.PDFVerify(n, t)
															.then(function (e) {
																return (
																	c.a.MapToEndUserSignInfo(e, s),
																	i.PDFGetSignTimeInfo(n, t)
																)
															})
															.then(function (e) {
																return (
																	(s.timeInfo = c.a.MapToEndUserTimeInfo(
																		e,
																		new C.a()
																	)),
																	i.PDFGetSignType(n, t)
																)
															})
															.then(function (t) {
																;(s.signLevel = t), e(s)
															})
															.catch(function (e) {
																return o(r.MapError(e))
															})
													})
												})
											})
											.then(function (e) {
												o(-1 != n ? e[0] : e)
											})
											.catch(function (e) {
												return s(r.MapError(e))
											})
									})
								}),
								(t.prototype.XAdESGetSigner = function (t, n, r) {
									void 0 === n && (n = -1), void 0 === r && (r = !1)
									var i = this,
										o = this.m_library,
										s = {
											context: null,
											signersInfo: null,
										}
									return new e(function (a, l) {
										i.CheckInitialize()
											.then(function () {
												return o.CtxCreate()
											})
											.then(function (e) {
												return (
													(s.context = e),
													o.CtxSetParameter(
														e,
														o.EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
														r
													)
												)
											})
											.then(function () {
												return -1 == n ? o.XAdESGetSignsCount(t) : 1
											})
											.then(function (r) {
												var a = new Array()
												if (-1 != n) a.push(n)
												else for (var l = 0; l < r; l++) a.push(l)
												return i.ProcessArray(a, function (n) {
													return new e(function (e, r) {
														var a = new u.EndUserCertificate()
														o.CtxXAdESGetSignerInfo(s.context, n, t)
															.then(function (t) {
																c.a.MapToEndUserCertificate(t, a), e(a)
															})
															.catch(function (e) {
																return r(i.MapError(e))
															})
													})
												})
											})
											.then(function (e) {
												return (s.signersInfo = e), o.CtxFree(s.context)
											})
											.then(function () {
												a(-1 != n ? s.signersInfo[0] : s.signersInfo)
											})
											.catch(function (e) {
												s.context &&
													o
														.CtxFree(s.context)
														.then(function () {
															l(i.MapError(e))
														})
														.catch(function () {
															l(i.MapError(e))
														})
											})
									})
								}),
								(t.prototype.XAdESSignData = function (t, n, i, o, s) {
									var a = this,
										u = this,
										l = this.m_library
									return new e(function (e, c) {
										u.CheckInitialize()
											.then(function () {
												if (null == a.m_pkContext)
													throw l.MakeError(r.EU_ERROR_BAD_CERT, '')
												return u.ProcessArray(o, function (e) {
													return u.NamedDataToReference(e)
												})
											})
											.then(function (e) {
												return l.CtxXAdESSign(a.m_pkContext, t, n, i, e)
											})
											.then(function (e) {
												return s ? e : l.BASE64Decode(e)
											})
											.then(function (t) {
												var n = {
													name:
														o[0].name +
														(o[0].name.endsWith('.xml') ? '' : '.xml'),
													val: t,
												}
												e(n)
											})
											.catch(function (e) {
												return c(u.MapError(e))
											})
									})
								}),
								(t.prototype.XAdESVerifyData = function (t, n, r) {
									void 0 === r && (r = -1)
									var i = this,
										o = this.m_library,
										s = new Array()
									return new e(function (a, u) {
										i.CheckInitialize()
											.then(function () {
												return -1 == r ? o.XAdESGetSignsCount(n) : 1
											})
											.then(function (e) {
												if (-1 != r) s.push(r)
												else for (var n = 0; n < e; n++) s.push(n)
												return null == t
													? null
													: i.ProcessArray(t, function (e) {
															return i.NamedDataToReference(e)
													  })
											})
											.then(function (t) {
												return i.ProcessArray(s, function (r) {
													return new e(function (e, s) {
														var a = new d.a()
														o.XAdESVerify(t, r, n)
															.then(function (e) {
																return (
																	c.a.MapToEndUserSignInfo(e, a),
																	o.XAdESGetSignTimeInfo(r, n)
																)
															})
															.then(function (e) {
																return (
																	(a.timeInfo = c.a.MapToEndUserTimeInfo(
																		e,
																		new C.a()
																	)),
																	o.XAdESGetSignLevel(r, n)
																)
															})
															.then(function (t) {
																;(a.signLevel = t), e(a)
															})
															.catch(function (e) {
																return s(i.MapError(e))
															})
													})
												})
											})
											.then(function (e) {
												a(-1 != r ? e[0] : e)
											})
											.catch(function (e) {
												return u(i.MapError(e))
											})
									})
								}),
								(t.prototype.GetSignContainerInfo = function (t) {
									var n = this,
										r = this.m_library,
										i =
											(new S.a(),
											function (t) {
												var n = new S.a()
												return new e(function (e, i) {
													r.IsDataInSignedDataAvailable(t)
														.then(function (t) {
															;(n.type = _.EndUserSignContainerType.CAdES),
																(n.subType = t
																	? _.EndUserCAdESType.Enveloped
																	: _.EndUserCAdESType.Detached),
																e(n)
														})
														.catch(function (t) {
															e(null)
														})
												})
											}),
										o = function (t) {
											var n = new S.a()
											return new e(function (e, i) {
												r.XAdESGetType(t)
													.then(function (t) {
														;(n.type = _.EndUserSignContainerType.XAdES),
															(n.subType = t),
															e(n)
													})
													.catch(function (t) {
														e(null)
													})
											})
										},
										s = function (t) {
											var n = new S.a()
											return new e(function (e, i) {
												r.PDFGetSignsCount(t)
													.then(function (t) {
														;(n.type = _.EndUserSignContainerType.PAdES), e(n)
													})
													.catch(function (t) {
														e(null)
													})
											})
										},
										a = function (t) {
											var n = new S.a()
											return new e(function (e, i) {
												r.ASiCGetASiCType(t)
													.then(function (e) {
														return (
															(n.type = _.EndUserSignContainerType.ASiC),
															(n.subType = e),
															r.ASiCGetSignType(t)
														)
													})
													.then(function (t) {
														;(n.asicSignType = t), e(n)
													})
													.catch(function (t) {
														e(null)
													})
											})
										}
									return new e(function (u, l) {
										n.CheckInitialize()
											.then(function () {
												return 'string' == typeof t ? r.BASE64Decode(t) : t
											})
											.then(function (t) {
												var n = [],
													r = function (e, t) {
														if (e.length < t.length) return !1
														for (var n = 0; n < t.length; n++)
															if (e[n] != t[n]) return !1
														return !0
													}
												return (
													(n = r(t, [60, 63, 120, 109, 108])
														? [o, i, s, a]
														: r(t, [37, 80, 68, 70])
														? [s, i, o, a]
														: r(t, [80, 75])
														? [a, i, o, s]
														: [i, o, s, a]),
													new e(function (e, r) {
														var i = function (o) {
															o >= n.length
																? e(new S.a())
																: n[o](t)
																		.then(function (t) {
																			null != t ? e(t) : i(o + 1)
																		})
																		.catch(function (e) {
																			return r(e)
																		})
														}
														i(0)
													})
												)
											})
											.then(function (e) {
												u(e)
											})
											.catch(function (e) {
												return l(n.MapError(e))
											})
									})
								}),
								t
							)
						})()
					t.a = A
				}).call(this, n(17).Promise)
			},
			function (e, t, n) {
				'use strict'
				;(function (e) {
					var r = n(3),
						i = (function () {
							function t() {
								;(this.EU_SUBJECT_TYPE_UNDIFFERENCED = 0),
									(this.EU_SUBJECT_TYPE_CA = 1),
									(this.EU_SUBJECT_TYPE_CA_SERVER = 2),
									(this.EU_SUBJECT_TYPE_RA_ADMINISTRATOR = 3),
									(this.EU_SUBJECT_TYPE_END_USER = 4),
									(this.EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 0),
									(this.EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP = 1),
									(this.EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP = 2),
									(this.EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 3),
									(this.EU_CERT_KEY_TYPE_UNKNOWN = 0),
									(this.EU_CERT_KEY_TYPE_DSTU4145 = 1),
									(this.EU_CERT_KEY_TYPE_RSA = 2),
									(this.EU_CERT_KEY_TYPE_ECDSA = 4),
									(this.EU_KEY_USAGE_UNKNOWN = 0),
									(this.EU_KEY_USAGE_DIGITAL_SIGNATURE = 1),
									(this.EU_KEY_USAGE_KEY_AGREEMENT = 16),
									(this.EU_KEYS_REQUEST_TYPE_UA_DS = 1),
									(this.EU_KEYS_REQUEST_TYPE_UA_KEP = 2),
									(this.EU_KEYS_REQUEST_TYPE_INTERNATIONAL = 3),
									(this.EU_KEYS_TYPE_NONE = 0),
									(this.EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOSTS = 1),
									(this.EU_KEYS_TYPE_RSA_WITH_SHA = 2),
									(this.EU_KEYS_LENGTH_DS_UA_191 = 1),
									(this.EU_KEYS_LENGTH_DS_UA_257 = 2),
									(this.EU_KEYS_LENGTH_DS_UA_307 = 3),
									(this.EU_KEYS_LENGTH_DS_UA_FILE = 4),
									(this.EU_KEYS_LENGTH_DS_UA_CERT = 5),
									(this.EU_KEYS_LENGTH_KEP_UA_257 = 1),
									(this.EU_KEYS_LENGTH_KEP_UA_431 = 2),
									(this.EU_KEYS_LENGTH_KEP_UA_571 = 3),
									(this.EU_KEYS_LENGTH_KEP_UA_FILE = 4),
									(this.EU_KEYS_LENGTH_KEP_UA_CERT = 5),
									(this.EU_KEYS_LENGTH_DS_RSA_1024 = 1),
									(this.EU_KEYS_LENGTH_DS_RSA_2048 = 2),
									(this.EU_KEYS_LENGTH_DS_RSA_3072 = 3),
									(this.EU_KEYS_LENGTH_DS_RSA_4096 = 4),
									(this.EU_KEYS_LENGTH_DS_RSA_FILE = 5),
									(this.EU_KEYS_LENGTH_DS_RSA_CERT = 6),
									(this.EU_RECIPIENT_APPEND_ISSUER_AND_SERIAL = 1),
									(this.EU_RECIPIENT_APPEND_KEY_ID = 2),
									(this.EU_RECIPIENT_APPEND_KEY_ID_USC_COMPAT = 3),
									(this.EU_SAVE_SETTINGS_PARAMETER = 'SaveSettings'),
									(this.EU_RESOLVE_OIDS_PARAMETER = 'ResolveOIDs'),
									(this.EU_MAKE_PKEY_PFX_CONTAINER_PARAMETER =
										'MakePKeyPFXContainer'),
									(this.EU_SIGN_INCLUDE_CONTENT_TIME_STAMP_PARAMETER =
										'SignIncludeContentTimeStamp'),
									(this.EU_SIGN_TYPE_PARAMETER = 'SignType'),
									(this.EU_SIGN_INCLUDE_CA_CERTIFICATES_PARAMETER =
										'SignIncludeCACertificates'),
									(this.EU_FS_CALCULATE_FINGERPRINT = 'FSCalculateFingerprint'),
									(this.EU_CHECK_CERT_CHAIN_ON_SIGN_TIME_PARAMETER =
										'CheckCertChainOnSignTime'),
									(this.EU_CONNECTIONS_TIMEOUT_PARAMETER =
										'ConnectionsTimeout'),
									(this.EU_LOG_EVENTS_THRESHOLD_PARAMETER =
										'LogEventsThreshold'),
									(this.EU_USE_SLOGIN_PRIVATE_KEY = 'UseSLoginPrivateKey'),
									(this.EU_SETTINGS_ID_NONE = 0),
									(this.EU_SETTINGS_ID_MANDATORY = 31),
									(this.EU_SETTINGS_ID_ALL = 4095),
									(this.EU_SETTINGS_ID_FSTORE = 1),
									(this.EU_SETTINGS_ID_PROXY = 2),
									(this.EU_SETTINGS_ID_TSP = 4),
									(this.EU_SETTINGS_ID_OCSP = 8),
									(this.EU_SETTINGS_ID_LDAP = 16),
									(this.EU_SETTINGS_ID_MODE = 32),
									(this.EU_SETTINGS_ID_CMP = 64),
									(this.EU_SETTINGS_ID_KM = 128),
									(this.EU_SETTINGS_ID_OCSP_ACCESS_INFO_MODE = 256),
									(this.EU_SETTINGS_ID_OCSP_ACCESS_INFO = 512),
									(this.EU_SETTINGS_ID_TSL = 1024),
									(this.EU_SETTINGS_ID_LOG = 2048),
									(this.EU_HEADER_CA_TYPE = 'UA1'),
									(this.EU_HEADER_PART_TYPE_SIGNED = 1),
									(this.EU_HEADER_PART_TYPE_ENCRYPTED = 2),
									(this.EU_HEADER_PART_TYPE_STAMPED = 3),
									(this.EU_HEADER_PART_TYPE_CERTCRYPT = 4),
									(this.EU_HEADER_MAX_CA_TYPE_SIZE = 3),
									(this.EU_SIGNED_CRYPTO_HEADER =
										this.EU_HEADER_PART_TYPE_SIGNED),
									(this.EU_ENCRYPTED_CRYPTO_HEADER =
										this.EU_HEADER_PART_TYPE_ENCRYPTED),
									(this.EU_TIMESTAMPED_CRYPTO_HEADER =
										this.EU_HEADER_PART_TYPE_STAMPED),
									(this.EU_CERTCRYPT_CRYPTO_HEADER =
										this.EU_HEADER_PART_TYPE_CERTCRYPT),
									(this.EU_DEFAULT_LANG = 0),
									(this.EU_UA_LANG = 1),
									(this.EU_RU_LANG = 2),
									(this.EU_EN_LANG = 3),
									(this.EU_CONTENT_ENC_ALGO_TDES_CBC = 4),
									(this.EU_CONTENT_ENC_ALGO_AES_128_CBC = 5),
									(this.EU_CONTENT_ENC_ALGO_AES_192_CBC = 6),
									(this.EU_CONTENT_ENC_ALGO_AES_256_CBC = 7),
									(this.EU_DEV_CTX_MIN_PUBLIC_DATA_ID = 16),
									(this.EU_DEV_CTX_MAX_PRIVATE_DATA_ID = 175),
									(this.EU_UA_OID_EXT_KEY_USAGE_STAMP = '1.2.804.2.1.1.1.3.9'),
									(this.EU_CCS_TYPE_REVOKE = 1),
									(this.EU_CCS_TYPE_HOLD = 2),
									(this.EU_REVOCATION_REASON_UNKNOWN = 0),
									(this.EU_REVOCATION_REASON_KEY_COMPROMISE = 1),
									(this.EU_REVOCATION_REASON_NEW_ISSURED = 2),
									(this.EU_SIGN_TYPE_UNKNOWN = 0),
									(this.EU_SIGN_TYPE_CADES_BES = 1),
									(this.EU_SIGN_TYPE_CADES_T = 4),
									(this.EU_SIGN_TYPE_CADES_C = 8),
									(this.EU_SIGN_TYPE_CADES_X_LONG = 16),
									(this.EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER =
										'CheckPrivateKey'),
									(this.EU_RESOLVE_OIDS_CONTEXT_PARAMETER = 'ResolveOIDs'),
									(this.EU_EXPORATABLE_CONTEXT_CONTEXT_PARAMETER =
										'ExportableContext'),
									(this.EU_ENCODE_ECDSA_SIGN_VALUE_CONTEXT_PARAMETER =
										'EncodeECDSASignValue'),
									(this.EU_USE_SLOGIN_PRIVATE_KEY_CONTEXT_PARAMETER =
										'UseSLoginPrivateKey'),
									(this.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL = 1),
									(this.EU_RECIPIENT_APPEND_TYPE_BY_KEY_ID = 2),
									(this.EU_CTX_HASH_ALGO_UNKNOWN = 0),
									(this.EU_CTX_HASH_ALGO_GOST34311 = 1),
									(this.EU_CTX_HASH_ALGO_SHA160 = 2),
									(this.EU_CTX_HASH_ALGO_SHA224 = 3),
									(this.EU_CTX_HASH_ALGO_SHA256 = 4),
									(this.EU_CTX_HASH_ALGO_SHA384 = 5),
									(this.EU_CTX_HASH_ALGO_SHA512 = 6),
									(this.EU_CTX_HASH_ALGO_DSTU7564_256 = 7),
									(this.EU_CTX_HASH_ALGO_DSTU7564_384 = 8),
									(this.EU_CTX_HASH_ALGO_DSTU7564_512 = 9),
									(this.EU_CTX_SIGN_UNKNOWN = 0),
									(this.EU_CTX_SIGN_DSTU4145_WITH_GOST34311 = 1),
									(this.EU_CTX_SIGN_RSA_WITH_SHA = 2),
									(this.EU_CTX_SIGN_ECDSA_WITH_SHA = 3),
									(this.EU_CTX_SIGN_DSTU4145_WITH_DSTU7564 = 4),
									(this.EU_FILE_PROCESS_CHUNK_SIZE = 1048576),
									(this.EU_ASIC_TYPE_UNKNOWN = 0),
									(this.EU_ASIC_TYPE_S = 1),
									(this.EU_ASIC_TYPE_E = 2),
									(this.EU_ASIC_SIGN_TYPE_UNKNOWN = 0),
									(this.EU_ASIC_SIGN_TYPE_CADES = 1),
									(this.EU_ASIC_SIGN_TYPE_XADES = 2),
									(this.EU_ASIC_SIGN_LEVEL_BES = 1),
									(this.EnvelopToRecipientsEx = function (t, n, r, i) {
										var o = this.m_library
										return new e(function (e, s) {
											o.EnvelopToRecipientsEx(t, n, r, i, e, s)
										})
									}),
									(this.EnvelopToRecipientsWithDynamicKey = function (
										t,
										n,
										r,
										i
									) {
										var o = this.m_library
										return new e(function (e, s) {
											o.EnvelopToRecipientsWithDynamicKey(t, n, r, i, e, s)
										})
									}),
									(this.EnvelopToRecipientsWithSettings = function (
										t,
										n,
										r,
										i,
										o,
										s,
										a
									) {
										var u = this.m_library
										return new e(function (e, l) {
											u.EnvelopToRecipientsWithSettings(
												t,
												n,
												r,
												i,
												o,
												s,
												a,
												e,
												l
											)
										})
									}),
									(this.CtxEnvelop = function (t, n, r, i, o, s) {
										var a = this.m_library
										return new e(function (e, u) {
											a.CtxEnvelop(t, n, r, i, o, s, e, u)
										})
									}),
									(this.CtxEnvelopWithDynamicKey = function (t, n, r, i, o, s) {
										var a = this.m_library
										return new e(function (e, u) {
											a.CtxEnvelopWithDynamicKey(t, n, r, i, o, s, e, u)
										})
									}),
									(this.DevelopEx = function (t, n) {
										void 0 === n && (n = null)
										var r = this.m_library
										return new e(function (e, i) {
											r.DevelopEx(t, n, e, i)
										})
									}),
									(this.CtxDevelop = function (t, n, r) {
										void 0 === r && (r = null)
										var i = this.m_library
										return new e(function (e, o) {
											i.CtxDevelop(t, n, r, e, o)
										})
									}),
									(this.CtxCreateAuthData = function (t, n, r) {
										var i = this.m_library
										return new e(function (e, o) {
											i.CtxCreateAuthData(t, n, r, e, o)
										})
									}),
									(this.ProtectDataByPassword = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.ProtectDataByPassword(t, n, e, i)
										})
									}),
									(this.UnprotectDataByPassword = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.UnprotectDataByPassword(t, n, e, i)
										})
									}),
									(this.AppendTransportHeader = function (t, n, r, i, o) {
										var s = this.m_library
										return new e(function (e, a) {
											s.AppendTransportHeader(t, n, r, i, o, e, a)
										})
									}),
									(this.ParseTransportHeader = function (t) {
										var n = this.m_library
										return new e(function (e, r) {
											n.ParseTransportHeader(t, e, r)
										})
									}),
									(this.AppendCryptoHeader = function (t, n, r) {
										var i = this.m_library
										return new e(function (e, o) {
											i.AppendCryptoHeader(t, n, r, e, o)
										})
									}),
									(this.ParseCryptoHeader = function (t) {
										var n = this.m_library
										return new e(function (e, r) {
											n.ParseCryptoHeader(t, e, r)
										})
									}),
									(this.GetHostInfo = function () {
										var t = this.m_library
										return new e(function (e, n) {
											t.GetHostInfo(e, n)
										})
									}),
									(this.CtxCreate = function () {
										var t = this.m_library
										return new e(function (e, n) {
											t.CtxCreate(e, n)
										})
									}),
									(this.CtxFree = function (t) {
										var n = this.m_library
										return new e(function (e, r) {
											n.CtxFree(t, e, r)
										})
									}),
									(this.CtxSetParameter = function (t, n, r) {
										var i = this.m_library
										return new e(function (e, o) {
											i.CtxSetParameter(t, n, r, e, o)
										})
									}),
									(this.ASiCGetASiCType = function (t) {
										var n = this.m_library
										return new e(function (e, r) {
											n.ASiCGetASiCType(t, e, r)
										})
									}),
									(this.ASiCGetSignType = function (t) {
										var n = this.m_library
										return new e(function (e, r) {
											n.ASiCGetSignType(t, e, r)
										})
									}),
									(this.ASiCGetSignsCount = function (t) {
										var n = this.m_library
										return new e(function (e, r) {
											n.ASiCGetSignsCount(t, e, r)
										})
									}),
									(this.ASiCGetSignerInfo = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.ASiCGetSignerInfo(t, n, e, i)
										})
									}),
									(this.ASiCGetSignTimeInfo = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.ASiCGetSignTimeInfo(t, n, e, i)
										})
									}),
									(this.CtxASiCSign = function (t, n, r, i, o, s) {
										var a = this.m_library
										return new e(function (e, u) {
											a.CtxASiCSign(t, n, r, i, o, s, e, u)
										})
									}),
									(this.CtxASiCAppendSign = function (t, n, r, i, o) {
										var s = this.m_library
										return new e(function (e, a) {
											s.CtxASiCAppendSign(t, n, r, i, o, e, a)
										})
									}),
									(this.ASiCVerify = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.ASiCVerify(t, n, e, i)
										})
									}),
									(this.CtxASiCGetSignerInfo = function (t, n, r) {
										var i = this.m_library
										return new e(function (e, o) {
											i.CtxASiCGetSignerInfo(t, n, r, e, o)
										})
									}),
									(this.ASiCGetSignLevel = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.ASiCGetSignLevel(t, n, e, i)
										})
									}),
									(this.PDFGetSignType = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.PDFGetSignType(t, n, e, i)
										})
									}),
									(this.PDFGetSignsCount = function (t) {
										var n = this.m_library
										return new e(function (e, r) {
											n.PDFGetSignsCount(t, e, r)
										})
									}),
									(this.PDFGetSignerInfo = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.PDFGetSignerInfo(t, n, e, i)
										})
									}),
									(this.PDFGetSignTimeInfo = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.PDFGetSignTimeInfo(t, n, e, i)
										})
									}),
									(this.CtxPDFSign = function (t, n, r, i) {
										var o = this.m_library
										return new e(function (e, s) {
											o.CtxPDFSign(t, n, r, i, e, s)
										})
									}),
									(this.PDFVerify = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.PDFVerify(t, n, e, i)
										})
									}),
									(this.CtxPDFGetSignerInfo = function (t, n, r) {
										var i = this.m_library
										return new e(function (e, o) {
											i.CtxPDFGetSignerInfo(t, n, r, e, o)
										})
									}),
									(this.XAdESGetType = function (t) {
										var n = this.m_library
										return new e(function (e, r) {
											n.XAdESGetType(t, e, r)
										})
									}),
									(this.XAdESGetSignsCount = function (t) {
										var n = this.m_library
										return new e(function (e, r) {
											n.XAdESGetSignsCount(t, e, r)
										})
									}),
									(this.XAdESGetSignLevel = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.XAdESGetSignLevel(t, n, e, i)
										})
									}),
									(this.XAdESGetSignerInfo = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.XAdESGetSignerInfo(t, n, e, i)
										})
									}),
									(this.XAdESGetSignTimeInfo = function (t, n) {
										var r = this.m_library
										return new e(function (e, i) {
											r.XAdESGetSignTimeInfo(t, n, e, i)
										})
									}),
									(this.CtxXAdESSign = function (t, n, r, i, o) {
										var s = this.m_library
										return new e(function (e, a) {
											s.CtxXAdESSign(t, n, r, i, o, e, a)
										})
									}),
									(this.XAdESVerify = function (t, n, r) {
										var i = this.m_library
										return new e(function (e, o) {
											i.XAdESVerify(t, n, r, e, o)
										})
									}),
									(this.CtxXAdESGetSignerInfo = function (t, n, r) {
										var i = this.m_library
										return new e(function (e, o) {
											i.CtxXAdESGetSignerInfo(t, n, r, e, o)
										})
									}),
									(this.SServerClientGeneratePrivateKeyAsync = function (
										t,
										n,
										r,
										i,
										o,
										s,
										a,
										u,
										l,
										c,
										p
									) {
										var _ = this.m_library
										return new e(function (e, f) {
											_.SServerClientGeneratePrivateKeyAsync(
												t,
												n,
												r,
												i,
												o,
												s,
												a,
												u,
												l,
												c,
												p,
												e,
												f
											)
										})
									}),
									(this.SServerClientCheckGeneratePrivateKeyStatus = function (
										t,
										n,
										r,
										i
									) {
										var o = this.m_library
										return new e(function (e, s) {
											o.SServerClientCheckGeneratePrivateKeyStatus(
												t,
												n,
												r,
												i,
												e,
												s
											)
										})
									}),
									(this.SServerClientSignHashesAsync = function (
										t,
										n,
										r,
										i,
										o,
										s,
										a,
										u
									) {
										var l = this.m_library
										return new e(function (e, c) {
											l.SServerClientSignHashesAsync(
												t,
												n,
												r,
												i,
												o,
												s,
												a,
												u,
												e,
												c
											)
										})
									}),
									(this.SServerClientCheckSignHashesStatus = function (
										t,
										n,
										r,
										i
									) {
										var o = this.m_library
										return new e(function (e, s) {
											o.SServerClientCheckSignHashesStatus(t, n, r, i, e, s)
										})
									}),
									(this.m_language = 0),
									(this.m_library = null)
							}
							return (
								(t.prototype.MakeURL = function (e) {
									var t = location.origin,
										n = location.pathname
									return 0 == e.indexOf('http://') || 0 == e.indexOf('https://')
										? e
										: 0 == e.indexOf('/') && t
										? t + e
										: t && n
										? t + n.substr(0, n.lastIndexOf('/')) + '/' + e
										: e
								}),
								(t.prototype.MakeError = function (e, t) {
									return this.m_library.MakeError(e, t)
								}),
								(t.prototype.IsLibraryLoadError = function (e) {
									return e == r.EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED
								}),
								(t.prototype.IsLibraryVersionNotSupportedError = function (e) {
									return e == r.EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED
								}),
								(t.prototype.Load = function () {
									var t = this
									return new e(function (e, n) {
										if (null == t.m_library) {
											var i = new r.EndUserLibraryLoader(
												r.EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT,
												'euSign',
												t.m_language,
												!0,
												!0
											)
											;(i.onload = function (n) {
												;(t.m_library = n), e()
											}),
												(i.onerror = function (e, t, i) {
													null == i && (i = new r.EUSignCP('', '')),
														n(i.MakeError(t, ''))
												}),
												i.load()
										} else e()
									})
								}),
								(t.prototype.IsSupported = function () {
									return (
										r.EndUserLibraryLoader.isWebExtensionSupported() ||
										r.EndUserLibraryLoader.isSignAgentSupported() ||
										r.EndUserLibraryLoader.isNPAPISupported() ||
										r.EndUserLibraryLoader.isActiveXSupported()
									)
								}),
								(t.prototype.IsSignAgentSupported = function () {
									return r.EndUserLibraryLoader.isSignAgentSupported()
								}),
								(t.prototype.IsWebExtensionSupported = function () {
									return r.EndUserLibraryLoader.isWebExtensionSupported()
								}),
								(t.prototype.IsNPAPISupported = function () {
									return r.EndUserLibraryLoader.isNPAPISupported()
								}),
								(t.prototype.IsActiveXSupported = function () {
									return r.EndUserLibraryLoader.isActiveXSupported()
								}),
								(t.prototype.IsWebExtensionInstalled = function () {
									return r.EndUserLibraryLoader.isWebExtensionInstalled()
								}),
								(t.prototype.GetInstallURL = function (e, t) {
									return (
										void 0 === e && (e = !1),
										new r.EUSignCP('', '').GetInstallURL(e, t)
									)
								}),
								(t.prototype.GetUpdateURL = function (e, t) {
									return (
										void 0 === e && (e = !1),
										new r.EUSignCP('', '').GetUpdateURL(e, t)
									)
								}),
								(t.prototype.GetHelpURL = function (e) {
									return new r.EUSignCP('', '').GetHelpURL(e)
								}),
								(t.prototype.GetWebExtensionInstallURL = function () {
									return new r.EUSignCP('', '').GetWebExtensionInstallURL()
								}),
								(t.prototype.GetVersion = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetVersion(e, n)
									})
								}),
								(t.prototype.IsInitialized = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.IsInitialized(e, n)
									})
								}),
								(t.prototype.Initialize = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.Initialize(e, n)
									})
								}),
								(t.prototype.Finalize = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.Finalize(e, n)
									})
								}),
								(t.prototype.ResetOperation = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.ResetOperation(e, n)
									})
								}),
								(t.prototype.SetUIMode = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetUIMode(t, e, r)
									})
								}),
								(t.prototype.SetLanguage = function (t) {
									var n = this.m_library
									if ('string' == typeof t)
										switch ((t = t.toLocaleLowerCase())) {
											case 'en':
												t = this.EU_EN_LANG
												break
											case 'ru':
												t = this.EU_RU_LANG
												break
											case 'uk':
											case 'ua':
											default:
												t = this.EU_UA_LANG
										}
									return (
										(this.m_language = t),
										new e(function (e, r) {
											n.SetLanguage(t, e, r)
										})
									)
								}),
								(t.prototype.SetCharset = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetCharset(t, e, r)
									})
								}),
								(t.prototype.SetRuntimeParameter = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.SetRuntimeParameter(t, n, e, i)
									})
								}),
								(t.prototype.GetStorageParameter = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.GetStorageParameter(t, n, e, i)
									})
								}),
								(t.prototype.SetStorageParameter = function (t, n, r) {
									var i = this.m_library
									return new e(function (e, o) {
										i.SetStorageParameter(t, n, r, e, o)
									})
								}),
								(t.prototype.BASE64Encode = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.BASE64Encode(t, e, r)
									})
								}),
								(t.prototype.BASE64Decode = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.BASE64Decode(t, e, r)
									})
								}),
								(t.prototype.StringToBytes = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.StringToBytes(t, e, r)
									})
								}),
								(t.prototype.BytesToString = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.BytesToString(t, e, r)
									})
								}),
								(t.prototype.DoesNeedSetSettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.DoesNeedSetSettings(e, n)
									})
								}),
								(t.prototype.InitializeMandatorySettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.InitializeMandatorySettings(e, n)
									})
								}),
								(t.prototype.CreateModeSettings = function () {
									return this.m_library.CreateModeSettings()
								}),
								(t.prototype.GetModeSettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetModeSettings(e, n)
									})
								}),
								(t.prototype.SetModeSettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetModeSettings(t, e, r)
									})
								}),
								(t.prototype.CreateKeyMediaSettings = function () {
									return this.m_library.CreateKeyMediaSettings()
								}),
								(t.prototype.GetKeyMediaSettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetKeyMediaSettings(e, n)
									})
								}),
								(t.prototype.SetKeyMediaSettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetKeyMediaSettings(t, e, r)
									})
								}),
								(t.prototype.CreateFileStoreSettings = function () {
									return this.m_library.CreateFileStoreSettings()
								}),
								(t.prototype.GetFileStoreSettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetFileStoreSettings(e, n)
									})
								}),
								(t.prototype.SetFileStoreSettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetFileStoreSettings(t, e, r)
									})
								}),
								(t.prototype.CreateProxySettings = function () {
									return this.m_library.CreateProxySettings()
								}),
								(t.prototype.GetProxySettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetProxySettings(e, n)
									})
								}),
								(t.prototype.SetProxySettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetProxySettings(t, e, r)
									})
								}),
								(t.prototype.CreateOCSPSettings = function () {
									return this.m_library.CreateOCSPSettings()
								}),
								(t.prototype.GetOCSPSettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetOCSPSettings(e, n)
									})
								}),
								(t.prototype.SetOCSPSettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetOCSPSettings(t, e, r)
									})
								}),
								(t.prototype.CreateOCSPAccessInfoModeSettings = function () {
									return this.m_library.CreateOCSPAccessInfoModeSettings()
								}),
								(t.prototype.GetOCSPAccessInfoModeSettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetOCSPAccessInfoModeSettings(e, n)
									})
								}),
								(t.prototype.SetOCSPAccessInfoModeSettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetOCSPAccessInfoModeSettings(t, e, r)
									})
								}),
								(t.prototype.CreateOCSPAccessInfoSettings = function () {
									return this.m_library.CreateOCSPAccessInfoSettings()
								}),
								(t.prototype.EnumOCSPAccessInfoSettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.EnumOCSPAccessInfoSettings(t, e, r)
									})
								}),
								(t.prototype.GetOCSPAccessInfoSettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetOCSPAccessInfoSettings(e, n)
									})
								}),
								(t.prototype.SetOCSPAccessInfoSettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetOCSPAccessInfoSettings(t, e, r)
									})
								}),
								(t.prototype.DeleteOCSPAccessInfoSettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.DeleteOCSPAccessInfoSettings(t, e, r)
									})
								}),
								(t.prototype.CreateTSPSettings = function () {
									return this.m_library.CreateTSPSettings()
								}),
								(t.prototype.GetTSPSettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetTSPSettings(e, n)
									})
								}),
								(t.prototype.SetTSPSettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetTSPSettings(t, e, r)
									})
								}),
								(t.prototype.CreateLDAPSettings = function () {
									return this.m_library.CreateLDAPSettings()
								}),
								(t.prototype.GetLDAPSettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetLDAPSettings(e, n)
									})
								}),
								(t.prototype.SetLDAPSettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetLDAPSettings(t, e, r)
									})
								}),
								(t.prototype.CreateCMPSettings = function () {
									return this.m_library.CreateCMPSettings()
								}),
								(t.prototype.GetCMPSettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetCMPSettings(e, n)
									})
								}),
								(t.prototype.SetCMPSettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetCMPSettings(t, e, r)
									})
								}),
								(t.prototype.GetSystemProxySettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetSystemProxySettings(e, n)
									})
								}),
								(t.prototype.CreateTSLSettings = function () {
									return this.m_library.CreateTSLSettings()
								}),
								(t.prototype.GetTSLSettings = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetTSLSettings(e, n)
									})
								}),
								(t.prototype.SetTSLSettings = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetTSLSettings(t, e, r)
									})
								}),
								(t.prototype.SetOCSPResponseExpireTime = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SetOCSPResponseExpireTime(t, e, r)
									})
								}),
								(t.prototype.GetCertificate = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.GetCertificate(t, n, e, i)
									})
								}),
								(t.prototype.ParseCertificateEx = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.ParseCertificateEx(t, e, r)
									})
								}),
								(t.prototype.SaveCertificate = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SaveCertificate(t, e, r)
									})
								}),
								(t.prototype.SaveCertificates = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SaveCertificates(t, e, r)
									})
								}),
								(t.prototype.GetTSPByAccessInfo = function (t, n, r, i) {
									var o = this.m_library
									return new e(function (e, s) {
										o.GetTSPByAccessInfo(t, n, r, i, e, s)
									})
								}),
								(t.prototype.CheckTSP = function (t, n, r) {
									var i = this.m_library
									return new e(function (e, o) {
										i.CheckTSP(t, n, r, e, o)
									})
								}),
								(t.prototype.DownloadData = function (t, n) {
									var i = this
									return new e(function (e, o) {
										try {
											var s = new XMLHttpRequest()
											;(s.onload = function () {
												if (4 == s.readyState) {
													var a = null
													try {
														if (200 != s.status)
															throw (
																'Download data error. URL - ' +
																t +
																', status - ' +
																s.status
															)
														switch (n) {
															case 'binary':
																a = new Uint8Array(s.response)
																break
															case 'json':
																a = JSON.parse(
																	s.responseText.replace(/\\'/g, "'")
																)
																break
															default:
																a = s.responseText
														}
													} catch (e) {
														return (
															console.log('EndUser.DowloadData error: ' + e),
															void o(
																i.MakeError(
																	r.EndUserError.ERROR_DOWNLOAD_FILE,
																	''
																)
															)
														)
													}
													e(a)
												}
											}),
												(s.onerror = function () {
													o(i.MakeError(r.EndUserError.ERROR_DOWNLOAD_FILE, ''))
												}),
												(t = i.MakeURL(t)),
												s.open('GET', t, !0),
												'binary' == n && (s.responseType = 'arraybuffer'),
												s.send()
										} catch (e) {
											o(i.MakeError(r.EndUserError.ERROR_DOWNLOAD_FILE, ''))
										}
									})
								}),
								(t.prototype.CreateKeyMedia = function () {
									return this.m_library.CreateKeyMedia()
								}),
								(t.prototype.GetPrivateKeyMedia = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.GetPrivateKeyMedia(t, e, r)
									})
								}),
								(t.prototype.EnumKeyMediaTypes = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.EnumKeyMediaTypes(t, e, r)
									})
								}),
								(t.prototype.EnumKeyMediaDevices = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.EnumKeyMediaDevices(t, n, e, i)
									})
								}),
								(t.prototype.GetKeyMediaTypes = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetKeyMediaTypes(e, n)
									})
								}),
								(t.prototype.GetKeyMediaDevices = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.GetKeyMediaDevices(t, e, r)
									})
								}),
								(t.prototype.IsPrivateKeyReaded = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.IsPrivateKeyReaded(e, n)
									})
								}),
								(t.prototype.ReadPrivateKey = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.ReadPrivateKey(e, n)
									})
								}),
								(t.prototype.ReadPrivateKeySilently = function (t, n, r) {
									var i = this.m_library
									return new e(function (e, o) {
										'number' == typeof t
											? i.ReadPrivateKeySilently(t, n, r, e, o)
											: i.ReadPrivateKeySilently(t, e, o)
									})
								}),
								(t.prototype.ReadPrivateKeyBinary = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.ReadPrivateKeyBinary(t, n, e, i)
									})
								}),
								(t.prototype.ReadPrivateKeyFile = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.ReadPrivateKeyFile(t, n, e, i)
									})
								}),
								(t.prototype.ResetPrivateKey = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.ResetPrivateKey(e, n)
									})
								}),
								(t.prototype.CtxReadPrivateKey = function (t, n, r, i) {
									var o = this.m_library
									return new e(function (e, s) {
										'number' == typeof n
											? o.CtxReadPrivateKey(t, n, r, i, e, s)
											: o.CtxReadPrivateKey(t, n, e, s)
									})
								}),
								(t.prototype.CtxReadPrivateKeyBinary = function (t, n, r) {
									var i = this.m_library
									return new e(function (e, o) {
										i.CtxReadPrivateKeyBinary(t, n, r, e, o)
									})
								}),
								(t.prototype.CtxFreePrivateKey = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.CtxFreePrivateKey(t, e, r)
									})
								}),
								(t.prototype.ShowOwnCertificate = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.ShowOwnCertificate(e, n)
									})
								}),
								(t.prototype.GetOwnCertificate = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										'number' == typeof t || 'number' == typeof n
											? r.GetOwnCertificate(t, n, e, i)
											: r.GetOwnCertificate(e, i)
									})
								}),
								(t.prototype.GetOwnEUserParams = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetOwnEUserParams(e, n)
									})
								}),
								(t.prototype.CtxGetOwnEUserParams = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.CtxGetOwnEUserParams(t, e, r)
									})
								}),
								(t.prototype.ModifyOwnEUserParams = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.ModifyOwnEUserParams(t, n, e, i)
									})
								}),
								(t.prototype.CtxModifyOwnEUserParams = function (t, n, r) {
									var i = this.m_library
									return new e(function (e, o) {
										i.CtxModifyOwnEUserParams(t, n, r, e, o)
									})
								}),
								(t.prototype.EnumOwnCertificates = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.EnumOwnCertificates(t, e, r)
									})
								}),
								(t.prototype.GetPrivateKeyOwnerInfo = function () {
									var t = this.m_library
									return new e(function (e, n) {
										t.GetPrivateKeyOwnerInfo(e, n)
									})
								}),
								(t.prototype.CtxEnumOwnCertificates = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.CtxEnumOwnCertificates(t, n, e, i)
									})
								}),
								(t.prototype.CtxGetOwnCertificate = function (t, n, r) {
									var i = this.m_library
									return new e(function (e, o) {
										i.CtxGetOwnCertificate(t, n, r, e, o)
									})
								}),
								(t.prototype.GetKeyInfo = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.GetKeyInfo(t, e, r)
									})
								}),
								(t.prototype.GetKeyInfoBinary = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.GetKeyInfoBinary(t, n, e, i)
									})
								}),
								(t.prototype.GetKeyInfoFile = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.GetKeyInfoFile(t, n, e, i)
									})
								}),
								(t.prototype.GetCertificatesByKeyInfo = function (t, n, r) {
									var i = this.m_library
									return new e(function (e, o) {
										i.GetCertificatesByKeyInfo(t, n, r, e, o)
									})
								}),
								(t.prototype.EnumJKSPrivateKeys = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.EnumJKSPrivateKeys(t, n, e, i)
									})
								}),
								(t.prototype.GetJKSPrivateKey = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.GetJKSPrivateKey(t, n, e, i)
									})
								}),
								(t.prototype.CreatePrivateKeyInfo = function () {
									return this.m_library.CreatePrivateKeyInfo()
								}),
								(t.prototype.CreateEndUserInfo = function () {
									return this.m_library.CreateEndUserInfo()
								}),
								(t.prototype.GeneratePrivateKeyEx = function (
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									c,
									p,
									_,
									f,
									E,
									h,
									S,
									d
								) {
									var y = this.m_library
									return new e(function (e, C) {
										y.GeneratePrivateKeyEx(
											t,
											n,
											r,
											i,
											o,
											s,
											a,
											u,
											l,
											c,
											p,
											_,
											f,
											E,
											h,
											S,
											d,
											e,
											C
										)
									})
								}),
								(t.prototype.ChangePrivateKeyPassword = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										null != t
											? r.ChangePrivateKeyPassword(
													t.GetTypeIndex(),
													t.GetDevIndex(),
													t.GetPassword(),
													n,
													e,
													i
											  )
											: r.ChangePrivateKeyPassword(e, i)
									})
								}),
								(t.prototype.ChangeSoftwarePrivateKeyPassword = function (
									t,
									n,
									r
								) {
									var i = this.m_library
									return new e(function (e, o) {
										i.ChangeSoftwarePrivateKeyPassword(t, n, r, e, o)
									})
								}),
								(t.prototype.SetKeyMediaUserPassword = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										null != n
											? r.SetKeyMediaUserPassword(
													t,
													n.GetTypeIndex(),
													n.GetDevIndex(),
													n.GetPassword(),
													e,
													i
											  )
											: r.SetKeyMediaUserPassword(t, e, i)
									})
								}),
								(t.prototype.ChangeOwnCertificatesStatus = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.ChangeOwnCertificatesStatus(t, n, e, i)
									})
								}),
								(t.prototype.CtxChangeOwnCertificatesStatus = function (
									t,
									n,
									r
								) {
									var i = this.m_library
									return new e(function (e, o) {
										i.CtxChangeOwnCertificatesStatus(t, n, r, e, o)
									})
								}),
								(t.prototype.MakeNewCertificate = function (
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l,
									c,
									p,
									_,
									f
								) {
									var E = this.m_library
									return new e(function (e, h) {
										E.MakeNewCertificate(
											t,
											n,
											r,
											i,
											o,
											s,
											a,
											u,
											l,
											c,
											p,
											_,
											f,
											e,
											h
										)
									})
								}),
								(t.prototype.MakeNewOwnCertificate = function (
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u
								) {
									var l = this.m_library
									return new e(function (e, c) {
										l.MakeNewOwnCertificate(t, n, r, i, o, s, a, u, e, c)
									})
								}),
								(t.prototype.CtxMakeNewOwnCertificate = function (
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u,
									l
								) {
									var c = this.m_library
									return new e(function (e, p) {
										c.CtxMakeNewOwnCertificate(t, n, r, i, o, s, a, u, l, e, p)
									})
								}),
								(t.prototype.CtxMakeNewOwnCertificateWithCR = function (
									t,
									n,
									r,
									i,
									o
								) {
									var s = this.m_library
									return new e(function (e, a) {
										s.CtxMakeNewOwnCertificateWithCR(t, n, r, i, o, e, a)
									})
								}),
								(t.prototype.CtxMakeDeviceCertificate = function (
									t,
									n,
									r,
									i,
									o,
									s,
									a,
									u
								) {
									var l = this.m_library
									return new e(function (e, c) {
										l.CtxMakeDeviceCertificate(t, n, r, i, o, s, a, u, e, c)
									})
								}),
								(t.prototype.CtxHash = function (t, n, r, i) {
									var o = this.m_library
									return new e(function (e, s) {
										o.CtxHash(t, n, r, i, e, s)
									})
								}),
								(t.prototype.CtxHashBegin = function (t, n, r) {
									var i = this.m_library
									return new e(function (e, o) {
										i.CtxHashBegin(t, n, r, e, o)
									})
								}),
								(t.prototype.CtxHashContinue = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.CtxHashContinue(t, n, e, i)
									})
								}),
								(t.prototype.CtxHashEnd = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.CtxHashEnd(t, e, r)
									})
								}),
								(t.prototype.CtxHashFree = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.CtxHashFree(t, e, r)
									})
								}),
								(t.prototype.GetSignType = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.GetSignType(t, n, e, i)
									})
								}),
								(t.prototype.CtxGetSignerInfo = function (t, n, r) {
									var i = this.m_library
									return new e(function (e, o) {
										i.CtxGetSignerInfo(t, n, r, e, o)
									})
								}),
								(t.prototype.SignHash = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SignHash(t, e, r)
									})
								}),
								(t.prototype.Sign = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.Sign(t, e, r)
									})
								}),
								(t.prototype.SignInternal = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.SignInternal(t, n, e, i)
									})
								}),
								(t.prototype.SignHashRSA = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.SignHashRSA(t, e, r)
									})
								}),
								(t.prototype.SignRSA = function (t, n, r) {
									var i = this.m_library
									return new e(function (e, o) {
										i.SignRSA(t, n, r, e, o)
									})
								}),
								(t.prototype.CtxSignHash = function (t, n, r, i) {
									var o = this.m_library
									return new e(function (e, s) {
										o.CtxSignHash(t, n, r, i, e, s)
									})
								}),
								(t.prototype.CtxSign = function (t, n, r, i, o) {
									var s = this.m_library
									return new e(function (e, a) {
										s.CtxSign(t, n, r, i, o, e, a)
									})
								}),
								(t.prototype.CtxSignFile = function (t, n, r, i, o, s) {
									var a = this.m_library
									return new e(function (e, u) {
										a.CtxSignFile(t, n, r, i, o, s, e, u)
									})
								}),
								(t.prototype.CtxGetSignValue = function (t, n, r) {
									var i = this.m_library
									return new e(function (e, o) {
										i.CtxGetSignValue(t, n, r, e, o)
									})
								}),
								(t.prototype.AppendSignHash = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.AppendSignHash(t, n, e, i)
									})
								}),
								(t.prototype.AppendSign = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.AppendSign(t, n, e, i)
									})
								}),
								(t.prototype.AppendSignInternal = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.AppendSignInternal(t, n, e, i)
									})
								}),
								(t.prototype.CtxAppendSignHash = function (t, n, r, i, o) {
									var s = this.m_library
									return new e(function (e, a) {
										s.CtxAppendSignHash(t, n, r, i, o, e, a)
									})
								}),
								(t.prototype.CtxAppendSign = function (t, n, r, i, o) {
									var s = this.m_library
									return new e(function (e, a) {
										s.CtxAppendSign(t, n, r, i, o, e, a)
									})
								}),
								(t.prototype.CtxAppendSignFile = function (t, n, r, i, o, s) {
									var a = this.m_library
									return new e(function (e, u) {
										a.CtxAppendSignFile(t, n, r, i, o, s, e, u)
									})
								}),
								(t.prototype.IsDataInSignedDataAvailable = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.IsDataInSignedDataAvailable(t, e, r)
									})
								}),
								(t.prototype.GetCertificateFromSignedData = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.GetCertificateFromSignedData(t, n, e, i)
									})
								}),
								(t.prototype.GetSignsCount = function (t) {
									var n = this.m_library
									return new e(function (e, r) {
										n.GetSignsCount(t, e, r)
									})
								}),
								(t.prototype.GetSignTimeInfo = function (t, n) {
									var r = this.m_library
									return new e(function (e, i) {
										r.GetSignTimeInfo(t, n, e, i)
									})
								}),
								(t.prototype.VerifyHashOnTimeEx = function (t, n, r, i, o, s) {
									var a = this.m_library
									return new e(function (e, u) {
										a.VerifyHashOnTimeEx(t, n, r, i, o, s, e, u)
									})
								}),
								(t.prototype.VerifyDataOnTimeEx = function (t, n, r, i, o, s) {
									var a = this.m_library
									return new e(function (e, u) {
										a.VerifyDataOnTimeEx(t, n, r, i, o, s, e, u)
									})
								}),
								(t.prototype.VerifyDataInternalOnTimeEx = function (
									t,
									n,
									r,
									i,
									o
								) {
									var s = this.m_library
									return new e(function (e, a) {
										s.VerifyDataInternalOnTimeEx(t, n, r, i, o, e, a)
									})
								}),
								(t.prototype.CreateReference = function (e, t) {
									return this.m_library.CreateReference(e, t)
								}),
								t
							)
						})()
					t.a = i
				}).call(this, n(17).Promise)
			},
			function (e, t) {
				var n,
					r,
					i = (e.exports = {})
				function o() {
					throw new Error('setTimeout has not been defined')
				}
				function s() {
					throw new Error('clearTimeout has not been defined')
				}
				function a(e) {
					if (n === setTimeout) return setTimeout(e, 0)
					if ((n === o || !n) && setTimeout)
						return (n = setTimeout), setTimeout(e, 0)
					try {
						return n(e, 0)
					} catch (t) {
						try {
							return n.call(null, e, 0)
						} catch (t) {
							return n.call(this, e, 0)
						}
					}
				}
				!(function () {
					try {
						n = 'function' == typeof setTimeout ? setTimeout : o
					} catch (e) {
						n = o
					}
					try {
						r = 'function' == typeof clearTimeout ? clearTimeout : s
					} catch (e) {
						r = s
					}
				})()
				var u,
					l = [],
					c = !1,
					p = -1
				function _() {
					c &&
						u &&
						((c = !1), u.length ? (l = u.concat(l)) : (p = -1), l.length && f())
				}
				function f() {
					if (!c) {
						var e = a(_)
						c = !0
						for (var t = l.length; t; ) {
							for (u = l, l = []; ++p < t; ) u && u[p].run()
							;(p = -1), (t = l.length)
						}
						;(u = null),
							(c = !1),
							(function (e) {
								if (r === clearTimeout) return clearTimeout(e)
								if ((r === s || !r) && clearTimeout)
									return (r = clearTimeout), clearTimeout(e)
								try {
									r(e)
								} catch (t) {
									try {
										return r.call(null, e)
									} catch (t) {
										return r.call(this, e)
									}
								}
							})(e)
					}
				}
				function E(e, t) {
					;(this.fun = e), (this.array = t)
				}
				function h() {}
				;(i.nextTick = function (e) {
					var t = new Array(arguments.length - 1)
					if (arguments.length > 1)
						for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
					l.push(new E(e, t)), 1 !== l.length || c || a(f)
				}),
					(E.prototype.run = function () {
						this.fun.apply(null, this.array)
					}),
					(i.title = 'browser'),
					(i.browser = !0),
					(i.env = {}),
					(i.argv = []),
					(i.version = ''),
					(i.versions = {}),
					(i.on = h),
					(i.addListener = h),
					(i.once = h),
					(i.off = h),
					(i.removeListener = h),
					(i.removeAllListeners = h),
					(i.emit = h),
					(i.prependListener = h),
					(i.prependOnceListener = h),
					(i.listeners = function (e) {
						return []
					}),
					(i.binding = function (e) {
						throw new Error('process.binding is not supported')
					}),
					(i.cwd = function () {
						return '/'
					}),
					(i.chdir = function (e) {
						throw new Error('process.chdir is not supported')
					}),
					(i.umask = function () {
						return 0
					})
			},
			function (e, t) {
				var n
				n = (function () {
					return this
				})()
				try {
					n = n || new Function('return this')()
				} catch (e) {
					'object' == typeof window && (n = window)
				}
				e.exports = n
			},
			function (e, t) {},
		])
	},
	function (e, t, n) {
		e.exports = n(2)
	},
	function (e, t, n) {
		'use strict'
		n.r(t)
		var r,
			i = n(0),
			o = (function () {
				function e() {}
				return (
					(e.PK_READ_FORM_TITLE = 'Зчитайте ключ'),
					(e.PK_READ_FORM_SUB_TITLE =
						'Оберіть тип носія особистого ключа, особистий ключ, введіть пароль захисту ключа та натисніть "Зчитати"'),
					(e.PK_MAKE_NEW_CERTIFICATES_FORM_TITLE =
						'Формування нового сертифіката'),
					(e.PK_MAKE_NEW_CERTIFICATES_OLD_KEY_FORM_SUB_TITLE =
						'Оберіть тип носія діючого особистого ключа, діючий особистий ключ, введіть пароль захисту ключа та натисніть "Зчитати"'),
					(e.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FORM_SUB_TITLE =
						'Оберіть тип носія для нового особистого ключа, новий особистий ключ, введіть пароль захисту ключа та натисніть "Сформувати"'),
					(e.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FILE_FORM_SUB_TITLE =
						'Введіть новий пароль захисту ключа, його підтвердження та натисніть "Сформувати"'),
					(e.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_KM_FORM_SUB_TITLE =
						'Введіть новий пароль захисту ключа, його підтвердження та натисніть "Сформувати"'),
					(e.PK_MAKE_NEW_CERTIFICATES_RESULT_FORM_SUB_TITLE =
						'Завантажити нові сертифікати особистого ключа можна за посиланнями'),
					(e.PK_SET_PROXY_FORM_TITLE =
						'Встановлення налаштувань proxy-сервера'),
					(e.PK_SET_PROXY_FORM_SUB_TITLE =
						'Встановіть налаштування proxy-сервера та натисніть "Зберегти"'),
					(e.PK_INFO_FORM_TITLE = 'Перевірте дані'),
					(e.PK_INFO_FORM_SUB_TITLE = 'Перевірте дані'),
					(e.PRE_SIGN_FILE_FORM_TITLE = 'Підписати та зберегти'),
					(e.SIGN_FILE_FORM_TITLE = 'Підписати файл за допомогою'),
					(e.SIGN_FILE_FORM_SUB_TITLE =
						'Оберіть файл для підпису та натисніть "Підписати"'),
					(e.SIGN_FILE_RESULT_FORM_TITLE = '👍 Документ підписано'),
					(e.SIGN_FILE_RESULT_FORM_SUB_TITLE =
						'Ви можете зберігти підписаний файл.'),
					(e.VIEW_PKEY_CERTIFICATES_FORM_TITLE =
						'Перегляд інформації про сертифікати особистого ключа'),
					(e.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE =
						'Для збереження сертифікатів особистого ключа до папки "Завантаження" натисніть "Зберегти"'),
					(e.MAKE_TECHNICAL_CERTIFICATES_FORM_TITLE =
						'Формування технологічних сертифікатів'),
					(e.MAKE_TECHNICAL_CERTIFICATES_PK_READ_FORM_SUB_TITLE =
						'Оберіть тип носія особистого ключа, особистий ключ, введіть пароль захисту ключа відповідальної особи та натисніть "Зчитати"'),
					(e.MAKE_TECHNICAL_CERTIFICATES_FORM_SUB_TITLE =
						'Введіть назву технічного пристрою, оберіть файл із запитом ЕЦП (EU.p10) та протоколу розподілу ключів (EU-KEP.p10), та натисніть "Сформувати"'),
					(e.MAKE_TECHNICAL_CERTIFICATES_RESULT_FORM_SUB_TITLE =
						'Завантажити технологічні сертифікати можна за посиланнями'),
					(e.PROCESS_STATUS_LOAD = 'Завантаження'),
					(e.PROCESS_STATUS_LOAD_LIBRARY =
						'Завантаження криптографічної бібліотеки'),
					(e.PROCESS_STATUS_INITIALIZE_LIBRARY =
						'Ініціалізація криптографічної бібліотеки'),
					(e.PROCESS_STATUS_SAVE_PROXY_SETTINGS =
						'Збереження налаштувань proxy-серверу'),
					(e.PROCESS_STATUS_READ_PRIVATE_KEY = 'Зчитування особистого ключа'),
					(e.PROCESS_STATUS_MAKE_NEW_CERTIFICATE =
						'Формування нових сертифікатів особистого ключа'),
					(e.PROCESS_STATUS_SIGN_FILE = 'Накладання підпису на файл'),
					(e.PROCESS_STATUS_SIGN_DATA = 'Накладання підпису на дані'),
					(e.PROCESS_STATUS_MAKE_TECHNICAL_CERTS =
						'Формування технологічного сертифікату пристрою'),
					(e.TEXT_ERROR_DESCRIPTION = 'Опис помилки'),
					(e.TEXT_LIBRARY_NEED_INSTALL =
						'Для роботи з криптографічною бібліотекою необхідно встановити додаткове програмне забезпечення (web-бібліотеку підпису) після чого натиснути "Оновити сторінку"'),
					(e.TEXT_LIBRARY_NEED_UPDATE =
						'Для роботи з криптографічною бібліотекою необхідно оновити додаткове програмне забезпечення (web-бібліотеку підпису) після чого натиснути "Оновити сторінку"'),
					(e.TEXT_LIBRARY_INSTALL =
						'Інсталяційний пакет web-бібліотеки підпису'),
					(e.TEXT_LIBRARY_UPDATE = 'Оновлення web-бібліотеки підпису'),
					(e.TEXT_LIBRARY_WEB_EXTENSION_INSTALL =
						'Інсталяційний пакет бібліотеки підпису (web-розширення)'),
					(e.TEXT_LIBRARY_USER_MANUAL = 'Настанова користувача'),
					(e.TEXT_DOWLOAD_NEW_CERTIFICATES = 'Завантажити нові сертифікати'),
					(e.TEXT_SAVE_NEW_PRIVATE_KEY = 'Зберегти новий особистий ключ'),
					(e.TEXT_SAVE_SIGN_FILE = 'Зберегти підписаний файл'),
					(e.TEXT_CA_AUTO_DETECT = 'Визначити автоматично'),
					(e.TEXT_SET_PROXY_SETTINGS =
						'Перевірте та встановіть налаштування proxy-сервера'),
					(e.TEXT_SIGN_ALGO_DSTU4145 = 'ДСТУ 4145'),
					(e.TEXT_SIGN_ALGO_RSA = 'RSA'),
					(e.TEXT_SIGN_ALGO_ECDSA = 'ECDSA'),
					(e.TEXT_SIGN_RESULT_TITLE = 'Результат накладання підпису'),
					(e.TEXT_SIGN_RESULT_SUCCESS =
						'Підпис накладено успішно. Цілісність даних підтверджено'),
					(e.TEXT_SIGN_FILE_NAME_TITLE = 'Назва файлу, що підписувався'),
					(e.TEXT_SIGNER_TITLE = 'Підписувач'),
					(e.TEXT_SUBJECT_CN_TITLE = 'Власник'),
					(e.TEXT_ORGANIZATION_TITLE = 'Організація'),
					(e.TEXT_TITLE_TITLE = 'Посада'),
					(e.TEXT_DRFO_CODE_TITLE = 'РНОКПП'),
					(e.TEXT_EDRPOU_CODE_TITLE = 'Код ЄДРПОУ'),
					(e.TEXT_DIGITAL_STAMP_TITLE = 'Є цифровою печаткою'),
					(e.TEXT_KEY_TYPE = 'Тип ключа'),
					(e.TEXT_KEY_TYPE_DSTU4145 = 'ДСТУ 4145'),
					(e.TEXT_KEY_TYPE_RSA = 'RSA'),
					(e.TEXT_KEY_TYPE_ECDSA = 'ECDSA'),
					(e.TEXT_KEY_USAGE_TITLE = 'Використання ключів'),
					(e.TEXT_KEY_USAGE_SIGN = 'ЕЦП'),
					(e.TEXT_KEY_NON_REPUDATION = 'Неспростовність'),
					(e.TEXT_KEY_USAGE_ENVELOP = 'Протоколи розподілу ключів'),
					(e.TEXT_ISSUER_CN_TITLE = 'Сертифікат виданий'),
					(e.TEXT_SN_TITLE = 'Серійний номер'),
					(e.TEXT_CERTIFICATE_VALID_TITLE = 'Cертифікат чинний'),
					(e.TEXT_CERTIFICATE_TITLE = 'Cертифікат'),
					(e.TEXT_CERTIFICATES_INFO_TITLE = 'Cертифікати'),
					(e.TEXT_SIGN_TIME_TITLE = 'Час підпису'),
					(e.TEXT_SIGN_TIME_SIGN_TIMESTAMP_TITLE =
						'Час підпису (підтверджено кваліфікованою позначкою часу для підпису від Надавача)'),
					(e.TEXT_SIGN_TIME_DATA_TIMESTAMP_TITLE =
						'Час підпису (підтверджено кваліфікованою позначкою часу для даних від Надавача)'),
					(e.TEXT_SIGN_TIME_TIME_TITLE =
						'Час підпису (не підтверджено кваліфікованою позначкою часу для підпису від Надавача)'),
					(e.TEXT_NO_VALUE = 'відсутній'),
					(e.TEXT_PRIVATE_KEY_MEDIA_INFO = 'Носій ос. ключа'),
					(e.TEXT_DOWLOAD_CERTIFICATES = 'Завантажити сертифікати'),
					(e.TEXT_FROM = 'з'),
					(e.TEXT_TO = 'до'),
					(e.TEXT_NAME = "Ім'я"),
					(e.TEXT_KEY_MEDIA_TYPE_TITLE = 'Тип носія особистого ключа'),
					(e.TEXT_KEY_MEDIA_TYPE_QSCD = 'Захищений'),
					(e.TEXT_KEY_MEDIA_TYPE_NOT_QSCD = 'Незахищений'),
					(e.TEXT_KEY_MEDIA_SN_TITLE = 'Серійний номер носія особистого ключа'),
					(e.TEXT_NOT_DEFINED = 'Не визначено'),
					(e.TEXT_KSP_OPERATION_CONFIRMATION =
						'Натисність або зчитайте QR-код сканером у застосунку {0} та дотримуйтесь інструкцій'),
					(e.TEXT_QR_CODE_VALID_UNTIL = 'QR-код буде дійсним ще'),
					(e.LABEL_PK = 'Особистий ключ'),
					(e.LABEL_PK_SUPPORTED_FILES =
						'(зазвичай його назва "Key-6.dat" або *.pfx, *.pk8, *.zs2, *.jks)'),
					(e.LABEL_PK_MAKE_NEW_CERTIFICATES_SUPPORTED_FILES =
						'(Key-6.dat або *.pfx)'),
					(e.LABEL_PK_TYPE_FILE =
						'Файловий носій (flash-диск, CD-диск, SD-картка тощо)'),
					(e.LABEL_PK_TYPE_KM =
						'Захищений носій (е.ключ Алмаз-1К, Кристал-1, Гряда-301, ID-картка тощо)'),
					(e.LABEL_PK_TYPE_SIM = 'SIM-картка'),
					(e.LABEL_MAKE_TECHNICAL_CERT_DEVICE_NAME_TITLE =
						'Назва технічного пристрою:'),
					(e.LABEL_STEP = 'Крок {0} з {1}'),
					(e.BUTTON_READ = 'Зчитати'),
					(e.BUTTON_CLEAR = 'Cтерти'),
					(e.BUTTON_MAKE = 'Сформувати'),
					(e.BUTTON_CHOOSE_ANOTHER = 'Обрати інший'),
					(e.BUTTON_BACK = 'Назад'),
					(e.BUTTON_SAVE = 'Зберегти'),
					(e.BUTTON_DOWNLOAD = 'Завантажити'),
					(e.BUTTON_THANKS = 'Дякую'),
					(e.BUTTON_SIGN = 'Підписати'),
					(e.BUTTON_SIGN_ASICE = 'Підписати в форматі ASIC-E'),
					(e.STATUS_PRIVATE_KEY_READED = 'Особистий ключ зчитано'),
					(e.STATUS_NEW_CERTIFICATE_MADE = 'Особистий ключ створено'),
					(e.STATUS_FILE_SIGNED = 'Підпис накладено успішно'),
					(e.STATUS_RESULT_SAVED_TO_DOWNLOADS =
						'Результат збережено до папки "Завантаження" з ім\'ям {0}'),
					(e.ERROR_PROXY_ADDRESS_NOT_SET = 'Не вказана адреса proxy-сервера'),
					(e.ERROR_PROXY_PORT_NOT_SET = 'Не вказаний порт proxy-сервера'),
					(e.ERROR_PROXY_USER_NOT_SET =
						"Не вказане ім'я користувача proxy-сервера"),
					(e.ERROR_NEW_PK_FILE_NAME_NOT_SET =
						"Не вказане ім'я файлу нового ключа"),
					(e.ERROR_MSISDN_NOT_SET_OR_INVALID =
						'Не вказано номер мобільного телефону або він має невірний формат'),
					(e.ERROR_USER_ID_NOT_SET_OR_INVALID =
						'Не вказано ідентифікатор користувача або він має невірний формат'),
					(e.ERROR_PASSWORD_NOT_SET = 'Не вказано пароль до особистого ключа'),
					(e.ERROR_USER_NOT_SET =
						'Не вказано користувача носія ключової інформації'),
					(e.ERROR_NEW_PASSWORD_NOT_SET =
						'Не вказано новий пароль до особистого ключа'),
					(e.ERROR_CONFIRM_NEW_PASSWORD_NOT_SET =
						'Не вказано підтвердження нового паролю до особистого ключа'),
					(e.ERROR_NEW_PASSWORD_AND_CONFIRM_NOT_EQUAL =
						'Новий пароль та його підтвердження не співпадають'),
					(e.ERROR_NEW_PASSWORD_NOT_MATCH_REQUIREMENTS =
						'Новий пароль не відповідає вимогам'),
					(e.ERROR_CERTIFICATES_NOT_SELECTED =
						'Не обрано сертифікати особистого ключа'),
					(e.ERROR_GET_JKS_PRIVATE_KEY_INFO =
						'Виникла помилка при отриманні інформації про особистий ключ'),
					(e.ERROR_KM_UPDATE_LIST =
						'Виникла помилка при оновленні списку носіїв ключової інформації'),
					(e.ERROR_LIBRARY_NOT_SUPPORTED =
						'Криптографічна бібліотека не підтримується'),
					(e.ERROR_LIBRARY_NOT_LOADED =
						'Криптографічна бібліотека не завантажена'),
					(e.ERROR_LIBRARY_LOAD =
						'Виникла помилка при завантаженні бібліотеки'),
					(e.ERROR_LIBRARY_INITIALIZE =
						'Виникла помилка при ініціалізації криптографічної бібліотеки'),
					(e.ERROR_GET_PROXY_SETTINGS =
						'Виникла помилка при отриманні налаштувань proxy-серверу'),
					(e.ERROR_SET_PROXY_SETTINGS =
						'Виникла помилка при збереженні налаштувань proxy-серверу'),
					(e.ERROR_PRIVATE_KEY_NOT_READED = 'Особистий ключ не зчитано'),
					(e.ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO =
						'Зчитаний особистий ключ не підтримує {0}. Необхідно зчитати інший особистий ключ'),
					(e.ERROR_READ_PRIVATE_KEY =
						'Виникла помилка при зчитуванні особистого ключа'),
					(e.ERROR_READ_PRIVATE_KEY_INVALID_CA =
						'Ваш сертифікат виданий іншим надавачем та не обслуговується в {0}. Необхідно обрати надавача Вашого сертифіката'),
					(e.ERROR_READ_PRIVATE_KEY_CA_AUTO_DETECT =
						'Надавач не підтримує автоматичний пошук сертифіката за ос. ключем. Необхідно обрати надавача самостійно'),
					(e.ERROR_READ_PRIVATE_NEED_CERTIFICATE =
						'Надавач {0} не підтримує автоматичний пошук сертифіката за ос. ключем. Необхідно обрати сертифікат(и) ос. ключа'),
					(e.ERROR_MAKE_NEW_CERTIFICATE =
						'Виникла помилка при формуванні нових сертифікатів особистого ключа'),
					(e.ERROR_MAKE_NEW_CERTIFICATE_INVALID_CA =
						'Формування нового сертифіката можливе лише для користувачів {0}! Ваш сертифікат виданий іншим надавачем!'),
					(e.ERROR_FILE_TO_SIGN_NOT_SET = 'Не обрано файл для підпису'),
					(e.ERROR_FILE_TO_SIGN_RESULT_NOT_SET =
						"Не вказане ім'я файлу з підписом"),
					(e.ERROR_FILE_EMPTY =
						'Обраний файл не містить даних. Оберіть інший файл'),
					(e.ERROR_FILE_TO_BIG =
						'Занадто великий розмір файлу. Оберіть файл меншого розміру або оберіть тип підпису "Дані та підпис окремими файлами (формат CAdES)"'),
					(e.ERROR_SIGN_MULTIPLE_FILES_NOT_SUPPORTED =
						'Обраний формат підпису не підтримує одночасний підпис декількох файлів. Необхідно використовувати формат підпису ASiC-E'),
					(e.ERROR_SIGN_FILE = 'Виникла помилка при підписі файла'),
					(e.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_NOT_SET =
						'Не вказано назву технічного пристрою'),
					(e.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_INVALID =
						'Назва технічного пристрою має невірний формат'),
					(e.ERROR_TECHNICAL_EU_CERTS_REQUEST_FILE_NOT_SET =
						'Не обрано файл із запитом ЕЦП'),
					(e.ERROR_TECHNICAL_EU_KEP_CERTS_REQUEST_FILE_NOT_SET =
						'Не обрано файл із запитом протоколу розподілу ключів'),
					(e.ERROR_MAKE_TECHNICAL_CERTS =
						'Виникла помилка при формуванні технологічних сертифікатів пристрою'),
					(e.ERROR_USE_ADVANCED_CERTS_UNSUPPORTED =
						'Використання удосконаленого сертифіката відкритого ключа не дозволено. Зверніться до надавача Вашого сертифіката ({0}) для отримання квалфікованого сертифіката відкритого ключа'),
					(e.ERROR_FILE_NOT_PDF =
						'Формування підпису в форматі PAdES можливо лише для файлів pdf. Оберіть інший файл або формат підпису'),
					(e.ERROR_FILE_NOT_XML =
						'Формування підпису в форматі XAdES-enveloped можливо лише для файлів xml. Оберіть інший файл, формат або тип підпису'),
					(e.ERROR_DOWNLOAD_DATA = 'Виникла помилка при завантаженні даних'),
					(e.ERROR_PARSE_SIGN_TEMPLATE =
						'Виникла помилка в шаблоні при відображенні результату підпису'),
					(e.ERROR_SAVE_FILE = 'Виникла помилка при збереженні файлу {0}'),
					(e.CONFIRM_CONTINUE_WITHOUT_PKEY_READED =
						'Ви відмовилися надавати ідентифікаційні дані ос. ключа. Продовжити?'),
					e
				)
			})(),
			s = (function () {
				function e() {}
				return (
					(e.format = function (e) {
						for (var t = [], n = 1; n < arguments.length; n++)
							t[n - 1] = arguments[n]
						var r = Array.apply(null, arguments)
						return (
							(r = r.slice(1)),
							e.replace(/{(\d+)}/g, function (e, t) {
								return void 0 !== r[t] ? r[t] : e
							})
						)
					}),
					e
				)
			})()
		!(function (e) {
			;(e[(e.UNKNOWN = -1)] = 'UNKNOWN'),
				(e[(e.DEFAULT = 0)] = 'DEFAULT'),
				(e[(e.UA = 1)] = 'UA'),
				(e[(e.RU = 2)] = 'RU'),
				(e[(e.EN = 3)] = 'EN')
		})(r || (r = {}))
		var a,
			u,
			l,
			c = (function () {
				function e() {
					;(e.s_instance = this),
						(this.m_Locale = r.UA),
						(this.m_Translations = new Array()),
						(this.m_Translations[r.UA] = {}),
						(this.m_Translations[r.EN] = {}),
						(this.m_Translations[r.RU] = {})
				}
				return (
					(e.getInstance = function () {
						return e.s_instance
					}),
					(e.getLocaleTypeById = function (e) {
						switch ((e = e.toLowerCase())) {
							case 'uk':
							case 'ua':
								return r.UA
							case 'ru':
								return r.RU
							case 'en':
								return r.EN
							default:
								return r.UNKNOWN
						}
					}),
					(e.prototype.setLocale = function (e) {
						e == r.UNKNOWN && (e = r.DEFAULT), (this.m_Locale = e)
					}),
					(e.prototype.getLocale = function () {
						return this.m_Locale
					}),
					(e.translate = function (t) {
						try {
							var n = e.getInstance(),
								r = n.m_Translations[n.m_Locale]
							return r.hasOwnProperty(t) ? r[t] : t
						} catch (e) {
							return t
						}
					}),
					(e.prototype.addTranlation = function (e, t) {
						var n = this.m_Translations[e]
						for (var r in t) n[r] = t[r]
					}),
					(e.prototype.addTranlations = function (t) {
						for (var n in t) this.addTranlation(e.getLocaleTypeById(n), t[n])
					}),
					(e.s_instance = new e()),
					e
				)
			})(),
			p =
				((function () {
					function e() {}
					e.format = function (e) {
						for (var t = [], n = 1; n < arguments.length; n++)
							t[n - 1] = arguments[n]
						var r = Array.apply(null, arguments)
						return (
							(r = r.slice(1)),
							e.replace(/{(\d+)}/g, function (e, t) {
								return void 0 !== r[t] ? r[t] : e
							})
						)
					}
				})(),
				c.translate)
		;(a = window.Node || window.Element) &&
			a.prototype &&
			null == a.prototype.children &&
			Object.defineProperty(a.prototype, 'children', {
				get: function () {
					for (var e, t = 0, n = this.childNodes, r = []; (e = n[t++]); )
						1 === e.nodeType && r.push(e)
					return r
				},
			}),
			(function (e) {
				;(e.Unknown = ''),
					(e.Image = 'image'),
					(e.Date = 'date'),
					(e.Item = 'item'),
					(e.Link = 'link'),
					(e.Html = 'html')
			})(u || (u = {})),
			(function (e) {
				;(e.Unknown = ''),
					(e.Sequence = 'sequence'),
					(e.Array = 'array'),
					(e.Choice = 'choice')
			})(l || (l = {}))
		var _,
			f,
			E,
			h,
			S,
			d,
			y = function () {
				;(this.options = {
					margins: 0,
					font: '',
					fontSize: 0,
					fontColor: '',
					fontStyle: '',
				}),
					(this.fonts = new Array()),
					(this.contents = null)
			},
			C = (function () {
				function e() {
					this.tmpl = new y()
				}
				return (
					(e.isBasicType = function (e) {
						return [u.Image, u.Date, u.Item, u.Link, u.Html].indexOf(e) >= 0
					}),
					(e.isComplexType = function (e) {
						return [l.Sequence, l.Array, l.Choice].indexOf(e) >= 0
					}),
					(e.prototype.parse = function (e) {
						try {
							var t = new DOMParser().parseFromString(e, 'application/xml')
							return (
								(this.tmpl.options = this.parseOptions(t)),
								(this.tmpl.fonts = this.parseFonts(t)),
								(this.tmpl.contents = this.parseContents(t, this.tmpl.options)),
								!0
							)
						} catch (e) {
							return console.log(e), !1
						}
					}),
					(e.prototype.getElOpt = function (e, t, n) {
						try {
							var r = e.getElementsByTagName(t).item(0).textContent
							switch (n) {
								case 'number':
									r = parseInt(r)
							}
							return r
						} catch (n) {
							throw 'No option: ' + t + ' in element ' + e.nodeName
						}
					}),
					(e.prototype.parseOptions = function (e) {
						var t = e.getElementsByTagName('options').item(0)
						return {
							margins: this.getElOpt(t, 'margins', 'number'),
							font: this.getElOpt(t, 'font'),
							fontSize: this.getElOpt(t, 'font-size', 'number'),
							fontColor: this.getElOpt(t, 'font-color'),
							fontStyle: this.getElOpt(t, 'font-style'),
						}
					}),
					(e.prototype.parseFonts = function (e) {
						for (
							var t = e.getElementsByTagName('fonts').item(0).children,
								n = new Array(),
								r = 0;
							r < t.length;
							r++
						)
							n.push({
								name: this.getElOpt(t[r], 'name'),
								path: this.getElOpt(t[r], 'path'),
								style: this.getElOpt(t[r], 'style'),
							})
						return n
					}),
					(e.prototype.parseBasicType = function (t, n) {
						var r = t.getAttribute('id'),
							i = t.nodeName
						if (!e.isBasicType(i))
							throw 'Invalid basic type ' + i + ' in element ' + r
						return {
							type: i,
							id: t.getAttribute('id'),
							title: t.getAttribute('title'),
							value: t.textContent,
							options: {
								font: t.getAttribute('font') || n.font,
								fontSize: parseInt(t.getAttribute('font-size') || n.fontSize),
								fontColor: t.getAttribute('font-color') || n.fontColor,
								fontStyle: t.getAttribute('font-style') || n.fontStyle,
								align: t.getAttribute('align') || 'left',
								format: t.getAttribute('format'),
								height: parseInt(t.getAttribute('height')),
								width: parseInt(t.getAttribute('width')),
								visibility: t.getAttribute('visibility') || '',
								i18n: 'true' == t.getAttribute('i18n'),
							},
						}
					}),
					(e.prototype.parseComplexType = function (t, n) {
						if (1 != t.children.length)
							throw 'Invalid complex type in element ' + t.id
						var r = t.getAttribute('id'),
							i = t.children[0].nodeName,
							o = t.children[0].children
						if (!e.isComplexType(i))
							throw 'Invalid complex type ' + i + ' in element' + r
						for (
							var s = {
									id: r,
									type: i,
									items: new Array(),
								},
								a = 0;
							a < o.length;
							a++
						) {
							var u =
								'complexType' == o[a].nodeName
									? this.parseComplexType(o[a], n)
									: this.parseBasicType(o[a], n)
							i == l.Choice ? (s.items[u.id] = u) : s.items.push(u)
						}
						return s
					}),
					(e.prototype.parseContents = function (e, t) {
						var n = e.getElementsByTagName('contents').item(0)
						return this.parseComplexType(n.children[0], t)
					}),
					e
				)
			})()
		function T(e, t, n, r, i, o, s, a, u) {
			if (e)
				try {
					var l = {
							eventType: t,
							systemId: n,
							keyType: r,
							certIssuer: i,
							itemsCount: o,
							signContainer: s,
							signAlgo: a,
							signLevel: u,
						},
						c = function (e) {
							console.log('Send statistics error - ' + e)
						},
						p = new XMLHttpRequest()
					;(p.onload = function () {
						4 == p.readyState &&
							(204 == p.status || c(p.statusText + '(' + p.status + ')'))
					}),
						(p.onerror = c),
						p.open('POST', e),
						p.setRequestHeader('Content-Type', 'application/json'),
						p.send(JSON.stringify(l))
				} catch (e) {
					c(e)
				}
		}
		!(function (e) {
			;(e[(e.Sign = 1)] = 'Sign'),
				(e[(e.Verify = 2)] = 'Verify'),
				(e[(e.Envelop = 3)] = 'Envelop'),
				(e[(e.Develop = 4)] = 'Develop')
		})(_ || (_ = {})),
			(function (e) {
				;(e[(e.Unknown = 0)] = 'Unknown'),
					(e[(e.FileKey = 1)] = 'FileKey'),
					(e[(e.KeyMedia = 2)] = 'KeyMedia'),
					(e[(e.CloudKey = 3)] = 'CloudKey'),
					(e[(e.Diia = 4)] = 'Diia')
			})(f || (f = {})),
			(function (e) {
				;(e[(e.Unknown = 0)] = 'Unknown'),
					(e[(e.CAdESDetached = 1)] = 'CAdESDetached'),
					(e[(e.CAdESEnveloped = 2)] = 'CAdESEnveloped'),
					(e[(e.XAdESDetached = 3)] = 'XAdESDetached'),
					(e[(e.XAdESEnveloped = 4)] = 'XAdESEnveloped'),
					(e[(e.XAdESEnveloping = 5)] = 'XAdESEnveloping'),
					(e[(e.PAdES = 6)] = 'PAdES'),
					(e[(e.ASiCSCAdES = 7)] = 'ASiCSCAdES'),
					(e[(e.ASiCECAdES = 8)] = 'ASiCECAdES'),
					(e[(e.ASiCSXAdES = 9)] = 'ASiCSXAdES'),
					(e[(e.ASiCEXAdES = 10)] = 'ASiCEXAdES'),
					(e[(e.Raw = 11)] = 'Raw')
			})(E || (E = {})),
			(function (e) {
				;(e[(e.Unknown = 0)] = 'Unknown'), (e[(e.B_B = 1)] = 'B_B')
			})(h || (h = {})),
			(function (e) {
				;(e.Html = 'html'), (e.Pdf = 'pdf')
			})(S || (S = {})),
			(function (e) {
				;(e.String = 'string'), (e.Binary = 'binary'), (e.File = 'file')
			})(d || (d = {}))
		var A = function () {
				this.html = ''
			},
			R = function (e, t) {
				this.doc = new jsPDF({
					unit: 'pt',
					format: 'a4',
				})
				for (var n = 0; n < e.length; n++)
					this.doc.addFont(e[n].path, e[n].name, e[n].style)
				;(this.page = {
					width:
						this.doc.internal.pageSize.width ||
						this.doc.internal.pageSize.getWidth(),
					height:
						this.doc.internal.pageSize.height ||
						this.doc.internal.pageSize.getHeight(),
					margin: t.margins,
					center: {
						x:
							(this.doc.internal.pageSize.width ||
								this.doc.internal.pageSize.getWidth()) / 2,
					},
				}),
					(this.yOffset = this.page.margin)
			},
			m = (function () {
				function e(e, t, n) {
					;(this.m_name = e), (this.m_tmpl = t), (this.m_contents = n)
				}
				return (
					(e.formatDate = function (e, t) {
						var n = {
							M: e.getMonth() + 1,
							d: e.getDate(),
							h: e.getHours(),
							m: e.getMinutes(),
							s: e.getSeconds(),
						}
						return (t = t.replace(/(M+|d+|h+|m+|s+)/g, function (e) {
							return ((e.length > 1 ? '0' : '') + n[e.slice(-1)]).slice(-2)
						})).replace(/(y+)/g, function (t) {
							return e.getFullYear().toString().slice(-t.length)
						})
					}),
					(e.prototype.makeDocument = function (e, t) {
						switch (((this.m_type = e), e)) {
							case S.Html:
								this.m_htmlContext = new A()
								break
							case S.Pdf:
								this.m_pdfContext = new R(
									this.m_tmpl.fonts,
									this.m_tmpl.options
								)
						}
						this.processItem(this.m_tmpl.contents, this.m_contents)
						var n = null
						switch (e) {
							case S.Html:
								n = this.m_htmlContext.html
								break
							case S.Pdf:
								switch (t) {
									case d.Binary:
										n = new Uint8Array(
											this.m_pdfContext.doc.output('arraybuffer')
										)
										break
									case d.File:
										this.m_pdfContext.doc.output('save', this.m_name)
								}
						}
						return n
					}),
					(e.prototype.processItem = function (e, t) {
						var n = e.id && t ? (void 0 !== t[e.id] ? t[e.id] : t) : null
						C.isComplexType(e.type)
							? this.processComplexType(e, n)
							: this.processBasicType(e, n)
					}),
					(e.prototype.processComplexType = function (e, t) {
						var n, r
						switch (
							(this.m_type == S.Html &&
								(this.m_htmlContext.html += '<div id="' + e.id + '">'),
							e.type)
						) {
							case l.Sequence:
								for (n = 0; n < e.items.length; n++)
									this.processItem(e.items[n], t)
								break
							case l.Array:
								for (n = 0; n < t.length; n++)
									for (r = 0; r < e.items.length; r++)
										this.processItem(e.items[r], t[n])
								break
							case l.Choice:
								;(e = e.items[t.id]), this.processItem(e, t)
						}
						this.m_type == S.Html && (this.m_htmlContext.html += '</div>')
					}),
					(e.prototype.processBasicType = function (t, n) {
						var r = t.type,
							i = n && n.title ? n.title : t.title ? t.title : null,
							o = n ? (n.value ? n.value : n) : t.value ? t.value : null,
							s = t.options
						switch ((i && (i = p(i)), o && t.options.i18n && (o = p(o)), r)) {
							case u.Date:
								o = e.formatDate(o, s.format)
						}
						if (!s.visibility || s.visibility == this.m_type)
							switch (this.m_type) {
								case S.Html:
									this.addHtmlEl(r, i, o, s)
									break
								case S.Pdf:
									this.addPdfEl(r, i, o, s)
							}
					}),
					(e.prototype.addHtmlEl = function (e, t, n, r) {
						var i = '',
							o = ''
						switch (
							((i +=
								'<div align="' +
								(r.align || 'left') +
								'"style="font-family: ' +
								r.font +
								'">'),
							e)
						) {
							case u.Image:
								;(i +=
									'<img src="' +
									n +
									'" style="width:' +
									r.width +
									';height:' +
									r.height +
									';" >'),
									(i += '</img>')
								break
							case u.Item:
							case u.Date:
								;(o = ''),
									n
										? ((o += t ? '<h5>' + t + '</h5>' : ''),
										  (o += '<h6>' + n + '<h6>'))
										: (o += t ? '' : '<br>'),
									r.fontColor &&
										(o = '<font color=' + r.fontColor + '>' + o + '</font>'),
									(i += o)
								break
							case u.Link:
								;(o = ''),
									(o += t ? '<b>' + t + ': </b>' : ''),
									(o += '<a href="' + n + '">' + n + '</a>'),
									r.fontColor &&
										(o = '<font color=' + r.fontColor + '>' + o + '</font>'),
									(i += o)
								break
							case u.Html:
								i += n
						}
						;(i += '</div>'), (this.m_htmlContext.html += i)
					}),
					(e.prototype.addPdfEl = function (e, t, n, r) {
						var i = this.m_pdfContext,
							o = i.doc,
							s = i.page,
							a = function (e, t) {
								var n = 0
								switch ((e = e || 'left')) {
									case 'center':
										n = s.center.x - t / 2
										break
									case 'right':
										n = s.width - s.margin - t
										break
									case 'left':
									default:
										n = s.margin
								}
								return n
							},
							l = function (e) {
								var t = i.yOffset
								return (
									(i.yOffset += e),
									i.yOffset > s.height - s.margin &&
										((t = s.margin), (i.yOffset = s.margin + e), o.addPage()),
									t
								)
							}
						switch (e) {
							case u.Image:
								!(function (e, t) {
									var n = a(t.align, t.width),
										r = l(t.height),
										i = e.split('.').pop().toLowerCase()
									switch (i) {
										case 'jpg':
										case 'jpeg':
											i = 'JPEG'
											break
										case 'png':
											i = 'PNG'
											break
										case 'bmp':
											i = 'BMP'
									}
									o.addImage(e, i, n, r, t.width, t.height)
								})(n, r)
								break
							case u.Item:
							case u.Date:
								var c = ''
								n ? ((c += t ? t + ': ' : ''), (c += n)) : (c = t ? null : ''),
									null != c &&
										(function (e, t) {
											o.setFont(t.font, t.fontStyle),
												o.setFontSize(t.fontSize),
												o.setTextColor(t.fontColor)
											for (
												var n = t.align || 'left',
													r = a(n, 0),
													i = 0,
													u = s.width - 2 * s.margin,
													c = o.getFontSize() * o.getLineHeightFactor(),
													p = o.splitTextToSize(e, u),
													_ = 0;
												_ < p.length;
												_++
											)
												(i = l(c)),
													o.text(p[_], r, i, {
														align: n,
														maxWidth: u,
														baseline: 'middle',
													})
										})(c, r)
								break
							case u.Link:
								!(function (e, t, n) {
									o.setFont(n.font, n.fontStyle),
										o.setFontSize(n.fontSize),
										o.setTextColor(n.fontColor)
									var r,
										i = a('left', 0),
										u = s.width - 2 * s.margin,
										c = o.getFontSize() * o.getLineHeightFactor()
									;(e += ': '),
										(r = l(c)),
										o.text(e, i, r, {
											align: 'left',
											maxWidth: u,
											baseline: 'middle',
										}),
										(i += o.getTextWidth(e)),
										o.setTextColor('blue'),
										o.textWithLink(t, i, r, {
											url: t,
											baseline: 'middle',
										})
								})(t, n, r)
						}
					}),
					(e.formatFileSize = function (e) {
						if (Math.abs(e) < 1024) return e + ' ' + p('Б')
						var t = ['КБ', 'МБ', 'ГБ', 'ТБ'],
							n = -1
						do {
							;(e /= 1024), ++n
						} while (Math.abs(e) >= 1024 && n < t.length - 1)
						return e.toFixed(1) + ' ' + p(t[n])
					}),
					e
				)
			})(),
			g = [
				'AU',
				'AT',
				'AZ',
				'AL',
				'DZ',
				'AO',
				'AD',
				'AG',
				'AR',
				'AW',
				'AF',
				'BS',
				'BD',
				'BB',
				'BH',
				'BZ',
				'BE',
				'BJ',
				'BY',
				'BG',
				'BO',
				'BA',
				'BW',
				'BR',
				'BN',
				'BF',
				'BI',
				'BT',
				'VU',
				'VA',
				'GB',
				'VE',
				'VN',
				'AM',
				'GA',
				'HT',
				'GY',
				'GM',
				'GH',
				'GP',
				'GT',
				'GN',
				'GW',
				'HN',
				'GD',
				'GR',
				'GE',
				'GL',
				'DK',
				'CD',
				'DJ',
				'DM',
				'DO',
				'EC',
				'GQ',
				'ER',
				'EE',
				'ET',
				'EG',
				'YE',
				'ZM',
				'EH',
				'ZW',
				'IL',
				'IN',
				'ID',
				'IQ',
				'IR',
				'IE',
				'IS',
				'ES',
				'IT',
				'JO',
				'CV',
				'KZ',
				'KH',
				'CM',
				'CA',
				'QA',
				'KE',
				'KG',
				'CN',
				'KP',
				'CY',
				'KI',
				'CO',
				'KM',
				'CG',
				'CR',
				'CI',
				'CU',
				'KW',
				'LA',
				'LV',
				'LS',
				'LT',
				'LR',
				'LB',
				'LY',
				'LI',
				'LU',
				'MU',
				'MR',
				'MG',
				'MK',
				'MW',
				'MY',
				'ML',
				'MV',
				'MT',
				'MA',
				'MH',
				'MX',
				'MZ',
				'MD',
				'MC',
				'MN',
				'MM',
				'NA',
				'NR',
				'NP',
				'NE',
				'NG',
				'NL',
				'NI',
				'DE',
				'NZ',
				'NO',
				'AE',
				'OM',
				'PK',
				'PW',
				'PS',
				'PA',
				'PG',
				'PY',
				'PE',
				'KR',
				'SS',
				'ZA',
				'PL',
				'PT',
				'PR',
				'RU',
				'RW',
				'RO',
				'SV',
				'WS',
				'SM',
				'ST',
				'SA',
				'SZ',
				'SC',
				'SN',
				'VC',
				'KN',
				'LC',
				'RS',
				'SY',
				'SG',
				'SK',
				'SI',
				'SB',
				'SO',
				'US',
				'SD',
				'SR',
				'TL',
				'SL',
				'TJ',
				'TH',
				'TZ',
				'TG',
				'TO',
				'TT',
				'TN',
				'TR',
				'TM',
				'UG',
				'HU',
				'UZ',
				'UA',
				'UY',
				'FM',
				'FJ',
				'PH',
				'FI',
				'FR',
				'HR',
				'CF',
				'TD',
				'CZ',
				'CL',
				'ME',
				'CH',
				'SE',
				'LK',
				'JM',
				'JP',
			],
			P = {
				ua: [
					'Австралія',
					'Австрія',
					'Азербайджан',
					'Албанія',
					'Алжир',
					'Ангола',
					'Андорра',
					'Антигуа і Барбуда',
					'Аргентина',
					'Аруба',
					'Афганістан',
					'Багамські Острови',
					'Бангладеш',
					'Барбадос',
					'Бахрейн',
					'Беліз',
					'Бельгія',
					'Бенін',
					'Білорусь',
					'Болгарія',
					'Болівія',
					'Боснія і Герцеговина',
					'Ботсвана',
					'Бразилія',
					'Бруней',
					'Буркіна-Фасо',
					'Бурунді',
					'Бутан',
					'Вануату',
					'Ватикан',
					'Велика Британія',
					'Венесуела',
					"В'єтнам",
					'Вірменія',
					'Габон',
					'Гаїті',
					'Гаяна',
					'Гамбія',
					'Гана',
					'Гваделупа',
					'Гватемала',
					'Гвінея',
					'Гвінея-Бісау',
					'Гондурас',
					'Гренада',
					'Греція',
					'Грузія',
					'Ґренландія',
					'Данія',
					'ДР Конго',
					'Джибуті',
					'Домініка',
					'Домініканська Республіка',
					'Еквадор',
					'Екваторіальна Гвінея',
					'Еритрея',
					'Естонія',
					'Ефіопія',
					'Єгипет',
					'Ємен',
					'Замбія',
					'Західна Сахара',
					'Зімбабве',
					'Ізраїль',
					'Індія',
					'Індонезія',
					'Ірак',
					'Іран',
					'Ірландія',
					'Ісландія',
					'Іспанія',
					'Італія',
					'Йорданія',
					'Кабо-Верде',
					'Казахстан',
					'Камбоджа',
					'Камерун',
					'Канада',
					'Катар',
					'Кенія',
					'Киргизстан',
					'КНР',
					'Північна Корея',
					'Кіпр',
					'Кірибаті',
					'Колумбія',
					'Коморські Острови',
					'Конго',
					'Коста-Рика',
					"Кот-д'Івуар",
					'Куба',
					'Кувейт',
					'Лаос',
					'Латвія',
					'Лесото',
					'Литва',
					'Ліберія',
					'Ліван',
					'Лівія',
					'Ліхтенштейн',
					'Люксембург',
					'Маврикій',
					'Мавританія',
					'Мадагаскар',
					'Македонія',
					'Малаві',
					'Малайзія',
					'Малі',
					'Мальдіви',
					'Мальта',
					'Марокко',
					'Маршаллові Острови',
					'Мексика',
					'Мозамбік',
					'Молдова',
					'Монако',
					'Монголія',
					"М'янма",
					'Намібія',
					'Науру',
					'Непал',
					'Нігер',
					'Нігерія',
					'Нідерланди',
					'Нікарагуа',
					'Німеччина',
					'Нова Зеландія',
					'Норвегія',
					'ОАЕ',
					'Оман',
					'Пакистан',
					'Палау',
					'Палестина',
					'Панама',
					'Папуа Нова Гвінея',
					'Парагвай',
					'Перу',
					'Південна Корея',
					'Південний Судан',
					'ПАР',
					'Польща',
					'Португалія',
					'Пуерто-Рико',
					'Росія',
					'Руанда',
					'Румунія',
					'Сальвадор',
					'Самоа',
					'Сан-Марино',
					'Сан-Томе і Принсіпі',
					'Саудівська Аравія',
					'Свазіленд',
					'Сейшельські Острови',
					'Сенегал',
					'Сент-Вінсент і Гренадини',
					'Сент-Кіттс і Невіс',
					'Сент-Люсія',
					'Сербія',
					'Сирія',
					'Сингапур',
					'Словаччина',
					'Словенія',
					'Соломонові Острови',
					'Сомалі',
					'США',
					'Судан',
					'Суринам',
					'Східний Тимор',
					'Сьєрра-Леоне',
					'Таджикистан',
					'Таїланд',
					'Танзанія',
					'Того',
					'Тонга',
					'Тринідад і Тобаго',
					'Туніс',
					'Туреччина',
					'Туркменістан',
					'Уганда',
					'Угорщина',
					'Узбекистан',
					'Україна',
					'Уругвай',
					'Федеративні Штати Мікронезії',
					'Фіджі',
					'Філіппіни',
					'Фінляндія',
					'Франція',
					'Хорватія',
					'Центральноафриканська Республіка',
					'Чад',
					'Чехія',
					'Чилі',
					'Чорногорія',
					'Швейцарія',
					'Швеція',
					'Шрі-Ланка',
					'Ямайка',
					'Японія',
				],
				en: [
					'Australia',
					'Austria',
					'Azerbaijan',
					'Albania',
					'Algeria',
					'Angola',
					'Andorra',
					'Antigua and Barbuda',
					'Argentina',
					'Aruba',
					'Afghanistan',
					'Bahamas',
					'Bangladesh',
					'Barbados',
					'Bahrain',
					'Belize',
					'Belgium',
					'Benin',
					'Belarus',
					'Bulgaria',
					'Bolivia',
					'Bosnia and Herzegovina',
					'Botswana',
					'Brazil',
					'Brunei',
					'Burkina Faso',
					'Burundi',
					'Bhutan',
					'Vanuatu',
					'Vatican City',
					'Great Britain',
					'Venezuela',
					'Vietnam',
					'Armenia',
					'Gabon',
					'Haiti',
					'Guyana',
					'Gambia',
					'Ghana',
					'Guadeloupe',
					'Guatemala',
					'Guinea',
					'Guinea-Bissau',
					'Honduras',
					'Grenada',
					'Ellada',
					'Georgia',
					'Greenland',
					'Denmark',
					'DR Congo',
					'Djibouti',
					'Dominica',
					'Dominican Republic',
					'Ecuador',
					'Equatorial Guinea',
					'Eritrea',
					'Estonia',
					'Ethiopia',
					'Egypt',
					'Yemen',
					'Zambia',
					'Western Sahara',
					'Zimbabwe',
					'Israel',
					'India',
					'Indonesia',
					'Iraq',
					'Iran',
					'Ireland',
					'Iceland',
					'Spain',
					'Italy',
					'Jordan',
					'Cape Verde',
					'Kazakhstan',
					'Cambodia',
					'Cameroon',
					'Canada',
					'Qatar',
					'Kenya',
					'Kyrgyzstan',
					'China',
					'North Korea',
					'Cyprus',
					'Kiribati',
					'Colombia',
					'Comoros',
					'Congo',
					'Costa Rica',
					"Côte d'Ivoire",
					'Cuba',
					'Kuwait',
					'Laos',
					'Latvia',
					'Lesotho',
					'Lithuania',
					'Liberia',
					'Lebanon',
					'Libya',
					'Liechtenstein',
					'Luxembourg',
					'Mauritius',
					'Mauritania',
					'Madagascar',
					'Macedonia',
					'Malawi',
					'Malaysia',
					'Mali',
					'Maldives',
					'Malta',
					'Morocco',
					'Marshall Islands',
					'Mexico',
					'Mozambique',
					'Moldova',
					'Monaco',
					'Mongolia',
					'Myanmar',
					'Namibia',
					'Nauru',
					'Nepal',
					'Niger',
					'Nigeria',
					'Netherlands',
					'Nicaragua',
					'Germany',
					'New Zealand',
					'Norway',
					'UAE',
					'Oman',
					'Pakistan',
					'Palau',
					'Palestine',
					'Panama',
					'Papua New Guinea',
					'Paraguay',
					'Peru',
					'South Korea',
					'South Sudan',
					'South Africa',
					'Poland',
					'Portugal',
					'Puerto Rico',
					'Russia',
					'Rwanda',
					'Romania',
					'El Salvador',
					'Samoa',
					'San Marino',
					'San Tome and Principe',
					'Saudi Arabia',
					'Swaziland',
					'Seychelles',
					'Senegal',
					'St. Vincent and the Grenadines',
					'St. Kitts and Nevis',
					'St. Lucia',
					'Serbia',
					'Syria',
					'Singapore',
					'Slovakia',
					'Slovenia',
					'Solomon Islands',
					'Somalia',
					'USA',
					'Sudan',
					'Suriname',
					'East Timor',
					'Sierra Leone',
					'Tajikistan',
					'Thailand',
					'Tanzania',
					'Togo',
					'Tonga',
					'Trinidad and Tobago',
					'Tunisia',
					'Turkey',
					'Turkmenistan',
					'Uganda',
					'Hungary',
					'Uzbekistan',
					'Ukraine',
					'Uruguay',
					'Federated States of Micronesia',
					'Fiji',
					'Philippines',
					'Finland',
					'France',
					'Croatia',
					'Central African Republic',
					'Chad',
					'Czech Republic',
					'Chile',
					'Montenegro',
					'Switzerland',
					'Sweden',
					'Sri Lanka',
					'Jamaica',
					'Japan',
				],
			},
			v = (function () {
				function e() {}
				return (
					(e.getCountryName = function (e, t) {
						;(e = e.toLowerCase()), P[e] || (e = 'ua'), (t = t.toUpperCase())
						var n = g.indexOf(t)
						return n < 0 ? t : P[e][n]
					}),
					e
				)
			})(),
			I = function () {
				return (I =
					Object.assign ||
					function (e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var i in (t = arguments[n]))
								Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
						return e
					}).apply(this, arguments)
			},
			U = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
			O = [
				12, 33, 34, 35, 36, 37, 38, 39, 40, 45, 48, 49, 50, 51, 52, 53, 54, 55,
				56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
			],
			b = [
				'AddEventListener',
				'ResetPrivateKey',
				'ReadPrivateKey',
				'MakeNewCertificate',
				'MakeDeviceCertificate',
				'ChangeOwnCertificatesStatus',
				'SignHash',
				'SignData',
				'PAdESSignData',
				'XAdESSignData',
				'ASiCSignData',
				'EnvelopData',
				'DevelopData',
				'GetSignValue',
			],
			D = ['криптомод. ІІТ Гряда-301']
		var k,
			N,
			w,
			M = function (e, t, n) {
				void 0 === n && (n = null),
					(this.file = n),
					(this.name = e),
					(this.data = t),
					(this.size = t ? t.length : n ? n.size : 0)
			},
			G = (function () {
				function e(e, t, n, r, i) {
					;(this.ksp = e),
						(this.kspName = t),
						(this.userId = n),
						(this.keyId = r),
						(this.issuerCN = i)
				}
				return (
					(e.prototype.GetKSPId = function () {
						return this.ksp == i.EndUserConstants.EndUserKSP.IIT ||
							this.ksp == i.EndUserConstants.EndUserKSP.PB ||
							this.ksp == i.EndUserConstants.EndUserKSP.DIIA
							? this.kspName
							: this.ksp
					}),
					e
				)
			})(),
			K = (function () {
				function e() {
					;(this.keyMedia = null),
						(this.file = null),
						(this.alias = null),
						(this.password = null),
						(this.certificates = null),
						(this.kspKey = null)
				}
				return (
					(e.prototype.getKeyType = function () {
						return null != this.file
							? f.FileKey
							: null != this.keyMedia
							? f.KeyMedia
							: null != this.kspKey
							? this.kspKey.ksp == i.EndUserConstants.EndUserKSP.DIIA
								? f.Diia
								: f.CloudKey
							: f.Unknown
					}),
					(e.prototype.getIssuerCN = function () {
						return this.certificatesInfo && this.certificatesInfo.length > 0
							? this.certificatesInfo[0].infoEx.issuerCN
							: null != this.kspKey
							? this.kspKey.issuerCN
							: null
					}),
					e
				)
			})(),
			L = function () {
				;(this.use = !1), (this.name = ''), (this.sn = '')
			}
		!(function (e) {
			;(e[(e.ReadPrivateKey = 1)] = 'ReadPrivateKey'),
				(e[(e.MakeNewCertificate = 2)] = 'MakeNewCertificate'),
				(e[(e.SignFile = 3)] = 'SignFile'),
				(e[(e.ViewPKeyCertificates = 4)] = 'ViewPKeyCertificates'),
				(e[(e.MakeDeviceCertificate = 5)] = 'MakeDeviceCertificate')
		})(k || (k = {})),
			(function (e) {
				;(e[(e.XAdES = 1)] = 'XAdES'),
					(e[(e.PAdES = 2)] = 'PAdES'),
					(e[(e.CAdES = 3)] = 'CAdES'),
					(e[(e.ASiCS = 4)] = 'ASiCS'),
					(e[(e.ASiCE = 5)] = 'ASiCE')
			})(N || (N = {})),
			(function (e) {
				;(e[(e.None = 0)] = 'None'),
					(e[(e.File = 1)] = 'File'),
					(e[(e.Hardware = 2)] = 'Hardware'),
					(e[(e.KSP = 4)] = 'KSP'),
					(e[(e.DIIA_UA = 5)] = 'DIIA_UA'),
					(e[(e.DIIA_EU = 6)] = 'DIIA_EU')
			})(w || (w = {}))
		var B = (function () {
				function e(e) {
					;(this.m_type = e),
						(this.m_library = new i.EndUser(JS_WORKER_PATH, e)),
						(this.m_info = null),
						(this.m_loading = !1),
						(this.m_eventsRegistered = !1)
				}
				return (
					(e.prototype.GetType = function () {
						return this.m_type
					}),
					(e.prototype.IsSupported = function () {
						return this.m_info && this.m_info.supported
					}),
					(e.prototype.IsLoaded = function () {
						return this.m_info && this.m_info.loaded
					}),
					(e.prototype.IsLoading = function () {
						return this.m_loading
					}),
					(e.prototype.IsEventsRegistered = function () {
						return this.m_eventsRegistered
					}),
					(e.prototype.SetEventsRegistered = function () {
						this.m_eventsRegistered = !0
					}),
					(e.prototype.GetLibrary = function () {
						return this.m_library
					}),
					(e.prototype.GetInfo = function () {
						return this.m_info
					}),
					(e.prototype.Load = function (e) {
						var t = this
						return (
							(t.m_loading = !0),
							new Promise(function (n, r) {
								t.m_library
									.AddEventListener(i.EndUserConstants.EndUserEventType.All, e)
									.then(function () {
										return t.m_library.GetLibraryInfo(
											LIBRARY_SETTINGS.downloadsURL
										)
									})
									.then(function (e) {
										;(t.m_loading = !1), (t.m_info = e), n()
									})
									.catch(function (e) {
										;(t.m_loading = !1), r(e)
									})
							})
						)
					}),
					e
				)
			})(),
			F = (function () {
				function e() {
					;(this.m_mainPageOrigin = this.GetURLParameter(
						window.location.href,
						'address',
						null
					)),
						(this.m_debug =
							'true' ==
							this.GetURLParameter(window.location.href, 'debug', 'false')),
						(this.m_formType = parseInt(
							3
							// 	this.GetURLParameter(
							// 		window.location.href,
							// 		'formType',
							// 		k.ReadPrivateKey + ''
							// 	)
						)),
						(this.m_ownCAOnly =
							'true' ==
							this.GetURLParameter(window.location.href, 'ownCAOnly', 'false')),
						(this.m_showPKInfo =
							'true' ==
							this.GetURLParameter(window.location.href, 'showPKInfo', 'true')),
						(this.m_showSignTip =
							'true' ==
							this.GetURLParameter(
								window.location.href,
								'showSignTip',
								'true'
							)),
						(this.m_showPKPreSelect =
							LIBRARY_SETTINGS.KSPs &&
							LIBRARY_SETTINGS.KSPs.filter(function (e) {
								return e.ksp == i.EndUserConstants.EU_KSP_DIIA
							}).length > 0),
						(this.m_keyMediaType = parseInt(
							this.GetStorageItem('KeyMediaType', w.File)
						)),
						(this.m_libraries = new Array()),
						(this.m_libraries[i.EndUserConstants.EU_LIBRARY_TYPE_JS] = new B(
							i.EndUserConstants.EU_LIBRARY_TYPE_JS
						)),
						(this.m_libraries[i.EndUserConstants.EU_LIBRARY_TYPE_SW] = new B(
							i.EndUserConstants.EU_LIBRARY_TYPE_SW
						)),
						(this.m_statisticsURL = STATISTICS_URL
							? this.MakeURL(STATISTICS_URL)
							: null),
						(this.m_signInfoTmpl = null),
						(this.m_curStep = 0),
						(this.m_maxSteps = this.GetMaxSteps()),
						this.SetFormTitle(null),
						this.SetFormHelp(null),
						this.SetFormSubTitle(null),
						this.SetFormsLabels(),
						this.SetFormsFileInputs(),
						this.RegisterGUIEvents(),
						this.ConfigureKeyMediaTypes(),
						this.ConfigureKSPsSettings(),
						(this.m_isPKActionDone = !1),
						(this.m_KM = null),
						(this.m_updateKM = !1),
						(this.m_updatingKM = !1),
						(this.m_readedPKey = null),
						(this.m_KMs = new Array()),
						(this.m_noNewKMOnMakeNewCertificate =
							!LIBRARY_SETTINGS.allowMakeNewCertOnNewKeyMedia),
						(this.m_noNewFileKMOnMakeNewCertificate =
							!LIBRARY_SETTINGS.allowMakeNewCertOnFileKeyMedia),
						(this.m_euParams = null),
						(this.m_listeners = []),
						this.m_showPKPreSelect
							? (this.ShowForm('#pkTypesPreSelectBlock', !1),
							  this.CloseDimmerView())
							: this.OnChangeLibraryType()
				}
				return (
					(e.prototype.SetFormTitle = function (e) {
						var t = null
						switch (e) {
							case '#proxySettingsBlock':
								t = p(o.PK_SET_PROXY_FORM_TITLE)
								break
							case '#resultBlock':
								switch (this.m_formType) {
									case k.MakeNewCertificate:
										t = p(o.PK_MAKE_NEW_CERTIFICATES_FORM_TITLE)
										break
									case k.SignFile:
										t = p(o.SIGN_FILE_RESULT_FORM_TITLE)
										break
									case k.ViewPKeyCertificates:
										t = p(o.VIEW_PKEY_CERTIFICATES_FORM_TITLE)
										break
									case k.MakeDeviceCertificate:
										t = p(o.MAKE_TECHNICAL_CERTIFICATES_FORM_TITLE)
										break
									case k.ReadPrivateKey:
									default:
										t = p(o.PK_READ_FORM_TITLE)
								}
								break
							case '#pkReadFileBlock':
							case '#pkReadKMBlock':
							case '#pkReadKSPBlock':
								switch (this.m_formType) {
									case k.MakeNewCertificate:
										t = p(o.PK_MAKE_NEW_CERTIFICATES_FORM_TITLE)
										break
									case k.SignFile:
										t = p(o.PK_READ_FORM_TITLE)
										break
									case k.ViewPKeyCertificates:
										t = p(o.VIEW_PKEY_CERTIFICATES_FORM_TITLE)
										break
									case k.MakeDeviceCertificate:
										t = p(o.MAKE_TECHNICAL_CERTIFICATES_FORM_TITLE)
										break
									case k.ReadPrivateKey:
									default:
										t = p(o.PK_READ_FORM_TITLE)
								}
								break
							case '#pkInfoBlock':
								switch (this.m_formType) {
									case k.SignFile:
										t = p(o.PK_INFO_FORM_TITLE)
								}
								break
							case '#preSignBlock':
							case '#signBlock':
								switch (this.m_formType) {
									case k.SignFile:
										t = p(o.PRE_SIGN_FILE_FORM_TITLE)
								}
								break
							case '#pkWriteFileBlock':
							case '#pkWriteKMBlock':
							case '#installBlock':
							case '#makeTechnicalCertBlock':
							default:
								switch (this.m_formType) {
									case k.MakeNewCertificate:
										t = p(o.PK_MAKE_NEW_CERTIFICATES_FORM_TITLE)
										break
									case k.SignFile:
										t = p(o.SIGN_FILE_FORM_TITLE)
										break
									case k.ViewPKeyCertificates:
										t = p(o.VIEW_PKEY_CERTIFICATES_FORM_TITLE)
										break
									case k.MakeDeviceCertificate:
										t = p(o.MAKE_TECHNICAL_CERTIFICATES_FORM_TITLE)
										break
									case k.ReadPrivateKey:
									default:
										t = p(o.PK_READ_FORM_TITLE)
								}
						}
						$('#titleLabel').text(t)
					}),
					(e.prototype.SetFormSubTitle = function (e) {
						var t = null
						switch (e) {
							case '#proxySettingsBlock':
								t = p(o.PK_SET_PROXY_FORM_SUB_TITLE)
								break
							case '#pkReadFileBlock':
							case '#pkReadKMBlock':
								switch (this.m_formType) {
									case k.MakeNewCertificate:
										t = p(o.PK_MAKE_NEW_CERTIFICATES_OLD_KEY_FORM_SUB_TITLE)
										break
									case k.MakeDeviceCertificate:
										t = p(o.MAKE_TECHNICAL_CERTIFICATES_PK_READ_FORM_SUB_TITLE)
										break
									case k.SignFile:
									case k.ReadPrivateKey:
									case k.ViewPKeyCertificates:
									default:
										t = p(o.PK_READ_FORM_SUB_TITLE)
								}
								break
							case '#pkWriteFileBlock':
							case '#pkWriteKMBlock':
								switch (this.m_formType) {
									case k.MakeNewCertificate:
										t = this.m_noNewKMOnMakeNewCertificate
											? this.m_readedPKey.keyMedia
												? p(
														o.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_KM_FORM_SUB_TITLE
												  )
												: this.m_noNewFileKMOnMakeNewCertificate
												? p(o.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FORM_SUB_TITLE)
												: p(
														o.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FILE_FORM_SUB_TITLE
												  )
											: p(o.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FORM_SUB_TITLE)
								}
								break
							case '#pkInfoBlock':
								switch (this.m_formType) {
									case k.ViewPKeyCertificates:
										t = p(o.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE)
										break
									default:
										t = p(o.PK_INFO_FORM_SUB_TITLE)
								}
								break
							case '#preSignBlock':
							case '#signBlock':
								t = p(o.SIGN_FILE_FORM_SUB_TITLE)
								break
							case '#makeTechnicalCertBlock':
								t = p(o.MAKE_TECHNICAL_CERTIFICATES_FORM_SUB_TITLE)
								break
							case '#resultBlock':
								switch (this.m_formType) {
									case k.SignFile:
										t = p(o.SIGN_FILE_RESULT_FORM_SUB_TITLE)
										break
									case k.MakeNewCertificate:
										t = p(o.PK_MAKE_NEW_CERTIFICATES_RESULT_FORM_SUB_TITLE)
										break
									case k.ViewPKeyCertificates:
										t = p(o.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE)
										break
									case k.MakeDeviceCertificate:
										t = p(o.MAKE_TECHNICAL_CERTIFICATES_RESULT_FORM_SUB_TITLE)
								}
						}
						null != t && $('#subTitleLabel').text(t)
					}),
					(e.prototype.SetFormHelp = function (e) {
						var t =
								'#' + $('#rightBlock').find('.HelpPanel:visible').attr('id'),
							n = ''
						switch (e) {
							case '#pkTypesPreSelectBlock':
								n = '#helpPanel1'
								break
							case '#proxySettingsBlock':
								break
							case '#pkReadFileBlock':
								n = '#helpPanel2'
								break
							case '#pkReadKMBlock':
								n = '#helpPanel3'
								break
							case '#pkReadKSPBlock':
								n = '#helpPanel4'
								break
							case '#pkReadDIIABlock':
								n = '#helpPanel6'
								break
							case '#pkInfoBlock':
								n = '#helpPanel7'
								break
							case '#preSignBlock':
								n = '#helpPanel8'
								break
							case '#signBlock':
								n = $('#preSignShowParamsCheckbox').prop('checked')
									? '#helpPanel9'
									: '#helpPanel8'
								break
							default:
								n = ''
						}
						if (t != n && n)
							if (
								($(t).hide(),
								'' != n && $(n).show(),
								$(n).find('.HelpPanelItem').length > 0 ||
									$(n).find('.HelpPanelItemContent').length > 0)
							)
								$('#helpBlock').hide()
							else {
								var r = $(n).find('h3').html(),
									i = $(n).find('div').html()
								$('#helpBlock').show(),
									$('#helpTitleLabel').html(r),
									$('#helpLabel').html(i)
							}
						else n || $('#helpBlock').hide()
					}),
					(e.prototype.SetFormStep = function (e) {
						var t = this.m_curStep
						let isItPreSignBlock = false
						let isItSignBlock = false
						switch (e) {
							case '#pkReadFileBlock':
							case '#pkReadKMBlock':
							case '#pkReadKSPBlock':
							case '#pkReadDIIABlock':
								t = 1
								break
							case '#pkWriteFileBlock':
							case '#pkWriteKMBlock':
								switch (this.m_formType) {
									case k.MakeNewCertificate:
										t = 3
								}
								break
							case '#pkInfoBlock':
								t = 2
								break
							case '#preSignBlock':
								t = this.m_showSignTip ? 3 : 4
								isItPreSignBlock = true
								break
							case '#signBlock':
								t = this.m_showSignTip ? 4 : 3
								isItSignBlock = true
								break
							case '#makeTechnicalCertBlock':
								t = 3
						}
						this.m_curStep = t
						if (t == 3 && isItPreSignBlock) {
							$('#preSignBackButton').click()
						}
						if (t == 4 && isItSignBlock) {
							$('#signTypeCAdESRadioInput').prop('checked', true)
							$('#signTypeCAdESSelect').val('1')
							// $(document).ready(function () {
							// 	$('#signTypeCAdESSelect').val('1')
							// })
							$('#signTypeXAdESSelect').val('1')
							getFile()
							$('#signFilesInput').prop('files')
							$('#signButton').removeAttr('disabled')
							// $('#signButton').click()
						}
						this.m_maxSteps = 4
						var n = s.format(p(o.LABEL_STEP), t, this.m_maxSteps)
						$('#stepLabel').text(n)
					}),
					(e.prototype.SetFormsLabels = function () {
						var e = ''
						switch (this.m_formType) {
							case k.MakeNewCertificate:
								e = p(o.LABEL_PK_MAKE_NEW_CERTIFICATES_SUPPORTED_FILES)
								break
							case k.SignFile:
							case k.ReadPrivateKey:
							case k.ViewPKeyCertificates:
							case k.MakeDeviceCertificate:
							default:
								e = p(o.LABEL_PK_SUPPORTED_FILES)
						}
						$('#pkReadFileSelectFileFileTypeLabel').text(e),
							$('#pkTypeFileTitle').text(p(o.LABEL_PK_TYPE_FILE)),
							$('#pkTypeKMTitle').text(p(o.LABEL_PK_TYPE_KM)),
							$('#makeTechnicalCertDeviceNameTitleLabel').text(
								p(o.LABEL_MAKE_TECHNICAL_CERT_DEVICE_NAME_TITLE)
							)
					}),
					(e.prototype.SetFormsFileInputs = function () {
						;(/iPad|iPhone|iPod/.test(navigator.platform) ||
							('MacIntel' === navigator.platform &&
								navigator.maxTouchPoints > 1)) &&
							!window.MSStream &&
							($('#pkReadFileCertsInput').removeAttr('accept'),
							$('#pkReadFileInput').removeAttr('accept'),
							$('#pkReadKMCertsInput').removeAttr('accept'))
					}),
					(e.prototype.SetKeyMediaType = function (e) {
						$('#pkTypesBlock')
							.find('button[value=' + e + ']')
							.click()
					}),
					(e.prototype.GetMaxSteps = function () {
						switch (this.m_formType) {
							case k.MakeNewCertificate:
								return 3
							case k.SignFile:
								return 4
							case k.ViewPKeyCertificates:
								return 2
							case k.MakeDeviceCertificate:
								return 3
							case k.ReadPrivateKey:
							default:
								return 2
						}
					}),
					(e.prototype.GetPreSelectMenuId = function () {
						return this.m_showPKPreSelect
							? '#' +
									$('#pkTypesPreSelectBlock')
										.find('.MenuItem[selected]')
										.attr('id')
							: '#pkTypeBaseMenuItem'
					}),
					(e.prototype.ConfigureKeyMediaTypes = function () {
						var e = 'none' != $('#pkTypeFileTabButton').css('display'),
							t = 'none' != $('#pkTypeKMTabButton').css('display'),
							n = !1,
							r = LIBRARY_SETTINGS.KSPs || []
						switch (
							((r = r.filter(function (e) {
								return e.ksp != i.EndUserConstants.EU_KSP_DIIA
							})),
							this.m_formType)
						) {
							case k.MakeNewCertificate:
							case k.MakeDeviceCertificate:
								n = !1
								break
							case k.SignFile:
							case k.ReadPrivateKey:
							case k.ViewPKeyCertificates:
							case k.MakeDeviceCertificate:
							default:
								n =
									r.length > 0 &&
									'none' != $('#pkTypeKSPTabButton').css('display')
						}
						n
							? $('#pkTypeKSPTabButton').show()
							: $('#pkTypeKSPTabButton').hide()
						var o = w.None
						;(o = e ? w.File : t ? w.Hardware : n ? w.KSP : w.None),
							((!e && this.m_keyMediaType == w.File) ||
								(!t && this.m_keyMediaType == w.Hardware) ||
								(!n && this.m_keyMediaType == w.KSP)) &&
								(this.m_keyMediaType = o),
							n && this.SetKSPs(r),
							this.SetKeyMediaType(this.m_keyMediaType)
					}),
					(e.prototype.ConfigureKSPsSettings = function () {
						var e = this
						LIBRARY_SETTINGS.KSPs &&
							LIBRARY_SETTINGS.KSPs.forEach(function (t) {
								t.systemId || (t.systemId = e.m_mainPageOrigin)
							})
					}),
					(e.prototype.RegisterGUIEvents = function () {
						var e = this
						$(window).on('message', function (t) {
							e.OnReceiveMessage(t.originalEvent)
						}),
							$('#helpTitleBlock').on('click', function () {
								var e = $('#helpTextBlock'),
									t = $('#helpTitleArrow')
								e.is(':visible')
									? (e.slideUp(200), t.attr('direction', 'down'))
									: (e.slideDown(200), t.attr('direction', 'up'))
							})
						for (
							var t = [
									'#pkTypeBaseMenuItem',
									'#pkTypeDIIAUAMenuItem',
									'#pkTypeDIIAEUMenuItem',
								],
								n = 0;
							n < t.length;
							n++
						)
							$(t[n]).on('click', function (t) {
								$(t.currentTarget).attr('selected', ''),
									e.OnChangeLibraryType(function () {
										;('#pkTypeDIIAUAMenuItem' != e.GetPreSelectMenuId() &&
											'#pkTypeDIIAEUMenuItem' != e.GetPreSelectMenuId()) ||
											e.OnReadPKeyKSP()
									})
							})
						var r = [
							'#pkTypeFileTabButton',
							'#pkTypeKMTabButton',
							'#pkTypeKSPTabButton',
						]
						for (n = 0; n < r.length; n++)
							$(r[n]).on('click', function (t) {
								$('#pkTypesBlock')
									.find('button[selected]')
									.removeAttr('selected'),
									$(t.currentTarget).attr('selected', ''),
									e.OnChangeLibraryType()
							})
						var i = $('[name = signTypesRadio]')
						for (n = 0; n < i.length; n++)
							$(i[n]).on('change', function () {
								e.OnChangeSignType()
							})
						$('#signTypeASiCSelect').on('change', function () {
							e.OnChangeASiCType()
						}),
							$('#signTypeCAdESSelect').on('change', function () {
								e.OnChangeSignFile()
							})
						var o = [
							'#pkReadFileBackButton',
							'#pkReadKMBackButton',
							'#pkReadKSPBackButton',
							'#pkReadDIIABackButton',
						]
						if (this.m_showPKPreSelect)
							for (n = 0; n < o.length; n++)
								$(o[n]).on('click', function (t) {
									e.OnReadPKeyCancel()
								})
						else for (n = 0; n < o.length; n++) $(o[n]).hide()
						$('#pkCASelect').on('change', function () {
							e.OnSelectCA()
						}),
							$('#proxyButton').on('click', function () {
								e.OnSetProxy()
							}),
							$('#proxyUseCheckbox').on('click', function () {
								e.OnUseProxy()
							}),
							$('#proxyAuthCheckbox').on('click', function () {
								e.OnAuthProxy()
							}),
							$('#proxySaveButton').on('click', function () {
								e.OnSaveProxy()
							}),
							$('#proxyCancelButton').on('click', function () {
								e.OnHideProxy()
							}),
							$('.FormTextInput').each(function (t, n) {
								e.InitializeInputEl(n)
							}),
							$('#pkReadFileSelectFileDropZone').on('click', function (e) {
								$('#pkReadFileInput').click(), e.preventDefault()
							}),
							$('#pkReadFileSelectFileDropZone')
								.bind('dragover', function (e) {
									e.stopPropagation(),
										e.preventDefault(),
										(e.originalEvent.dataTransfer.dropEffect = 'copy')
								})
								.bind('drop', function (t) {
									t.stopPropagation(),
										t.preventDefault(),
										$('#pkReadFileInput').prop(
											'files',
											t.originalEvent.dataTransfer.files
										),
										e.OnSelectPKeyFile(t.originalEvent.dataTransfer.files)
								}),
							$('#pkReadFileInput').on('change', function (t) {
								e.OnSelectPKeyFile(t.target.files)
							}),
							$('#pkReadFileSelectCertsDropZone').on('click', function (e) {
								$('#pkReadFileCertsInput').click(), e.preventDefault()
							}),
							$('#pkReadFileSelectCertsDropZone')
								.bind('dragover', function (e) {
									e.stopPropagation(),
										e.preventDefault(),
										(e.originalEvent.dataTransfer.dropEffect = 'copy')
								})
								.bind('drop', function (t) {
									t.stopPropagation(),
										t.preventDefault(),
										$('#pkReadFileCertsInput').prop(
											'files',
											t.originalEvent.dataTransfer.files
										),
										e.OnSelectPKeyCertificates(
											'#pkReadFileSelectCertsCenterBlock',
											'#pkReadFileSelectCertsSelectedCenterBlock',
											'#pkReadFileSelectCertsSelectedList',
											t.originalEvent.dataTransfer.files
										)
								}),
							$('#pkReadFileCertsInput').on('change', function (t) {
								e.OnSelectPKeyCertificates(
									'#pkReadFileSelectCertsCenterBlock',
									'#pkReadFileSelectCertsSelectedCenterBlock',
									'#pkReadFileSelectCertsSelectedList',
									t.target.files
								)
							}),
							$('#pkReadFileButton').on('click', function (t) {
								e.OnReadPKey(!0)
							}),
							$('#pkReadKMSelect').on('change', function (t) {
								e.OnKMSelectChange()
							}),
							$('#pkReadKMSelectCertsDropZone').on('click', function (e) {
								$('#pkReadKMCertsInput').click(), e.preventDefault()
							}),
							$('#pkReadKMSelectCertsDropZone')
								.bind('dragover', function (e) {
									e.stopPropagation(),
										e.preventDefault(),
										(e.originalEvent.dataTransfer.dropEffect = 'copy')
								})
								.bind('drop', function (t) {
									t.stopPropagation(),
										t.preventDefault(),
										$('#pkReadKMCertsInput').prop(
											'files',
											t.originalEvent.dataTransfer.files
										),
										e.OnSelectPKeyCertificates(
											'#pkReadKMSelectCertsCenterBlock',
											'#pkReadKMSelectCertsSelectedCenterBlock',
											'#pkReadKMSelectCertsSelectedList',
											t.originalEvent.dataTransfer.files
										)
								}),
							$('#pkReadKMCertsInput').on('change', function (t) {
								e.OnSelectPKeyCertificates(
									'#pkReadKMSelectCertsCenterBlock',
									'#pkReadKMSelectCertsSelectedCenterBlock',
									'#pkReadKMSelectCertsSelectedList',
									t.target.files
								)
							}),
							$('#pkReadKMButton').on('click', function (t) {
								e.OnReadPKey(!1)
							}),
							$('#pkReadKSPSelect').on('change', function (t) {
								e.OnReadKSPSelectChange()
							}),
							$('#pkReadKSPUserIdTextField').on('input', function (t) {
								e.OnReadKSPUserIdTextFieldChange()
							}),
							$('#pkReadKSPButton').on('click', function (t) {
								e.OnReadPKeyKSP()
							}),
							$('#pkWriteFileTextField').on('input', function (t) {
								e.OnWriteFileTextFieldChange()
							}),
							$('#pkWriteFileButton').on('click', function (t) {
								e.OnWritePKey(!0)
							}),
							$('#pkWriteKMSelect').on('change', function (t) {
								e.OnKMSelectChange()
							}),
							$('#pkWriteKMButton').on('click', function (t) {
								e.OnWritePKey(!1)
							}),
							$('#makeTechnicalCertDeviceNameTextField').on(
								'keydown',
								function (t) {
									e.OnValidateInput(
										t.keyCode,
										t.ctrlKey,
										t.metaKey,
										t.shiftKey,
										U,
										O
									) || t.preventDefault()
								}
							),
							$('#makeTechnicalCertEUFileInput').on('change', function (t) {
								e.OnSelectTechnicalCertRequest(
									'#makeTechnicalCertEUFileTextField',
									t.target.files
								)
							}),
							$('#makeTechnicalCertEUKEPFileInput').on('change', function (t) {
								e.OnSelectTechnicalCertRequest(
									'#makeTechnicalCertEUKEPFileTextField',
									t.target.files
								)
							}),
							$('#makeTechnicalCertNextButton').on('click', function (t) {
								e.OnMakeDeviceCert()
							}),
							$('#makeTechnicalCertBackButton').on('click', function (t) {
								e.OnMakeDeviceCertCancel()
							}),
							$('#preSignNextButton').on('click', function (t) {
								e.OnShowSignFileForm(!1)
							}),
							$('#preSignBackButton').on('click', function (t) {
								e.OnShowSignFileForm(!0)
							}),
							$('#signFilesDropZone').on('click', function (e) {
								$('#signFilesInput').click(), e.preventDefault()
							}),
							$('#signFilesDropZone')
								.bind('dragover', function (e) {
									e.stopPropagation(),
										e.preventDefault(),
										(e.originalEvent.dataTransfer.dropEffect = 'copy')
								})
								.bind('drop', function (t) {
									t.stopPropagation(),
										t.preventDefault(),
										$('#signFilesInput').prop(
											'files',
											t.originalEvent.dataTransfer.files
										),
										e.OnSelectSignFile(t.originalEvent.dataTransfer.files)
								}),
							$('#signFilesInput').bind('change', function (t) {
								e.OnSelectSignFile(t.target.files)
							}),
							$('#signButton').on('click', function (t) {
								e.OnSignFile()
							}),
							$('#signCancelButton').on('click', function (t) {
								e.OnSignFileCancel()
							})
					}),
					(e.prototype.SetStorageItem = function (e, t) {
						try {
							localStorage.setItem(e, t)
						} catch (e) {}
					}),
					(e.prototype.GetStorageItem = function (e, t) {
						try {
							var n = localStorage.getItem(e)
							;(n && 'string' == typeof n) || (n = t)
						} catch (e) {
							n = t
						}
						return n
					}),
					(e.prototype.MakeUserId = function () {
						return 'undefined' != typeof crypto
							? ('' + [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
									/[018]/g,
									function (e) {
										var t = Number(e)
										return (
											t ^
											(crypto.getRandomValues(new Uint8Array(1))[0] &
												(15 >> (t / 4)))
										).toString(16)
									}
							  )
							: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
									/[xy]/g,
									function (e) {
										var t = (16 * Math.random()) | 0
										return ('x' == e ? t : (3 & t) | 8).toString(16)
									}
							  )
					}),
					(e.prototype.GetCurrentLibrary = function () {
						return this.m_libraries[
							this.m_keyMediaType == w.Hardware ||
							(this.m_formType == k.MakeNewCertificate &&
								this.m_noNewFileKMOnMakeNewCertificate)
								? i.EndUserConstants.EndUserLibraryType.SW
								: i.EndUserConstants.EndUserLibraryType.JS
						]
					}),
					(e.prototype.GetKMSelect = function () {
						switch (this.m_formType) {
							case k.ReadPrivateKey:
							case k.SignFile:
							case k.ViewPKeyCertificates:
							case k.MakeDeviceCertificate:
								return $('#pkReadKMSelect')
							case k.MakeNewCertificate:
								return null == this.m_readedPKey
									? $('#pkReadKMSelect')
									: $('#pkWriteKMSelect')
						}
					}),
					(e.prototype.GetKMUserTextField = function () {
						switch (this.m_formType) {
							case k.ReadPrivateKey:
							case k.SignFile:
							case k.ViewPKeyCertificates:
							case k.MakeDeviceCertificate:
								return $('#pkReadKMUserTextField')
							case k.MakeNewCertificate:
								return null == this.m_readedPKey
									? $('#pkReadKMUserTextField')
									: $('#pkWriteKMUserTextField')
						}
					}),
					(e.prototype.GetKMUserBlock = function () {
						switch (this.m_formType) {
							case k.ReadPrivateKey:
							case k.SignFile:
							case k.ViewPKeyCertificates:
							case k.MakeDeviceCertificate:
								return $('#pkReadKMUserBlock')
							case k.MakeNewCertificate:
								return null == this.m_readedPKey
									? $('#pkReadKMUserBlock')
									: $('#pkWriteKMUserBlock')
						}
					}),
					(e.prototype.GetKMPasswordTextField = function () {
						switch (this.m_formType) {
							case k.ReadPrivateKey:
							case k.SignFile:
							case k.ViewPKeyCertificates:
							case k.MakeDeviceCertificate:
								return $('#pkReadKMPasswordTextField')
							case k.MakeNewCertificate:
								return null == this.m_readedPKey
									? $('#pkReadKMPasswordTextField')
									: $('#pkWriteKMPasswordTextField')
						}
					}),
					(e.prototype.GetKMPasswordConfirmTextField = function () {
						switch (this.m_formType) {
							case k.ReadPrivateKey:
							case k.SignFile:
							case k.ViewPKeyCertificates:
							case k.MakeDeviceCertificate:
								return null
							case k.MakeNewCertificate:
								return null == this.m_readedPKey
									? null
									: $('#pkWriteKMPasswordConfirmTextField')
						}
					}),
					(e.prototype.GetKMCertsBlock = function () {
						switch (this.m_formType) {
							case k.ReadPrivateKey:
							case k.SignFile:
							case k.ViewPKeyCertificates:
							case k.MakeDeviceCertificate:
								return $('#pkReadKMCertsBlock')
							case k.MakeNewCertificate:
								return null == this.m_readedPKey
									? $('#pkReadKMCertsBlock')
									: null
						}
					}),
					(e.prototype.GetKMButton = function () {
						switch (this.m_formType) {
							case k.ReadPrivateKey:
							case k.SignFile:
							case k.ViewPKeyCertificates:
							case k.MakeDeviceCertificate:
								return $('#pkReadKMButton')
							case k.MakeNewCertificate:
								return null == this.m_readedPKey
									? $('#pkReadKMButton')
									: $('#pkWriteKMButton')
						}
					}),
					(e.prototype.InitializeInputEl = function (e) {
						var t = this,
							n = $(e).find('.TextField'),
							r = $(e).find('.InputLabel')
						n.on('change', function (i) {
							'' != n.val()
								? r.hasClass('InputLabel-shrink') ||
								  r.addClass('InputLabel-shrink')
								: r.removeClass('InputLabel-shrink'),
								t.SetErrorInputEl(e, '')
						}),
							n.on('focus', function (e) {
								r.hasClass('InputLabel-shrink') ||
									r.addClass('InputLabel-shrink')
							}),
							n.on('focusout', function (e) {
								'' != n.val()
									? r.hasClass('InputLabel-shrink') ||
									  r.addClass('InputLabel-shrink')
									: r.removeClass('InputLabel-shrink')
							})
					}),
					(e.prototype.SetErrorInputEl = function (e, t) {
						'string' != typeof e &&
							(e =
								'#' +
								($(e).hasClass('FormControl')
									? $(e)
									: $(e).parents('.FormControl')
								).attr('id'))
						var n = $(e).find('input'),
							r = $(e).find('.InputLabel'),
							i = $(e).find('.FormHelperText')
						i.text(t),
							'' != t
								? (n.hasClass('error') || n.addClass('error'),
								  r.hasClass('error') || r.addClass('error'),
								  i.show())
								: (n.removeClass('error'), r.removeClass('error'), i.hide())
					}),
					(e.prototype.SanitizeHTML = function (e) {
						return e
							.replace(/&/g, '&amp;')
							.replace(/</g, '&lt;')
							.replace(/>/g, '&gt;')
							.replace(/"/g, '&quot;')
							.replace(/'/g, '&#039;')
					}),
					(e.prototype.MakeRowEl = function (e, t, n, r) {
						if (
							(void 0 === t && (t = null),
							void 0 === n && (n = !0),
							void 0 === r && (r = !0),
							!t && n)
						)
							return ''
						var i = $('<label><b>' + e + (t ? ': ' : '') + '</b></label>')
						return (
							t &&
								('string' == typeof t && (t = '<label>' + t + '</label>'),
								i.append(t)),
							r && i.append('<br>'),
							i
						)
					}),
					(e.prototype.MakeRowEl1 = function (e, t, n) {
						if ((void 0 === t && (t = null), void 0 === n && (n = !0), !t && n))
							return ''
						var r = $('<div class="Block">')
						return (
							r.append('<h6>' + e + '</h6>'),
							t &&
								('string' == typeof t && (t = '<label>' + t + '</label>'),
								r.append(t)),
							r
						)
					}),
					(e.prototype.MakeInfoBlock = function (e, t, n) {
						void 0 === n && (n = !0)
						var r = $('<div class="HelpBlock ColoredBorderBlock">'),
							i = $(
								'<div class="HelpTitleBlock"><span>' +
									e +
									'</span><div class="Arrow" direction="' +
									(n ? 'down' : 'up') +
									'"></div></div>'
							),
							o = $(
								'<div class="HelpTextBlock"' +
									(n ? 'style=display:none' : '') +
									'>'
							)
						return (
							o.append(t),
							r.append(i),
							r.append(o),
							i.on('click', function () {
								o.is(':visible')
									? (o.slideUp(200), i.find('.Arrow').attr('direction', 'down'))
									: (o.slideDown(200), i.find('.Arrow').attr('direction', 'up'))
							}),
							r
						)
					}),
					(e.prototype.MakeSaveFileEl = function (e, t, n, r) {
						var i = this
						void 0 === r && (r = !1)
						var o = $(
							'<a ' +
								(r ? 'style="text-decoration: underline;"' : '') +
								'>' +
								this.SanitizeHTML(e) +
								'</a>'
						)
						return (
							o.attr('title', this.SanitizeHTML(t)),
							$(o).on('click', function (e) {
								i.SaveFile(t, n)
							}),
							o
						)
					}),
					(e.prototype.DateToLocalString = function (e) {
						var t =
							('0' + e.getDate()).slice(-2) +
							'.' +
							('0' + (e.getMonth() + 1)).slice(-2) +
							'.' +
							e.getFullYear()
						return (t +=
							' ' +
							('0' + e.getHours()).slice(-2) +
							':' +
							('0' + e.getMinutes()).slice(-2) +
							':' +
							('0' + e.getSeconds()).slice(-2))
					}),
					(e.prototype.IsQualifiedCertificates = function (e) {
						for (var t = 0; t < e.length; t++)
							if (!e[t].infoEx.isPowerCert) return !1
						return !0
					}),
					(e.prototype.IsReadedKeyTypeSupportsSignType = function (e, t) {
						if (null == this.m_readedPKey) return !1
						if (
							null != this.m_readedPKey.keyMedia ||
							null != this.m_readedPKey.file
						)
							return !0
						switch (e) {
							case i.EndUserConstants.EndUserSignContainerType.CAdES:
								return !0
							case i.EndUserConstants.EndUserSignContainerType.XAdES:
								return !1
							case i.EndUserConstants.EndUserSignContainerType.PAdES:
								return (
									this.m_readedPKey.kspKey.ksp ==
									i.EndUserConstants.EndUserKSP.DIIA
								)
							case i.EndUserConstants.EndUserSignContainerType.ASiC:
								switch (t) {
									case i.EndUserConstants.EndUserASiCSignType.CAdES:
										return !0
									case i.EndUserConstants.EndUserASiCSignType.XAdES:
									default:
										return !1
								}
							default:
								return !1
						}
					}),
					(e.prototype.SetViewPKeyInfo = function (e) {
						var t = this
						if (!t.m_showPKInfo || e.certificatesInfo.length < 1)
							t.OnPKeyReaded(e)
						else {
							var n = $('<div class="Block">'),
								r = e.certificatesInfo,
								i = r[0],
								o = function (e, t) {
									$(e).text(t),
										t ? $(e).parent('div').show() : $(e).parent('div').hide()
								}
							$('#pkInfoSubjCN').text(i.infoEx.subjCN),
								o('#pkInfoSubjOrg', i.infoEx.subjOrg),
								o('#pkInfoSubjOrgUnit', i.infoEx.subjOrgUnit),
								o('#pkInfoSubjTitle', i.infoEx.subjTitle),
								o('#pkInfoSubjDRFOCode', i.infoEx.subjDRFOCode),
								o('#pkInfoSubjUNZR', i.infoEx.subjUNZR),
								o('#pkInfoSubjEDRPOUCode', i.infoEx.subjEDRPOUCode),
								i.infoEx.subjDRFOCode ||
								i.infoEx.subjUNZR ||
								i.infoEx.subjEDRPOUCode
									? $('#pkInfoSubjCodesBlock').show()
									: $('#pkInfoSubjCodesBlock').hide()
							for (var s = [], a = 0; a < r.length; a++) {
								var u = t.MakeKeyUsageWithPublicKeyType(
									r[a].infoEx.keyUsageType,
									r[a].infoEx.publicKeyType
								)
								s = s.concat(u)
							}
							var l = $('<div>')
							for (a = 0; a < r.length; a++)
								l.append(t.MakeCertificateInfoEl(r[a]))
							n.append(l),
								$('#pkInfoContentBlock').empty(),
								$('#pkInfoContentBlock').append(n),
								$('#pkInfoNextButton').off('click'),
								$('#pkInfoNextButton').on('click', function () {
									t.OnPKeyReaded(e)
								}),
								$('#pkInfoBackButton').off('click'),
								$('#pkInfoBackButton').on('click', function () {
									t.OnResetPKey()
								}),
								t.ShowForm('#pkInfoBlock', !1)
						}
					}),
					(e.prototype.SetPKMakeNewCertificatesResult = function (e, t, n) {
						var r = $('<div class="Block StatusBlock">')
						if (t) {
							r.append(
								'<label>' + p(o.TEXT_SAVE_NEW_PRIVATE_KEY) + ':</label><br>'
							)
							var i = this.MakeSaveFileEl(e, e, t)
							r.append(i), r.append('<br><br>')
						}
						r.append(
							'<label>' + p(o.TEXT_DOWLOAD_NEW_CERTIFICATES) + ':</label><br>'
						)
						for (var s = 0; s < n.length; s++) {
							var a = n[s],
								u = 'EU-' + a.infoEx.serial + '.cer',
								l = s + 1 + '. ' + u
							i = this.MakeSaveFileEl(l, u, a.data)
							r.append(i), r.append('<br>')
						}
						this.SetResult(r)
					}),
					(e.prototype.SetMakeDeviceCertificateResult = function (e) {
						var t = $('<div class="Block StatusBlock">')
						t.append(
							'<label>' + p(o.TEXT_DOWLOAD_NEW_CERTIFICATES) + ':</label><br>'
						)
						for (var n = 0; n < e.length; n++) {
							var r = e[n],
								i = 'EU-' + r.infoEx.serial + '.cer',
								s = n + 1 + '. ' + i,
								a = this.MakeSaveFileEl(s, i, r.data)
							t.append(a), t.append('<br>')
						}
						this.SetResult(t)
					}),
					(e.prototype.IsQSCDSNInCert = function (e) {
						for (var t = 0; t < this.m_CAs.length; t++) {
							var n = this.m_CAs[t]
							if (n.qscdSNInCert && n.issuerCNs.indexOf(e) > -1) return !0
						}
						return !1
					}),
					(e.prototype.GetQSCD = function (e) {
						var t = new L()
						if (((t.use = e.isQSCD), t.use)) {
							for (var n = e.extKeyUsages.split(','), r = 0; r < n.length; r++)
								if (n[r].indexOf('ЗНКІ') > -1) {
									t.name = p(n[r].trim())
									break
								}
							t.name &&
								this.IsQSCDSNInCert(e.issuerCN) &&
								(t.sn = p(e.subjUserCode))
						} else
							(e.publicKeyType == i.EndUserConstants.EndUserCertKeyType.ECDSA ||
								e.publicKeyType == i.EndUserConstants.EndUserCertKeyType.RSA) &&
								this.IsQSCDSNInCert(e.issuerCN) &&
								e.subjUserID &&
								20 == e.subjUserID.length &&
								((t.use = !0),
								(t.name = p('ЗНКІ SIM-карта Київстар (MobileID)')),
								(t.sn = p(e.subjUserID.substr(0, 19))))
						return t
					}),
					(e.prototype.isSafariBrowser = function () {
						return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
					}),
					(e.prototype.addSaveFileButton = function (e, t, n) {
						var r = this
						$(e).off('click'),
							$(e).click(function () {
								return (
									r.SetStatus(''),
									n()
										.then(function (e) {
											return r.SaveFile(t, e.data)
										})
										.then(function () {
											var e = s.format(
												p('Файл {0} збережено до директорії "Завантаження"'),
												t
											)
											r.SetStatus(e)
										})
										.catch(function (e) {
											var n = s.format(
												p('Виникла помилка при збереженні файлу {0}'),
												t
											)
											e &&
												(n += '. ' + p('Опис помилки') + ': ' + e.toString()),
												r.SetStatus(n, !0)
										}),
									!1
								)
							})
					}),
					(e.prototype.SetSignFileResult = function (
						e, //!!!!
						t,
						n,
						r,
						i,
						s,
						a,
						u
					) {
						var l = this,
							c = $('<div>'),
							_ = $('<div class="SignResult">'),
							f = new C()
						if (f.parse(l.m_signInfoTmpl)) {
							for (var E = new M((n = n), t), h = [], y = 0; y < r.length; y++)
								h.push({
									signTimeInfo: r[y].timeInfo,
									signerInfo: i[y].infoEx,
									isDigitalStamp: l.IsDigitalStamp([i[y]]),
									qscd: l.GetQSCD(i[y].infoEx),
									signAlgo: l.GetSignAlgo(i[y].infoEx.publicKeyType),
									signContainerType: l.GetSignContainerType(s, a),
									signFormat: l.GetSignFormat(s, r[y].signLevel, u),
								})
							var T = {
									signFile: E,
									files: e,
									signsInfos: [h],
								},
								A = l.makeSignReportData(T),
								R = A.report,
								g = new m(R.fileName, f.tmpl, A),
								P = g.makeDocument(S.Pdf, d.Binary)
							A.report.saveReportFileButton =
								A.report.saveReportFileButton.replace(
									'__validation__report__size__',
									m.formatFileSize(P.length)
								)
							var v = g.makeDocument(S.Html, d.String),
								I = function () {
									return new Promise(function (e, t) {
										e(E)
									})
								},
								U = function () {
									return new Promise(function (e, t) {
										e(new M(R.fileName, P))
									})
								}
							$(_).append(v),
								$(c).append(
									'<div id="saveAllButton" class="Block">\t\t\t\t<div class="DownloadIcon" style="float: left;"></div>\t\t\t\t<label class="i18n">' +
										p('Завантажити все архівом') +
										'</label>\t\t\t</div>'
								),
								$(c).append(_)
							var O = {
								title: p(o.BUTTON_THANKS),
								handle: function () {
									l.ShowForm('#signBlock', !1)
								},
							}
							l.SetResult(c, O),
								l.addSaveFileButton('#saveSignFileButton', R.signFileName, I),
								l.addSaveFileButton(
									'#saveDataFileButton',
									R.dataFilesName,
									function () {
										return new Promise(function (e, t) {
											T.files.length > 1
												? l
														.makeZip(R.dataFilesName, T.files)
														.then(function (t) {
															e(t)
														})
														.catch(t)
												: e(T.files[0])
										})
									}
								),
								l.isSafariBrowser()
									? ($('#saveReportFileButton').off('click'),
									  $('#saveReportFileButton').click(function () {
											g.makeDocument(S.Pdf, d.File)
									  }))
									: l.addSaveFileButton('#saveReportFileButton', R.fileName, U),
								l.addSaveFileButton(
									'#saveAllButton',
									R.zipFileName,
									function () {
										return new Promise(function (e, t) {
											var n = []
											I()
												.then(function (e) {
													return n.push(e), T.files
												})
												.then(function (e) {
													return (
														e.forEach(function (e) {
															for (var t = 0; t < n.length; t++)
																if (e.name == n[t].name) {
																	var r =
																		l.removeFileExtension(e.name) +
																		'.orig.' +
																		l.getFileExtension(e.name)
																	e = new M(r, e.data, e.file)
																	break
																}
															n.push(e)
														}),
														U()
													)
												})
												.then(function (e) {
													return n.push(e), l.makeZip(R.zipFileName, n)
												})
												.then(function (t) {
													e(t)
												})
												.catch(t)
										})
									}
								)
						} else
							l.SetStatus(
								p(
									'Виникла помилка в шаблоні при відображенні результату підпису'
								),
								!0
							)
					}),
					(e.prototype.MakeCertificateInfoEl = function (e) {
						var t = this,
							n = 'EU-' + e.infoEx.serial + '.cer',
							r = t.MakeKeyUsageWithPublicKeyType(
								e.infoEx.keyUsageType,
								e.infoEx.publicKeyType
							),
							i =
								(p('чинний'),
								p(o.TEXT_FROM),
								t.DateToLocalString(e.infoEx.certBeginTime),
								p(o.TEXT_TO),
								t.DateToLocalString(e.infoEx.certEndTime),
								$(
									'<div class="Block ColorBorder"><div class="FileIcon"></div><div class="FileContent"><h2>' +
										r.join(', ') +
										'</h2><label class="TextSmall TextLight">' +
										n +
										'</label></div><div class="DownloadIcon"></div></div>'
								))
						return (
							i.on('click', function (r) {
								t.SaveFile(n, e.data)
							}),
							i
						)
					}),
					(e.prototype.ClearForm = function (e) {
						switch (e) {
							case '#pkTypesPreSelectBlock':
								$('#pkTypesPreSelectBlock')
									.find('.MenuItem[selected]')
									.removeAttr('selected')
								break
							case '#pkReadFileBlock':
								$('#pkReadFileSelectFileTextField').text(''),
									$('#pkReadFileSelectFileTextField').change(),
									$('#pkReadFileSelectFileCenterBlock').show(),
									$('#pkReadFileSelectFileSelectedCenterBlock').hide(),
									$('#pkReadFileInput').val(''),
									$('#pkReadFileAliasSelect').empty(),
									$('#pkReadFilePasswordTextField').val(''),
									$('#pkReadFilePasswordTextField').change(),
									$('#pkReadFileCertsBlock').hide(),
									$('#pkReadFileCertsInput').val(''),
									$('#pkReadFileSelectCertsCenterBlock').show(),
									$('#pkReadFileSelectCertsSelectedCenterBlock').hide(),
									$('#pkReadFileSelectCertsSelectedList').empty(),
									$('#pkReadFilePasswordTextField').prop('disabled', !0),
									$('#pkReadFileCertsBlock').hide(),
									$('#pkReadFileButton').attr('disabled', !0),
									$('#pkReadFileSelectAliasBlock').hide()
								break
							case '#pkReadKMBlock':
								$('#pkReadKMUserTextField').val(''),
									$('#pkReadKMUserTextField').change(),
									$('#pkReadKMPasswordTextField').val(''),
									$('#pkReadKMPasswordTextField').change(),
									$('#pkReadKMCertsBlock').hide(),
									$('#pkReadKMCertsInput').val(''),
									$('#pkReadKMSelectCertsCenterBlock').show(),
									$('#pkReadKMSelectCertsSelectedCenterBlock').hide(),
									$('#pkReadKMSelectCertsSelectedList').empty(),
									$('#pkReadKMUserBlock').hide(),
									$('#pkReadKMCertsBlock').hide(),
									this.m_KMs
										? this.SetKMs(this.m_KMs)
										: ($('#pkReadKMUserTextField').prop('disabled', !0),
										  $('#pkReadKMPasswordTextField').prop('disabled', !0),
										  $('#pkReadKMButton').attr('disabled', !0))
								break
							case '#pkReadKSPBlock':
								$('#pkReadKSPSelect').val(
									$('#pkReadKSPSelect option:first').val()
								),
									$('#pkReadKSPUserIdTextField').val(''),
									$('#pkReadKSPUserIdTextField').change(),
									$('#pkReadKSPButton').attr('disabled', !0),
									this.OnReadKSPSelectChange()
								break
							case '#pkReadDIIABlock':
								$('#pkReadDIIAQRCodeBlock').empty()
								break
							case '#pkWriteFileBlock':
								$('#pkWriteFileTextField').val('Key-6.dat'),
									$('#pkWriteFileTextField').change(),
									$('#pkWriteFilePasswordTextField').val(''),
									$('#pkWriteFilePasswordTextField').change(),
									$('#pkWriteFilePasswordConfirmTextField').val(''),
									$('#pkWriteFilePasswordConfirmTextField').change(),
									$('#pkWriteFilePasswordTextField').prop('disabled', !1),
									$('#pkWriteFilePasswordConfirmTextField').prop(
										'disabled',
										!1
									),
									$('#pkWriteFileButton').attr('disabled', !0)
								break
							case '#pkWriteKMBlock':
								$('#pkWriteKMUserTextField').val(''),
									$('#pkWriteKMUserTextField').change(),
									$('#pkWriteKMPasswordTextField').val(''),
									$('#pkWriteKMPasswordTextField').change(),
									$('#pkWriteKMPasswordConfirmTextField').val(''),
									$('#pkWriteKMPasswordConfirmTextField').change(),
									this.m_KMs
										? this.SetKMs(this.m_KMs)
										: ($('#pkWriteKMUserTextField').prop('disabled', !0),
										  $('#pkWriteKMPasswordTextField').prop('disabled', !0),
										  $('#pkWriteKMPasswordConfirmTextField').prop(
												'disabled',
												!0
										  ),
										  $('#pkReadKMButton').attr('disabled', !0))
								break
							case '#preSignBlock':
								//!!!!
								break
							case '#signBlock':
								var t =
									(this.m_showSignTip &&
										$('#preSignShowParamsCheckbox').prop('checked')) ||
									!this.m_showSignTip
								t
									? ($('#signTipBlock').hide(),
									  $('#signParamsBlock').show(),
									  $('#signButton').text(p(o.BUTTON_SIGN)))
									: ($('#signTipBlock').show(),
									  $('#signParamsBlock').hide(),
									  $('#signButton').text(p(o.BUTTON_SIGN_ASICE))),
									$(
										'[name=signTypesRadio][value=' +
											(t
												? this.IsReadedKeyTypeSupportsSignType(
														i.EndUserConstants.EndUserSignContainerType.XAdES,
														i.EndUserConstants.EndUserASiCSignType.Unknown
												  )
													? N.XAdES
													: N.CAdES
												: N.ASiCE) +
											']'
									)
										.prop('checked', !0)
										.trigger('click'),
									$('#signTypeXAdESSelect').val(
										i.EndUserConstants.EndUserXAdESType.Detached + ''
									),
									$('#signFormatXAdESSelect').val(
										i.EndUserConstants.EndUserXAdESSignLevel.B_LT + ''
									),
									$('#signFormatPAdESSelect').val(
										i.EndUserConstants.EndUserPAdESSignLevel.B_LT + ''
									),
									$('#signTypeCAdESSelect').val(
										i.EndUserConstants.EndUserCAdESType.Enveloped + ''
									),
									$('#signFormatCAdESSelect').val(
										(i.EndUserConstants.EndUserSignType.CAdES_X_Long |
											i.EndUserConstants.EndUserSignType.CAdES_X_Long_Trusted) +
											''
									),
									$('#signTypeASiCSelect').val(
										(t ||
										!this.IsReadedKeyTypeSupportsSignType(
											i.EndUserConstants.EndUserSignContainerType.ASiC,
											i.EndUserConstants.EndUserASiCSignType.XAdES
										)
											? i.EndUserConstants.EndUserASiCSignType.CAdES
											: i.EndUserConstants.EndUserASiCSignType.XAdES) + ''
									),
									this.OnChangeSignType(),
									$('#signFilesInput').val(''),
									$('#signFilesSelectBlock').show(),
									$('#signFilesSelectedBlock').hide(),
									$('#signFilesSelectedList').empty(),
									$('#signButton').attr('disabled', !0),
									this.IsReadedKeyTypeSupportsSignType(
										i.EndUserConstants.EndUserSignContainerType.XAdES,
										i.EndUserConstants.EndUserASiCSignType.Unknown
									)
										? $('#signTypeXAdESRadioBlock').show()
										: $('#signTypeXAdESRadioBlock').hide(),
									this.IsReadedKeyTypeSupportsSignType(
										i.EndUserConstants.EndUserSignContainerType.ASiC,
										i.EndUserConstants.EndUserASiCSignType.XAdES
									)
										? $('#signTypeASiCXAdESOption').show()
										: $('#signTypeASiCXAdESOption').hide(),
									this.IsReadedKeyTypeSupportsSignType(
										i.EndUserConstants.EndUserSignContainerType.PAdES,
										i.EndUserConstants.EndUserASiCSignType.Unknown
									)
										? $('#signTypePAdESRadioBlock').show()
										: $('#signTypePAdESRadioBlock').hide()
								break
							case '#makeTechnicalCertBlock':
								$('#makeTechnicalCertDeviceNameTextField').val(''),
									$('#makeTechnicalCertDeviceNameTextField').change(),
									$('#makeTechnicalCertEUFileTextField').val(''),
									$('#makeTechnicalCertEUFileTextField').change(),
									$('#makeTechnicalCertEUFileInput').val(''),
									$('#makeTechnicalCertEUKEPFileTextField').val(''),
									$('#makeTechnicalCertEUKEPFileTextField').change(),
									$('#makeTechnicalCertEUKEPFileInput').val('')
								break
							case '#proxySettingsBlock':
							case '#installBlock':
								break
							case '#resultBlock':
								$('#resultBlock').empty()
						}
					}),
					(e.prototype.GetVisibleFormId = function () {
						return '#' + $('.VisibleBlock').attr('id')
					}),
					(e.prototype.ShowForm = function (e, t) {
						var n = this.GetVisibleFormId()
						if (null != e && n != e) {
							this.HideForm(null)
							var r = $(e)
							r.show(), r.addClass('VisibleBlock')
						}
						switch (
							('#proxySettingsBlock' != n &&
								!t &&
								this.ClearForm(null != e ? e : n),
							this.SetFormTitle(e),
							this.SetFormSubTitle(e),
							this.SetFormStep(e),
							this.SetFormHelp(e),
							this.SetStatus(),
							this.ChangeFormState(null != e ? e : n, t),
							e)
						) {
							case '#pkTypesPreSelectBlock':
								$('#titleBlock').show(),
									$('#titleBlock').css('text-align', 'initial'),
									$('#subTitleLabel').hide(),
									$('#stepBlock').hide(),
									$('#pkBlock').hide(),
									$('#pkTypesBlock').hide()
								break
							case '#pkReadFileBlock':
								$('#titleBlock').show(),
									$('#titleBlock').css('text-align', 'initial'),
									$('#subTitleLabel').hide(),
									$('#stepBlock').show(),
									$('#pkTypesBlock').show(),
									$('#pkBlock').show(),
									$('#pkCABloсk').show(),
									(this.m_isPKActionDone = !1),
									this.m_formType == k.MakeNewCertificate &&
									this.m_noNewFileKMOnMakeNewCertificate
										? $('#proxyButtonBlock').show()
										: $('#proxyButtonBlock').hide()
								break
							case '#pkReadKMBlock':
								$('#titleBlock').show(),
									$('#titleBlock').css('text-align', 'initial'),
									$('#subTitleLabel').hide(),
									$('#stepBlock').show(),
									$('#pkTypesBlock').show(),
									$('#pkBlock').show(),
									$('#pkCABloсk').show(),
									(this.m_isPKActionDone = !1),
									$('#proxyButtonBlock').show()
								break
							case '#pkReadKSPBlock':
								$('#titleBlock').show(),
									$('#titleBlock').css('text-align', 'initial'),
									$('#subTitleLabel').hide(),
									$('#stepBlock').show(),
									$('#pkTypesBlock').show(),
									$('#pkBlock').show(),
									$('#pkCABloсk').hide(),
									(this.m_isPKActionDone = !1),
									$('#proxyButtonBlock').hide()
								break
							case '#pkReadDIIABlock':
								$('#titleBlock').show(),
									$('#titleBlock').css('text-align', 'initial'),
									$('#subTitleLabel').hide(),
									$('#stepBlock').show(),
									$('#pkTypesBlock').hide(),
									$('#pkBlock').show(),
									$('#pkCABloсk').hide(),
									(this.m_isPKActionDone = !1),
									$('#proxyButtonBlock').hide()
								break
							case '#pkWriteFileBlock':
								$('#titleBlock').show(),
									$('#titleBlock').css('text-align', 'initial'),
									$('#subTitleLabel').hide(),
									$('#stepBlock').show(),
									this.m_noNewKMOnMakeNewCertificate
										? $('#pkTypesBlock').hide()
										: $('#pkTypesBlock').show(),
									$('#pkBlock').show(),
									$('#pkCABloсk').hide(),
									this.m_noNewKMOnMakeNewCertificate &&
										$('#pkWriteFileSelectFileBlock').hide(),
									(this.m_isPKActionDone = !1),
									$('#proxyButtonBlock').hide()
								break
							case '#pkWriteKMBlock':
								$('#titleBlock').show(),
									$('#titleBlock').css('text-align', 'initial'),
									$('#subTitleLabel').hide(),
									$('#stepBlock').show()
								var i =
									this.m_formType != k.MakeNewCertificate ||
									!this.m_noNewKMOnMakeNewCertificate ||
									null == this.m_readedPKey.keyMedia
								i && !this.m_noNewFileKMOnMakeNewCertificate
									? $('#pkTypesBlock').show()
									: $('#pkTypesBlock').hide(),
									$('#pkBlock').show(),
									$('#pkCABloсk').hide(),
									i ||
										($('#pkWriteKMUserBlock').hide(),
										$('#pkWriteKMSelectBlock').hide()),
									(this.m_isPKActionDone = !1),
									this.m_formType != k.MakeNewCertificate
										? $('#proxyButtonBlock').show()
										: $('#proxyButtonBlock').hide()
								break
							case '#pkInfoBlock':
								this.m_formType != k.ViewPKeyCertificates
									? $('#pkInfoNextButton').show()
									: $('#pkInfoNextButton').hide(),
									$('#titleBlock').show(),
									$('#titleBlock').css('text-align', 'initial'),
									$('#subTitleLabel').hide(),
									$('#stepBlock').show(),
									$('#pkTypesBlock').hide(),
									$('#pkBlock').hide()
								break
							case '#preSignBlock':
							case '#signBlock':
								$('#titleBlock').show(),
									$('#titleBlock').css('text-align', 'initial'),
									$('#subTitleLabel').hide(),
									$('#stepBlock').show(),
									$('#pkTypesBlock').hide(),
									$('#pkBlock').hide()
								break
							case '#proxySettingsBlock':
								$('#titleBlock').show(),
									$('#titleBlock').css('text-align', 'initial'),
									$('#subTitleLabel').hide(),
									$('#stepBlock').hide(),
									$('#pkTypesBlock').hide(),
									$('#pkBlock').hide()
								break
							case '#installBlock':
								$('#titleBlock').show(),
									$('#titleBlock').css('text-align', 'initial'),
									$('#subTitleLabel').hide(),
									$('#stepBlock').show(),
									$('#pkBlock').hide()
								break
							case '#resultBlock':
								$('#titleLabel').is(':visible')
									? ($('#titleBlock').show(), $('#subTitleLabel').show())
									: ($('#titleBlock').hide(), $('#subTitleLabel').hide()),
									$('#titleBlock').css('text-align', 'center'),
									$('#stepBlock').hide(),
									$('#pkTypesBlock').hide(),
									$('#pkBlock').hide()
						}
					}),
					(e.prototype.HideForm = function (e) {
						null == e && (e = this.GetVisibleFormId())
						var t = $(e)
						t.hide(), t.removeClass('VisibleBlock')
					}),
					(e.prototype.ChangeFormState = function (e, t) {
						switch (e) {
							case '#pkTypesPreSelectBlock':
								break
							case '#pkReadFileBlock':
								$('#pkTypesBlock').find('.TabButton').prop('disabled', t),
									$('#pkCASelect').prop('disabled', t),
									$('#proxyButton').attr('disabled', t)
								var n = '' != $('#pkReadFileSelectFileTextField').text()
								$('#pkReadFileAliasSelect').prop('disabled', t || !n),
									$('#pkReadFilePasswordTextField').prop('disabled', t || !n),
									$('#pkReadFileSelectFileChangeButton').attr('disabled', t),
									$('#pkReadFileSelectCertsDropZone').prop('disabled', t || !n),
									$('#pkReadFileSelectCertsChangeButton').attr(
										'disabled',
										t || !n
									),
									$('#pkReadFileButton').attr('disabled', !n),
									$('#pkReadFileButton').text(
										p(t ? o.BUTTON_CLEAR : o.BUTTON_READ)
									),
									this.m_formType == k.MakeNewCertificate &&
										(t
											? $('#pkReadFileButton').hide()
											: $('#pkReadFileButton').show())
								break
							case '#pkReadKMBlock':
								$('#pkTypesBlock').find('.TabButton').prop('disabled', t),
									$('#pkCASelect').prop('disabled', t)
								n = '' != $('#pkReadKMSelect').find(':selected').text()
								$('#proxyButton').attr('disabled', t),
									$('#pkReadKMSelect').prop('disabled', t),
									$('#pkReadKMUserTextField').prop('disabled', t || !n),
									$('#pkReadKMPasswordTextField').prop('disabled', t || !n),
									$('#pkReadKMSelectCertsDropZone').prop('disabled', t || !n),
									$('#pkReadKMSelectCertsChangeButton').attr(
										'disabled',
										t || !n
									),
									$('#pkReadKMButton').attr('disabled', !n),
									$('#pkReadKMButton').text(
										p(t ? o.BUTTON_CLEAR : o.BUTTON_READ)
									),
									this.m_formType == k.MakeNewCertificate &&
										(t
											? $('#pkReadKMButton').hide()
											: $('#pkReadKMButton').show())
								break
							case '#pkReadKSPBlock':
								$('#pkTypesBlock').find('.TabButton').prop('disabled', t),
									$('#pkReadKSPSelect').prop('disabled', t),
									$('#pkReadKSPUserIdTextField').prop('disabled', t)
								n = '' != $('#pkReadKSPUserIdTextField').val()
								$('#pkReadKSPButton').text(
									p(t ? o.BUTTON_CLEAR : o.BUTTON_READ)
								)
								break
							case '#pkWriteFileBlock':
								$('#pkTypesBlock').find('.TabButton').prop('disabled', t),
									$('#pkCASelect').prop('disabled', t)
								n = '' != $('#pkWriteFileTextField').val()
								$('#pkWriteFileTextField').prop('disabled', t),
									$('#pkWriteFilePasswordTextField').prop('disabled', t || !n),
									$('#pkWriteFilePasswordConfirmTextField').prop(
										'disabled',
										t || !n
									),
									$('#pkWriteFileButton').attr('disabled', t || !n)
								break
							case '#pkWriteKMBlock':
								$('#pkTypesBlock').find('.TabButton').prop('disabled', t),
									$('#pkCASelect').prop('disabled', t)
								n =
									'' != $('#pkWriteKMSelect').find(':selected').text() ||
									(this.m_formType == k.MakeNewCertificate &&
										this.m_noNewKMOnMakeNewCertificate &&
										!this.m_noNewFileKMOnMakeNewCertificate &&
										null == this.m_readedPKey.keyMedia)
								$('#proxyButton').attr('disabled', t),
									$('#pkWriteKMSelect').prop('disabled', t),
									$('#pkWriteKMUserTextField').prop('disabled', t || !n),
									$('#pkWriteKMPasswordTextField').prop('disabled', t || !n),
									$('#pkWriteKMPasswordConfirmTextField').prop(
										'disabled',
										t || !n
									),
									$('#pkWriteKMButton').attr('disabled', t || !n)
								break
							case '#pkInfoBlock':
								$('#pkInfoNextButton').attr('disabled', t)
						}
					}),
					(e.prototype.SetStatus = function (e, t) {
						void 0 === e && (e = ''),
							void 0 === t && (t = !1),
							$('#statusLabel').text(e),
							'' == e ? $('#statusBlock').hide() : $('#statusBlock').show(),
							t
								? ($('#statusBlock').addClass('error'),
								  $('#statusBlock').removeClass('status'))
								: ($('#statusBlock').removeClass('error'),
								  $('#statusBlock').addClass('status'))
					}),
					(e.prototype.GetLibraryErrorDetailedDescription = function (e) {
						var t = e.message + '(' + e.code + ')'
						switch (e.code) {
							case i.EndUserError.EU_ERROR_TRANSMIT_REQUEST:
								this.GetCurrentLibrary().GetType() ==
									i.EndUserConstants.EU_LIBRARY_TYPE_SW &&
									(t += '. ' + p(o.TEXT_SET_PROXY_SETTINGS))
						}
						return t
					}),
					(e.prototype.SetError = function (e, t) {
						void 0 === t && (t = null)
						var n = ''
						e && (n += e),
							t &&
								((n += '. ' + p(o.TEXT_ERROR_DESCRIPTION) + ': '),
								(n +=
									'string' == typeof t
										? t
										: this.GetLibraryErrorDetailedDescription(t))),
							this.SetStatus(n, !0)
					}),
					(e.prototype.SetResult = function (e, t) {
						void 0 === e && (e = null),
							void 0 === t && (t = null),
							$('#resultContentBlock').empty(),
							$('#resultContentBlock').append(e),
							null != t
								? ($('#resultOKButton').off(),
								  $('#resultOKButton').on('click', t.handle),
								  $('#resultOKButton').text(t.title),
								  $('#resultButtonsBlock').show())
								: $('#resultButtonsBlock').hide()
					}),
					(e.prototype.GetURLParameter = function (e, t, n) {
						if (!e) return n
						if (-1 == e.indexOf('?')) return n
						for (
							var r = n,
								i = e.substring(e.indexOf('?') + 1, e.length).split('&'),
								o = 0;
							o < i.length;
							o++
						)
							if (0 == i[o].indexOf(t + '=')) {
								r = i[o].substring((t + '=').length, i[o].length)
								break
							}
						return r
					}),
					(e.prototype.WriteLog = function (e) {
						this.m_debug && console.log('SignWidget: ' + e)
					}),
					(e.prototype.GetProxySettings = function () {
						var e = new i.EndUserProxySettings()
						return (
							(e.useProxy = $('#proxyUseCheckbox').prop('checked')),
							(e.address = e.useProxy ? $('#proxyAddressTextField').val() : ''),
							(e.port = e.useProxy ? $('#proxyPortTextField').val() : '3128'),
							(e.anonymous =
								!e.useProxy || !$('#proxyAuthCheckbox').prop('checked')),
							(e.user = e.anonymous ? '' : $('#proxyUserTextField').val()),
							(e.password = e.anonymous
								? ''
								: $('#proxyPasswordTextField').val()),
							(e.savePassword = !0),
							e.useProxy
								? '' == e.address
									? (this.SetError(p(o.ERROR_PROXY_ADDRESS_NOT_SET)),
									  $('#proxyAddressTextField').focus(),
									  null)
									: isNaN(parseInt(e.port)) ||
									  parseInt(e.port) < 1 ||
									  parseInt(e.port) > 65535
									? (this.SetError(p(o.ERROR_PROXY_PORT_NOT_SET)),
									  $('#proxyPortTextField').focus(),
									  null)
									: e.anonymous
									? e
									: '' == e.user
									? (this.SetError(p(o.ERROR_PROXY_USER_NOT_SET)),
									  $('#proxyUserTextField').focus(),
									  null)
									: e
								: e
						)
					}),
					(e.prototype.GetFilesSize = function (e) {
						if (!e) return 0
						for (var t = 0, n = 0; n < e.length; n++) t += e[n].size
						return t
					}),
					(e.prototype.ReadFile = function (e) {
						return new Promise(function (t, n) {
							var r = new FileReader()
							;(r.onloadend = function (n) {
								if (n.target.readyState == FileReader.DONE) {
									var r = new M(e.name, new Uint8Array(n.target.result), e)
									t(r)
								}
							}),
								r.readAsArrayBuffer(e)
						})
					}),
					(e.prototype.ReadFiles = function (e) {
						var t = this
						return new Promise(function (n, r) {
							var i = Array(),
								o = 0,
								s = function () {
									o >= e.length
										? n(i)
										: (t
												.ReadFile(e[o])
												.then(function (e) {
													i.push(e), s()
												})
												.catch(function (e) {
													return r(e)
												}),
										  o++)
								}
							s()
						})
					}),
					(e.prototype.SaveFile = function (e, t) {
						var n = new Blob([t], {
							type: 'application/octet-stream',
						})
						saveAs(n, e)
					}),
					(e.prototype.SetKSPs = function (e) {
						var t = $('#pkReadKSPSelect')
						t.empty(),
							$.each(e, function (e, n) {
								t.append(
									$('<option/>', {
										value: n.ksp,
										text: n.name,
									})
								)
							})
					}),
					(e.prototype.SetCAs = function (e) {
						this.m_CAs = e
						var t = $('#pkCASelect'),
							n = []
						if (
							null == this.m_CAs ||
							this.m_CAs.length < 2 ||
							this.m_keyMediaType == w.KSP ||
							this.m_keyMediaType == w.DIIA_UA ||
							this.m_keyMediaType == w.DIIA_EU ||
							this.m_formType == k.MakeNewCertificate ||
							this.m_formType == k.MakeDeviceCertificate ||
							this.m_ownCAOnly
						)
							$('#pkCABloсk').hide()
						else {
							n.push(p(o.TEXT_CA_AUTO_DETECT))
							for (var r = 0; r < this.m_CAs.length; r++)
								n.push(this.m_CAs[r].issuerCNs[0])
							t.empty(),
								$.each(n, function (e, n) {
									t.append(
										$('<option/>', {
											value: e,
											text: n,
										})
									)
								}),
								$('#pkCABloсk').show()
						}
					}),
					(e.prototype.GetSelectedCA = function () {
						if (null == this.m_CAs || 0 == this.m_CAs.length) return null
						if (
							1 == this.m_CAs.length ||
							this.m_formType == k.MakeNewCertificate ||
							this.m_formType == k.MakeDeviceCertificate ||
							this.m_ownCAOnly
						)
							return this.m_CAs[0]
						var e = parseInt($('#pkCASelect').val())
						return 0 != e ? this.m_CAs[e - 1] : null
					}),
					(e.prototype.SetSelectedCA = function (e) {
						for (var t = 0; t < this.m_CAs.length; t++)
							for (var n = 0; n < this.m_CAs[t].issuerCNs.length; n++)
								if (e == this.m_CAs[t].issuerCNs[n])
									return void $('#pkCASelect').val(t + 1)
					}),
					(e.prototype.GetFileExtension = function (e) {
						return e.substring(e.lastIndexOf('.') + 1, e.length)
					}),
					(e.prototype.FilterUserCertificates = function (e) {
						for (var t = new Array(), n = 0; n < e.length; n++)
							e[n].infoEx.subjType ==
								i.EndUserConstants.EndUserSubjectType.EndUser && t.push(e[n])
						return t
					}),
					(e.prototype.GetKMLocalizedVisibleName = function (e) {
						return e.device + '(' + p(e.type) + ')'
					}),
					(e.prototype.GetKMsVisibleNames = function (e) {
						var t = this,
							n = new Array()
						return (
							null != e &&
								e.forEach(function (e) {
									n.push(t.GetKMLocalizedVisibleName(e))
								}),
							n
						)
					}),
					(e.prototype.IsKMMultiKeyDevice = function (e) {
						return D.indexOf(e.type) > -1
					}),
					(e.prototype.IsKMConnected = function (e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n]
							if (
								e.typeIndex == r.typeIndex &&
								e.devIndex == r.devIndex &&
								e.type == r.type &&
								e.device == r.device
							)
								return !0
						}
						return !1
					}),
					(e.prototype.IsKMsUpdated = function (e, t) {
						var n = this.GetKMsVisibleNames(e),
							r = this.GetKMsVisibleNames(t)
						if (n.length != r.length) return !0
						for (var i = 0; i < n.length; i++) if (n[i] != r[i]) return !0
						return !1
					}),
					(e.prototype.BeginUpdateKMs = function () {
						var e = this,
							t = e.GetCurrentLibrary()
						e.WriteLog('BeginUpdateKMs'),
							t.GetType() == i.EndUserConstants.EU_LIBRARY_TYPE_SW
								? e.m_updatingKM
									? (e.m_updateKM = !0)
									: ((e.m_updateKM = !0),
									  (e.m_updatingKM = !0),
									  t
											.GetLibrary()
											.GetKeyMedias()
											.then(function (t) {
												;(e.WriteLog('KeyMedias: ' + t),
												(e.m_updatingKM = !1),
												e.m_updateKM) &&
													(e.m_formType == k.MakeNewCertificate &&
														null != e.m_readedPKey &&
														null != e.m_readedPKey.keyMedia &&
														e.m_noNewKMOnMakeNewCertificate &&
														(e.IsKMConnected(e.m_readedPKey.keyMedia, t) ||
															(t = [])),
													e.IsKMsUpdated(t, e.m_KMs) && e.SetKMs(t),
													setTimeout(function () {
														e.m_updateKM && e.BeginUpdateKMs()
													}, 1e3))
											})
											.catch(function (t) {
												;(e.m_updatingKM = !1),
													e.m_updateKM &&
														e.SetError(p(o.ERROR_KM_UPDATE_LIST), t),
													e.StopUpdateKMs()
											}))
								: e.StopUpdateKMs()
					}),
					(e.prototype.StopUpdateKMs = function () {
						this.WriteLog('StopUpdateKMs'), (this.m_updateKM = !1)
					}),
					(e.prototype.SetKMs = function (e) {
						this.m_KMs = e
						var t = null
						if (this.m_KM)
							for (var n = 0; n < e.length; n++)
								if (
									e[n].type == this.m_KM.type &&
									e[n].device == this.m_KM.device
								) {
									t = e[n]
									break
								}
						var r = this.GetKMSelect(),
							i = this.GetKMUserTextField(),
							o = this.GetKMPasswordTextField(),
							s = this.GetKMPasswordConfirmTextField(),
							a = this.GetKMCertsBlock(),
							u = this.GetKMButton(),
							l = this.GetKMsVisibleNames(e)
						r.empty(),
							$.each(l, function (e, t) {
								r.append(
									$('<option/>', {
										value: t,
										text: t,
									})
								)
							}),
							t && r.val(this.GetKMLocalizedVisibleName(t)),
							this.OnKMSelectChange(),
							i.prop('disabled', 0 == l.length),
							o.prop('disabled', 0 == l.length),
							s && s.prop('disabled', 0 == l.length),
							u.attr('disabled', 0 == l.length),
							a && a.prop('disabled', 0 == l.length),
							a && a.attr('disabled', 0 == l.length),
							0 == l.length &&
								(i.val(''),
								o.val(''),
								s && s.val(''),
								a && a.find('ul').empty())
					}),
					(e.prototype.GetSelectedKM = function () {
						if (null == this.m_KMs) return null
						for (
							var e = this.GetKMSelect(),
								t = this.GetKMUserTextField(),
								n = this.GetKMPasswordTextField(),
								r = e.find(':selected').text(),
								o = 0;
							o < this.m_KMs.length;
							o++
						) {
							var s = this.m_KMs[o]
							if (this.GetKMLocalizedVisibleName(s) == r) {
								var a = new i.EndUserKeyMedia(s)
								return (
									(a.password = n.val()),
									t.is(':visible') && (a.user = t.val()),
									a
								)
							}
						}
						return null
					}),
					(e.prototype.GetSelectedKSPSettigs = function () {
						for (
							var e = $('#pkReadKSPSelect').find(':selected').text(),
								t = LIBRARY_SETTINGS.KSPs || [],
								n = 0;
							n < t.length;
							n++
						)
							if (t[n].name == e) return t[n]
						return null
					}),
					(e.prototype.OnEvent = function (e) {
						switch (e.type) {
							case i.EndUserConstants.EndUserEventType.ConfirmKSPOperation:
								var t = e
								this.BeginOperationConfirmation(
									t.url,
									t.qrCode,
									t.mobileAppName,
									t.expireDate
								)
						}
						;(this.m_listeners[e.type] ||
							this.m_listeners[i.EndUserConstants.EndUserEventType.All]) &&
							this.PostMessage(null, -2, null, e)
					}),
					(e.prototype.BeginOperationConfirmationTimer = function (e, t, n) {
						var r = this,
							i = function () {
								var i = e.getTime() - new Date().getTime(),
									o = Math.floor((i / 1e3) % 60),
									s = Math.floor((i / 1e3 / 60) % 60),
									a = t + ' ' + ('0' + s).slice(-2) + ':' + ('0' + o).slice(-2)
								$('#dimmerViewTimerLabel').text(a),
									i <= 0 &&
										(clearInterval(r.m_dimmerViewTimer),
										(r.m_dimmerViewTimer = void 0),
										n())
							}
						i(),
							(r.m_dimmerViewTimer = setInterval(i, 1e3)),
							$('#dimmerViewTimerBlock').show()
					}),
					(e.prototype.StopOperationConfirmationTimer = function () {
						void 0 !== this.m_dimmerViewTimer &&
							(clearInterval(this.m_dimmerViewTimer),
							(this.m_dimmerViewTimer = void 0)),
							$('#dimmerViewTimerLabel').text(''),
							$('#dimmerViewTimerBlock').hide()
					}),
					(e.prototype.BeginOperationConfirmation = function (e, t, n, r) {
						var i = this,
							a = $('<div>')
						a.css('padding', '10px')
						var u = $('<a>')
						u.attr('href', e), u.attr('target', '_blank')
						var l = new Image()
						;(l.src = 'data:image/bmp;base64,' + t),
							$(l).css('padding', '10px'),
							$(l).css('background', 'white'),
							u.append(l),
							a.append(u)
						var c =
								'<a href="' +
								encodeURI(e) +
								'" target="blank" style="color:black">' +
								p(n) +
								'</a>',
							_ = $('<div>')
						_.append(
							'<label style="color:#aaa">' +
								s.format(p(o.TEXT_KSP_OPERATION_CONFIRMATION), c) +
								'</label>'
						),
							i.BeginOperationConfirmationTimer(
								r,
								p(o.TEXT_QR_CODE_VALID_UNTIL),
								function () {
									i.StopOperationConfirmationTimer()
								}
							),
							$('#dimmerViewQRCodeBlock').empty(),
							$('#dimmerViewQRCodeBlock').append(a),
							$('#dimmerViewQRCodeBlock').append(_),
							$('#dimmerViewQRCodeBlock').show()
					}),
					(e.prototype.StopOperationConfirmation = function () {
						this.StopOperationConfirmationTimer(),
							$('#dimmerViewQRCodeBlock').empty(),
							$('#dimmerViewQRCodeBlock').hide()
					}),
					(e.prototype.IsDigitalStamp = function (e) {
						for (var t = 0; t < e.length; t++) {
							var n = e[t].infoEx
							if (
								n.publicKeyType ==
									i.EndUserConstants.EndUserCertKeyType.DSTU4145 &&
								(n.keyUsageType &
									i.EndUserConstants.EndUserKeyUsage.DigitalSignature) ==
									i.EndUserConstants.EndUserKeyUsage.DigitalSignature
							)
								return !(
									n.extKeyUsages.indexOf(
										i.EndUserConstants.EU_UA_OID_EXT_KEY_USAGE_STAMP
									) < 0 && n.extKeyUsages.indexOf('Цифрова печатка') < 0
								)
						}
					}),
					(e.prototype.GetSignAlgo = function (e) {
						switch (e) {
							case i.EndUserConstants.EndUserCertKeyType.DSTU4145:
								return p('ДСТУ 4145')
							case i.EndUserConstants.EndUserCertKeyType.RSA:
								return p('RSA')
							case i.EndUserConstants.EndUserCertKeyType.ECDSA:
								return p('ECDSA')
							default:
								return ''
						}
					}),
					(e.prototype.GetSignFileExt = function (e, t) {
						switch (t) {
							case N.CAdES:
								return '.p7s'
							case N.ASiCS:
								return '.asics'
							case N.ASiCE:
								return e.endsWith('.asice') || e.endsWith('.sce')
									? ''
									: '.asice'
							case N.PAdES:
								return ''
							case N.XAdES:
								return e.endsWith('.xml') ? '' : '.xml'
							default:
								return ''
						}
					}),
					(e.prototype.GetSignContainerType = function (e, t) {
						switch (e) {
							case i.EndUserConstants.EndUserSignContainerType.CAdES:
								switch (t) {
									case i.EndUserConstants.EndUserCAdESType.Detached:
										return p('Підпис та дані в окремих файлах (CAdES detached)')
									case i.EndUserConstants.EndUserCAdESType.Enveloped:
										return p('Підпис та дані в одному файлі (CAdES enveloped)')
									default:
										return p('Не визначено')
								}
							case i.EndUserConstants.EndUserSignContainerType.XAdES:
								switch (t) {
									case i.EndUserConstants.EndUserXAdESType.Detached:
										return p('Підпис та дані в окремих файлах (XAdES detached)')
									case i.EndUserConstants.EndUserXAdESType.Enveloping:
										return p('Підпис та дані в одному файлі (XAdES enveloping)')
									case i.EndUserConstants.EndUserXAdESType.Enveloped:
										return p('Підпис та дані в одному файлі (XAdES enveloped)')
									default:
										return p('Не визначено')
								}
							case i.EndUserConstants.EndUserSignContainerType.PAdES:
								return p('Підписаний PDF-файл (PAdES)')
							case i.EndUserConstants.EndUserSignContainerType.ASiC:
								switch (t) {
									case i.EndUserConstants.EndUserASiCType.S:
										return p('Підпис та дані в архіві (ASiC-S)')
									case i.EndUserConstants.EndUserASiCType.E:
										return p('Підпис та дані в архіві (розширений) (ASiC-E)')
									default:
										return p('Не визначено')
								}
							default:
								return p('Не визначено')
						}
					}),
					(e.prototype.GetSignFormat = function (e, t, n) {
						switch (e) {
							case i.EndUserConstants.EndUserSignContainerType.CAdES:
								return this.GetCAdESSignLevel(t)
							case i.EndUserConstants.EndUserSignContainerType.XAdES:
								return this.GetXAdESSignLevel(t)
							case i.EndUserConstants.EndUserSignContainerType.PAdES:
								return this.GetPAdESSignLevel(t)
							case i.EndUserConstants.EndUserSignContainerType.ASiC:
								switch (n) {
									case i.EndUserConstants.EndUserASiCSignType.CAdES:
										return this.GetCAdESSignLevel(t)
									case i.EndUserConstants.EndUserASiCSignType.XAdES:
										return this.GetXAdESSignLevel(t)
									default:
										return p('Не визначено')
								}
							default:
								return p('Не визначено')
						}
					}),
					(e.prototype.GetCAdESSignLevel = function (e) {
						switch (e) {
							case i.EndUserConstants.EndUserSignType.CAdES_BES:
								return p('Базовий (CAdES-BES)')
							case i.EndUserConstants.EndUserSignType.CAdES_T:
								return p('З позначкою часу від ЕП (CAdES-T)')
							case i.EndUserConstants.EndUserSignType.CAdES_C:
								return p('З посиланнями на повні дані для перевірки (CAdES-C)')
							case i.EndUserConstants.EndUserSignType.CAdES_X_Long:
								return p('З повними даними для перевірки (CAdES-X Long)')
							case i.EndUserConstants.EndUserSignType.CAdES_X_Long |
								i.EndUserConstants.EndUserSignType.CAdES_X_Long_Trusted:
								return p('З повними даними ЦСК для перевірки (CAdES-X Long)')
							default:
								return p('Не визначено')
						}
					}),
					(e.prototype.GetXAdESSignLevel = function (e) {
						switch (e) {
							case i.EndUserConstants.EndUserXAdESSignLevel.B_B:
								return p('Базовий (XAdES-B-B)')
							case i.EndUserConstants.EndUserXAdESSignLevel.B_T:
								return p('З позначкою часу від ЕП (XAdES-B-T)')
							case i.EndUserConstants.EndUserXAdESSignLevel.B_LT:
								return p('З повними даними для перевірки (XAdES-B-LT)')
							case i.EndUserConstants.EndUserXAdESSignLevel.B_LTA:
								return p(
									'З повними даними для архівного зберігання (XAdES-B-LTA)'
								)
							default:
								return p('Не визначено')
						}
					}),
					(e.prototype.GetPAdESSignLevel = function (e) {
						switch (e) {
							case i.EndUserConstants.EndUserPAdESSignLevel.B_B:
								return p('Базовий (PAdES-B-B)')
							case i.EndUserConstants.EndUserPAdESSignLevel.B_T:
								return p('З позначкою часу від ЕП (PAdES-B-T)')
							case i.EndUserConstants.EndUserPAdESSignLevel.B_LT:
								return p('З повними даними для перевірки (PAdES-B-LT)')
							case i.EndUserConstants.EndUserPAdESSignLevel.B_LTA:
								return p(
									'З повними даними для архівного зберігання (PAdES-B-LTA)'
								)
							default:
								return p('Не визначено')
						}
					}),
					(e.prototype.SignAlgoToPublicKeyType = function (e) {
						switch (e) {
							case i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311:
							case i.EndUserConstants.EndUserSignAlgo.DSTU4145WithDSTU7564:
								return i.EndUserConstants.EndUserCertKeyType.DSTU4145
							case i.EndUserConstants.EndUserSignAlgo.RSAWithSHA:
								return i.EndUserConstants.EndUserCertKeyType.RSA
							case i.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA:
								return i.EndUserConstants.EndUserCertKeyType.ECDSA
							default:
								return i.EndUserConstants.EndUserCertKeyType.Unknown
						}
					}),
					(e.prototype.SignAlgoToHashAlgo = function (e) {
						switch (e) {
							case i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311:
								return i.EndUserConstants.EndUserHashAlgo.GOST34311
							case i.EndUserConstants.EndUserSignAlgo.DSTU4145WithDSTU7564:
								return i.EndUserConstants.EndUserHashAlgo.DSTU7564_256
							case i.EndUserConstants.EndUserSignAlgo.RSAWithSHA:
							case i.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA:
								return i.EndUserConstants.EndUserHashAlgo.SHA256
							default:
								return i.EndUserConstants.EndUserHashAlgo.Unknown
						}
					}),
					(e.prototype.MakeKeyUsageWithPublicKeyType = function (e, t) {
						var n = '',
							r = []
						switch (t) {
							case i.EndUserConstants.EndUserCertKeyType.DSTU4145:
								n = p(o.TEXT_KEY_TYPE_DSTU4145)
								break
							case i.EndUserConstants.EndUserCertKeyType.RSA:
								n = p(o.TEXT_KEY_TYPE_RSA)
								break
							case i.EndUserConstants.EndUserCertKeyType.ECDSA:
								n = p(o.TEXT_KEY_TYPE_ECDSA)
						}
						return (
							(n = '' != n ? ' (' + n + ')' : ''),
							e & i.EndUserConstants.EndUserKeyUsage.DigitalSignature &&
								r.push(p(o.TEXT_KEY_USAGE_SIGN) + n),
							e & i.EndUserConstants.EndUserKeyUsage.NonRepudation &&
								r.push(p(o.TEXT_KEY_NON_REPUDATION) + n),
							e & i.EndUserConstants.EndUserKeyUsage.KeyAgreement &&
								r.push(p(o.TEXT_KEY_USAGE_ENVELOP) + n),
							r
						)
					}),
					(e.prototype.CheckPrivateKey = function (e, t, n) {
						void 0 === n && (n = !1)
						var r = this
						return new Promise(function (a, u) {
							if (n) a()
							else if (r.m_readedPKey) {
								for (
									var l = r.m_readedPKey.certificatesInfo,
										c = i.EndUserConstants.EndUserKeyUsage.Unknown,
										_ = 0;
									_ < l.length;
									_++
								) {
									var f = l[_].infoEx
									;(e != i.EndUserConstants.EndUserCertKeyType.Unknown &&
										f.publicKeyType != e) ||
										(c |= f.keyUsageType)
								}
								var E = i.EndUserConstants.EndUserKeyUsage.Unknown
								for (_ = 0; _ < t.length; _++) 0 == (c & t[_]) && (E |= t[_])
								if (E == i.EndUserConstants.EndUserKeyUsage.Unknown) a()
								else {
									var h = r.MakeKeyUsageWithPublicKeyType(E, e)
									u(
										s.format(
											p(o.ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO),
											h.join(', ')
										)
									)
								}
							} else u(p(o.ERROR_PRIVATE_KEY_NOT_READED))
						})
					}),
					(e.prototype.GetSupportedSignAlgosByKSP = function (e) {
						var t = []
						switch (e) {
							case i.EndUserConstants.EndUserKSP.Kyivstar:
								t.push(
									{
										value: i.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA,
										text: p(o.TEXT_SIGN_ALGO_ECDSA),
									},
									{
										value: i.EndUserConstants.EndUserSignAlgo.RSAWithSHA,
										text: p(o.TEXT_SIGN_ALGO_RSA),
									}
								)
								break
							default:
								t.push({
									value:
										i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311,
									text: p(o.TEXT_SIGN_ALGO_DSTU4145),
								})
						}
						return t
					}),
					(e.prototype.GetSupportedSignAlgos = function (e) {
						for (var t = [], n = 0; n < e.length; n++) {
							var r = e[n].infoEx
							if (
								(r.keyUsageType &
									i.EndUserConstants.EndUserKeyUsage.DigitalSignature) ==
									i.EndUserConstants.EndUserKeyUsage.DigitalSignature ||
								(r.keyUsageType &
									i.EndUserConstants.EndUserKeyUsage.NonRepudation) ==
									i.EndUserConstants.EndUserKeyUsage.NonRepudation
							)
								switch (r.publicKeyType) {
									case i.EndUserConstants.EndUserCertKeyType.DSTU4145:
										var s =
											r.certHashType ==
											i.EndUserConstants.EndUserCertHashType.GOST34311
												? i.EndUserConstants.EndUserSignAlgo
														.DSTU4145WithGOST34311
												: i.EndUserConstants.EndUserSignAlgo
														.DSTU4145WithDSTU7564
										t.push({
											value: s,
											text: p(o.TEXT_SIGN_ALGO_DSTU4145),
										})
										break
									case i.EndUserConstants.EndUserCertKeyType.RSA:
										t.push({
											value: i.EndUserConstants.EndUserSignAlgo.RSAWithSHA,
											text: p(o.TEXT_SIGN_ALGO_RSA),
										})
										break
									case i.EndUserConstants.EndUserCertKeyType.ECDSA:
										t.push({
											value: i.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA,
											text: p(o.TEXT_SIGN_ALGO_ECDSA),
										})
								}
						}
						if (0 == t.length && this.m_keyMediaType == w.KSP) {
							var a = parseInt($('#pkReadKSPSelect').find(':selected').val())
							t = this.GetSupportedSignAlgosByKSP(a)
						}
						return t
					}),
					(e.prototype.GetSupportedEnvelopAlgos = function (e) {
						for (var t = [], n = 0; n < e.length; n++) {
							var r = e[n].infoEx
							if (
								(r.keyUsageType &
									i.EndUserConstants.EndUserKeyUsage.KeyAgreement) ==
								i.EndUserConstants.EndUserKeyUsage.KeyAgreement
							)
								switch (r.publicKeyType) {
									case i.EndUserConstants.EndUserCertKeyType.DSTU4145:
										var o =
											r.certHashType ==
											i.EndUserConstants.EndUserCertHashType.GOST34311
												? i.EndUserConstants.EndUserSignAlgo
														.DSTU4145WithGOST34311
												: i.EndUserConstants.EndUserSignAlgo
														.DSTU4145WithDSTU7564
										t.push(o)
										break
									case i.EndUserConstants.EndUserCertKeyType.RSA:
										t.push(i.EndUserConstants.EndUserSignAlgo.RSAWithSHA)
										break
									case i.EndUserConstants.EndUserCertKeyType.ECDSA:
										t.push(i.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA)
								}
						}
						return t
					}),
					(e.prototype.GetStatisticsSignContainerType = function (e, t, n, r) {
						switch (e) {
							case N.XAdES:
								switch (n) {
									case i.EndUserConstants.EndUserXAdESType.Detached:
										return E.XAdESDetached
									case i.EndUserConstants.EndUserXAdESType.Enveloped:
										return E.XAdESEnveloped
									case i.EndUserConstants.EndUserXAdESType.Enveloping:
										return E.XAdESEnveloping
									default:
										return E.Unknown
								}
								break
							case N.PAdES:
								return E.PAdES
							case N.CAdES:
								switch (t) {
									case i.EndUserConstants.EndUserCAdESType.Detached:
										return E.CAdESDetached
									case i.EndUserConstants.EndUserCAdESType.Enveloped:
										return E.CAdESEnveloped
									default:
										return E.Unknown
								}
								break
							case N.ASiCS:
								switch (r) {
									case i.EndUserConstants.EndUserASiCSignType.CAdES:
										return E.ASiCSCAdES
									case i.EndUserConstants.EndUserASiCSignType.XAdES:
										return E.ASiCSXAdES
									default:
										return E.Unknown
								}
								break
							case N.ASiCE:
								switch (r) {
									case i.EndUserConstants.EndUserASiCSignType.CAdES:
										return E.ASiCECAdES
									case i.EndUserConstants.EndUserASiCSignType.XAdES:
										return E.ASiCEXAdES
									default:
										return E.Unknown
								}
						}
					}),
					(e.prototype.OnPKeyReaded = function (e) {
						switch (
							((this.m_readedPKey = e),
							this.ShowForm(null, !0),
							this.SetStatus(p(o.STATUS_PRIVATE_KEY_READED)),
							this.m_formType)
						) {
							case k.MakeNewCertificate:
								;(this.m_isPKActionDone = !1), this.BeginUpdateKMs()
								break
							case k.ReadPrivateKey:
								this.m_isPKActionDone = !0
								break
							case k.ViewPKeyCertificates:
								;(this.m_isPKActionDone = !0), this.SetViewPKeyInfo(e)
								break
							case k.SignFile:
								this.m_isPKActionDone = !0
								var t = this.GetSupportedSignAlgos(e.certificatesInfo)
								if (0 == t.length) {
									var n = s.format(
										p(o.ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO),
										p(o.TEXT_KEY_USAGE_SIGN),
										''
									)
									return void this.SetError(n)
								}
								var r = $('#signAlgoSelect')
								r.empty(),
									$.each(t, function (e, n) {
										r.append(
											$('<option/>', {
												value: t[e].value,
												text: t[e].text,
											})
										)
									}),
									this.ShowForm(
										this.m_showSignTip ? '#preSignBlock' : '#signBlock',
										!1
									)
								break
							case k.MakeDeviceCertificate:
								this.m_isPKActionDone = !1
						}
					}),
					(e.prototype.PostMessage = function (e, t, n, r) {
						var o = null
						n &&
							((o = n),
							(void 0 !== n.code && void 0 !== n.message) ||
								(o = {
									code: i.EndUserError.EU_ERROR_UNKNOWN,
									message: n.toString(),
								}))
						var s = {
							sender: 'EndUserSignWidget',
							reciever: 'EndUserSignWidgetConnector',
							id: t,
							error: o,
							result: r,
						}
						null == e && (e = parent), e.postMessage(s, this.m_mainPageOrigin)
					}),
					(e.prototype.OnValidateInput = function (e, t, n, r, i, o) {
						if (t || n || r) return !1
						return (
							[8, 46, 37, 39].indexOf(e) > -1 ||
							o.indexOf(e) > -1 ||
							i.indexOf(String.fromCharCode(e)) > -1
						)
					}),
					(e.prototype.OnReceiveMessage = function (e) {
						var t = this
						if (
							(t.WriteLog('Recieve event:'),
							t.WriteLog('event:' + e),
							t.WriteLog('origin:' + e.origin),
							e.origin == t.m_mainPageOrigin &&
								void 0 !== e.data.id &&
								void 0 !== e.data.cmd &&
								'EndUserSignWidgetConnector' == e.data.sender &&
								'EndUserSignWidget' == e.data.reciever &&
								-1 != b.indexOf(e.data.cmd))
						) {
							t.WriteLog('Event data'),
								t.WriteLog('id:' + e.data.id),
								t.WriteLog('cmd:' + e.data.cmd),
								t.WriteLog('params:' + e.data.params)
							try {
								t[e.data.cmd]
									.apply(t, e.data.params)
									.then(function (n) {
										t.PostMessage(e.source, e.data.id, null, n)
									})
									.catch(function (n) {
										t.PostMessage(e.source, e.data.id, n, null)
									})
							} catch (n) {
								t.PostMessage(e.source, e.data.id, n, null),
									t.WriteLog('Error: ' + n)
							}
						}
					}),
					(e.prototype.OnChangeLibraryType = function (e) {
						var t = this,
							n = t.GetPreSelectMenuId(),
							r =
								'#pkTypeBaseMenuItem' == n
									? parseInt(
											$('#pkTypesBlock').find('button[selected]').attr('value')
									  )
									: '#pkTypeDIIAUAMenuItem' == n
									? w.DIIA_UA
									: w.DIIA_EU
						;(t.m_keyMediaType = r), t.SetStorageItem('KeyMediaType', r)
						var s = null
						switch (t.m_formType) {
							case k.ReadPrivateKey:
							case k.SignFile:
							case k.ViewPKeyCertificates:
							case k.MakeDeviceCertificate:
								switch (r) {
									case w.File:
										s = '#pkReadFileBlock'
										break
									case w.Hardware:
										s = '#pkReadKMBlock'
										break
									case w.KSP:
										s = '#pkReadKSPBlock'
										break
									case w.DIIA_EU:
									case w.DIIA_UA:
										s = '#pkReadDIIABlock'
								}
								break
							case k.MakeNewCertificate:
								s =
									r == w.Hardware
										? null == t.m_readedPKey
											? '#pkReadKMBlock'
											: '#pkWriteKMBlock'
										: null == t.m_readedPKey
										? '#pkReadFileBlock'
										: '#pkWriteFileBlock'
						}
						t.ShowForm(s, !1)
						var a = t.GetCurrentLibrary()
						if (null == a.GetInfo())
							return (
								t.ShowDimmerView(p(o.PROCESS_STATUS_LOAD_LIBRARY)),
								void t.LoadLibrary(e)
							)
						if ((t.CloseDimmerView(), !a.IsSupported()))
							return (
								t.HideForm('#pkBlock'),
								void t.SetError(p(o.ERROR_LIBRARY_NOT_SUPPORTED))
							)
						if (!a.IsLoaded()) {
							if (a.GetType() != i.EndUserConstants.EU_LIBRARY_TYPE_SW)
								return (
									t.HideForm('#pkBlock'),
									void t.SetError(p(o.ERROR_LIBRARY_NOT_LOADED))
								)
							var u = a.GetInfo()
							$('#installLabel').text(
								u.isNativeLibraryNeedUpdate
									? p(o.TEXT_LIBRARY_NEED_UPDATE)
									: p(o.TEXT_LIBRARY_NEED_INSTALL)
							)
							var l = u.isNativeLibraryNeedUpdate
									? p(o.TEXT_LIBRARY_UPDATE)
									: p(o.TEXT_LIBRARY_INSTALL),
								c = u.nativeLibraryInstallURL
							return (
								!u.isWebExtensionSupported ||
									u.isWebExtensionInstalled ||
									u.isNativeLibraryNeedUpdate ||
									((l = p(o.TEXT_LIBRARY_WEB_EXTENSION_INSTALL)),
									(c = u.webExtensionInstallURL)),
								$('#installURL').text(l),
								$('#installURL').attr('href', c),
								$('#installHelpURL').text(p(o.TEXT_LIBRARY_USER_MANUAL)),
								$('#installHelpURL').attr('href', u.helpURL),
								t.ShowForm('#installBlock', !1),
								void setTimeout(function () {
									t.LoadLibrary(e)
								}, 500)
							)
						}
						var _ = {
							isInitialized: !1,
						}
						a.GetLibrary()
							.IsInitialized()
							.then(function (e) {
								return (
									(_.isInitialized = e),
									_.isInitialized
										? null
										: (t.ShowDimmerView(p(o.PROCESS_STATUS_INITIALIZE_LIBRARY)),
										  a.GetLibrary().Initialize(I({}, LIBRARY_SETTINGS)))
								)
							})
							.then(function () {
								return _.isInitialized
									? null
									: a.GetLibrary().SetRuntimeParameter('StringEncoding', 65001)
							})
							.then(function () {
								return a.GetLibrary().GetCAs()
							})
							.then(function (n) {
								t.SetCAs(n), t.CloseDimmerView(), t.BeginUpdateKMs(), e && e()
							})
							.catch(function (e) {
								t.CloseDimmerView(),
									t.HideForm('#pkTypesBlock'),
									t.HideForm('#pkBlock'),
									t.SetError(p(o.ERROR_LIBRARY_INITIALIZE), e)
							})
					}),
					(e.prototype.OnSelectCA = function () {
						var e = this.GetSelectedCA(),
							t =
								this.m_keyMediaType == w.Hardware
									? $('#pkReadKMCertsBlock')
									: $('#pkReadFileCertsBlock')
						!e || e.cmpAddress || e.certsInKey ? t.hide() : t.show()
					}),
					(e.prototype.OnSelectPKeyFile = function (e) {
						var t = this,
							n = e && 1 == e.length,
							r = n ? e[0].name : '',
							i = t.GetFileExtension(r)
						if (
							($('#pkReadFilePasswordTextField').prop('disabled', !n),
							$('#pkReadFileButton').attr('disabled', !n),
							$('#pkReadFileSelectCertsDropZone').prop('disabled', !n),
							$('#pkReadFileSelectCertsChangeButton').attr('disabled', !n),
							$('#pkReadFileButton').attr('disabled', !n),
							n
								? ($('#pkReadFileSelectFileCenterBlock').hide(),
								  $('#pkReadFileSelectFileSelectedCenterBlock').show())
								: ($('#pkReadFilePasswordTextField').val(''),
								  $('#pkReadFilePasswordTextField').change(),
								  $('#pkReadFileSelectFileCenterBlock').show(),
								  $('#pkReadFileSelectFileSelectedCenterBlock').hide(),
								  $('#pkReadFileCertsBlock').hide(),
								  $('#pkReadFileCertsInput').val(''),
								  $('#pkReadFileSelectCertsCenterBlock').show(),
								  $('#pkReadFileSelectCertsSelectedList').empty(),
								  $('#pkReadFileSelectCertsSelectedCenterBlock').hide()),
							$('#pkReadFileSelectFileTextField').text(r),
							$('#pkReadFileSelectFileTextField').change(),
							n && 'jks' == i)
						) {
							var s = $('#pkReadFileAliasSelect')
							s.empty(),
								t
									.ReadFile(e[0])
									.then(function (e) {
										return t
											.GetCurrentLibrary()
											.GetLibrary()
											.GetJKSPrivateKeys(e.data)
									})
									.then(function (e) {
										0 != e.length &&
											($.each(e, function (n, r) {
												var i = t.FilterUserCertificates(e[n].certificates)
												s.append(
													$('<option/>', {
														value: e[n].alias,
														text: e[n].alias + '(' + i[0].infoEx.subjCN + ')',
													})
												)
											}),
											s.prop('disabled', !1),
											$('#pkReadFileSelectAliasBlock').show())
									})
									.catch(function (e) {
										t.SetError(p(o.ERROR_GET_JKS_PRIVATE_KEY_INFO), e)
									})
						} else
							$('#pkReadFileSelectAliasBlock').hide(),
								$('#pkReadFileAliasSelect').empty()
					}),
					(e.prototype.OnKMSelectChange = function () {
						var e = this.GetSelectedKM(),
							t = this.GetKMUserTextField(),
							n = this.GetKMUserBlock()
						null != e && this.IsKMMultiKeyDevice(e)
							? (n.show(), t.prop('disabled', !1))
							: (t.val(''), n.hide())
					}),
					(e.prototype.OnSelectPKeyCertificates = function (e, t, n, r) {
						if (($(n).empty(), r && r.length > 0)) {
							$(e).hide(), $(t).show()
							for (var i = 0; i < r.length; i++)
								$(n).append('<li>' + this.SanitizeHTML(r[i].name) + '</li>')
						} else $(e).show(), $(t).hide()
					}),
					(e.prototype.OnSelectTechnicalCertRequest = function (e, t) {
						var n = ''
						t && t.length > 0 && (n = t[0].name), $(e).val(n)
					}),
					(e.prototype.OnReadKSPSelectChange = function () {
						var e = this.GetSelectedKSPSettigs(),
							t = parseInt($('#pkReadKSPSelect').find(':selected').val()),
							n =
								t != i.EndUserConstants.EndUserKSP.IIT ||
								(void 0 !== e.clientIdType &&
									e.clientIdType !=
										i.EndUserConstants.EndUserKSPClientIdType.Default)
									? 'none'
									: 'uppercase'
						$('#pkReadKSPUserIdTextField').css('text-transform', n)
						var r = !0
						switch (t) {
							case i.EndUserConstants.EndUserKSP.PB:
								r = !e.confirmationURL
								break
							case i.EndUserConstants.EndUserKSP.DIIA:
								r = !1
								break
							default:
								r = !0
						}
						r
							? $('#pkReadKSPUserIdBlock').show()
							: $('#pkReadKSPUserIdBlock').hide(),
							$('#pkReadKSPUserIdTextField').val(r ? '' : this.MakeUserId()),
							$('#pkReadKSPUserIdTextField').change(),
							this.OnReadKSPUserIdTextFieldChange()
					}),
					(e.prototype.OnReadKSPUserIdTextFieldChange = function () {
						var e = '' == $('#pkReadKSPUserIdTextField').val()
						$('#pkReadKSPButton').attr('disabled', e)
					}),
					(e.prototype.OnWriteFileTextFieldChange = function () {
						var e = '' == $('#pkWriteFileTextField').val()
						$('#pkWriteFilePasswordTextField').prop('disabled', e),
							$('#pkWriteFilePasswordConfirmTextField').prop('disabled', e),
							$('#pkWriteFileButton').attr('disabled', e),
							e &&
								($('#pkWriteFilePasswordTextField').val(''),
								$('#pkWriteFilePasswordTextField').change(),
								$('#pkWriteFilePasswordConfirmTextField').val(''),
								$('#pkWriteFilePasswordConfirmTextField').change())
					}),
					(e.prototype.OnChangeSignFile = function () {
						var e = parseInt(
								$("input[type='radio'][name=signTypesRadio]:checked").val()
							),
							t = parseInt($('#signTypeCAdESSelect').val()),
							n = $('#signFilesInput').prop('files'),
							r = this.GetFilesSize(n)
						if (n.length >= 1) {
							if ((this.SetError(null), r <= 0))
								return void this.SetError(p(o.ERROR_FILE_EMPTY))
							if (
								(e != N.CAdES ||
									(e == N.CAdES &&
										t != i.EndUserConstants.EndUserCAdESType.Detached)) &&
								r >= MAX_FILE_SIZE
							)
								return void this.SetError(p(o.ERROR_FILE_TO_BIG))
							if (n.length > 1 && e != N.ASiCE)
								return void this.SetError(
									p(o.ERROR_SIGN_MULTIPLE_FILES_NOT_SUPPORTED)
								)
						}
					}),
					(e.prototype.OnChangeSignType = function () {
						var e = parseInt(
							$("input[type='radio'][name=signTypesRadio]:checked").val()
						)
						e == N.ASiCS || e == N.ASiCE
							? $('#signTypeASiCBlock').show()
							: $('#signTypeASiCBlock').hide(),
							e == N.CAdES
								? $('#signTypeCAdESBlock').show()
								: $('#signTypeCAdESBlock').hide(),
							e == N.XAdES
								? $('#signTypeXAdESBlock').show()
								: $('#signTypeXAdESBlock').hide(),
							this.OnChangeASiCType(),
							this.OnChangeSignFile()
					}),
					(e.prototype.OnChangeASiCType = function () {
						var e = parseInt($('#signTypeASiCSelect').val()),
							t = parseInt(
								$("input[type='radio'][name=signTypesRadio]:checked").val()
							)
						t == N.PAdES
							? ($('#signFormatPAdESBlock').show(),
							  $('#signFormatCAdESBlock').hide(),
							  $('#signFormatXAdESBlock').hide())
							: t == N.CAdES ||
							  ((t == N.ASiCS || t == N.ASiCE) &&
									e == i.EndUserConstants.EndUserASiCSignType.CAdES)
							? ($('#signFormatCAdESBlock').show(),
							  $('#signFormatXAdESBlock').hide(),
							  $('#signFormatPAdESBlock').hide())
							: ($('#signFormatCAdESBlock').hide(),
							  $('#signFormatXAdESBlock').show(),
							  $('#signFormatPAdESBlock').hide())
					}),
					(e.prototype.OnSelectSignFile = function (e) {
						var t = e && e.length >= 1
						this.SetError(null), $('#signFilesSelectedList').empty()
						for (var n = 0; n < e.length; n++)
							$('#signFilesSelectedList').append(
								'<li>' + this.SanitizeHTML(e[n].name) + '</li>'
							)
						t
							? ($('#signFilesSelectBlock').hide(),
							  $('#signFilesSelectedBlock').show())
							: ($('#signFilesSelectBlock').show(),
							  $('#signFilesSelectedBlock').hide()),
							this.OnChangeSignFile(),
							$('#signButton').attr('disabled', !t)
					}),
					(e.prototype.OnSetProxy = function () {
						var e = this
						e.GetCurrentLibrary()
							.GetLibrary()
							.GetProxySettings()
							.then(function (t) {
								$('#proxyUseCheckbox').prop('checked', t.useProxy),
									$('#proxyAddressTextField').val(t.address),
									$('#proxyAddressTextField').change(),
									$('#proxyPortTextField').val(t.port),
									$('#proxyPortTextField').change(),
									$('#proxyAuthCheckbox').prop('checked', !t.anonymous),
									$('#proxyUserTextField').val(t.user),
									$('#proxyUserTextField').change(),
									$('#proxyPasswordTextField').val(t.password),
									$('#proxyPasswordTextField').change(),
									e.ShowForm('#proxySettingsBlock', !1),
									e.OnUseProxy()
							})
							.catch(function (t) {
								e.SetError(p(o.ERROR_GET_PROXY_SETTINGS), t)
							})
					}),
					(e.prototype.OnUseProxy = function () {
						var e = $('#proxyUseCheckbox').prop('checked')
						$('#proxyAddressTextField').prop('disabled', !e),
							$('#proxyPortTextField').prop('disabled', !e),
							$('#proxyAuthCheckbox').prop('disabled', !e),
							this.OnAuthProxy()
					}),
					(e.prototype.OnAuthProxy = function () {
						var e =
							$('#proxyAuthCheckbox').prop('checked') &&
							!$('#proxyAuthCheckbox').prop('disabled')
						$('#proxyUserTextField').prop('disabled', !e),
							$('#proxyPasswordTextField').prop('disabled', !e)
					}),
					(e.prototype.OnSaveProxy = function () {
						var e = this,
							t = e.GetProxySettings()
						null != t &&
							(e.SetError(''),
							e.ShowDimmerView(p(o.PROCESS_STATUS_SAVE_PROXY_SETTINGS)),
							e
								.GetCurrentLibrary()
								.GetLibrary()
								.SetProxySettings(t)
								.then(function () {
									e.OnHideProxy(), e.CloseDimmerView()
								})
								.catch(function (t) {
									e.CloseDimmerView(),
										e.SetError(p(o.ERROR_SET_PROXY_SETTINGS), t)
								}))
					}),
					(e.prototype.OnHideProxy = function () {
						this.OnChangeLibraryType()
					}),
					(e.prototype.OnResetPKey = function () {
						var e = this,
							t = e.GetCurrentLibrary()
						;(e.m_readedPKey = null),
							t
								.GetLibrary()
								.ResetPrivateKey()
								.then(function () {
									'#pkTypeDIIAUAMenuItem' == e.GetPreSelectMenuId() ||
									'#pkTypeDIIAEUMenuItem' == e.GetPreSelectMenuId()
										? e.OnReadPKeyCancel()
										: e.OnChangeLibraryType()
								})
								.catch(function () {
									'#pkTypeDIIAUAMenuItem' == e.GetPreSelectMenuId() ||
									'#pkTypeDIIAEUMenuItem' == e.GetPreSelectMenuId()
										? e.OnReadPKeyCancel()
										: e.OnChangeLibraryType()
								})
					}),
					(e.prototype.OnReadPKey = function (e) {
						var t = this,
							n = t.GetCurrentLibrary()
						if ((t.SetError(''), t.m_isPKActionDone || null != t.m_readedPKey))
							t.OnResetPKey()
						else {
							var r = e ? $('#pkReadFileAliasSelect') : null,
								a = e
									? $('#pkReadFilePasswordTextField')
									: $('#pkReadKMPasswordTextField'),
								u = e ? null : $('#pkReadKMUserTextField'),
								l = e ? $('#pkReadFileCertsInput') : $('#pkReadKMCertsInput'),
								c = e ? $('#pkReadFileCertsBlock') : $('#pkReadKMCertsBlock'),
								_ = e ? null : t.GetSelectedKM(),
								f = e ? $('#pkReadFileInput').prop('files')[0] : null,
								E = e && 'jks' == t.GetFileExtension(f.name),
								h = E ? r.val() : null,
								S = new Array(),
								d = a.val(),
								y = t.GetSelectedCA(),
								C = null != y ? y.issuerCNs[0] : null
							if (u && u.is(':visible') && '' == u.val())
								return u.focus(), void t.SetError(p(o.ERROR_USER_NOT_SET))
							if ('' == d)
								return a.focus(), void t.SetError(p(o.ERROR_PASSWORD_NOT_SET))
							if (c.is(':visible') && 0 == (S = l.prop('files')).length)
								t.SetError(p(o.ERROR_CERTIFICATES_NOT_SELECTED))
							else {
								t.ShowDimmerView(p(o.PROCESS_STATUS_READ_PRIVATE_KEY)),
									t.StopUpdateKMs()
								var T = new K()
								;(T.keyMedia = _),
									(T.alias = h),
									(T.password = d),
									t
										.ReadFiles(S)
										.then(function (e) {
											var n = Array()
											if (e)
												for (var r = 0; r < e.length; r++) n.push(e[r].data)
											return (T.certificates = n), f ? t.ReadFile(f) : null
										})
										.then(function (e) {
											return (
												(T.file = e),
												E ? n.GetLibrary().GetJKSPrivateKeys(e.data) : null
											)
										})
										.then(function (r) {
											var i = e ? T.file.data : null
											if (E && e && 0 != r.length)
												for (var o = 0; o < r.length; o++)
													if (r[o].alias == h) {
														i = r[o].privateKey
														for (
															var s = t.FilterUserCertificates(
																	r[o].certificates
																),
																a = 0;
															a < s.length;
															a++
														)
															T.certificates.push(s[a].data)
														break
													}
											return e
												? n
														.GetLibrary()
														.ReadPrivateKeyBinary(
															i,
															T.password,
															T.certificates,
															C
														)
												: n
														.GetLibrary()
														.ReadPrivateKey(T.keyMedia, T.certificates, C)
										})
										.then(function (e) {
											return (
												t.SetSelectedCA(e.issuerCN),
												n.GetLibrary().GetOwnCertificates()
											)
										})
										.then(function (e) {
											t.IsQualifiedCertificates(e) ||
											LIBRARY_SETTINGS.supportAdvancedCertificates
												? ((T.certificatesInfo = e),
												  t.SetViewPKeyInfo(T),
												  t.CloseDimmerView())
												: n
														.GetLibrary()
														.ResetPrivateKey()
														.then(function () {
															t.BeginUpdateKMs(), t.CloseDimmerView()
															var n = s.format(
																p(o.ERROR_USE_ADVANCED_CERTS_UNSUPPORTED),
																e[0].infoEx.issuerCN
															)
															t.SetError(n)
														})
														.catch(function (e) {
															throw e
														})
										})
										.catch(function (n) {
											var r = p(o.ERROR_READ_PRIVATE_KEY)
											if (n.code == i.EndUserError.EU_ERROR_CERT_NOT_FOUND) {
												var a = e
													? '#pkReadFileCertsBlock'
													: '#pkReadKMCertsBlock'
												t.m_formType == k.MakeNewCertificate
													? ((r = p(o.ERROR_MAKE_NEW_CERTIFICATE)),
													  (n = s.format(
															p(o.ERROR_MAKE_NEW_CERTIFICATE_INVALID_CA),
															C
													  )))
													: ((n =
															null == y
																? p(o.ERROR_READ_PRIVATE_KEY_CA_AUTO_DETECT)
																: s.format(
																		y.cmpAddress
																			? p(o.ERROR_READ_PRIVATE_KEY_INVALID_CA)
																			: p(
																					o.ERROR_READ_PRIVATE_NEED_CERTIFICATE
																			  ),
																		C
																  )),
													  null == y || y.cmpAddress || $(a).show())
											}
											t.BeginUpdateKMs(), t.CloseDimmerView(), t.SetError(r, n)
										})
							}
						}
					}),
					(e.prototype.OnReadPKeyKSP = function () {
						var e = this,
							t = e.GetCurrentLibrary()
						if ((e.SetError(''), e.m_isPKActionDone || null != e.m_readedPKey))
							e.OnResetPKey()
						else {
							var n = 0,
								r = null,
								a = null,
								u = 0,
								l = null,
								c = LIBRARY_SETTINGS.KSPs
							switch (e.m_keyMediaType) {
								case w.KSP:
									if (
										((n = parseInt(
											$('#pkReadKSPSelect').find(':selected').val()
										)),
										(r = $('#pkReadKSPSelect').find(':selected').text()),
										!(a = $('#pkReadKSPUserIdTextField').val()))
									)
										return (
											$('#pkReadKSPUserIdTextField').focus(),
											void e.SetError(p(o.ERROR_USER_ID_NOT_SET_OR_INVALID))
										)
									break
								case w.DIIA_UA:
								case w.DIIA_EU:
									;(n = i.EndUserConstants.EndUserKSP.DIIA),
										(r = c.filter(function (e) {
											return e.ksp == i.EndUserConstants.EU_KSP_DIIA
										})[0].name),
										(a = ''),
										(u =
											e.m_keyMediaType == w.DIIA_UA
												? i.EndUserConstants.EndUserSignAlgo
														.DSTU4145WithGOST34311
												: i.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA)
									break
								default:
									return
							}
							e.ShowDimmerView(p(o.PROCESS_STATUS_READ_PRIVATE_KEY)),
								e.StopUpdateKMs()
							for (var _ = 0; _ < c.length; _++)
								if (c[_].name == r) {
									for (var f = 0; f < e.m_CAs.length; f++)
										if (e.m_CAs[f].codeEDRPOU == c[_].codeEDRPOU) {
											l = e.m_CAs[f].issuerCNs[0]
											break
										}
									break
								}
							var E = new K()
							;(E.keyMedia = null),
								(E.password = null),
								(E.kspKey = new G(n, r, a, u, l)),
								t
									.GetLibrary()
									.ReadPrivateKeyKSP(
										E.kspKey.userId,
										E.kspKey.GetKSPId(),
										!0,
										E.kspKey.keyId
									)
									.then(function (e) {
										return null != e ||
											confirm(p(o.CONFIRM_CONTINUE_WITHOUT_PKEY_READED))
											? t.GetLibrary().GetOwnCertificates()
											: null
									})
									.then(function (n) {
										if (!n)
											return (
												e.BeginUpdateKMs(), t.GetLibrary().ResetPrivateKey()
											)
										e.IsQualifiedCertificates(n) ||
										LIBRARY_SETTINGS.supportAdvancedCertificates
											? ((E.certificatesInfo = n), e.SetViewPKeyInfo(E))
											: t
													.GetLibrary()
													.ResetPrivateKey()
													.then(function () {
														e.BeginUpdateKMs(),
															e.CloseDimmerView(),
															e.StopOperationConfirmation()
														var t = s.format(
															p(o.ERROR_USE_ADVANCED_CERTS_UNSUPPORTED),
															n[0].infoEx.issuerCN
														)
														e.SetError(t)
													})
													.catch(function (e) {
														throw e
													})
									})
									.then(function () {
										e.CloseDimmerView(), e.StopOperationConfirmation()
									})
									.catch(function (t) {
										e.BeginUpdateKMs(),
											e.CloseDimmerView(),
											e.StopOperationConfirmation(),
											e.SetError(p(o.ERROR_READ_PRIVATE_KEY), t)
									})
						}
					}),
					(e.prototype.OnReadPKeyCancel = function () {
						this.ShowForm('#pkTypesPreSelectBlock', !1)
					}),
					(e.prototype.OnWritePKey = function (e) {
						var t = this,
							n = t.GetCurrentLibrary()
						if ((t.SetError(''), t.m_isPKActionDone)) t.OnResetPKey()
						else {
							var r = e ? null : $('#pkWriteKMUserTextField'),
								a = e
									? $('#pkWriteFilePasswordTextField')
									: $('#pkWriteKMPasswordTextField'),
								u = e
									? $('#pkWriteFilePasswordConfirmTextField')
									: $('#pkWriteKMPasswordConfirmTextField'),
								l = e ? $('#pkWriteFileTextField').val() : null,
								c = a.val(),
								_ = u.val(),
								f = null,
								E = t.GetSelectedCA(),
								h = null != E ? E.issuerCNs[0] : null,
								S = LIBRARY_SETTINGS.passwordRequirements
									? new RegExp(LIBRARY_SETTINGS.passwordRequirements, 'g')
									: null
							if (
								(e ||
									(t.m_noNewKMOnMakeNewCertificate &&
									null != t.m_readedPKey.keyMedia
										? ((f = new i.EndUserKeyMedia(
												t.m_readedPKey.keyMedia
										  )).password = c)
										: (f = t.GetSelectedKM())),
								e && '' == l)
							)
								return (
									$('#pkWriteFileTextField').focus(),
									void t.SetError(p(o.ERROR_NEW_PK_FILE_NAME_NOT_SET))
								)
							if (r && r.is(':visible') && '' == r.val())
								return r.focus(), void t.SetError(p(o.ERROR_USER_NOT_SET))
							if ('' == c)
								return (
									$(a).focus(), void t.SetError(p(o.ERROR_NEW_PASSWORD_NOT_SET))
								)
							if ('' == _)
								return (
									$(u).focus(),
									void t.SetError(p(o.ERROR_CONFIRM_NEW_PASSWORD_NOT_SET))
								)
							if (c != _)
								return (
									$(u).focus(),
									void t.SetError(p(o.ERROR_NEW_PASSWORD_AND_CONFIRM_NOT_EQUAL))
								)
							var d = null != t.m_readedPKey.keyMedia,
								y = t.m_keyMediaType == w.Hardware,
								C = d
									? t.m_readedPKey.keyMedia.password
									: t.m_readedPKey.password
							!S || (c != C && S.test(c))
								? (t.ShowDimmerView(p(o.PROCESS_STATUS_MAKE_NEW_CERTIFICATE)),
								  t.StopUpdateKMs(),
								  (d || y) &&
										(n =
											this.m_libraries[i.EndUserConstants.EU_LIBRARY_TYPE_SW]),
								  n
										.GetLibrary()
										.IsInitialized()
										.then(function () {
											return t.m_euParams && t.m_noNewKMOnMakeNewCertificate
												? n.GetLibrary().GetOwnEUserParams()
												: null
										})
										.then(function (e) {
											return (
												e
													? ((e.EMail = t.m_euParams.EMail),
													  (e.phone = t.m_euParams.phone))
													: (e = t.m_euParams ? t.m_euParams : null),
												n
													.GetLibrary()
													.MakeNewCertificate(
														d ? t.m_readedPKey.keyMedia : null,
														d ? null : t.m_readedPKey.file.data,
														d ? null : t.m_readedPKey.password,
														i.EndUserConstants.EndUserKeysType
															.DSTUAndECDHWithGOST,
														i.EndUserConstants.EU_KEYS_LENGTH_DS_UA_CERT,
														!1,
														i.EndUserConstants.EU_KEYS_LENGTH_KEP_UA_CERT,
														null,
														i.EndUserConstants.EU_KEYS_TYPE_NONE,
														0,
														null,
														y ? f : null,
														y ? null : c,
														h,
														e,
														t.m_noNewKMOnMakeNewCertificate && d
													)
											)
										})
										.then(function (e) {
											null != e.key && t.SaveFile(l, e.key)
											var n = p(o.STATUS_NEW_CERTIFICATE_MADE)
											y ||
												(n +=
													'. ' +
													s.format(p(o.STATUS_RESULT_SAVED_TO_DOWNLOADS), l)),
												(t.m_isPKActionDone = !0),
												(t.m_readedPKey = null),
												t.ShowForm('#resultBlock', !0),
												t.SetStatus(n, !1),
												t.SetPKMakeNewCertificatesResult(l, e.key, e.certs),
												t.CloseDimmerView()
										})
										.catch(function (e) {
											t.BeginUpdateKMs(),
												t.SetError(p(o.ERROR_MAKE_NEW_CERTIFICATE), e),
												t.CloseDimmerView()
										}))
								: t.SetError(p(o.ERROR_NEW_PASSWORD_NOT_MATCH_REQUIREMENTS))
						}
					}),
					(e.prototype.OnMakeDeviceCert = function () {
						var e = this,
							t = e.GetCurrentLibrary()
						e.SetError('')
						var n = $('#makeTechnicalCertDeviceNameTextField').val(),
							r = $('#makeTechnicalCertEUFileInput').prop('files')[0],
							i = $('#makeTechnicalCertEUFileTextField').val(),
							s = $('#makeTechnicalCertEUKEPFileInput').prop('files')[0],
							a = $('#makeTechnicalCertEUKEPFileTextField').val()
						if ('' == n)
							return (
								$('#makeTechnicalCertDeviceNameTextField').focus(),
								void e.SetError(
									p(o.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_NOT_SET)
								)
							)
						if (e.m_deviceCertParams && e.m_deviceCertParams.subjCN) {
							var u = e.m_deviceCertParams.subjCN,
								l = u.template,
								c = u.requirement
							if ((l && (n = l.replace('%s', n)), c))
								if (
									((c = l ? l.replace('%s', c) : c),
									!new RegExp(c, 'g').test(n))
								)
									return (
										$('#makeTechnicalCertDeviceNameTextField').focus(),
										void e.SetError(
											p(o.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_INVALID)
										)
									)
						}
						if ('' == i)
							return (
								$('#makeTechnicalCertEUFileTextField').focus(),
								void e.SetError(
									p(o.ERROR_TECHNICAL_EU_CERTS_REQUEST_FILE_NOT_SET)
								)
							)
						if ('' == a)
							return (
								$('#makeTechnicalCertEUKEPFileInput').focus(),
								void e.SetError(
									p(o.ERROR_TECHNICAL_EU_KEP_CERTS_REQUEST_FILE_NOT_SET)
								)
							)
						e.ShowDimmerView(p(o.PROCESS_STATUS_MAKE_TECHNICAL_CERTS))
						var _ = {
							euRequest: null,
							euKEPRequest: null,
						}
						e.ReadFile(r)
							.then(function (t) {
								return (_.euRequest = t.data), e.ReadFile(s)
							})
							.then(function (e) {
								return (
									(_.euKEPRequest = e.data),
									t
										.GetLibrary()
										.MakeDeviceCertificate(
											n,
											_.euRequest,
											_.euKEPRequest,
											null,
											null
										)
								)
							})
							.then(function (t) {
								e.SetMakeDeviceCertificateResult(t),
									e.ShowForm('#resultBlock', !0),
									e.CloseDimmerView(),
									e.StopOperationConfirmation(),
									(e.m_isPKActionDone = !0)
							})
							.catch(function (t) {
								e.CloseDimmerView(),
									e.StopOperationConfirmation(),
									e.SetError(p(o.ERROR_MAKE_TECHNICAL_CERTS), t)
							})
					}),
					(e.prototype.OnMakeDeviceCertCancel = function () {
						this.m_showPKInfo && this.m_readedPKey.certificatesInfo.length > 0
							? this.ShowForm('#pkInfoBlock', !1)
							: this.OnResetPKey()
					}),
					//!!!!
					(e.prototype.makeFileDownloadHTML = function (e, t, n, r) {
						return (
							'<div id="' +
							e +
							'" class="Block ColorBorder"><div class="FileIcon"></div><div class="FileContent"><h2>' +
							this.SanitizeHTML(t) +
							'</h2><label class="TextSmall TextLight">' +
							this.SanitizeHTML(n) +
							'</label><label  class="TextSmall TextLight">' +
							r +
							'</label></div><div class="DownloadIcon"></div></div>'
						)
					}),
					(e.prototype.getFileExtension = function (e) {
						var t = e.lastIndexOf('.')
						return t <= 0 ? '' : e.substr(t + 1, e.length - 1)
					}),
					(e.prototype.removeFileExtension = function (e) {
						var t = e.lastIndexOf('.')
						return t <= 0 ? e : e.substr(0, t)
					}),
					(e.prototype.makeSignReportData = function (e) {
						// console.log('e.signFile', e.signFile)
						if (e.signFile.data.length) {
							isDocumentSignedSuccess = true
							const base64String = uint8ToBase64(e.signFile.data)
							// console.log('base64String', base64String)
							sendSignedDataToParent(base64String)
						}
						for (
							var t = new Date(),
								n = p(
									'Підпис створено та перевірено успішно. Цілісність даних підтверджено'
								),
								r = e.signFile.name,
								i = m.formatFileSize(e.signFile.size),
								o = this.makeFileDownloadHTML(
									'saveSignFileButton',
									p('Файл з підписом'),
									r,
									i
								),
								s = [],
								a = 0;
							a < e.files.length;
							a++
						)
							s.push({
								fileName: e.files[a].name,
								fileSize: m.formatFileSize(e.files[a].size),
							})
						var u =
								1 == e.files.length
									? e.files[0].name
									: this.removeFileExtension(e.signFile.name) + '.zip',
							l = m.formatFileSize(this.GetFilesSize(e.files)),
							c = this.makeFileDownloadHTML(
								'saveDataFileButton',
								p('Файл(и) без підпису'),
								u,
								l
							),
							_ = this.removeFileExtension(u) + '_Validation_Report.pdf',
							f = this.makeFileDownloadHTML(
								'saveReportFileButton',
								p(
									'Протокол створення та перевірки кваліфікованого електронного підпису від '
								) + m.formatDate(t, 'dd.MM.yyyy'),
								_,
								'__validation__report__size__'
							),
							E = r + '.zip',
							h = [],
							S = e.signsInfos,
							d = 1,
							y = 1,
							C = !(1 == S.length && 1 == S[0].length),
							T = {
								id: 'none',
								value: null,
							},
							A = {
								id: 'none',
								value: null,
							}
						for (a = 0; a < S.length; a++)
							for (var R = 0; R < S[a].length; R++) {
								var g,
									P,
									I,
									U,
									O = S[a][R],
									b = O.signTimeInfo,
									D = O.signerInfo,
									k = O.isDigitalStamp
										? p('Електронна печатка')
										: p('Підписувач')
								C && (k += ' - ' + (O.isDigitalStamp ? y : d)),
									(D.subjCN = {
										title: k,
										value: D.subjCN,
									}),
									(D.subjCountry = v.getCountryName(
										LIBRARY_SETTINGS.language,
										D.subjCountry
									)),
									b.isTimeAvail || b.isSignTimeStampAvail
										? b.isSignTimeStampAvail
											? ((g = 'signTimeStamp'), (P = b.signTimeStamp))
											: ((g = b.isTimeStamp ? 'timeStamp' : 'time'),
											  (P = b.time))
										: ((g = 'none'), (P = p('Відсутній'))),
									(D.timeInfo = {
										id: g,
										value: P,
									}),
									(b.isTimeAvail && b.isTimeStamp) ||
										b.isSignTimeStampAvail ||
										(T = {
											id: 'noTSP',
											value: null,
										}),
									(D.isPowerCert = D.isPowerCert),
									(D.isQSCD = D.isQSCD),
									(D.qscdName = O.qscd.name),
									(D.qscdSN = O.qscd.sn),
									(D.signAlgo = O.signAlgo),
									(D.signContainerType = O.signContainerType),
									(D.signFormat = O.signFormat),
									(D.signType =
										D.isPowerCert && O.qscd.use
											? p('Кваліфікований')
											: p('Удосконалений')),
									(I = D.isPowerCert
										? 'qualified'
										: LIBRARY_SETTINGS.supportAdvancedCertificates
										? 'advanced'
										: 'advancedWarning'),
									(U = D.isPowerCert
										? p('Кваліфікований')
										: p('Удосконалений')),
									(D.certType = {
										id: I,
										value: U,
									}),
									D.isPowerCert ||
										LIBRARY_SETTINGS.supportAdvancedCertificates ||
										(A = {
											id: 'advanced',
											value: null,
										}),
									O.isDigitalStamp ? y++ : d++,
									h.push({
										signerInfo: D,
									})
							}
						return {
							report: {
								createTime: t,
								fileName: _,
								zipFileName: E,
								signFileName: r,
								signFileSize: i,
								dataFilesName: u,
								dataFiles: s,
								signInfo: {
									signResult: n,
									signerInfos: h,
									noTSPWarning: T,
									advancedWarning: A,
								},
								saveDataFileButton: c,
								saveSignFileButton: o,
								saveReportFileButton: f,
								libraryVersion: LIBRARY_VERSION,
							},
						}
					}),
					(e.prototype.MakeURL = function (e) {
						var t = location.origin,
							n = location.pathname
						return 0 == e.indexOf('http://') || 0 == e.indexOf('https://')
							? e
							: 0 == e.indexOf('/') && t
							? t + e
							: t && n
							? t + n.substr(0, n.lastIndexOf('/')) + '/' + e
							: e
					}),
					(e.prototype.DownloadData = function (e, t) {
						var n = this
						return new Promise(function (r, i) {
							try {
								var s = new XMLHttpRequest()
								;(s.onload = function () {
									if (4 == s.readyState) {
										var n = null
										try {
											if (200 != s.status)
												throw (
													'Download data error. URL - ' +
													e +
													', status - ' +
													s.status
												)
											switch (t) {
												case 'binary':
													n = new Uint8Array(s.response)
													break
												case 'json':
													n = JSON.parse(s.responseText.replace(/\\'/g, "'"))
													break
												default:
													n = s.responseText
											}
										} catch (e) {
											return (
												console.log('DowloadData error: ' + e),
												void i(p(o.ERROR_DOWNLOAD_DATA))
											)
										}
										r(n)
									}
								}),
									(s.onerror = function () {
										i(p(o.ERROR_DOWNLOAD_DATA))
									}),
									(e = n.MakeURL(e)),
									s.open('GET', e, !0),
									'binary' == t && (s.responseType = 'arraybuffer'),
									s.send()
							} catch (e) {
								i(p(o.ERROR_DOWNLOAD_DATA))
							}
						})
					}),
					(e.prototype.makeZip = function (e, t) {
						return new Promise(function (n, r) {
							for (var i = new JSZip(), a = 0; a < t.length; a++)
								i.file(t[a].name, t[a].data)
							i.generateAsync({
								type: 'uint8array',
								compression: 'DEFLATE',
								compressionOptions: {
									level: 9,
								},
							})
								.then(function (t) {
									n(new M(e, t))
								})
								.catch(function (t) {
									r(p(s.format(o.ERROR_SAVE_FILE, e)))
								})
						})
					}),
					(e.prototype.OnShowSignFileForm = function (e) {
						$('#preSignShowParamsCheckbox').prop('checked', e),
							this.SetError(''),
							this.ShowForm('#signBlock', !1)
					}),
					(e.prototype.OnSignFile = function () {
						var e = this,
							t = e.GetCurrentLibrary()
						e.SetError('')
						var n = parseInt(
								$("input[type='radio'][name=signTypesRadio]:checked").val()
							),
							r = parseInt($('#signAlgoSelect').val()),
							s = parseInt($('#signTypeCAdESSelect').val()),
							a = parseInt($('#signFormatCAdESSelect').val()),
							u = parseInt($('#signFormatXAdESSelect').val()),
							l = parseInt($('#signFormatPAdESSelect').val()),
							c = e.SignAlgoToHashAlgo(r),
							f = n == N.ASiCS || n == N.ASiCE,
							E = n == N.PAdES,
							h = n == N.XAdES,
							S = parseInt($('#signTypeXAdESSelect').val()),
							d = f
								? n == N.ASiCS
									? i.EndUserConstants.EndUserASiCType.S
									: i.EndUserConstants.EndUserASiCType.E
								: i.EndUserConstants.EndUserASiCType.Unknown,
							y = parseInt($('#signTypeASiCSelect').val()),
							C = y == i.EndUserConstants.EndUserASiCSignType.CAdES ? a : u,
							A =
								n == N.CAdES &&
								s == i.EndUserConstants.EndUserCAdESType.Detached,
							R = $('#signFilesInput').prop('files'),
							m = R.length >= 1 ? R[0].name : '',
							g = m + e.GetSignFileExt(m, n),
							P = e.GetFilesSize(R),
							v = e.GetFileExtension(m).toLowerCase(),
							I =
								(new JSZip(),
								{
									filesData: null,
									namedData: null,
									hash: null,
									sign: null,
									signsInfo: null,
									signersInfo: null,
									signContainerInfo: null,
								})
						if ('' != m)
							if ('' != g)
								if (
									R.length > 1 &&
									n != N.ASiCE &&
									(n != N.XAdES ||
										S != i.EndUserConstants.EndUserXAdESType.Detached)
								)
									e.SetError(p(o.ERROR_SIGN_MULTIPLE_FILES_NOT_SUPPORTED))
								else if (
									(n != N.CAdES ||
										(n == N.CAdES &&
											s != i.EndUserConstants.EndUserCAdESType.Detached)) &&
									P >= MAX_FILE_SIZE
								)
									e.SetError(p(o.ERROR_FILE_TO_BIG))
								else if (P <= 0) e.SetError(p(o.ERROR_FILE_EMPTY))
								else {
									switch (n) {
										case N.PAdES:
											if ('pdf' != v)
												return void e.SetError(p(o.ERROR_FILE_NOT_PDF))
											break
										case N.XAdES:
											if (
												S == i.EndUserConstants.EndUserXAdESType.Enveloped &&
												'xml' != v
											)
												return void e.SetError(p(o.ERROR_FILE_NOT_XML))
									}
									e.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_FILE)),
										t
											.GetLibrary()
											.SetRuntimeParameter(
												i.EndUserConstants.EU_SIGN_TYPE_PARAMETER,
												a
											)
											.then(function () {
												return e.ReadFiles(R)
											})
											.then(function (e) {
												return (
													(I.filesData = e),
													A ? t.GetLibrary().HashData(c, e[0].data, !1) : null
												)
											})
											.then(function (e) {
												return (
													(I.hash = e),
													1 == I.filesData.length && f
														? t
																.GetLibrary()
																.GetSignContainerInfo(I.filesData[0].data)
														: null
												)
											})
											.then(function (e) {
												I.signContainerInfo =
													null != e &&
													e.type !=
														i.EndUserConstants.EndUserSignContainerType.Unknown
														? e
														: null
												var n = !1
												null != e &&
													(n =
														e.type ==
															i.EndUserConstants.EndUserSignContainerType
																.ASiC &&
														e.subType == d &&
														e.asicSignType == y),
													(I.namedData = []),
													I.filesData.forEach(function (e) {
														I.namedData.push({
															name: e.name,
															val: e.data,
														})
													})
												var o = A
													? {
															name: I.namedData[0].name,
															val: I.hash,
													  }
													: null
												return f
													? n
														? t
																.GetLibrary()
																.ASiCAppendSign(r, C, null, I.namedData[0], !1)
														: t
																.GetLibrary()
																.ASiCSignData(r, d, y, C, I.namedData, !1)
													: E
													? t.GetLibrary().PDFSignData(r, I.namedData[0], l, !1)
													: h
													? t
															.GetLibrary()
															.XAdESSignData(r, S, u, I.namedData, !1)
													: A
													? t.GetLibrary().SignHash(r, o, !0, !1)
													: t
															.GetLibrary()
															.SignDataEx(r, I.namedData[0], !1, !0, !1)
											})
											.then(function (i) {
												return (
													(I.sign = i.val),
													T(
														e.m_statisticsURL,
														_.Sign,
														e.m_mainPageOrigin,
														e.m_readedPKey.getKeyType(),
														e.m_readedPKey.getIssuerCN(),
														1,
														e.GetStatisticsSignContainerType(n, s, S, y),
														r,
														f ? C : E ? l : h ? u : a
													),
													f
														? t.GetLibrary().ASiCVerifyData(I.sign, -1)
														: E
														? t.GetLibrary().PDFVerifyData(I.sign, -1)
														: h
														? t
																.GetLibrary()
																.XAdESVerifyData(I.namedData, I.sign, -1)
														: A
														? t.GetLibrary().VerifyHash(I.hash, I.sign, -1)
														: t.GetLibrary().VerifyDataInternal(I.sign, -1)
												)
											})
											.then(function (e) {
												return (
													(I.signsInfo = e),
													f
														? t.GetLibrary().ASiCGetSigner(I.sign, -1, !0)
														: E
														? t.GetLibrary().PDFGetSigner(I.sign, -1, !0)
														: h
														? t.GetLibrary().XAdESGetSigner(I.sign, -1, !0)
														: t.GetLibrary().GetSigner(I.sign, -1, !0)
												)
											})
											.then(function (e) {
												return (
													(I.signersInfo = e),
													null != I.signContainerInfo
														? I.signContainerInfo
														: t.GetLibrary().GetSignContainerInfo(I.sign)
												)
											})
											.then(function (e) {
												return (I.signContainerInfo = e), I.sign
											})
											.then(function (t) {
												return (
													(I.sign = t),
													e.m_signInfoTmpl
														? e.m_signInfoTmpl
														: e.DownloadData(LIBRARY_SETTINGS.signInfoTmpl, '')
												)
											})
											.then(function (t) {
												;(e.m_signInfoTmpl = t),
													e.SetSignFileResult(
														I.filesData,
														I.sign,
														g,
														I.signsInfo,
														I.signersInfo,
														I.signContainerInfo.type,
														I.signContainerInfo.subType,
														I.signContainerInfo.asicSignType
													),
													e.ShowForm('#resultBlock', !0),
													e.CloseDimmerView(),
													e.StopOperationConfirmation()
											})
											.catch(function (t) {
												e.CloseDimmerView(),
													e.StopOperationConfirmation(),
													e.SetError(p(o.ERROR_SIGN_FILE), t)
											})
								}
							else e.SetError(p(o.ERROR_FILE_TO_SIGN_RESULT_NOT_SET))
						else e.SetError(p(o.ERROR_FILE_TO_SIGN_NOT_SET))
					}),
					(e.prototype.OnSignFileCancel = function () {
						this.m_showPKInfo && this.m_readedPKey.certificatesInfo.length > 0
							? this.ShowForm(
									this.m_showSignTip ? '#preSignBlock' : '#pkInfoBlock',
									!1
							  )
							: this.OnResetPKey()
					}),
					(e.prototype.ShowDimmerView = function (e) {
						$('#dimmerViewMessageLabel').text(e), $('#dimmerViewBlock').show()
					}),
					(e.prototype.CloseDimmerView = function () {
						$('#dimmerViewBlock').hide()
					}),
					(e.prototype.LoadLibrary = function (e) {
						var t = this,
							n = t.GetCurrentLibrary()
						n.IsLoading() ||
							n
								.Load(function (e) {
									t.OnEvent(e)
								})
								.then(function () {
									n == t.GetCurrentLibrary() && t.OnChangeLibraryType(e)
								})
								.catch(function (e) {
									n == t.GetCurrentLibrary() &&
										(t.SetError(p(o.ERROR_LIBRARY_LOAD), e),
										t.CloseDimmerView())
								})
					}),
					(e.prototype.AddEventListener = function (e) {
						var t = this
						return new Promise(function (n, r) {
							;(t.m_listeners[e] = function (e) {
								t.OnEvent(e)
							}),
								n()
						})
					}),
					(e.prototype.ResetPrivateKey = function () {
						var e = this
						return new Promise(function (t, n) {
							e.OnResetPKey(), t()
						})
					}),
					(e.prototype.ReadPrivateKey = function () {
						var e = this
						return new Promise(function (t, n) {
							var r = function () {
								e.m_readedPKey
									? t(e.m_readedPKey.certificatesInfo)
									: ('#pkTypesPreSelectBlock' != e.GetVisibleFormId() &&
											'#installBlock' != e.GetVisibleFormId() &&
											'#proxySettingsBlock' != e.GetVisibleFormId() &&
											'#pkReadFileBlock' != e.GetVisibleFormId() &&
											'#pkReadKMBlock' != e.GetVisibleFormId() &&
											'#pkReadKSPBlock' != e.GetVisibleFormId() &&
											'#pkReadDIIABlock' != e.GetVisibleFormId() &&
											'#pkInfoBlock' != e.GetVisibleFormId() &&
											e.OnChangeLibraryType(),
									  setTimeout(function () {
											r()
									  }, 500))
							}
							r()
						})
					}),
					(e.prototype.MakeNewCertificate = function (e) {
						void 0 === e && (e = null)
						var t = this
						return (
							(t.m_euParams = e),
							new Promise(function (e, n) {
								var r = function () {
									if (t.m_isPKActionDone) e()
									else {
										if (
											null != t.m_readedPKey &&
											'#installBlock' != t.GetVisibleFormId() &&
											'#proxySettingsBlock' != t.GetVisibleFormId() &&
											'#pkWriteFileBlock' != t.GetVisibleFormId() &&
											'#pkWriteKMBlock' != t.GetVisibleFormId()
										) {
											var n =
												null == t.m_readedPKey.keyMedia &&
												!t.m_noNewFileKMOnMakeNewCertificate
											t.SetKeyMediaType(n ? w.File : w.Hardware)
										}
										setTimeout(function () {
											r()
										}, 500)
									}
								}
								r()
							})
						)
					}),
					(e.prototype.MakeDeviceCertificate = function (e) {
						var t = this
						return new Promise(function (n, r) {
							var i = function () {
								if (t.m_isPKActionDone)
									return (t.m_isPKActionDone = !1), void n()
								null != t.m_readedPKey &&
									'#installBlock' != t.GetVisibleFormId() &&
									'#proxySettingsBlock' != t.GetVisibleFormId() &&
									'#makeTechnicalCertBlock' != t.GetVisibleFormId() &&
									((t.m_deviceCertParams = e),
									t.ShowForm('#makeTechnicalCertBlock', !1)),
									setTimeout(function () {
										i()
									}, 500)
							}
							i()
						})
					}),
					(e.prototype.ChangeOwnCertificatesStatus = function (e, t) {
						var n = this,
							r = n.GetCurrentLibrary().GetLibrary()
						return new Promise(function (o, s) {
							n.CheckPrivateKey(
								i.EndUserConstants.EndUserCertKeyType.Unknown,
								[]
							)
								.then(function () {
									return r.ChangeOwnCertificatesStatus(e, t)
								})
								.then(function () {
									return o()
								})
								.catch(function (e) {
									return s(e)
								})
						})
					}),
					(e.prototype.GetSignValue = function (e, t, n, r) {
						void 0 === t && (t = !1),
							void 0 === n &&
								(n = i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
							void 0 === r && (r = !1)
						var s = this,
							a = s.GetCurrentLibrary().GetLibrary()
						return (
							s.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_DATA)),
							new Promise(function (o, u) {
								s.CheckPrivateKey(s.SignAlgoToPublicKeyType(n), [
									i.EndUserConstants.EndUserKeyUsage.DigitalSignature |
										i.EndUserConstants.EndUserKeyUsage.NonRepudation,
								])
									.then(function () {
										return a.GetSignValue(n, e, t, r)
									})
									.then(function (t) {
										T(
											s.m_statisticsURL,
											_.Sign,
											s.m_mainPageOrigin,
											s.m_readedPKey.getKeyType(),
											s.m_readedPKey.getIssuerCN(),
											Array.isArray(e) ? e.length : 1,
											E.Raw,
											n,
											h.B_B
										),
											s.CloseDimmerView(),
											s.StopOperationConfirmation(),
											o(t)
									})
									.catch(function (e) {
										s.CloseDimmerView(), s.StopOperationConfirmation(), u(e)
									})
							})
						)
					}),
					(e.prototype.SignHash = function (e, t, n, r, s) {
						void 0 === t && (t = !1),
							void 0 === n &&
								(n = i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
							void 0 === r &&
								(r = i.EndUserConstants.EndUserSignType.CAdES_BES),
							void 0 === s && (s = null)
						var a = this,
							u = a.GetCurrentLibrary().GetLibrary()
						return (
							a.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_DATA)),
							new Promise(function (o, l) {
								a.CheckPrivateKey(a.SignAlgoToPublicKeyType(n), [
									i.EndUserConstants.EndUserKeyUsage.DigitalSignature |
										i.EndUserConstants.EndUserKeyUsage.NonRepudation,
								])
									.then(function () {
										return u.SetRuntimeParameter(
											i.EndUserConstants.EU_SIGN_TYPE_PARAMETER,
											r
										)
									})
									.then(function () {
										return null == s
											? u.SignHash(n, e, !0, t)
											: u.AppendSignHash(n, e, s, !0, t)
									})
									.then(function (t) {
										T(
											a.m_statisticsURL,
											_.Sign,
											a.m_mainPageOrigin,
											a.m_readedPKey.getKeyType(),
											a.m_readedPKey.getIssuerCN(),
											Array.isArray(e) ? e.length : 1,
											E.CAdESDetached,
											n,
											r
										),
											a.CloseDimmerView(),
											a.StopOperationConfirmation(),
											o(t)
									})
									.catch(function (e) {
										a.CloseDimmerView(), a.StopOperationConfirmation(), l(e)
									})
							})
						)
					}),
					(e.prototype.SignData = function (e, t, n, r, s, a) {
						void 0 === t && (t = !0),
							void 0 === n && (n = !1),
							void 0 === r &&
								(r = i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
							void 0 === s && (s = null),
							void 0 === a && (a = i.EndUserConstants.EndUserSignType.CAdES_BES)
						var u = this,
							l = u.GetCurrentLibrary().GetLibrary()
						return (
							u.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_DATA)),
							new Promise(function (o, c) {
								u.CheckPrivateKey(u.SignAlgoToPublicKeyType(r), [
									i.EndUserConstants.EndUserKeyUsage.DigitalSignature |
										i.EndUserConstants.EndUserKeyUsage.NonRepudation,
								])
									.then(function () {
										return l.SetRuntimeParameter(
											i.EndUserConstants.EU_SIGN_TYPE_PARAMETER,
											a
										)
									})
									.then(function () {
										return null == s
											? l.SignDataEx(r, e, t, !0, n)
											: l.AppendSign(r, t ? e : null, s, !0, n)
									})
									.then(function (n) {
										var i = null == s ? e : s
										T(
											u.m_statisticsURL,
											_.Sign,
											u.m_mainPageOrigin,
											u.m_readedPKey.getKeyType(),
											u.m_readedPKey.getIssuerCN(),
											Array.isArray(i) ? i.length : 1,
											t ? E.CAdESDetached : E.CAdESEnveloped,
											r,
											a
										),
											u.CloseDimmerView(),
											u.StopOperationConfirmation(),
											o(n)
									})
									.catch(function (e) {
										u.CloseDimmerView(), u.StopOperationConfirmation(), c(e)
									})
							})
						)
					}),
					(e.prototype.PAdESSignData = function (e, t, n, r) {
						void 0 === t && (t = !1),
							void 0 === n &&
								(n = i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
							void 0 === r && (r = i.EndUserConstants.EndUserPAdESSignLevel.B_B)
						var s = this,
							a = s.GetCurrentLibrary().GetLibrary()
						return (
							s.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_DATA)),
							new Promise(function (o, u) {
								s.CheckPrivateKey(s.SignAlgoToPublicKeyType(n), [
									i.EndUserConstants.EndUserKeyUsage.DigitalSignature |
										i.EndUserConstants.EndUserKeyUsage.NonRepudation,
								])
									.then(function () {
										return a.PDFSignData(n, e, r, t)
									})
									.then(function (t) {
										T(
											s.m_statisticsURL,
											_.Sign,
											s.m_mainPageOrigin,
											s.m_readedPKey.getKeyType(),
											s.m_readedPKey.getIssuerCN(),
											Array.isArray(e) ? e.length : 1,
											E.PAdES,
											n,
											r
										),
											s.CloseDimmerView(),
											s.StopOperationConfirmation(),
											o(t)
									})
									.catch(function (e) {
										s.CloseDimmerView(), s.StopOperationConfirmation(), u(e)
									})
							})
						)
					}),
					(e.prototype.XAdESSignData = function (e, t, n, r, s) {
						void 0 === n && (n = !1),
							void 0 === r &&
								(r = i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
							void 0 === s && (s = i.EndUserConstants.EndUserXAdESSignLevel.B_B)
						var a = this,
							u = a.GetCurrentLibrary().GetLibrary()
						return (
							a.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_DATA)),
							new Promise(function (o, l) {
								a.CheckPrivateKey(a.SignAlgoToPublicKeyType(r), [
									i.EndUserConstants.EndUserKeyUsage.DigitalSignature |
										i.EndUserConstants.EndUserKeyUsage.NonRepudation,
								])
									.then(function () {
										return u.XAdESSignData(r, e, s, t, n)
									})
									.then(function (t) {
										T(
											a.m_statisticsURL,
											_.Sign,
											a.m_mainPageOrigin,
											a.m_readedPKey.getKeyType(),
											a.m_readedPKey.getIssuerCN(),
											1,
											a.GetStatisticsSignContainerType(N.XAdES, 0, e, 0),
											r,
											s
										),
											a.CloseDimmerView(),
											a.StopOperationConfirmation(),
											o(t)
									})
									.catch(function (e) {
										a.CloseDimmerView(), a.StopOperationConfirmation(), l(e)
									})
							})
						)
					}),
					(e.prototype.ASiCSignData = function (e, t, n, r, s, a, u) {
						void 0 === r && (r = !1),
							void 0 === s &&
								(s = i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
							void 0 === a && (a = 0)
						var l = this,
							c = l.GetCurrentLibrary().GetLibrary()
						return (
							l.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_DATA)),
							0 == a &&
								(a =
									t == i.EndUserConstants.EndUserASiCSignType.CAdES
										? i.EndUserConstants.EndUserSignType.CAdES_BES
										: i.EndUserConstants.EndUserXAdESSignLevel.B_B),
							new Promise(function (o, p) {
								l.CheckPrivateKey(l.SignAlgoToPublicKeyType(s), [
									i.EndUserConstants.EndUserKeyUsage.DigitalSignature |
										i.EndUserConstants.EndUserKeyUsage.NonRepudation,
								])
									.then(function () {
										var i = null
										return (
											u &&
												((i = []),
												n.forEach(function (e) {
													i.push(e.name)
												})),
											u
												? c.ASiCAppendSign(s, a, i, u, r)
												: c.ASiCSignData(s, e, t, a, n, r)
										)
									})
									.then(function (n) {
										var r =
											e == i.EndUserConstants.EndUserASiCType.S
												? N.ASiCS
												: e == i.EndUserConstants.EndUserASiCType.E
												? N.ASiCE
												: 0
										T(
											l.m_statisticsURL,
											_.Sign,
											l.m_mainPageOrigin,
											l.m_readedPKey.getKeyType(),
											l.m_readedPKey.getIssuerCN(),
											1,
											l.GetStatisticsSignContainerType(r, 0, 0, t),
											s,
											a
										),
											l.CloseDimmerView(),
											l.StopOperationConfirmation(),
											o(n)
									})
									.catch(function (e) {
										l.CloseDimmerView(), l.StopOperationConfirmation(), p(e)
									})
							})
						)
					}),
					(e.prototype.EnvelopData = function (e, t, n, r, o) {
						void 0 === n && (n = !1),
							void 0 === r && (r = !1),
							void 0 === o && (o = !1)
						var s = this,
							a = s.GetCurrentLibrary().GetLibrary()
						return new Promise(function (u, l) {
							s.CheckPrivateKey(
								i.EndUserConstants.EndUserCertKeyType.DSTU4145,
								[
									(n
										? i.EndUserConstants.EndUserKeyUsage.DigitalSignature
										: 0) |
										(o ? 0 : i.EndUserConstants.EndUserKeyUsage.KeyAgreement),
								],
								!n && o
							)
								.then(function () {
									return a.EnvelopData(e, t, n, !0, r, o)
								})
								.then(function (e) {
									T(
										s.m_statisticsURL,
										_.Envelop,
										s.m_mainPageOrigin,
										s.m_readedPKey.getKeyType(),
										s.m_readedPKey.getIssuerCN(),
										1,
										E.CAdESEnveloped,
										o
											? i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311
											: s.GetSupportedEnvelopAlgos(
													s.m_readedPKey.certificatesInfo
											  )[0],
										i.EndUserConstants.EndUserSignType.CAdES_BES
									),
										u(e)
								})
								.catch(function (e) {
									return l(e)
								})
						})
					}),
					(e.prototype.DevelopData = function (e, t) {
						void 0 === t && (t = null)
						var n = this,
							r = n.GetCurrentLibrary().GetLibrary()
						return new Promise(function (o, s) {
							n.CheckPrivateKey(
								i.EndUserConstants.EndUserCertKeyType.DSTU4145,
								[i.EndUserConstants.EndUserKeyUsage.KeyAgreement]
							)
								.then(function () {
									return r.DevelopData(e, t)
								})
								.then(function (e) {
									T(
										n.m_statisticsURL,
										_.Develop,
										n.m_mainPageOrigin,
										n.m_readedPKey.getKeyType(),
										n.m_readedPKey.getIssuerCN(),
										1,
										E.CAdESEnveloped,
										n.GetSupportedEnvelopAlgos(
											n.m_readedPKey.certificatesInfo
										)[0],
										i.EndUserConstants.EndUserSignType.CAdES_BES
									),
										o(e)
								})
								.catch(function (e) {
									return s(e)
								})
						})
					}),
					e
				)
			})()
		window.onload = function () {
			c.getInstance().addTranlations(LIBRARY_LOCALIZATION),
				LIBRARY_HOST_LOCALIZATION &&
					c.getInstance().addTranlations(LIBRARY_HOST_LOCALIZATION),
				c
					.getInstance()
					.setLocale(c.getLocaleTypeById(LIBRARY_SETTINGS.language)),
				(function () {
					for (var e = $('.i18n'), t = 0; t < e.length; t++) {
						var n = $(e[t])
						n.text(p(n.text()))
					}
				})(),
				new F()
		}
	},
])
