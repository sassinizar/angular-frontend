import { DateRange } from "@angular/material/datepicker";

export class Intervention {
    id!: number;
    intervenant!: string;
    date!: Date;
    direction!: string;
    faveur!: string;
    remarque!: string;
}
