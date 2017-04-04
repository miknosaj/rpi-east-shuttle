function bus() {
  var union = [];
  var blitman = [];
  var schedule = {"Union": [], "Blitman": []};

  var d = new Date();
  var now = d.getHours()*100+d.getMinutes();
  var isWeekend = d.getDay()%6==0 ? 1 : 0

    var u_data = [[700, 715, 730, 745, 750, 800, 805, 820, 835, 838, 850, 854, 905, 909, 920, 924, 935, 939, 954, 1009, 1014, 1023, 1029, 1034, 1044, 1053, 1059, 1107, 1113, 1120, 1128, 1136, 1142, 1151, 1200, 1206, 1215, 1221, 1231, 1237, 1247, 1252, 1256, 1306, 1311, 1322, 1326, 1337, 1342, 1345, 1352, 1358, 1401, 1407, 1413, 1416, 1423, 1427, 1431, 1442, 1447, 1457, 1505, 1512, 1521, 1526, 1537, 1545, 1551, 1601, 1605, 1616, 1620, 1631, 1635, 1646, 1650, 1702, 1705, 1723, 1738, 1753, 1758, 1808, 1814, 1823, 1833, 1840, 1851, 1856, 1910, 1924, 1936, 1955, 2004, 2010, 2018, 2025, 2033, 2040, 2047, 2101, 2120, 2134, 2140, 2152, 2154, 2227, 2211, 2221, 2225, 2241],
                   [930, 953, 1016, 1100, 1123, 1146, 1211, 1234, 1340, 1404, 1428, 1450, 1530, 1551, 1614, 1638]
    ];
  var b_data = [[712, 732, 735, 754, 758, 818, 820, 832, 840, 855, 903, 918, 926, 932, 941, 950, 955, 1011, 1016, 1018, 1023, 1033, 1040, 1041, 1103, 1104, 1119, 1128, 1142, 1151, 1207, 1213, 1216, 1231, 1238, 1318, 1326, 1338, 1342, 1350, 1401, 1410, 1428, 1432, 1436, 1458, 1500, 1502, 1517, 1523, 1527, 1540, 1542, 1547, 1551, 1604, 1607, 1612, 1615, 1628, 1635, 1639, 1651, 1659, 1705, 1705, 1715, 1729, 1752, 1755, 1758, 1819, 1825, 1844, 1848, 1904, 1910, 1926, 1930, 1950, 1957, 2013, 2021, 2036, 2058, 2104, 2127, 2141, 2151, 2207, 2229, 2250],
                   [941, 1004, 1027, 1111, 1134, 1158, 1223, 1246, 1352, 1416, 1439, 1501, 1541, 1602, 1626, 1647]
  ];

  for (i in u_data[isWeekend]) {
    if (u_data[isWeekend][i] >= now) union.push(u_data[isWeekend][i]);
    if (b_data[isWeekend][i] >= now) blitman.push(b_data[isWeekend][i]);
    if (union.length >=5) break;
  }

  for (i in union) {
    var unionH = parseInt(union[i]/100);
    var unionM = (union[i]%100).toString();
    var blitmanH = parseInt(blitman[i]/100);
    var blitmanM = (blitman[i]%100).toString();

    // Minute string padding
    if (unionM.length == 1) unionM = '0' + unionM;
    if (blitmanM.length == 1) blitmanM = '0' + blitmanM;

    // AM PM
    if (unionH >= 12) {
      unionM += ' pm';
      if (unionH > 12) unionH -= 12;
    } else unionM += ' am';
    if (blitmanH >= 12) {
      blitmanM += ' pm';
      if (blitmanH > 12) blitmanH -= 12;
    } else blitmanM += ' am';

    schedule["Union"].push(unionH+':'+unionM);
    schedule["Blitman"].push(blitmanH+':'+blitmanM);
  }

  return schedule;
}
