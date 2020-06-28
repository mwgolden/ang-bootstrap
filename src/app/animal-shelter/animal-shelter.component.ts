import { Component, OnInit } from '@angular/core';
import { AnimalShelterDataService } from '../animal-shelter-data-service'

@Component({
  selector: 'app-animal-shelter',
  templateUrl: './animal-shelter.component.html',
  styleUrls: ['./animal-shelter.component.css']
})
export class AnimalShelterComponent implements OnInit {
	headers: string[]
	data: Array<any>
	defaultPageIndex: number = 0
	defaultPageSize: number = 10
	totalItems: number = 0
  constructor(
		private dataService: AnimalShelterDataService
	) { }

  ngOnInit(): void {
		this.getData()
  }
	getData(){
		this.dataService.getAnimalShelterIntake()
			.subscribe(result => {
				this.headers = Object.keys(result[0])
				this.data = result
				this.totalItems = result.length
			})
	}
	onPageUpdated(event) : void{
		this.defaultPageIndex = event.pageIndex
		this.defaultPageSize = event.pageSize
		this.totalItems= event.totalItems
	}
}
