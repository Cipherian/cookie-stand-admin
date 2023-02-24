import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';

export default function CookieStandAdmin() {

  const { user } = useAuth();
  const { createResource } = useResource();

  function formSubmitHandler(event) {
    event.preventDefault();
    const info = {
      location: event.target.location.value,
      minimum_customers_per_hour: Number(event.target.minimum.value),
      maximum_customers_per_hour: Number(event.target.maximum.value),
      average_cookies_per_sale: Number(event.target.average.value),
      owner: user.id,
    };
    createResource(info);
  }

  return (
    <div>
      <CreateForm formSubmitHandler={formSubmitHandler} />
      <ReportTable formSubmitHandler={formSubmitHandler}/>
    </div>

  );

}