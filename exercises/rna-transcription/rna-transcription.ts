class Transcriptor {
    toRna(dna: string): string | never {
        let rna: string = ''
        const DICTIONARY: { [index: string]: string } = { G: "C", C: "G", T: "A", A: "U" }
        for (let c of dna) {
            const converted: string = DICTIONARY[c]
            if (converted) {
                rna += converted
            } else {
                throw new Error("Invalid input DNA.")
            }
        }
        return rna
    }
}

export default Transcriptor
