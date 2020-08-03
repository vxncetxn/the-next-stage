import { useLocation, useParams } from "react-router-dom";

export default function useQuery() {
  return new URLSearchParams(useLocation().search);
}
