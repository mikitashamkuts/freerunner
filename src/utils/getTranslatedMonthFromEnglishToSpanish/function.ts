import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

function getTranslatedMonthFromEnglishToSpanish(month: string): string {
  const monthTranslations: {[key: string]: string} = {
    January: 'Enero',
    February: 'Febrero',
    March: 'Marzo',
    April: 'Abril',
    May: 'Mayo',
    June: 'Junio',
    July: 'Julio',
    August: 'Agosto',
    September: 'Septiembre',
    October: 'Octubre',
    November: 'Noviembre',
    December: 'Diciembre',
  };

  const translatedMonth = monthTranslations[month];
  if (!translatedMonth) {
    return '';
  }
  return translatedMonth;
}

export default getFunctionTryCatchWrapped(getTranslatedMonthFromEnglishToSpanish);
