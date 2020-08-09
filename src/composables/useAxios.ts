import { reactive, ref, computed, toRefs, Ref } from '@vue/composition-api';
import Axios, { AxiosRequestConfig, Canceler, AxiosResponse } from 'axios';

export interface IOption extends AxiosRequestConfig {
  triggerOnStart?: boolean;
}

export interface IUseAxiosResponse {
  call: () => Promise<void>;
  cancel: () => void;
  error: Ref<null>;
  loading: Ref<boolean>;
  response: Ref<null>;
}

export default function useAxios<T extends null>(option: IOption): IUseAxiosResponse {
  let _cancel: Canceler;
  const _loading = ref(false);

  const state = reactive({
    error: null,
    loading: computed(() => _loading.value),
    response: null,
  });

  const cancel = () => {
    _cancel && _cancel();
  };

  const call = async () => {
    try {
      console.log('[useAxios] Started');
      _loading.value = true;
      state.error = null;
      const response: AxiosResponse<T> = await Axios({
        ...option,
        cancelToken: new Axios.CancelToken(c => (_cancel = c)),
      });
      state.response = response.data;
      _loading.value = false;
      console.log('[useAxios] Raw Response', response);
      console.log('[useAxios] Response', state.response);
    } catch (error) {
      _loading.value = false;
      state.error = error;
      console.log('[useAxios] Error', error);
    }
  };

  if (option?.triggerOnStart) {
    call()
      .then(() => {})
      .catch(error => {});
  }
  return {
    ...toRefs(state),
    call,
    cancel,
  };
}
