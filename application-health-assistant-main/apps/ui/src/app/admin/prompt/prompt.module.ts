import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NgSelectModule } from '@ng-select/ng-select';

import PromptRoutingModule from './prompt-routing.module';
import PromptComponent from './prompt.component';

@NgModule({
    declarations: [PromptComponent],
    imports: [
        CommonModule,
        PromptRoutingModule,
        NgSelectModule,
        MatSelectModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
    ],
    exports: [PromptComponent],
})
export default class PromptModule {}
