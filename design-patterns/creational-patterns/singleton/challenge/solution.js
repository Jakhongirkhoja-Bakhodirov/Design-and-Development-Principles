class ConfigureVals {
    constructor(obj) {
        if(ConfigureVals._instance) {
            throw new Error('Singleton classes can\'t be instantiated more than once.');
        }
        this.xpoint = obj.xpoint || 0;
        this.ypoint = obj.ypoint || 0;
        this.shape = obj.shape || null;
        ConfigureVals._instance = this;
    }
    static getConfiguration(obj) {
        if(!ConfigureVals._instance)  {
            console.log('new');
            ConfigureVals._instance =  new ConfigureVals(obj);
        } 
        return ConfigureVals._instance;
    }
}

var configureObj1 = ConfigureVals.getConfiguration({ "xpoint": 8, "ypoint" : 9, "shape" : "rectangle" });
console.log(configureObj1);
var configureObj2 = ConfigureVals.getConfiguration({ "xpoint": 2, "ypoint": 4, "shape" : "circle" });
console.log(configureObj2);
