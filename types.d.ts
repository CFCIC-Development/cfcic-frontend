interface LoginFormInputs {
    email: string;
    password: string;
}

interface RegisterFormInputs extends LoginFormInputs {
    name: string;
}

interface BiodataHalfErrorValues {
    phone: string;
    occupation: string;
    birthday: string;
    maritalStatus: string;
}

interface Biodata extends BiodataHalfErrorValues {
    anniversary: string;
    kids: string;   
}

interface BiodataForm extends Biodata {
    haveKidsDetails: string;
}

interface BiodataSlice {
    biodata: Biodata;
    setBiodata: (obj: Biodata) => void;
    addNewKid: () => void;
}

interface SingleKidsDetail {
    fullName: string;
    birthday: string;
    allergies: string;
    emergencyContact: string;
}

interface KidsDetailsSlice {
    kidsDetails: SingleKidsDetail[];
    setKidsDetails: (arr: SingleKidsDetail[]) => void;
}

interface CenterDetails {
    churchJoinDate: string;
    centerYouBelong: string;
    completedGrowthTrack: string;
    serviceTeam: string[];
    homeCell: string;
    colony: string;
    responsibilities: string[];
}

interface CenterDetailsSlice {
    centerDetails: CenterDetails;
    setCenterDetails: (obj: CenterDetails) => void;
}

interface CenterDetailsError {
    churchJoinDate: string;
    centerYouBelong: string;
    completedGrowthTrack: string;
    serviceTeam: string;
    homeCell: string;
    colony: string;
    responsibilities: string;
}

interface FinancialCommitmentsHalf {
    isTither: string;
    isPartner: string;
}

interface FinancialCommitments extends FinancialCommitmentsHalf {
    partnerArms: string[];
    preferredPaymentInterval: string;
}

interface FinancialCommitmentsSlice {
    financialCommitments: FinancialCommitments;
    setFinancialCommitments: (obj: FinancialCommitments) => void;
}

interface AlertObj {
    message: string | null;
    type: string | null;
}

interface AlertState {
    alertExists: boolean | null;
    alert: AlertObj;
    setAlert: (obj: AlertObj) => void;
    clearAlert: () => void;
}

type AppStoreState = BiodataSlice & KidsDetailsSlice & CenterDetailsSlice & FinancialCommitmentsSlice & AlertState

interface FinancialCommitmentsError {
    isTither: string;
    isPartner: string;
    partnerArms: string;
    preferredPaymentInterval: string;
}

interface AuthHeadingProps {
    heading: string;
    text: string;
}

interface OnboardHeadingProps extends AuthHeadingProps {
    isMainHeading: boolean;
}

interface SelectOptionProps {
    label: string;
    value: string;
}


interface ComponentProps<T> {
    componentProps: T;
}

interface ComponentWithChildrenAlone {
    children: React.ReactNode;
}

interface ComponentWithChildrenProps<T> {
    children: React.ReactNode;
    componentProps: T;
}

interface HeaderProps {
    page: string;
}

interface CurrentEventSingleProps {
    date: string;
    image: StaticImageData;
    title: string;
    optionalText?: string;
    shortName: string;
}

interface UpcomingEventSingleProps {
    date: string;
    image: StaticImageData;
    title: string;
    optionalText?: string;
    shortName?: string;
}

interface ButtonLinkProps {
    text: string;
    linkTo?: string;
}

interface ButtonProps {
    text: string;
    type: "button" | "submit" | "reset";
    disabled: boolean;
    clickHandler: ((e: React.FormEvent) => void) | (() => void);
}

interface EventRegHistoryProps {
    shortName: string;
}

interface EventRegHeroProps {
    heading: string;
    image1: StaticImageData;
    image2: StaticImageData;
    text: string;
}