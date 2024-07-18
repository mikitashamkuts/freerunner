import {iconColorList, iconList} from '@src/design';
import {IconSettingsType} from '@src/types';

export const iconSettings: IconSettingsType = {
  [iconList.Arrow]: {
    paths: {
      d1: 'M0.289062 10.2441C0.296224 10.0221 0.339193 9.81803 0.417969 9.63184C0.503906 9.44564 0.632812 9.2666 0.804688 9.09473L9.07617 1.00586C9.34831 0.733724 9.68132 0.597656 10.0752 0.597656C10.3473 0.597656 10.5908 0.662109 10.8057 0.791016C11.0277 0.919922 11.2031 1.09538 11.332 1.31738C11.4681 1.53223 11.5361 1.77214 11.5361 2.03711C11.5361 2.43815 11.3857 2.78906 11.085 3.08984L3.72656 10.2441L11.085 17.3984C11.3857 17.7064 11.5361 18.0573 11.5361 18.4512C11.5361 18.7233 11.4681 18.9668 11.332 19.1816C11.2031 19.3965 11.0277 19.5684 10.8057 19.6973C10.5908 19.8262 10.3473 19.8906 10.0752 19.8906C9.68132 19.8906 9.34831 19.7546 9.07617 19.4824L0.804688 11.3936C0.625651 11.2217 0.493164 11.0426 0.407227 10.8564C0.328451 10.6631 0.289062 10.459 0.289062 10.2441Z',
    },
    settings: {
      color: iconColorList.Action,
      width: 12,
      height: 20,
      viewBox: '0 0 12 20',
    },
  },
  [iconList.Plus]: {
    paths: {
      d1: 'M0.637695 9.24414C0.637695 8.97917 0.730794 8.75358 0.916992 8.56738C1.11035 8.37402 1.33594 8.27734 1.59375 8.27734H8.54395V1.33789C8.54395 1.08008 8.63704 0.858073 8.82324 0.671875C9.00944 0.478516 9.23503 0.381836 9.5 0.381836C9.76497 0.381836 9.99056 0.478516 10.1768 0.671875C10.3701 0.858073 10.4668 1.08008 10.4668 1.33789V8.27734H17.4062C17.6641 8.27734 17.8861 8.37402 18.0723 8.56738C18.2656 8.75358 18.3623 8.97917 18.3623 9.24414C18.3623 9.50911 18.2656 9.7347 18.0723 9.9209C17.8861 10.1071 17.6641 10.2002 17.4062 10.2002H10.4668V17.1504C10.4668 17.4082 10.3701 17.6302 10.1768 17.8164C9.99056 18.0098 9.76497 18.1064 9.5 18.1064C9.23503 18.1064 9.00944 18.0098 8.82324 17.8164C8.63704 17.6302 8.54395 17.4082 8.54395 17.1504V10.2002H1.59375C1.33594 10.2002 1.11035 10.1071 0.916992 9.9209C0.730794 9.7347 0.637695 9.50911 0.637695 9.24414Z',
    },
    settings: {
      color: iconColorList.Action,
      width: 19,
      height: 19,
      viewBox: '0 0 19 19',
    },
  },
  [iconList.CalendarChecked]: {
    paths: {
      d1: 'M16.5 9.5C16.8905 9.89053 16.8905 10.5237 16.5 10.9142L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071L8 13.4142C7.60948 13.0237 7.60948 12.3905 8 12C8.39053 11.6095 9.02369 11.6095 9.41422 12L11 13.5858L15.0858 9.5C15.1346 9.45119 15.1872 9.40847 15.2427 9.37186C15.6308 9.11558 16.1583 9.15829 16.5 9.5Z',
      d2: 'M4 5H6V3.75C6 3.19771 6.44772 2.75 7 2.75C7.55229 2.75 8 3.19771 8 3.75V5H16V3.75C16 3.19771 16.4477 2.75 17 2.75C17.5523 2.75 18 3.19771 18 3.75V5H20C21.1046 5 22 5.89543 22 7V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V7C2 5.89543 2.89543 5 4 5ZM4 19V7H20V19H4Z',
    },
    settings: {
      color: iconColorList.Action,
      width: 24,
      height: 24,
      viewBox: '0 0 24 24',
    },
  },
};
