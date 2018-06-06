export class AppGlobal {
    // public static API_ENDPOINT = 'https://apbi.com.au/inspector-app/';
    public static API_ENDPOINT = 'http://34.251.200.88:8080/inspector-app/';
    // public static API_ENDPOINT = 'http://localhost:8080/inspector-app/';

    public static DOMAIN_ENDPOINT = 'https://apbi.com.au/';


    public static FILE_UPLOAD_ACTION = 'cpUploadImageAppv2';
    public static APP_STATUS_ACTION = 'cpLiveApp';
    public static CALENDAR_FEED_ACTION = 'cpBookingCalendarFeedAppv2';
    public static INSP_DTL_PREVIEW_ACTION = 'cpInspectionDetailsAppv2';
    public static LOAD_FORMDATA_ACTION = 'cpLoadFormDataAppv2';
    public static ADD_REPORT_ACTION = 'cpAddReportv2';
    public static IMG_PREVIEW_ACTION = 'cpRepImgv2';
    public static LOGIN_ACTION = 'appLogin';
    public static USER_AVATAR_URL= AppGlobal.DOMAIN_ENDPOINT + "controlPanel/profileImage?image=";

    //Image upload width and height
    public static UPLOAD_IMG_WIDTH = 400;
    public static UPLOAD_IMG_HEIGHT = 10000; //Keep aspect ratio

    
    //Recommendations Options
    public static TimberPest: string[] = [
        "Dwelling",
        "Interior",
        "Windows",
        "Door Frames",
        "Roof Cavity",
        "Sub Floor", 
        "Garage/Carport",
        "Fence line",
        "Grounds",
        "Retaining Walls",
        "Garden Borders",
        "Pergola",
        "Deck",
        "Outbuildings"
    ];

    public static Hallways: string[] = [
        "Floor",
        "Walls",
        "Ceiling",
        "Doors",
        "Windows",
        "Fireplace",
        "Heater",
        "Stairs",
        "Balustrade"
    ];

    public static Kitchen: string[] = [
        "Floor",
        "Walls",
        "Ceiling",
        "Ground Cabinets",
        "Overhead Cabinets",
        "Benchtops",
        "Drawers",
        "Sink",
        "Sink Mixer",
        "Oven",
        "Range Hood",
        "Dishwasher",
        "Sealants",
        "Windows",
        "Doors",
        "Tile or Glass",
        "Ventilation"
    ];

    public static Laundry: string[] = [
        "Doors",
        "Floor",
        "Walls",
        "Ceiling",
        "Trough/Sink",
        "Taps",
        "Cabinets",
        "Sealants",
        "Windows",
        "Exhaust Fans",
        "Ventilation"
    ];

    public static Bedrooms: string[] = [
        "Floor",
        "Walls",
        "Ceiling",
        "Robes",
        "Windows",
        "Doors",
        "Smoke Detectors"
    ];

    public static Bathrooms: string[] = [
        "Shower Recess",
        "Bath",
        "Floor",
        "Walls",
        "Ceiling",
        "Breech Combo",
        "Bath Outlet",
        "Shower Screen",
        "Cabinets",
        "Mirrors",
        "Exhaust Fan",
        "IXL Tastic",
        "Sealants",
        "Basins",
        "Mixer Taps",
        "Shower Rose",
        "Windows",
        "Doors",
        "Toilet Roll Holder",
        "Towel Rail",
        "Toilet",
        "Ventilation"
    ];

    public static Internal: string[] = [
        "Entry/Hallway",
        "Lounge Room",
        "Family Room",
        "Kitchen",
        "Bedroom 1",
        "Bedroom 2",
        "Bedroom 3",
        "Bedroom 4",
        "Bathrooms",
        "Ensuite",
        "Laundry",
        "Stairs",
        "Handrails",
        "Doors",
        "Windows",
        "Ceiling"
    ];

    public static Ensuite: string[] = [
        "Shower Recess",
        "Bath",
        "Floor",
        "Walls",
        "Ceiling",
        "Breech Combo",
        "Bath Outlet",
        "Shower Screen",
        "Cabinets",
        "Mirrors",
        "Exhaust Fan",
        "IXL Tastic",
        "Sealants",
        "Basins",
        "Mixer Taps",
        "Shower Rose",
        "Windows",
        "Doors",
        "Toilet Roll Holder",
        "Towel Rail",
        "Toilet",
        "Ventilation"
    ];

    public static External: string[] = [
        "Driveways and Paths",
        "Walls",
        "Expansion joints",
        "Windows",
        "Window Placement",
        "Doors",
        "Fascia",
        "Eaves",
        "Flashings",
        "Roof",
        "Skylights",
        "Vents",
        "Valleys",
        "Down Pipes",
        "Drainage",
        "Pointing",
        "Gutters",
        "Chimney",
        "Sub Floor Ventilation",
        "Deck",
        "Pergola",
        "Porch",
        "Balcony",
        "Steps",
        "Handrails",
        "Roof Space",
        "Stumps",
        "Retaining Walls",
        "Garage/Car Port"
    ];
}