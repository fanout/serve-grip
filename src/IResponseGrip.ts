import { GripInstruct } from '@fanoutio/grip';

export default interface IResponseGrip {
    startInstruct: () => GripInstruct;
}
