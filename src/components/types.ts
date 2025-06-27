export interface Values {
    income: number;
    activePartners: number;
}

export interface MonthData {
    income: number;
    activePartners: number;
    plan: Values;
    fact: Values;
}

export interface Admin {
    id: number;
    adminId: number;
    adminName: string;
    year: number;
    months: (MonthData | null)[];
}

export interface Total {
    fact: Values;
    plan: Values;
}

export interface ApiResponse {
    success: boolean;
    data: {
        total: Total[];
        table: Admin[];
    }
} 