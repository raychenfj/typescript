class Matrix {
    private _rows: Array<Array<number>>
    private _columns: Array<Array<number>> = []
    constructor(input: string) {
        this._rows = input.split('\n').map(row => row.split(' ').map(Number))

        for (let x = 0, width = this._rows[0].length; x < width; x++) {
            const col: Array<number> = []
            for (let y = 0, height = this._rows.length; y < height; y++) {
                col.push(this._rows[y][x])
            }
            this._columns.push(col)
        }
    }

    get rows(): Array<Array<number>> {
        return this._rows
    }

    get columns(): Array<Array<number>> {
        return this._columns
    }
}

export default Matrix
