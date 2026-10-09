const cats=["সব","জাতীয়","রাজনীতি","অর্থনীতি","ব্যাংক","খেলাধুলা","আন্তর্জাতিক","বিনোদন","সেলিব্রেটি","মিডিয়াপাড়া","সোশ্যাল মিডিয়া","ইউটিউব ট্রেন্ডিং","প্রযুক্তি","স্বাস্থ্য","শিক্ষাব্যবস্থা","ইসলামিক","আইন ও আদালত","অপরাধ","দুর্ঘটনা","যোগাযোগ","আবহাওয়া","কৃষি","বিদ্যুৎ ও জ্বালানি","প্রবাস","শেয়ারবাজার","বাংলাদেশের ভবিষ্যৎ","গ্রামভিত্তিক","ফিচার","Tech","সাহিত্য","মতামত","ভিডিও","জুলাই-২০২৪","ধর্ম"];
const ci={"জাতীয়":"🏛️","রাজনীতি":"🗳️","অর্থনীতি":"💹","ব্যাংক":"🏦","খেলাধুলা":"🏅","আন্তর্জাতিক":"🌍","বিনোদন":"🎬","সেলিব্রেটি":"⭐","মিডিয়াপাড়া":"📺","সোশ্যাল মিডিয়া":"📱","ইউটিউব ট্রেন্ডিং":"▶️","প্রযুক্তি":"💻","স্বাস্থ্য":"🩺","শিক্ষাব্যবস্থা":"📚","ইসলামিক":"🕌","আইন ও আদালত":"⚖️","অপরাধ":"🚨","দুর্ঘটনা":"🚧","যোগাযোগ":"🚆","আবহাওয়া":"⛅","কৃষি":"🌱","বিদ্যুৎ ও জ্বালানি":"⚡","প্রবাস":"✈️","শেয়ারবাজার":"📊","বাংলাদেশের ভবিষ্যৎ":"🔭","গ্রামভিত্তিক":"🌾","ফিচার":"📝","Tech":"💻","সাহিত্য":"📖","মতামত":"💬","ভিডিও":"🎥","জুলাই-২০২৪":"🕊️","ধর্ম":"🕌"};
const KW={"রাজনীতি":["বিএনপি","আওয়ামী","জামায়াত","এনসিপি","নির্বাচন","সংসদ","মন্ত্রী","রাজনীতি","প্রধান উপদেষ্টা","সরকার","দলীয়","bnp","politic","election","parliament","minister"],
"অর্থনীতি":["অর্থনীতি","বাজেট","ডলার","রপ্তানি","আমদানি","মূল্যস্ফীতি","বিনিয়োগ","বাণিজ্য","economy","budget","export","inflation","trade"],
"ব্যাংক":["ব্যাংক","ঋণ","আমানত","bank","loan","deposit"],
"শেয়ারবাজার":["শেয়ার","ডিএসই","সিএসই","পুঁজিবাজার","stock","dse"],
"খেলাধুলা":["ক্রিকেট","ফুটবল","ম্যাচ","টেস্ট","বিপিএল","টাইগার","বিশ্বকাপ","গোল","খেলা","cricket","football","match","sports","bpl","tournament"],
"আন্তর্জাতিক":["যুক্তরাষ্ট্র","ভারত","চীন","রাশিয়া","ইসরায়েল","গাজা","ইউক্রেন","পাকিস্তান","ট্রাম্প","জাতিসংঘ","বিশ্ব","international","world","gaza","ukraine","trump","china"],
"বিনোদন":["সিনেমা","নাটক","চলচ্চিত্র","গান","অভিনেত্রী","অভিনেতা","মুক্তি","বিনোদন","film","movie","drama","entertainment"],
"সেলিব্রেটি":["তারকা","সেলিব্রেটি","celebrity"],
"প্রযুক্তি":["প্রযুক্তি","এআই","মোবাইল","ইন্টারনেট","অ্যাপ","স্মার্টফোন","সফটওয়্যার","গুগল","অ্যাপল","tech","software","smartphone","google","apple"],
"স্বাস্থ্য":["স্বাস্থ্য","হাসপাতাল","চিকিৎসা","ডেঙ্গু","ডাক্তার","রোগ","টিকা","ওষুধ","health","hospital","dengue","doctor","vaccine"],
"শিক্ষাব্যবস্থা":["শিক্ষা","স্কুল","কলেজ","বিশ্ববিদ্যালয়","পরীক্ষা","এসএসসি","এইচএসসি","ভর্তি","শিক্ষার্থী","education","university","exam","student"],
"ইসলামিক":["ইসলাম","নামাজ","রমজান","হজ","মসজিদ","কোরআন","ঈদ","মাদ্রাসা","islam","ramadan","hajj"],
"আইন ও আদালত":["আদালত","হাইকোর্ট","রায়","মামলা","জামিন","আইন","বিচারক","court","verdict","bail","tribunal"],
"অপরাধ":["গ্রেপ্তার","হত্যা","ধর্ষণ","ডাকাতি","খুন","পুলিশ","মাদক","অপরাধ","arrest","murder","police","crime"],
"দুর্ঘটনা":["দুর্ঘটনা","অগ্নিকাণ্ড","আগুন","নিহত","ডুবে","accident","fire","crash"],
"যোগাযোগ":["রেল","ট্রেন","বিমান","মেট্রোরেল","সেতু","সড়ক","মহাসড়ক","train","metro","bridge","highway"],
"আবহাওয়া":["আবহাওয়া","বৃষ্টি","ঝড়","বন্যা","তাপপ্রবাহ","ঘূর্ণিঝড়","শৈত্যপ্রবাহ","weather","rain","cyclone","flood"],
"কৃষি":["কৃষি","কৃষক","ধান","ফসল","সার","চাষ","agriculture","farmer","crop"],
"বিদ্যুৎ ও জ্বালানি":["বিদ্যুৎ","গ্যাস","জ্বালানি","তেল","লোডশেডিং","সৌর","electricity","power","fuel","energy"],
"প্রবাস":["প্রবাসী","রেমিট্যান্স","সৌদি","মালয়েশিয়া","দুবাই","কুয়েত","প্রবাস","remittance"],
"সোশ্যাল মিডিয়া":["ফেসবুক","ভাইরাল","টিকটক","ইনস্টাগ্রাম","viral","facebook","tiktok"],
"ইউটিউব ট্রেন্ডিং":["ইউটিউব","youtube"],
"মিডিয়াপাড়া":["সাংবাদিক","গণমাধ্যম","টক শো","media","journalist"],
"সাহিত্য":["সাহিত্য","কবিতা","উপন্যাস","বইমেলা","লেখক","literature","poem","novel"],
"মতামত":["মতামত","সম্পাদকীয়","opinion","editorial"],
"জুলাই-২০২৪":["জুলাই","আবু সাঈদ","গণঅভ্যুত্থান","৫ আগস্ট"],
"গ্রামভিত্তিক":["গ্রাম","ইউনিয়ন","উপজেলা","village"]};

/* ===== News Pulse অটো-আপডেট স্ক্রিপ্ট =====
   GitHub Actions প্রতি ৩০ মিনিটে এটা চালায়: news-data.json-এ থাকা সোর্স (RSS)
   থেকে নতুন খবর এনে ফাইলে যোগ করে। আপনার সেটিংস (Firebase config ইত্যাদি) অক্ষত থাকে। */
import fs from "node:fs";

const FILE = "news-data.json";
const MAX_FEED_ITEMS = 300, MAX_TOTAL = 500;
const UA = "Mozilla/5.0 (compatible; NewsPulseBot/1.0; +https://github.com)";

const esc = x => String(x == null ? "" : x).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const safeUrl = x => { try { const u = new URL(String(x).trim()); return /^https?:$/.test(u.protocol) ? u.href : ""; } catch (e) { return ""; } };

const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", hellip: "…", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", ldquo: "“", rdquo: "”" };
function decode(s) {
  return String(s || "").replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === "#") { try { const n = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); return String.fromCodePoint(n); } catch (x) { return m; } }
    return ENT[e.toLowerCase()] ?? m;
  });
}
const unCdata = s => String(s || "").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
const plain = h => decode(unCdata(h).replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

function autoCat(t, d, cg) {
  const A = (cg || []).join(" ").toLowerCase(), T = (t || "").toLowerCase(), D = (d || "").toLowerCase();
  let best = "জাতীয়", bs = 0;
  for (const c in KW) {
    if (!cats.includes(c)) continue;
    let s = 0;
    for (const k of KW[c]) { const q = k.toLowerCase(); if (A.includes(q)) s += 3; if (T.includes(q)) s += 2; if (D.includes(q)) s += 1; }
    if (s > bs) { bs = s; best = c; }
  }
  return best;
}

async function getText(url, ms = 20000) {
  try {
    const r = await fetch(url, { headers: { "User-Agent": UA, "Accept": "application/rss+xml, application/xml, text/xml, text/html, */*" }, redirect: "follow", signal: AbortSignal.timeout(ms) });
    if (!r.ok) return "";
    return await r.text();
  } catch (e) { return ""; }
}

/* ---- RSS / Atom পার্সার (কোনো লাইব্রেরি ছাড়া) ---- */
function tag(block, names) {
  for (const n of names) {
    const m = block.match(new RegExp("<" + n + "(?:\\s[^>]*)?>([\\s\\S]*?)</" + n + ">", "i"));
    if (m) return unCdata(m[1]).trim();
  }
  return "";
}
function parseFeed(xml) {
  if (!/<(rss|feed|rdf:RDF)[\s>]/i.test(xml)) return null;
  const blocks = xml.match(/<(item|entry)[\s>][\s\S]*?<\/\1>/gi) || [];
  const out = [];
  for (const b of blocks) {
    const title = plain(tag(b, ["title"]));
    let link = plain(tag(b, ["link"]));
    if (!link) { const m = b.match(/<link[^>]+href=["']([^"']+)["']/i); if (m) link = decode(m[1]); }
    if (!link) link = plain(tag(b, ["guid"]));
    const rawDesc = tag(b, ["content:encoded", "description", "summary", "content"]);
    const date = plain(tag(b, ["pubDate", "published", "updated", "dc:date"]));
    const cg = [...b.matchAll(/<category[^>]*?(?:term=["']([^"']+)["'][^>]*\/?>|>([\s\S]*?)<\/category>)/gi)].map(m => plain(m[1] || m[2] || "")).filter(Boolean);
    let img = "";
    const im = b.match(/<(?:media:content|media:thumbnail|enclosure)[^>]+(?:url|href)=["']([^"']+)["'][^>]*>/i);
    if (im && (!/type=["'](?!image)/i.test(im[0]) || /media:thumbnail/i.test(im[0]))) img = decode(im[1]);
    if (!img) { const m = unCdata(rawDesc).match(/<img[^>]+src=["']([^"']+)["']/i); if (m) img = decode(m[1]); }
    if (title) out.push({ title, link, desc: plain(rawDesc), date, img, cg });
  }
  return out.length ? out : null;
}

async function getFeed(url) {
  const tx = await getText(url);
  return tx ? parseFeed(tx) : null;
}
async function getWP(origin, n) {
  const tx = await getText(origin + "/wp-json/wp/v2/posts?per_page=" + Math.min(n, 50) + "&_embed=1");
  if (!tx) return null;
  let j; try { j = JSON.parse(tx); } catch (e) { return null; }
  if (!Array.isArray(j) || !j.length || !j[0].title) return null;
  return j.map(p => {
    const em = p._embedded || {}, fm = em["wp:featuredmedia"] && em["wp:featuredmedia"][0];
    return { title: plain(p.title && p.title.rendered), link: p.link, desc: plain(p.excerpt && p.excerpt.rendered) || plain(p.content && p.content.rendered).slice(0, 320), date: p.date_gmt ? p.date_gmt + "Z" : p.date, img: (fm && fm.source_url) || "", cg: (em["wp:term"] || []).flat().map(t => t && t.name).filter(Boolean) };
  });
}

async function listFor(src) {
  let inp = String(src.d || "").trim();
  if (!inp) return null;
  if (!/^https?:\/\//i.test(inp)) inp = "https://" + inp;
  let u; try { u = new URL(inp); } catch (e) { return null; }
  const origin = u.origin, n = src.n || 20;
  if (src.feed) { const l = await getFeed(src.feed); if (l) return l; }
  if (/(rss|feed|xml|atom)/i.test(u.pathname + u.search) && u.pathname.length > 1) { const l = await getFeed(u.href); if (l) { src.feed = u.href; return l; } }
  const html = await getText(inp);
  if (html) {
    const alts = [...html.matchAll(/<link[^>]+>/gi)].map(m => m[0]).filter(t => /rel=["']?alternate/i.test(t) && /(rss|atom|xml)/i.test(t)).map(t => { const m = t.match(/href=["']([^"']+)["']/i); try { return m ? new URL(decode(m[1]), inp).href : ""; } catch (e) { return ""; } }).filter(Boolean);
    for (const f of alts.slice(0, 2)) { const l = await getFeed(f); if (l) { src.feed = f; return l; } }
  }
  for (const p of ["/feed", "/rss", "/rss.xml", "/feed/", "/feed.xml", "/atom.xml", "/arcio/rss/", "/feeds/posts/default?alt=rss"]) {
    const l = await getFeed(origin + p); if (l) { src.feed = origin + p; return l; }
  }
  return await getWP(origin, n);
}

function stampBn(d) {
  try {
    return d.toLocaleString("bn-BD", { timeZone: "Asia/Dhaka", day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
  } catch (e) { return d.toISOString(); }
}

/* ===== মূল কাজ ===== */
if (!fs.existsSync(FILE)) { console.log("news-data.json নেই — আগে অ্যাডমিন প্যানেল থেকে বানিয়ে আপলোড করুন।"); process.exit(0); }
const data = JSON.parse(fs.readFileSync(FILE, "utf8"));
data.items = Array.isArray(data.items) ? data.items : [];
data.src = Array.isArray(data.src) ? data.src : [];
if (!data.src.length) { console.log("কোনো সোর্স নেই — অ্যাডমিন প্যানেলের “সোর্স” ট্যাবে সাইট যোগ করে news-data.json আবার আপলোড করুন।"); process.exit(0); }

const have = new Set(data.items.map(x => x.lk).filter(Boolean));
const now = Date.now();
let added = 0, changed = false;

for (const src of data.src) {
  const feedBefore = src.feed || "";
  let list = null;
  try { list = await listFor(src); } catch (e) { console.log(`❌ ${src.name}: ${e.message}`); }
  if (src.feed !== feedBefore) changed = true;
  if (!list || !list.length) { console.log(`❌ ${src.name}: খবর আনা যায়নি`); continue; }
  let k = 0;
  for (const i of list.slice(0, src.n || 20)) {
    const lk = safeUrl(i.link);
    if (!i.title || !lk || have.has(lk)) continue;
    let d = new Date(i.date); if (isNaN(d)) d = new Date(); if (d.getTime() > now) d = new Date(now);
    const dsc = i.desc || "";
    const b = (dsc.length > 300 ? dsc.slice(0, 300) + "…" : dsc) || "বিস্তারিত পড়তে মূল সোর্সের লিংকে যান।";
    const c = src.c === "auto" || !cats.includes(src.c) ? autoCat(i.title, dsc, i.cg) : src.c;
    const t = esc(i.title), bb = esc(b);
    data.items.push({
      c, e: ci[c] || "📰", t, b: bb, s: esc(src.name), l: "বাংলাদেশ",
      tg: [...new Set([c, src.name].map(esc))], p: 6, br: 0, tr: 0, m: stampBn(d), et: t, eb: bb,
      u: 1, f: 1, sid: src.id, lk, at: d.getTime(), img: safeUrl(i.img || ""), dr: 0
    });
    have.add(lk); k++; added++;
  }
  console.log(`✅ ${src.name}: ${k}টি নতুন খবর`);
}

/* পুরোনো ফিড-খবর ছাঁটাই: নিজের লেখা পোস্ট (f নেই) সবসময় থাকে */
const mine = data.items.filter(x => !x.f);
const feed = data.items.filter(x => x.f).sort((a, b) => (b.at || 0) - (a.at || 0));
const cap = Math.max(50, Math.min(MAX_FEED_ITEMS, MAX_TOTAL - mine.length));
const kept = feed.slice(0, cap);
if (kept.length !== feed.length) changed = true;
data.items = [...mine, ...kept];

if (added > 0 || changed) {
  data.updated = new Date().toISOString();
  fs.writeFileSync(FILE, JSON.stringify(data));
  console.log(`ফাইল আপডেট হয়েছে: নতুন ${added}টি, মোট ${data.items.length}টি`);
} else {
  console.log("নতুন কিছু নেই, ফাইল অপরিবর্তিত।");
}
