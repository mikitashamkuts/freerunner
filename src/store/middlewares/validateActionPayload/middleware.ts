import {Middleware} from 'redux';

import {exceptionList} from '@src/constants';
import {RootState} from '@src/store/config';
import {AgendaSlotListActionTypeList, fetchAgendaSlotListSuccess} from '@src/store/slices';
import {AgendaSlotType, AgendaSlotValidationSchema} from '@src/types';
import {getExceptionCaptured, getFunctionTryCatchWrapped as tryCatch} from '@src/utils';

/**
 * A Redux middleware that validates the payload of specific actions using Zod schema.
 * If the payload is invalid, it logs the errors and populates missing fields with default values.
 */
const validateActionPayload: Middleware<{}, RootState> = _ => next =>
  tryCatch(function validateActionPayloadSave(action: AgendaSlotListActionTypeList) {
    try {
      const {type, payload} = action;

      switch (type) {
        // Get payload of fetchAgendaSlotListSuccess validated
        case fetchAgendaSlotListSuccess.type:
          const validatedPayload = payload.map((agendaSlotListItem: AgendaSlotType) => {
            const validationResult = AgendaSlotValidationSchema.safeParse(agendaSlotListItem);
            if (validationResult.success) {
              return validationResult.data;
            } else {
              validationResult.error.errors.forEach(error => {
                getExceptionCaptured(
                  validateActionPayloadSave,
                  exceptionList.InvalidData,
                  `${fetchAgendaSlotListSuccess.type}: ${JSON.stringify(error.path)} - ${
                    error.message
                  }`,
                );
              });
              // TODO: Add validation and population of nested object
              return agendaSlotListItem;
            }
          });
          next({...action, payload: validatedPayload});

          break;

        default:
          next(action);
          break;
      }
    } catch (error) {
      // Bypass validation in case of unhandled error without intervening into further logic
      next(action);
      getExceptionCaptured(
        validateActionPayloadSave,
        exceptionList.UnhandledException,
        `${fetchAgendaSlotListSuccess.type}: ${JSON.stringify(error)}`,
      );
    }
  });

export default validateActionPayload;
