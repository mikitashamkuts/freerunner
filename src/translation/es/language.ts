import {TranslationType} from '../../types';

export const es: TranslationType = {
  translation: {
    orderListScreen: {
      screenHeaderHolder: {
        screenHeaderTitle: {
          text: '',
          accessibilityLabel: '',
          accessibilityHint: '',
        },
      },
    },
    orderListItem: {
      numberOfArticles: {
        single: 'artículo',
        multiple: 'artículos',
      },
      orderStatus: {
        completed: 'Compra completada',
        pending: 'Cobro de:',
      },
    },
    orderDetailScreen: {
      paymentStatus: 'Estado del pago',
      referenceNumber: 'ref.',
      numberOfShippedArticles: 'enviados',
      orderStatus: {
        pending: {
          title: 'Cobro programado',
          subtitle: 'Recibirás la compra pronto',
        },
        completed: {
          title: 'Compra completada',
          subtitle: 'Pagado el',
        },
      },
      total: 'Total:',
      payButton: {
        title: 'Pagar ahora',
      },
    },
  },
};
