package fr.antoinelaunay.resultsanalysis.endpoint;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import fr.antoinelaunay.resultsanalysis.bean.Athlete;

/**
 * Created by herve on 17/08/14.
 */

@Api(name = "athleteapi",
        version = "v1",
        namespace = @ApiNamespace(ownerDomain = "antoinelaunay.fr",
                ownerName = "antoinelaunay.fr",
                packagePath=""))
public class AthleteEndPoint {

    public Athlete getAthlete() {
        Athlete found = new Athlete();
        found.setFname("Antoine");
        found.setLname("Launay");
        found.setCategory("K1H");
        return found;
    }
}
