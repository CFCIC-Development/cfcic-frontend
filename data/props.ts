import gigc from "../assets/images/god-is-good-convention.png"
import kbc from "../assets/images/kaduna-believers-convention.png"
import sbc from "../assets/images/sagamu-believers-convention.png"
import ts from "../assets/images/the-sceptre.png"
import gfa from "../assets/images/gboko-faith-adventure.png"


// Heading Props

export const loginHeadingProps: AuthHeadingProps = {
    heading: "Welcome Home!",
    text: "Please sign in to your account with"
}

export const registerHeadingProps: AuthHeadingProps = {
    heading: "Register",
    text: "Get registered in a few seconds with"
}

export const biodataHeadingProps: OnboardHeadingProps = {
    heading: "Bio Data",
    text: "Tell us a bit about yourself so we can serve you better.",
    isMainHeading: false
}

export const kidsDetailsHeadingProps: OnboardHeadingProps = {
    heading: "Register Your Kids",
    text: "Please tell us a little bit about your kids",
    isMainHeading: false
}

export const centerDetailsHeadingProps: OnboardHeadingProps = {
    heading: "Center Details",
    text: "Tell us a bit about yourself so we can serve you better.",
    isMainHeading: false
}

export const financialCommitmentsHeadingProps: OnboardHeadingProps = {
    heading: "Financial Commitments",
    text: "Tell us a bit about yourself so we can serve you better.",
    isMainHeading: false
}

// ********** //


// Biodata Inputs Props

export const biodataErrorsDefault: BiodataForm = {
    phone: "",
    occupation: "",
    birthday: "",
    maritalStatus: "",
    anniversary: "",
    kids: "",
    haveKidsDetails: ""
}

export const maritalStatusOptions: SelectOptionProps[] = [
    { label: "Single", value: "Single"},
    { label: "Married", value: "Married"},
    { label: "Separated", value: "Separated"},
    { label: "Divorced", value: "Divorced"}
]

export const kidsOptions: SelectOptionProps[] = [
    { label: "No kids yet", value: "0" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" }
]

export const haveKidsDetailsProps: SelectOptionProps[] = [
    { value: "true", label: "Tell us a bit about your kids" },
    { value: "false", label: "Please remind me later" }
]

// ************ //


// Kids Details Inputs Props

export const kidsDetailsInputsDefault: SingleKidsDetail = {
    fullName: "",
    birthday: "",
    allergies: "",
    emergencyContact: ""
}

export const kidsDetailsErrorsDefault: SingleKidsDetail = {
    fullName: "",
    birthday: "",
    allergies: "",
    emergencyContact: ""
}

// ************ //


// Center Details Input Props

export const centerDetailsErrorsDefault: CenterDetailsError = {
    churchJoinDate: "",
    centerYouBelong: "",
    completedGrowthTrack: "",
    serviceTeam: "",
    homeCell: "",
    colony: "",
    responsibilities: ""
}

export const centerYouBelongOptions: SelectOptionProps[] = [
    { label: "CFC Abuja", value: "Abuja"},
    { label: "CFC Benin", value: "Benin"},
    { label: "CFC Gboko", value: "Gboko"},
    { label: "CFC Kaduna", value: "Kaduna"},
    { label: "CFC Lagos", value: "Lagos"},
    { label: "CFC Makurdi", value: "Makurdi"},
    { label: "CFC Otukpo", value: "Otukpo"},
    { label: "CFC Sagamu", value: "Sagamu"}
]

export const completedGrowthTrackOptions: SelectOptionProps[] = [
    { label: "Yes", value: "Yes" },
    { label: "Not yet", value: "No" },
    { label: "I'm not interested", value: "Not interested" }
]

export const homeCellOptions: SelectOptionProps[] = [
    { label: "North Bank 1 - at the Ahura's", value: "North Bank 1"},
    { label: "Welfare Qtrs 1 - at the Ogbu's", value: "Welfare Qtrs 1"},
    { label: "Judges Qtrs - at the Abutu's", value: "Judges Qtrs"},
    { label: "Welfare Qtrs 3 - at the Yero's", value: "Welfare Qtrs 3"},
    { label: "George Akume Way - at the Ikpambese's", value: "George Akume Way"},
    { label: "International Market Axis - at the Samu's", value: "International Market Axis"},
    { label: "Nyiman Layout - at the Akor-Ikpam's", value: "Nyiman Layout"},
    { label: "Kanshio 1 - at the Ishenge's", value: "Kanshio 1"},
    { label: "North Bank 2 - at the Dzever's", value: "North Bank 2"},
    { label: "Old GRA - at the Aba's", value: "Old GRA"},
    { label: "Mobile Barracks Road - at the Attah's", value: "Mobile Barracks Road"},
    { label: "Gyado Villa - at the Ajogo's", value: "Gyado Villa"},
    { label: "High Level - at Minister Doosuur's", value: "High Level"},
    { label: "Welfare Qtrs 2 - at the Agur's", value: "Welfare Qtrs 2"}
]

export const colonyOptions: SelectOptionProps[] = [
    { label: "Gateway", value: "Gateway"},
    { label: "Dominion", value: "Dominion"},
    { label: "The Core", value: "The Core"},
    { label: "Welfare Qtrs 3 - at the Yero's", value: "Welfare Qtrs 3"},
    { label: "Corner Stone", value: "Corner Stone"},
    { label: "Light House", value: "Light House"}
]

export const serviceTeamOptions: SelectOptionProps[] = [
    { label: "I don't have one", value: "Nil"},
    { label: "1913 Hub", value: "1913 Hub"},
    { label: "31st Ladies", value: "31st Ladies"},
    { label: "Art & Aesthetics", value: "Art & Aesthetics"},
    { label: "The Edge", value: "The Edge"},
    { label: "Face 2 Face", value: "Face 2 Face"},
    { label: "Gate Keepers", value: "Gate Keepers"},
    { label: "Host", value: "Host"},
    { label: "CFC Kids Ministry", value: "CFC Kids Ministry"},
    { label: "Media", value: "Media"},
    { label: "Men of Faith", value: "Men of Faith"},
    { label: "Partnership Service", value: "Partnership Service"},
    { label: "Prayer & Counselling", value: "Prayer & Counselling"},
    { label: "Protocol", value: "Protocol"},
    { label: "Reception", value: "Reception"},
    { label: "Sentry", value: "Sentry"},
    { label: "Social Media & Content Marketing", value: "Social Media & Content Marketing"},
    { label: "Transportation", value: "Transportation"},
    { label: "Ushering", value: "Ushering"},
    { label: "Voice of Creation", value: "Voice of Creation"},
    { label: "Welfare", value: "Welfare"},
]

export const responsibilitiesOptions: SelectOptionProps[] = [
    { label: "Not Applicable", value: "N/A"},
    { label: "Resident Pastor", value: "Resident Pastor"},
    { label: "Pastor", value: "Pastor"},
    { label: "Minister", value: "Minister"},
    { label: "Church Administrator", value: "Church Administrator"},
    { label: "Life Care Crew Co-ordinator", value: "Life Care Crew Co-ordinator"},
    { label: "Cell Church Ministry Co-ordinator", value: "Cell Church Ministry Co-ordinator"},
    { label: "Cell Leader", value: "Cell Leader"},
    { label: "Colony Leader", value: "Colony Leader"},
    { label: "Partnership Co-ordinator", value: "Partnership Co-ordinator"},
    { label: "Team Captain", value: "Team Captain"},
    { label: "Team Captain (Assistant)", value: "Team Captain (Assistant)"},
]

// *********** //


// Financial Commitments Input Props

export const financialCommitmentsErrorsDefault: FinancialCommitmentsError = {
    isTither: "",
    isPartner: "",
    partnerArms: "",
    preferredPaymentInterval: ""
}

export const isTitherOptions: SelectOptionProps[] = [
    { label: "Yes", value: "true"},
    { label: "No", value: "false"}
]

export const isPartnerOptions: SelectOptionProps[] = [
    { label: "Yes", value: "true"},
    { label: "No", value: "false"}
]

export const partnerArmsOptions: SelectOptionProps[] = [
    { label: " - Euphoria devotional, Higher life magazine", value: "Publications"},
    { label: " - Faith Adventures, Rev. Arome Tokula's ministry trips", value: "Programs & Ministry"},
    { label: " - Wavelength broadcast, Livestream", value: "WOMOC"}
]

export const preferredPaymentIntervalOptions: SelectOptionProps[] = [
    { label: "Monthly", value: "Monthly"},
    { label: "Bi-monthly", value: "Bi-monthly"},
    { label: "Quarterly", value: "Quarterly"},
]

// *********** //


// Events Props

export const currentEvents = [
    {
        image: gigc,
        date: "April 2023",
        title: "God Is Good Convention",
        optionalText: "Kairos Convention",
        shortName: "GIGC 2023"
    }
]

export const upcomingEvents = [
    {
        image: kbc,
        date: "April 2023",
        title: "Kaduna Believers' Convention",
        optionalText: "",
        shortName: "KBC 2023"
    },
    {
        image: sbc,
        date: "May 2023",
        title: "Sagamu Believers' Convention",
        optionalText: "",
        shortName: "SBC 2023"
    },
    {
        image: ts,
        date: "June 2023",
        title: "The Sceptre",
        optionalText: "",
        shortName: "TS 2023"
    },
    {
        image: gfa,
        date: "September 2023",
        title: "Gboko Faith Adventure",
        optionalText: "",
        shortName: "GFA 2023"
    },
]