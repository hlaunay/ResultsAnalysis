package fr.antoinelaunay.resultsanalysis.endpoint;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiNamespace;
import fr.antoinelaunay.resultsanalysis.bean.Athlete;

/**
 * Created by herve on 17/08/14.
 */

@Api(name = "athleteapi",
        version = "v1",
        scopes = {Constants.EMAIL_SCOPE},
        clientIds = {Constants.WEB_CLIENT_ID, Constants.ANDROID_CLIENT_ID, Constants.IOS_CLIENT_ID},
        audiences = {Constants.ANDROID_AUDIENCE},
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
