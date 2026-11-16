// GOLD LEARNER - REAL CANDLESTICK ENGINE

const patterns = [

{
name:"Doji",
desc:"Open और Close लगभग बराबर होते हैं। बाजार में अनिश्चितता दिखाता है।",
c:[[50,90,10,51]]
},

{
name:"Dragonfly Doji",
desc:"Open और Close लगभग बराबर तथा High के पास होते हैं। नीचे लंबी Wick होती है।",
c:[[85,90,10,84]]
},

{
name:"Gravestone Doji",
desc:"Open और Close लगभग बराबर तथा Low के पास होते हैं। ऊपर लंबी Wick होती है।",
c:[[15,90,10,16]]
},

{
name:"Long Legged Doji",
desc:"Open और Close लगभग बराबर होते हैं। ऊपर और नीचे लंबी Wick होती हैं।",
c:[[50,95,5,51]]
},

{
name:"Hammer",
desc:"छोटा Body, लंबी Lower Wick और छोटी Upper Wick। Downtrend के बाद संभावित Bullish Reversal।",
c:[[35,40,5,38]]
},

{
name:"Inverted Hammer",
desc:"छोटा Body और लंबी Upper Wick। Downtrend के बाद दिखाई दे सकता है।",
c:[[35,90,30,38]]
},

{
name:"Hanging Man",
desc:"Hammer जैसा आकार, लेकिन Uptrend के बाद बनता है।",
c:[[70,75,30,72]]
},

{
name:"Shooting Star",
desc:"छोटा Body और लंबी Upper Wick। Uptrend के बाद संभावित Bearish Reversal।",
c:[[35,90,30,32]]
},

{
name:"Bullish Marubozu",
desc:"लंबी Bullish Candle जिसमें लगभग कोई Wick नहीं होती।",
c:[[10,90,10,90]]
},

{
name:"Bearish Marubozu",
desc:"लंबी Bearish Candle जिसमें लगभग कोई Wick नहीं होती।",
c:[[90,90,10,10]]
},

{
name:"Bullish Engulfing",
desc:"हरी Candle पिछली लाल Candle के Body को पूरी तरह ढक लेती है।",
c:[[70,75,30,40],[35,85,25,80]]
},

{
name:"Bearish Engulfing",
desc:"लाल Candle पिछली हरी Candle के Body को पूरी तरह ढक लेती है।",
c:[[30,75,25,65],[70,85,15,20]]
},

{
name:"Morning Star",
desc:"तीन Candles का संभावित Bullish Reversal Pattern।",
c:[[75,80,35,40],[35,45,25,32],[30,80,25,75]]
},

{
name:"Evening Star",
desc:"तीन Candles का संभावित Bearish Reversal Pattern।",
c:[[25,70,20,65],[65,75,55,68],[70,75,20,25]]
},

{
name:"Morning Doji Star",
desc:"Morning Star के बीच में Doji बनता है।",
c:[[80,85,35,40],[38,48,25,38],[35,80,30,75]]
},

{
name:"Evening Doji Star",
desc:"Evening Star के बीच में Doji बनता है।",
c:[[25,70,20,65],[65,85,55,66],[70,75,20,25]]
},

{
name:"Piercing Pattern",
desc:"लाल Candle के बाद हरी Candle पिछले Body के मध्य से ऊपर बंद होती है।",
c:[[80,85,30,35],[25,75,20,65]]
},

{
name:"Dark Cloud Cover",
desc:"हरी Candle के बाद लाल Candle पिछले Body के मध्य से नीचे बंद होती है।",
c:[[20,70,15,65],[75,80,25,30]]
},

{
name:"Bullish Harami",
desc:"छोटी हरी Candle पिछली बड़ी लाल Candle के Body के अंदर होती है।",
c:[[80,85,20,25],[55,65,40,58]]
},

{
name:"Bearish Harami",
desc:"छोटी लाल Candle पिछली बड़ी हरी Candle के Body के अंदर होती है।",
c:[[20,80,15,75],[45,60,40,48]]
},

{
name:"Harami Cross",
desc:"बड़ी Candle के बाद छोटी Doji उसके Body के अंदर बनती है।",
c:[[80,85,20,25],[52,65,40,52]]
},

{
name:"Three White Soldiers",
desc:"लगातार तीन मजबूत Bullish Candles बनती हैं।",
c:[[20,45,15,40],[40,65,35,60],[60,85,55,80]]
},

{
name:"Three Black Crows",
desc:"लगातार तीन मजबूत Bearish Candles बनती हैं।",
c:[[80,85,55,60],[60,65,35,40],[40,45,15,20]]
},

{
name:"Tweezer Bottom",
desc:"दो Candles का Low लगभग बराबर होता है।",
c:[[65,70,20,30],[25,65,20,60]]
},

{
name:"Tweezer Top",
desc:"दो Candles का High लगभग बराबर होता है।",
c:[[30,80,25,70],[75,80,35,40]]
},

{
name:"Spinning Top",
desc:"छोटा Body और दोनों तरफ Wick होती हैं।",
c:[[48,90,10,53]]
},

{
name:"Bullish Kicker",
desc:"लाल Candle के बाद Gap Up से मजबूत हरी Candle बनती है।",
c:[[80,85,20,25],[70,90,65,90]]
},

{
name:"Bearish Kicker",
desc:"हरी Candle के बाद Gap Down से मजबूत लाल Candle बनती है।",
c:[[20,35,15,80],[30,35,10,10]]
},

{
name:"Three Inside Up",
desc:"Bullish Harami के बाद तीसरी Candle ऊपर बंद होती है।",
c:[[80,85,20,25],[55,65,40,58],[60,90,55,85]]
},

{
name:"Three Inside Down",
desc:"Bearish Harami के बाद तीसरी Candle नीचे बंद होती है।",
c:[[20,80,15,75],[45,60,40,48],[40,45,10,15]]
}

];


// SVG CANDLE DRAWING ENGINE

function drawCandles(candles) {

const width = 320;
const height = 180;

let min = Math.min(...candles.map(c=>c[2]));
let max = Math.max(...candles.map(c=>c[1]));

let range = max-min || 1;

let svg = `
<svg viewBox="0 0 ${width} ${height}"
width="100%" height="180"
xmlns="http://www.w3.org/2000/svg">
`;

let spacing = width/(candles.length+1);

candles.forEach((c,i)=>{

let [open,high,low,close] = c;

let x = spacing*(i+1);

let y = v => 15+(max-v)/range*140;

let color = close > open
? "#00e676"
: close < open
? "#ff4545"
: "#ffd700";

let top = Math.min(y(open),y(close));
let bottom = Math.max(y(open),y(close));

let bodyHeight = Math.max(3,bottom-top);

svg += `

<line
x1="${x}" y1="${y(high)}"
x2="${x}" y2="${y(low)}"
stroke="${color}" stroke-width="4"/>

<rect
x="${x-13}" y="${top}"
width="26" height="${bodyHeight}"
fill="${color}"/>

`;

});

svg += "</svg>";

return svg;

}


// SHOW ALL PATTERNS

function showPatterns() {

document.getElementById("patterns")
.classList.remove("hidden");

displayPatterns(patterns);

}


// CLOSE

function closePatterns() {

document.getElementById("patterns")
.classList.add("hidden");

}


// DISPLAY

function displayPatterns(list) {

let html = "";

list.forEach((p,i)=>{

html += `

<div class="pattern">

<h3>${i+1}. ${p.name}</h3>

<div class="candle">
${drawCandles(p.c)}
</div>

<p>${p.desc}</p>

<p style="color:#aaa;font-size:13px">
कैंडल की संख्या: ${p.c.length}
</p>

</div>

`;

});

document.getElementById("patternList")
.innerHTML = html;

}


// SEARCH

function searchPattern() {

let q = document.getElementById("search")
.value.toLowerCase();

let filtered = patterns.filter(p=>
p.name.toLowerCase().includes(q) ||
p.desc.toLowerCase().includes(q)
);

displayPatterns(filtered);

}
// SVG CANDLE DRAWING ENGINE

function drawCandles(candles) {
    const width = 320;
    const height = 180;

    const min = Math.min(...candles.map(c => c[2]));
    const max = Math.max(...candles.map(c => c[1]));
    const range = max - min || 1;

    const y = v => 15 + (max - v) / range * 140;
    const spacing = width / (candles.length + 1);

    let svg = `<svg viewBox="0 0 ${width} ${height}" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">`;

    candles.forEach((c, i) => {
        const [open, high, low, close] = c;
        const x = spacing * (i + 1);

        const color = close > open ? "#00e676" :
                      close < open ? "#ff4545" : "#ffd700";

        const top = Math.min(y(open), y(close));
        const bottom = Math.max(y(open), y(close));

        svg += `
        <line x1="${x}" y1="${y(high)}" x2="${x}" y2="${y(low)}" stroke="${color}" stroke-width="4"/>
        <rect x="${x-13}" y="${top}" width="26" height="${Math.max(3,bottom-top)}" fill="${color}"/>
        `;
    });

    return svg + "</svg>";
}

// SHOW PATTERNS

function showPatterns() {
    document.getElementById("patterns").classList.remove("hidden");
    displayPatterns(patterns);
}

// CLOSE

function closePatterns() {
    document.getElementById("patterns").classList.add("hidden");
}

// DISPLAY

function displayPatterns(list) {
    let html = "";

    list.forEach((p,i) => {
        html += `
        <div class="pattern">
            <h3>${i+1}. ${p.name}</h3>
            <div class="candle">${drawCandles(p.c)}</div>
            <p>${p.desc}</p>
            <p style="color:#aaa;font-size:13px">कैंडल की संख्या: ${p.c.length}</p>
        </div>`;
    });

    document.getElementById("patternList").innerHTML = html;
}

// SEARCH

function searchPattern() {
    const q = document.getElementById("search").value.toLowerCase();

    const filtered = patterns.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
    );

    displayPatterns(filtered);
}

console.log("GOLD LEARNER Patterns Loaded:", patterns.length);
