import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

const DEFAULT_PAGE_SIZE = 50


//Change Event Object emitted whenpage index is updated or page size changes
export class UpdatePageEvent {
	pageIndex: number
	pageSize: number
	totalItems: number
}

@Component({
  selector: 'app-bts-paginator',
  templateUrl: './bts-paginator.component.html',
  styleUrls: ['./bts-paginator.component.css']
})
export class BtsPaginatorComponent implements OnInit {
	//zero-based page index, defaulted to 0
	@Input()
	private _pageIndex = 0
	get pageIndex(): number { return this._pageIndex }
	set pageIndex(value: number){
		this._pageIndex = Math.max(value, 0)
	}
	@Input()
	private _totalItems: number
	get totalItems(): number { return this._totalItems }
	set totalItems(value: number){
		this._totalItems = Math.max(value, 0)
	}
	@Input()
	private _pageSize: number
	get pageSize(): number { return this._pageSize }
	set pageSize(value: number){
		this._pageSize = Math.max(value, 0)
		this._updateDisplayedPageSizeOptions()
	}
	@Input()
	private _pageSizeOptions: number[] = []
	get pageSizeOptions(): number[] { return this._pageSizeOptions }
	set pageSizeOptions(value: number[]){
		this._pageSizeOptions = (value || []).map(opt => +opt)
	}
	@Output() readonly pageUpdated: EventEmitter<UpdatePageEvent> = new EventEmitter<UpdatePageEvent>()

	private readonly _totalPages: number
	get totalPages(): number { return Math.ceil(this._totalItems / this.pageSize) }

  constructor() { }

  ngOnInit(): void {
  }
	hasNextPage(): boolean {
		return this.pageIndex < this.totalPages && this.pageSize > 0
	}
	hasPreviousPage(): boolean {
		return this.pageIndex > 0 && this.pageSize > 0
	}
	nextPage(): void {
		if(this.hasNextPage){
			this.pageIndex++
			this._emitPageUpdatedEvent()
		}
	}
	previousPage(): void {
		if(this.hasPreviousPage){
			this.pageIndex--
			this._emitPageUpdatedEvent()
		}
	}
	private _updateDisplayedPageSizeOptions(){
		if(!this.pageSize){
			this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE
		}
	}
	private _emitPageUpdatedEvent(){
		this.pageUpdated.emit({
			pageIndex: this.pageIndex,
			pageSize: this.pageSize,
			totalItems: this.totalItems
		})
	}
}
