const DEVICE_LANG = (Device.language() || "pt").toLowerCase().substring(0, 2)
const SPEECH = {
  pt: {
    start:    "Analisando, aguarde o KellerSS terminar",
    half:     "Scanner em cinquenta por cento. Aguarde mais um pouco.",
    probe:    "Scanner em noventa por cento. Aguarde mais um pouco.",
    done:     "KellerSS finalizado. Analise os resultados com cuidado.",
  },
  en: {
    start:    "Analyzing, please wait for KellerSS to finish.",
    half:     "Scanner at fifty percent. Please wait a little longer.",
    probe:    "Scanner at ninety percent. Almost done.",
    done:     "KellerSS finished. Analyze the results carefully.",
  },
  es: {
    start:    "Analizando, espera que KellerSS termine.",
    half:     "Escáner al cincuenta por ciento. Espera un pouco mais.",
    probe:    "Escáner al noventa por cento. Ya casi termina.",
    done:     "KellerSS finalizado. Analiza los resultados com cuidado.",
  },
}
const S = SPEECH[DEVICE_LANG] || SPEECH["pt"]

const VPS_HOSTING_KEYWORDS = [
  "hostinger", "hstgr",
  "locaweb",
  "kinghost",
  "umbler",
  "hostgator",
  "uol host", "uolhost",
  "bol", "bol.com.br",
  "redehost",
  "weblink",
  "brasileirohost", "br.host",
  "dialhost",
  "serverspace",
  "melhorhospedagem",
  "ibrcom",
  "masterweb",
  "superdomínios", "superdomin",
  "plankton", "vps.br",
  "digitalocean",
  "linode", "akamai",
  "vultr",
  "hetzner",
  "ovh", "ovhcloud",
  "contabo",
  "ionos",
  "godaddy",
  "siteground",
  "cloudways",
  "amazon", "aws", "amazonaws",
  "google cloud", "googlecloud",
  "microsoft azure", "azure",
  "alibaba cloud", "alibabacloud",
  "tencent cloud", "tencentcloud",
  "hstgr.cloud",
  "srv.umbler",
  "kinghost.net",
  "locaweb.com.br",
  "choopa", "psychz", "m247",
  "serverius", "frantech", "buyvm",
  "sharktech", "quadranet", "nexeon",
  "servermania", "hostwinds", "racknerd",
  "dedipath", "spartanhost", "cloudie",
  "tsohost", "wavenet", "fasthosts",
  "multacom",
  "telus",
  "fdcservers", "fdc servers",
  "leaseweb",
  "colocation america",
  "b2 net", "b2net",
  "path.net",
  "datacamp",
  "tzulo",
  "coresite",
]

const CHEAT_PROXY_ASN = {
  "AS35916": "Multacom Corporation (cheat proxy LA)",
  "AS47583": "Hostinger International (cheat proxy BR)",
  "AS60781": "LeaseWeb Netherlands",
  "AS28753": "LeaseWeb Deutschland",
  "AS16276": "OVH SAS",
  "AS14061": "DigitalOcean",
  "AS20473": "Choopa / Vultr",
  "AS8100":  "QuadraNet",
  "AS40065": "Cnservers / FDC Servers",
  "AS53667": "FranTech Solutions",
  "AS395954": "Leaseweb USA",
  "AS13335": "Cloudflare (CDN/Proxy — comum em cheats)",
  "AS209": "CenturyLink / Lumen",
  "AS7203": "Sharktech",
}

const RDNS_HOSTING_PATTERNS = [
  "hstgr.cloud",
  "staticip",
  "srv.",
  "vps.",
  "cloud.",
  "host.",
  "server.",
  "dedicated.",
  ".kinghost.net",
  ".locaweb.com.br",
  ".umbler.net",
  ".hostgator.com.br",
  ".digitalocean.com",
  ".vultr.com",
  ".linode.com",
  ".hetzner.com",
  ".contabo.net",
]

const CHEAT_APPS = {
  "com.touchingapp.potatsolite":      "PotatsoLite — proxy iOS (mitmproxy cheat)",
  "com.touchingapp.potatso":          "Potatso — proxy iOS",
  "com.monite.proxyff":               "ProxyFF — proxy iOS (cheat confirmado)",
  "com.nssurge.inc.surge-ios":        "Surge — proxy/MITM iOS",
  "com.luo.quantumultx":              "Quantumult X — proxy iOS",
  "group.com.luo.quantumult":         "Quantumult — proxy iOS",
  "com.shadowrocket.Shadowrocket":    "Shadowrocket — proxy iOS",
  "com.liguangming.Shadowrocket":     "Shadowrocket (alt) — proxy iOS",
  "com.github.shadowsocks":           "Shadowsocks",
  "com.netease.trojan":               "Trojan proxy",
  "com.hiddify.app":                  "Hiddify — proxy",
  "com.karing.app":                   "Karing — proxy",
  "com.metacubex.ClashX":             "ClashX — proxy",
  "com.ssrss.Ssrss":                  "SSR iOS proxy",
  "com.adguard.ios.AdguardPro":       "AdGuard Pro (proxy MITM)",
  "com.privateinternetaccess.ios":    "PIA VPN",
  "com.anonymousiphone.detoxme":      "Detox — proxy iOS",
  "com.futureland.vpnmaster":         "VPN Master",
  "com.cloudflare.1dot1dot1dot1":     "Cloudflare 1.1.1.1 (WARP proxy)",
  "com.opa334.dopamine":              "Dopamine — Jailbreak",
  "org.coolstar.sileo":               "Sileo — package manager JB",
  "org.coolstar.odyssey":             "Odyssey — Jailbreak",
  "com.electrateam.unc0ver":          "unc0ver — Jailbreak",
  "com.tihmstar.checkra1n":           "checkra1n — Jailbreak",
  "org.taurine.jailbreak":            "Taurine — Jailbreak",
  "xyz.palera1n.palera1n":            "palera1n — Jailbreak",
  "com.opa334.TrollStore":            "TrollStore — sideload sem JB",
  "com.opa334.TrollStoreHelper":      "TrollStoreHelper",
  "com.opa334.trolldecrypt":          "TrollDecrypt — decifrar IPAs",
  "com.opa334.trollfools":            "TrollFools — injetor de tweaks",
  "xyz.willy.Zebra":                  "Zebra — package manager JB",
  "com.cydia.Cydia":                  "Cydia — package manager JB",
  "com.rileytestut.AltStore":         "AltStore — sideload",
  "com.altstore.altstoreclassic":     "AltStore Classic — sideload",
  "com.sideloadly.sideloadly":        "Sideloadly — sideload",
  "com.esign.ios":                    "ESign — sideload/IPA installer",
  "com.esign.esign":                  "ESign (alt) — sideload",
  "com.iosgods.iosgods":              "iOSGods — cheat app store",
  "com.gbox.pubg":                    "GBox — cheat mod pubg/ff",
  "com.tigisoftware.Filza":           "Filza — file manager root",
  "com.tigisoftware.FilzaFree":       "Filza Free — file manager root",
  "app.ish.iSH":                      "iSH — shell Linux no iOS",
  "com.septudio.SSHClientLite":       "SSH Client Lite — shell remoto",
  "live.cclerc.geranium":             "Geranium — tweak manager JB",
  "com.apple.dt.Xcode":               "Xcode — IDE Apple (suspeito em contexto de jogo)",
  "com.apple.Preferences.Developer":  "Preferências de Desenvolvedor (ativas)",
  "com.apple.developer":              "Perfil de desenvolvedor Apple",
  "com.shpion.cleaner":               "Spion Cleaner — limpeza de rastros suspeita",
  "com.ifunbox.ifunbox":              "iFunBox — gerenciador de arquivos iOS",
  "com.limneos.adprivacy":            "AdPrivacy — bloqueio/manipulação de rede",
  "com.jjcm.nomoread":                "NoMoreAd — bloqueio de rede (MITM possível)",
}

const SUSPICIOUS_TLDS = [
  ".site", ".store", ".netlify.app", ".netlify", ".xyz", ".pw",
  ".top", ".click", ".bid", ".win", ".stream", ".download",
  ".icu", ".gq", ".cf", ".ml", ".ga", ".tk",
  ".monster", ".fun", ".rest", ".bar", ".lol",
]

const SUSPICIOUS_DOMAIN_WORDS = [
  "proxy", "cheat", "hack", "bypass", "mitm", "inject",
  "spoof", "crack", "exploit", "payload", "tunnel",
  "vpn", "socks", "relay", "forward", "gate",
]

const PROXY_IPA_BUNDLES = {
  "com.spotify.client":         "Spotify",
  "com.burbn.instagram":        "Instagram",
  "net.whatsapp.WhatsApp":      "WhatsApp",
  "com.google.ios.youtube":     "YouTube",
  "com.apple.mobilesafari":     "Safari",
  "com.facebook.Facebook":      "Facebook",
  "com.zhiliaoapp.musically":   "TikTok",
  "com.hammerandchisel.discord":"Discord",
  "com.google.Gmail":           "Gmail",
  "com.google.GoogleMobile":    "Google",
}

const IGNORED_BUNDLES = new Set([
  "com.hammerandchisel.discord",
  "com.zhiliaoapp.musically",
])

// IPs que sempre aparecerão como limpos
const WHITELIST_IPS = new Set([
  "138.94.220.87",
])

const FALSE_POSITIVE_IPS = new Set([
  "104.29.152.79",  "104.29.152.107", "92.223.118.254",  "23.221.214.168",
  "23.192.36.217",  "54.69.69.125",   "104.29.152.189",  "104.29.137.146",
  "104.29.155.56",  "104.29.137.203", "104.29.155.129",  "104.29.137.125",
  "104.29.158.97",  "104.29.152.95",  "104.29.153.53",   "104.29.159.185",
  "104.29.157.123", "104.29.152.27",  "104.29.157.107",  "104.29.137.16",
  "104.29.152.164", "104.29.137.53",  "104.29.135.227",  "104.29.158.139",
  "104.29.152.157", "104.29.156.174", "104.29.156.24",   "104.29.154.91",
  "104.29.155.27",  "104.29.156.120", "104.29.137.112",
])

const FF_PROXY_LOGIN_DOMAINS = new Set([
  "version.ffmax.purplevioleto.com",
  "version.ggwhitehawk.com",
  "loginbp.ggpolarbear.com",
  "gin.freefiremobile.com",
  "100067.connect.garena.com",
  "100067.msdk.garena.com",
  "client.us.freefiremobile.com",
  "client.sea.freefiremobile.com",
  "sacnetwork.ggblueshark.com",
  "sacevent.ggblueshark.com",
])

const FF_LEGIT_CALLERS = new Set(["com.dts.freefireth", "com.dts.freefiremax"])

const KNOWN_CHEAT_INFRA = {
  "46.202.145.85":      "Fatality Cheats — servidor confirmado",
  "fatalitycheats.xyz": "Fatality Cheats — domínio oficial do cheat",
  "anubisw.online":     "Servidor de cheat confirmado — Free Fire",
  "api.baontq.xyz":     "API de cheat confirmado — Free Fire",
  "version.ffmax.purplevioleto.com": "Versão modificada Free Fire MAX — cheat confirmado",
  "version.ggwhitehawk.com":         "White Hawk cheat — servidor confirmado",
  "loginbp.ggpolarbear.com":         "Polar Bear cheat — servidor confirmado",
}

async function findNdjsonFile() {
  let path = await DocumentPicker.openFile()
  if (!path) return null
  return { path: path, fm: FileManager.local() }
}

function parseNdjson(content) {
  let trimmed = content.trim()
  if (trimmed.startsWith("[")) {
    try { return JSON.parse(trimmed) } catch(e) {}
  }
  return trimmed
    .split("\n")
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .map(l => { try { return JSON.parse(l) } catch(e) { return null } })
    .filter(Boolean)
}

function parseIpsFile(content) {
  try {
    let trimmed = content.trim()
    let lines = trimmed.split("\n").map(l => l.trim()).filter(Boolean)
    let headerLine = lines.find(l => l.startsWith("{"))
    let dataLine   = lines.find(l => l.startsWith("["))
    let header = null
    try { header = headerLine ? JSON.parse(headerLine) : null } catch(e) {}
    let entries = []
    try { entries = dataLine ? JSON.parse(dataLine) : [] } catch(e) {}
    return { header, entries }
  } catch(e) {
    return { header: null, entries: [] }
  }
}

function looksLikePrivacyReport(content) {
  let sample = content.trim().slice(0, 500)
  return sample.includes("networkActivity") || sample.includes("bundleID") || sample.includes("timeStamp")
}

function looksLikeUsageFile(content) {
  let sample = content.trim().slice(0, 300)
  return sample.includes("xp_amp_app_usage") || sample.includes("roots_installed") || sample.includes("usageClientId")
}

const IPS_CHEAT_EXACT = new Set([
  "com.touchingapp.potatsolite", "com.touchingapp.potatso",
  "com.shadowrocket.Shadowrocket", "com.liguangming.Shadowrocket",
  "com.monite.proxyff", "com.nssurge.inc.surge-ios",
  "com.luo.quantumultx", "group.com.luo.quantumult",
  "com.github.shadowsocks", "com.netease.trojan",
  "com.hiddify.app", "com.karing.app", "com.metacubex.ClashX",
  "com.ssrss.Ssrss", "com.adguard.ios.AdguardPro",
  "com.privateinternetaccess.ios", "com.futureland.vpnmaster",
  "com.cloudflare.1dot1dot1dot1",
  "com.opa334.dopamine", "org.coolstar.sileo", "org.coolstar.odyssey",
  "com.electrateam.unc0ver", "com.tihmstar.checkra1n",
  "org.taurine.jailbreak", "xyz.palera1n.palera1n",
  "com.opa334.TrollStore", "com.opa334.TrollStoreHelper",
  "com.opa334.trolldecrypt", "com.opa334.trollfools",
  "xyz.willy.Zebra", "com.cydia.Cydia",
  "com.rileytestut.AltStore", "com.altstore.altstoreclassic",
  "com.sideloadly.sideloadly", "com.esign.ios", "com.esign.esign",
  "com.iosgods.iosgods", "com.gbox.pubg",
  "com.tigisoftware.Filza", "com.tigisoftware.FilzaFree",
  "app.ish.iSH", "com.septudio.SSHClientLite",
  "live.cclerc.geranium", "com.shpion.cleaner",
  "com.ifunbox.ifunbox", "com.limneos.adprivacy",
  "com.apple.dt.Xcode", "com.apple.Preferences.Developer",
  "com.apple.TestFlight",
  "io.nextdns.NextDNS",
  "developer.apple.wwdc-Release",
])

const IPS_CHEAT_CATEGORIES = {
  "com.apple.TestFlight":              "critical",
  "com.opa334.dopamine":               "critical",
  "org.coolstar.sileo":                "critical",
  "org.coolstar.odyssey":              "critical",
  "com.electrateam.unc0ver":           "critical",
  "com.tihmstar.checkra1n":            "critical",
  "org.taurine.jailbreak":             "critical",
  "xyz.palera1n.palera1n":             "critical",
  "com.opa334.TrollStore":             "critical",
  "com.opa334.TrollStoreHelper":       "critical",
  "com.opa334.trolldecrypt":           "critical",
  "com.opa334.trollfools":             "critical",
  "com.rileytestut.AltStore":          "critical",
  "com.altstore.altstoreclassic":      "critical",
  "com.sideloadly.sideloadly":         "critical",
  "com.esign.ios":                     "critical",
  "com.esign.esign":                   "critical",
  "com.iosgods.iosgods":               "critical",
  "com.gbox.pubg":                     "critical",
  "com.tigisoftware.Filza":            "critical",
  "com.tigisoftware.FilzaFree":        "critical",
  "app.ish.iSH":                       "critical",
  "com.monite.proxyff":                "critical",
  "com.touchingapp.potatsolite":       "critical",
  "com.touchingapp.potatso":           "critical",
  "com.shadowrocket.Shadowrocket":     "critical",
  "com.liguangming.Shadowrocket":      "critical",
  "com.cloudflare.1dot1dot1dot1":      "vpn",
  "io.nextdns.NextDNS":                "vpn",
  "com.privateinternetaccess.ios":     "vpn",
  "com.futureland.vpnmaster":          "vpn",
  "com.nssurge.inc.surge-ios":         "vpn",
  "com.luo.quantumultx":               "vpn",
  "group.com.luo.quantumult":          "vpn",
  "com.github.shadowsocks":            "vpn",
  "com.netease.trojan":                "vpn",
  "com.hiddify.app":                   "vpn",
  "com.karing.app":                    "vpn",
  "com.metacubex.ClashX":              "vpn",
  "com.ssrss.Ssrss":                   "vpn",
  "com.adguard.ios.AdguardPro":        "vpn",
  "com.apple.dt.Xcode":                "developer",
  "com.apple.Preferences.Developer":   "developer",
  "developer.apple.wwdc-Release":      "developer",
}

const IPS_CHEAT_KEYWORDS = [
  "filza", "esign", "gbox", "sideload", "dopamine", "sileo",
  "trollstore", "trolldecrypt", "trollfools", "trollhelper",
  "spoofer", "cleaner", "unc0ver", "checkra1n", "jailbreak",
  "cydia", "zebra", "altstore", "iosgods", "geranium",
  "potatso", "shadowrocket", "surge", "quantumult", "hiddify",
  "shadowsocks", "trojan", "karing", "proxyff",
  "netlify", "cheat", "hack", "bypass", "inject", "tweak",
  "substrate", "substitute", "libhooker",
]

function analyzeIps(parsed) {
  let entries = parsed.entries || parsed || []
  let results = []
  let seen = new Set()

  for (let e of entries) {
    let bid = e.bundleId || ""
    if (!bid || seen.has(bid)) continue
    seen.add(bid)

    let reason = null
    let category = "warning"

    if (IPS_CHEAT_EXACT.has(bid)) {
      reason = CHEAT_APPS[bid] || bid
      category = IPS_CHEAT_CATEGORIES[bid] || "warning"
    } else {
      let bidLower = bid.toLowerCase()
      for (let kw of IPS_CHEAT_KEYWORDS) {
        if (bidLower.includes(kw)) {
          reason = "Keyword suspeita: \"" + kw + "\" no bundle ID"
          break
        }
      }
    }

    if (!reason) {
      let bidLower = bid.toLowerCase()
      const FF_LEGIT = ["com.dts.freefireth", "com.dts.freefiremax"]
      const FF_PREFIXES = ["com.dts.freefireth", "com.dts.freefiremax"]
      if (!FF_LEGIT.includes(bid) && FF_PREFIXES.some(p => bidLower.startsWith(p) || (bidLower.includes("freefire") && !FF_LEGIT.includes(bid)))) {
        reason = "Cópia suspeita do Free Fire — bundle ID modificado"
        category = "critical"
      }
    }

    if (reason) {
      results.push({
        bundleId:    bid,
        version:     e.shortAppVersion || "?",
        eventType:   e.eventType || "?",
        count:       e.count || 0,
        reason:      reason,
        category:    category,
      })
    }
  }

  return results
}

function validateReport(entries) {
  if (!entries || entries.length === 0)
    return { ok: false, reason: "Arquivo vazio ou sem entradas válidas." }

  let hasNet    = entries.some(e => e.type === "networkActivity")
  let hasAccess = entries.some(e => e.type === "access")
  let hasBundleID = entries.some(e => e.bundleID || (e.accessor && e.accessor.identifier))
  let hasTimestamp = entries.some(e => e.timeStamp)

  if (!hasNet && !hasAccess)
    return { ok: false, reason: "Nenhuma entrada de rede ou acesso encontrada.\nEste nao parece ser um App Privacy Report valido." }
  if (!hasBundleID)
    return { ok: false, reason: "Nenhum bundleID encontrado.\nO arquivo pode estar corrompido ou foi modificado." }
  if (!hasTimestamp)
    return { ok: false, reason: "Nenhum timestamp encontrado.\nO arquivo pode estar corrompido ou foi modificado." }

  let timestamps = entries.map(e => e.timeStamp).filter(Boolean)
  let valid = timestamps.filter(t => {
    let y = parseInt(t.slice(0,4))
    return y >= 2020 && y <= 2030
  })
  if (valid.length < timestamps.length * 0.5)
    return { ok: false, reason: "Timestamps fora do intervalo esperado.\nO arquivo pode ter sido adulterado." }

  let netEntries = entries.filter(e => e.type === "networkActivity")
  let validNet = netEntries.filter(e => e.domain && e.bundleID)
  if (netEntries.length > 0 && validNet.length < netEntries.length * 0.3)
    return { ok: false, reason: "Muitas entradas de rede sem domain/bundleID.\nO arquivo pode ter sido manipulado." }

  return { ok: true }
}

const FIELDS = "status,country,city,isp,org,hosting,proxy,query,reverse,as"

async function lookupBatch(targets) {
  try {
    let req = new Request(`http://ip-api.com/batch?fields=${FIELDS}`)
    req.method = "POST"
    req.body = Data.fromString(JSON.stringify(targets))
    req.headers = { "Content-Type": "application/json" }
    req.timeoutInterval = 15
    let results = await req.loadJSON()
    if (!Array.isArray(results)) return []
    return results
  } catch(e) {
    return []
  }
}

function isIPv4(s) {
  return /^(\d{1,3}\.){3}\d{1,3}$/.test(s)
}

function isIPv6(s) {
  return s.includes(":") && !s.includes(".")
}

function isIP(s) {
  return isIPv4(s) || isIPv6(s)
}

async function resolveHostname(domain) {
  return domain
}

function classifyIP(info, domain) {
  if (!info) return { severity: null, reasons: [] }
  
  // WHITELIST CHECK
  if (WHITELIST_IPS.has(info.query) || WHITELIST_IPS.has(domain)) {
    return { severity: null, reasons: [] }
  }

  let reasons = []
  let severity = null
  let tldFlag = false

  let domLow = (domain || "").toLowerCase()
  for (let tld of SUSPICIOUS_TLDS) {
    if (domLow.endsWith(tld) || domLow.includes(tld + "/")) {
      severity = "HIGH"
      tldFlag = true
      reasons.push(`TLD suspeito detectado: "${tld}" — padrão comum em cheats/proxies`)
      break
    }
  }
  if (!tldFlag) {
    let parts = domLow.split(".")[0]
    for (let word of SUSPICIOUS_DOMAIN_WORDS) {
      if (parts.includes(word) || domLow.includes(word + ".")) {
        severity = "HIGH"
        tldFlag = true
        reasons.push(`Palavra suspeita no domínio: "${word}"`)
        break
      }
    }
  }

  if (info.hosting) {
    severity = "HIGH"
    reasons.push(`VPS/HOSTING — ISP: ${info.isp}`)
  }
  if (info.proxy) {
    severity = "HIGH"
    reasons.push("PROXY / VPN detectado")
  }

  let asn = (info.as || "").split(" ")[0].toUpperCase()
  if (CHEAT_PROXY_ASN[asn]) {
    let isCloudflare = asn === "AS13335"
    if (isCloudflare) {
      let domainIsIP = /^[\d.:]+$/.test(domain || "")
      if (domainIsIP) {
        severity = "HIGH"
        reasons.push(`Cloudflare acessado via IP direto — padrão de proxy cheat (${asn})`)
      }
    } else {
      severity = "HIGH"
      reasons.push(`ASN de cheat proxy conhecido: ${asn} — ${CHEAT_PROXY_ASN[asn]}`)
    }
  }

  let rdns = (info.reverse || "").toLowerCase()
  if (rdns) {
    for (let pattern of RDNS_HOSTING_PATTERNS) {
      if (rdns.includes(pattern)) {
        severity = severity || "HIGH"
        reasons.push(`rDNS de servidor: ${info.reverse}`)
        break
      }
    }
    if (rdns.match(/^srv\d+\.hstgr\.cloud$/)) {
      severity = "HIGH"
      reasons.push(`Hostinger VPS (padrao cheat proxy BR): ${info.reverse}`)
    }
  } else if (info.hosting) {
    reasons.push("Sem rDNS (PTR) — tipico de VPS usado como proxy")
  }

  let orgLower = ((info.org || "") + " " + (info.isp || "") + " " + (info.as || "")).toLowerCase()
  for (let kw of VPS_HOSTING_KEYWORDS) {
    if (orgLower.includes(kw)) {
      severity = severity || "MEDIUM"
      reasons.push(`Org/ISP associado a hospedagem/cheat proxy: ${kw}`)
      break
    }
  }

  return { severity, reasons }
}

async function probeHost(domain) {
  let safe = ["apple.com","icloud.com","google.com","googleapis.com",
              "gstatic.com","amazon.com","microsoft.com","iphone","localhost",
              "akamai","cloudfront","fastly","edgekey","aaplimg"]
  if (safe.some(s => domain.toLowerCase().includes(s))) return null
  
  // WHITELIST CHECK
  if (WHITELIST_IPS.has(domain)) return null

  let result = { status: null, banner: null, online: false, suspicious: false }
  let headers = null

  for (let scheme of ["https", "http"]) {
    try {
      let req = new Request(`${scheme}://${domain}`)
      req.timeoutInterval = 6
      req.allowInsecureRequest = true
      let body = await req.loadString()

      result.online = true
      let resp = req.response || {}
      result.status = resp.statusCode || 0
      headers = resp.headers || {}

      let serverHeader = (headers["Server"] || headers["server"] || "").toLowerCase()
      let bodyLow = (body || "").slice(0, 600).toLowerCase()
      let combined = serverHeader + " " + bodyLow

      let suspiciousBanners = [
        "nginx", "apache", "ubuntu", "debian", "centos", "mitmproxy",
        "squid", "haproxy", "openresty", "caddy", "traefik",
        "403 forbidden", "bad gateway", "bad request", "proxy error"
      ]

      if (serverHeader) {
        result.banner = serverHeader.split("/")[0].trim()
        result.suspicious = true
      } else {
        for (let b of suspiciousBanners) {
          if (combined.includes(b)) {
            result.banner = b
            result.suspicious = true
            break
          }
        }
      }

      let sc = result.status
      if (sc === 403 || sc === 502 || sc === 504 || sc === 400) result.suspicious = true

      break
    } catch(e) {
      result.online = false
    }
  }

  return result
}

async function analyze(entries) {
  // WHITELIST AGGRESSIVE FILTER
  let netEntries = entries.filter(e => {
    if (e.type !== "networkActivity") return false
    let d = (e.domain || "").toLowerCase()
    if (WHITELIST_IPS.has(d)) return false
    return true
  })

  let domainHits = {}
  let domainBundles = {}
  for (let e of netEntries) {
    if (IGNORED_BUNDLES.has(e.bundleID)) continue
    let d = e.domain || ""
    if (!d) continue
    domainHits[d] = (domainHits[d] || 0) + (e.hits || 1)
    if (!domainBundles[d]) domainBundles[d] = new Set()
    domainBundles[d].add(e.bundleID || "?")
  }

  let allDomains = Object.entries(domainHits)
    .sort((a, b) => b[1] - a[1])
    .map(([d]) => d)

  console.log(`Total dominios unicos: ${allDomains.length}`)

  let allBundles = new Set()
  for (let e of netEntries) { if (e.bundleID && !IGNORED_BUNDLES.has(e.bundleID)) allBundles.add(e.bundleID) }

  const FF_LEGIT_BUNDLES = new Set(["com.dts.freefireth", "com.dts.freefiremax"])
  let ffFakeFindings = []
  for (let bid of allBundles) {
    if (FF_LEGIT_BUNDLES.has(bid)) continue
    let bidLower = bid.toLowerCase()
    let isFFClone = bidLower.startsWith("com.dts.freefireth") ||
                    bidLower.startsWith("com.dts.freefiremax") ||
                    (bidLower.includes("freefire") && !FF_LEGIT_BUNDLES.has(bid)) ||
                    (bidLower.includes("freefir") && !FF_LEGIT_BUNDLES.has(bid))
    if (isFFClone) {
      let appEntries = netEntries.filter(e => e.bundleID === bid)
      let appHits = appEntries.reduce((s, e) => s + (e.hits || 1), 0)
      let appDomains = [...new Set(appEntries.map(e => e.domain).filter(Boolean))]
      ffFakeFindings.push({ bundleID: bid, desc: "Cópia suspeita do Free Fire — bundle ID modificado", hits: appHits, domains: appDomains })
    }
  }

  let cheatAppFindings = []
  for (let [bundleID, desc] of Object.entries(CHEAT_APPS)) {
    if (allBundles.has(bundleID)) {
      let appEntries = netEntries.filter(e => e.bundleID === bundleID)
      let appHits = appEntries.reduce((s, e) => s + (e.hits || 1), 0)
      let appDomains = [...new Set(appEntries.map(e => e.domain).filter(Boolean))]
      cheatAppFindings.push({ bundleID, desc, hits: appHits, domains: appDomains })
    }
  }
  cheatAppFindings = [...ffFakeFindings, ...cheatAppFindings]

  let ffLegitDomainsSeen = new Set()
  for (let e of netEntries) {
    let d = (e.domain || "").toLowerCase()
    let bid = e.bundleID || ""
    if (FF_LEGIT_CALLERS.has(bid) && FF_PROXY_LOGIN_DOMAINS.has(d)) {
      ffLegitDomainsSeen.add(d)
    }
  }

  let proxyLoginFindings = []
  let proxyLoginSeen = {}
  for (let e of netEntries) {
    let d = (e.domain || "").toLowerCase()
    let bid = e.bundleID || ""
    if (!bid) continue
    if (FF_LEGIT_CALLERS.has(bid)) continue
    if (IGNORED_BUNDLES.has(bid)) continue
    if (!FF_PROXY_LOGIN_DOMAINS.has(d)) continue
    if (ffLegitDomainsSeen.has(d)) continue
    if (!proxyLoginSeen[d]) proxyLoginSeen[d] = { domain: e.domain, bundles: new Set(), hits: 0 }
    proxyLoginSeen[d].bundles.add(bid)
    proxyLoginSeen[d].hits += (e.hits || 1)
  }
  for (let [d, info] of Object.entries(proxyLoginSeen)) {
    proxyLoginFindings.push({ domain: info.domain, bundles: [...info.bundles], hits: info.hits })
  }

  let knownCheatFindings = []
  for (let e of netEntries) {
    let d = (e.domain || "").toLowerCase()
    let bid = e.bundleID || ""
    if (FF_LEGIT_CALLERS.has(bid) && FF_PROXY_LOGIN_DOMAINS.has(d)) continue
    
    // WHITELIST CHECK
    if (WHITELIST_IPS.has(d)) continue

    for (let [indicator, desc] of Object.entries(KNOWN_CHEAT_INFRA)) {
      if (d === indicator.toLowerCase() || d.endsWith("." + indicator.toLowerCase())) {
        if (FF_PROXY_LOGIN_DOMAINS.has(indicator.toLowerCase()) && FF_LEGIT_CALLERS.has(bid)) continue
        let existing = knownCheatFindings.find(k => k.indicator === indicator)
        if (existing) {
          existing.hits += (e.hits || 1)
          if (bid) existing.bundles.add(bid)
        } else {
          knownCheatFindings.push({
            indicator,
            desc,
            hits: e.hits || 1,
            bundles: new Set(bid ? [bid] : []),
          })
        }
      }
    }
  }
  knownCheatFindings = knownCheatFindings.map(k => ({ ...k, bundles: [...k.bundles] }))

  const CHUNK = 100
  let candidates = []

  for (let i = 0; i < allDomains.length; i += CHUNK) {
    let chunk = allDomains.slice(i, i + CHUNK)
    let chunkNum = Math.floor(i / CHUNK) + 1
    let totalChunks = Math.ceil(allDomains.length / CHUNK)
    console.log(`Batch ${chunkNum}/${totalChunks} — ${chunk.length} dominios`)

    let results = await lookupBatch(chunk)

    if (chunkNum === Math.ceil(totalChunks / 2) && totalChunks > 1) {
      Speech.speak(S.half)
    }

    for (let j = 0; j < results.length; j++) {
      let info = results[j]
      let domain = chunk[j]
      let ip = (info && info.query) || domain

      // WHITELIST CHECK
      if (WHITELIST_IPS.has(ip) || WHITELIST_IPS.has(domain)) continue
      if (FALSE_POSITIVE_IPS.has(ip) || FALSE_POSITIVE_IPS.has(domain)) continue

      let domLow2 = domain.toLowerCase()
      let isTldSuspect = SUSPICIOUS_TLDS.some(t => domLow2.endsWith(t)) ||
                         SUSPICIOUS_DOMAIN_WORDS.some(w => domLow2.split(".")[0].includes(w))

      let severity = null
      let reasons = []

      if (info && info.status === "success") {
        let classified = classifyIP(info, domain)
        severity = classified.severity
        reasons  = classified.reasons
      }

      if (!severity && isTldSuspect) {
        severity = "HIGH"
        reasons = [`TLD suspeito: domínio com extensão de alto risco — padrão comum em servidores de cheat`]
      }

      if (!severity && !isTldSuspect) continue

      candidates.push({
        severity, domain, ip,
        country: (info && info.country) || "?",
        city:    (info && info.city)    || "?",
        isp:     (info && info.isp)     || "?",
        org:     (info && info.org)     || "?",
        as:      (info && info.as)      || "?",
        hosting: (info && info.hosting) || false,
        proxy:   (info && info.proxy)   || false,
        reverse: (info && info.reverse) || "",
        hits:    domainHits[domain],
        bundles: [...domainBundles[domain]].slice(0, 4),
        reasons,
        tldSuspect: isTldSuspect,
      })
    }

    if (i + CHUNK < allDomains.length) await wait(1400)
  }

  console.log(`Iniciando probe HTTP em ${candidates.length} suspeitos...`)
  Speech.speak(S.probe)
  let probeResults = await Promise.all(candidates.map(c => probeHost(c.domain)))

  let findings = candidates.map((c, idx) => {
    let probe = probeResults[idx]
    let severity = c.severity
    let reasons = [...c.reasons]

    if (probe) {
      if (probe.suspicious && probe.banner) {
        severity = "HIGH"
        reasons.push(`Servidor: ${probe.banner}`)
      }
      if (probe.status === 403) {
        reasons.push("HTTP 403 — ativo mas bloqueando acesso (padrão de proxy)")
      }
      if (!probe.online) {
        reasons.push("Servidor offline ou sem resposta HTTP")
      }
    }

    return { ...c, severity, reasons, probe, tldSuspect: c.tldSuspect }
  })

  const ASN_SET = new Set(Object.keys(CHEAT_PROXY_ASN))

  function hasSuspiciousTLD(domain) {
    let d = (domain || "").toLowerCase()
    return SUSPICIOUS_TLDS.some(t => d.endsWith(t) || d.includes(t + "/")) ||
           SUSPICIOUS_DOMAIN_WORDS.some(w => d.split(".")[0].includes(w))
  }

  findings.sort((a, b) => {
    let aTld = hasSuspiciousTLD(a.domain) ? 0 : 1
    let bTld = hasSuspiciousTLD(b.domain) ? 0 : 1
    if (aTld !== bTld) return aTld - bTld

    let aAsn = (a.as || "").split(" ")[0].toUpperCase()
    let bAsn = (b.as || "").split(" ")[0].toUpperCase()
    let aKnown = ASN_SET.has(aAsn) ? 0 : 1
    let bKnown = ASN_SET.has(bAsn) ? 0 : 1
    if (aKnown !== bKnown) return aKnown - bKnown

    let sevOrder = { HIGH: 0, MEDIUM: 1 }
    if (a.severity !== b.severity) return sevOrder[a.severity] - sevOrder[b.severity]

    let aOnline = (a.probe && a.probe.online) ? 0 : 1
    let bOnline = (b.probe && b.probe.online) ? 0 : 1
    if (aOnline !== bOnline) return aOnline - bOnline

    return b.hits - a.hits
  })

  let ghostAppFindings = []
  const GHOST_SUSPECT_DOMAINS = new Set(Object.keys(KNOWN_CHEAT_INFRA))

  let suspectByBundle = {}
  for (let e of netEntries) {
    let bid = e.bundleID || ""
    let dom = (e.domain || "").toLowerCase()
    if (!bid) continue
    if (FF_LEGIT_CALLERS.has(bid) && FF_PROXY_LOGIN_DOMAINS.has(dom)) continue
    
    // WHITELIST CHECK
    if (WHITELIST_IPS.has(dom)) continue

    let isKnown = GHOST_SUSPECT_DOMAINS.has(dom)
    let isTld   = SUSPICIOUS_TLDS.some(t => dom.endsWith(t))
    if (isKnown || isTld) {
      if (!suspectByBundle[bid]) suspectByBundle[bid] = { domains: [], hits: 0 }
      suspectByBundle[bid].domains.push(e.domain)
      suspectByBundle[bid].hits += (e.hits || 1)
    }
  }
  for (let [bid, info] of Object.entries(suspectByBundle)) {
    ghostAppFindings.push({ bundleID: bid, domains: [...new Set(info.domains)], hits: info.hits })
  }

  return { findings, netEntries, cheatAppFindings, knownCheatFindings, ghostAppFindings, proxyLoginFindings }
}

function wait(ms) {
  return new Promise(resolve => Timer.schedule(ms, false, resolve))
}

function buildHTML(findings, netEntries, cheatAppFindings, knownCheatFindings, ipsFindings, ipsMeta, _unused, ghostAppFindings, proxyLoginFindings, filename) {
  let allDomains = new Set(netEntries.map(e => e.domain || ""))

  let allTimestamps = netEntries.map(e => e.timeStamp).filter(Boolean).sort()
  let firstTs = allTimestamps.length ? new Date(allTimestamps[0]) : null
  let lastTs  = allTimestamps.length ? new Date(allTimestamps[allTimestamps.length - 1]) : null

  function fmtDt(d) {
    if (!d) return "?"
    return d.toLocaleString("pt-BR", {
      day:"2-digit", month:"2-digit", year:"numeric",
      hour:"2-digit", minute:"2-digit"
    })
  }

  let uptimeStr = "?"
  let uptimeWarning = false
  if (firstTs && lastTs) {
    let diffMs  = lastTs - firstTs
    let diffMin = Math.floor(diffMs / 60000)
    let diffH   = Math.floor(diffMin / 60)
    let diffD   = Math.floor(diffH / 24)
    let remH    = diffH % 24
    let remMin  = diffMin % 60
    if (diffD > 0)      uptimeStr = `${diffD}d ${remH}h ${remMin}min`
    else if (diffH > 0) uptimeStr = `${diffH}h ${remMin}min`
    else                uptimeStr = `${diffMin} minutos`
    if (diffMin < 20)   uptimeWarning = true
  }

  let startStr = fmtDt(firstTs)
  let endStr   = fmtDt(lastTs)

  let staleWarning = false
  let staleMinutes = 0
  let staleStr = ""
  if (lastTs) {
    let now = new Date()
    let diffFromNow = Math.floor((now - lastTs) / 60000)
    staleMinutes = diffFromNow
    if (diffFromNow > 15) {
      staleWarning = true
      if (diffFromNow >= 1440) {
        let d = Math.floor(diffFromNow / 1440)
        let h = Math.floor((diffFromNow % 1440) / 60)
        staleStr = `${d}d ${h}h atrás`
      } else if (diffFromNow >= 60) {
        let h = Math.floor(diffFromNow / 60)
        let m = diffFromNow % 60
        staleStr = `${h}h ${m}min atrás`
      } else {
        staleStr = `${diffFromNow} minutos atrás`
      }
    }
  }

  let appStoreEntries = netEntries
    .filter(e => e.bundleID === "com.apple.AppStore" && e.timeStamp)
    .sort((a, b) => b.timeStamp.localeCompare(a.timeStamp))
  let appStoreLastTs = appStoreEntries.length ? new Date(appStoreEntries[0].timeStamp) : null
  let appStoreStr = fmtDt(appStoreLastTs)

  let ffAll = netEntries.filter(e => (e.bundleID === "com.dts.freefireth" || e.bundleID === "com.dts.freefiremax") && e.timeStamp)
  let ffSessions = []
  let seenTimes = new Set()
  for (let e of ffAll) {
    let d = new Date(e.timeStamp)
    let key = d.getHours() + ":" + d.getMinutes()
    if (!seenTimes.has(key)) {
      let loginType = "Desconhecido"
      let domain = (e.domain || "").toLowerCase()
      if (domain.includes("facebook")) loginType = "Facebook"
      else if (domain.includes("google")) loginType = "Google/Gmail"
      else if (domain.includes("twitter") || domain.includes("t.co")) loginType = "Twitter/X"
      else if (domain.includes("vk.com")) loginType = "VK"
      else if (domain.includes("garena")) loginType = "Garena"
      
      ffSessions.push({ ts: e.timeStamp, loginType })
      seenTimes.add(key)
    }
  }
  ffSessions = ffSessions
    .sort((a, b) => b.ts.localeCompare(a.ts))
    .slice(0, 3)
    .map(s => ({ ...s, ts: fmtDt(new Date(s.ts)) }))

  let ffStr     = ffSessions.length > 0 ? ffSessions[0].ts : null
  let ffEntries = ffAll
  let ffVersion = ffAll.length > 0
    ? (ffAll[0].bundleID === "com.dts.freefiremax" ? "Free Fire MAX" : "Free Fire")
    : null

  let highCount = findings.filter(f => f.severity === "HIGH").length
  let medCount  = findings.filter(f => f.severity === "MEDIUM").length
  proxyLoginFindings = proxyLoginFindings || []
  let criticalCount = cheatAppFindings.length + knownCheatFindings.length + proxyLoginFindings.length

  let criticalCards = ""

  for (let p of proxyLoginFindings) {
    let bundleList = p.bundles.map(b => `<span class="bundle" style="color:#ff4400">${b}</span>`).join(" ")
    criticalCards += `
    <div class="card critical" style="border-left-color:#ff4400;background:#140800;border-color:#3a1500;">
      <div class="card-header">
        <span class="badge critical" style="background:#1a0800;color:#ff4400;border-color:#ff440055;">&#128274; PROXY BYPASS LOGIN — CRÍTICO</span>
        <span class="conns">${p.hits} conexões</span>
      </div>
      <div class="card-domain">${p.domain}</div>
      <div class="grid">
        <div class="row"><span class="label">Detecção</span><span class="val reason" style="color:#ff6600;font-weight:bold">Domínio exclusivo do Free Fire chamado por app não autorizado — padrão de proxy interceptando login</span></div>
        <div class="row"><span class="label">App interceptor</span><span class="val">${bundleList}</span></div>
        <div class="row"><span class="label">Esperado de</span><span class="val"><span class="bundle" style="color:#44ff88">com.dts.freefireth</span> <span class="bundle" style="color:#44ff88">com.dts.freefiremax</span></span></div>
      </div>
    </div>`
  }

  let ghostSection = ""
  if (ghostAppFindings && ghostAppFindings.length > 0) {
    let ghostRows = ghostAppFindings.map(g => {
      let domList = g.domains.slice(0,5).map(d => `<span class="ghost-domain">${d}</span>`).join("")
      let more = g.domains.length > 5 ? `<span class="ghost-more">+${g.domains.length - 5} mais</span>` : ""
      return `
      <div class="ghost-row">
        <div class="ghost-row-left">
          <span class="ghost-bundle">${g.bundleID}</span>
          <div class="ghost-domains">${domList}${more}</div>
        </div>
        <div class="ghost-row-right">
          <span class="ghost-hits">${g.hits} hits</span>
          <span class="ghost-label" data-i18n="ghostNotInUsage">⚠ Ausente no app_usage</span>
        </div>
      </div>`
    }).join("")
    ghostSection = `
  <div class="ghost-banner">
    <div class="ghost-header">
      <span class="ghost-icon">👻</span>
      <div class="ghost-title-block">
        <div class="ghost-title" data-i18n="ghostTitle">Apps com domínios suspeitos — ausentes no app_usage</div>
        <div class="ghost-sub" data-i18n="ghostSub">Presente no relatório de rede mas não encontrado nos dados de análise</div>
      </div>
      <span class="ghost-count">${ghostAppFindings.length}</span>
    </div>
    <div class="ghost-rows">${ghostRows}</div>
    <div class="ghost-hint" data-i18n="ghostHint">⚠ App pode ter sido instalado via sideload ou o arquivo app_usage não cobre o período</div>
  </div>`
  }

  for (let k of knownCheatFindings) {
    let bundleList = k.bundles.map(b => `<span class="bundle">${b}</span>`).join(" ")
    let indicatorKind = (k.indicator.includes(".") && !k.indicator.match(/^\d+\.\d+/)) ? "domain" : "ip"
    let indicatorText = indicatorKind === "domain" ? "Domínio" : "IP"
    criticalCards += `
    <div class="card critical">
      <div class="card-header">
        <span class="badge critical" data-badge-type="known-cheat">&#9888; CRÍTICO — CHEAT CONFIRMADO</span>
        <span class="conns">${k.hits} conexões</span>
      </div>
      <div class="card-domain">${k.indicator}</div>
      <div class="grid">
        <div class="row"><span class="label" data-i18n="labelCheat">Cheat</span><span class="val reason" style="color:#ff4444;font-weight:bold">${k.desc}</span></div>
        <div class="row"><span class="label" data-i18n="labelIndicator">Indicador</span><span class="val" data-i18n-indicator="${indicatorKind}">${indicatorText} detectado no relatório de rede</span></div>
        ${bundleList ? `<div class="row"><span class="label">Usado por</span><span class="val">${bundleList}</span></div>` : ""}
      </div>
    </div>`
  }

  for (let f of cheatAppFindings) {
    let suspectDomainSet = new Set(findings.map(f2 => f2.domain))
    let suspectDomains = f.domains.filter(d => suspectDomainSet.has(d))
    let suspectRows = suspectDomains.map(d => {
      let match = findings.find(f2 => f2.domain === d)
      let info = match ? ` &mdash; ${match.isp} (${match.country})` : ""
      return `<div class="domain-row"><span class="domain-badge ${match ? match.severity.toLowerCase() : ""}" data-sev="${match ? match.severity : ""}">${match ? (match.severity === "HIGH" ? "SUSPEITO" : "POSSÍVEL") : ""}</span> ${d}${info}</div>`
    }).join("")
    criticalCards += `
    <div class="card critical">
      <div class="card-header">
        <span class="badge critical">&#9888; CRÍTICO — APP PROXY/CHEAT</span>
        <span class="conns">${f.hits} conexões</span>
      </div>
      <div class="card-domain">${f.bundleID}</div>
      <div class="grid">
        <div class="row"><span class="label">App</span><span class="val reason">${f.desc}</span></div>
        <div class="row">
          <span class="label">IPs suspeitos<br><span class="sub">${suspectDomains.length} de ${f.domains.length} domínios</span></span>
          <span class="val">${suspectRows || '<span class="none">Nenhum IP suspeito detectado</span>'}</span>
        </div>
      </div>
    </div>`
  }

  let cards = ""
  if (findings.length === 0) {
    cards = `<div class="ok">&#10003; Nenhum IP VPS / Hosting / Proxy detectado.</div>`
  } else {
    for (let f of findings) {
      let tag = f.tldSuspect ? "DOMÍNIO SUSPEITO" : f.hosting ? "VPS/HOSTING" : f.proxy ? "PROXY/VPN" : "NUVEM"
      let cls = f.tldSuspect ? "tld-flag" : f.severity === "HIGH" ? "high" : "medium"
      let sev = f.tldSuspect ? "&#9888; DOMÍNIO SUSPEITO" : f.severity === "HIGH" ? "SUSPEITO" : "POSSÍVEL"
      let bundleList = f.bundles.map(b => `<span class="bundle">${b}</span>`).join(" ")
      cards += `
      <div class="card ${cls}">
        <div class="card-header">
          <span class="badge ${cls}">${sev}</span>
          <span class="conns">${f.hits} conexões</span>
        </div>
        <div class="card-domain">${f.domain}</div>
        <div class="grid">
          <div class="row"><span class="label">IP</span><span class="val">${f.ip}</span></div>
          <div class="row"><span class="label" data-i18n="labelCountry">País</span><span class="val">${f.country} / ${f.city}</span></div>
          <div class="row"><span class="label" data-i18n="labelProvider">Provedor</span><span class="val isp">${f.isp}</span></div>
          <div class="row"><span class="label">Org</span><span class="val">${f.org}</span></div>
          ${f.reverse ? `<div class="row"><span class="label">rDNS</span><span class="val rdns">${f.reverse}</span></div>` : ""}
          ${f.probe ? `<div class="row"><span class="label">HTTP</span><span class="val">
            ${f.probe.online
              ? `<span class="http-on">&#9679; Online</span>${f.probe.status ? ` &mdash; HTTP ${f.probe.status}` : ""}${f.probe.banner ? ` &mdash; <span class="http-banner">${f.probe.banner}</span>` : ""}`
              : `<span class="http-off">&#9679; Offline / Sem resposta</span>`
            }
          </span></div>` : ""}
          <div class="row"><span class="label" data-i18n="labelReason">Motivo</span><span class="val reason" data-reasons='${JSON.stringify(f.reasons)}'>${f.reasons.join("<br>")}</span></div>
          <div class="row"><span class="label" data-i18n="labelUsedBy">Usado por</span><span class="val">${bundleList}</span></div>
        </div>
      </div>`
    }
  }

  let uptimeBg    = uptimeWarning ? "background:linear-gradient(90deg,#2a1000,#1a0800)" : "background:#0d1b2a"
  let uptimeDotCl = uptimeWarning ? "background:#ff8800;box-shadow:0 0 6px #ff8800" : "background:#4caf50;box-shadow:0 0 6px #4caf50"
  let uptimeWarnBadge = uptimeWarning
    ? `<span style="margin-left:8px;background:#3a1800;color:#ff8800;border:1px solid #ff8800;font-size:9px;padding:2px 7px;border-radius:10px;font-weight:bold" data-i18n="uptimeLess20">&#9888; MENOS DE 20MIN — Relatório pode não cobrir a partida inteira!</span>`
    : ""

  let rootsWarn = ""
  if (ipsMeta && ipsMeta.rootsInstalled > 0) {
    rootsWarn = `
  <div class="roots-banner">
    <div class="roots-icon">🔐</div>
    <div>
      <div class="roots-label" data-i18n="rootsLabel">Certificado Raiz Suspeito</div>
      <div class="roots-detail" data-roots-count="${ipsMeta.rootsInstalled}">${ipsMeta.rootsInstalled} certificado${ipsMeta.rootsInstalled > 1 ? "s" : ""} raiz instalado${ipsMeta.rootsInstalled > 1 ? "s" : ""} (roots_installed: ${ipsMeta.rootsInstalled})</div>
      <div class="roots-hint" data-i18n="rootsHint">Certificados raiz permitem interceptar tráfego HTTPS — padrão de proxy cheat tipo mitmproxy</div>
    </div>
  </div>`
  }

  let ipsSection = ""
  if (ipsFindings && ipsFindings.length > 0) {
    let ipsRows = ipsFindings.map(f => `
      <div class="ips-row ips-row-${f.category || 'warning'}">
        <div class="ips-row-left">
          <div class="ips-row-top">
            <span class="ips-cat-badge ips-cat-${f.category || 'warning'}">${f.category === 'critical' ? '🚨 CRÍTICO' : f.category === 'vpn' ? '🔒 VPN/PROXY' : f.category === 'developer' ? '🛠 DEVELOPER' : '⚠ SUSPEITO'}</span>
          </div>
          <span class="ips-bundle">${f.bundleId}</span>
          <span class="ips-reason" data-reason-key="${encodeURIComponent(f.bundleId)}">${f.reason}</span>
        </div>
        <div class="ips-row-right">
          <span class="ips-version">v${f.version}</span>
          <span class="ips-badge ${f.eventType === 'launches' ? 'launched' : 'installed'}" data-i18n="${f.eventType === 'launches' ? 'ipsLaunched' : 'ipsInstalled'}">${f.eventType === 'launches' ? '▶ Aberto' : '⬇ Instalado'}</span>
        </div>
      </div>`).join("")

    ipsSection = `
  <div class="ips-banner">
    <div class="ips-header">
      <span class="ips-icon">📲</span>
      <div class="ips-header-text">
        <div class="ips-title" data-i18n="ipsTitle">Apps Suspeitos Instalados</div>
        <div class="ips-sub" data-i18n="ipsSub">Detectados no histórico de uso do dispositivo</div>
      </div>
      <span class="ips-count">${ipsFindings.length}</span>
    </div>
    <div class="ips-rows">${ipsRows}</div>
    <div class="ips-hint" data-i18n="ipsHint">⚠ Apps encontrados nos dados de análise do iPhone — indicam presença de ferramentas de cheat/jailbreak/proxy</div>
  </div>`
  }

  let staleBanner = staleWarning ? `
  <div class="stale-banner">
    <div class="stale-left">&#128337;</div>
    <div>
      <div class="stale-label">Arquivo possivelmente antigo</div>
      <div class="stale-time">Último registro: <strong>${staleStr}</strong></div>
      <div class="stale-hint">Suspeita: arquivo gerado fora do período da partida para esconder atividade.</div>
    </div>
  </div>` : ""

  function loginColor(type) {
    if (type.includes("Facebook"))  return "#1877f2"
    if (type.includes("Twitter") || type.includes("X")) return "#1da1f2"
    if (type.includes("Gmail"))     return "#ea4335"
    if (type.includes("VK"))        return "#4a76a8"
    return "#556"
  }

  let ffSessionRows = ffSessions.map((s, i) => {
    let col = loginColor(s.loginType)
    let label = i === 0 ? "Última abertura" : i === 1 ? "2ª abertura" : "3ª abertura"
    return `
      <div class="ff-session-row">
        <div class="ff-session-left">
          <span class="ff-session-num">${label}</span>
          <span class="ff-session-ts">${s.ts}</span>
        </div>
        <span class="ff-login-badge" style="background:${col}22;color:${col};border:1px solid ${col}44">${s.loginType}</span>
      </div>`
  }).join("")

  let ffBanner = ffStr ? `
  <div class="ff-banner">
    <div class="ff-left">&#128293;</div>
    <div class="ff-info">
      <div class="ff-label">${ffVersion || "Free Fire"} — Sessões no período</div>
      ${ffSessionRows}
      <div class="ff-sessions">${ffEntries.length} inicializações registradas no período</div>
      <div class="ff-hint">Se a última abertura foi após a partida &rarr; aplique o W.O!</div>
    </div>
  </div>` : ""

  let appStoreBanner = appStoreStr ? `
  <div class="appstore-banner">
    <div class="appstore-left">&#128722;</div>
    <div>
      <div class="appstore-label">App Store aberta</div>
      <div class="appstore-time">${appStoreStr}</div>
      <div class="appstore-hint">Se foi após a partida &rarr; aplique o W.O!</div>
    </div>
  </div>` : ""

  let rawHtml = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">
<style>
  * { box-sizing:border-box; margin:0; padding:0; }
  body { background:#0a0a0f; color:#e0e0e0; font-family:-apple-system,ui-monospace,monospace; font-size:13px; }

  /* HERO */
  .hero {
    background: linear-gradient(160deg, #0d1b2a 0%, #0a0a12 70%);
    border-bottom: 1px solid #1a2a3a;
    padding: 28px 16px 20px;
    position: relative; overflow: hidden;
    text-align: center;
  }
  .hero::after {
    content:""; position:absolute; top:-60px; left:50%; transform:translateX(-50%);
    width:220px; height:220px;
    background:radial-gradient(circle, #00e5ff0d 0%, transparent 70%);
    border-radius:50%; pointer-events:none;
  }
  .hero-eyebrow {
    font-size:9px; letter-spacing:3px; color:#00e5ff55;
    text-transform:uppercase; margin-bottom:8px;
  }
  .hero-name {
    font-size:30px; font-weight:700; color:#fff;
    letter-spacing:-0.5px; margin-bottom:5px;
  }
  .hero-credits {
    font-size:11px; color:#3a5a72; letter-spacing:2.5px;
    margin-bottom:18px; font-weight:500;
  }
  .hero-credits .credit-name {
    color:#557a94;
    transition: color 0.2s;
  }
  .hero-name span { color:#00e5ff; }
  .hero-file {
    font-size:10px; color:#556; word-break:break-all;
    padding:7px 10px; background:#0d1520;
    border-radius:7px; border-left:3px solid #00e5ff33;
    margin-bottom:14px; line-height:1.5;
    text-align:left;
  }
  .hero-file strong { color:#00e5ff99; }

  /* STATS BAR */
  .stats-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }
  .stat-item {
    flex: 1;
    background: #12121a;
    padding: 12px 10px;
    border-radius: 10px;
    border: 1px solid #1a1a25;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
  .stat-val {
    display: block;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 2px;
  }
  .stat-label {
    font-size: 9px;
    color: #556;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .stat-val.crit { color: #ff4444; }
  .stat-val.high { color: #ff8800; }
  .stat-val.med  { color: #ffcc00; }

  /* TIMELINE */
  .timeline {
    background: #12121a;
    border-radius: 10px;
    border: 1px solid #1a1a25;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
  .time-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .time-label { color: #556; font-size: 11px; }
  .time-val { color: #aaa; font-weight: 500; }
  .uptime-box {
    margin-top: 10px;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .uptime-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }
  .uptime-info { flex: 1; }
  .uptime-lbl { font-size: 10px; color: #557a94; margin-bottom: 2px; }
  .uptime-val-text { font-size: 14px; font-weight: 700; color: #fff; }

  /* CARDS */
  .section-title {
    font-size: 11px;
    color: #556;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 20px 0 10px 5px;
    font-weight: 700;
  }
  .card {
    background: #12121a;
    border-radius: 12px;
    border: 1px solid #1a1a25;
    margin-bottom: 12px;
    padding: 15px;
    border-left: 4px solid #333;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
  .card.critical { border-left-color: #ff4444; background: #1a1010; border-color: #3a1a1a; }
  .card.high { border-left-color: #ff8800; }
  .card.medium { border-left-color: #ffcc00; }
  .card.tld-flag { border-left-color: #00e5ff; background: #0a1a1a; }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .badge {
    font-size: 9px;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 5px;
  }
  .badge.critical { background: #ff4444; color: #fff; }
  .badge.high { background: #ff8800; color: #000; }
  .badge.medium { background: #ffcc00; color: #000; }
  .badge.tld-flag { background: #00e5ff; color: #000; }
  .conns { font-size: 10px; color: #556; }
  .card-domain {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 12px;
    word-break: break-all;
  }
  .grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 5px;
    border-bottom: 1px solid #1a1a25;
  }
  .label { font-size: 10px; color: #556; min-width: 80px; }
  .val { font-size: 11px; color: #aaa; text-align: right; word-break: break-all; }
  .val.reason { color: #ff8888; text-align: left; line-height: 1.4; }
  .bundle { background: #1a1a25; padding: 2px 5px; border-radius: 4px; font-size: 9px; color: #00e5ff; margin-left: 3px; }

  /* BANNERS */
  .ff-banner, .stale-banner, .appstore-banner, .roots-banner {
    display: flex;
    gap: 15px;
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 15px;
    border: 1px solid #1a1a25;
  }
  .ff-banner { background: #1a1005; border-color: #3a2005; }
  .stale-banner { background: #1a0505; border-color: #3a0505; }
  .appstore-banner { background: #05101a; border-color: #05203a; }
  .roots-banner { background: #1a051a; border-color: #3a053a; }
  .ff-left, .stale-left, .appstore-left, .roots-icon { font-size: 24px; }
  .ff-label, .stale-label, .appstore-label, .roots-label { font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 4px; }
  .ff-sessions, .stale-time, .appstore-time, .roots-detail { font-size: 11px; color: #aaa; margin-bottom: 5px; }
  .ff-hint, .stale-hint, .appstore-hint, .roots-hint { font-size: 10px; color: #666; font-style: italic; }
  .ff-session-row { display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; padding:4px 0; border-bottom:1px solid #ffffff05; }
  .ff-session-num { font-size:9px; color:#556; text-transform:uppercase; margin-right:8px; }
  .ff-session-ts { font-size:11px; color:#aaa; font-weight:500; }
  .ff-login-badge { font-size:8px; padding:1px 5px; border-radius:4px; font-weight:700; text-transform:uppercase; }

  /* IPS SECTION */
  .ips-banner { background: #12121a; border-radius: 15px; border: 1px solid #1a1a25; margin-bottom: 20px; overflow: hidden; }
  .ips-header { background: #1a1a25; padding: 15px; display: flex; align-items: center; gap: 12px; }
  .ips-icon { font-size: 20px; }
  .ips-header-text { flex: 1; }
  .ips-title { font-size: 14px; font-weight: 700; color: #fff; }
  .ips-sub { font-size: 10px; color: #556; }
  .ips-count { background: #ff4444; color: #fff; font-size: 12px; font-weight: 800; padding: 4px 10px; border-radius: 20px; }
  .ips-rows { padding: 10px; }
  .ips-row { display: flex; justify-content: space-between; padding: 12px; border-bottom: 1px solid #1a1a25; align-items: center; }
  .ips-row:last-child { border-bottom: none; }
  .ips-row-left { flex: 1; display: flex; flex-direction: column; gap: 4px; }
  .ips-bundle { font-size: 12px; font-weight: 700; color: #eee; }
  .ips-reason { font-size: 10px; color: #ff8888; }
  .ips-cat-badge { font-size: 8px; font-weight: 800; padding: 2px 6px; border-radius: 4px; margin-bottom: 2px; display: inline-block; }
  .ips-cat-critical { background: #ff444422; color: #ff4444; border: 1px solid #ff444444; }
  .ips-cat-vpn { background: #00e5ff22; color: #00e5ff; border: 1px solid #00e5ff44; }
  .ips-row-right { text-align: right; }
  .ips-version { display: block; font-size: 10px; color: #556; margin-bottom: 4px; }
  .ips-badge { font-size: 9px; padding: 3px 7px; border-radius: 5px; font-weight: 700; }
  .ips-badge.launched { background: #4caf5022; color: #4caf50; }
  .ips-badge.installed { background: #55667722; color: #aaa; }

  /* GHOST SECTION */
  .ghost-banner { background:#12121a; border-radius:15px; border:1px solid #1a1a25; margin-bottom:20px; overflow:hidden; border-left:4px solid #ff4400; }
  .ghost-header { background:#1a0800; padding:15px; display:flex; align-items:center; gap:12px; }
  .ghost-title { font-size:14px; font-weight:700; color:#fff; }
  .ghost-sub { font-size:10px; color:#642; }
  .ghost-count { background:#ff4400; color:#fff; font-size:12px; font-weight:800; padding:4px 10px; border-radius:20px; }
  .ghost-rows { padding:10px; }
  .ghost-row { display:flex; justify-content:space-between; padding:12px; border-bottom:1px solid #ffffff05; align-items:center; }
  .ghost-bundle { font-size:11px; font-weight:700; color:#ff8800; }
  .ghost-domains { display:flex; flex-wrap:wrap; gap:4px; margin-top:4px; }
  .ghost-domain { font-size:9px; background:#1a1a25; padding:1px 4px; border-radius:3px; color:#666; }
  .ghost-hits { font-size:10px; color:#556; }
  .ghost-label { font-size:9px; color:#ff4400; font-weight:bold; }

  .ok { background: #0a1a0a; color: #4caf50; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #1a3a1a; font-weight: 700; }
</style>
</head>
<body>
  <div class="hero">
    <div class="hero-eyebrow">SECURITY SCANNER</div>
    <div class="hero-name">Keller<span>SS</span></div>
    <div class="hero-credits">BY <span class="credit-name">KELLERZZ</span></div>
    <div class="hero-file">Relatório: <strong>${filename}</strong></div>
    
    <div class="stats-bar">
      <div class="stat-item"><span class="stat-val crit">${criticalCount}</span><span class="stat-label">Críticos</span></div>
      <div class="stat-item"><span class="stat-val high">${highCount}</span><span class="stat-label">Suspeitos</span></div>
      <div class="stat-item"><span class="stat-val med">${medCount}</span><span class="stat-label">Possíveis</span></div>
    </div>

    <div class="timeline">
      <div class="time-row"><span class="time-label">Início</span><span class="time-val">${startStr}</span></div>
      <div class="time-row"><span class="time-label">Fim</span><span class="time-val">${endStr}</span></div>
      <div class="uptime-box" style="${uptimeBg}">
        <div class="uptime-dot" style="${uptimeDotCl}"></div>
        <div class="uptime-info">
          <div class="uptime-lbl">TEMPO COBERTO PELO RELATÓRIO</div>
          <div class="uptime-val-text">${uptimeStr}${uptimeWarnBadge}</div>
        </div>
      </div>
    </div>
  </div>

  <div style="padding:15px">
    ${staleBanner}
    ${ffBanner}
    ${appStoreBanner}
    ${rootsWarn}
    ${ipsSection}
    ${ghostSection}

    <div class="section-title">Análise de Conexões Suspeitas</div>
    ${criticalCards}
    ${cards}
  </div>
</body>
</html>`
  return rawHtml
}

async function showResult(html) {
  let view = new WebView()
  await view.loadHTML(html)
  await view.present()
}

async function main() {
  let fm = FileManager.local()
  let content1, path1, content2, path2
  
  try {
    let files = await DocumentPicker.openFile()
    if (!files || files.length === 0) return
    
    if (Array.isArray(files)) {
      path1 = files[0]
      content1 = fm.readString(path1)
      if (files.length > 1) {
        path2 = files[1]
        content2 = fm.readString(path2)
      }
    } else {
      path1 = files
      content1 = fm.readString(path1)
    }
  } catch(e) {
    return
  }

  function classifyContent(content, path) {
    if (looksLikePrivacyReport(content)) return "ndjson"
    if (looksLikeUsageFile(content)) return "ips"
    let name = (path || "").split("/").pop().toLowerCase()
    if (name.endsWith(".ndjson") || name.includes("privacy")) return "ndjson"
    if (name.endsWith(".ips") || name.includes("xp_amp")) return "ips"
    return "unknown"
  }

  let type1 = classifyContent(content1, path1)
  let type2 = content2 ? classifyContent(content2, path2) : null

  let ndjsonContent, ndjsonPath, ipsContent
  if (type2 && type1 === type2) {
    let a = new Alert()
    a.title = "Arquivos do mesmo tipo"
    a.message = type1 === "ndjson"
      ? "Os 2 arquivos parecem ser App Privacy Reports. Selecione um xp_amp_app_usage_dnu*.ips como segundo arquivo."
      : "Os 2 arquivos parecem ser dados de análise. Selecione um App_Privacy_Report.ndjson como primeiro arquivo."
    a.addAction("OK")
    await a.present()
    return
  }

  if (type1 === "ndjson" || type2 === "ips") {
    ndjsonContent = content1; ndjsonPath = path1
    ipsContent = content2
  } else if (type1 === "ips" || type2 === "ndjson") {
    ipsContent = content1
    ndjsonContent = content2; ndjsonPath = path2
  } else {
    let a = new Alert()
    a.title = "Arquivo não reconhecido"
    a.message = "Não foi possível identificar o tipo dos arquivos.\n\nVerifique se selecionou:\n• App_Privacy_Report.ndjson\n• xp_amp_app_usage_dnu*.ips"
    a.addAction("OK")
    await a.present()
    return
  }

  if (!ndjsonContent) {
    let a = new Alert()
    a.title = "App Privacy Report ausente"
    a.message = "O arquivo App_Privacy_Report.ndjson é obrigatório.\n\nAjustes → Privacidade → Relatório de Privacidade de Apps → Exportar"
    a.addAction("OK")
    await a.present()
    return
  }

  let entries = parseNdjson(ndjsonContent)
  let validation = validateReport(entries)
  if (!validation.ok) {
    let a = new Alert()
    a.title = "App Privacy Report inválido"
    a.message = validation.reason + "\n\nExporte em: Ajustes → Privacidade → Relatório de Privacidade de Apps → Exportar"
    a.addAction("OK")
    await a.present()
    return
  }

  let ipsFindings = []
  let ipsMeta = { iosVersion: null, rootsInstalled: 0 }
  if (ipsContent) {
    let parsed = parseIpsFile(ipsContent)
    ipsFindings = analyzeIps(parsed)
    if (parsed.header) {
      let osMatch = (parsed.header.os_version || "").match(/iPhone OS ([\d.]+)/)
      ipsMeta.iosVersion = osMatch ? osMatch[1] : parsed.header.os_version || null
      ipsMeta.rootsInstalled = parsed.header.roots_installed || 0
    }
  }

  let filename = (ndjsonPath || "arquivo").split("/").pop()
  Speech.speak(S.start)

  let { findings, netEntries, cheatAppFindings, knownCheatFindings, ghostAppFindings, proxyLoginFindings } = await analyze(entries)
  let html = buildHTML(findings, netEntries, cheatAppFindings, knownCheatFindings, ipsFindings, ipsMeta, [], ghostAppFindings, proxyLoginFindings, filename)
  
  Speech.speak(S.done)
  await showResult(html)
}

main()
