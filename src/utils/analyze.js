import * as math from 'mathjs'
export default class {
    provinces;
    provinceToCell;
    cellToProvince;
    constructor(data) {
        this.provinces = data;
        this.loadMapInfo();
    }
    loadMapInfo() {
        this.provinceToCell = new MathInfo(this.provinces, 'Province2CellAvg');
        this.cellToProvince = new MathInfo(this.provinces, 'Cell2ProvinceAvg');
        this.provinceToCell.count = this.cellToProvince.count = this.provinces.length;
    }
    
    
}

class MathInfo {
    avg;
    max;
    min; 
    std_dev;
    raw_data;
    
    constructor(data, field_name) {
        this.raw_data = data.map(item => item[field_name])
        this.calculate();
    }

    calculate() {
        this.avg = math.mean(this.raw_data);
        this.max = math.max(this.raw_data);
        this.min = math.min(this.raw_data);
        this.std_dev = math.std(this.raw_data)
    }
   
    calculateVariance() {
        Math.variance()
    }
}