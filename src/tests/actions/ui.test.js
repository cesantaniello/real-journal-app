import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('Tests on ui-actions', () => {
    test('All actions should be right', () => { 
        
        const action = setError('Error');

        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'Error'
        })

        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        })
        
        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        })
        
        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        })

    })
})