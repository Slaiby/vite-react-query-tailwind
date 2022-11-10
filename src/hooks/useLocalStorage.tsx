const localstorageKey = "form_builder_web";

export enum LOCAL_STORAGE_KEYS {
  AUTH = "auth",
  CLUSTER_FILTER = "cluster_filter",
  CLUSTER_PAGE = "cluster_page",
}

export const retrieveLocalStorageData = <T,>(key: string): T => {
  const data = localStorage.getItem(`${localstorageKey}-${key}`);
  return data ? JSON.parse(data) : {};
};

export const setLocalStorageData = <T,>(key: string, payload: T) => {
  console.log(
    "🚀 ~ file: useLocalStorage.tsx ~ line 15 ~ setLocalStorageData ~ payload",
    payload
  );
  localStorage.setItem(`${localstorageKey}-${key}`, JSON.stringify(payload));
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(`${localstorageKey}-${key}`);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
