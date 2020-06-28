export interface TableData {
	//Headers should be data object keys
	headers: string[]
	rows: Array<any>
}

export interface PaginationData {
	pageIndex: number
	totalPages: number
	itemsPerPage: number
}
