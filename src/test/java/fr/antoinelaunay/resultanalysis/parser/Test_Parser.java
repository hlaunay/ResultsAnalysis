package fr.antoinelaunay.resultanalysis.parser;

import fr.antoinelaunay.resultsanalysis.parser.Parser;
import org.junit.Test;

import java.io.IOException;
import java.net.UnknownHostException;

/**
 * Created by herve on 03/08/14.
 */
public class Test_Parser {
    @Test(expected = UnknownHostException.class)
    public void wrongURL() throws IOException {
        Parser p = new Parser();
        p.setUrl("http://wrongUrl.fr");
        p.parse();
    }

    @Test
    public void wrightURL() throws IOException {
        String url = "http://www.ffck.org/eau_vive/slalom/classement/embarcations/voir/k1h-antoine-launay";
        Parser p = new Parser();
        p.setUrl(url);
        p.parse();
    }
}
