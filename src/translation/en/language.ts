import {TranslationType} from '@src/types';

export const en: TranslationType = {
  translation: {
    agendaScreen: {
      footer: {
        todayButton: {
          text: 'Today',
          accessibilityLabel: 'Button to navigate the list to today`s date',
          accessibilityHint: 'Press on this to set the selected data as today`s date',
        },
        filterButton: {
          all: {
            text: 'All',
            accessibilityLabel: 'Currently shown all the time slots button',
            accessibilityHint: 'Press on this button to show only booked',
          },
          booked: {
            text: 'Booked',
            accessibilityLabel: 'Currently shown only booked time slots button',
            accessibilityHint: 'Press on this button to show only available for booking slots',
          },
          available: {
            text: 'Available',
            accessibilityLabel: 'Currently shown only available for booking time slots button',
            accessibilityHint: 'Press on this button to show all the time slots',
          },
        },
      },
      selectedSlot: {
        bottomSheet: {
          fromDate: {
            text: 'From',
            accessibilityLabel: 'Start date of an appointment',
            accessibilityHint: '',
          },
          untilDate: {
            text: 'Until',
            accessibilityLabel: 'End date of an appointment',
            accessibilityHint: '',
          },
          bookButton: {
            text: 'Book',
            accessibilityLabel: 'Button to reserve the selected time slot',
            accessibilityHint: 'Press it to reserve the selected time slot',
          },
          reservedSlot: {
            text: 'Reserved',
            accessibilityLabel: 'The selected shot has been successfully reserved',
            accessibilityHint: '',
          },
        },
      },
      fail: {
        agendaSlotList: {
          text: 'Internet connection issue...',
          accessibilityLabel:
            'Internet connection issue occurred which prevented from displaying the agenda slot list',
          accessibilityHint: 'Please, verify the internet connection and reload the app',
        },
      },
    },
  },
};
