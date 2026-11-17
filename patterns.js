// GOLD LEARNER - 100 REAL CANDLESTICK PATTERNS

const P = (name, desc, ...c) => ({name, desc, c});

const candleDataPatterns = [

P("Doji","Open और Close लगभग बराबर।", [50,90,10,50]),

P("Long Legged Doji","ऊपर और नीचे लंबी Wick।", [50,95,5,50]),

P("Dragonfly Doji","नीचे लंबी Wick।", [90,95,5,90]),

P("Gravestone Doji","ऊपर लंबी Wick।", [10,95,5,10]),

P("Four Price Doji","चारों कीमतें लगभग बराबर।", [50,52,48,50]),

P("Hammer","छोटी Body और लंबी Lower Wick।", [65,70,10,68]),

P("Hanging Man","Hammer जैसा आकार।", [65,70,10,68]),

P("Inverted Hammer","ऊपर लंबी Wick।", [35,90,30,38]),

P("Shooting Star","छोटी Body और लंबी Upper Wick।", [35,90,30,32]),

P("Bullish Marubozu","लंबी हरी Candle।", [10,90,10,90]),

P("Bearish Marubozu","लंबी लाल Candle।", [90,90,10,10]),

P("Spinning Top","छोटी Body और दोनों तरफ Wick।", [48,90,10,53]),

P("High Wave","छोटी Body और लंबी Wick।", [48,95,5,52]),

P("Bullish Engulfing","हरी Candle पिछली लाल Body को ढकती है।",
[70,80,30,40], [35,90,25,85]),

P("Bearish Engulfing","लाल Candle पिछली हरी Body को ढकती है।",
[30,75,25,65], [70,85,15,20]),

P("Piercing Pattern","हरी Candle पिछली लाल Body के मध्य से ऊपर बंद होती है।",
[80,85,30,35], [25,75,20,65]),

P("Dark Cloud Cover","लाल Candle पिछली हरी Body के मध्य से नीचे बंद होती है।",
[20,70,15,65], [75,80,25,30]),

P("Bullish Harami","छोटी हरी Candle बड़ी लाल Body के अंदर।",
[80,85,20,25], [55,65,40,58]),

P("Bearish Harami","छोटी लाल Candle बड़ी हरी Body के अंदर।",
[20,80,15,75], [45,60,40,48]),

P("Morning Star","तीन Candles का Bullish Pattern।",
[75,80,35,40], [35,45,25,32], [30,80,25,75]),

P("Evening Star","तीन Candles का Bearish Pattern।",
[25,70,20,65], [65,75,55,68], [70,75,20,25]),

P("Morning Doji Star","बीच में Doji वाली Morning Star।",
[80,85,35,40], [38,48,25,38], [35,80,30,75]),

P("Evening Doji Star","बीच में Doji वाली Evening Star।",
[25,70,20,65], [65,85,55,66], [70,75,20,25]),

P("Three White Soldiers","लगातार तीन मजबूत हरी Candles।",
[20,45,15,40], [40,65,35,60], [60,85,55,80]),

P("Three Black Crows","लगातार तीन मजबूत लाल Candles।",
[80,85,55,60], [60,65,35,40], [40,45,15,20]),
P("Three Inside Up","Bullish Harami के बाद तेजी।",
[80,85,20,25], [55,65,40,58], [60,90,55,85]),

P("Three Inside Down","Bearish Harami के बाद गिरावट।",
[20,80,15,75], [45,60,40,48], [40,45,10,15]),

P("Three Outside Up","Engulfing के बाद तेजी।",
[75,80,35,40], [30,85,25,80], [80,95,75,90]),

P("Three Outside Down","Engulfing के बाद गिरावट।",
[25,70,20,65], [20,75,15,25], [25,30,5,10]),

P("Tweezer Bottom","दो Candles का Low लगभग बराबर।",
[65,70,20,30], [25,65,20,60]),

P("Tweezer Top","दो Candles का High लगभग बराबर।",
[30,80,25,70], [75,80,35,40]),

P("Bullish Kicker","Gap Up वाली हरी Candle।",
[80,85,20,25], [70,90,65,90]),

P("Bearish Kicker","Gap Down वाली लाल Candle।",
[20,35,15,80], [30,35,10,10]),

P("Bullish Belt Hold","लंबी हरी Candle।",
[10,90,10,85]),

P("Bearish Belt Hold","लंबी लाल Candle।",
[90,90,10,15]),

P("Bullish Counterattack","दोनों Candles का Close लगभग बराबर।",
[80,85,30,35], [20,75,15,35]),

P("Bearish Counterattack","दोनों Candles का Close लगभग बराबर।",
[20,70,15,65], [80,85,25,65]),

P("Matching Low","दो लाल Candles का Close बराबर।",
[75,80,20,30], [65,75,25,30]),

P("Matching High","दो हरी Candles का Close बराबर।",
[25,80,20,70], [35,75,25,70]),

P("Stick Sandwich","दो हरी Candles के बीच लाल Candle।",
[30,75,25,70], [70,75,20,30], [30,75,25,70]),

P("Rising Three Methods","तेजी जारी रहने का Pattern।",
[20,85,15,80], [75,80,60,65], [65,70,55,60], [60,75,50,65], [65,95,60,90]),

P("Falling Three Methods","गिरावट जारी रहने का Pattern।",
[80,85,15,20], [25,40,20,35], [35,45,30,40], [40,50,35,45], [45,50,5,10]),

P("Mat Hold","Bullish Continuation Pattern।",
[20,85,15,80], [75,80,65,70], [70,75,60,65], [65,80,55,70], [70,95,65,90]),

P("Upside Tasuki Gap","Gap Up के बाद लाल Candle।",
[30,65,25,60], [70,90,65,85], [85,90,55,60]),

P("Downside Tasuki Gap","Gap Down के बाद हरी Candle।",
[70,75,35,40], [30,35,10,15], [15,45,10,40]),

P("Bullish Breakaway","गिरावट के बाद तेजी।",
[80,85,60,65], [60,65,40,45], [45,50,25,30], [30,45,20,35], [35,85,30,80]),

P("Bearish Breakaway","तेजी के बाद गिरावट।",
[20,40,15,35], [35,60,30,55], [55,75,50,70], [70,80,60,65], [65,70,15,20]),

P("Advance Block","हरी Candles की ताकत कम होती है।",
[20,70,15,65], [65,90,60,80], [80,95,75,85]),

P("Deliberation","दो बड़ी हरी Candles के बाद छोटी Candle।",
[20,60,15,55], [55,85,50,80], [80,90,75,83]),

P("Thrusting Pattern","लाल Candle के बाद हरी Candle।",
[80,85,25,30], [35,65,30,55]),
P("In Neck Pattern","लाल Candle के बाद छोटी हरी Candle।",
[80,85,20,25], [25,55,20,30]),

P("On Neck Pattern","लाल Candle के बाद छोटी हरी Candle।",
[80,85,20,25], [25,45,20,27]),

P("Three Stars In The South","तीन लाल Candles वाला Pattern।",
[80,85,30,35], [35,65,25,30], [30,45,20,25]),

P("Abandoned Baby Bullish","बीच में Doji और दोनों तरफ Gap।",
[80,85,45,50], [35,45,25,35], [50,85,45,80]),

P("Abandoned Baby Bearish","बीच में Doji और दोनों तरफ Gap।",
[20,55,15,50], [65,75,55,65], [50,55,15,20]),

P("Island Reversal Bullish","Gap Down और फिर Gap Up।",
[80,85,60,65], [35,45,25,35], [65,90,60,85]),

P("Island Reversal Bearish","Gap Up और फिर Gap Down।",
[20,40,15,35], [65,75,55,70], [35,40,10,15]),

P("Three Line Strike Bullish","तीन लाल Candles के बाद बड़ी हरी Candle।",
[85,90,65,70], [70,75,45,50], [50,55,25,30], [20,95,15,90]),

P("Three Line Strike Bearish","तीन हरी Candles के बाद बड़ी लाल Candle।",
[15,35,10,30], [30,55,25,50], [50,75,45,70], [80,85,5,10]),

P("Ladder Bottom","गिरावट के बाद मजबूत हरी Candle।",
[80,85,60,65], [65,70,40,45], [45,50,20,25], [25,35,15,20], [20,85,15,80]),

P("Bullish Separating Lines","हरी Candle तेजी दिखाती है।",
[80,85,25,30], [30,85,25,80]),

P("Bearish Separating Lines","लाल Candle गिरावट दिखाती है।",
[20,75,15,70], [70,75,15,20]),

P("Bullish Long Line","लंबी हरी Body।",
[15,90,10,85]),

P("Bearish Long Line","लंबी लाल Body।",
[85,90,10,15]),

P("Bullish Short Line","छोटी हरी Body।",
[45,60,40,55]),

P("Bearish Short Line","छोटी लाल Body।",
[55,60,40,45]),

P("Bullish Gap Up","ऊपर खुलने वाली हरी Candle।",
[65,90,60,85]),

P("Bearish Gap Down","नीचे खुलने वाली लाल Candle।",
[35,40,10,15]),

P("Bullish Long Lower Shadow","लंबी नीचे की Wick।",
[65,75,5,70]),
P("Dragonfly Doji","Open और Close लगभग बराबर, लंबी नीचे की Wick।",
[50,52,20,50]),

P("Gravestone Doji","Open और Close लगभग बराबर, लंबी ऊपर की Wick।",
[50,80,48,50]),

P("Long-Legged Doji","ऊपर और नीचे दोनों तरफ लंबी Wick।",
[50,75,25,50]),

P("Four Price Doji","Open, High, Low और Close लगभग एक ही स्तर पर।",
[50,50,50,50]),

P("Rickshaw Man","Doji जैसी Candle, दोनों तरफ लंबी Wick।",
[50,78,22,50]),

P("Bullish Harami Cross","बड़ी लाल Candle के अंदर छोटी Doji।",
[80,85,40,45], [60,65,55,60]),

P("Bearish Harami Cross","बड़ी हरी Candle के अंदर छोटी Doji।",
[40,85,35,80], [60,65,55,60]),

P("Bullish Meeting Lines","लाल Candle के बाद हरी Candle लगभग उसी Close पर बंद।",
[80,85,40,45], [35,82,30,45]),

P("Bearish Meeting Lines","हरी Candle के बाद लाल Candle लगभग उसी Close पर बंद।",
[40,85,35,80], [85,90,40,80]),

P("Concealing Baby Swallow","चार लाल Candles का विशेष पैटर्न।",
[80,85,40,45], [45,50,25,30], [30,40,20,25], [25,35,15,20]),

P("Unique Three River","तीन Candles का संभावित तेजी वाला पैटर्न।",
[80,85,40,45], [45,50,20,30], [30,45,25,40]),

P("Tri-Star Bullish","तीन Doji Candles के बाद संभावित तेजी।",
[80,85,60,80], [70,75,65,70], [60,85,55,82]),

P("Tri-Star Bearish","तीन Doji Candles के बाद संभावित मंदी।",
[40,65,35,40], [50,55,45,50], [60,65,35,40]),

P("Upside Gap Two Crows","तेजी के बाद Gap Up और दो लाल Candles।",
[40,65,35,60], [70,85,65,80], [82,85,60,65]),

P("Rising Window","दो Candles के बीच ऊपर की ओर Gap।",
[40,55,35,50], [65,80,60,75]),

P("Falling Window","दो Candles के बीच नीचे की ओर Gap।",
[70,85,65,80], [50,60,45,55]),

P("Upside Gap Three Methods","ऊपर की ओर Gap के बाद छोटी गिरावट और फिर तेजी।",
[40,55,35,50], [65,80,60,75], [70,75,55,65]),

P("Downside Gap Three Methods","नीचे की ओर Gap के बाद छोटी तेजी और फिर गिरावट।",
[70,85,65,80], [50,60,45,55], [55,65,45,50]),

P("Bullish Side-by-Side White Lines","Gap Up के बाद दो लगभग समान हरी Candles।",
[40,55,35,50], [65,80,60,75], [65,82,60,76]),

P("Bearish Side-by-Side White Lines","Gap Down के बाद दो लगभग समान Candles।",
[70,85,65,80], [50,60,45,55], [50,62,45,56]),

P("Bullish Doji Star","लाल Candle के बाद Gap Down पर Doji।",
[80,85,45,50], [35,40,30,35]),

P("Bearish Doji Star","हरी Candle के बाद Gap Up पर Doji।",
[40,80,35,75], [85,90,80,85]),

P("Bullish Spinning Top","छोटी हरी Body और दोनों तरफ Wick।",
[45,65,35,55]),

P("Bearish Spinning Top","छोटी लाल Body और दोनों तरफ Wick।",
[55,65,35,45]),

P("High Wave Candle","बहुत छोटी Body और लंबी ऊपर-नीचे Wick।",
[50,85,15,52]),


];
