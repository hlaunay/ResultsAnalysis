package fr.antoinelaunay.resultsanalysis.parser;

import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

/**
 * Created by herve on 03/08/14.
 */
public class Parser {
    private Logger logger = LogManager.getLogger(Parser.class.getName());
    private String url;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void parse() throws IOException{
        Document doc = Jsoup.connect(this.url).get();
        Elements dd = doc.select(".detail-embarcation > dd");
        Element club = dd.get(0);
        String msg = "Club : " + club.text();
        logger.log(Level.DEBUG, msg);
    }
}
