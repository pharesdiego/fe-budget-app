import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { DateFormats, getFormattedDate } from './dates';

export const QS_DATE = "date";

export const useDateQS = (): [string, (val: string) => void] => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const value = searchParams.get(QS_DATE) || getFormattedDate(new Date().toISOString(), DateFormats.QSDateFormat);

  const setDateQS = (val: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(QS_DATE, val);

    router.push(pathname + "?" + params.toString())
  }

  return [value, setDateQS]
}
