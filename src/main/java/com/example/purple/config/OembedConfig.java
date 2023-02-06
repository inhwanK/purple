package com.example.purple.config;

import ac.simons.oembed.OembedEndpoint;
import ac.simons.oembed.OembedService;
import net.sf.ehcache.CacheManager;
import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
@ConfigurationProperties(prefix = "some-app.oembed")
public class OembedConfig {
    private List<OembedEndpoint> endpoints;

    private boolean autodiscovery = false;

    private String cacheName;

    private Integer defaultCacheAge;

    @Bean
    public HttpClient httpClient() {
        return HttpClientBuilder.create().build();
    }

    @Bean
    public CacheManager cacheManager() {
        return CacheManager.create();
    }

    public List<OembedEndpoint> getEndpoints() {
        return endpoints;
    }

    public void setEndpoints(List<OembedEndpoint> endpoints) {
        this.endpoints = endpoints;
    }

    public boolean isAutodiscovery() {
        return autodiscovery;
    }

    public void setAutodiscovery(boolean autodiscovery) {
        this.autodiscovery = autodiscovery;
    }

    public String getCacheName() {
        return cacheName;
    }

    public void setCacheName(String cacheName) {
        this.cacheName = cacheName;
    }

    public Integer getDefaultCacheAge() {
        return defaultCacheAge;
    }

    public void setDefaultCacheAge(Integer defaultCacheAge) {
        this.defaultCacheAge = defaultCacheAge;
    }

    @Bean
    public OembedService oembedService(HttpClient httpClient, CacheManager cacheManager) {
        final OembedService oembedService = new OembedService(httpClient, cacheManager, endpoints, "some-app");
        oembedService.setAutodiscovery(this.autodiscovery);
        if (this.cacheName != null) {
            oembedService.setCacheName(cacheName);
        }
        if (this.defaultCacheAge != null) {
            oembedService.setDefaultCacheAge(defaultCacheAge);
        }
        return oembedService;
    }
}
