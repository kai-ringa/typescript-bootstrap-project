import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import axios from 'axios';

const url =
  'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League';

type AppProviderProps = {
  children: ReactNode;
};

type PlContext = {
  teams: any[];
  loading: any;
};

type TeamProps = {
  idTeam: string | number;
  strTeam: string;
  strTeamBadge: string;
  intFormedYear: string;
  strStadium: string;
  strKeywords: string;
};

const PlContext = createContext({} as PlContext);

const AppProvider = ({ children }: AppProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    setLoading(true);
    try {
      const resp = await axios(url);
      const data = await resp.data;
      const { teams } = data;
      if (teams) {
        const newTeams = teams.map((team: TeamProps) => {
          const {
            idTeam,
            strTeam,
            intFormedYear,
            strStadium,
            strTeamBadge,
            strKeywords,
          } = team;
          return {
            id: idTeam,
            name: strTeam,
            image: strTeamBadge,
            year: intFormedYear,
            stadium: strStadium,
            nickname: strKeywords,
          };
        });
        setTeams(newTeams);
      } else {
        setTeams([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <PlContext.Provider value={{ loading, teams }}>
      {children}
    </PlContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(PlContext);
};

export { PlContext, AppProvider };
