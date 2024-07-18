import {TranslationType} from '../../types';

export const es: TranslationType = {
  translation: {
    agendaScreen: {
      footer: {
        todayButton: {
          text: 'Hoy',
          accessibilityLabel: 'Botón para navegar la lista a la fecha de hoy',
          accessibilityHint:
            'Presiona esto para establecer la fecha seleccionada como la fecha de hoy',
        },
        filterButton: {
          all: {
            text: 'Todos',
            accessibilityLabel: 'Botón que muestra actualmente todos los intervalos de tiempo',
            accessibilityHint: 'Presiona este botón para mostrar solo los reservados',
          },
          booked: {
            text: 'Reservado',
            accessibilityLabel:
              'Botón que muestra actualmente solo los intervalos de tiempo reservados',
            accessibilityHint:
              'Presiona este botón para mostrar solo los intervalos disponibles para reservar',
          },
          available: {
            text: 'Disponible',
            accessibilityLabel:
              'Botón que muestra actualmente solo los intervalos de tiempo disponibles para reservar',
            accessibilityHint: 'Presiona este botón para mostrar todos los intervalos de tiempo',
          },
        },
      },
      selectedSlot: {
        bottomSheet: {
          fromDate: {
            text: 'Desde',
            accessibilityLabel: 'Fecha de inicio de una cita',
            accessibilityHint: '',
          },
          untilDate: {
            text: 'Hasta',
            accessibilityLabel: 'Fecha de fin de una cita',
            accessibilityHint: '',
          },
          bookButton: {
            text: 'Reservar',
            accessibilityLabel: 'Botón para reservar el intervalo de tiempo seleccionado',
            accessibilityHint: 'Presiona para reservar el intervalo de tiempo seleccionado',
          },
          reservedSlot: {
            text: 'Reservado',
            accessibilityLabel: 'El intervalo seleccionado ha sido reservado con éxito',
            accessibilityHint: '',
          },
        },
      },
      fail: {
        agendaSlotList: {
          text: 'Problema de conexión a Internet...',
          accessibilityLabel:
            'Ocurrió un problema de conexión a Internet que impidió mostrar la lista de intervalos de agenda',
          accessibilityHint:
            'Por favor, verifica la conexión a Internet y vuelve a cargar la aplicación',
        },
      },
    },
  },
};
