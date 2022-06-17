import { DatePipe } from "@angular/common";
import { DateFilterFn, DateRange } from "@angular/material/datepicker";

export class Intervention {
    id!: number;
    intervenant!: string;
    dateInterv!: string;
    direction!: string;
    faveur!: string;
    remarque!: string;
}
