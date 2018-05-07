import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { InspectionDetails } from "./inspection_details.model";

@Injectable()
export class InspectionDetailsService {

    public responseJSON2 = 
   {
      "1583":"1",
      "bookingid":"1626",
      "building":"Brick Veneer",
      "1217":"1",
      "1337":"1",
      "drainage_comment":"",
      "1577":"1",
      "1697":"1",
      "1211":"1",
      "access_comment":"Location of manhole restricts safe access to main roof space due to layout of trusses. ",
      "1331":"1",
      "1573":"1",
      "sewer-test":"Not tested",
      "sewer_comment":"",
      "structural_defects_comment":"",
      "height":"Single Storey",
      "inspection-finding-comment-6":"Robe drawer runners failing due to wear and tear. Consult joiner.",
      "inspection-finding-comment-5":"Bed 3 robe doors missing rollers and drawer runners failing due to wear and tear. Consult joiner. ",
      "inspection-finding-comment-4":"No visible defects at time of inspection.",
      "inspection-finding-comment-3":"Drawer runners failing due to wear. Consult joiner. ",
      "inspection-finding-comment-9":"Dilapidated grout and sealants require rectification. Moisture detected in wall linings on opposite face. Consult tiler. ",
      "inspection-finding-comment-8":"Shower screen not operating smoothly. Consult technician. ",
      "1909":"1",
      "inspection-finding-comment-7":"Toilet water running at time of inspection.  Consult plumber. ",
      "inspection-finding-comment-2":"Dilapidated sealants around sink have allowed water damages to benchtops and rear of sink cabinet. Consult joiner. ",
      "inspection-finding-comment-1":"Minor cracking due to movement. Consistent with construction type. Consult plasterer. ",
      "1228":"1",
      "1349":"1",
      "1589":"1",
      "inspection_findings_and_recommendations-2-8":"Repair Recommended",
      "inspection_findings_and_recommendations-2-9":"Repair Recommended",
      "1103":"1",
      "inspection_findings_and_recommendations-2-2":"Repair Recommended",
      "inspection_findings_and_recommendations-2-3":"Repair Recommended",
      "1906":"1",
      "inspection_findings_and_recommendations-2-1":"Repair Recommended",
      "inspection_findings_and_recommendations-2-6":"Repair Recommended",
      "car_park":"Double",
      "inspection_findings_and_recommendations-2-7":"Repair Recommended",
      "1109":"1",
      "inspection_findings_and_recommendations-2-4":"General Advice on Item",
      "1229":"1",
      "inspection_findings_and_recommendations-2-5":"Repair Recommended",
      "1900":"1",
      "access":"No",
      "rec-file-5":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-5",
      "1121":"1",
      "rec-file-4":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-4",
      "rec-file-7":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-7",
      "1361":"1",
      "rec-file-6":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-6",
      "rec-file-9":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-9",
      "rec-file-8":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-8",
      "1115":"1",
      "furnished":"No",
      "1355":"1",
      "1595":"1",
      "Report_on_Drainage_note":"Issues around garage are in a low risk area for termites due to only masonry walls.",
      "1913":"1",
      "1132":"1",
      "1253":"1",
      "2100":"1",
      "typee-1":"Hallways",
      "1373":"1",
      "typee-8":"Bathrooms",
      "typee-9":"Bathrooms",
      "1369":"1",
      "typee-6":"Bedrooms",
      "inspection_findings_and_recommendations-1-9":"Bathrooms",
      "typee-7":"Bathrooms",
      "typee-4":"Laundry",
      "typee-5":"Bedrooms",
      "typee-2":"Kitchen",
      "1001":"1",
      "typee-3":"Kitchen",
      "inspection_findings_and_recommendations-1-3":"Kitchen",
      "inspection_findings_and_recommendations-1-4":"Laundry",
      "inspection_findings_and_recommendations-1-1":"Hallways and General Living Spaces",
      "inspection_findings_and_recommendations-1-2":"Kitchen",
      "1805":"1",
      "inspection_findings_and_recommendations-1-7":"Bathrooms",
      "1925":"1",
      "inspection_findings_and_recommendations-1-8":"Bathrooms",
      "1924":"1",
      "inspection_findings_and_recommendations-1-5":"Bedrooms",
      "1009":"1",
      "inspection_findings_and_recommendations-1-6":"Bedrooms",
      "inspection-finding-comment-19":"Infilled garage area showing evidence of water damages to skirting due to water ingressing garage. Consult carpenter. ",
      "inspection-finding-comment-18":"No drainage to front of garage. Driveway is higher allowing water to ingress garage. Consult landscaper or plumber",
      "inspection-finding-comment-16":"Skylight panel to pergola deformed and pooling water. Roof sheets obstructing gutters and causing blockages. Consult roofer. ",
      "1385":"1",
      "major_defects_comment":"",
      "1019":"1",
      "1811":"1",
      "2108":"1",
      "1139":"1",
      "1931":"1",
      "1259":"1",
      "1379":"1",
      "1135":"1",
      "2103":"1",
      "piers":"-",
      "1013":"1",
      "inspection-finding-comment-15":"Slipped tiles blocking valley due to failed fixing. Consult roof tiler. ",
      "inspection-finding-comment-14":"Downpipes blocked and deteriorating. Consult roofer. ",
      "inspection-finding-comment-13":"Grout and sealant dilapidation, moisture detected in opposite robe and living wall linings. Consult tiler. ",
      "1817":"1",
      "1938":"1",
      "inspection-finding-comment-12":"Evidence of vanity replacement. ",
      "inspection-finding-comment-11":"Flaking paint due to poor ventilation. Consult electrician for fan upgrade and painter for ceiling repair.",
      "inspection_findings_and_recommendations-3-24":"Grounds",
      "inspection-finding-comment-10":"Moisture damages to door jamb and architraves due to minor water leak from recess. Consult tiler and carpenter. ",
      "inspection_findings_and_recommendations-3-23":"Grounds",
      "inspection_findings_and_recommendations-3-25":"Door Frames",
      "inspection_findings_and_recommendations-3-20":"Garage\/Car Port",
      "type_2":"-",
      "inspection_findings_and_recommendations-3-22":"Roof Space",
      "type_1":"Freestanding House",
      "inspection_findings_and_recommendations-3-21":"Garage\/Car Port",
      "2000":"1",
      "2120":"1",
      "1151":"1",
      "1271":"1",
      "1025":"1",
      "Report_on_Ventilation_note":"Slab on ground. ",
      "water_comment":"",
      "1145":"1",
      "2113":"1",
      "1265":"1",
      "1829":"1",
      "inspection_findings_and_recommendations-3-16":"Pergola",
      "inspection-finding-comment-25":"Wood decay due to moisture from shower recess. We recommend invasive exploration and replacement of all affected timbers.  ",
      "1949":"1",
      "inspection_findings_and_recommendations-3-19":"Garage\/Car Port",
      "inspection-finding-comment-24":"Gardens and landscaping obstructing view of slab edge can allow concealed access for termites . ",
      "1948":"1",
      "inspection_findings_and_recommendations-3-18":"Drainage",
      "inspection-finding-comment-23":"Paths installed higher than slab height can provide concealed access for termites. Slab edge should be visible.  ",
      "inspection_findings_and_recommendations-3-13":"Shower Recess",
      "inspection-finding-comment-22":"Access to western living areas restricted by truss layout blocking access from east side manhole. ",
      "inspection_findings_and_recommendations-3-12":"Cabinets",
      "inspection-finding-comment-21":"Evidence of water ingressing western wall due to paths falling towards external wall higher than slab height. Consult landscaper or plumber. ",
      "1703":"1",
      "inspection_findings_and_recommendations-3-15":"Valleys",
      "inspection-finding-comment-20":"Ceilings collapsing due to failing fixings. Consult plasterer. ",
      "1823":"1",
      "inspection_findings_and_recommendations-3-14":"Down Pipes",
      "smoke_detectors-test":"Not tested",
      "2012":"1",
      "1042":"1",
      "1283":"1",
      "2006":"1",
      "1036":"1",
      "1157":"1",
      "1277":"1",
      "1397":"1",
      "2123":"1",
      "gas":"No",
      "1717":"1",
      "1957":"1",
      "1714":"1",
      "1835":"1",
      "summary":"Property presents in original condition with some maintenance works required noted above. ",
      "roof":"Tile",
      "electricity_comment":"",
      "smoke_detectors_comment":"",
      "1054":"1",
      "1175":"1",
      "drainage-test":"Not tested",
      "inspection_findings_and_recommendations-3-9":"Shower Recess",
      "extension_comment":"",
      "2019":"1",
      "inspection_findings_and_recommendations-3-7":"Toilet",
      "1721":"1",
      "inspection_findings_and_recommendations-3-8":"Shower Screen",
      "1841":"1",
      "1048":"1",
      "1169":"1",
      "1289":"1",
      "inspection_findings_and_recommendations-3-1":"Walls",
      "Evidence_note":"No visual evidence or notice of treatment installed to meter box.",
      "inspection_findings_and_recommendations-3-2":"Sealants",
      "file-01":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/file-01",
      "1607":"1",
      "inspection_findings_and_recommendations-3-5":"Robes",
      "1727":"1",
      "inspection_findings_and_recommendations-3-6":"Robes",
      "age":"1980s",
      "inspection_findings_and_recommendations-3-3":"Drawers",
      "inspection_findings_and_recommendations-3-4":"-",
      "1603":"1",
      "inspection_findings_and_recommendations-2-20":"Repair Recommended",
      "inspection_findings_and_recommendations-2-21":"Repair Recommended",
      "1187":"1",
      "1061":"1",
      "1181":"1",
      "rec-file-24":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-24",
      "1613":"1",
      "1733":"1",
      "rec-file-25":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-25",
      "1853":"1",
      "rec-file-23":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-23",
      "1852":"1",
      "2028":"1",
      "rec-file-20":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-20",
      "inspection_findings_and_recommendations-2-19":"Repair Recommended",
      "rec-file-21":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-21",
      "weather":"Fine",
      "inspection_findings_and_recommendations-2-15":"Repair Recommended",
      "inspection_findings_and_recommendations-2-16":"Repair Recommended",
      "1739":"1",
      "inspection_findings_and_recommendations-2-18":"Repair Recommended",
      "inspection_findings_and_recommendations-2-11":"Repair Recommended",
      "inspection_findings_and_recommendations-2-12":"General Advice on Item",
      "inspection_findings_and_recommendations-2-13":"Repair Recommended",
      "inspection_findings_and_recommendations-2-14":"Repair Recommended",
      "inspection_findings_and_recommendations-2-10":"Repair Recommended",
      "1990":"1",
      "2042":"1",
      "bathrooms":"Two",
      "1073":"1",
      "1193":"1",
      "rec-file-13":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-13",
      "bedrooms":"Four",
      "1745":"1",
      "1987":"1",
      "rec-file-14":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-14",
      "1986":"1",
      "rec-file-11":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-11",
      "gas_comment":"",
      "1501":"1",
      "1985":"1",
      "rec-file-12":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-12",
      "1621":"1",
      "rec-file-10":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-10",
      "1861":"1",
      "2036":"1",
      "1067":"1",
      "2035":"1",
      "rec-file-19":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-19",
      "rec-file-17":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-17",
      "rec-file-18":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-18",
      "rec-file-15":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-15",
      "1505":"1",
      "1989":"1",
      "rec-file-16":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-16",
      "1625":"1",
      "1867":"1",
      "extension":"No",
      "inspection_findings_and_recommendations-3-11":"Ceiling",
      "inspection_findings_and_recommendations-3-10":"Doors",
      "2054":"1",
      "1085":"1",
      "2050":"1",
      "1081":"1",
      "1877":"1",
      "typee-24":"TimberPest",
      "1511":"1",
      "typee-25":"TimberPest",
      "1873":"1",
      "typee-22":"External",
      "1751":"1",
      "typee-23":"TimberPest",
      "sewer":"Yes",
      "typee-20":"External",
      "1992":"1",
      "1199":"1",
      "typee-21":"External",
      "1991":"1",
      "1517":"1",
      "major_defects":"No",
      "1757":"1",
      "1099":"1",
      "2066":"1",
      "electricity":"Yes",
      "1093":"1",
      "2060":"1",
      "1525":"1",
      "typee-15":"External",
      "1403":"1",
      "1645":"1",
      "typee-16":"External",
      "typee-13":"Ensuite",
      "1885":"1",
      "typee-14":"External",
      "typee-11":"Bathrooms",
      "1763":"1",
      "typee-12":"Bathrooms",
      "typee-10":"Bathrooms",
      "1409":"1",
      "1529":"1",
      "typee-19":"External",
      "inspection_findings_and_recommendations-2-22":"General Advice on Item",
      "inspection_findings_and_recommendations-2-23":"Action Recommended",
      "1769":"1",
      "inspection_findings_and_recommendations-2-24":"Action Recommended",
      "typee-18":"External",
      "inspection_findings_and_recommendations-2-25":"Activity or Damage Advice on Item",
      "structural_defects":"No",
      "2078":"1",
      "2072":"1",
      "1535":"1",
      "1655":"1",
      "1654":"1",
      "1894":"1",
      "1417":"1",
      "water":"Yes",
      "1667":"1",
      "1787":"1",
      "rec-file-1":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-1",
      "1301":"1",
      "1543":"1",
      "1421":"1",
      "rec-file-3":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-3",
      "rec-file-2":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/rec-file-2",
      "1661":"1",
      "rec_count":"25",
      "rep-path":"\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/440\/",
      "1307":"1",
      "1427":"1",
      "1548":"1",
      "2096":"1",
      "1678":"1",
      "1799":"1",
      "1313":"1",
      "1433":"1",
      "1553":"1",
      "1793":"1",
      "inspection_findings_and_recommendations-1-25":"Timber Pest - Findings and Recommendations",
      "floor":"Slab",
      "inspection_findings_and_recommendations-1-21":"External",
      "1319":"1",
      "inspection_findings_and_recommendations-1-22":"External",
      "inspection_findings_and_recommendations-1-23":"Timber Pest - Findings and Recommendations",
      "1559":"1",
      "inspection_findings_and_recommendations-1-24":"Timber Pest - Findings and Recommendations",
      "inspection_findings_and_recommendations-1-20":"External",
      "Areas_Conducive_note":"",
      "smoke":"Yes",
      "timber_summary":"Property presents with conducive conditions and is constructed of non treated timbers. We recommend a termite management system be put in place.  ",
      "1570":"1",
      "1691":"1",
      "smoke_detectors":"Yes",
      "1205":"1",
      "1325":"1",
      "inspection_findings_and_recommendations-1-18":"External",
      "1685":"1",
      "inspection_findings_and_recommendations-1-19":"External",
      "1684":"1",
      "inspection_findings_and_recommendations-1-14":"External",
      "inspection_findings_and_recommendations-1-15":"External",
      "drainage":"Yes",
      "inspection_findings_and_recommendations-1-16":"External",
      "inspection_findings_and_recommendations-1-10":"Bathrooms",
      "inspection_findings_and_recommendations-1-11":"Bathrooms",
      "inspection_findings_and_recommendations-1-12":"Bathrooms",
      "inspection_findings_and_recommendations-1-13":"Ensuite"
   };


    public responseJSON =
    {
        "1583": "1",
        "bookingid": "1610",
        "building": "Brick Veneer",
        "1337": "1",
        "drainage_comment": "",
        "1577": "1",
        "1213": "1",
        "1697": "1",
        "access_comment": "",
        "1331": "1",
        "1573": "1",
        "sewer-test": "Not tested",
        "sewer_comment": "",
        "structural_defects_comment": "",
        "height": "Two Storey",
        "inspection-finding-comment-6": "Rectify all paint defects marked to walls and ceilings to all bedrooms.",
        "inspection-finding-comment-5": "Install sealants at tile junctions and at joinery to walls.",
        "inspection-finding-comment-4": "Rectify all paint defects marked to walls and ceiling.",
        "inspection-finding-comment-3": "Install sealants at internal junctions.",
        "inspection-finding-comment-9": "Rectify all paint defects marked.",
        "inspection-finding-comment-8": "Install sealants to all wet corners and junctions.",
        "inspection-finding-comment-7": "Cracked tile at bath tap.",
        "inspection-finding-comment-2": "Replace broken pendant over island.",
        "inspection-finding-comment-1": "Rectify all paint defects marked to walls and ceilings to all rooms. ",
        "1349": "1",
        "1589": "1",
        "inspection_findings_and_recommendations-2-8": "Repair Recommended",
        "inspection_findings_and_recommendations-2-9": "Repair Recommended",
        "1103": "1",
        "1223": "1",
        "1222": "1",
        "inspection_findings_and_recommendations-2-2": "Repair Recommended",
        "inspection_findings_and_recommendations-2-3": "Repair Recommended",
        "1906": "1",
        "inspection_findings_and_recommendations-2-1": "Repair Recommended",
        "inspection_findings_and_recommendations-2-6": "Repair Recommended",
        "car_park": "Single",
        "inspection_findings_and_recommendations-2-7": "Repair Recommended",
        "1109": "1",
        "inspection_findings_and_recommendations-2-4": "Repair Recommended",
        "1229": "1",
        "inspection_findings_and_recommendations-2-5": "Repair Recommended",
        "1900": "1",
        "access": "Yes",
        "1919": "1",
        "rec-file-5": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-5",
        "1121": "1",
        "1363": "1",
        "rec-file-4": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-4",
        "1120": "1",
        "rec-file-7": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-7",
        "rec-file-6": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-6",
        "rec-file-9": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-9",
        "rec-file-8": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-8",
        "1357": "1",
        "1595": "1",
        "1913": "1",
        "1912": "1",
        "1132": "1",
        "1253": "1",
        "typee-1": "Hallways",
        "1373": "1",
        "typee-8": "Bathrooms",
        "typee-9": "Bathrooms",
        "typee-6": "Bedrooms",
        "inspection_findings_and_recommendations-1-9": "Bathrooms",
        "typee-7": "Bathrooms",
        "typee-4": "Laundry",
        "1367": "1",
        "typee-5": "Laundry",
        "typee-2": "Kitchen",
        "1001": "1",
        "typee-3": "Kitchen",
        "inspection_findings_and_recommendations-1-3": "Kitchen",
        "inspection_findings_and_recommendations-1-4": "Laundry",
        "inspection_findings_and_recommendations-1-1": "Hallways and General Living Spaces",
        "inspection_findings_and_recommendations-1-2": "Kitchen",
        "1805": "1",
        "inspection_findings_and_recommendations-1-7": "Bathrooms",
        "inspection_findings_and_recommendations-1-8": "Bathrooms",
        "inspection_findings_and_recommendations-1-5": "Laundry",
        "1009": "1",
        "inspection_findings_and_recommendations-1-6": "Bedrooms",
        "inspection-finding-comment-19": "Rectify paint to walls and ceiling \/ manhole.",
        "inspection-finding-comment-18": "Final paint entry column.",
        "inspection-finding-comment-17": "Install flexible sealants to all masonry penetrations.",
        "inspection-finding-comment-16": "Touch up dowpipes as marked.",
        "1385": "1",
        "1261": "1",
        "major_defects_comment": "",
        "1019": "1",
        "1811": "1",
        "1139": "1",
        "1930": "1",
        "1379": "1",
        "1015": "1",
        "1499": "1",
        "1135": "1",
        "piers": "Concrete",
        "inspection-finding-comment-15": "Rectify eave at vent pipe and other paint defects marked.",
        "inspection-finding-comment-14": "Attach gutter clip to front elevation.",
        "inspection-finding-comment-13": "Replace gold screws capped inside recess with stainless steel.",
        "1817": "1",
        "inspection-finding-comment-12": "Rectify flush grout to wall tiles inside recess.",
        "1937": "1",
        "inspection-finding-comment-11": "Install sealants to all wet corners and junctions.",
        "1936": "1",
        "inspection-finding-comment-10": "Replace gold screws used inside recess with stainless steel.",
        "type_2": "-",
        "type_1": "Freestanding House",
        "1151": "1",
        "1271": "1",
        "1025": "1",
        "1267": "1",
        "water_comment": "",
        "1145": "1",
        "1709": "1",
        "inspection_findings_and_recommendations-3-17": "Walls",
        "inspection_findings_and_recommendations-3-16": "Down Pipes",
        "inspection_findings_and_recommendations-3-19": "Garage\/Car Port",
        "1948": "1",
        "inspection_findings_and_recommendations-3-18": "Walls",
        "inspection_findings_and_recommendations-3-13": "Shower Screen",
        "inspection_findings_and_recommendations-3-12": "Walls",
        "1703": "1",
        "inspection_findings_and_recommendations-3-15": "Eaves",
        "1823": "1",
        "inspection_findings_and_recommendations-3-14": "Gutters",
        "smoke_detectors-test": "Not tested",
        "gas-test": "Not tested",
        "1042": "1",
        "1283": "1",
        "1954": "1",
        "1831": "1",
        "1036": "1",
        "1157": "1",
        "1277": "1",
        "gas": "Yes",
        "1717": "1",
        "1957": "1",
        "1835": "1",
        "summary": "Property present above average at completion stage with minor defects and incomplete items listed above.",
        "roof": "Metal",
        "electricity_comment": "",
        "smoke_detectors_comment": "",
        "1054": "1",
        "1175": "1",
        "drainage-test": "Not tested",
        "inspection_findings_and_recommendations-3-9": "Walls",
        "1601": "1",
        "inspection_findings_and_recommendations-3-7": "Walls",
        "1721": "1",
        "inspection_findings_and_recommendations-3-8": "Sealants",
        "1841": "1",
        "1048": "1",
        "1169": "1",
        "1289": "1",
        "inspection_findings_and_recommendations-3-1": "Walls",
        "inspection_findings_and_recommendations-3-2": "Ceiling",
        "file-01": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/file-01",
        "1607": "1",
        "inspection_findings_and_recommendations-3-5": "Sealants",
        "1727": "1",
        "inspection_findings_and_recommendations-3-6": "Walls",
        "1847": "1",
        "age": "New build",
        "inspection_findings_and_recommendations-3-3": "Sealants",
        "inspection_findings_and_recommendations-3-4": "Walls",
        "1183": "1",
        "1061": "1",
        "1613": "1",
        "1733": "1",
        "1853": "1",
        "inspection_findings_and_recommendations-2-19": "Repair Recommended",
        "weather": "Fine",
        "inspection_findings_and_recommendations-2-15": "Repair Recommended",
        "inspection_findings_and_recommendations-2-16": "Repair Recommended",
        "1619": "1",
        "inspection_findings_and_recommendations-2-17": "Repair Recommended",
        "1739": "1",
        "inspection_findings_and_recommendations-2-18": "Repair Recommended",
        "inspection_findings_and_recommendations-2-11": "Repair Recommended",
        "1859": "1",
        "inspection_findings_and_recommendations-2-12": "Repair Recommended",
        "inspection_findings_and_recommendations-2-13": "Repair Recommended",
        "inspection_findings_and_recommendations-2-14": "Repair Recommended",
        "inspection_findings_and_recommendations-2-10": "Repair Recommended",
        "1075": "1",
        "bathrooms": "Two",
        "1193": "1",
        "rec-file-13": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-13",
        "bedrooms": "Three",
        "1745": "1",
        "rec-file-14": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-14",
        "rec-file-11": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-11",
        "gas_comment": "",
        "rec-file-12": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-12",
        "rec-file-10": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-10",
        "1189": "1",
        "1067": "1",
        "rec-file-19": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-19",
        "rec-file-17": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-17",
        "rec-file-18": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-18",
        "rec-file-15": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-15",
        "1505": "1",
        "rec-file-16": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-16",
        "1625": "1",
        "1867": "1",
        "inspection_findings_and_recommendations-3-11": "Sealants",
        "inspection_findings_and_recommendations-3-10": "Shower Screen",
        "1085": "1",
        "1511": "1",
        "1751": "1",
        "sewer": "Yes",
        "1079": "1",
        "1871": "1",
        "1199": "1",
        "1519": "1",
        "major_defects": "No",
        "1757": "1",
        "1091": "1",
        "electricity": "Yes",
        "1097": "1",
        "typee-15": "External",
        "typee-16": "External",
        "1523": "1",
        "typee-13": "Ensuite",
        "1643": "1",
        "1885": "1",
        "typee-14": "External",
        "1763": "1",
        "typee-11": "Ensuite",
        "typee-12": "Ensuite",
        "1882": "1",
        "typee-10": "Bathrooms",
        "1529": "1",
        "typee-19": "External",
        "1769": "1",
        "typee-17": "External",
        "typee-18": "External",
        "structural_defects": "No",
        "1535": "1",
        "1655": "1",
        "1654": "1",
        "1894": "1",
        "water": "Yes",
        "1547": "1",
        "1667": "1",
        "1787": "1",
        "rec-file-1": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-1",
        "1301": "1",
        "1543": "1",
        "1663": "1",
        "rec-file-3": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-3",
        "rec-file-2": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/rec-file-2",
        "rec_count": "19",
        "1309": "1",
        "rep-path": "\/home\/sphillips\/IBIA_ROOT_PATH\/reports\/428\/",
        "1315": "1",
        "1678": "1",
        "1799": "1",
        "1553": "1",
        "1795": "1",
        "floor": "Slab",
        "1319": "1",
        "1559": "1",
        "1691": "1",
        "smoke_detectors": "Yes",
        "1205": "1",
        "1325": "1",
        "1687": "1",
        "1565": "1",
        "inspection_findings_and_recommendations-1-18": "External",
        "inspection_findings_and_recommendations-1-19": "External",
        "1684": "1",
        "inspection_findings_and_recommendations-1-14": "External",
        "inspection_findings_and_recommendations-1-15": "External",
        "drainage": "Yes",
        "inspection_findings_and_recommendations-1-16": "External",
        "inspection_findings_and_recommendations-1-17": "External",
        "inspection_findings_and_recommendations-1-10": "Bathrooms",
        "inspection_findings_and_recommendations-1-11": "Ensuite",
        "inspection_findings_and_recommendations-1-12": "Ensuite",
        "inspection_findings_and_recommendations-1-13": "Ensuite"
    };

    
    constructor() { }

    // TODO - temp
    dataChanged: Subject<String> = new Subject();
    getSummary() {
        this.dataChanged.next("Summary " + Math.random());
    }

    getInspectionDetails() {
        //populate the model
        return this.populateInspectionDetailsModel();
    }

    populateInspectionDetailsModel() {
        let inspectionDetails: InspectionDetails = new InspectionDetails();

        //TODO - get from DB
        let responseInspectionDetails = this.responseJSON2;
        console.log(Object.keys(responseInspectionDetails).filter((name) => /inspection_findings_and_recommendations/.test(name)));

        

        return inspectionDetails;
    }
}