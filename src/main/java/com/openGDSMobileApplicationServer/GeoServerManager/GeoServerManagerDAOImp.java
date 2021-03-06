package com.openGDSMobileApplicationServer.GeoServerManager;

import java.net.MalformedURLException; 
import java.util.List;

import it.geosolutions.geoserver.rest.GeoServerRESTPublisher;
import it.geosolutions.geoserver.rest.GeoServerRESTReader; 

import org.springframework.stereotype.Repository;


@Repository("geodao")
public class GeoServerManagerDAOImp implements GeoServerManagerDAO {
 
	static String RESTURL = "http://127.0.0.1/geoserver";
	static String RESTUSER = "admin";
	static String RESTPW = "geoserver";
	
	GeoServerRESTPublisher publisher; 
	GeoServerRESTReader reader ;
	
	GeoServerManagerDAOImp() throws MalformedURLException{
		super();
		publisher = new GeoServerRESTPublisher(RESTURL, RESTUSER, RESTPW);
		reader= new GeoServerRESTReader(RESTURL, RESTUSER, RESTPW);  
	}
			
	@Override
	public boolean geoserverCreateWorkspace(String name) {
		// TODO Auto-generated method stub
		return publisher.createWorkspace(name);
	} 
	@Override
	public List<String> getGeoserverLayerNames(String workspace) {
		// TODO Auto-generated method stub 
		System.out.println(reader.getLayers().getNames());
		return reader.getLayers().getNames();
	}

}